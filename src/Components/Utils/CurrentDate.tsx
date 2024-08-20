// import { setFieldValue } from 'formik';
const CurrentDate = () => {
  const dateFormat = new Date().toISOString().split('T')[0];
  return dateFormat;
};

export default CurrentDate;
