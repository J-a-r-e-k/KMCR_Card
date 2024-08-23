import { createContext, useContext, useState } from 'react';

type IncidentData = {
  nrIncident: string;
  incidentDate: string;
  incidentPlace: string;
  incidentCity: string;
  incidentPost: string;
  incidentStreet: string;
  incidentNr: string;
  incidentNrApartment: string;
  companyName: string;
};

type PatientData = {
  patientFirstName: string;
  patientLastName: string;
  patientCity: string;
  patientPostalCod: string;
  patientStreet: string;
  patientIdNumber: string;
  patientNrApartment: string;
  patientBirthDate: string;
  patientPesel: string;
  patientGender: string;

  legalGuardianFirstName: string;
  legalGuardianLastName: string;
  legalGuardianCity: string;
  legalGuardianPostalCod: string;
  legalGuardianStreet: string;
  legalGuardianIdNumber: string;
  legalGuardianNrApartment: string;
  legalGuardianTelephone: string;
};

type Statement = {
  patientRefusalDate: string;
};

type AppContextProps = {
  name: string;
  setUserName: (name: string) => void;
  incidentData: IncidentData;
  setIncidentData: (data: IncidentData) => void;
  patientData: PatientData;
  setPatientData: (patient: PatientData) => void;
  statement: Statement;
  setStatement: (statement: Statement) => void;
};

export const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [userName, setUserName] = useState('Jarosław');

  const [incidentData, setIncidentData] = useState({
    nrIncident: '',
    incidentDate: 'aaa',
    incidentPlace: '',
    incidentCity: '',
    incidentPost: '',
    incidentStreet: '',
    incidentNr: '',
    incidentNrApartment: '',
    companyName: '',
  });

  const [patientData, setPatientData] = useState({
    patientFirstName: '',
    patientLastName: '',
    patientCity: '',
    patientPostalCod: '',
    patientStreet: '',
    patientIdNumber: '',
    patientNrApartment: '',
    patientBirthDate: '',
    patientPesel: '',
    patientGender: 'man',
    legalGuardianFirstName: '',
    legalGuardianLastName: '',
    legalGuardianCity: '',
    legalGuardianPostalCod: '',
    legalGuardianStreet: '',
    legalGuardianIdNumber: '',
    legalGuardianNrApartment: '',
    legalGuardianTelephone: '',
  });

  const [statement, setStatement] = useState({
    patientRefusalDate: '',
  });

  return (
    <AppContext.Provider
      value={{
        name: userName,
        setUserName: setUserName,
        incidentData: incidentData,
        setIncidentData: setIncidentData,
        patientData: patientData,
        setPatientData: setPatientData,
        statement: statement,
        setStatement: setStatement,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useAppContext must be used within AppContextProvider');
  }

  return context;
};
