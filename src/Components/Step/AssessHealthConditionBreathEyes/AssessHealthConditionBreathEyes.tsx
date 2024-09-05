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
              <label>częśtość oddechów</label>
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
              {/* left: '',
        right: '', */}
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
        </div>
      </>
    );
  };

  const pupil = () => {
    return (
      <div>
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
              // value="0"
            />
            <p>/</p>
            <Field
              className={Style.breathingRate}
              name="bloodPressure.diastolic"
              type="number"
              // type="button"
              // value="0"
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
  return (
    <Formik
      initialValues={appContext.assessHealthCondition}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        appContext.setAssessHealthCondition(values);
      }}
    >
      {({ handleSubmit, submitForm }) => (
        <form onSubmit={handleSubmit}>
          {breath()}
          {pupil()}
          <FormNavigation onSaveForm={submitForm} />
        </form>
      )}
    </Formik>
  );
};

export default AssessHealthConditionBreathEyes;
