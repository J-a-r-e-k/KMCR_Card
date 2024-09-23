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

export type Statement = {
  patientRefusalDate: string;
  refusal: string;
  withdrawalAidTime: string;
  withdrawalAidDescription: string;
};

type Interview = {
  interviewDescription: string;
};

export type AssessHealthCondition = {
  gcs: {
    openingEyes: string;
    reactWords: string;
    reakcjaMotoryczna: string;
    sumGcs: number;
  };
  rts: {
    breath: string;
    systolicBloodPressure: number;
    gcs: number;
  };
};
type AssessHealthConditionBreathEyes = {
  respiratorySystem: {
    dyspnea: string;
    cyanosis: string;
    apnea: string;

    respiratoryRate: number;
    normalBreathSounds: {
      left: boolean;
      right: boolean;
    };
    wheezing: {
      left: boolean;
      right: boolean;
    };
    whistling: {
      left: boolean;
      right: boolean;
    };
    crepitation: {
      left: boolean;
      right: boolean;
    };
    rales: {
      left: boolean;
      right: boolean;
    };
    noBreathSounds: {
      left: boolean;
      right: boolean;
    };
    otherSounds: {
      left: boolean;
      right: boolean;
      description: boolean;
    };
    oxygenSaturation: number;
  };
  pupil: {
    normal: {
      left: boolean;
      right: boolean;
    };
    slow: {
      left: boolean;
      right: boolean;
    };
    absent: {
      left: boolean;
      right: boolean;
    };
    regular: {
      left: boolean;
      right: boolean;
    };
    narrow: {
      left: boolean;
      right: boolean;
    };
    wide: {
      left: boolean;
      right: boolean;
    };
  };
  bloodPressure: {
    systolic: number;
    diastolic: number;
  };
  pulse: number;
  heartRhythm: string;
  symptomsClinical: {
    shock: {
      yes: string;
      no: string;
    };
    cardiacArrest: {
      yes: string;
      no: string;
    };
    meningealSigns: {
      yes: string;
      no: string;
    };
    seizures: {
      yes: string;
      no: string;
    };
    aphasia: {
      yes: string;
      no: string;
    };
    vomiting: {
      yes: string;
      no: string;
    };
    diarrhea: {
      yes: string;
      no: string;
    };
    bleeding: {
      yes: string;
      no: string;
    };
    swelling: {
      yes: string;
      no: string;
    };
    syncope: {
      yes: string;
      no: string;
    };
    hypothermia: {
      yes: string;
      no: string;
    };
    electrocution: {
      yes: string;
      no: string;
    };
  };
  skinAppearance: {
    normal: boolean;
    pale: boolean;
    erythema: boolean;
    jaundice: boolean;
    peripheralCyanosis: boolean;
    centralCyanosis: boolean;
  };
  skinMoisture: {
    normal: boolean;
    moist: boolean;
    dry: boolean;
  };
  temperature: {
    normal: boolean;
    cool: boolean;
    warm: boolean;
    bodyTemperature: number;
  };
};
type MeasuredParameters = {
  abdominalExamination: {
    normal: boolean;
    palpationTenderness: boolean;
    noPeristalsis: boolean;
    PeritonealSigns: boolean;
  };
  psychomotorEvaluation: {
    normal: boolean;
    slowed: boolean;
    agitated: boolean;
    aggressive: boolean;
  };
  heartTone: {
    normal: boolean;
    muffled: boolean;
    other: boolean;
  };
  breathOdor: {
    solvent: boolean;
    alcohol: boolean;
    other: boolean;
  };
  glucoseMonitoring: number;
  paresis: {
    paralysis: boolean;
    upperLimb: {
      left: string;
      right: string;
    };
    lowerLimb: {
      left: string;
      right: string;
    };
  };
  other: {
    pregnancy: string;
    delivery: string;
    infectiousDisease: string;
  };
  ekg: {
    sinusRhythm: boolean;
    supraventricularTachycardia: boolean;
    ventricularTachycardia: boolean;
    atrialFibrillationFlutter: boolean;
    avBlock: boolean;
    sVES: boolean;
    ves: boolean;
    vfVt: boolean;
    asystole: boolean;
    pea: boolean;
    pacemaker: boolean;
    stemi: boolean;
    myocardialInfarction: boolean;
    other: string;
  };
};
type InjuryAssessment = {
  front: {
    neck: string;
    face: string;
    rightFrontArm: string;
    leftFrontArm: string;
    rightAnteriorLeg: string;
    leftAnteriorLeg: string;
    chest: string;
    belly: string;
    reproductiveOrgans: string;
    hypogastrium: string;
    footRF: string;
    footLF: string;
    forearmLF: string;
    forearmRF: string;
    handLF: string;
    handRP: string;
    shoulderLF: string;
    shoulderPF: string;
    elbowLF: string;
    elbowRF: string;
    wristLF: string;
    wristRF: string;
    kneeRF: string;
    kneeLF: string;
    ankleLF: string;
    ankleRF: string;
    hipRF: string;
    hipLF: string;
    mouth: string;
    nose: string;
    rightEye: string;
    leftEye: string;
  };
  go: {
    aa: string;
  };
};

