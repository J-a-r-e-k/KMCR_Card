import { useState } from 'react';
import './App.scss';
import Form from './Components/Section/Form/Form';
import Nav from './Components/Section/Nav/Naw';
import { AppProvider } from './context/AppContext';

function App() {
  const [step, setStep] = useState(0);
  function stanStep(stan: number) {
    setStep(stan);
  }
  return (
    <div>
      <AppProvider>
        <div className="globalCard">
          <Nav />
          <Form step={step} stanStep={stanStep} />
        </div>
      </AppProvider>
    </div>
  );
}
export default App;
