import Style from './ProvidedAssistanceActivities.module.scss';
import { Formik, Field } from 'formik';
import { useAppContext } from '../../../context/AppContext';
import { FormNavigation } from '../../Section/FormNavigation/FormNavigation';

const ProvidedAssistanceActivities = () => {
  const appContext = useAppContext();
  return (
    <Formik
      initialValues={appContext.providedAssistanceActivities}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        appContext.setProvidedAssistanceActivities(values);
      }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <h2>IV - UDZIELONE ŚWIADCZENIE ZDROWOTNE</h2>
          <div className={Style.wrapDiv}>
            <p className={Style.providedName}>CZYNNOŚCI</p>
            <ul className={Style.wrapProvided}>
              <li className={Style.wrapCheck}>
                <Field className={Style.check} name="suction" type="checkbox" />
                <p>odsysanie</p>
              </li>
              <li className={Style.wrapCheck}>
                <Field
                  className={Style.check}
                  name="bagValveMaskVentilation"
                  type="checkbox"
                />
                <p>wentylacja workiem</p>
              </li>
              <li className={Style.wrapCheck}>
                <Field
                  className={Style.check}
                  name="oropharyngeal"
                  type="checkbox"
                />
                <p>rurka UG</p>
              </li>
              <li className={Style.wrapCheck}>
                <Field
                  className={Style.check}
                  name="intubation"
                  type="checkbox"
                />
                <p>intubacja</p>
              </li>
              <li className={Style.wrapCheck}>
                <Field className={Style.check} name="lma" type="checkbox" />
                <p>maska / rurka krt.</p>
              </li>
              <li className={Style.wrapCheck}>
                <Field
                  className={Style.check}
                  name="passiveOxygenTherapy"
                  type="checkbox"
                />
                <p>tlenoterapia bierna</p>
              </li>
              <li className={Style.wrapCheck}>
                <Field
                  className={Style.check}
                  name="capnometry"
                  type="checkbox"
                />
                <p>kapnometria</p>
              </li>
              <li className={Style.wrapCheck}>
                <Field
                  className={Style.check}
                  name="pulseOximetry"
                  type="checkbox"
                />
                <p>pulsoksymetria</p>
              </li>
              <li className={Style.wrapCheck}>
                <Field className={Style.check} name="ecg" type="checkbox" />
                <p>EKG</p>
              </li>
              <li className={Style.wrapCheck}>
                <Field
                  className={Style.check}
                  name="cricothyrotomy"
                  type="checkbox"
                />
                <p>konikopunkcja</p>
              </li>
              <li className={Style.wrapCheck}>
                <Field
                  className={Style.check}
                  name="woundDressing"
                  type="checkbox"
                />
                <p>opatrunek</p>
              </li>
              <li className={Style.wrapCheck}>
                <Field
                  className={Style.check}
                  name="manualChestCompression"
                  type="checkbox"
                />
                <p>ręczny masaż serca</p>
              </li>
              <li className={Style.wrapCheck}>
                <Field
                  className={Style.check}
                  name="mechanicalChestCompression"
                  type="checkbox"
                />
                <p>automatyczny masaż serca</p>
              </li>
              <li className={Style.wrapCheck}>
                <Field
                  className={Style.check}
                  name="defibrillation"
                  type="checkbox"
                />
                <p>defibrylacja</p>
              </li>
              <li className={Style.wrapCheck}>
                <Field
                  className={Style.check}
                  name="cardioversion"
                  type="checkbox"
                />
                <p>kardiowersja</p>
              </li>
              <li className={Style.wrapCheck}>
                <Field
                  className={Style.check}
                  name="patientMonitoring"
                  type="checkbox"
                />
                <p>monitorowanie</p>
              </li>
              <li className={Style.wrapCheck}>
                <Field
                  className={Style.check}
                  name="externalPacing"
                  type="checkbox"
                />
                <p>stymulacja zewnętrzna</p>
              </li>
              <li className={Style.wrapCheck}>
                <Field
                  className={Style.check}
                  name="carotidSinusMassage"
                  type="checkbox"
                />
                <p>stymulacja zatoki szyjnej</p>
              </li>
              <li className={Style.wrapCheck}>
                <Field
                  className={Style.check}
                  name="peripheralVenousAccess"
                  type="checkbox"
                />
                <p>linia żył obwodowych</p>
              </li>
              <li className={Style.wrapCheck}>
                <Field
                  className={Style.check}
                  name="centralVenousAccess"
                  type="checkbox"
                />
                <p>linia żył centralnych</p>
              </li>
              <li className={Style.wrapCheck}>
                <Field
                  className={Style.check}
                  name="intraosseousAccess"
                  type="checkbox"
                />
                <p>dostęp doszpikowy</p>
              </li>
              <li className={Style.wrapCheck}>
                <Field
                  className={Style.check}
                  name="catheterization"
                  type="checkbox"
                />
                <p>cewnikowanie</p>
              </li>
              <li className={Style.wrapCheck}>
                <Field
                  className={Style.check}
                  name="nasogastricTube"
                  type="checkbox"
                />
                <p>sonda żołądkowa</p>
              </li>
              <li className={Style.wrapCheck}>
                <Field
                  className={Style.check}
                  name="gastricLavage"
                  type="checkbox"
                />
                <p>płukanie żołądka</p>
              </li>
              <li className={Style.wrapCheck}>
                <Field
                  className={Style.check}
                  name="cervicalCollar"
                  type="checkbox"
                />
                <p>kołnierz ortopedyczny</p>
              </li>
              <li className={Style.wrapCheck}>
                <Field
                  className={Style.check}
                  name="spineBoard"
                  type="checkbox"
                />
                <p>deska ortopedyczna</p>
              </li>
              <li className={Style.wrapCheck}>
                <Field
                  className={Style.check}
                  name="vacuumMattress"
                  type="checkbox"
                />
                <p>materac próżniowy</p>
              </li>
              <li className={Style.wrapCheck}>
                <Field
                  className={Style.check}
                  name="immobilization"
                  type="checkbox"
                />
                <p>unieruchomienie</p>
              </li>
              <li className={Style.wrapCheck}>
                <Field
                  className={Style.check}
                  name="pelvicBinder"
                  type="checkbox"
                />
                <p>pas do stabilizacji miednicy</p>
              </li>
              <li className={Style.wrapCheck}>
                <Field
                  className={Style.check}
                  name="immobilizationKED"
                  type="checkbox"
                />
                <p>kamizelka KED</p>
              </li>
              <li className={Style.wrapCheck}>
                <Field
                  className={Style.check}
                  name="otherProcedures"
                  type="checkbox"
                />
                <p>inne</p>
              </li>
            </ul>
          </div>
          <FormNavigation />
        </form>
      )}
    </Formik>
  );
};
export default ProvidedAssistanceActivities;
