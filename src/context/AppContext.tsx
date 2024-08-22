import { createContext, useState } from 'react';

type AppContextProps = {
  name: string;
  setUserName: (name: string) => void;
  incidentData: string;
};

export const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [userName, setUserName] = useState('Jarosław');

  const [incidentData, setIncidentData] = useState({
    nrIncident: 'sfsdf',
    incidentDate: '',
    incidentPlace: '',
    incidentCity: '',
    incidentPost: '',
    incidentStreet: '',
    incidentNr: '',
    incidentNrApartment: '',
    companyName: '',
    patientGender: '',
  });

  return (
    <AppContext.Provider
      value={{
        name: userName,
        setUserName: setUserName,
        incidentData: incidentData,
        setIncidentData: setIncidentData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
