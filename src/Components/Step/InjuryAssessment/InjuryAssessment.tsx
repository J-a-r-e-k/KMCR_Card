import Style from './InjuryAssessment.module.scss';
import { FormNavigation } from '../../Section/FormNavigation/FormNavigation';
import { Formik, Field, } from 'formik';
import { InjuryAssessmentBody, useAppContext } from '../../../context/AppContext';
import { useState } from 'react';
import { InjurySVGBack, InjurySVGFront } from './InjurySVG';
import { Neck, NeckBack } from './BodyParts/Neck';
import { Face, Mouth, Nose } from './BodyParts/Face';
import {
  ArmFrontRight,
  ElbowFrontRight,
  ForearmFrontRight,
  HandFrontRight,
  ShoulderFrontRight,
  WristFrontRight,
} from './BodyParts/HandRight';
import {
  ArmFrontLeft,
  ElbowFrontLeft,
  ForearmFrontLeft,
  HandFrontLeft,
  ShoulderFrontLeft,
  WristFrontLeft,
} from './BodyParts/HandLeft';
import {
  AnkleFrontRight,
  KneeFrontRight,
  RightFrontShin,
  RightFrontThigh,
} from './BodyParts/RightLowerLimb';
import {
  AnkleFrontLeft,
  KneeFrontLeft,
  LeftFrontShin,
  LeftFrontThigh,
} from './BodyParts/LeftLowerLimb';
import { ChestLeft, ChestRight } from './BodyParts/Chest';
import { BellyLeft, BellyRight } from './BodyParts/Belly';
import { ReproductiveOrgans } from './BodyParts/ReproductiveOrgans';
import { Hypogastrium } from './BodyParts/Hypogastrium';
import { FootLB, FootLF, FootRB, FootRF } from './BodyParts/Foot';
import {
  HipsBackLeft,
  HipsBackRight,
  HipsFrontLeft,
  HipsFrontRight,
} from './BodyParts/Hips';
import { EyeLeft, EyeRight } from './BodyParts/Eyes';
import {
  Sacrum,
  SpineCervical,
  SpineLumbar,
  SpineThoracic,
} from './BodyParts/Spine';
import { Head } from './BodyParts/Head';
import {
  ArmBackRight,
  ElbowBackRight,
  ForearmBackRight,
  HandBackRight,
  ShoulderBackRight,
  WristBackRight,
} from './BodyParts/HandRightBack';
import {
  ArmBackLeft,
  ElbowBackLeft,
  ForearmBackLeft,
  HandBackLeft,
  ShoulderBackLeft,
  WristBackLeft,
} from './BodyParts/HandLeftBack';
import {
  AnkleBackLeft,
  KneeBackLeft,
  LeftBackShin,
  LeftBackThigh,
} from './BodyParts/LeftLowerLimbBack';
import {
  AnkleBackRight,
  KneeBackRight,
  RightBackShin,
  RightBackThigh,
} from './BodyParts/RightLowerLimbBack';
import {
  BackLeft,
  BackLeftLower,
  BackRight,
  BackRightLower,
} from './BodyParts/Back';
import { Buttocks } from './BodyParts/Buttocks';
import { Pelvis } from './BodyParts/Pelvis';
import { TextSVGBack, TextSVGFront } from './BodyParts/textSVG';

