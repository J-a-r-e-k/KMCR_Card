import Style from './DiagnosisCode.module.scss';
import { Formik, Field } from 'formik';
import { useAppContext } from '../../../context/AppContext';
import { FormNavigation } from '../../Section/FormNavigation/FormNavigation';
import Database from '../Icon/Database';

const DiagnosisCode = () => {
  const appContext = useAppContext();

  function findCode() {
    console.log('Kod ICD-10');
  }
  return (
    <Formik
      initialValues={appContext.diagnosisCode}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        appContext.setDiagnosisCode(values);
      }}
    >
      {({ handleSubmit, submitForm }) => (
        <form onSubmit={handleSubmit}>
          <h2>III - ROZPOZNANIE</h2>
          <div className={Style.wrapGlobal}>
            <div className={Style.wrapDiv}>
              <label>Opis:</label>
              <Field
                className={Style.textField}
                name="primaryDiagnosis.description"
                type="text"
              />
              <div className={Style.wrapCode}>
                <p className={Style.textCode}>KOD ICD10</p>
                <Field
                  className={Style.codeField}
                  name="primaryDiagnosis.code"
                  type="text"
                />
              </div>
              <button onClick={() => findCode()}>
                <Database nameClass={Style.btn} />
              </button>
            </div>
            <div className={Style.wrapDiv}>
              <label>Opis:</label>
              <Field
                className={Style.textField}
                name="secondDiagnosis.description"
                type="text"
              />
              <div className={Style.wrapCode}>
                <p className={Style.textCode}>KOD ICD10</p>
                <Field
                  className={Style.codeField}
                  name="secondDiagnosis.code"
                  type="text"
                />
              </div>
              <button onClick={() => findCode()}>
                <Database nameClass={Style.btn} />
              </button>
            </div>
            <div className={Style.wrapDiv}>
              <label>Opis:</label>
              <Field
                className={Style.textField}
                name="thirdDiagnosis.description"
                type="text"
              />
              <div className={Style.wrapCode}>
                <p className={Style.textCode}>KOD ICD10</p>
                <Field
                  className={Style.codeField}
                  name="thirdDiagnosis.code"
                  type="text"
                />
              </div>
              <button onClick={() => findCode()}>
                <Database nameClass={Style.btn} />
              </button>
            </div>
          </div>
          <FormNavigation onSaveForm={submitForm} />
        </form>
      )}
    </Formik>
  );
};

export default DiagnosisCode;
