import Interview from '../../Step/Interview/Interview';
import Style from './Form.module.scss';
import IncidentData from '../../Step/IncidentData/IncidentData';
import PatientData from '../../Step/PatientData/PatientData';
import Statement from '../../Step/Statement/Statement';
import AssessHealthCondition from '../../Step/AssessHealthCondition/AssessHealthCondition';
import { useAppContext } from '../../../context/AppContext';

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
    }
  };

  return <div className={Style.form}>{getStepComponent()}</div>;
};

export default Form;
