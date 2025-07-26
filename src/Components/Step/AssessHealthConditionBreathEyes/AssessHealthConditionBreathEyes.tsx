import Style from './AssessHealthConditionBreathEyes.module.scss';
import { useAppContext } from '../../../context/AppContext';
import { FormNavigation } from '../../Section/FormNavigation/FormNavigation';
import { Formik, Field } from 'formik';

const AssessHealthConditionBreathEyes = () => {
  const appContext = useAppContext();
  const breath = () => {
    return (
      <>
        <div className={Style.wrapGlasgow}>
          <h2>UKŁAD ODDECHOWY</h2>
          <ul className={Style.wrapList}>
            <li className={`${Style.wrapCheck} ${Style.wrapBreathingRate}`}>
              <label>częstość oddechów</label>
              <Field
                className={Style.breathingRate}
                name="respiratorySystem.respiratoryRate"
                type="number"
              />
              <p> /min</p>
            </li>
            <li className={Style.wrapCheck}>
              <p>duszność</p>
              <div className={Style.wrapCheck}>
                <Field
                  id="dyspneaYes"
                  className={Style.checkField}
                  name="respiratorySystem.dyspnea"
                  type="radio"
                  value="yes"
                />
                <label htmlFor="dyspneaYes" className={Style.check}>
                  TAK
                </label>

                <Field
                  id="dyspneaNO"
                  className={Style.checkField}
                  name="respiratorySystem.dyspnea"
                  type="radio"
                  value="no"
                />
                <label htmlFor="dyspneaNO" className={Style.check}>
                  NIE
                </label>
              </div>
            </li>
            <li className={Style.wrapCheck}>
              <p>siinica</p>
              <div className={Style.wrapCheck}>
                <Field
                  id="cyanosisYes"
                  className={Style.checkField}
                  name="respiratorySystem.cyanosis"
                  type="radio"
                  value="yes"
                />
                <label htmlFor="cyanosisYes" className={Style.check}>
                  TAK
                </label>

                <Field
                  id="cyanosisNo"
                  className={Style.checkField}
                  name="respiratorySystem.cyanosis"
                  type="radio"
                  value="no"
                />
                <label htmlFor="cyanosisNo" className={Style.check}>
                  NIE
                </label>
              </div>
            </li>
            <li className={Style.wrapCheck}>
              <p>bezdech</p>
              <div className={Style.wrapCheck}>
                <Field
                  id="apneaYes"
                  className={Style.checkField}
                  name="respiratorySystem.apnea"
                  type="radio"
                  value="yes"
                />
                <label htmlFor="apneaYes" className={Style.check}>
                  TAK
                </label>

                <Field
                  id="apneaNo"
                  className={Style.checkField}
                  name="respiratorySystem.apnea"
                  type="radio"
                  value="no"
                />
                <label htmlFor="apneaNo" className={Style.check}>
                  NIE
                </label>
              </div>
            </li>
          </ul>
          <ul className={Style.wrapList}>
            <div className={Style.wrapLungSide}>
              <p className={Style.lungSide}>L</p>
              <p className={Style.lungSide}>P</p>
            </div>
            <li className={Style.wrapCheck}>
              <label>szmer prawidłowy</label>
              <div className={Style.wrapCheck}>
                <Field
                  className={Style.check}
                  name="respiratorySystem.normalBreathSounds.left"
                  type="checkbox"
                />
                <Field
                  className={Style.check}
                  name="respiratorySystem.normalBreathSounds.right"
                  type="checkbox"
                />
              </div>
            </li>
            <li className={Style.wrapCheck}>
              <label>furczenie</label>
              <div className={Style.wrapCheck}>
                <Field
                  className={Style.check}
                  name="respiratorySystem.wheezing.left"
                  type="checkbox"
                />
                <Field
                  className={Style.check}
                  name="respiratorySystem.wheezing.right"
                  type="checkbox"
                />
              </div>
            </li>
            <li className={Style.wrapCheck}>
              <label>świsty</label>
              <div className={Style.wrapCheck}>
                <Field
                  className={Style.check}
                  name="respiratorySystem.whistling.left"
                  type="checkbox"
                />
                <Field
                  className={Style.check}
                  name="respiratorySystem.whistling.right"
                  type="checkbox"
                />
              </div>
            </li>
            <li className={Style.wrapCheck}>
              <label>trzeszczenie</label>
              <div className={Style.wrapCheck}>
                <Field
                  className={Style.check}
                  name="respiratorySystem.crepitation.left"
                  type="checkbox"
                />
                <Field
                  className={Style.check}
                  name="respiratorySystem.crepitation.right"
                  type="checkbox"
                />
              </div>
            </li>
            <li className={Style.wrapCheck}>
              <label>rzężenie</label>
              <div className={Style.wrapCheck}>
                <Field
                  className={Style.check}
                  name="respiratorySystem.rales.left"
                  type="checkbox"
                />
                <Field
                  className={Style.check}
                  name="respiratorySystem.rales.right"
                  type="checkbox"
                />
              </div>
            </li>
            <li className={Style.wrapCheck}>
              <label>brak szmeru</label>
              <div className={Style.wrapCheck}>
                <Field
                  className={Style.check}
                  name="respiratorySystem.noBreathSounds.left"
                  type="checkbox"
                />
                <Field
                  className={Style.check}
                  name="respiratorySystem.noBreathSounds.right"
                  type="checkbox"
                />
              </div>
            </li>
            <li className={Style.wrapCheck}>
              <label>inne:</label>
              <div className={Style.wrapCheck}>
                <Field
                  className={Style.check}
                  name="respiratorySystem.otherSounds.left"
                  type="checkbox"
                />
                <Field
                  className={Style.check}
                  name="respiratorySystem.otherSounds.right"
                  type="checkbox"
                />
              </div>
            </li>
            <Field
              className={Style.breathDifferent}
              name="respiratorySystem.otherSounds.description"
              type="text"
            />
            <li className={`${Style.wrapCheck} ${Style.wrapBreathingRate}`}>
              <label>Saturacja</label>
              <Field
                className={Style.breathingRate}
                name="respiratorySystem.oxygenSaturation"
                type="number"
              />
              <p> %</p>
            </li>
          </ul>
        </div >
      </>
    );
  };

  const pupil = () => {
    return (
      <div className={Style.wrapPupil}>
        <div className={Style.wrapGlasgow}>
          <h2>ŹRENICE</h2>
          <ul>
            <div className={Style.wrapLungSide}>
              <p className={Style.description}>Reakcja na światło:</p>
              <p className={Style.lungSide}>L</p>
              <p className={Style.lungSide}>P</p>
            </div>
            <li className={Style.wrapCheck}>
              <label>prawidłowa</label>
              <div className={Style.wrapCheck}>
                <Field
                  className={Style.check}
                  name="public.normal.left"
                  type="checkbox"
                />
                <Field
                  className={Style.check}
                  name="public.normal.right"
                  type="checkbox"
                />
              </div>
            </li>
            <li className={Style.wrapCheck}>
              <label>powolna</label>
              <div className={Style.wrapCheck}>
                <Field
                  className={Style.check}
                  name="public.slow.left"
                  type="checkbox"
                />
                <Field
                  className={Style.check}
                  name="public.slow.right"
                  type="checkbox"
                />
              </div>
            </li>
            <li className={Style.wrapCheck}>
              <label>brak</label>
              <div className={Style.wrapCheck}>
                <Field
                  className={Style.check}
                  name="public.absent.left"
                  type="checkbox"
                />
                <Field
                  className={Style.check}
                  name="public.absent.right"
                  type="checkbox"
                />
              </div>
            </li>
          </ul>
          <ul>
            <p className={Style.description}>Reakcja na światło:</p>
            <li className={Style.wrapCheck}>
              <label>normalne</label>
              <div className={Style.wrapCheck}>
                <Field
                  className={Style.check}
                  name="public.regular.left"
                  type="checkbox"
                />
                <Field
                  className={Style.check}
                  name="public.regular.right"
                  type="checkbox"
                />
              </div>
            </li>
            <li className={Style.wrapCheck}>
              <label>wąskie</label>
              <div className={Style.wrapCheck}>
                <Field
                  className={Style.check}
                  name="public.narrow.left"
                  type="checkbox"
                />
                <Field
                  className={Style.check}
                  name="public.narrow.right"
                  type="checkbox"
                />
              </div>
            </li>
            <li className={Style.wrapCheck}>
              <label>szerokie</label>
              <div className={Style.wrapCheck}>
                <Field
                  className={Style.check}
                  name="public.wide.left"
                  type="checkbox"
                />
                <Field
                  className={Style.check}
                  name="public.wide.right"
                  type="checkbox"
                />
              </div>
            </li>
          </ul>
        </div>
        <div className={`${Style.wrapGlasgow}`}>
          <h2>CIŚNIENIE TĘTNICZE</h2>
          <div className={`${Style.wrapCheck} ${Style.wrapBreathingRate}`}>
            <Field
              className={Style.breathingRate}
              name="bloodPressure.systolic"
              type="number"
            />
            <p>/</p>
            <Field
              className={Style.breathingRate}
              name="bloodPressure.diastolic"
              type="number"
            />
            <p> mm/Hg</p>
          </div>
        </div>
        <div className={Style.wrapGlasgow}>
          <h2>TĘTNO</h2>
          <div className={Style.wrapPulse}>
            <div className={`${Style.wrapCheck} ${Style.wrapBreathingRate}`}>
              <Field
                className={Style.breathingRate}
                name="pulse"
                type="number"
              />
              <p> /min</p>
            </div>
            <div className={Style.wrapPulseCheck}>
              <label htmlFor="heartRhythmRegular" className={Style.pulsText}>
                miarowe
              </label>
              <Field
                id="heartRhythmRegular"
                className={Style.check}
                name="heartRhythm"
                type="radio"
                value="Regular"
              />
              <Field
                id="heartRhythmIrregular"
                className={Style.check}
                name="heartRhythm"
                type="radio"
                value="Irregular"
              />
              <label htmlFor="heartRhythmIrregular" className={Style.pulsText}>
                niemiarowe
              </label>

              <div className={Style.wrapLungSide}></div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  function symptoms() {
    return (
      <div className={Style.wrapGlasgow}>
        <h2>OBJAWY</h2>
        <ul className={Style.wrapList}>
          <li className={Style.wrapCheck}>
            <p>wstrząs</p>
            <div className={Style.wrapCheck}>
              <Field
                id="ShockYes"
                className={Style.checkField}
                name="symptomsClinical.Shock"
                type="radio"
                value="yes"
              />
              <label htmlFor="ShockYes" className={Style.check}>
                TAK
              </label>

              <Field
                id="ShockNO"
                className={Style.checkField}
                name="symptomsClinical.Shock"
                type="radio"
                value="no"
              />
              <label htmlFor="ShockNO" className={Style.check}>
                NIE
              </label>
            </div>
          </li>
          <li className={Style.wrapCheck}>
            <p>NZK</p>
            <div className={Style.wrapCheck}>
              <Field
                id="cardiacArrestYes"
                className={Style.checkField}
                name="symptomsClinical.cardiacArrest"
                type="radio"
                value="yes"
              />
              <label htmlFor="cardiacArrestYes" className={Style.check}>
                TAK
              </label>
              <Field
                id="cardiacArrestNo"
                className={Style.checkField}
                name="symptomsClinical.cardiacArrest"
                type="radio"
                value="no"
              />
              <label htmlFor="cardiacArrestNo" className={Style.check}>
                NIE
              </label>
            </div>
          </li>
          <li className={Style.wrapCheck}>
            <p>objawy oponowe</p>
            <div className={Style.wrapCheck}>
              <Field
                id="meningealSignsYes"
                className={Style.checkField}
                name="symptomsClinical.meningealSigns"
                type="radio"
                value="yes"
              />
              <label htmlFor="meningealSignsYes" className={Style.check}>
                TAK
              </label>
              <Field
                id="meningealSignsNo"
                className={Style.checkField}
                name="symptomsClinical.meningealSigns"
                type="radio"
                value="no"
              />
              <label htmlFor="meningealSignsNo" className={Style.check}>
                NIE
              </label>
            </div>
          </li>
          <li className={Style.wrapCheck}>
            <p>drgawki</p>
            <div className={Style.wrapCheck}>
              <Field
                id="seizuresYes"
                className={Style.checkField}
                name="symptomsClinical.seizures"
                type="radio"
                value="yes"
              />
              <label htmlFor="seizuresYes" className={Style.check}>
                TAK
              </label>
              <Field
                id="seizuresNo"
                className={Style.checkField}
                name="symptomsClinical.seizures"
                type="radio"
                value="no"
              />
              <label htmlFor="seizuresNo" className={Style.check}>
                NIE
              </label>
            </div>
          </li>
          <li className={Style.wrapCheck}>
            <p>afazja</p>
            <div className={Style.wrapCheck}>
              <Field
                id="aphasiaYes"
                className={Style.checkField}
                name="symptomsClinical.aphasia"
                type="radio"
                value="yes"
              />
              <label htmlFor="aphasiaYes" className={Style.check}>
                TAK
              </label>
              <Field
                id="aphasiaNo"
                className={Style.checkField}
                name="symptomsClinical.aphasia"
                type="radio"
                value="no"
              />
              <label htmlFor="aphasiaNo" className={Style.check}>
                NIE
              </label>
            </div>
          </li>
          <li className={Style.wrapCheck}>
            <p>wymioty</p>
            <div className={Style.wrapCheck}>
              <Field
                id="vomitingYes"
                className={Style.checkField}
                name="symptomsClinical.vomiting"
                type="radio"
                value="yes"
              />
              <label htmlFor="vomitingYes" className={Style.check}>
                TAK
              </label>
              <Field
                id="vomitingNo"
                className={Style.checkField}
                name="symptomsClinical.vomiting"
                type="radio"
                value="no"
              />
              <label htmlFor="vomitingNo" className={Style.check}>
                NIE
              </label>
            </div>
          </li>
          <li className={Style.wrapCheck}>
            <p>biegunka</p>
            <div className={Style.wrapCheck}>
              <Field
                id="diarrheaYes"
                className={Style.checkField}
                name="symptomsClinical.diarrhea"
                type="radio"
                value="yes"
              />
              <label htmlFor="diarrheaYes" className={Style.check}>
                TAK
              </label>
              <Field
                id="diarrheaNo"
                className={Style.checkField}
                name="symptomsClinical.diarrhea"
                type="radio"
                value="no"
              />
              <label htmlFor="diarrheaNo" className={Style.check}>
                NIE
              </label>
            </div>
          </li>
          <li className={Style.wrapCheck}>
            <p>krwawienie</p>
            <div className={Style.wrapCheck}>
              <Field
                id="bleedingYes"
                className={Style.checkField}
                name="symptomsClinical.bleeding"
                type="radio"
                value="yes"
              />
              <label htmlFor="bleedingYes" className={Style.check}>
                TAK
              </label>
              <Field
                id="bleedingNo"
                className={Style.checkField}
                name="symptomsClinical.bleeding"
                type="radio"
                value="no"
              />
              <label htmlFor="bleedingNo" className={Style.check}>
                NIE
              </label>
            </div>
          </li>
          <li className={Style.wrapCheck}>
            <p>obrzęki</p>
            <div className={Style.wrapCheck}>
              <Field
                id="swellingYes"
                className={Style.checkField}
                name="symptomsClinical.swelling"
                type="radio"
                value="yes"
              />
              <label htmlFor="swellingYes" className={Style.check}>
                TAK
              </label>
              <Field
                id="swellingNo"
                className={Style.checkField}
                name="symptomsClinical.swelling"
                type="radio"
                value="no"
              />
              <label htmlFor="swellingNo" className={Style.check}>
                NIE
              </label>
            </div>
          </li>
          <li className={Style.wrapCheck}>
            <p>zasłabnięcie</p>
            <div className={Style.wrapCheck}>
              <Field
                id="syncopeYes"
                className={Style.checkField}
                name="symptomsClinical.syncope"
                type="radio"
                value="yes"
              />
              <label htmlFor="syncopeYes" className={Style.check}>
                TAK
              </label>
              <Field
                id="syncopeNo"
                className={Style.checkField}
                name="symptomsClinical.syncope"
                type="radio"
                value="no"
              />
              <label htmlFor="syncopeNo" className={Style.check}>
                NIE
              </label>
            </div>
          </li>
          <li className={Style.wrapCheck}>
            <p>hipotermia</p>
            <div className={Style.wrapCheck}>
              <Field
                id="hypothermiaYes"
                className={Style.checkField}
                name="symptomsClinical.hypothermia"
                type="radio"
                value="yes"
              />
              <label htmlFor="hypothermiaYes" className={Style.check}>
                TAK
              </label>
              <Field
                id="hypothermiaNo"
                className={Style.checkField}
                name="symptomsClinical.hypothermia"
                type="radio"
                value="no"
              />
              <label htmlFor="hypothermiaNo" className={Style.check}>
                NIE
              </label>
            </div>
          </li>
          <li className={Style.wrapCheck}>
            <div>
              <p>Porażenie prądem </p>
              <p>lub piorunem</p>
            </div>
            <div className={Style.wrapCheck}>
              <Field
                id="electrocutionYes"
                className={Style.checkField}
                name="symptomsClinical.electrocution"
                type="radio"
                value="yes"
              />
              <label htmlFor="electrocutionYes" className={Style.check}>
                TAK
              </label>
              <Field
                id="electrocutionNo"
                className={Style.checkField}
                name="symptomsClinical.electrocution"
                type="radio"
                value="no"
              />
              <label htmlFor="electrocutionNo" className={Style.check}>
                NIE
              </label>
            </div>
          </li>
        </ul>
      </div>
    );
  }

  function skin() {
    return (
      <div className={Style.wrapGlasgow}>
        <h2>SKÓRA</h2>
        <ul className={Style.wrapList}>
          <p className={Style.description}>Wygląd</p>
          <li className={Style.wrapCheck}>
            <p> w normie</p>
            <Field
              className={Style.check}
              name="skinAppearance.normal"
              type="checkbox"
            />
          </li>
          <li className={Style.wrapCheck}>
            <p>blada</p>
            <Field
              className={Style.check}
              name="skinAppearance.pale"
              type="checkbox"
            />
          </li>
          <li className={Style.wrapCheck}>
            <p>rumień</p>
            <Field
              className={Style.check}
              name="skinAppearance.erythema"
              type="checkbox"
            />
          </li>
          <li className={Style.wrapCheck}>
            <p>zażółcenie</p>
            <Field
              className={Style.check}
              name="skinAppearance.jaundice"
              type="checkbox"
            />
          </li>
          <li className={Style.wrapCheck}>
            <p>sinica obwodowa</p>
            <Field
              className={Style.check}
              name="skinAppearance.peripheralCyanosis"
              type="checkbox"
            />
          </li>
          <li className={Style.wrapCheck}>
            <p>sinica centralna</p>
            <Field
              className={Style.check}
              name="skinAppearance.centralCyanosis"
              type="checkbox"
            />
          </li>
          <p className={Style.description}>Wilgotność</p>
          <li className={Style.wrapCheck}>
            <p>w normie</p>
            <Field
              className={Style.check}
              name="skinMoisture.normal"
              type="checkbox"
            />
          </li>
          <li className={Style.wrapCheck}>
            <p>wilgotna</p>
            <Field
              className={Style.check}
              name="skinMoisture.moist"
              type="checkbox"
            />
          </li>
          <li className={Style.wrapCheck}>
            <p>sucha</p>
            <Field
              className={Style.check}
              name="skinMoisture.dry"
              type="checkbox"
            />
          </li>
          <p className={Style.description}>Temperatura:</p>
          <li className={Style.wrapCheck}>
            <p>w normie</p>
            <Field
              className={Style.check}
              name="temperature.normal"
              type="checkbox"
            />
          </li>
          <li className={Style.wrapCheck}>
            <p>chłodna</p>
            <Field
              className={Style.check}
              name="temperature.cool"
              type="checkbox"
            />
          </li>
          <li className={Style.wrapCheck}>
            <p>ciepła</p>
            <Field
              className={Style.check}
              name="temperature.warm"
              type="checkbox"
            />
          </li>
          <li className={`${Style.wrapCheck} ${Style.wrapBreathingRate}`}>
            <p>TEMPERATURA</p>
            <Field
              className={Style.breathingRate}
              name="temperature.bodyTemperature"
              type="number"
            />
            <p> °C</p>
          </li>
        </ul>
      </div>
    );
  }

  return (
    <Formik
      initialValues={appContext.assessHealthConditionBreathEyes}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        appContext.setAssessHealthConditionBreathEyes(values);
      }}
    >
      {({ handleSubmit, submitForm }) => (
        <form onSubmit={handleSubmit}>
          {breath()}
          {pupil()}
          {symptoms()}
          {skin()}
          <FormNavigation onSaveForm={submitForm} />
        </form>
      )}
    </Formik>
  );
};
export default AssessHealthConditionBreathEyes;
