import Style from './PatientRecommendations.module.scss';
import { Formik, Field } from 'formik';
import { useAppContext } from '../../../context/AppContext';
import { FormNavigation } from '../../Section/FormNavigation/FormNavigation';
import Recommendations from './Recommendations/Recommendations';
import PatientStatus from './PatientStatus/PatientStatus';
import ResponderSignature from './ResponderSignature/ResponderSignature';





const PatientRecommendations = () => {
  const appContext = useAppContext();

  return (
    <Formik
      initialValues={appContext.patientRecommendations}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        appContext.setPatientRecommendations(values);
      }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Recommendations />
          <PatientStatus />
          <div className={Style.wrapPatientManagement}>
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
          <ResponderSignature />
          {/* <FormNavigation /> */}
        </form>
      )}
    </Formik>
  );
};

export default PatientRecommendations;
