import Style from './PatientRecommendations.module.scss';
import { Formik, Field } from 'formik';
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
          <div className={Style.wrapRecommendations}>
            <p className={Style.title}>ZALECENIA / UWAGI:</p>
            <Field
              className={Style.text}
              name="recommendations"
              as="textarea"
              // rows="4"
            />
          </div>

          <FormNavigation onSaveForm={submitForm} />
        </form>
      )}
    </Formik>
  );
};

export default PatientRecommendations;
