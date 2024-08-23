import { useAppContext } from '../../../context/AppContext';
import { Formik, Field } from 'formik';
import Style from './Interview.module.scss';

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
      <>
        <h2 className={Style.title}>I - WYWIAD</h2>
        <div className={Style.wrapText}>
          <Field className={Style.text} name="interviewDescription" />
        </div>
      </>
    </Formik>
  );
};

export default Interview;
