import Style from './Statement.module.scss';
import AddDate from '../Icon/AddDate';
import { useState } from 'react';
import { Formik, Field, FormikHelpers } from 'formik';
import {
  useAppContext,
  Statement as StatementType,
} from '../../../context/AppContext';
import { FormNavigation } from '../../Section/FormNavigation/FormNavigation';
import { currentDate } from '../../Utils/CurrentDate';

const Statement = () => {
  const appContext = useAppContext();
  const [wrapSignature, setWrapSignature] = useState(false);

  //Panel Podpisu
  const signature = () => {
    if (!wrapSignature) return;
    return (
      <div className={Style.wrapPanelSignature}>
        <div className={Style.panelSignature}>
          <button className={`${Style.btn} ${Style.btnClean}`}>Wyczyść </button>
          <div className={Style.signatureWrite}></div>
          <button
            className={`${Style.btn}`}
            onClick={() => setWrapSignature(!wrapSignature)}
          >
            Zapisz
          </button>
        </div>
      </div>
    );
  };

  function statement({
    setFieldValue,
  }: {
    setFieldValue: FormikHelpers<StatementType>['setFieldValue'];
  }) {
    return (
      <div className={Style.wrapDiv}>
        <h2 className={Style.title}>OŚWIADCZENIE PACJENTA</h2>
        <p className={Style.contents}>
          Poinformowany, świadomy możliwości bezpośredniego zagrożenia zdrowia i
          życia, nie wyrażam zgody na:
        </p>
        <div className={Style.wrapCheck}>
          <Field
            name="refusal"
            type="radio"
            value="providingAssistance"
            className={`${Style.check}`}
          />
          <p className={Style.contents}>udzielenie świadczenia zdrowotnego</p>
          <Field
            className={`${Style.check}`}
            name="refusal"
            type="radio"
            value="transportHospital"
          />

          <p className={Style.contents}>przewiezienie do szpitala</p>
        </div>
        <p className={Style.contents}>
          Oświadczam również, że udzielono mi wyczerpujących informacji o stanie
          zdrowia oraz uzyskałem odpowiedzi na zadawane przeze mnie pytania.
        </p>

        <div>
          <label className={Style.contents}>Data i godzina odmowy:</label>
          <Field className={Style.inputText} name="patientRefusalDate" />
          <button
            className={Style.btnAddDate}
            onClick={() => {
              setFieldValue('patientRefusalDate', currentDate());
            }}
            type="button"
          >
            <AddDate />
          </button>
        </div>
        <div className={Style.wrapSignature}>
          <p>podpis pacjenta lub przedstawiciela ustawowego:</p>
          <div
            className={Style.signature}
            onClick={() => {
              setWrapSignature(!wrapSignature);
            }}
          ></div>
          {signature()}
        </div>
      </div>
    );
  }
  function withdrawalAid({
    setFieldValue,
  }: {
    setFieldValue: FormikHelpers<StatementType>['setFieldValue'];
  }) {
    return (
      <div className={Style.wrapDiv}>
        <p className={Style.textBold}>
          Odstąpiono od udzielania świadczeń zdrowotnych:
        </p>
        <div>
          <label className={Style.contents}>Data i godzina odmowy:</label>
          <Field className={Style.inputText} name="withdrawalAidTime" />
          <button
            onClick={() => {
              setFieldValue('withdrawalAidTime', currentDate());
            }}
            type="button"
          >
            <AddDate />
          </button>
        </div>
        <div className={Style.description}>
          <label>Przyczyna odstąpienia:</label>
          <Field
            className={Style.inputText}
            name="legalGuardianFirstName"
            as="textarea"
            rows="2"
            placeholder="Powód nie podjęcia MCR"
          />
        </div>
      </div>
    );
  }

  return (
    <>
      <Formik
        initialValues={appContext.statement}
        onSubmit={(value, { setSubmitting }) => {
          setSubmitting(false);
          appContext.setStatement(value);
        }}
      >
        {({ handleSubmit, submitForm, setFieldValue }) => (
          <form onSubmit={handleSubmit}>
            {statement({ setFieldValue })}
            {withdrawalAid({ setFieldValue })}
            <FormNavigation onSaveForm={submitForm} />
          </form>
        )}
      </Formik>
    </>
  );
};

export default Statement;
