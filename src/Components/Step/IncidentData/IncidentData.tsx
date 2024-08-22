import Style from './IncidentData.module.scss';
import { Formik } from 'formik';
import { useContext } from 'react';
// import { Field, useFormikContext, ErrorMessage } from 'formik';
import { Field } from 'formik';

// import AddForm from '../Icon/AddForm';
// import AddDate from '../Icon/AddDate';
import { AppContext } from '../../../context/AppContext';

const IncidentData = () => {
  // const { setFieldValue } = useFormikContext();
  // const [addressField, setAddressField] = useState(false);

  // const today = () => {
  //   const [day, time] = new Date().toISOString().split('T');
  //   const dateFormat = `${day} / ${time.split('.')[0].slice(0, 5)}`;
  //   setFieldValue('incidentDate', dateFormat);
  // };

  // const appContext.incidentData = useContext(AppContext);

  // const address = () => {
  //   if (!addressField) return;
  //   return (
  //     <div>
  //       <div className={Style.address}>
  //         <label className={Style.contents}> miejscowość:</label>
  //         <Field className={Style.inputText} name="incidentCity" />
  //         <label className={`${Style.contents}`}>kod pocztowy:</label>
  //         <Field
  //           className={`${Style.inputText} ${Style.post}`}
  //           name="incidentPost"
  //         />
  //       </div>
  //       <div className={Style.address}>
  //         <p>ul.</p>
  //         <Field
  //           className={Style.inputText}
  //           name="incidentStreet"
  //           placeholder="ulica"
  //         />
  //         <p>nr:</p>
  //         <Field
  //           className={`${Style.inputNR} ${Style.inputText}`}
  //           name="incidentNr"
  //           placeholder="budynku"
  //         />
  //         <p>m:</p>
  //         <Field
  //           className={`${Style.inputNR} ${Style.inputText}`}
  //           name="incidentNrApartment"
  //           placeholder="mieszkanie"
  //         />
  //       </div>
  //     </div>
  //   );
  // };
  const appContext = useContext(AppContext);
  return (
    <>
      <Formik
        initialValues={AppContext.incidentData}
        // validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          appContext.setIncidentData(values);
        }}
      >
        <div className={`${Style.wrapDiv}`}>
          <label className={Style.contents}>
            Numer karty nadany przez podmiot udzielający świadczeń zdrowotnych:
          </label>
          <Field className={Style.inputText} name="nrIncident" />
        </div>
        {/* <div className={Style.wrapDiv}>
          <label className={Style.contents}>
            Data i godzina udzielenia swiadczenia zdrowotnego (rrrr-mm-dd
            gg:mm):
          </label>
          <Field className={Style.inputText} name="incidentDate" />
          <ErrorMessage
            name="incidentDate"
            component="div"
            className={Style.error}
          />

          <button className={Style.btnAddDate} onClick={() => today()}>
            <AddDate />
          </button>
        </div>
        <div className={`${Style.wrapDiv} ${Style.wrapDivPatient}`}>
          <button
            className={Style.btnAddress}
            onClick={() => setAddressField(!addressField)}
          >
            <AddForm />
          </button>
          <label className={Style.contents}>
            Miejsce udzielenia swiadczenia zdrowotnego:
          </label>
          {address()}
          <Field
            className={Style.inputText}
            name="companyName"
            placeholder="Miejsce zdarzenia"
          />
        </div>
        <div className={`${Style.wrapDiv} ${Style.wrapDivPatient}`}>
          <label className={Style.contents}>
            Dane podmiotu udzielającego świadczenia, ze wskazaniem komórki
            organizacyjnej, w której udzielono świadczeń zdrowotnych:
          </label>
          <input className={Style.inputText} type="text" placeholder="" />
        </div> */}
      </Formik>
    </>
  );
};

export default IncidentData;
