import Style from './InjuryAssessment.module.scss';
import { FormNavigation } from '../../Section/FormNavigation/FormNavigation';
import { Formik, Field } from 'formik';
import { useAppContext } from '../../../context/AppContext';
import { useState } from 'react';
import { InjurySVGBack, InjurySVGFront } from './InjurySVG';
import { Neck } from './BodyParts/Neck';
import { Face } from './BodyParts/Face';
import {
  ArmFrontRight,
  ForearmFrontRight,
  HandFrontRight,
} from './BodyParts/HandRight';
import {
  ArmFrontLeft,
  ElbowFrontLeft,
  ForearmFrontLeft,
  HandFrontLeft,
  ShoulderFrontLeft,
  WristFrontLeft,
} from './BodyParts/HandLeft';
import { RightFrontShin, RightFrontThigh } from './BodyParts/RightLowerLimb';
import { LeftFrontShin, LeftFrontThigh } from './BodyParts/LeftLowerLimb';
import { ChestLeft, ChestRigjt } from './BodyParts/Chest';
import { BellyLeft, BellyRight } from './BodyParts/Belly';
import { ReproductiveOrgans } from './BodyParts/ReproductiveOrgans';
import { Hypogastrium } from './BodyParts/Hypogastrium';
import { FootLF, FootRF } from './BodyParts/Foot';

