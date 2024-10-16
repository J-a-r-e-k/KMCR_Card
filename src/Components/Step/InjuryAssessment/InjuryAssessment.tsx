import Style from './InjuryAssessment.module.scss';
import { FormNavigation } from '../../Section/FormNavigation/FormNavigation';
import { Formik, Field } from 'formik';
import { useAppContext } from '../../../context/AppContext';
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
    if (!currentActiveElement) return;
    const element = appContext.injuryAssessment[currentActiveElement];
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

  function active(nameClass: string) {
    if (currentActiveElement === nameClass) {
      setCurrentActiveElement(undefined);
    } else {
      setCurrentActiveElement(nameClass);
    }
  }

  console.log(appContext.injuryAssessment);

  return (
    <Formik
      initialValues={appContext.injuryAssessment}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        console.log(values);
        appContext.setInjuryAssessment({
          ...appContext.injuryAssessment,
          burns: values.burns,
        });
      }}
    >
      {({ handleSubmit, submitForm }) => (
        <form onSubmit={handleSubmit}>
          <div className={Style.wrap}>
            <p className={Style.title}>OBRAŻENIA</p>
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
                  value={appContext.injuryAssessment.shinRF}
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
                <ChestRight
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
                {/*  foot left front (stopa LP) */}
                <FootLF
                  value={appContext.injuryAssessment.footLF}
                  active={active}
                  currentActiveElement={currentActiveElement}
                />
                {/* forearm left front (przedramie LP)  */}
                <ForearmFrontLeft
                  value={appContext.injuryAssessment.forearmLF}
                  active={active}
                  currentActiveElement={currentActiveElement}
                />
                {/* hand left front (dłoń  LP)  */}
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
                {/* elbow right front (łokieć PP)*/}
                <ElbowFrontRight
                  value={appContext.injuryAssessment.elbowRF}
                  active={active}
                  currentActiveElement={currentActiveElement}
                />
                {/* wrist right front (nadgarstek PP)*/}
                <WristFrontRight
                  value={appContext.injuryAssessment.wristRF}
                  active={active}
                  currentActiveElement={currentActiveElement}
                />

                {/* shoulder right front (bark PP)*/}
                <ShoulderFrontRight
                  value={appContext.injuryAssessment.shoulderRF}
                  active={active}
                  currentActiveElement={currentActiveElement}
                />

                {/* knee right front ( kolano PP)*/}
                <KneeFrontRight
                  value={appContext.injuryAssessment.kneeRF}
                  active={active}
                  currentActiveElement={currentActiveElement}
                />

                {/* knee left front ( kolano LP)*/}
                <KneeFrontLeft
                  value={appContext.injuryAssessment.kneeLF}
                  active={active}
                  currentActiveElement={currentActiveElement}
                />

                {/* ankle left front ( kostka LP)*/}
                <AnkleFrontLeft
                  value={appContext.injuryAssessment.ankleLF}
                  active={active}
                  currentActiveElement={currentActiveElement}
                />

                {/* ankle right front ( kostka PP)*/}
                <AnkleFrontRight
                  value={appContext.injuryAssessment.ankleRF}
                  active={active}
                  currentActiveElement={currentActiveElement}
                />

                {/* right Hip  front (biodro PP)*/}
                <HipsFrontRight
                  value={appContext.injuryAssessment.hipRF}
                  active={active}
                  currentActiveElement={currentActiveElement}
                />
                {/* left Hip  front (biodro LP)*/}
                <HipsFrontLeft
                  value={appContext.injuryAssessment.hipLF}
                  active={active}
                  currentActiveElement={currentActiveElement}
                />
                {/* mouth  (usta)*/}
                <Mouth
                  value={appContext.injuryAssessment.mouth}
                  active={active}
                  currentActiveElement={currentActiveElement}
                />
                {/* nose */}
                <Nose
                  value={appContext.injuryAssessment.nose}
                  active={active}
                  currentActiveElement={currentActiveElement}
                />
                {/* right Eye */}
                <EyeRight
                  value={appContext.injuryAssessment.rightEye}
                  active={active}
                  currentActiveElement={currentActiveElement}
                />
                {/* left Eye */}
                <EyeLeft
                  value={appContext.injuryAssessment.leftEye}
                  active={active}
                  currentActiveElement={currentActiveElement}
                />
                <TextSVGFront />
              </InjurySVGFront>
              <InjurySVGBack>
                {/* back Neck */}
                <NeckBack
                  value={appContext.injuryAssessment.neckBack}
                  active={active}
                  currentActiveElement={currentActiveElement}
                />
                {/* cervical spine (kręgosłup szyjny) */}
                <SpineCervical
                  value={appContext.injuryAssessment.spineCervical}
                  active={active}
                  currentActiveElement={currentActiveElement}
                />
                {/* head */}
                <Head
                  value={appContext.injuryAssessment.head}
                  active={active}
                  currentActiveElement={currentActiveElement}
                />
                {/* arm left back (ramie LT) */}
                <ArmBackLeft
                  value={appContext.injuryAssessment.leftBackArm}
                  active={active}
                  currentActiveElement={currentActiveElement}
                />
                {/* arm right back (ramie PT)*/}
                <ArmBackRight
                  value={appContext.injuryAssessment.rightBackArm}
                  active={active}
                  currentActiveElement={currentActiveElement}
                />
                {/*  shinLB (goleń LT)    */}
                <LeftBackShin
                  value={appContext.injuryAssessment.shinLB}
                  active={active}
                  currentActiveElement={currentActiveElement}
                />
                {/* thighLB  (udo LT)    */}
                <LeftBackThigh
                  value={appContext.injuryAssessment.thighLB}
                  active={active}
                  currentActiveElement={currentActiveElement}
                />
                {/*  shinRB (goleń PT)    */}
                <RightBackShin
                  value={appContext.injuryAssessment.shinRB}
                  active={active}
                  currentActiveElement={currentActiveElement}
                />
                {/* thighRB   (udo PT)    */}
                <RightBackThigh
                  value={appContext.injuryAssessment.thighRB}
                  active={active}
                  currentActiveElement={currentActiveElement}
                />

                {/* BackP (plecy prawa)  */}
                <BackRight
                  value={appContext.injuryAssessment.backR}
                  active={active}
                  currentActiveElement={currentActiveElement}
                />
                {/* BackL (plecy Lewa)  */}
                <BackLeft
                  value={appContext.injuryAssessment.backL}
                  active={active}
                  currentActiveElement={currentActiveElement}
                />
                {/* thoracic spine (kręgosłup piersiowy ) */}
                <SpineThoracic
                  value={appContext.injuryAssessment.spineThoracic}
                  active={active}
                  currentActiveElement={currentActiveElement}
                />

                {/*    */}
                {/*  Back Right lower (plecy prawy dół )  */}
                <BackRightLower
                  value={appContext.injuryAssessment.backLowerR}
                  active={active}
                  currentActiveElement={currentActiveElement}
                />
                {/*  Back Left lower (plecy lewy dół)  */}
                <BackLeftLower
                  value={appContext.injuryAssessment.backLowerL}
                  active={active}
                  currentActiveElement={currentActiveElement}
                />
                {/* lumbar spine (kręgosłup lędźwiowy ) */}
                <SpineLumbar
                  value={appContext.injuryAssessment.spineLumbar}
                  active={active}
                  currentActiveElement={currentActiveElement}
                />
                {/* buttocks (Pośladki) */}
                <Buttocks
                  value={appContext.injuryAssessment.buttocks}
                  active={active}
                  currentActiveElement={currentActiveElement}
                />
                {/* pelvis (Miednica)  */}
                <Pelvis
                  value={appContext.injuryAssessment.pelvis}
                  active={active}
                  currentActiveElement={currentActiveElement}
                />
                {/*  foot left back (stopa LT) */}
                <FootLB
                  value={appContext.injuryAssessment.footLB}
                  active={active}
                  currentActiveElement={currentActiveElement}
                />
                {/*  foot right back (stopa PT)  */}
                <FootRB
                  value={appContext.injuryAssessment.footRB}
                  active={active}
                  currentActiveElement={currentActiveElement}
                />

                {/* forearm right Back (przedramie PT)  */}
                <ForearmBackRight
                  value={appContext.injuryAssessment.forearmRB}
                  active={active}
                  currentActiveElement={currentActiveElement}
                />
                {/* hand right back (dłoń PT ) */}
                <HandBackRight
                  value={appContext.injuryAssessment.handRB}
                  active={active}
                  currentActiveElement={currentActiveElement}
                />
                {/* forearm left back (przedramie LT)  */}
                <ForearmBackLeft
                  value={appContext.injuryAssessment.forearmLB}
                  active={active}
                  currentActiveElement={currentActiveElement}
                />
                {/* hand left back (dłoń  LT)  */}
                <HandBackLeft
                  value={appContext.injuryAssessment.handLB}
                  active={active}
                  currentActiveElement={currentActiveElement}
                />

                {/* shoulder right back (bark PT)*/}
                <ShoulderBackRight
                  value={appContext.injuryAssessment.shoulderRB}
                  active={active}
                  currentActiveElement={currentActiveElement}
                />
                {/* elbow right back (łokieć PT)*/}
                <ElbowBackRight
                  value={appContext.injuryAssessment.elbowRB}
                  active={active}
                  currentActiveElement={currentActiveElement}
                />
                {/* wrist right back (nadgarstek PT)*/}
                <WristBackRight
                  value={appContext.injuryAssessment.wristRB}
                  active={active}
                  currentActiveElement={currentActiveElement}
                />
                {/* elbow left back (łokieć LT)*/}
                <ElbowBackLeft
                  value={appContext.injuryAssessment.elbowLB}
                  active={active}
                  currentActiveElement={currentActiveElement}
                />
                {/* wrist left back (nadgarstek LT)*/}
                <WristBackLeft
                  value={appContext.injuryAssessment.wristLB}
                  active={active}
                  currentActiveElement={currentActiveElement}
                />
                {/* shoulder left back (bark LT)*/}
                <ShoulderBackLeft
                  value={appContext.injuryAssessment.shoulderLB}
                  active={active}
                  currentActiveElement={currentActiveElement}
                />

                {/* knee left back ( kolano LT)*/}
                <KneeBackLeft
                  value={appContext.injuryAssessment.kneeLB}
                  active={active}
                  currentActiveElement={currentActiveElement}
                />
                {/* knee right back ( kolano PT)*/}
                <KneeBackRight
                  value={appContext.injuryAssessment.kneeRB}
                  active={active}
                  currentActiveElement={currentActiveElement}
                />
                {/* ankle right back ( kostka PT)*/}
                <AnkleBackRight
                  value={appContext.injuryAssessment.ankleRB}
                  active={active}
                  currentActiveElement={currentActiveElement}
                />
                {/* ankle left back ( kostka LT)*/}
                <AnkleBackLeft
                  value={appContext.injuryAssessment.ankleLB}
                  active={active}
                  currentActiveElement={currentActiveElement}
                />
                {/* left Hip  back (biodro LT)*/}
                <HipsBackLeft
                  value={appContext.injuryAssessment.hipLB}
                  active={active}
                  currentActiveElement={currentActiveElement}
                />
                {/* right Hip  back (biodro PT)*/}
                <HipsBackRight
                  value={appContext.injuryAssessment.hipRB}
                  active={active}
                  currentActiveElement={currentActiveElement}
                />
                {/* sacrum (kość krzyżowy ) */}
                <Sacrum
                  value={appContext.injuryAssessment.sacrum}
                  active={active}
                  currentActiveElement={currentActiveElement}
                />
                <TextSVGBack />
              </InjurySVGBack>
            </div>
            <div className={Style.btnPanel}>
              <div className={Style.panelElement}>
                {currentActiveElement && (
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
                )}
              </div>

              <ul className={Style.panelElement}>
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
            <FormNavigation onSaveForm={submitForm} />
          </div>
        </form>
      )}
    </Formik>
  );
};

export default InjuryAssessment;
