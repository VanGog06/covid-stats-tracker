import React, { useContext, useMemo } from 'react';

import { CovidContext } from '../../../../context/CovidContext';
import { CovidContextType } from '../../../../models/context/CovidContextType';
import { Collapsible } from '../../../common/collapsible/Collapsible';
import { ModalBox } from '../../../common/modalBox/ModalBox';
import { Detail } from '../detail/Detail';
import styles from './HistoricalBox.module.scss';

export const HistoricalBox = (): JSX.Element => {
  const { historicData }: CovidContextType = useContext(CovidContext);

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

  return <ModalBox title="Historic data" body={modalBody} />;
};