const InjuryAssessment = () => {
  const appContext = useAppContext();
  // const appContext = useAppContext();

  // function cos(event) {
  //   // const centerX =
  //   //   event.target.closest('svg').getBoundingClientRect().left +
  //   //   event.target.getBBox().x;
  //   // console.log(event.target.getBBox().width);
  //   // const centerY =
  //   //   event.target.closest('svg').getBoundingClientRect().top +
  //   //   event.target.getBBox().y +
  //   //   event.target.getBBox().height / 2;

  //   const centerX = event.clientX;
  //   const centerY = event.clientY;

  //   const newDiv = document.createElement('div');
  //   newDiv.classList.add(Style.yyy);
  //   newDiv.textContent = 'Środek';
  //   newDiv.style.left = `${centerX}px`; // Ustawienie pozycji X
  //   newDiv.style.top = `${centerY}px`; // Ustawienie pozycji Y

  //   document.body.appendChild(newDiv);
  // }

  const [currentActiveElement, setCurrentAcitveElement] = useState<
    string | undefined
  >(undefined);

  const onRanaButtonClick = (type: string) => {
    if (!currentActiveElement) return;

    // zapiszesz do app Contenxt
    // currentActiveElement -> info o czesci ciala
    // type -> typ rany
    //frontAnkleRF
    // appContext.setInjuryAssessment({
    //   [currentActiveElement /* frontAnkleRF*/]: type
    // })
    appContext.setInjuryAssessment({
      ...appContext.injuryAssessment,
      [currentActiveElement]: type,
    });
  };

  function active(event, nameClass: string) {
    console.log(event.target.getBBox());

    if (currentActiveElement === nameClass) {
      setCurrentAcitveElement(undefined);
    } else {
      setCurrentAcitveElement(nameClass);
    }
  }
  return (
    <Formik
      initialValues={appContext.injuryAssessment}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        appContext.setInjuryAssessment(values);
      }}
    >
      {({ handleSubmit, submitForm }) => (
        <form onSubmit={handleSubmit}>
          <div className={Style.wrap}>
            OBRAŻENIA
            <div className={Style.wrap}>
              <InjurySVGFront>
                {/* front Neck */}
                <Neck
                  value={appContext.injuryAssessment.neck}
                  active={active}
                  currentActiveElement={currentActiveElement}
                />
                {/* face */}
                <Face
                  value={appContext.injuryAssessment.face}
                  active={active}
                  currentActiveElement={currentActiveElement}
                />
                {/* arm right front (ramie PP)*/}
                <ArmFrontRight
                  value={appContext.injuryAssessment.rightFrontArm}
                  active={active}
                  currentActiveElement={currentActiveElement}
                />
                {/* arm left front (ramie LP) */}
                <ArmFrontLeft
                  value={appContext.injuryAssessment.leftFrontArm}
                  active={active}
                  currentActiveElement={currentActiveElement}
                />
                {/*  shinRF (goleń PP)    */}
                <RightFrontShin
                  value={appContext.injuryAssessment.leftEye}
                  active={active}
                  currentActiveElement={currentActiveElement}
                />
                {/* thighRF   (udo PP)    */}
                <RightFrontThigh
                  value={appContext.injuryAssessment.thighRF}
                  active={active}
                  currentActiveElement={currentActiveElement}
                />
                {/*  shinLF (goleń LP)    */}
                <LeftFrontShin
                  value={appContext.injuryAssessment.shinLF}
                  active={active}
                  currentActiveElement={currentActiveElement}
                />

                {/* thighLF   (udo LP)    */}
                <LeftFrontThigh
                  value={appContext.injuryAssessment.thighLF}
                  active={active}
                  currentActiveElement={currentActiveElement}
                />
                {/* chestL (klata Lewa)  */}
                <ChestLeft
                  value={appContext.injuryAssessment.chestL}
                  active={active}
                  currentActiveElement={currentActiveElement}
                />
                {/* chestP (klata prawa)  */}
                <ChestRigjt
                  value={appContext.injuryAssessment.chestR}
                  active={active}
                  currentActiveElement={currentActiveElement}
                />
                {/* bellyL (brzuch L) */}
                <BellyLeft
                  value={appContext.injuryAssessment.bellyL}
                  active={active}
                  currentActiveElement={currentActiveElement}
                />
                {/* bellyR (brzuch P) */}
                <BellyRight
                  value={appContext.injuryAssessment.bellyR}
                  active={active}
                  currentActiveElement={currentActiveElement}
                />
                {/* reproductive Organs (Narządy Rozrodcze) */}
                <ReproductiveOrgans
                  value={appContext.injuryAssessment.reproductiveOrgans}
                  active={active}
                  currentActiveElement={currentActiveElement}
                />
                {/* hypogastrium (podbrzusze) */}
                <Hypogastrium
                  value={appContext.injuryAssessment.hypogastrium}
                  active={active}
                  currentActiveElement={currentActiveElement}
                />
                {/*  foot right front (stopa PP)  */}
                <FootRF
                  value={appContext.injuryAssessment.footRF}
                  active={active}
                  currentActiveElement={currentActiveElement}
                />
                {/*  foot left front (stopa LP) footLF */}
                <FootLF
                  value={appContext.injuryAssessment.footLF}
                  active={active}
                  currentActiveElement={currentActiveElement}
                />
                {/* forearm left front (przedramie LP) forearmLF */}
                <ForearmFrontLeft
                  value={appContext.injuryAssessment.forearmLF}
                  active={active}
                  currentActiveElement={currentActiveElement}
                />
                {/* hand left front (dłoń  LP) handLF */}
                <HandFrontLeft
                  value={appContext.injuryAssessment.handLF}
                  active={active}
                  currentActiveElement={currentActiveElement}
                />
                {/* forearm right front (przedramie PP ) */}
                <ForearmFrontRight
                  value={appContext.injuryAssessment.forearmRF}
                  active={active}
                  currentActiveElement={currentActiveElement}
                />
                {/* hand right front (dłoń  PP)  */}
                <HandFrontRight
                  value={appContext.injuryAssessment.handRF}
                  active={active}
                  currentActiveElement={currentActiveElement}
                />
                {/* shoulder left front (bark LP)*/}
                <ShoulderFrontLeft
                  value={appContext.injuryAssessment.shoulderLF}
                  active={active}
                  currentActiveElement={currentActiveElement}
                />
                {/* elbow left front (łokieć LP)*/}
                <ElbowFrontLeft
                  value={appContext.injuryAssessment.elbowLF}
                  active={active}
                  currentActiveElement={currentActiveElement}
                />
                {/* wrist left front (nadgarstek LP)*/}
                <WristFrontLeft
                  value={appContext.injuryAssessment.wristLF}
                  active={active}
                  currentActiveElement={currentActiveElement}
                />
                {/* */}
                {/* elbow right front (łokieć PP)*/}
                <g clip-path="url(#750023de58)">
                  <g clip-path="url(#44c6c83096)">
                    <path
                      fill="#ffffff"
                      d="M 106.519531 213.890625 L 147.546875 213.890625 L 147.546875 254.921875 L 106.519531 254.921875 Z M 106.519531 213.890625 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#0202d8ce53)">
                  <g clip-path="url(#7f4ce60ebf)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 106.518204, 213.891736)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.350729 -0.0014809 C 12.246561 -0.0014809 0.00176903 12.243311 0.00176903 27.352687 C 0.00176903 42.456854 12.246561 54.701646 27.350729 54.701646 C 42.454896 54.701646 54.704896 42.456854 54.704896 27.352687 C 54.704896 12.243311 42.454896 -0.0014809 27.350729 -0.0014809 Z M 27.350729 -0.0014809 "
                      stroke="#000000"
                      stroke-width="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                {/*  */}
                {/* wrist right front (nadgarstek PP)*/}
                <g clip-path="url(#ffdda970b3)">
                  <g clip-path="url(#10e5b7016d)">
                    <path
                      fill="#ffffff"
                      d="M 78.582031 302.917969 L 119.609375 302.917969 L 119.609375 343.949219 L 78.582031 343.949219 Z M 78.582031 302.917969 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#135f7ba77d)">
                  <g clip-path="url(#ec7a622e10)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 78.58121, 302.918971)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.350055 -0.00133643 C 12.245888 -0.00133643 0.00109544 12.243456 0.00109544 27.352831 C 0.00109544 42.456999 12.245888 54.701791 27.350055 54.701791 C 42.459431 54.701791 54.704223 42.456999 54.704223 27.352831 C 54.704223 12.243456 42.459431 -0.00133643 27.350055 -0.00133643 Z M 27.350055 -0.00133643 "
                      stroke="#000000"
                      stroke-width="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                {/* */}
                {/* shoulder right front (bark PP)*/}
                <g clip-path="url(#d5a4c652da)">
                  <g clip-path="url(#f0dd43d795)">
                    <path
                      fill="#ffffff"
                      d="M 131.304688 117.980469 L 172.335938 117.980469 L 172.335938 159.011719 L 131.304688 159.011719 Z M 131.304688 117.980469 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#3155fe1c50)">
                  <g clip-path="url(#bf24b94474)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 131.306407, 117.981658)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.351876 -0.00158589 C 12.247708 -0.00158589 -0.00229216 12.243206 -0.00229216 27.352582 C -0.00229216 42.456749 12.247708 54.701541 27.351876 54.701541 C 42.456043 54.701541 54.700835 42.456749 54.700835 27.352582 C 54.700835 12.243206 42.456043 -0.00158589 27.351876 -0.00158589 Z M 27.351876 -0.00158589 "
                      stroke="#000000"
                      stroke-width="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                {/* */}
                {/* knee right front ( kolano PP)*/}
                <g clip-path="url(#1fc430e116)">
                  <g clip-path="url(#60b60bdb35)">
                    <path
                      fill="#ffffff"
                      d="M 167.472656 411.863281 L 208.503906 411.863281 L 208.503906 452.890625 L 167.472656 452.890625 Z M 167.472656 411.863281 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#db35a512f8)">
                  <g clip-path="url(#7b234f2c6f)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 167.474511, 411.862802)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.351695 0.00063843 C 12.247528 0.00063843 -0.00247257 12.245431 -0.00247257 27.349598 C -0.00247257 42.458974 12.247528 54.703766 27.351695 54.703766 C 42.455863 54.703766 54.700655 42.458974 54.700655 27.349598 C 54.700655 12.245431 42.455863 0.00063843 27.351695 0.00063843 Z M 27.351695 0.00063843 "
                      stroke="#000000"
                      stroke-width="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                {/* */}
                {/* knee left front ( kolano LP)*/}
                <g clip-path="url(#1db4fc5999)">
                  <g clip-path="url(#b1a4939643)">
                    <path
                      fill="#ffffff"
                      d="M 245.007812 411.863281 L 286.035156 411.863281 L 286.035156 452.890625 L 245.007812 452.890625 Z M 245.007812 411.863281 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#9746e649e2)">
                  <g clip-path="url(#bdc44df25e)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 245.007602, 411.862802)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.34924 0.00063843 C 12.245073 0.00063843 0.000280972 12.245431 0.000280972 27.349598 C 0.000280972 42.458974 12.245073 54.703766 27.34924 54.703766 C 42.458616 54.703766 54.703408 42.458974 54.703408 27.349598 C 54.703408 12.245431 42.458616 0.00063843 27.34924 0.00063843 Z M 27.34924 0.00063843 "
                      stroke="#000000"
                      stroke-width="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                {/* */}
                {/* ankle left front ( kostka LP)*/}
                <g clip-path="url(#4abafcf1ab)">
                  <g clip-path="url(#1c684d1209)">
                    <path
                      fill="#ffffff"
                      d="M 265.523438 507.070312 L 306.550781 507.070312 L 306.550781 548.101562 L 265.523438 548.101562 Z M 265.523438 507.070312 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#adb256c0fa)">
                  <g clip-path="url(#ee72f07410)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 265.522107, 507.07219)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.350733 -0.00250382 C 12.246566 -0.00250382 0.00177361 12.247497 0.00177361 27.351664 C 0.00177361 42.455831 12.246566 54.700624 27.350733 54.700624 C 42.4549 54.700624 54.704901 42.455831 54.704901 27.351664 C 54.704901 12.247497 42.4549 -0.00250382 27.350733 -0.00250382 Z M 27.350733 -0.00250382 "
                      stroke="#000000"
                      stroke-width="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                {/* */}
                {/* ankle right front ( kostka PP)*/}
                <g clip-path="url(#dfa9fe64ad)">
                  <g clip-path="url(#3aa5364e49)">
                    <path
                      fill="#ffffff"
                      d="M 148.730469 507.441406 L 189.757812 507.441406 L 189.757812 548.46875 L 148.730469 548.46875 Z M 148.730469 507.441406 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#50ae86f351)">
                  <g clip-path="url(#286e6b8010)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 148.729741, 507.43975)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.34993 0.00220787 C 12.245762 0.00220787 0.000970228 12.247 0.000970228 27.351167 C 0.000970228 42.455335 12.245762 54.705335 27.34993 54.705335 C 42.459305 54.705335 54.704098 42.455335 54.704098 27.351167 C 54.704098 12.247 42.459305 0.00220787 27.34993 0.00220787 Z M 27.34993 0.00220787 "
                      stroke="#000000"
                      stroke-width="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                {/* */}
                {/* right Hip  front (biodro PP)*/}
                <g clip-path="url(#d752fd1893)">
                  <g clip-path="url(#f83b9f17a3)">
                    <path
                      fill="#ffffff"
                      d="M 164.578125 282.59375 L 205.609375 282.59375 L 205.609375 323.625 L 164.578125 323.625 Z M 164.578125 282.59375 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#223d863659)">
                  <g clip-path="url(#b33fedd655)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 164.578776, 282.594706)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.353299 -0.00127512 C 12.243924 -0.00127512 -0.000868537 12.243517 -0.000868537 27.352893 C -0.000868537 42.45706 12.243924 54.701852 27.353299 54.701852 C 42.457467 54.701852 54.702259 42.45706 54.702259 27.352893 C 54.702259 12.243517 42.457467 -0.00127512 27.353299 -0.00127512 Z M 27.353299 -0.00127512 "
                      stroke="#000000"
                      stroke-width="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                {/* */}
                {/* left Hip  front (biodro LP)*/}
                <g clip-path="url(#f345faf5e1)">
                  <g clip-path="url(#faed0a7b98)">
                    <path
                      fill="#ffffff"
                      d="M 249.917969 282.40625 L 290.949219 282.40625 L 290.949219 323.433594 L 249.917969 323.433594 Z M 249.917969 282.40625 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#eddb1595a3)">
                  <g clip-path="url(#c1a3837952)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 249.91912, 282.404451)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.352633 0.00239847 C 12.243257 0.00239847 -0.00153495 12.247191 -0.00153495 27.351358 C -0.00153495 42.455525 12.243257 54.705526 27.352633 54.705526 C 42.4568 54.705526 54.701592 42.455525 54.701592 27.351358 C 54.701592 12.247191 42.4568 0.00239847 27.352633 0.00239847 Z M 27.352633 0.00239847 "
                      stroke="#000000"
                      stroke-width="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                {/* mouth  (usta)*/}
                <g clip-path="url(#fdd5a5b94f)">
                  <g clip-path="url(#1f88497d54)">
                    <path
                      fill="#ffffff"
                      d="M 208.503906 66.929688 L 247.316406 66.929688 L 247.316406 82.648438 L 208.503906 82.648438 Z M 208.503906 66.929688 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#9305f4b69b)">
                  <g clip-path="url(#7afc1ed4c0)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 208.511432, 66.928383)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 37.333717 0.00173967 C 45.266009 0.00173967 51.698301 4.68924 51.698301 10.475698 C 51.698301 16.262157 45.266009 20.954866 37.333717 20.954866 L 14.364966 20.954866 C 6.432674 20.954866 0.000382162 16.262157 0.000382162 10.475698 C 0.000382162 4.68924 6.432674 0.00173967 14.364966 0.00173967 Z M 37.333717 0.00173967 "
                      stroke="#000000"
                      stroke-width="6"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                {/* nose */}
                <g clip-path="url(#b54ba73077)">
                  <g clip-path="url(#b7e620bd0b)">
                    <path
                      fill="#ffffff"
                      d="M 214.257812 33.519531 L 242.246094 33.519531 L 242.246094 62.382812 L 214.257812 62.382812 Z M 214.257812 33.519531 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#cd6f0095b0)">
                  <g clip-path="url(#48dea9573d)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 214.258717, 33.52062)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 18.655044 -0.00145211 L 37.311294 38.482922 L -0.00120558 38.482922 Z M 18.655044 -0.00145211 "
                      stroke="#000000"
                      stroke-width="6"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                {/* right Eye */}
                <g clip-path="url(#43947fb556)">
                  <g clip-path="url(#ac39f0d133)">
                    <path
                      fill="#ffffff"
                      d="M 200.296875 26.539062 L 218.761719 26.539062 L 218.761719 45.003906 L 200.296875 45.003906 Z M 200.296875 26.539062 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#5369eaec91)">
                  <g clip-path="url(#4a354b5cd0)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 200.298215, 26.540485)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 12.305506 -0.00189617 C 5.508631 -0.00189617 -0.00178651 5.508521 -0.00178651 12.305397 C -0.00178651 19.102273 5.508631 24.607481 12.305506 24.607481 C 19.102382 24.607481 24.607591 19.102273 24.607591 12.305397 C 24.607591 5.508521 19.102382 -0.00189617 12.305506 -0.00189617 Z M 12.305506 -0.00189617 "
                      stroke="#000000"
                      stroke-width="6"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                {/* left Eye */}
                <g clip-path="url(#8afa2e1fd1)">
                  <g clip-path="url(#d599276457)">
                    <path
                      fill="#ffffff"
                      d="M 238.0625 26.539062 L 256.523438 26.539062 L 256.523438 45.003906 L 238.0625 45.003906 Z M 238.0625 26.539062 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#d84fc26f46)">
                  <g clip-path="url(#d3afa015b5)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 238.061913, 26.540485)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 12.302867 -0.00189617 C 5.5112 -0.00189617 0.00078231 5.508521 0.00078231 12.305397 C 0.00078231 19.102273 5.5112 24.607481 12.302867 24.607481 C 19.099743 24.607481 24.61016 19.102273 24.61016 12.305397 C 24.61016 5.508521 19.099743 -0.00189617 12.302867 -0.00189617 Z M 12.302867 -0.00189617 "
                      stroke="#000000"
                      stroke-width="6"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                {/* P */}
                <g fill="#000000" fill-opacity="1">
                  <g transform="translate(119.118094, 101.951953)">
                    <g>
                      <path d="M 12.359375 -23.625 C 13.703125 -23.625 14.90625 -23.300781 15.96875 -22.65625 C 17.03125 -22.019531 17.867188 -21.160156 18.484375 -20.078125 C 19.097656 -19.003906 19.40625 -17.8125 19.40625 -16.5 C 19.40625 -15.1875 19.097656 -14.003906 18.484375 -12.953125 C 17.867188 -11.898438 17.03125 -11.070312 15.96875 -10.46875 C 14.90625 -9.863281 13.703125 -9.5625 12.359375 -9.5625 L 7.515625 -9.5625 L 7.515625 0 L 2.328125 0 L 2.328125 -23.625 Z M 11.53125 -13.859375 C 12.375 -13.859375 13.070312 -14.09375 13.625 -14.5625 C 14.175781 -15.039062 14.453125 -15.671875 14.453125 -16.453125 C 14.453125 -17.210938 14.175781 -17.835938 13.625 -18.328125 C 13.070312 -18.816406 12.375 -19.0625 11.53125 -19.0625 L 7.515625 -19.0625 L 7.515625 -13.859375 Z M 11.53125 -13.859375 " />
                    </g>
                  </g>
                </g>
                {/* R */}
                <g fill="#000000" fill-opacity="1">
                  <g transform="translate(321.887214, 101.951953)">
                    <g>
                      <path d="M 7.515625 -4.609375 L 15.359375 -4.609375 L 15.359375 0 L 2.328125 0 L 2.328125 -23.625 L 7.515625 -23.625 Z M 7.515625 -4.609375 " />
                    </g>
                  </g>
                </g>
                {/* FRONT */}
                <g fill="#000000" fill-opacity="1">
                  <g transform="translate(187.722093, 590.693443)">
                    <g>
                      <path d="M 8.421875 -18.921875 C 10.859375 -18.921875 12.640625 -18.394531 13.765625 -17.34375 C 14.890625 -16.289062 15.453125 -14.847656 15.453125 -13.015625 C 15.453125 -12.191406 15.328125 -11.398438 15.078125 -10.640625 C 14.828125 -9.890625 14.414062 -9.21875 13.84375 -8.625 C 13.28125 -8.039062 12.53125 -7.578125 11.59375 -7.234375 C 10.65625 -6.898438 9.492188 -6.734375 8.109375 -6.734375 L 6.390625 -6.734375 L 6.390625 0 L 2.375 0 L 2.375 -18.921875 Z M 8.21875 -15.625 L 6.390625 -15.625 L 6.390625 -10.015625 L 7.71875 -10.015625 C 8.46875 -10.015625 9.117188 -10.113281 9.671875 -10.3125 C 10.222656 -10.507812 10.648438 -10.816406 10.953125 -11.234375 C 11.253906 -11.660156 11.40625 -12.207031 11.40625 -12.875 C 11.40625 -13.800781 11.144531 -14.488281 10.625 -14.9375 C 10.101562 -15.394531 9.300781 -15.625 8.21875 -15.625 Z M 8.21875 -15.625 " />
                    </g>
                  </g>
                </g>
                <g fill="#000000" fill-opacity="1">
                  <g transform="translate(204.359776, 590.693443)">
                    <g>
                      <path d="M 10.140625 -14.734375 C 10.335938 -14.734375 10.566406 -14.722656 10.828125 -14.703125 C 11.097656 -14.679688 11.316406 -14.65625 11.484375 -14.625 L 11.1875 -10.921875 C 11.050781 -10.960938 10.863281 -10.992188 10.625 -11.015625 C 10.394531 -11.035156 10.191406 -11.046875 10.015625 -11.046875 C 9.503906 -11.046875 9.007812 -10.976562 8.53125 -10.84375 C 8.050781 -10.71875 7.617188 -10.507812 7.234375 -10.21875 C 6.859375 -9.9375 6.5625 -9.5625 6.34375 -9.09375 C 6.125 -8.625 6.015625 -8.046875 6.015625 -7.359375 L 6.015625 0 L 2.078125 0 L 2.078125 -14.46875 L 5.0625 -14.46875 L 5.640625 -12.03125 L 5.828125 -12.03125 C 6.117188 -12.519531 6.476562 -12.96875 6.90625 -13.375 C 7.332031 -13.789062 7.816406 -14.117188 8.359375 -14.359375 C 8.910156 -14.609375 9.503906 -14.734375 10.140625 -14.734375 Z M 10.140625 -14.734375 " />
                    </g>
                  </g>
                </g>
                <g fill="#000000" fill-opacity="1">
                  <g transform="translate(216.391693, 590.693443)">
                    <g>
                      <path d="M 12.140625 0 L 0.71875 0 L 0.71875 -2.328125 L 7.421875 -11.453125 L 1.109375 -11.453125 L 1.109375 -14.46875 L 11.90625 -14.46875 L 11.90625 -11.90625 L 5.390625 -3.015625 L 12.140625 -3.015625 Z M 12.140625 0 " />
                    </g>
                  </g>
                </g>
                <g fill="#000000" fill-opacity="1">
                  <g transform="translate(229.316307, 590.693443)">
                    <g>
                      <path d="M 15.21875 -7.265625 C 15.21875 -6.054688 15.054688 -4.984375 14.734375 -4.046875 C 14.410156 -3.117188 13.9375 -2.332031 13.3125 -1.6875 C 12.695312 -1.039062 11.957031 -0.550781 11.09375 -0.21875 C 10.226562 0.101562 9.253906 0.265625 8.171875 0.265625 C 7.148438 0.265625 6.210938 0.101562 5.359375 -0.21875 C 4.515625 -0.550781 3.78125 -1.039062 3.15625 -1.6875 C 2.53125 -2.332031 2.046875 -3.117188 1.703125 -4.046875 C 1.359375 -4.984375 1.1875 -6.054688 1.1875 -7.265625 C 1.1875 -8.867188 1.472656 -10.222656 2.046875 -11.328125 C 2.617188 -12.441406 3.429688 -13.285156 4.484375 -13.859375 C 5.535156 -14.441406 6.789062 -14.734375 8.25 -14.734375 C 9.601562 -14.734375 10.800781 -14.441406 11.84375 -13.859375 C 12.894531 -13.285156 13.71875 -12.441406 14.3125 -11.328125 C 14.914062 -10.222656 15.21875 -8.867188 15.21875 -7.265625 Z M 5.21875 -7.265625 C 5.21875 -6.304688 5.316406 -5.503906 5.515625 -4.859375 C 5.722656 -4.210938 6.046875 -3.722656 6.484375 -3.390625 C 6.929688 -3.066406 7.507812 -2.90625 8.21875 -2.90625 C 8.914062 -2.90625 9.484375 -3.066406 9.921875 -3.390625 C 10.359375 -3.722656 10.675781 -4.210938 10.875 -4.859375 C 11.082031 -5.503906 11.1875 -6.304688 11.1875 -7.265625 C 11.1875 -8.222656 11.082031 -9.015625 10.875 -9.640625 C 10.675781 -10.273438 10.351562 -10.753906 9.90625 -11.078125 C 9.46875 -11.398438 8.894531 -11.5625 8.1875 -11.5625 C 7.144531 -11.5625 6.390625 -11.203125 5.921875 -10.484375 C 5.453125 -9.765625 5.21875 -8.691406 5.21875 -7.265625 Z M 13.3125 -20.296875 L 13.3125 -20.03125 C 13.0625 -19.789062 12.734375 -19.492188 12.328125 -19.140625 C 11.921875 -18.785156 11.484375 -18.414062 11.015625 -18.03125 C 10.546875 -17.644531 10.085938 -17.273438 9.640625 -16.921875 C 9.191406 -16.578125 8.800781 -16.289062 8.46875 -16.0625 L 5.84375 -16.0625 L 5.84375 -16.40625 C 6.125 -16.738281 6.453125 -17.128906 6.828125 -17.578125 C 7.203125 -18.023438 7.578125 -18.488281 7.953125 -18.96875 C 8.328125 -19.457031 8.640625 -19.898438 8.890625 -20.296875 Z M 13.3125 -20.296875 " />
                    </g>
                  </g>
                </g>
                <g fill="#000000" fill-opacity="1">
                  <g transform="translate(245.721114, 590.693443)">
                    <g>
                      <path d="M 6.65625 0.265625 C 5.039062 0.265625 3.722656 -0.363281 2.703125 -1.625 C 1.691406 -2.894531 1.1875 -4.753906 1.1875 -7.203125 C 1.1875 -9.679688 1.695312 -11.554688 2.71875 -12.828125 C 3.75 -14.097656 5.09375 -14.734375 6.75 -14.734375 C 7.445312 -14.734375 8.054688 -14.640625 8.578125 -14.453125 C 9.109375 -14.265625 9.5625 -14.007812 9.9375 -13.6875 C 10.320312 -13.375 10.648438 -13.015625 10.921875 -12.609375 L 11.046875 -12.609375 C 10.992188 -12.890625 10.929688 -13.296875 10.859375 -13.828125 C 10.785156 -14.367188 10.75 -14.925781 10.75 -15.5 L 10.75 -20.140625 L 14.71875 -20.140625 L 14.71875 0 L 11.6875 0 L 10.921875 -1.875 L 10.75 -1.875 C 10.5 -1.476562 10.1875 -1.117188 9.8125 -0.796875 C 9.4375 -0.472656 8.988281 -0.210938 8.46875 -0.015625 C 7.957031 0.171875 7.351562 0.265625 6.65625 0.265625 Z M 8.03125 -2.890625 C 9.113281 -2.890625 9.875 -3.207031 10.3125 -3.84375 C 10.757812 -4.488281 11 -5.457031 11.03125 -6.75 L 11.03125 -7.1875 C 11.03125 -8.59375 10.8125 -9.664062 10.375 -10.40625 C 9.945312 -11.15625 9.144531 -11.53125 7.96875 -11.53125 C 7.09375 -11.53125 6.410156 -11.15625 5.921875 -10.40625 C 5.429688 -9.65625 5.1875 -8.570312 5.1875 -7.15625 C 5.1875 -5.738281 5.429688 -4.671875 5.921875 -3.953125 C 6.421875 -3.242188 7.125 -2.890625 8.03125 -2.890625 Z M 8.03125 -2.890625 " />
                    </g>
                  </g>
                </g>
              </InjurySVGFront>

              <InjurySVGBack>
                <g clip-path="url(#5e74fc53b2)">
                  <path
                    fill="#ffffff"
                    d="M 205.609375 76.988281 L 249.917969 76.988281 L 249.917969 125.972656 L 205.609375 125.972656 Z M 205.609375 76.988281 "
                    fill-opacity="1"
                    fill-rule="nonzero"
                  />
                </g>
                <g clip-path="url(#b2e2bd7ee8)">
                  <path
                    stroke-linecap="butt"
                    transform="matrix(0.75, 0, 0, 0.75, 205.608479, 76.989334)"
                    fill="none"
                    stroke-linejoin="miter"
                    d="M 0.00119513 -0.00140302 L 59.074111 -0.00140302 L 59.074111 65.201721 L 0.00119513 65.201721 Z M 0.00119513 -0.00140302 "
                    stroke="#000000"
                    stroke-width="8"
                    stroke-opacity="1"
                    stroke-miterlimit="4"
                  />
                </g>
                <g clip-path="url(#851bbb445d)">
                  <path
                    fill="#ffffff"
                    d="M 220.609375 76.988281 L 234.917969 76.988281 L 234.917969 125.90625 L 220.609375 125.90625 Z M 220.609375 76.988281 "
                    fill-opacity="1"
                    fill-rule="nonzero"
                  />
                </g>
                <g clip-path="url(#1d204dfbb4)">
                  <path
                    stroke-linecap="butt"
                    transform="matrix(0.75, 0, 0, 0.75, 220.607832, 76.991729)"
                    fill="none"
                    stroke-linejoin="miter"
                    d="M 0.00205678 0.000611713 L 19.080181 0.000611713 L 19.080181 65.198527 L 0.00205678 65.198527 Z M 0.00205678 0.000611713 "
                    stroke="#000000"
                    stroke-width="8"
                    stroke-opacity="1"
                    stroke-miterlimit="4"
                  />
                </g>
                <g clip-path="url(#494a5d8c5a)">
                  <g clip-path="url(#09b09af80e)">
                    <path
                      fill="#ffffff"
                      d="M 183.253906 3.242188 L 273.25 3.242188 L 273.25 93.238281 L 183.253906 93.238281 Z M 183.253906 3.242188 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#935d0cb807)">
                  <g clip-path="url(#4054e35d90)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 183.254772, 3.241426)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 59.99364 0.00101518 C 26.858222 0.00101518 -0.00115381 26.860391 -0.00115381 59.990601 C -0.00115381 93.126019 26.858222 119.985395 59.99364 119.985395 C 93.12385 119.985395 119.983226 93.126019 119.983226 59.990601 C 119.983226 26.860391 93.12385 0.00101518 59.99364 0.00101518 Z M 59.99364 0.00101518 "
                      stroke="#000000"
                      stroke-width="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                <g clip-path="url(#10d306f873)">
                  <g clip-path="url(#5728b62d3f)">
                    <path
                      fill="#ffffff"
                      d="M 138.230469 144.542969 L 172.296875 155.332031 L 145.191406 240.898438 L 111.125 230.105469 Z M 138.230469 144.542969 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#17078d49f0)">
                  <g clip-path="url(#cb0d255898)">
                    <g clip-path="url(#1b7750cacf)">
                      <path
                        stroke-linecap="butt"
                        transform="matrix(0.714984, 0.226489, -0.226489, 0.714984, 138.228861, 144.545551)"
                        fill="none"
                        stroke-linejoin="miter"
                        d="M 0.00257718 0.00103592 L 47.643046 -0.000319485 L 47.643013 119.659203 L 0.00254464 119.660558 Z M 0.00257718 0.00103592 "
                        stroke="#000000"
                        stroke-width="8"
                        stroke-opacity="1"
                        stroke-miterlimit="4"
                      />
                    </g>
                  </g>
                </g>
                <g clip-path="url(#26998d900c)">
                  <g clip-path="url(#6a7e672019)">
                    <path
                      fill="#ffffff"
                      d="M 281.125 154.792969 L 315.359375 144.539062 L 341.148438 230.65625 L 306.914062 240.910156 Z M 281.125 154.792969 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#56b1f142c0)">
                  <g clip-path="url(#9ba8a0c169)">
                    <g clip-path="url(#1de166b800)">
                      <path
                        stroke-linecap="butt"
                        transform="matrix(0.718476, -0.215157, 0.215157, 0.718476, 281.126736, 154.796497)"
                        fill="none"
                        stroke-linejoin="miter"
                        d="M -0.0023621 -0.000181799 L 47.640526 0.000782372 L 47.639718 119.828867 L 0.00181932 119.829397 Z M -0.0023621 -0.000181799 "
                        stroke="#000000"
                        stroke-width="8"
                        stroke-opacity="1"
                        stroke-miterlimit="4"
                      />
                    </g>
                  </g>
                </g>
                <g clip-path="url(#0a0bc0dae3)">
                  <g clip-path="url(#edfd278c91)">
                    <g clip-path="url(#f5a72c6769)">
                      <path
                        fill="#ffffff"
                        d="M 196.179688 175.46875 L 256.523438 184.984375 L 200.3125 541.394531 L 139.96875 531.878906 Z M 196.179688 175.46875 "
                        fill-opacity="1"
                        fill-rule="nonzero"
                      />
                    </g>
                  </g>
                </g>
                <g clip-path="url(#347e6dc209)">
                  <g clip-path="url(#557f668edf)">
                    <g clip-path="url(#fb754d320c)">
                      <g clip-path="url(#c0a9c694b0)">
                        <path
                          stroke-linecap="butt"
                          transform="matrix(0.740842, 0.116846, -0.116846, 0.740842, 196.180129, 175.468973)"
                          fill="none"
                          stroke-linejoin="miter"
                          d="M 40.725646 -0.00141965 L 81.454879 183.751086 L 65.898371 481.070829 L 15.555215 481.07556 L 0.00233033 183.753521 Z M 40.725646 -0.00141965 "
                          stroke="#000000"
                          stroke-width="8"
                          stroke-opacity="1"
                          stroke-miterlimit="4"
                        />
                      </g>
                    </g>
                  </g>
                </g>
                <g clip-path="url(#76a51c9feb)">
                  <g clip-path="url(#698e556de3)">
                    <g clip-path="url(#c7951c1fc4)">
                      <path
                        fill="#ffffff"
                        d="M 186.460938 184.046875 L 262.085938 195.972656 L 223.183594 442.632812 L 147.558594 430.707031 Z M 186.460938 184.046875 "
                        fill-opacity="1"
                        fill-rule="nonzero"
                      />
                    </g>
                  </g>
                </g>
                <g clip-path="url(#20a7f359a5)">
                  <g clip-path="url(#83429ad880)">
                    <g clip-path="url(#f297614157)">
                      <g clip-path="url(#2fb654a7d5)">
                        <path
                          stroke-linecap="butt"
                          transform="matrix(0.740842, 0.116846, -0.116846, 0.740842, 186.460305, 184.061731)"
                          fill="none"
                          stroke-linejoin="miter"
                          d="M 51.030002 -0.00129656 L 102.063435 127.194846 L 82.571931 333.005022 L 19.494272 333.004074 L -0.000539318 127.194868 Z M 51.030002 -0.00129656 "
                          stroke="#000000"
                          stroke-width="8"
                          stroke-opacity="1"
                          stroke-miterlimit="4"
                        />
                      </g>
                    </g>
                  </g>
                </g>
                <g clip-path="url(#447ee3fa41)">
                  <g clip-path="url(#9ade081514)">
                    <g clip-path="url(#dfc9a83958)">
                      <path
                        fill="#ffffff"
                        d="M 197.503906 185.242188 L 257.808594 175.46875 L 315.546875 531.632812 L 255.242188 541.410156 Z M 197.503906 185.242188 "
                        fill-opacity="1"
                        fill-rule="nonzero"
                      />
                    </g>
                  </g>
                </g>
                <g clip-path="url(#d628107e39)">
                  <g clip-path="url(#26224afee0)">
                    <g clip-path="url(#707db0fe9f)">
                      <g clip-path="url(#975b2c1c2d)">
                        <path
                          stroke-linecap="butt"
                          transform="matrix(0.740335, -0.120019, 0.120019, 0.740335, 197.504524, 185.244929)"
                          fill="none"
                          stroke-linejoin="miter"
                          d="M 40.727461 -0.00186825 L 81.450988 183.752803 L 65.895431 481.074308 L 15.554579 481.070518 L -0.0000822831 183.755035 Z M 40.727461 -0.00186825 "
                          stroke="#000000"
                          stroke-width="8"
                          stroke-opacity="1"
                          stroke-miterlimit="4"
                        />
                      </g>
                    </g>
                  </g>
                </g>
                <g clip-path="url(#51075e62ce)">
                  <g clip-path="url(#83d1956872)">
                    <g clip-path="url(#555f2fbd99)">
                      <path
                        fill="#ffffff"
                        d="M 189.757812 182.222656 L 264.449219 170.113281 L 306.542969 429.773438 L 231.855469 441.882812 Z M 189.757812 182.222656 "
                        fill-opacity="1"
                        fill-rule="nonzero"
                      />
                    </g>
                  </g>
                </g>
                <g clip-path="url(#c992d7b920)">
                  <g clip-path="url(#6a3a8bbafb)">
                    <g clip-path="url(#f10419032c)">
                      <g clip-path="url(#fcf7339f0f)">
                        <path
                          stroke-linecap="butt"
                          transform="matrix(0.740335, -0.120019, 0.120019, 0.740335, 189.760919, 182.231364)"
                          fill="none"
                          stroke-linejoin="miter"
                          d="M 50.437137 0.00236076 L 100.87602 133.98279 L 81.607874 350.771304 L 19.263213 350.768485 L -0.00174271 133.98036 Z M 50.437137 0.00236076 "
                          stroke="#000000"
                          stroke-width="8"
                          stroke-opacity="1"
                          stroke-miterlimit="4"
                        />
                      </g>
                    </g>
                  </g>
                </g>
                <g clip-path="url(#f0f1abc63e)">
                  <g clip-path="url(#ff8a3b6101)">
                    <path
                      fill="#ffffff"
                      d="M 139.96875 121.957031 L 315.34375 121.957031 L 315.34375 288.238281 L 139.96875 288.238281 Z M 139.96875 121.957031 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#bab8bc4a86)">
                  <g clip-path="url(#6ece57af0f)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 139.968143, 121.959032)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 58.526853 221.700467 L 175.58415 221.700467 L 234.110194 0.0025412 L 0.000809263 0.0025412 Z M 58.526853 221.700467 "
                      stroke="#000000"
                      stroke-width="6"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                <g clip-path="url(#c271ff90dd)">
                  <g clip-path="url(#7b38ee4782)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 140.231214, 121.960474)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 59.999009 234.130836 L 114.332344 234.130836 L 174.327138 0.000618005 L -0.000993989 0.000618005 Z M 59.999009 234.130836 "
                      stroke="#000000"
                      stroke-width="6"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                <g clip-path="url(#6c659188b6)">
                  <path
                    fill="#ffffff"
                    d="M 221.097656 121.957031 L 235.40625 121.957031 L 235.40625 254.617188 L 221.097656 254.617188 Z M 221.097656 121.957031 "
                    fill-opacity="1"
                    fill-rule="nonzero"
                  />
                </g>
                <g clip-path="url(#ec8c710352)">
                  <path
                    stroke-linecap="butt"
                    transform="matrix(0.75, 0, 0, 0.75, 221.096796, 121.964276)"
                    fill="none"
                    stroke-linejoin="miter"
                    d="M 0.00114648 0.000757538 L 19.079271 0.000757538 L 19.079271 176.870545 L 0.00114648 176.870545 Z M 0.00114648 0.000757538 "
                    stroke="#000000"
                    stroke-width="8"
                    stroke-opacity="1"
                    stroke-miterlimit="4"
                  />
                </g>
                <g clip-path="url(#77e495c9b3)">
                  <path
                    fill="#ffffff"
                    d="M 172.296875 247.085938 L 281.191406 247.085938 L 281.191406 299.386719 L 172.296875 299.386719 Z M 172.296875 247.085938 "
                    fill-opacity="1"
                    fill-rule="nonzero"
                  />
                </g>
                <g clip-path="url(#c12b12bd72)">
                  <path
                    stroke-linecap="butt"
                    transform="matrix(0.75, 0, 0, 0.75, 172.297272, 247.086749)"
                    fill="none"
                    stroke-linejoin="miter"
                    d="M -0.000529432 -0.00108154 L 145.093227 -0.00108154 L 145.093227 69.733296 L -0.000529432 69.733296 Z M -0.000529432 -0.00108154 "
                    stroke="#000000"
                    stroke-width="6"
                    stroke-opacity="1"
                    stroke-miterlimit="4"
                  />
                </g>
                <g clip-path="url(#f15559cdbb)">
                  <path
                    fill="#ffffff"
                    d="M 220.609375 247.085938 L 234.917969 247.085938 L 234.917969 299.410156 L 220.609375 299.410156 Z M 220.609375 247.085938 "
                    fill-opacity="1"
                    fill-rule="nonzero"
                  />
                </g>
                <g clip-path="url(#4016b10a4c)">
                  <path
                    stroke-linecap="butt"
                    transform="matrix(0.75, 0, 0, 0.75, 220.607832, 247.089823)"
                    fill="none"
                    stroke-linejoin="miter"
                    d="M 0.00205678 0.00002759 L 19.080181 0.00002759 L 19.080181 69.723984 L 0.00205678 69.723984 Z M 0.00205678 0.00002759 "
                    stroke="#000000"
                    stroke-width="6"
                    stroke-opacity="1"
                    stroke-miterlimit="4"
                  />
                </g>
                <g clip-path="url(#f9bb4a4620)">
                  <g clip-path="url(#36c1f413dc)">
                    <path
                      fill="#ffffff"
                      d="M 193.097656 327.886719 L 261.796875 327.886719 L 261.796875 360.578125 L 193.097656 360.578125 Z M 193.097656 327.886719 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#135a717519)">
                  <g clip-path="url(#a5b20dc211)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 193.098654, 327.887819)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 45.779924 43.576663 L 91.555971 -0.00146675 L -0.00133085 -0.00146675 Z M 45.779924 43.576663 "
                      stroke="#000000"
                      stroke-width="6"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                <g clip-path="url(#5c52b86c1e)">
                  <path
                    fill="#ffffff"
                    d="M 192.378906 294.238281 L 260.988281 294.238281 L 260.988281 330.90625 L 192.378906 330.90625 Z M 192.378906 294.238281 "
                    fill-opacity="1"
                    fill-rule="nonzero"
                  />
                </g>
                <g clip-path="url(#7a17289b17)">
                  <path
                    stroke-linecap="butt"
                    transform="matrix(0.75, 0, 0, 0.75, 192.379797, 294.238044)"
                    fill="none"
                    stroke-linejoin="miter"
                    d="M -0.00118742 0.000316006 L 91.545691 0.000316006 L 91.545691 48.890943 L -0.00118742 48.890943 Z M -0.00118742 0.000316006 "
                    stroke="#000000"
                    stroke-width="8"
                    stroke-opacity="1"
                    stroke-miterlimit="4"
                  />
                </g>
                <g clip-path="url(#f7a0fc9af1)">
                  <path
                    fill="#ffffff"
                    d="M 93.664062 528.238281 L 188.03125 528.238281 L 188.03125 561.378906 L 93.664062 561.378906 Z M 93.664062 528.238281 "
                    fill-opacity="1"
                    fill-rule="nonzero"
                  />
                </g>
                <g clip-path="url(#5866057bd1)">
                  <path
                    stroke-linecap="butt"
                    transform="matrix(0.75, 0, 0, 0.75, 93.678198, 528.239181)"
                    fill="none"
                    stroke-linejoin="miter"
                    d="M 0.00198623 -0.00120028 L 125.72595 -0.00120028 L 125.72595 44.170677 L 0.00198623 44.170677 Z M 0.00198623 -0.00120028 "
                    stroke="#000000"
                    stroke-width="6"
                    stroke-opacity="1"
                    stroke-miterlimit="4"
                  />
                </g>
                <g clip-path="url(#06cf20b9d4)">
                  <path
                    fill="#ffffff"
                    d="M 267.285156 528.238281 L 363.855469 528.238281 L 363.855469 561.378906 L 267.285156 561.378906 Z M 267.285156 528.238281 "
                    fill-opacity="1"
                    fill-rule="nonzero"
                  />
                </g>
                <g clip-path="url(#4c29621883)">
                  <path
                    stroke-linecap="butt"
                    transform="matrix(0.75, 0, 0, 0.75, 267.29864, 528.239181)"
                    fill="none"
                    stroke-linejoin="miter"
                    d="M -0.00235336 -0.00120028 L 128.653902 -0.00120028 L 128.653902 44.170677 L -0.00235336 44.170677 Z M -0.00235336 -0.00120028 "
                    stroke="#000000"
                    stroke-width="6"
                    stroke-opacity="1"
                    stroke-miterlimit="4"
                  />
                </g>
                <g clip-path="url(#97c7b4a275)">
                  <g clip-path="url(#294e39d4d7)">
                    <path
                      fill="#ffffff"
                      d="M 306.550781 239.695312 L 340.785156 229.445312 L 367.214844 317.703125 L 332.980469 327.953125 Z M 306.550781 239.695312 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#7cc9823bf5)">
                  <g clip-path="url(#f3b1a39fc2)">
                    <g clip-path="url(#122c394188)">
                      <path
                        stroke-linecap="butt"
                        transform="matrix(0.718476, -0.215157, 0.215157, 0.718476, 306.55276, 239.697564)"
                        fill="none"
                        stroke-linejoin="miter"
                        d="M 0.00182917 0.00285067 L 47.639728 0.00232069 L 47.640848 122.728827 L 0.00145437 122.734346 Z M 0.00182917 0.00285067 "
                        stroke="#000000"
                        stroke-width="8"
                        stroke-opacity="1"
                        stroke-miterlimit="4"
                      />
                    </g>
                  </g>
                </g>
                <g clip-path="url(#74911651fa)">
                  <g clip-path="url(#641023325e)">
                    <path
                      fill="#ffffff"
                      d="M 332.730469 327.117188 L 366.964844 316.863281 L 380.378906 361.660156 L 346.144531 371.914062 Z M 332.730469 327.117188 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#a7f231b83e)">
                  <g clip-path="url(#3fbb80189d)">
                    <g clip-path="url(#855953f784)">
                      <path
                        stroke-linecap="butt"
                        transform="matrix(0.718476, -0.215157, 0.215157, 0.718476, 332.730893, 327.117311)"
                        fill="none"
                        stroke-linejoin="miter"
                        d="M -0.000495003 -0.000319908 L 47.642393 0.000644263 L 47.642235 62.437462 L -0.000653407 62.436497 Z M -0.000495003 -0.000319908 "
                        stroke="#000000"
                        stroke-width="8"
                        stroke-opacity="1"
                        stroke-miterlimit="4"
                      />
                    </g>
                  </g>
                </g>
                <g clip-path="url(#30139dddae)">
                  <g clip-path="url(#e4c97590b1)">
                    <path
                      fill="#ffffff"
                      d="M 111.332031 229.445312 L 145.398438 240.238281 L 117.621094 327.933594 L 83.554688 317.140625 Z M 111.332031 229.445312 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#2bb1686d77)">
                  <g clip-path="url(#c852116fa6)">
                    <g clip-path="url(#2e995efffc)">
                      <path
                        stroke-linecap="butt"
                        transform="matrix(0.714984, 0.226489, -0.226489, 0.714984, 111.332969, 229.447232)"
                        fill="none"
                        stroke-linejoin="miter"
                        d="M -0.00196486 -0.00206199 L 47.640077 0.00154778 L 47.639253 122.573316 L -0.00121517 122.574671 Z M -0.00196486 -0.00206199 "
                        stroke="#000000"
                        stroke-width="8"
                        stroke-opacity="1"
                        stroke-miterlimit="4"
                      />
                    </g>
                  </g>
                </g>
                <g clip-path="url(#b223723ab8)">
                  <g clip-path="url(#b91d05acdf)">
                    <path
                      fill="#ffffff"
                      d="M 83.640625 316.867188 L 117.707031 327.65625 L 103.671875 371.972656 L 69.605469 361.179688 Z M 83.640625 316.867188 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#51592d6cc6)">
                  <g clip-path="url(#719d5953df)">
                    <g clip-path="url(#9447ad0d17)">
                      <path
                        stroke-linecap="butt"
                        transform="matrix(0.714984, 0.226489, -0.226489, 0.714984, 83.641557, 316.866129)"
                        fill="none"
                        stroke-linejoin="miter"
                        d="M -0.000757963 0.00172072 L 47.639711 0.000365321 L 47.638747 61.983009 L -0.00172197 61.984364 Z M -0.000757963 0.00172072 "
                        stroke="#000000"
                        stroke-width="8"
                        stroke-opacity="1"
                        stroke-miterlimit="4"
                      />
                    </g>
                  </g>
                </g>
                <g clip-path="url(#388bef3ef7)">
                  <g clip-path="url(#8cd2845ba3)">
                    <path
                      fill="#ffffff"
                      d="M 285.167969 118.265625 L 326.195312 118.265625 L 326.195312 159.296875 L 285.167969 159.296875 Z M 285.167969 118.265625 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#91dd502a57)">
                  <g clip-path="url(#8dd8c0ac68)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 285.168065, 118.266519)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.35404 -0.00119194 C 12.244664 -0.00119194 -0.000128144 12.2436 -0.000128144 27.352976 C -0.000128144 42.457143 12.244664 54.701935 27.35404 54.701935 C 42.458207 54.701935 54.702999 42.457143 54.702999 27.352976 C 54.702999 12.2436 42.458207 -0.00119194 27.35404 -0.00119194 Z M 27.35404 -0.00119194 "
                      stroke="#000000"
                      stroke-width="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                <g clip-path="url(#27117a3d4a)">
                  <g clip-path="url(#aa061cfd76)">
                    <path
                      fill="#ffffff"
                      d="M 305.683594 214.175781 L 346.710938 214.175781 L 346.710938 255.207031 L 305.683594 255.207031 Z M 305.683594 214.175781 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#7d86241536)">
                  <g clip-path="url(#e9979fe9b1)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 305.682585, 214.176572)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.350305 -0.00105495 C 12.246137 -0.00105495 0.00134529 12.243737 0.00134529 27.353113 C 0.00134529 42.45728 12.246137 54.702072 27.350305 54.702072 C 42.45968 54.702072 54.704473 42.45728 54.704473 27.353113 C 54.704473 12.243737 42.45968 -0.00105495 27.350305 -0.00105495 Z M 27.350305 -0.00105495 "
                      stroke="#000000"
                      stroke-width="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                <g clip-path="url(#f5c6c7023f)">
                  <g clip-path="url(#888443916d)">
                    <path
                      fill="#ffffff"
                      d="M 332.730469 303.394531 L 373.757812 303.394531 L 373.757812 344.421875 L 332.730469 344.421875 Z M 332.730469 303.394531 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#d7817d85ce)">
                  <g clip-path="url(#2941552574)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 332.73019, 303.394051)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.349331 0.00064026 C 12.245164 0.00064026 0.000371629 12.245432 0.000371629 27.3496 C 0.000371629 42.458975 12.245164 54.703768 27.349331 54.703768 C 42.458707 54.703768 54.703499 42.458975 54.703499 27.3496 C 54.703499 12.245432 42.458707 0.00064026 27.349331 0.00064026 Z M 27.349331 0.00064026 "
                      stroke="#000000"
                      stroke-width="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                <g clip-path="url(#7339cfd3ad)">
                  <g clip-path="url(#0ecdaee281)">
                    <path
                      fill="#ffffff"
                      d="M 106.519531 214.175781 L 147.546875 214.175781 L 147.546875 255.207031 L 106.519531 255.207031 Z M 106.519531 214.175781 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#3b1c227f82)">
                  <g clip-path="url(#8016b6702e)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 106.518204, 214.176572)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.350729 -0.00105495 C 12.246561 -0.00105495 0.00176903 12.243737 0.00176903 27.353113 C 0.00176903 42.45728 12.246561 54.702072 27.350729 54.702072 C 42.454896 54.702072 54.704896 42.45728 54.704896 27.353113 C 54.704896 12.243737 42.454896 -0.00105495 27.350729 -0.00105495 Z M 27.350729 -0.00105495 "
                      stroke="#000000"
                      stroke-width="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                <g clip-path="url(#be197c3a24)">
                  <g clip-path="url(#c33a62af27)">
                    <path
                      fill="#ffffff"
                      d="M 78.582031 303.203125 L 119.609375 303.203125 L 119.609375 344.234375 L 78.582031 344.234375 Z M 78.582031 303.203125 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#d9af3d6dbe)">
                  <g clip-path="url(#6297ff8117)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 78.58121, 303.203796)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.350055 -0.000894484 C 12.245888 -0.000894484 0.00109544 12.243898 0.00109544 27.353273 C 0.00109544 42.457441 12.245888 54.702233 27.350055 54.702233 C 42.459431 54.702233 54.704223 42.457441 54.704223 27.353273 C 54.704223 12.243898 42.459431 -0.000894484 27.350055 -0.000894484 Z M 27.350055 -0.000894484 "
                      stroke="#000000"
                      stroke-width="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                <g clip-path="url(#71595b8b9a)">
                  <g clip-path="url(#27559423f0)">
                    <path
                      fill="#ffffff"
                      d="M 131.304688 118.265625 L 172.335938 118.265625 L 172.335938 159.296875 L 131.304688 159.296875 Z M 131.304688 118.265625 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#8497cd58ef)">
                  <g clip-path="url(#faf38f62a3)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 131.306407, 118.266519)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.351876 -0.00119194 C 12.247708 -0.00119194 -0.00229216 12.2436 -0.00229216 27.352976 C -0.00229216 42.457143 12.247708 54.701935 27.351876 54.701935 C 42.456043 54.701935 54.700835 42.457143 54.700835 27.352976 C 54.700835 12.2436 42.456043 -0.00119194 27.351876 -0.00119194 Z M 27.351876 -0.00119194 "
                      stroke="#000000"
                      stroke-width="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                <g clip-path="url(#44b692b698)">
                  <g clip-path="url(#925c9bc6cf)">
                    <path
                      fill="#ffffff"
                      d="M 164.578125 411.578125 L 205.609375 411.578125 L 205.609375 452.605469 L 164.578125 452.605469 Z M 164.578125 411.578125 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#97056328c5)">
                  <g clip-path="url(#ecd3cca582)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 164.578776, 411.57797)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.353299 0.000206081 C 12.243924 0.000206081 -0.000868537 12.244998 -0.000868537 27.349166 C -0.000868537 42.458541 12.243924 54.703333 27.353299 54.703333 C 42.457467 54.703333 54.702259 42.458541 54.702259 27.349166 C 54.702259 12.244998 42.457467 0.000206081 27.353299 0.000206081 Z M 27.353299 0.000206081 "
                      stroke="#000000"
                      stroke-width="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                <g clip-path="url(#e8dd380571)">
                  <g clip-path="url(#d8af1225f3)">
                    <path
                      fill="#ffffff"
                      d="M 249.917969 411.578125 L 290.949219 411.578125 L 290.949219 452.605469 L 249.917969 452.605469 Z M 249.917969 411.578125 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#c218c84113)">
                  <g clip-path="url(#b98e07c1a1)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 249.91912, 411.57797)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.352633 0.000206081 C 12.243257 0.000206081 -0.00153495 12.244998 -0.00153495 27.349166 C -0.00153495 42.458541 12.243257 54.703333 27.352633 54.703333 C 42.4568 54.703333 54.701592 42.458541 54.701592 27.349166 C 54.701592 12.244998 42.4568 0.000206081 27.352633 0.000206081 Z M 27.352633 0.000206081 "
                      stroke="#000000"
                      stroke-width="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                <g clip-path="url(#0377a71c2f)">
                  <g clip-path="url(#a2a1287d2b)">
                    <path
                      fill="#ffffff"
                      d="M 265.523438 507.355469 L 306.550781 507.355469 L 306.550781 548.386719 L 265.523438 548.386719 Z M 265.523438 507.355469 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#e368d0a606)">
                  <g clip-path="url(#f423172b02)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 265.522107, 507.35707)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.350733 -0.00213547 C 12.246566 -0.00213547 0.00177361 12.247865 0.00177361 27.352032 C 0.00177361 42.4562 12.246566 54.700992 27.350733 54.700992 C 42.4549 54.700992 54.704901 42.4562 54.704901 27.352032 C 54.704901 12.247865 42.4549 -0.00213547 27.350733 -0.00213547 Z M 27.350733 -0.00213547 "
                      stroke="#000000"
                      stroke-width="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                <g clip-path="url(#dd0a3258dc)">
                  <g clip-path="url(#3190e81780)">
                    <path
                      fill="#ffffff"
                      d="M 148.730469 507.722656 L 189.757812 507.722656 L 189.757812 548.753906 L 148.730469 548.753906 Z M 148.730469 507.722656 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#cd884d3bcc)">
                  <g clip-path="url(#a5711eb2ec)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 148.729741, 507.724558)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.34993 -0.00253612 C 12.245762 -0.00253612 0.000970228 12.247464 0.000970228 27.351632 C 0.000970228 42.455799 12.245762 54.700591 27.34993 54.700591 C 42.459305 54.700591 54.704098 42.455799 54.704098 27.351632 C 54.704098 12.247464 42.459305 -0.00253612 27.34993 -0.00253612 Z M 27.34993 -0.00253612 "
                      stroke="#000000"
                      stroke-width="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                <g clip-path="url(#7eeba5b1f1)">
                  <g clip-path="url(#30c62ea764)">
                    <path
                      fill="#ffffff"
                      d="M 164.578125 282.878906 L 205.609375 282.878906 L 205.609375 323.910156 L 164.578125 323.910156 Z M 164.578125 282.878906 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#b40c05f885)">
                  <g clip-path="url(#04bdf87a78)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 164.578776, 282.879558)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.353299 -0.000868374 C 12.243924 -0.000868374 -0.000868537 12.243924 -0.000868537 27.353299 C -0.000868537 42.457467 12.243924 54.702259 27.353299 54.702259 C 42.457467 54.702259 54.702259 42.457467 54.702259 27.353299 C 54.702259 12.243924 42.457467 -0.000868374 27.353299 -0.000868374 Z M 27.353299 -0.000868374 "
                      stroke="#000000"
                      stroke-width="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                <g clip-path="url(#bf8035cfd6)">
                  <g clip-path="url(#754b55623e)">
                    <path
                      fill="#ffffff"
                      d="M 249.917969 282.6875 L 290.949219 282.6875 L 290.949219 323.71875 L 249.917969 323.71875 Z M 249.917969 282.6875 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#3c80588bc6)">
                  <g clip-path="url(#3b37aa4572)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 249.91912, 282.689305)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.352633 -0.00240632 C 12.243257 -0.00240632 -0.00153495 12.247594 -0.00153495 27.351762 C -0.00153495 42.455929 12.243257 54.700721 27.352633 54.700721 C 42.4568 54.700721 54.701592 42.455929 54.701592 27.351762 C 54.701592 12.247594 42.4568 -0.00240632 27.352633 -0.00240632 Z M 27.352633 -0.00240632 "
                      stroke="#000000"
                      stroke-width="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                <g clip-path="url(#05f8fb2feb)">
                  <path
                    fill="#ffffff"
                    d="M 220.609375 294.238281 L 234.917969 294.238281 L 234.917969 330.40625 L 220.609375 330.40625 Z M 220.609375 294.238281 "
                    fill-opacity="1"
                    fill-rule="nonzero"
                  />
                </g>
                <g clip-path="url(#2736968074)">
                  <path
                    stroke-linecap="butt"
                    transform="matrix(0.75, 0, 0, 0.75, 220.608375, 294.237487)"
                    fill="none"
                    stroke-linejoin="miter"
                    d="M 0.00133358 0.00105841 L 19.074252 0.00105841 L 19.074252 48.204189 L 0.00133358 48.204189 Z M 0.00133358 0.00105841 "
                    stroke="#000000"
                    stroke-width="6"
                    stroke-opacity="1"
                    stroke-miterlimit="4"
                  />
                </g>
                <g fill="#000000" fill-opacity="1">
                  <g transform="translate(208.509587, 590.408539)">
                    <g>
                      <path d="M 9.671875 0 L 5.671875 0 L 5.671875 -15.578125 L 0.53125 -15.578125 L 0.53125 -18.921875 L 14.8125 -18.921875 L 14.8125 -15.578125 L 9.671875 -15.578125 Z M 9.671875 0 " />
                    </g>
                  </g>
                </g>
                <g fill="#000000" fill-opacity="1">
                  <g transform="translate(223.853515, 590.408539)">
                    <g>
                      <path d="M 0 -14.46875 L 4.328125 -14.46875 L 7.046875 -6.328125 C 7.140625 -6.066406 7.210938 -5.800781 7.265625 -5.53125 C 7.328125 -5.269531 7.378906 -4.992188 7.421875 -4.703125 C 7.460938 -4.421875 7.5 -4.125 7.53125 -3.8125 L 7.609375 -3.8125 C 7.660156 -4.28125 7.726562 -4.71875 7.8125 -5.125 C 7.90625 -5.53125 8.023438 -5.929688 8.171875 -6.328125 L 10.84375 -14.46875 L 15.078125 -14.46875 L 8.953125 1.84375 C 8.578125 2.84375 8.09375 3.675781 7.5 4.34375 C 6.90625 5.019531 6.222656 5.523438 5.453125 5.859375 C 4.679688 6.191406 3.832031 6.359375 2.90625 6.359375 C 2.457031 6.359375 2.066406 6.332031 1.734375 6.28125 C 1.410156 6.238281 1.132812 6.191406 0.90625 6.140625 L 0.90625 3.015625 C 1.082031 3.054688 1.304688 3.09375 1.578125 3.125 C 1.859375 3.164062 2.148438 3.1875 2.453125 3.1875 C 3.003906 3.1875 3.476562 3.066406 3.875 2.828125 C 4.28125 2.597656 4.613281 2.285156 4.875 1.890625 C 5.144531 1.503906 5.359375 1.078125 5.515625 0.609375 L 5.75 -0.109375 Z M 0 -14.46875 " />
                    </g>
                  </g>
                </g>
                <g fill="#000000" fill-opacity="1">
                  <g transform="translate(238.925761, 590.408539)">
                    <g>
                      <path d="M 2.078125 0 L 2.078125 -6.171875 L 1.140625 -5.609375 L -0.328125 -8.171875 L 2.078125 -9.609375 L 2.078125 -20.140625 L 6.015625 -20.140625 L 6.015625 -12.03125 L 6.921875 -12.59375 L 8.421875 -10.046875 L 6.015625 -8.59375 L 6.015625 0 Z M 2.078125 0 " />
                    </g>
                  </g>
                </g>
              </InjurySVGBack>
            </div>
            {currentActiveElement && (
              <div className={Style.btnPanel}>
                {currentActiveElement}
                <ul>
                  <li className={Style.wrapCheck}>
                    <Field
                      className={Style.check}
                      name="skinAppearance.pale"
                      type="checkbox"
                    />
                    <p>brak obrażeń</p>
                  </li>
                  <li>
                    <button
                      onClick={() => onRanaButtonClick('O')}
                      type="button"
                    >
                      O - złamanie otwarte
                    </button>
                  </li>
                  <li>
                    <button>Z - złamanie zamknięte</button>
                  </li>
                  <li>
                    <button>W - zwichnięcie </button>
                  </li>
                  <li>
                    <button>S - stłuczenie </button>
                  </li>
                  <li>
                    <button>R - rana </button>
                  </li>
                  <li>
                    <button>K - krwotok z rany </button>
                  </li>
                  <li>
                    <button>M - zmiażdżenie </button>
                  </li>
                  <li>
                    <button>A - amputacja </button>
                  </li>
                  <li>
                    <button>N - ból nieurazowy </button>
                  </li>
                  <li>
                    <button>P - oparzenie </button>
                  </li>
                </ul>
                <div> oparzenie</div>
              </div>
            )}
            <FormNavigation onSaveForm={submitForm} />
          </div>
        </form>
      )}
    </Formik>
  );
};

export default InjuryAssessment;
