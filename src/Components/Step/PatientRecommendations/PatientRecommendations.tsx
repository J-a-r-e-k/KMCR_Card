import Style from './PatientRecommendations.module.scss';
import { useState } from 'react';
import { Formik, Field } from 'formik';
import { useAppContext } from '../../../context/AppContext';
import { FormNavigation } from '../../Section/FormNavigation/FormNavigation';

const PatientRecommendations = () => {
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
  return (
    <Formik
      initialValues={appContext.patientRecommendations}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        appContext.setPatientRecommendations(values);
      }}
    >
      {({ handleSubmit, submitForm }) => (
        <form onSubmit={handleSubmit}>
          <div className={Style.wrapRecommendations}>
            <p className={Style.title}>ZALECENIA / UWAGI:</p>
            <Field
              className={Style.text}
              name="recommendations"
              as="textarea"
              // rows="4"
            />
          </div>
          <div className={Style.wrapRecommendations}>
            <p>Postępowanie z pacjentem:</p>
            <ul className={Style.patientManagement}>
              <li className={`${Style.wrapCheck} ${Style.anotherWrapCheck} `}>
                <Field
                  className={Style.check}
                  name="patientStatus.remainedAtScene"
                  type="checkbox"
                />
                <p>pacjent pozostał w miejscu zdarzenia</p>
              </li>
              <li className={`${Style.wrapCheck} ${Style.anotherWrapCheck} `}>
                <Field
                  className={Style.check}
                  name="patientStatus.transferredToEMS"
                  type="checkbox"
                />
                <p>pacjent przekazany zespołowi ratownictwa medycznego</p>
              </li>
              <li className={Style.wrapCheck}>
                <Field
                  className={Style.check}
                  name="patientStatus.patientWent"
                  type="checkbox"
                />
                <p>pacjent oddalił sie samodzielnie</p>
              </li>

              <li className={Style.wrapCheck}>
                <Field
                  className={Style.check}
                  name="patientStatus.handedOverToPolice"
                  type="checkbox"
                />
                <p>przekazano Policji</p>
              </li>
              <li className={`${Style.wrapCheck} ${Style.anotherWrapCheck} `}>
                <Field
                  className={Style.check}
                  name="patientStatus.other"
                  type="checkbox"
                />
                <p>Inne: </p>
                <Field
                  className={Style.anotherText}
                  name="patientStatus.otherText"
                  type="text"
                />
              </li>
            </ul>
          </div>
          <div className={Style.wrapRecommendations}>
            <ul className={Style.patientManagement}>
              <p>Kopię karty wydano:</p>
              <li className={`${Style.wrapCheck}`}>
                <Field
                  className={Style.check}
                  name="cardCopyIssued.patient"
                  type="checkbox"
                />
                <p>pacjentowi</p>
              </li>
              <li className={Style.wrapCheck}>
                <Field
                  className={Style.check}
                  name="cardCopyIssued.healthcareProvider"
                  type="checkbox"
                />
                <p>podmiotowi leczniczemu</p>
              </li>
            </ul>
          </div>

          <div className={Style.wrapRecommendations}>
            <p className={Style.contents}>
              Data, podpis i pieczęć ratownika medycznego:
            </p>
            <ul className={Style.wrapParamedicInfo}>
              <li
                className={`${Style.paramedicInfo} ${Style.paramedicInfoAdd}`}
              >
                <p>Imie Nazwisko</p>
                <Field
                  className={Style.dateSignature}
                  name="responderSignature.fullName"
                  type="text"
                />
              </li>

              <li
                className={`${Style.paramedicInfo} ${Style.paramedicInfoAdd}`}
              >
                <p className={Style.contents}>Nr. dyplomu:</p>
                <Field
                  className={Style.dateSignature}
                  name="responderSignature.licenseNumber"
                  type="text"
                />
              </li>
              <li className={Style.paramedicInfo}>
                <p className={Style.contents}>
                  Tytuł osoby udzielającej pomocy:
                </p>
                <Field
                  className={Style.dateSignature}
                  name="responderSignature.title"
                  type="text"
                />
              </li>
              <li className={Style.paramedicInfo}>
                <Field
                  className={Style.dateSignature}
                  name="responderSignature.datetime"
                  type="datetime-local"
                />
              </li>
            </ul>

            <div
              className={Style.signature}
              onClick={() => {
                setWrapSignature(!wrapSignature);
              }}
            ></div>
            {signature()}
          </div>

          <FormNavigation onSaveForm={submitForm} />
        </form>
      )}
    </Formik>
  );
};

export default PatientRecommendations;
