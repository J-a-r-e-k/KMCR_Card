import Style from './DiagnosisCode.module.scss';
import { Formik, Field, FieldProps } from 'formik';
import { useAppContext } from '../../../context/AppContext';
import { FormNavigation } from '../../Section/FormNavigation/FormNavigation';
import TextField from '@mui/material/TextField';
import { SxProps, useMediaQuery } from '@mui/material';


const textField: SxProps = {
  marginRight: '5px',
  flexGrow: 1,
}
const codeField: SxProps = {
  width: 60
}

const DiagnosisCode = () => {
  const appContext = useAppContext();
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Formik
      initialValues={appContext.diagnosisCode}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        appContext.setDiagnosisCode(values);
      }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <h2>III - ROZPOZNANIE</h2>
          <div className={Style.wrapGlobal}>
            <div className={Style.wrapIdentification}>
              <Field
                name="primaryDiagnosis.description"
              >
                {({ field }: FieldProps<string>) => (
                  <TextField {...field} label="Opis" variant="outlined" multiline={isMobile} maxRows={isMobile ? 4 : 1} sx={textField}
                  />
                )}
              </Field>
              <Field
                name="primaryDiagnosis.code"
              >
                {({ field }: FieldProps<string>) => (
                  <TextField {...field} label="ICD10" variant="outlined" sx={codeField} />
                )}
              </Field>
            </div>
            <div className={Style.wrapIdentification}>
              <Field
                name="secondDiagnosis.description"
              >
                {({ field }: FieldProps<string>) => (
                  <TextField {...field} label="Opis" variant="outlined" multiline={isMobile} maxRows={isMobile ? 4 : 1} sx={textField} />
                )}
              </Field>
              <Field
                name="secondDiagnosis.code"
              >
                {({ field }: FieldProps<string>) => (
                  <TextField  {...field} label="ICD10" variant="outlined" sx={codeField} />
                )}
              </Field>
            </div>
            <div className={Style.wrapIdentification}>
              <Field
                name="thirdDiagnosis.description"
              >
                {({ field }: FieldProps<string>) => (
                  <TextField {...field} label="Opis" variant="outlined" multiline={isMobile} maxRows={isMobile ? 4 : 1} sx={textField} />
                )}
              </Field>
              <Field
                name="thirdDiagnosis.code"
              >
                {({ field }: FieldProps<string>) => (
                  <TextField {...field} label="ICD10" variant="outlined" sx={codeField} />
                )}
              </Field>
            </div>
          </div>
          <FormNavigation />
        </form>
      )}
    </Formik>
  );
};
export default DiagnosisCode;
