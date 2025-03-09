import { useAppContext } from '../../../context/AppContext';
import { Formik, Field } from 'formik';
import Style from './Interview.module.scss';
import { FormNavigation } from '../../Section/FormNavigation/FormNavigation';

const Interview = () => {
  const appContext = useAppContext();
  return (
    <Formik
      initialValues={appContext.interview}
      onSubmit={(value, { setSubmitting }) => {
        setSubmitting(false);
        appContext.setInterview(value);
      }}
    >
      {({ handleSubmit, submitForm }) => (
        <>
          <form onSubmit={handleSubmit}>
            <h2 className={Style.title}>I - WYWIAD</h2>
            <Field
              className={Style.text}
              name="interviewDescription"
              as="textarea"
            // rows="4"
            />
            <FormNavigation onSaveForm={submitForm} />
          </form>
        </>
      )}
    </Formik>
  );
};

export default Interview;
