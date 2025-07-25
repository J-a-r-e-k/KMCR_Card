import Style from './DescriptionStudyForm.module.scss';
import { Formik, Field } from 'formik';
import { useAppContext } from '../../../context/AppContext';
import { FormNavigation } from '../../Section/FormNavigation/FormNavigation';

const DescriptionStudyForm = () => {
  const appContext = useAppContext();
  return (
    <Formik
      initialValues={appContext.descriptionStudy}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        appContext.setDescriptionStudy(values);
      }}
    >
      {({ handleSubmit, setFieldValue }) => (
        <form onSubmit={handleSubmit}>
          <h2 className={Style.title}>Opis:</h2>
          <button
            className={Style.btn}
            onClick={() => {
              setFieldValue('description', '');
            }}
          >
            X
          </button>
          <Field
            className={Style.text}
            name="description"
            as="textarea"
          />
          <FormNavigation />
        </form>
      )}
    </Formik>
  );
};
export default DescriptionStudyForm;
