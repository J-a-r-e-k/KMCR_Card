import { useAppContext } from '../../../context/AppContext';
import { useState } from 'react';
import Style from './Nav.module.scss';
import { ArrowLeft, ArrowRight } from '../../Step/Icon/Arrow';

const Naw = () => {
  const [navMobile, setNavMobile] = useState(false);
  const { currentStep, setCurrentStep, steps } = useAppContext();

  const nawList = steps.map((step) => {
    return (
      <li>
        <p
          onClick={() => {
            setCurrentStep(step.id);
            setNavMobile(false);
          }}
          className={`${Style.text} ${currentStep == step.id ? Style.textActive : ''
            }`}
        >
          {step.label}
        </p>
      </li>
    );
  });

  return (
    <>
      <div className={`${Style.nav} ${navMobile ? Style.navActive : ''}`}>
        {navMobile ? (
          <div
            onClick={() => setNavMobile(false)}
            className={Style.wraNavActive}
          ></div>
        ) : (
          ''
        )}
        <div
          onClick={() => setNavMobile(!navMobile)}
          className={Style.mobileNav}
        >
          {navMobile ? <ArrowLeft /> : <ArrowRight />}
        </div>
        <ul className={`${Style.wrapNav} `}>{nawList}</ul>
      </div>
    </>
  );
};
export default Naw;
