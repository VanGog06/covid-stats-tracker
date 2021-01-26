import './App.css';

import { Button } from './components/button/Button';
import { CovidProvider } from './context/CovidContext';

function App() {
  return (
    <div>
      <CovidProvider>
        <Button />
      </CovidProvider>
    </div>
  );
}

export default App;
