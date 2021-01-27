import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import styles from './App.module.scss';
import { ErrorBoundary } from './components/common/errorBoundary/ErrorBoundary';
import { Countries } from './components/countries/Countries';
import { CountryDetails } from './components/countryDetails/CountryDetails';
import { HistoricalBox } from './components/countryDetails/details/historicalBox/HistoricalBox';
import { SummaryRetriever } from './components/summaryRetriever/SummaryRetriever';
import { CovidProvider } from './context/CovidContext';

function App() {
  return (
    <div className={styles.app_root}>
      <ErrorBoundary>
        <CovidProvider>
          <SummaryRetriever />
          <Router>
            <div className={styles.app_root__countries_container}>
              <Countries />
              <div className={styles.app_root__countries_container__details}>
                <Switch>
                  <Route path={`/:slug/details`}>
                    <CountryDetails />
                  </Route>
                  <Route path={`/:slug/historic`}>
                    <HistoricalBox />
                  </Route>
                </Switch>
              </div>
            </div>
          </Router>
        </CovidProvider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
