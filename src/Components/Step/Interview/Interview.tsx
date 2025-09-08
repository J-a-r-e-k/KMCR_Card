import { Field } from 'formik';
import Style from './Interview.module.scss';

const Interview = () => {
  return (
    <>
      <h2 className={Style.title}>I - WYWIAD</h2>
      <Field
        className={Style.text}
        name="interview.interviewDescription"
        as="textarea"
      />
    </>
  );
};
export default Interview;
