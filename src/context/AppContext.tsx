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
  gcs: {
    openingEyes: string;
    reactWords: string;
    reakcjaMotoryczna: string;
    sumGcs: number;
  };
  respiratorySystem: {
    dyspnea: string;
    cyanosis: string;
    apnea: string;

    respiratoryRate: number;
    normalBreathSounds: {
      left: string;
      right: string;
    };
    wheezing: {
      left: string;
      right: string;
    };
    whistling: {
      left: string;
      right: string;
    };
    crepitation: {
      left: string;
      right: string;
    };
    rales: {
      left: string;
      right: string;
    };
    noBreathSounds: {
      left: string;
      right: string;
    };
    otherSounds: {
      left: string;
      right: string;
      description: string;
    };
    oxygenSaturation: number;
  };

  rts: {
    breath: string;
    systolicBloodPressure: number;
    gcs: number;
  };
  pupil: {
    normal: {
      left: string;
      right: string;
    };
    slow: {
      left: string;
      right: string;
    };
    absent: {
      left: string;
      right: string;
    };
    regular: {
      left: string;
      right: string;
    };
    narrow: {
      left: string;
      right: string;
    };
    wide: {
      left: string;
      right: string;
    };
  };
  bloodPressure: {
    systolic: number;
    diastolic: number;
  };
  pulse: number;
  heartRhythm: string;
};
type AssessHealthConditionBreathEyes = {
  gcs: {
    bre: string;
  };
};

export enum FormStep {
  IncidentData = 'IncidentData',
  PatientData = 'PatientData',
  Statement = 'Statement',
  Interview = 'Interview',
  AssessHealthCondition = 'AssessHealthCondition',
  AssessHealthConditionBreathEyes = 'AssessHealthConditionBreathEyes',
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
  assessHealthConditionBreathEyes: AssessHealthConditionBreathEyes;
  setAssessHealthConditionBreathEyes: (
    assessHealthConditionBreathEyes: AssessHealthConditionBreathEyes
  ) => void;

  steps: Array<{ id: number; type: FormStep; label: string }>; // { id: number; type: FormStep; label: string }[]
  currentStep: number;
  setCurrentStep: (newSte: number) => void;
};

export const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [userName, setUserName] = useState('Jarosław');

  const [currentStep, setCurrentStep] = useState<number>(4);

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
    gcs: {
      openingEyes: '',
      reactWords: '',
      reakcjaMotoryczna: '',
      sumGcs: 0,
    },
    rts: {
      breath: '',
      systolicBloodPressure: NaN,
      gcs: NaN,
    },

    respiratorySystem: {
      dyspnea: '',
      cyanosis: '',
      apnea: '',

      respiratoryRate: NaN,
      normalBreathSounds: {
        left: '',
        right: '',
      },
      wheezing: {
        left: '',
        right: '',
      },
      whistling: {
        left: '',
        right: '',
      },
      crepitation: {
        left: '',
        right: '',
      },
      rales: {
        left: '',
        right: '',
      },
      noBreathSounds: {
        left: '',
        right: '',
      },
      otherSounds: {
        left: '',
        right: '',
        description: '',
      },
      oxygenSaturation: 0,
    },
    pupil: {
      normal: {
        left: '',
        right: '',
      },
      slow: {
        left: '',
        right: '',
      },
      absent: {
        left: '',
        right: '',
      },
      regular: {
        left: '',
        right: '',
      },
      narrow: {
        left: '',
        right: '',
      },
      wide: {
        left: '',
        right: '',
      },
    },
    bloodPressure: {
      systolic: NaN,
      diastolic: NaN,
    },
    pulse: 0,
    heartRhythm: '',
  });
  const [assessHealthConditionBreathEyes, setAssessHealthConditionBreathEyes] =
    useState({
      gcs: {
        bre: '',
      },
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
    {
      id: 5,
      type: FormStep.AssessHealthConditionBreathEyes,
      label: 'Oddech',
    },
  ];

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
        assessHealthConditionBreathEyes: assessHealthConditionBreathEyes,
        setAssessHealthConditionBreathEyes: setAssessHealthConditionBreathEyes,
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