type DescriptionStudy = {
  description: string;
};

type DiagnosisCode = {
  primaryDiagnosis: {
    code: string;
    description: string;
  };
  secondDiagnosis: { code: string; description: string };
  thirdDiagnosis: { code: string; description: string };
  cos: string;
};

//SEKCJA OPIS //

export enum FormStep {
  IncidentData = 'IncidentData',
  PatientData = 'PatientData',
  Statement = 'Statement',
  Interview = 'Interview',
  AssessHealthCondition = 'AssessHealthCondition',
  AssessHealthConditionBreathEyes = 'AssessHealthConditionBreathEyes',
  MeasuredParameters = 'MeasuredParameters',
  InjuryAssessment = 'InjuryAssessment',
  DescriptionStudy = 'DescriptionStudy',
  DiagnosisCode = 'DiagnosisCode',
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
  measuredParameters: MeasuredParameters;
  setMeasuredParameters: (measuredParameters: MeasuredParameters) => void;
  injuryAssessment: InjuryAssessment;
  setInjuryAssessment: (injuryAssessment: InjuryAssessment) => void;
  descriptionStudy: DescriptionStudy;
  setDescriptionStudy: (descriptionStudy: DescriptionStudy) => void;
  diagnosisCode: DiagnosisCode;
  setDiagnosisCode: (diagnosisCode: DiagnosisCode) => void;

  steps: Array<{ id: number; type: FormStep; label: string }>; // { id: number; type: FormStep; label: string }[]
  currentStep: number;
  setCurrentStep: (newSte: number) => void;
};

