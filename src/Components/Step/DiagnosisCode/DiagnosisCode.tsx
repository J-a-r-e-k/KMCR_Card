// import React from 'react';
import Style from './DiagnosisCode.module.scss';
import { Formik, Field } from 'formik';
import { useAppContext } from '../../../context/AppContext';
import { FormNavigation } from '../../Section/FormNavigation/FormNavigation';

const DiagnosisCode = () => {
  const appContext = useAppContext();
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
              <Field className={Style.textField} name="cos" type="text" />
              <div className={Style.wrapCode}>
                <p className={Style.textCode}>KOD ICD10</p>
                <Field className={Style.codeField} name="cos" type="text" />
              </div>
            </div>
            <div className={Style.wrapDiv}>
              <label>Opis:</label>
              <Field className={Style.textField} name="cos" type="text" />
              <div className={Style.wrapCode}>
                <p className={Style.textCode}>KOD ICD10</p>
                <Field className={Style.codeField} name="cos" type="text" />
              </div>
            </div>
            <div className={Style.wrapDiv}>
              <label>Opis:</label>
              <Field className={Style.textField} name="cos" type="text" />
              <div className={Style.wrapCode}>
                <p className={Style.textCode}>KOD ICD10</p>
                <Field className={Style.codeField} name="cos" type="text" />
              </div>
            </div>
          </div>
          <FormNavigation onSaveForm={submitForm} />
        </form>
      )}
    </Formik>
  );
};

export default DiagnosisCode;
