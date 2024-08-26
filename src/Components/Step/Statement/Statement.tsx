import Style from './Statement.module.scss';
import AddDate from '../Icon/AddDate';
import { useState } from 'react';
import { Formik, Field } from 'formik';
import { useAppContext } from '../../../context/AppContext';
import { FormNavigation } from '../../Section/FormNavigation/FormNavigation';

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

  //Popieranie i zapisywanie bieżącej daty i godziny
  const today = () => {
    const [day, time] = new Date().toISOString().split('T');
    const dateFormat = `${day} / ${time.split('.')[0].slice(0, 5)}`;
    appContext.setStatement({
      ...appContext.statement,
      patientRefusalDate: dateFormat,
    });
  };

  return (
    <>
      <Formik
        initialValues={appContext.statement}
        onSubmit={(value, { setSubmitting }) => {
          setSubmitting(false);
          appContext.setStatement(value);
        }}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className={Style.wrapDiv}>
              <h2 className={Style.title}>OŚWIADCZENIE PACJENTA</h2>
              {/* <input onChange={(e) => appContext?.setUserName(e.target.value)} /> */}
              <p className={Style.contents}>
                Poinformowany, świadomy możliwości bezpośredniego zagrożenia
                zdrowia i życia, nie wyrażam zgody na:
              </p>
              <div className={Style.wrapCheck}>
                <Field
                  name="refusal"
                  type="radio"
                  value="providingAssistance"
                  className={`${Style.check}`}
                />
                {/* <div
      className={`${Style.check} ${'activeExamination'}`}
      onClick={() => {
        // genderPatient('examination');
      }}
    ></div> */}
                <p className={Style.contents}>
                  udzielenie świadczenia zdrowotnego
                </p>
                <Field
                  className={`${Style.check}`}
                  name="refusal"
                  type="radio"
                  value="transportHospital"
                />
                {/* <div
      className={`${Style.check} ${'activeTransport'}`}
      onClick={() => {
        // genderPatient('transport');
      }}
    ></div> */}
                <p className={Style.contents}>przewiezienie do szpitala</p>
              </div>
              <p className={Style.contents}>
                Oświadczam również, że udzielono mi wyczerpujących informacji o
                stanie zdrowia oraz uzyskałem odpowiedzi na zadawane przeze mnie
                pytania.
              </p>

              <div>
                <label className={Style.contents}>Data i godzina odmowy:</label>
                <Field className={Style.inputText} name="patientRefusalDate" />
                <button
                  className={Style.btnAddDate}
                  onClick={() => today()}
                  type="button"
                >
                  <AddDate />
                </button>
              </div>
              <div className={Style.wrapSignature}>
                <p className={Style.contents}>
                  podpis pacjenta lub przedstawiciela ustawowego:
                </p>
                <div
                  className={Style.signature}
                  onClick={() => {
                    setWrapSignature(!wrapSignature);
                    console.log('ok');
                  }}
                ></div>
                {signature()}
              </div>
            </div>
            <FormNavigation />
          </form>
        )}
      </Formik>
    </>
  );
};

export default Statement;
