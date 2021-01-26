import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import styles from './App.module.scss';
import { ModalBox } from './components/common/modalBox/ModalBox';
import { CountryDetails } from './components/countryDetails/CountryDetails';
import { SummaryRetriever } from './components/summaryRetriever/SummaryRetriever';
import { CovidProvider } from './context/CovidContext';
import { CountriesList } from './countriesList/CountriesList';

function App() {
  return (
    <div className={styles.app_root}>
      <CovidProvider>
        <ModalBox />
        <SummaryRetriever />
        <Router>
          <div className={styles.app_root__countries_container}>
            <CountriesList />
            <Switch>
              <Route path={`/:slug/details`}>
                <CountryDetails />
              </Route>
            </Switch>
          </div>
        </Router>
      </CovidProvider>
    </div>
  );
}

export default App;
