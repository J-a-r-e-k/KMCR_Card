import { useAppContext } from '../../../context/AppContext';
import Interview from '../../Step/Interview/Interview';
import Style from './Form.module.scss';
import IncidentData from '../../Step/IncidentData/IncidentData';
import PatientData from '../../Step/PatientData/PatientData';
import Statement from '../../Step/Statement/Statement';
import AssessHealthCondition from '../../Step/AssessHealthCondition/AssessHealthCondition';
import AssessHealthConditionBreathEyes from '../../Step/AssessHealthConditionBreathEyes/AssessHealthConditionBreathEyes';
import InjuryAssessment from '../../Step/InjuryAssessment/InjuryAssessment';
import MeasuredParameters from '../../Step/MeasuredParameters/MeasuredParameters';
import DiagnosisCode from '../../Step/DiagnosisCode/DiagnosisCode';
import DescriptionStudyForm from '../../Step/DescriptionStudyForm/DescriptionStudyForm';
import ProvidedAssistanceActivities from '../../Step/ProvidedAssistanceActivities/ProvidedAssistanceActivities';
import AppliedDrugs from '../../Step/AppliedDrugs/AppliedDrugs';
import PatientRecommendations from '../../Step/PatientRecommendations/PatientRecommendations';

interface FormProps {
  step: number;
  stanStep: (stan: number) => void;
}

const Form: React.FC<FormProps> = () => {
  // function click(nr: number) {
  //   stanStep(step + nr);
  // }

  const { currentStep, steps, setCurrentStep } = useAppContext();

  const getStepComponent = () => {
    switch (currentStep) {
      case 0:
        return <IncidentData />;
      case 1:
        return <PatientData />;
      case 2:
        return <Statement />;
      case 3:
        return <Interview />;
      case 4:
        return <AssessHealthCondition />;
      case 5:
        return <AssessHealthConditionBreathEyes />;
      case 6:
        return <MeasuredParameters />;
      case 7:
        return <InjuryAssessment />;
      case 8:
        return <DescriptionStudyForm />;
      case 9:
        return <DiagnosisCode />;
      case 10:
        return <ProvidedAssistanceActivities />;
      case 11:
        return <AppliedDrugs />;
      case 12:
        return <PatientRecommendations />;
    }
  };

  return <div className={Style.form}>{getStepComponent()} </div>;
};

export default Form;
