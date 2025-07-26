import {
  useAppContext,
  AssessHealthCondition as AssessHealthConditionType,
} from '../../../context/AppContext';
import { FormNavigation } from '../../Section/FormNavigation/FormNavigation';
import Style from './AssessHealthCondition.module.scss';
import { Formik, Field } from 'formik';
import { useEffect } from 'react';

const AssessHealthCondition = () => {
  const appContext = useAppContext();

  const Glasgow = (values: AssessHealthConditionType) => {
    useEffect(() => {
      const { reactWords, openingEyes, reakcjaMotoryczna } = values.gcs;
      if (reactWords && openingEyes && reakcjaMotoryczna) {
        const sumGcs = +reactWords + +openingEyes + +reakcjaMotoryczna;

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
            openingEyes,
            reactWords,
            reakcjaMotoryczna,
            sumGcs: sumGcs,
          },
          rts: {
            ...appContext.assessHealthCondition.rts,
            gcs: gcsRts,
          },
        });
      }
    }, [values.gcs]);

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

  return (
    <Formik
      enableReinitialize={true}
      initialValues={appContext.assessHealthCondition}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        appContext.setAssessHealthCondition(values);
      }}
    >
      {({ handleSubmit, submitForm, values }) => (
        <form onSubmit={handleSubmit}>
          {Glasgow(values)}
          <FormNavigation onSaveForm={submitForm} />
        </form>
      )}
    </Formik>
  );
};

export default AssessHealthCondition;
