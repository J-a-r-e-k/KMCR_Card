import { useState } from 'react';
// import { Formik } from 'formik';
// import * as Yup from 'yup';

import './App.scss';
import Form from './Components/Section/Form/Form';
import Nav from './Components/Section/Nav/Naw';
import { AppProvider } from './context/AppContext';
// import { AppContext, AppProvider } from './context/AppContext';
// import IncidentData from './Components/Step/IncidentData/IncidentData';

function App() {
  //regex
  // const validationSchema = Yup.object({
  //   pesel: Yup.string()
  //     .matches(/^\d{11}$/, 'Nieprawidłowy numer PESEL')
  //     .required('wymagane'),

  //   incidentDate: Yup.string().matches(
  //     /^\d{4}-\d{2}-\d{2} (\/ )?\d{2}:\d{2}$/,
  //     'Nieprawidłowy format daty'
  //   ),

  //   patientBirthDate: Yup.string().matches(
  //     /^\d{4}-\d{2}-\d{2}/,
  //     'Nieprawidłowy format daty'
  //   ),

  //   patientPesel: Yup.string().matches(
  //     /^\d{2}(0[1-9]|[12]\d|3[01]|32)(0[1-9]|[12]\d|3[01])\d{3}[02468]\d$|^\d{2}(0[1-9]|[12]\d|3[01]|32)(0[1-9]|[12]\d|3[01])\d{3}[13579]\d$/,
  //     'Nieprawidłowy PESEL'
  //   ),
  // });
  //

  // Dane z formularza Formik
  // const initialValues = {
  //   // nrIncident: '',
  //   // incidentDate: '',
  //   // incidentPlace: '',
  //   // incidentCity: '',
  //   // incidentPost: '',
  //   // incidentStreet: '',
  //   // incidentNr: '',
  //   // incidentNrApartment: '',
  //   // companyName: '',
  //   // patientGender: '',

  //   patientFirstName: '',
  //   patientLastName: '',
  //   patientCity: '',
  //   patientPostalCod: '',
  //   patientStreet: '',
  //   patientIdNumber: '',
  //   patientNrApartment: '',
  //   patientBirthDate: '',
  //   patientPesel: '',

  //   legalGuardianFirstName: '',
  //   legalGuardianLastName: '',
  //   legalGuardianCity: '',
  //   legalGuardianPostalCod: '',
  //   legalGuardianStreet: '',
  //   legalGuardianIdNumber: '',
  //   legalGuardianNrApartment: '',
  //   legalGuardianTelephone: '',

  //   patientRefusalDate: '',
  // };

  // nr wyświetlanego kroku form
  const [step, setStep] = useState(0);
  function stanStep(stan: number) {
    setStep(stan);
  }

  return (
    <div>
      <AppProvider>
        {/* <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false);
            console.log(values);
            console.log('ok');
          }}
        >
          {(formikProps) => (
            <form onSubmit={formikProps.handleSubmit} className="globalCard">
              <Nav />
              <Form step={step} stanStep={stanStep} />{' '}
            </form>
          )}
        </Formik> */}
        <form className="globalCard">
          <Nav />
          <Form step={step} stanStep={stanStep} />
        </form>
      </AppProvider>
      <div>Inny komponent</div>
    </div>
  );
}

export default App;
