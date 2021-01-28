import React, { useContext, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

import { CovidContext } from '../../../../context/CovidContext';
import { CountryDetailsParams } from '../../../../models/common/CountryDetailsParams';
import { DataState } from '../../../../models/common/DataState';
import { CovidContextType } from '../../../../models/context/CovidContextType';
import { ICountryDetails } from '../../../../models/country/ICountryDetails';
import { CovidApiService } from '../../../../services/CovidApiService';
import { Collapsible } from '../../../common/collapsible/Collapsible';
import { Error } from '../../../common/error/Error';
import { ModalBox } from '../../../common/modalBox/ModalBox';
import { Detail } from '../detail/Detail';
import styles from './HistoricalBox.module.scss';

export const HistoricalBox: React.FC = (): JSX.Element => {
  const {
    historicData,
    summary,
    changeShowModal,
    changeHistoricData,
  }: CovidContextType = useContext(CovidContext);
  const { slug } = useParams<CountryDetailsParams>();
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    (async (): Promise<void> => {
      if (summary.State === DataState.idle) {
        try {
          const fetchedDetails: ICountryDetails[] = await CovidApiService.getByCountry(
            slug
          );

          changeHistoricData(fetchedDetails.reverse());
          changeShowModal(true);
        } catch (err) {
          setHasError(true);
        }
      }
    })();
  }, [slug, summary, setHasError, changeHistoricData, changeShowModal]);

  const historicCollapsibles: JSX.Element[] = useMemo(() => {
    return historicData.map((hd) => {
      const body: JSX.Element = (
        <div className={styles.detail_container}>
          <Detail title="Confirmed" data={hd.Confirmed} />
          <Detail title="Active" data={hd.Active} />
          <Detail title="Deaths" data={hd.Deaths} />
          <Detail title="Recovered" data={hd.Recovered} />
        </div>
      );
      return (
        <Collapsible
          key={hd.ID}
          title={new Date(hd.Date).toDateString()}
          body={body}
        />
      );
    });
  }, [historicData]);

  const modalBody: JSX.Element = useMemo(
    (): JSX.Element => <>{historicCollapsibles}</>,
    [historicCollapsibles]
  );

  return hasError ? (
    <Error />
  ) : (
    <ModalBox title="Historic data" body={modalBody} />
  );
};
