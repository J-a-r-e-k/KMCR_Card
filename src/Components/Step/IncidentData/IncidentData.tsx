import Style from './IncidentData.module.scss';
import { useState } from 'react';
import { Formik, Field } from 'formik';

import AddForm from '../Icon/AddForm';
import AddDate from '../Icon/AddDate';
import { useAppContext } from '../../../context/AppContext';
import { FormNavigation } from '../../Section/FormNavigation/FormNavigation';
import { currentDate } from '../../Utils/CurrentDate';

const IncidentData = () => {
  const appContext = useAppContext();
  const [addressField, setAddressField] = useState(false);

  const Address = () => {
    const {
      incidentData: {
        incidentCity,
        incidentPost,
        incidentStreet,
        incidentNr,
        incidentNrApartment,
      },
    } = appContext;

    if (
      addressField ||
      incidentCity ||
      incidentPost ||
      incidentStreet ||
      incidentNr ||
      incidentNrApartment
    )
      return (
        <div className={Style.wrapAddress}>
          <div className={Style.address}>
            <label> miejscowość:</label>
            <Field className={Style.inputText} name="incidentCity" />
            <label>kod pocztowy:</label>
            <Field
              className={`${Style.inputText} ${Style.post}`}
              name="incidentPost"
            />
          </div>
          <div className={Style.address}>
            <label>ul.</label>
            <Field
              className={Style.inputText}
              name="incidentStreet"
              placeholder="ulica"
            />
            <label>nr:</label>
            <Field
              className={`${Style.inputNR} ${Style.inputText}`}
              name="incidentNr"
              placeholder="budynku"
            />
            <label>m:</label>
            <Field
              className={`${Style.inputNR} ${Style.inputText}`}
              name="incidentNrApartment"
              placeholder="mieszkanie"
            />
          </div>
        </div>
      );
  };

  return (
    <>
      <Formik
        initialValues={appContext.incidentData}
        onSubmit={(value, { setSubmitting }) => {
          setSubmitting(false);
          appContext.setIncidentData(value);
        }}
      >
        {({
          // values,
          // errors,
          // touched,
          // handleChange,
          // handleBlur,
          handleSubmit,
          submitForm,
          setFieldValue,
          // isSubmitting,
          // isValid,
          /* and other goodies */
        }) => (
          <>
            {' '}
            <form onSubmit={handleSubmit}>
              <div className={`${Style.wrapDiv} ${Style.wrapDivPatient}`}>
                <label className={Style.contents}>
                  Numer karty nadany przez podmiot udzielający świadczeń
                  zdrowotnych:
                </label>
                <Field className={Style.inputText} name="nrIncident" />
              </div>

              <div className={`${Style.wrapDiv} ${Style.wrapDate}`}>
                <label className={Style.contents}>
                  Data i godzina udzielenia swiadczenia zdrowotnego (rrrr-mm-dd
                  gg:mm):
                </label>
                <Field className={Style.inputText} name="incidentDate" />
                {/* <ErrorMessage
          name="incidentDate"
          component="div"
          className={Style.error}
        /> */}
                <button
                  className={Style.btnAddDate}
                  onClick={() => {
                    setFieldValue('incidentDate', currentDate());
                  }}
                  type="button"
                >
                  <AddDate />
                </button>
              </div>
              <div className={`${Style.wrapDiv} `}>
                <button
                  className={Style.btnAddress}
                  onClick={() => setAddressField(!addressField)}
                  type="button"
                >
                  <AddForm />
                </button>
                <label className={Style.contents}>
                  Miejsce udzielenia swiadczenia zdrowotnego:
                </label>
                <Address />
                <Field
                  className={Style.inputText}
                  name="incidentPlace"
                  placeholder="Miejsce zdarzenia"
                />
              </div>
              <div className={`${Style.wrapDiv} `}>
                <p className={`${Style.contents} `}>
                  Dane podmiotu udzielającego świadczenia, ze wskazaniem komórki
                  organizacyjnej, w której udzielono świadczeń zdrowotnych:
                </p>
                <Field
                  name="companyName"
                  className={Style.inputText}
                  type="text"
                  placeholder=""
                />
              </div>
              <FormNavigation onSaveForm={submitForm} />
              {/* <FormNavigation isNextButtonDisabled={!isValid} /> */}
            </form>
          </>
        )}
      </Formik>
    </>
  );
};

export default IncidentData;
