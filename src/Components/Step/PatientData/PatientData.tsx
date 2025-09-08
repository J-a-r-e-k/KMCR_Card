import { useAppContext } from '../../../context/AppContext';
import { FormNavigation } from '../../Section/FormNavigation/FormNavigation';
import Style from './PatientData.module.scss';
import { Field, Formik } from 'formik';

const PatientData = () => {
  const appContext = useAppContext();

  const genderPatient = (sex: string) => {
    appContext.setPatientData({
      ...appContext.patientData,
      patientGender: sex,
    });
  };

  const patientForm = () => {
    return (
      <div className={`${Style.wrapDiv} ${Style.wrapDivPatient}`}>
        <h2 className={Style.title}>DANE PACJENTA</h2>
        <ul className={Style.address}>
          <li className={Style.element}>
            <label className={Style.contents}>Imię (imiona):</label>
            <Field
              className={Style.inputText}
              name="patientFirstName"
              type="text"
              placeholder=" Imię (imiona)"
            />
          </li>
          <li className={Style.element}>
            <label className={Style.contents}>Nazwisko:</label>
            <Field
              className={Style.inputText}
              name="patientLastName"
              placeholder="Nazwisko"
            />
          </li>
          <li className={Style.element}>
            <label className={Style.contents}> miejscowość:</label>
            <Field
              className={Style.inputText}
              name="patientCity"
              placeholder="Miejscowość"
            />
          </li>
          <li className={`${Style.element}`}>
            <label className={`${Style.contents}`}>kod pocztowy:</label>
            <Field
              className={`${Style.inputPost}`}
              autoComplete="off"
              name="patientPostalCod.one"
              placeholder="00"
              type="number"
            />
            <p>-</p>
            <Field
              className={`${Style.inputPost}`}
              name="patientPostalCod.two"
              placeholder="000"
              type="number"
              autoComplete="off"
            />
          </li>
          <p className={Style.contents}>Adres zamieszkania:</p>
          <li className={Style.element}>
            <label>ul.</label>
            <Field
              className={Style.inputText}
              name="patientStreet"
              placeholder="ulica"
            />
          </li>
          <li className={`${Style.element} ${Style.inputNR}`}>
            <label>nr:</label>
            <Field
              className={` ${Style.inputText}`}
              name="patientIdNumber"
              placeholder="budynku"
            />
          </li>
          <li className={`${Style.element} ${Style.inputNR}`}>
            <label>m:</label>
            <Field
              className={` ${Style.inputText}`}
              name="patientNrApartment"
              placeholder="mieszkanie"
            />
          </li>
          <li className={Style.element}>
            <label className={Style.contents}>data urodzenia: </label>
            <Field
              className={Style.inputText}
              name="patientBirthDate"
              placeholder="(rrrr-mm-dd)"
            />
          </li>
          <li className={Style.element}>
            <label className={Style.contents}>PESEL: </label>
            <Field
              className={Style.inputText}
              name="patientPesel"
              placeholder="Pesel"
            />
          </li>
          <li className={Style.element}>
            <p>Płeć: </p>
            <p className={`${Style.contents}`}>K</p>
            <Field
              id="dyspneaYes"
              className={Style.check}
              name="patientGender"
              type="radio"
              value="woman"
            />
            <p className={`${Style.contents}`}>M</p>
            <Field
              id="dyspneaNO"
              className={Style.check}
              name="patientGender"
              type="radio"
              value="man"
            />
          </li>
        </ul>
      </div>
    );
  };
  const guardianDate = () => {
    return (
      <div className={Style.wrapDiv}>
        <h2 className={Style.title}>DANE PRZEDSTAWICIELA USTAWOWEGO:</h2>
        <label className={Style.contents}>Imię (imiona):</label>
        <Field
          className={Style.inputText}
          name="legalGuardianFirstName"
          placeholder=" Imię (imiona)"
        />
        <label className={Style.contents}>Nazwisko:</label>
        <Field
          className={Style.inputText}
          name="legalGuardianLastName"
          placeholder="Nazwisko"
        />
        <div className={Style.address}>
          <label className={Style.contents}> miejscowość:</label>
          <Field
            className={Style.inputText}
            name="legalGuardianCity"
            placeholder="Miejscowość"
          />
          <label className={`${Style.contents}`}>kod pocztowy:</label>
          <Field
            className={`${Style.inputText} ${Style.post}`}
            name="legalGuardianPostalCod"
            placeholder="00 - 000"
          />
        </div>
        <div className={Style.address}>
          <label className={Style.contents}>Adres zamieszkania:</label>
          <p>ul.</p>
          <Field
            className={Style.inputText}
            name="legalGuardianStreet"
            placeholder="ulica"
          />
          <p>nr:</p>
          <Field
            className={`${Style.inputNR} ${Style.inputText}`}
            name="legalGuardianIdNumber"
            placeholder="budynku"
          />
          <p>m:</p>
          <Field
            className={`${Style.inputNR} ${Style.inputText}`}
            name="legalGuardianNrApartment"
            placeholder="mieszkanie"
          />
        </div>
        <label className={Style.contents}> Numer telefonu:</label>
        <Field className={Style.inputText} name="legalGuardianTelephone" />
      </div>
    );
  };
  return (
    <>
      <Formik
        initialValues={appContext.patientData}
        onSubmit={(value, { setSubmitting }) => {
          setSubmitting(false);
          appContext.setPatientData(value);
        }}
      >
        {({ handleSubmit, submitForm }) => (
          <form onSubmit={handleSubmit}>
            {patientForm()}
            <FormNavigation />
          </form>
        )}
      </Formik>
    </>
  );
};
export default PatientData;
