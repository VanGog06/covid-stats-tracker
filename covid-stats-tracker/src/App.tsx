import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { CountryDetails } from './components/countryDetails/CountryDetails';
import { SummaryRetriever } from './components/summaryRetriever/SummaryRetriever';
import { CovidProvider } from './context/CovidContext';
import { CountriesList } from './countriesList/CountriesList';

function App() {
  return (
    <div>
      <CovidProvider>
        <SummaryRetriever />
        <Router>
          <CountriesList />
          <Switch>
            <Route path={`/:slug/details`}>
              <CountryDetails />
            </Route>
          </Switch>
        </Router>
      </CovidProvider>
    </div>
  );
}

export default App;
