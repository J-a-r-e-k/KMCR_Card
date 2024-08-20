import Style from './PatientData.module.scss';
import { Field, useFormikContext, ErrorMessage } from 'formik';

const PatientData = () => {
  const { setFieldValue } = useFormikContext();
  const { values } = useFormikContext();

  const genderPatient = (sex: string) => {
    setFieldValue('patientGender', sex);
  };

  const patientDataaa = () => {
    //wybór płci w zależności od patientGender
    const activeMan = values.patientGender === 'man' ? Style.checkActive : '';
    const activeWoman =
      values.patientGender === 'woman' ? Style.checkActive : '';
    //

    return (
      <div className={`${Style.wrapDiv} ${Style.wrapDivPatient}`}>
        <h2 className={Style.title}>DANE PACJENTA</h2>
        <label className={Style.contents}>Imię (imiona):</label>
        <Field
          className={Style.inputText}
          name="patientFirstName"
          placeholder=" Imię (imiona)"
        />
        <label className={Style.contents}>Nazwisko:</label>
        <Field
          className={Style.inputText}
          name="patientLastName"
          placeholder="Nazwisko"
        />
        <div className={Style.address}>
          <label className={Style.contents}> miejscowość:</label>
          <Field
            className={Style.inputText}
            name="patientCity"
            placeholder="Miejscowość"
          />
          <label className={`${Style.contents}`}>kod pocztowy:</label>
          <Field
            className={`${Style.inputText} ${Style.post}`}
            name="patientPostalCod"
            placeholder="00 - 000"
          />
        </div>
        <div className={Style.address}>
          <label className={Style.contents}>Adres zamieszkania:</label>
          <p>ul.</p>
          <Field
            className={Style.inputText}
            name="patientStreet"
            placeholder="ulica"
          />
          <p>nr:</p>
          <Field
            className={`${Style.inputNR} ${Style.inputText}`}
            name="patientIdNumber"
            placeholder="budynku"
          />
          <p>m:</p>
          <Field
            className={`${Style.inputNR} ${Style.inputText}`}
            name="patientNrApartment"
            placeholder="mieszkanie"
          />
        </div>
        <label className={Style.contents}>data urodzenia: </label>
        <div className={Style.wrapBirthday}>
          <Field
            className={Style.inputText}
            name="patientBirthDate"
            placeholder="(rrrr-mm-dd)"
          />
          <ErrorMessage
            name="patientBirthDate"
            component="div"
            className={Style.error}
          />
        </div>

        <label className={Style.contents}>PESEL: </label>
        <Field
          className={Style.inputText}
          name="patientPesel"
          placeholder="Pesel"
        />
        <ErrorMessage
          name="patientPesel"
          component="div"
          className={Style.error}
        />

        <div className={Style.wrapSex}>
          <p className={Style.contents}>Płeć:</p>
          <p className={`${Style.contents}`}>K</p>
          <div
            className={`${Style.check} ${activeWoman}`}
            onClick={() => {
              genderPatient('woman');
            }}
          ></div>
          <p className={Style.contents}>M</p>
          <div
            className={`${Style.check} ${activeMan}`}
            onClick={() => {
              genderPatient('man');
            }}
          ></div>
        </div>
      </div>
    );
  };
  function guardianDate() {
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
  }
  return (
    <>
      {patientDataaa()}
      {guardianDate()}
    </>
  );
};

export default PatientData;