export const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [userName, setUserName] = useState('Jarosław');

  const [currentStep, setCurrentStep] = useState<number>(7); //<<>>//

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
    withdrawalAidTime: '',
    withdrawalAidDescription: '',
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
  });

  const [assessHealthConditionBreathEyes, setAssessHealthConditionBreathEyes] =
    useState({
      respiratorySystem: {
        dyspnea: '',
        cyanosis: '',
        apnea: '',

        respiratoryRate: NaN,
        normalBreathSounds: {
          left: false,
          right: false,
        },
        wheezing: {
          left: false,
          right: false,
        },
        whistling: {
          left: false,
          right: false,
        },
        crepitation: {
          left: false,
          right: false,
        },
        rales: {
          left: false,
          right: false,
        },
        noBreathSounds: {
          left: false,
          right: false,
        },
        otherSounds: {
          left: false,
          right: false,
          description: false,
        },
        oxygenSaturation: NaN,
      },
      pupil: {
        normal: {
          left: false,
          right: false,
        },
        slow: {
          left: false,
          right: false,
        },
        absent: {
          left: false,
          right: false,
        },
        regular: {
          left: false,
          right: false,
        },
        narrow: {
          left: false,
          right: false,
        },
        wide: {
          left: false,
          right: false,
        },
      },
      bloodPressure: {
        systolic: NaN,
        diastolic: NaN,
      },
      pulse: 0,
      heartRhythm: '',

      symptomsClinical: {
        shock: {
          yes: '',
          no: '',
        },
        cardiacArrest: {
          yes: '',
          no: '',
        },
        meningealSigns: {
          yes: '',
          no: '',
        },
        seizures: {
          yes: '',
          no: '',
        },
        aphasia: {
          yes: '',
          no: '',
        },
        vomiting: {
          yes: '',
          no: '',
        },
        diarrhea: {
          yes: '',
          no: '',
        },
        bleeding: {
          yes: '',
          no: '',
        },
        swelling: {
          yes: '',
          no: '',
        },
        syncope: {
          yes: '',
          no: '',
        },
        hypothermia: {
          yes: '',
          no: '',
        },
        electrocution: {
          yes: '',
          no: '',
        },
      },

      skinAppearance: {
        normal: false,
        pale: false,
        erythema: false,
        jaundice: false,
        peripheralCyanosis: false,
        centralCyanosis: false,
      },
      skinMoisture: {
        normal: false,
        moist: false,
        dry: false,
      },
      temperature: {
        normal: false,
        cool: false,
        warm: false,
        bodyTemperature: NaN,
      },
    });
  const [measuredParameters, setMeasuredParameters] = useState({
    abdominalExamination: {
      normal: false,
      palpationTenderness: false,
      noPeristalsis: false,
      PeritonealSigns: false,
    },
    psychomotorEvaluation: {
      normal: false,
      slowed: false,
      agitated: false,
      aggressive: false,
    },
    heartTone: {
      normal: false,
      muffled: false,
      other: false,
    },
    breathOdor: {
      solvent: false,
      alcohol: false,
      other: false,
    },
    glucoseMonitoring: NaN,
    paresis: {
      paralysis: false,
      upperLimb: {
        left: '',
        right: '',
      },
      lowerLimb: {
        left: '',
        right: '',
      },
    },
    other: {
      pregnancy: '',
      delivery: '',
      infectiousDisease: '',
    },
    ekg: {
      sinusRhythm: false,
      supraventricularTachycardia: false,
      ventricularTachycardia: false,
      atrialFibrillationFlutter: false,
      avBlock: false,
      sVES: false,
      ves: false,
      vfVt: false,
      asystole: false,
      pea: false,
      pacemaker: false,
      stemi: false,
      myocardialInfarction: false,
      other: '',
    },
  });

  const [injuryAssessment, setInjuryAssessment] = useState({
    front: {
      neck: '', //szyja
      face: '', //twarz
      rightFrontArm: '', //ramiePP
      leftFrontArm: '', //ramieLP
      rightAnteriorLeg: '', // nogaPP
      leftAnteriorLeg: '', // nogaLP
      chest: 'fsdfs', //klata
      belly: '', // brzuch
      reproductiveOrgans: '', //Narządy Rozrodcze
      hypogastrium: '', // podbrzusze
      footRF: '', // stopa PP
      footLF: '', // stopa LP
      forearmLF: '', // przedramieLF
      forearmRF: '', //przedramiePF
      handLF: '', // dłoń LP
      handRP: '', // dłoń LP
      shoulderLF: '', // barkLP
      shoulderPF: '', // barkPP
      elbowLF: '', // łokiećLP
      elbowRF: '', // łokiećPP
      wristLF: '', // nadgarstekLP
      wristRF: '', // nadgarstekPP
      kneeRF: '', //kolanoPP
      kneeLF: '', //kolanoLP
      ankleLF: '', // kostkaLP
      ankleRF: '', // kostkaPP
      hipRF: '', // biodro PP
      hipLF: '', // biodro LP
      mouth: '', // usta
      nose: '', // nos
      rightEye: '', // prawe oko
      leftEye: '', // lewe oko
    },

    // back: {
    //   xxx: '', //
    //   xxx: '', //
    // },

    go: {
      aa: 'string',
    },
  });

  const [descriptionStudy, setDescriptionStudy] = useState({
    description: '',
  });

  const [diagnosisCode, setDiagnosisCode] = useState({
    primaryDiagnosis: { code: '', description: '' },
    secondDiagnosis: { code: '', description: '' },
    thirdDiagnosis: { code: '', description: '' },
    cos: '',
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
    {
      id: 6,
      type: FormStep.MeasuredParameters,
      label: 'Zmierzone parametry',
    },
    {
      id: 7,
      type: FormStep.InjuryAssessment,
      label: 'Obrażenia',
    },
    {
      id: 8,
      type: FormStep.DescriptionStudy,
      label: 'Opis',
    },
    {
      id: 9,
      type: FormStep.DiagnosisCode,
      label: 'Rozpoznanie',
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
        measuredParameters: measuredParameters,
        setMeasuredParameters: setMeasuredParameters,
        injuryAssessment: injuryAssessment,
        setInjuryAssessment: setInjuryAssessment,
        descriptionStudy: descriptionStudy,
        setDescriptionStudy: setDescriptionStudy,

        diagnosisCode: diagnosisCode,
        setDiagnosisCode: setDiagnosisCode,

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
