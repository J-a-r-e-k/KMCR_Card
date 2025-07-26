import Style from './MeasuredParameters.module.scss';
import { useAppContext } from '../../../context/AppContext';
import { Formik, Field } from 'formik';
import { FormNavigation } from '../../Section/FormNavigation/FormNavigation';

const MeasuredParameters = () => {
  const appContext = useAppContext();

  function belly() {
    return (
      <div className={Style.wrapGlobal}>
        <h2>JAMA BRZUSZNA</h2>
        <ul className={Style.wrapList}>
          <li className={Style.wrapCheck}>
            <p> w normie</p>
            <Field
              className={Style.check}
              name="abdominalExamination.normal"
              type="checkbox"
            />
          </li>
          <li className={Style.wrapCheck}>
            <p>bolesność palpacyjna</p>
            <Field
              className={Style.check}
              name="abdominalExamination.palpationTenderness"
              type="checkbox"
            />
          </li>
          <li className={Style.wrapCheck}>
            <p>brak perystaltyki</p>
            <Field
              className={Style.check}
              name="abdominalExamination.noPeristalsis"
              type="checkbox"
            />
          </li>
          <li className={Style.wrapCheck}>
            <p>objawy otrzewnowe</p>
            <Field
              className={Style.check}
              name="abdominalExamination.PeritonealSigns"
              type="checkbox"
            />
          </li>
        </ul>
      </div>
    );
  }

  function psychomotorEvaluation() {
    return (
      <div className={Style.wrapGlobal}>
        <h2>OCENA PSYCHO-RUCHOWA</h2>
        <ul className={Style.wrapList}>
          <li className={Style.wrapCheck}>
            <p> w normie</p>
            <Field
              className={Style.check}
              name="psychomotorEvaluation.normal"
              type="checkbox"
            />
          </li>
          <li className={Style.wrapCheck}>
            <p>spowolniały</p>
            <Field
              className={Style.check}
              name="psychomotorEvaluation.slowed"
              type="checkbox"
            />
          </li>
          <li className={Style.wrapCheck}>
            <p>pobudzony</p>
            <Field
              className={Style.check}
              name="psychomotorEvaluation.agitated"
              type="checkbox"
            />
          </li>
          <li className={Style.wrapCheck}>
            <p>agresywny</p>
            <Field
              className={Style.check}
              name="psychomotorEvaluation.aggressive"
              type="checkbox"
            />
          </li>
        </ul>
      </div>
    );
  }

  function heartTone() {
    return (
      <div className={Style.wrapGlobal}>
        <h2>TONY SERCA</h2>
        <ul className={Style.wrapList}>
          <li className={Style.wrapCheck}>
            <p>czyste / głośne</p>
            <Field
              className={Style.check}
              name="heartTone.normal"
              type="checkbox"
            />
          </li>
          <li className={Style.wrapCheck}>
            <p>stłumione</p>
            <Field
              className={Style.check}
              name="heartTone.muffled"
              type="checkbox"
            />
          </li>
          <li className={Style.wrapCheck}>
            <p>inne:</p>
            <Field
              className={Style.check}
              name="heartTone.other"
              type="checkbox"
            />
          </li>
        </ul>
      </div>
    );
  }

  function breathOdor() {
    return (
      <div className={Style.wrapGlobal}>
        <h2>ZAPACH Z UST</h2>
        <ul className={Style.wrapList}>
          <li className={Style.wrapCheck}>
            <p>rozpuszczalnik org.</p>
            <Field
              className={Style.check}
              name="breathOdor.solvent"
              type="checkbox"
            />
          </li>
          <li className={Style.wrapCheck}>
            <p>alkohol</p>
            <Field
              className={Style.check}
              name="breathOdor.alcohol"
              type="checkbox"
            />
          </li>
          <li className={Style.wrapCheck}>
            <p>inne:</p>
            <Field
              className={Style.check}
              name="breathOdor.other"
              type="checkbox"
            />
          </li>
        </ul>
      </div>
    );
  }

  function glucoseMonitoring() {
    return (
      <div className={`${Style.wrapGlobal} ${Style.wrapGlucose} `}>
        <div>
          <p className={Style.description}>POZIOM</p>
          <p className={Style.description}>GLUKOZY</p>
        </div>
        <Field
          className={Style.fieldNo}
          name="glucoseMonitoring"
          type="number"
        />
        <p> mg%</p>
      </div>
    );
  }

  function paresis() {
    return (
      <div className={Style.wrapGlobal}>
        <div className={Style.wrapCheck}>
          <div>
            <p className={Style.description}>NIEDOWŁAD /</p>
            <p className={Style.description}>PORAŻENIE</p>
          </div>
          <Field
            className={Style.check}
            name="paresis.paralysis"
            type="checkbox"
          />
        </div>
        <ul>
          <div className={Style.wrapLungSide}>
            <p className={Style.lungSide}>L</p>
            <p className={Style.lungSide}>P</p>
          </div>
          <li className={Style.wrapCheck}>
            <label>kończyna górna</label>
            <div className={Style.wrapCheck}>
              <Field
                className={Style.check}
                name="paresis.upperLimb.left"
                type="checkbox"
              />
              <Field
                className={Style.check}
                name="paresis.upperLimb.right"
                type="checkbox"
              />
            </div>
          </li>
          <li className={Style.wrapCheck}>
            <label>kończyna dolna</label>
            <div className={Style.wrapCheck}>
              <Field
                className={Style.check}
                name="paresis.lowerLimb.left"
                type="checkbox"
              />
              <Field
                className={Style.check}
                name="paresis.lowerLimb.right"
                type="checkbox"
              />
            </div>
          </li>
        </ul>
      </div>
    );
  }

  function other() {
    return (
      <div className={Style.wrapGlobal}>
        <h2>INNE</h2>
        <ul>
          <li className={Style.wrapCheck}>
            <p>ciąża</p>
            <div className={Style.wrapCheck}>
              <Field
                id="pregnancyYes"
                className={Style.checkField}
                name="other.pregnancy"
                type="radio"
                value="yes"
              />
              <label htmlFor="pregnancyYes" className={Style.check}>
                TAK
              </label>

              <Field
                id="pregnancyNO"
                className={Style.checkField}
                name="other.pregnancy"
                type="radio"
                value="no"
              />
              <label htmlFor="pregnancyNO" className={Style.check}>
                NIE
              </label>
            </div>
          </li>
          <li className={Style.wrapCheck}>
            <p>poród</p>
            <div className={Style.wrapCheck}>
              <Field
                id="deliveryYes"
                className={Style.checkField}
                name="other.delivery"
                type="radio"
                value="yes"
              />
              <label htmlFor="deliveryYes" className={Style.check}>
                TAK
              </label>
              <Field
                id="deliveryNo"
                className={Style.checkField}
                name="other.delivery"
                type="radio"
                value="no"
              />
              <label htmlFor="deliveryNo" className={Style.check}>
                NIE
              </label>
            </div>
          </li>
          <li className={Style.wrapCheck}>
            <div>
              <p>choroba</p>
              <p>zakaźna </p>
            </div>
            <div className={Style.wrapCheck}>
              <Field
                id="infectiousDiseaseYes"
                className={Style.checkField}
                name="other.infectiousDisease"
                type="radio"
                value="yes"
              />
              <label htmlFor="infectiousDiseaseYes" className={Style.check}>
                TAK
              </label>
              <Field
                id="infectiousDiseaseNo"
                className={Style.checkField}
                name="other.infectiousDisease"
                type="radio"
                value="no"
              />
              <label htmlFor="infectiousDiseaseNo" className={Style.check}>
                NIE
              </label>
            </div>
          </li>
        </ul>
      </div>
    );
  }

  function ekg() {
    return (
      <div className={Style.wrapGlobal}>
        <h2>EKG</h2>
        <ul className={Style.wrapList}>
          <li className={Style.wrapCheck}>
            <p>rytm zatokowy</p>
            <Field
              className={Style.check}
              name="ekg.sinusRhythm"
              type="checkbox"
            />
          </li>
          <li className={Style.wrapCheck}>
            <p>tachykardia nadkomorowa</p>
            <Field
              className={Style.check}
              name="ekg.supraventricularTachycardia"
              type="checkbox"
            />
          </li>
          <li className={Style.wrapCheck}>
            <p>tachykardia komorowa</p>
            <Field
              className={Style.check}
              name="ekg.ventricularTachycardia"
              type="checkbox"
            />
          </li>
          <li className={Style.wrapCheck}>
            <p>migotanie/ Trzepotanie przedsionków</p>
            <Field
              className={Style.check}
              name="ekg.atrialFibrillationFlutter"
              type="checkbox"
            />
          </li>
          <li className={Style.wrapCheck}>
            <p>AV blok</p>
            <Field className={Style.check} name="ekg.avBlock" type="checkbox" />
          </li>
          <li className={Style.wrapCheck}>
            <p>sVES</p>
            <Field className={Style.check} name="ekg.sVES" type="checkbox" />
          </li>
          <li className={Style.wrapCheck}>
            <p>VES</p>
            <Field className={Style.check} name="ekg.ves" type="checkbox" />
          </li>
          <li className={Style.wrapCheck}>
            <p>VF/VT</p>
            <Field className={Style.check} name="ekg.vfVt" type="checkbox" />
          </li>
          <li className={Style.wrapCheck}>
            <p>ASYSTOLIA</p>
            <Field
              className={Style.check}
              name="ekg.asystole"
              type="checkbox"
            />
          </li>
          <li className={Style.wrapCheck}>
            <p>PEA</p>
            <Field className={Style.check} name="ekg.pea" type="checkbox" />
          </li>
          <li className={Style.wrapCheck}>
            <p>rozrusznik</p>
            <Field
              className={Style.check}
              name="ekg.pacemaker"
              type="checkbox"
            />
          </li>
          <li className={Style.wrapCheck}>
            <p>OZW</p>
            <Field className={Style.check} name="ekg.stemi" type="checkbox" />
          </li>
          <li className={Style.wrapCheck}>
            <p>zawał</p>
            <Field
              className={Style.check}
              name="ekg.myocardialInfarction"
              type="checkbox"
            />
          </li>
          <li className={`${Style.wrapCheck}`}>
            <p>inne:</p>
            <Field className={Style.textField} name="ekg.other" type="text" />
          </li>
        </ul>
      </div>
    );
  }

  return (
    <Formik
      initialValues={appContext.measuredParameters}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        appContext.setMeasuredParameters(values);
      }}
    >
      {({ handleSubmit, submitForm }) => (
        <form onSubmit={handleSubmit}>
          <div className={Style.wrap}>
            {belly()}
            {psychomotorEvaluation()}
            {heartTone()}
          </div>
          <div className={Style.wrap}>
            {breathOdor()}
            {glucoseMonitoring()}
            {paresis()}
            {other()}
          </div>
          {ekg()}
          <FormNavigation onSaveForm={submitForm} />
        </form>
      )}
    </Formik>
  );
};
export default MeasuredParameters;
