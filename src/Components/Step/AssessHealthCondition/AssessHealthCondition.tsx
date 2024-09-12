import { useAppContext } from '../../../context/AppContext';
import { FormNavigation } from '../../Section/FormNavigation/FormNavigation';
import Style from './AssessHealthCondition.module.scss';
import { Formik, Field } from 'formik';
import { useEffect } from 'react';

const AssessHealthCondition = () => {
  const appContext = useAppContext();

  const sumGcs = (): number => {
    const gcs = appContext.assessHealthCondition.gcs;
    if (
      gcs.openingEyes === '0' ||
      gcs.reactWords === '0' ||
      gcs.reakcjaMotoryczna === '0'
    )
      return NaN;

    const sumGcs =
      Number(gcs.openingEyes) +
      Number(gcs.reactWords) +
      Number(gcs.reakcjaMotoryczna);

    const gcsRts =
      sumGcs >= 13 && sumGcs <= 15
        ? 4
        : sumGcs >= 9 && sumGcs <= 12
        ? 3
        : sumGcs >= 6 && sumGcs <= 8
        ? 2
        : sumGcs >= 4 && sumGcs <= 5
        ? 1
        : sumGcs == 3
        ? 0
        : NaN;

    appContext.setAssessHealthCondition({
      ...appContext.assessHealthCondition,
      gcs: {
        ...appContext.assessHealthCondition.gcs,
        sumGcs: sumGcs,
      },
      rts: {
        ...appContext.assessHealthCondition.rts,
        gcs: gcsRts,
      },
    });

    return sumGcs;
  };
  useEffect(() => {
    sumGcs();
  }, []);

  /// Zapisać sum gcs w context
  const glasgow = () => {
    // const sumGcs = () => {
    //   const gcs = appContext.assessHealthCondition.gcs;
    //   if (
    //     gcs.openingEyes === 0 ||
    //     gcs.reactWords === 0 ||
    //     gcs.reakcjaMotoryczna === 0
    //   )
    //     return;
    //   const sumGcs =
    //     Number(gcs.openingEyes) +
    //     Number(gcs.reactWords) +
    //     Number(gcs.reakcjaMotoryczna);

    //   return sumGcs;
    // };
    // useEffect(() => {
    //   sum();
    // }, []);

    return (
      <>
        <div className={Style.wrapGlasgow}>
          <h2>GLASGOW-COMA-SCALE</h2>
          <ul className={Style.wrapList}>
            <p>OTWIERANIE OCZU</p>
            <li className={Style.wrapCheck}>
              <p>spontaniczne</p>
              <Field
                id="4"
                className={Style.checkField}
                name="gcs.openingEyes"
                type="radio"
                value="4"
              />
              <label htmlFor="4" className={Style.check}>
                4
              </label>
            </li>
            <li className={Style.wrapCheck}>
              <p>na głos </p>
              <Field
                id="3"
                className={Style.checkField}
                name="gcs.openingEyes"
                type="radio"
                value="3"
              />
              <label htmlFor="3" className={Style.check}>
                3
              </label>
            </li>
            <li className={Style.wrapCheck}>
              <p>na ból</p>
              <Field
                id="2"
                className={Style.checkField}
                name="gcs.openingEyes"
                type="radio"
                value="2"
              />
              <label htmlFor="2" className={Style.check}>
                2
              </label>
            </li>
            <li className={Style.wrapCheck}>
              <p>brak</p>
              <Field
                id="1"
                className={Style.checkField}
                name="gcs.openingEyes"
                type="radio"
                value="1"
              />
              <label htmlFor="1" className={Style.check}>
                1
              </label>
            </li>
          </ul>
          <ul className={Style.wrapList}>
            <p>REAKCJA SŁOWNA</p>
            <li className={Style.wrapCheck}>
              <p>zorientowany</p>
              <Field
                id="reactWords_5"
                className={Style.checkField}
                name="gcs.reactWords"
                type="radio"
                value="5"
              />
              <label htmlFor="reactWords_5" className={Style.check}>
                5
              </label>
            </li>
            <li className={Style.wrapCheck}>
              <p>splątany</p>
              <Field
                id="reactWords_4"
                className={Style.checkField}
                name="gcs.reactWords"
                type="radio"
                value="4"
              />
              <label htmlFor="reactWords_4" className={Style.check}>
                4
              </label>
            </li>
            <li className={Style.wrapCheck}>
              <p>niewłaściwe słowa</p>
              <Field
                id="reactWords_3"
                className={Style.checkField}
                name="gcs.reactWords"
                type="radio"
                value="3"
              />
              <label htmlFor="reactWords_3" className={Style.check}>
                3
              </label>
            </li>
            <li className={Style.wrapCheck}>
              <p>niezrozumiałe dźwięki</p>
              <Field
                id="reactWords_2"
                className={Style.checkField}
                name="gcs.reactWords"
                type="radio"
                value="2"
              />
              <label htmlFor="reactWords_2" className={Style.check}>
                2
              </label>
            </li>
            <li className={Style.wrapCheck}>
              <p>brak</p>
              <Field
                id="reactWords_1"
                className={Style.checkField}
                name="gcs.reactWords"
                type="radio"
                value="1"
              />
              <label htmlFor="reactWords_1" className={Style.check}>
                1
              </label>
            </li>
          </ul>
          <ul className={Style.wrapList}>
            <p>REAKCJA RUCHOWA</p>
            <li className={Style.wrapCheck}>
              <p>wykonuje polecenia</p>
              <Field
                id="reakcjaMotoryczna_6"
                className={Style.checkField}
                name="gcs.reakcjaMotoryczna"
                type="radio"
                value="6"
              />
              <label htmlFor="reakcjaMotoryczna_6" className={Style.check}>
                6
              </label>
            </li>
            <li className={Style.wrapCheck}>
              <p>lokalizuje ból</p>
              <Field
                id="reakcjaMotoryczna_5"
                className={Style.checkField}
                name="gcs.reakcjaMotoryczna"
                type="radio"
                value="5"
              />
              <label htmlFor="reakcjaMotoryczna_5" className={Style.check}>
                5
              </label>
            </li>
            <li className={Style.wrapCheck}>
              <p>ucieka od bólu</p>
              <Field
                id="reakcjaMotoryczna_4"
                className={Style.checkField}
                name="gcs.reakcjaMotoryczna"
                type="radio"
                value="4"
              />
              <label htmlFor="reakcjaMotoryczna_4" className={Style.check}>
                4
              </label>
            </li>
            <li className={Style.wrapCheck}>
              <p>zgięciowa</p>
              <Field
                id="reakcjaMotoryczna_3"
                className={Style.checkField}
                name="gcs.reakcjaMotoryczna"
                type="radio"
                value="3"
              />
              <label htmlFor="reakcjaMotoryczna_3" className={Style.check}>
                3
              </label>
            </li>
            <li className={Style.wrapCheck}>
              <p>wyprost</p>
              <Field
                id="reakcjaMotoryczna_2"
                className={Style.checkField}
                name="gcs.reakcjaMotoryczna"
                type="radio"
                value="2"
              />
              <label htmlFor="reakcjaMotoryczna_2" className={Style.check}>
                2
              </label>
            </li>

            <li className={Style.wrapCheck}>
              <p> brak</p>
              <Field
                id="reakcjaMotoryczna_1"
                className={Style.checkField}
                name="gcs.reakcjaMotoryczna"
                type="radio"
                value="1"
              />
              <label htmlFor="reakcjaMotoryczna_1" className={Style.check}>
                1
              </label>
            </li>
          </ul>
          <div className={`${Style.wrapCheck} ${Style.wrapSum}`}>
            <p>SUMA:</p>
            <p className={Style.sumCheck}>
              {appContext.assessHealthCondition.gcs.sumGcs}
            </p>
          </div>
        </div>
      </>
    );
  };

  const sum = () => {
    const breathe =
      appContext.assessHealthConditionBreathEyes.respiratorySystem
        .respiratoryRate;
    const pressure =
      appContext.assessHealthConditionBreathEyes.bloodPressure.systolic;

    //
    const rtsBreath =
      breathe >= 10 && breathe <= 29
        ? '4'
        : breathe > 29
        ? '3'
        : breathe >= 6 && breathe <= 9
        ? '2'
        : breathe >= 1 && breathe <= 5
        ? '1'
        : breathe == 0
        ? '0'
        : '';

    const rtsPressure =
      pressure > 89
        ? 4
        : pressure >= 76 && pressure <= 89
        ? 3
        : pressure >= 50 && pressure <= 75
        ? 2
        : pressure >= 1 && pressure <= 40
        ? 1
        : pressure == 0
        ? 0
        : NaN;

    appContext.setAssessHealthCondition({
      ...appContext.assessHealthCondition,
      rts: {
        ...appContext.assessHealthCondition.rts,
        breath: rtsBreath,
        systolicBloodPressure: rtsPressure,
      },
    });
  };
  useEffect(() => {
    sum();
  }, []);

  const rts = () => {
    const bloodPressure =
      appContext.assessHealthCondition.rts.systolicBloodPressure;

    const gcsRts = appContext.assessHealthCondition.rts.gcs;
    return (
      <>
        <div className={Style.wrapGlasgow}>
          <h2>RTS</h2>

          <ul className={Style.wrapList}>
            <p>CZ. ODDECHÓW</p>

            <li className={Style.wrapCheck}>
              <p>10-29</p>
              <Field
                id="rts.breath_4"
                className={Style.checkField}
                name="rts.breath"
                type="radio"
                value="4"
              />
              <label htmlFor="rts.breath_4" className={Style.check}>
                4
              </label>
            </li>

            <li className={Style.wrapCheck}>
              <p>&gt; 29</p>
              <Field
                id="rts.breath_3"
                className={Style.checkField}
                name="rts.breath"
                type="radio"
                value="3"
              />
              <label htmlFor="rts.breath_3" className={Style.check}>
                3
              </label>
            </li>
            <li className={Style.wrapCheck}>
              <p>6 - 9</p>
              <Field
                id="rts.breath_2"
                className={Style.checkField}
                name="rts.breath"
                type="radio"
                value="2"
              />
              <label htmlFor="rts.breath_2" className={Style.check}>
                2
              </label>
            </li>
            <li className={Style.wrapCheck}>
              <p>1 - 5</p>
              <Field
                id="rts.breath_1"
                className={Style.checkField}
                name="rts.breath"
                type="radio"
                value="1"
              />
              <label htmlFor="rts.breath_1" className={Style.check}>
                1
              </label>
            </li>
            <li className={Style.wrapCheck}>
              <p>brak</p>
              <Field
                id="rts.breath_0"
                className={Style.checkField}
                name="rts.breath"
                type="radio"
                value="0"
              />
              <label htmlFor="rts.breath_0" className={Style.check}>
                0
              </label>
            </li>
          </ul>
          <ul className={Style.wrapList}>
            <p>CIŚNIENIE SKURCZOWE</p>
            <li className={Style.wrapCheck}>
              <p> &gt; 89</p>
              <div
                className={`${Style.check} ${
                  bloodPressure == 4 ? Style.checkAdd : ''
                }`}
              >
                4
              </div>
            </li>
            <li className={Style.wrapCheck}>
              <p>76 - 89</p>
              <div
                className={`${Style.check} ${
                  bloodPressure == 3 ? Style.checkAdd : ''
                }`}
              >
                3
              </div>
            </li>
            <li className={Style.wrapCheck}>
              <label>50 - 75</label>
              <div
                className={`${Style.check} ${
                  bloodPressure == 2 ? Style.checkAdd : ''
                }`}
              >
                2
              </div>
            </li>
            <li className={Style.wrapCheck}>
              <p>1 - 49</p>
              <div
                className={`${Style.check} ${
                  bloodPressure == 1 ? Style.checkAdd : ''
                }`}
              >
                1
              </div>
            </li>
            <li className={Style.wrapCheck}>
              <p>brak</p>
              <div
                className={`${Style.check} ${
                  bloodPressure == 0 ? Style.checkAdd : ''
                }`}
              >
                0
              </div>
            </li>
          </ul>
          <ul className={Style.wrapList}>
            <p>GLASGOW-COMA-SCALE</p>
            <li className={Style.wrapCheck}>
              <p>13 - 15</p>
              <div
                className={`${Style.check} ${
                  gcsRts == 4 ? Style.checkAdd : ''
                }`}
              >
                4
              </div>
            </li>
            <li className={Style.wrapCheck}>
              <p>9 -12</p>
              <div
                className={`${Style.check} ${
                  gcsRts == 3 ? Style.checkAdd : ''
                }`}
              >
                3
              </div>
            </li>
            <li className={Style.wrapCheck}>
              <p>6 - 8</p>
              <div
                className={`${Style.check} ${
                  gcsRts == 2 ? Style.checkAdd : ''
                }`}
              >
                2
              </div>
            </li>
            <li className={Style.wrapCheck}>
              <p>4 - 5</p>
              <div
                className={`${Style.check} ${
                  gcsRts == 1 ? Style.checkAdd : ''
                }`}
              >
                1
              </div>
            </li>
            <li className={Style.wrapCheck}>
              <p>3</p>
              <div
                className={`${Style.check} ${
                  gcsRts == 0 ? Style.checkAdd : ''
                }`}
              >
                0
              </div>
            </li>
          </ul>
          <div className={`${Style.wrapCheck} ${Style.wrapSum}`}>
            <p>SUMA:</p>
            <p className={Style.sumCheck}>{}</p>
          </div>
        </div>
      </>
    );
  };

  // const breath = () => {
  //   return (
  //     <>
  //       <div className={Style.wrapGlasgow}>
  //         <h2>UKŁAD ODDECHOWY</h2>
  //         <ul>
  //           <li className={`${Style.wrapCheck} ${Style.wrapBreathingRate}`}>
  //             <label>częśtość oddechów</label>
  //             <Field
  //               className={Style.breathingRate}
  //               name="respiratorySystem.respiratoryRate"
  //               type="number"
  //             />
  //             <p> /min</p>

  //             {/* <span>1</span> */}
  //           </li>
  //           <li className={Style.wrapCheck}>
  //             <p>duszność</p>
  //             <div className={Style.wrapCheck}>
  //               <Field
  //                 id="dyspneaYes"
  //                 className={Style.checkField}
  //                 name="respiratorySystem.dyspnea"
  //                 type="radio"
  //                 value="yes"
  //               />
  //               <label htmlFor="dyspneaYes" className={Style.check}>
  //                 TAK
  //               </label>

  //               <Field
  //                 id="dyspneaNO"
  //                 className={Style.checkField}
  //                 name="respiratorySystem.dyspnea"
  //                 type="radio"
  //                 value="no"
  //               />
  //               <label htmlFor="dyspneaNO" className={Style.check}>
  //                 NIE
  //               </label>
  //             </div>
  //           </li>
  //           <li className={Style.wrapCheck}>
  //             <p>siinica</p>
  //             <div className={Style.wrapCheck}>
  //               <Field
  //                 id="cyanosisYes"
  //                 className={Style.checkField}
  //                 name="respiratorySystem.cyanosis"
  //                 type="radio"
  //                 value="yes"
  //               />
  //               <label htmlFor="cyanosisYes" className={Style.check}>
  //                 TAK
  //               </label>

  //               <Field
  //                 id="cyanosisNo"
  //                 className={Style.checkField}
  //                 name="respiratorySystem.cyanosis"
  //                 type="radio"
  //                 value="no"
  //               />
  //               <label htmlFor="cyanosisNo" className={Style.check}>
  //                 NIE
  //               </label>
  //             </div>
  //           </li>
  //           <li className={Style.wrapCheck}>
  //             <p>bezdech</p>
  //             <div className={Style.wrapCheck}>
  //               <Field
  //                 id="apneaYes"
  //                 className={Style.checkField}
  //                 name="respiratorySystem.apnea"
  //                 type="radio"
  //                 value="yes"
  //               />
  //               <label htmlFor="apneaYes" className={Style.check}>
  //                 TAK
  //               </label>

  //               <Field
  //                 id="apneaNo"
  //                 className={Style.checkField}
  //                 name="respiratorySystem.apnea"
  //                 type="radio"
  //                 value="no"
  //               />
  //               <label htmlFor="apneaNo" className={Style.check}>
  //                 NIE
  //               </label>
  //             </div>
  //           </li>
  //         </ul>
  //         <ul>
  //           <div className={Style.wrapLungSide}>
  //             <p className={Style.lungSide}>L</p>
  //             <p className={Style.lungSide}>P</p>
  //           </div>
  //           <li className={Style.wrapCheck}>
  //             <label>szmer prawidłowy</label>
  //             <div className={Style.wrapCheck}>
  //               <Field
  //                 className={Style.check}
  //                 name="respiratorySystem.normalBreathSounds.left"
  //                 type="checkbox"
  //               />
  //               <Field
  //                 className={Style.check}
  //                 name="respiratorySystem.normalBreathSounds.right"
  //                 type="checkbox"
  //               />
  //             </div>
  //             {/* left: '',
  //       right: '', */}
  //           </li>
  //           <li className={Style.wrapCheck}>
  //             <label>furczenie</label>
  //             <div className={Style.wrapCheck}>
  //               <Field
  //                 className={Style.check}
  //                 name="respiratorySystem.wheezing.left"
  //                 type="checkbox"
  //               />
  //               <Field
  //                 className={Style.check}
  //                 name="respiratorySystem.wheezing.right"
  //                 type="checkbox"
  //               />
  //             </div>
  //           </li>
  //           <li className={Style.wrapCheck}>
  //             <label>świsty</label>
  //             <div className={Style.wrapCheck}>
  //               <Field
  //                 className={Style.check}
  //                 name="respiratorySystem.whistling.left"
  //                 type="checkbox"
  //               />
  //               <Field
  //                 className={Style.check}
  //                 name="respiratorySystem.whistling.right"
  //                 type="checkbox"
  //               />
  //             </div>
  //           </li>
  //           <li className={Style.wrapCheck}>
  //             <label>trzeszczenie</label>
  //             <div className={Style.wrapCheck}>
  //               <Field
  //                 className={Style.check}
  //                 name="respiratorySystem.crepitation.left"
  //                 type="checkbox"
  //               />
  //               <Field
  //                 className={Style.check}
  //                 name="respiratorySystem.crepitation.right"
  //                 type="checkbox"
  //               />
  //             </div>
  //           </li>
  //           <li className={Style.wrapCheck}>
  //             <label>rzężenie</label>
  //             <div className={Style.wrapCheck}>
  //               <Field
  //                 className={Style.check}
  //                 name="respiratorySystem.rales.left"
  //                 type="checkbox"
  //               />
  //               <Field
  //                 className={Style.check}
  //                 name="respiratorySystem.rales.right"
  //                 type="checkbox"
  //               />
  //             </div>
  //           </li>
  //           <li className={Style.wrapCheck}>
  //             <label>brak szmeru</label>
  //             <div className={Style.wrapCheck}>
  //               <Field
  //                 className={Style.check}
  //                 name="respiratorySystem.noBreathSounds.left"
  //                 type="checkbox"
  //               />
  //               <Field
  //                 className={Style.check}
  //                 name="respiratorySystem.noBreathSounds.right"
  //                 type="checkbox"
  //               />
  //             </div>
  //           </li>
  //           <li className={Style.wrapCheck}>
  //             <label>inne:</label>
  //             <div className={Style.wrapCheck}>
  //               <Field
  //                 className={Style.check}
  //                 name="respiratorySystem.otherSounds.left"
  //                 type="checkbox"
  //               />
  //               <Field
  //                 className={Style.check}
  //                 name="respiratorySystem.otherSounds.right"
  //                 type="checkbox"
  //               />
  //             </div>
  //             <Field
  //               className={Style.breathDifferent}
  //               name="respiratorySystem.otherSounds.description"
  //               type="text"
  //             />
  //           </li>
  //           <li className={`${Style.wrapCheck} ${Style.wrapBreathingRate}`}>
  //             <label>Saturacja</label>
  //             <Field
  //               className={Style.breathingRate}
  //               name="respiratorySystem.oxygenSaturation"
  //               type="number"
  //             />
  //             <p> %</p>
  //           </li>
  //         </ul>
  //       </div>
  //     </>
  //   );
  // };

  // const pupil = () => {
  //   return (
  //     <div>
  //       <div className={Style.wrapGlasgow}>
  //         <h2>ŹRENICE</h2>
  //         <ul>
  //           <div className={Style.wrapLungSide}>
  //             <p className={Style.description}>Reakcja na światło:</p>
  //             <p className={Style.lungSide}>L</p>
  //             <p className={Style.lungSide}>P</p>
  //           </div>
  //           <li className={Style.wrapCheck}>
  //             <label>prawidłowa</label>
  //             <div className={Style.wrapCheck}>
  //               <Field
  //                 className={Style.check}
  //                 name="public.normal.left"
  //                 type="checkbox"
  //               />
  //               <Field
  //                 className={Style.check}
  //                 name="public.normal.right"
  //                 type="checkbox"
  //               />
  //             </div>
  //           </li>
  //           <li className={Style.wrapCheck}>
  //             <label>powolna</label>
  //             <div className={Style.wrapCheck}>
  //               <Field
  //                 className={Style.check}
  //                 name="public.slow.left"
  //                 type="checkbox"
  //               />
  //               <Field
  //                 className={Style.check}
  //                 name="public.slow.right"
  //                 type="checkbox"
  //               />
  //             </div>
  //           </li>
  //           <li className={Style.wrapCheck}>
  //             <label>brak</label>
  //             <div className={Style.wrapCheck}>
  //               <Field
  //                 className={Style.check}
  //                 name="public.absent.left"
  //                 type="checkbox"
  //               />
  //               <Field
  //                 className={Style.check}
  //                 name="public.absent.right"
  //                 type="checkbox"
  //               />
  //             </div>
  //           </li>
  //         </ul>
  //         <ul>
  //           <p className={Style.description}>Reakcja na światło:</p>
  //           <li className={Style.wrapCheck}>
  //             <label>normalne</label>
  //             <div className={Style.wrapCheck}>
  //               <Field
  //                 className={Style.check}
  //                 name="public.regular.left"
  //                 type="checkbox"
  //               />
  //               <Field
  //                 className={Style.check}
  //                 name="public.regular.right"
  //                 type="checkbox"
  //               />
  //             </div>
  //           </li>
  //           <li className={Style.wrapCheck}>
  //             <label>wąskie</label>
  //             <div className={Style.wrapCheck}>
  //               <Field
  //                 className={Style.check}
  //                 name="public.narrow.left"
  //                 type="checkbox"
  //               />
  //               <Field
  //                 className={Style.check}
  //                 name="public.narrow.right"
  //                 type="checkbox"
  //               />
  //             </div>
  //           </li>
  //           <li className={Style.wrapCheck}>
  //             <label>szerokie</label>
  //             <div className={Style.wrapCheck}>
  //               <Field
  //                 className={Style.check}
  //                 name="public.wide.left"
  //                 type="checkbox"
  //               />
  //               <Field
  //                 className={Style.check}
  //                 name="public.wide.right"
  //                 type="checkbox"
  //               />
  //             </div>
  //           </li>
  //         </ul>
  //       </div>
  //       <div className={`${Style.wrapGlasgow}`}>
  //         <h2>CIŚNIENIE TĘTNICZE</h2>
  //         <div className={`${Style.wrapCheck} ${Style.wrapBreathingRate}`}>
  //           <Field
  //             className={Style.breathingRate}
  //             name="bloodPressure.systolic"
  //             type="number"
  //             // value="0"
  //           />
  //           <p>/</p>
  //           <Field
  //             className={Style.breathingRate}
  //             name="bloodPressure.diastolic"
  //             type="number"
  //             // type="button"
  //             // value="0"
  //           />
  //           <p> mm/Hg</p>
  //         </div>
  //       </div>
  //       <div className={Style.wrapGlasgow}>
  //         <h2>TĘTNO</h2>
  //         <div className={Style.wrapPulse}>
  //           <div className={`${Style.wrapCheck} ${Style.wrapBreathingRate}`}>
  //             <Field
  //               className={Style.breathingRate}
  //               name="pulse"
  //               type="number"
  //             />
  //             <p> /min</p>
  //           </div>
  //           <div className={Style.wrapPulseCheck}>
  //             <label htmlFor="heartRhythmRegular" className={Style.pulsText}>
  //               miarowe
  //             </label>
  //             <Field
  //               id="heartRhythmRegular"
  //               className={Style.check}
  //               name="heartRhythm"
  //               type="radio"
  //               value="Regular"
  //             />
  //             <Field
  //               id="heartRhythmIrregular"
  //               className={Style.check}
  //               name="heartRhythm"
  //               type="radio"
  //               value="Irregular"
  //             />
  //             <label htmlFor="heartRhythmIrregular" className={Style.pulsText}>
  //               niemiarowe
  //             </label>

  //             <div className={Style.wrapLungSide}></div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };
  return (
    <Formik
      enableReinitialize={true}
      initialValues={appContext.assessHealthCondition}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        appContext.setAssessHealthCondition(values);
      }}
    >
      {({ handleSubmit, submitForm }) => (
        <form onSubmit={handleSubmit}>
          {glasgow()}
          {rts()}
          {/* {breath()} */}
          {/* {pupil()} */}
          <FormNavigation onSaveForm={submitForm} />
        </form>
      )}
    </Formik>
  );
};

export default AssessHealthCondition;
