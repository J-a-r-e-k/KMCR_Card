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
  refusal: string;
};

type Interview = {
  interviewDescription: string;
};

type AssessHealthCondition = {
  openingEyes: number;
};

export enum FormStep {
  IncidentData = 'IncidentData',
  PatientData = 'PatientData',
  Statement = 'Statement',
  Interview = 'Interview',
  AssessHealthCondition = 'AssessHealthCondition',
}

type AppContextProps = {
  name: string;
  setUserName: (name: string) => void;
  incidentData: IncidentData;
  setIncidentData: (data: IncidentData) => void;
  patientData: PatientData;
  setPatientData: (patient: PatientData) => void;
  statement: Statement;
  setStatement: (statement: Statement) => void;
  interview: Interview;
  setInterview: (interview: Interview) => void;
  assessHealthCondition: AssessHealthCondition;
  setAssessHealthCondition: (
    assessHealthCondition: AssessHealthCondition
  ) => void;
  steps: Array<{ id: number; type: FormStep; label: string }>; // { id: number; type: FormStep; label: string }[]
  currentStep: number;
  setCurrentStep: (newSte: number) => void;
};

export const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [userName, setUserName] = useState('Jarosław');

  const [currentStep, setCurrentStep] = useState<number>(2);

  const [incidentData, setIncidentData] = useState({
    nrIncident: '',
    incidentDate: '',
    incidentPlace: '',
    incidentCity: '',
    incidentPost: '',
    incidentStreet: '',
    incidentNr: '',
    incidentNrApartment: '',
    companyName: '',
  });

  //obiekt do zapisania szmery strona: P & L//
  // szmerO ={
  //  left: true,
  //  rigt: false
  // }

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
    refusal: '',
  });

  const [interview, setInterview] = useState({
    interviewDescription: '',
  });

  const [assessHealthCondition, setAssessHealthCondition] = useState({
    openingEyes: 0,
  });

  const STEPS: { id: number; type: FormStep; label: string }[] = [
    {
      id: 0,
      type: FormStep.IncidentData,
      label: 'Zdarzenie',
    },
    {
      id: 1,
      type: FormStep.PatientData,
      label: 'Dane pacjenta',
    },
    {
      id: 2,
      type: FormStep.Statement,
      label: 'Statemtns',
    },
    {
      id: 3,
      type: FormStep.Interview,
      label: 'Interview',
    },
    {
      id: 4,
      type: FormStep.AssessHealthCondition,
      label: 'Asse',
    },
  ];

  console.log(statement);
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
        interview: interview,
        setInterview: setInterview,
        assessHealthCondition: assessHealthCondition,
        setAssessHealthCondition: setAssessHealthCondition,
        steps: STEPS,
        currentStep: currentStep,
        setCurrentStep: setCurrentStep,
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
