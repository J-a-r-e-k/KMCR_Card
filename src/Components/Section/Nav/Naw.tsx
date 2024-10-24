import { useAppContext } from '../../../context/AppContext';
import Style from './Nav.module.scss';

const Naw = () => {
  //dodać zmienna klase nadajaca kolor elementowi który aktualnie jest aktwyny//
  // jeśli step jest == dodaj klase jesli nie to odejmij //
  // let activeStep =
  // const appContext = useAppContext();
  const { currentStep, setCurrentStep, steps } = useAppContext();

  const nawList = steps.map((step) => {
    return (
      <li>
        <p
          onClick={() => {
            setCurrentStep(step.id);
          }}
          className={`${Style.text} ${
            currentStep == step.id ? Style.textActive : ''
          }`}
        >
          {step.label}
        </p>
      </li>
    );
  });

  return (
    <div className={Style.nav}>
      <ul className={Style.wrapNav}>{nawList}</ul>
    </div>
  );
};

export default Naw;
