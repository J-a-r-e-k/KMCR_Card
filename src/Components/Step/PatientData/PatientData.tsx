import Style from './PatientData.module.scss';
import { Field } from 'formik';

const PatientData = () => {
  // const guardianDate = () => {
  //   return (
  //     <div className={Style.wrapDiv}>
  //       <h2 className={Style.title}>DANE PRZEDSTAWICIELA USTAWOWEGO:</h2>
  //       <label className={Style.contents}>Imię (imiona):</label>
  //       <Field
  //         className={Style.inputText}
  //         name="legalGuardianFirstName"
  //         placeholder=" Imię (imiona)"
  //       />
  //       <label className={Style.contents}>Nazwisko:</label>
  //       <Field
  //         className={Style.inputText}
  //         name="legalGuardianLastName"
  //         placeholder="Nazwisko"
  //       />
  //       <div className={Style.address}>
  //         <label className={Style.contents}> miejscowość:</label>
  //         <Field
  //           className={Style.inputText}
  //           name="legalGuardianCity"
  //           placeholder="Miejscowość"
  //         />
  //         <label className={`${Style.contents}`}>kod pocztowy:</label>
  //         <Field
  //           className={`${Style.inputText} ${Style.post}`}
  //           name="legalGuardianPostalCod"
  //           placeholder="00 - 000"
  //         />
  //       </div>
  //       <div className={Style.address}>
  //         <label className={Style.contents}>Adres zamieszkania:</label>
  //         <p>ul.</p>
  //         <Field
  //           className={Style.inputText}
  //           name="legalGuardianStreet"
  //           placeholder="ulica"
  //         />
  //         <p>nr:</p>
  //         <Field
  //           className={`${Style.inputNR} ${Style.inputText}`}
  //           name="legalGuardianIdNumber"
  //           placeholder="budynku"
  //         />
  //         <p>m:</p>
  //         <Field
  //           className={`${Style.inputNR} ${Style.inputText}`}
  //           name="legalGuardianNrApartment"
  //           placeholder="mieszkanie"
  //         />
  //       </div>
  //       <label className={Style.contents}> Numer telefonu:</label>
  //       <Field className={Style.inputText} name="legalGuardianTelephone" />
  //     </div>
  //   );
  // };
  return (
    <>
      <div className={`${Style.wrapDiv} ${Style.wrapDivPatient}`}>
        <h2 className={Style.title}>DANE PACJENTA</h2>
        <ul className={Style.address}>
          <li className={Style.element}>
            <label className={Style.contents}>Imię (imiona):</label>
            <Field
              className={Style.inputText}
              name="patientData.patientFirstName"
              type="text"
              placeholder=" Imię (imiona)"
            />
          </li>
          <li className={Style.element}>
            <label className={Style.contents}>Nazwisko:</label>
            <Field
              className={Style.inputText}
              name="patientData.patientLastName"
              placeholder="Nazwisko"
            />
          </li>
          <li className={Style.element}>
            <label className={Style.contents}> miejscowość:</label>
            <Field
              className={Style.inputText}
              name="patientData.patientCity"
              placeholder="Miejscowość"
            />
          </li>
          <li className={`${Style.element}`}>
            <label className={`${Style.contents}`}>kod pocztowy:</label>
            <Field
              className={`${Style.inputPost}`}
              autoComplete="off"
              name="patientData.patientPostalCod.one"
              placeholder="00"
              type="number"
            />
            <p>-</p>
            <Field
              className={`${Style.inputPost}`}
              name="patientData.patientPostalCod.two"
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
              name="patientData.patientStreet"
              placeholder="ulica"
            />
          </li>
          <li className={`${Style.element} ${Style.inputNR}`}>
            <label>nr:</label>
            <Field
              className={` ${Style.inputText}`}
              name="patientData.patientIdNumber"
              placeholder="budynku"
            />
          </li>
          <li className={`${Style.element} ${Style.inputNR}`}>
            <label>m:</label>
            <Field
              className={` ${Style.inputText}`}
              name="patientData.patientNrApartment"
              placeholder="mieszkanie"
            />
          </li>
          <li className={Style.element}>
            <label className={Style.contents}>data urodzenia: </label>
            <Field
              className={Style.inputText}
              name="patientData.patientBirthDate"
              placeholder="(rrrr-mm-dd)"
            />
          </li>
          <li className={Style.element}>
            <label className={Style.contents}>PESEL: </label>
            <Field
              className={Style.inputText}
              name="patientData.patientPesel"
              placeholder="Pesel"
            />
          </li>
          <li className={Style.element}>
            <p>Płeć: </p>
            <p className={`${Style.contents}`}>K</p>
            <Field
              id="dyspneaYes"
              className={Style.check}
              name="patientData.patientGender"
              type="radio"
              value="woman"
            />
            <p className={`${Style.contents}`}>M</p>
            <Field
              id="dyspneaNO"
              className={Style.check}
              name="patientData.patientGender"
              type="radio"
              value="man"
            />
          </li>
        </ul>
      </div>
    </>
  );
};
export default PatientData;
