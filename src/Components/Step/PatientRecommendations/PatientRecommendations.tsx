import { Formik } from 'formik';
import { useAppContext } from '../../../context/AppContext';
import { FormNavigation } from '../../Section/FormNavigation/FormNavigation';

const PatientRecommendations = () => {
  const appContext = useAppContext();
  return (
    <Formik
      initialValues={appContext.assessHealthConditionBreathEyes}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        appContext.setAssessHealthConditionBreathEyes(values);
      }}
    >
      {({ handleSubmit, submitForm }) => (
        <form onSubmit={handleSubmit}>
          Zalecenia
          <FormNavigation onSaveForm={submitForm} />
        </form>
      )}
    </Formik>
  );
};

export default PatientRecommendations;