const InjuryAssessment = () => {
  const appContext = useAppContext();
  const [currentActiveElement, setCurrentActiveElement] = useState<
    string | undefined
  >(undefined);

  const onRanaButtonClick = (type: string) => {
    if (!currentActiveElement) return
    const element = appContext.injuryAssessment[currentActiveElement as keyof InjuryAssessmentBody]
    if (element.includes(type)) {
      const nowe = element.replace(type, '');
      appContext.setInjuryAssessment({
        ...appContext.injuryAssessment,
        [currentActiveElement]: nowe,
      });
    } else {
      appContext.setInjuryAssessment({
        ...appContext.injuryAssessment,
        [currentActiveElement]: `${element}${type}`,
      });
    }
  };
  const OptionsSelector = () => {
    return (
      currentActiveElement &&
      <div className={Style.panelElement}>
        <ul>
          <li>
            <button
              className={Style.btnInjury}
              onClick={() => onRanaButtonClick('O')}
              type="button"
            >
              <span>O</span> - złamanie otwarte
            </button>
          </li>
          <li>
            <button
              className={Style.btnInjury}
              onClick={() => onRanaButtonClick('Z')}
              type="button"
            >
              <span>Z</span> - złamanie zamknięte
            </button>
          </li>
          <li>
            <button
              className={Style.btnInjury}
              onClick={() => onRanaButtonClick('W')}
              type="button"
            >
              <span>W</span> - zwichnięcie
            </button>
          </li>
          <li>
            <button
              className={Style.btnInjury}
              onClick={() => onRanaButtonClick('S')}
              type="button"
            >
              <span>S</span> - stłuczenie
            </button>
          </li>
          <li>
            <button
              className={Style.btnInjury}
              onClick={() => onRanaButtonClick('R')}
              type="button"
            >
              <span>R</span> - rana
            </button>
          </li>
          <li>
            <button
              className={Style.btnInjury}
              onClick={() => onRanaButtonClick('K')}
              type="button"
            >
              <span>K</span> - krwotok z rany
            </button>
          </li>
          <li>
            <button
              className={Style.btnInjury}
              onClick={() => onRanaButtonClick('M')}
              type="button"
            >
              <span>M</span> - zmiażdżenie
            </button>
          </li>
          <li>
            <button
              className={Style.btnInjury}
              onClick={() => onRanaButtonClick('A')}
              type="button"
            >
              <span>A</span> - amputacja
            </button>
          </li>
          <li>
            <button
              className={Style.btnInjury}
              onClick={() => onRanaButtonClick('N')}
              type="button"
            >
              <span>N</span> - ból nieurazowy
            </button>
          </li>
          <li>
            <button
              className={Style.btnInjury}
              onClick={() => onRanaButtonClick('P')}
              type="button"
            >
              <span>P</span> - oparzenie
            </button>
          </li>
        </ul>
      </div>
    )
  }

  function active(nameClass: string) {

    if (currentActiveElement === nameClass) {
      setCurrentActiveElement(undefined);
    } else {
      setCurrentActiveElement(nameClass);
    }
  }

  return (
    <>
      <Formik
        initialValues={appContext.injuryAssessment}
        enableReinitialize
        validateOnChange={true}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          appContext.setInjuryAssessment({
            ...appContext.injuryAssessment,
            burns: values.burns,
            noInjuries: values.noInjuries,
          });
        }}
      >
        {({ handleSubmit }) => (
          <>
            <form onSubmit={handleSubmit}>
              <div className={Style.wrap}>
                <p className={Style.title}>OBRAŻENIA</p>
                <div className={Style.wrap}>
                  <InjurySVGFront>
                    <Neck
                      value={appContext.injuryAssessment.neck}
                      active={active}
                      currentActiveElement={currentActiveElement}
                    />
                    <Face
                      value={appContext.injuryAssessment.face}
                      active={active}
                      currentActiveElement={currentActiveElement}
                    />
                    <ArmFrontRight
                      value={appContext.injuryAssessment.rightFrontArm}
                      active={active}
                      currentActiveElement={currentActiveElement}
                    />
                    <ArmFrontLeft
                      value={appContext.injuryAssessment.leftFrontArm}
                      active={active}
                      currentActiveElement={currentActiveElement}
                    />
                    <RightFrontShin
                      value={appContext.injuryAssessment.shinRF}
                      active={active}
                      currentActiveElement={currentActiveElement}
                    />
                    <RightFrontThigh
                      value={appContext.injuryAssessment.thighRF}
                      active={active}
                      currentActiveElement={currentActiveElement}
                    />
                    <LeftFrontShin
                      value={appContext.injuryAssessment.shinLF}
                      active={active}
                      currentActiveElement={currentActiveElement}
                    />

                    <LeftFrontThigh
                      value={appContext.injuryAssessment.thighLF}
                      active={active}
                      currentActiveElement={currentActiveElement}
                    />
                    <ChestLeft
                      value={appContext.injuryAssessment.chestL}
                      active={active}
                      currentActiveElement={currentActiveElement}
                    />
                    <ChestRight
                      value={appContext.injuryAssessment.chestR}
                      active={active}
                      currentActiveElement={currentActiveElement}
                    />
                    <BellyLeft
                      value={appContext.injuryAssessment.bellyL}
                      active={active}
                      currentActiveElement={currentActiveElement}
                    />
                    <BellyRight
                      value={appContext.injuryAssessment.bellyR}
                      active={active}
                      currentActiveElement={currentActiveElement}
                    />
                    <ReproductiveOrgans
                      value={appContext.injuryAssessment.reproductiveOrgans}
                      active={active}
                      currentActiveElement={currentActiveElement}
                    />
                    <Hypogastrium
                      value={appContext.injuryAssessment.hypogastrium}
                      active={active}
                      currentActiveElement={currentActiveElement}
                    />
                    <FootRF
                      value={appContext.injuryAssessment.footRF}
                      active={active}
                      currentActiveElement={currentActiveElement}
                    />
                    <FootLF
                      value={appContext.injuryAssessment.footLF}
                      active={active}
                      currentActiveElement={currentActiveElement}
                    />
                    <ForearmFrontLeft
                      value={appContext.injuryAssessment.forearmLF}
                      active={active}
                      currentActiveElement={currentActiveElement}
                    />
                    <HandFrontLeft
                      value={appContext.injuryAssessment.handLF}
                      active={active}
                      currentActiveElement={currentActiveElement}
                    />
                    <ForearmFrontRight
                      value={appContext.injuryAssessment.forearmRF}
                      active={active}
                      currentActiveElement={currentActiveElement}
                    />
                    <HandFrontRight
                      value={appContext.injuryAssessment.handRF}
                      active={active}
                      currentActiveElement={currentActiveElement}
                    />
                    <ShoulderFrontLeft
                      value={appContext.injuryAssessment.shoulderLF}
                      active={active}
                      currentActiveElement={currentActiveElement}
                    />
                    <ElbowFrontLeft
                      value={appContext.injuryAssessment.elbowLF}
                      active={active}
                      currentActiveElement={currentActiveElement}
                    />
                    <WristFrontLeft
                      value={appContext.injuryAssessment.wristLF}
                      active={active}
                      currentActiveElement={currentActiveElement}
                    />
                    <ElbowFrontRight
                      value={appContext.injuryAssessment.elbowRF}
                      active={active}
                      currentActiveElement={currentActiveElement}
                    />
                    <WristFrontRight
                      value={appContext.injuryAssessment.wristRF}
                      active={active}
                      currentActiveElement={currentActiveElement}
                    />
                    <ShoulderFrontRight
                      value={appContext.injuryAssessment.shoulderRF}
                      active={active}
                      currentActiveElement={currentActiveElement}
                    />
                    <KneeFrontRight
                      value={appContext.injuryAssessment.kneeRF}
                      active={active}
                      currentActiveElement={currentActiveElement}
                    />
                    <KneeFrontLeft
                      value={appContext.injuryAssessment.kneeLF}
                      active={active}
                      currentActiveElement={currentActiveElement}
                    />
                    <AnkleFrontLeft
                      value={appContext.injuryAssessment.ankleLF}
                      active={active}
                      currentActiveElement={currentActiveElement}
                    />
                    <AnkleFrontRight
                      value={appContext.injuryAssessment.ankleRF}
                      active={active}
                      currentActiveElement={currentActiveElement}
                    />
                    <HipsFrontRight
                      value={appContext.injuryAssessment.hipRF}
                      active={active}
                      currentActiveElement={currentActiveElement}
                    />
                    <HipsFrontLeft
                      value={appContext.injuryAssessment.hipLF}
                      active={active}
                      currentActiveElement={currentActiveElement}
                    />
                    <Mouth
                      value={appContext.injuryAssessment.mouth}
                      active={active}
                      currentActiveElement={currentActiveElement}
                    />
                    <Nose
                      value={appContext.injuryAssessment.nose}
                      active={active}
                      currentActiveElement={currentActiveElement}
                    />
                    <EyeRight
                      value={appContext.injuryAssessment.rightEye}
                      active={active}
                      currentActiveElement={currentActiveElement}
                    />
                    <EyeLeft
                      value={appContext.injuryAssessment.leftEye}
                      active={active}
                      currentActiveElement={currentActiveElement}
                    />
                    <TextSVGFront />
                  </InjurySVGFront>
                  <InjurySVGBack>
                    <NeckBack
                      value={appContext.injuryAssessment.neckBack}
                      active={active}
                      currentActiveElement={currentActiveElement}
                    />
                    <SpineCervical
                      value={appContext.injuryAssessment.spineCervical}
                      active={active}
                      currentActiveElement={currentActiveElement}
                    />
                    <Head
                      value={appContext.injuryAssessment.head}
                      active={active}
                      currentActiveElement={currentActiveElement}
                    />
                    <ArmBackLeft
                      value={appContext.injuryAssessment.leftBackArm}
                      active={active}
                      currentActiveElement={currentActiveElement}
                    />
                    <ArmBackRight
                      value={appContext.injuryAssessment.rightBackArm}
                      active={active}
                      currentActiveElement={currentActiveElement}
                    />
                    <LeftBackShin
                      value={appContext.injuryAssessment.shinLB}
                      active={active}
                      currentActiveElement={currentActiveElement}
                    />
                    <LeftBackThigh
                      value={appContext.injuryAssessment.thighLB}
                      active={active}
                      currentActiveElement={currentActiveElement}
                    />
                    <RightBackShin
                      value={appContext.injuryAssessment.shinRB}
                      active={active}
                      currentActiveElement={currentActiveElement}
                    />
                    <RightBackThigh
                      value={appContext.injuryAssessment.thighRB}
                      active={active}
                      currentActiveElement={currentActiveElement}
                    />

                    <BackRight
                      value={appContext.injuryAssessment.backR}
                      active={active}
                      currentActiveElement={currentActiveElement}
                    />
                    <BackLeft
                      value={appContext.injuryAssessment.backL}
                      active={active}
                      currentActiveElement={currentActiveElement}
                    />
                    <SpineThoracic
                      value={appContext.injuryAssessment.spineThoracic}
                      active={active}
                      currentActiveElement={currentActiveElement}
                    />
                    <BackRightLower
                      value={appContext.injuryAssessment.backLowerR}
                      active={active}
                      currentActiveElement={currentActiveElement}
                    />
                    <BackLeftLower
                      value={appContext.injuryAssessment.backLowerL}
                      active={active}
                      currentActiveElement={currentActiveElement}
                    />
                    <SpineLumbar
                      value={appContext.injuryAssessment.spineLumbar}
                      active={active}
                      currentActiveElement={currentActiveElement}
                    />
                    <Buttocks
                      value={appContext.injuryAssessment.buttocks}
                      active={active}
                      currentActiveElement={currentActiveElement}
                    />
                    <Pelvis
                      value={appContext.injuryAssessment.pelvis}
                      active={active}
                      currentActiveElement={currentActiveElement}
                    />
                    <FootLB
                      value={appContext.injuryAssessment.footLB}
                      active={active}
                      currentActiveElement={currentActiveElement}
                    />
                    <FootRB
                      value={appContext.injuryAssessment.footRB}
                      active={active}
                      currentActiveElement={currentActiveElement}
                    />

                    <ForearmBackRight
                      value={appContext.injuryAssessment.forearmRB}
                      active={active}
                      currentActiveElement={currentActiveElement}
                    />
                    <HandBackRight
                      value={appContext.injuryAssessment.handRB}
                      active={active}
                      currentActiveElement={currentActiveElement}
                    />
                    <ForearmBackLeft
                      value={appContext.injuryAssessment.forearmLB}
                      active={active}
                      currentActiveElement={currentActiveElement}
                    />
                    <HandBackLeft
                      value={appContext.injuryAssessment.handLB}
                      active={active}
                      currentActiveElement={currentActiveElement}
                    />

                    <ShoulderBackRight
                      value={appContext.injuryAssessment.shoulderRB}
                      active={active}
                      currentActiveElement={currentActiveElement}
                    />
                    <ElbowBackRight
                      value={appContext.injuryAssessment.elbowRB}
                      active={active}
                      currentActiveElement={currentActiveElement}
                    />
                    <WristBackRight
                      value={appContext.injuryAssessment.wristRB}
                      active={active}
                      currentActiveElement={currentActiveElement}
                    />
                    <ElbowBackLeft
                      value={appContext.injuryAssessment.elbowLB}
                      active={active}
                      currentActiveElement={currentActiveElement}
                    />
                    <WristBackLeft
                      value={appContext.injuryAssessment.wristLB}
                      active={active}
                      currentActiveElement={currentActiveElement}
                    />
                    <ShoulderBackLeft
                      value={appContext.injuryAssessment.shoulderLB}
                      active={active}
                      currentActiveElement={currentActiveElement}
                    />
                    <KneeBackLeft
                      value={appContext.injuryAssessment.kneeLB}
                      active={active}
                      currentActiveElement={currentActiveElement}
                    />
                    <KneeBackRight
                      value={appContext.injuryAssessment.kneeRB}
                      active={active}
                      currentActiveElement={currentActiveElement}
                    />
                    <AnkleBackRight
                      value={appContext.injuryAssessment.ankleRB}
                      active={active}
                      currentActiveElement={currentActiveElement}
                    />
                    <AnkleBackLeft
                      value={appContext.injuryAssessment.ankleLB}
                      active={active}
                      currentActiveElement={currentActiveElement}
                    />
                    <HipsBackLeft
                      value={appContext.injuryAssessment.hipLB}
                      active={active}
                      currentActiveElement={currentActiveElement}
                    />
                    <HipsBackRight
                      value={appContext.injuryAssessment.hipRB}
                      active={active}
                      currentActiveElement={currentActiveElement}
                    />
                    <Sacrum
                      value={appContext.injuryAssessment.sacrum}
                      active={active}
                      currentActiveElement={currentActiveElement}
                    />
                    <TextSVGBack />
                  </InjurySVGBack>
                </div>
                <OptionsSelector />
                <div className={Style.btnPanel}>
                  <ul>
                    <p>Oparzenia:</p>
                    <li className={`${Style.wrapCheck}`}>
                      <Field
                        className={Style.selectField}
                        name="burns.first.degree"
                        as="select"
                      >
                        <option value=""></option>
                        <option value="I">I</option>
                        <option value="II">II</option>
                        <option value="III">III</option>
                      </Field>
                      <p>stopień</p>
                      <Field
                        className={Style.numberField}
                        name="burns.first.percent"
                        type="number"
                      />
                      <p>%</p>
                    </li>
                    <li className={`${Style.wrapCheck}`}>
                      <Field
                        className={Style.selectField}
                        name="burns.second.degree"
                        as="select"
                      >
                        <option value=""></option>
                        <option value="I">I</option>
                        <option value="II">II</option>
                        <option value="III">III</option>
                      </Field>
                      <p>stopień</p>
                      <Field
                        className={Style.numberField}
                        name="burns.second.percent"
                        type="number"
                      />
                      <p>%</p>
                    </li>
                    <li className={Style.wrapCheck}>
                      <Field
                        className={Style.check}
                        name="burns.inhalationBurn"
                        type="checkbox"
                      />
                      <p>oparzenie wziewne</p>
                    </li>
                    <li className={Style.wrapCheck}>
                      <Field
                        className={Style.check}
                        name="noInjuries"
                        type="checkbox"
                      />
                      <p>brak obrażeń</p>
                    </li>
                  </ul>
                </div>
              </div>
              <FormNavigation />
            </form>
          </>
        )}
      </Formik >
    </>
  );
};
export default InjuryAssessment;


