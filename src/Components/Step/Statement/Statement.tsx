import Style from './Statement.module.scss';
import AddDate from '../Icon/AddDate';
import { useState } from 'react';
import { Field, useFormikContext } from 'formik';
import { currentDate } from '../../Utils/CurrentDate';
import { Signature } from '../../Shared/Signature/Signature';
import WithdrawalAid from './WithdrawalAid/WithdrawalAid';

const Statement = () => {
  const { setFieldValue } = useFormikContext();
  const [wrapSignature, setWrapSignature] = useState(false);

  return (
    <>
      <div className={Style.wrapDiv}>
        <h2 className={Style.title}>OŚWIADCZENIE PACJENTA</h2>
        <p className={Style.contents}>
          Poinformowany, świadomy możliwości bezpośredniego zagrożenia zdrowia i
          życia, nie wyrażam zgody na:
        </p>
        <div className={Style.wrapCheck}>
          <Field
            name="statement.refusal"
            type="radio"
            value="providingAssistance"
            className={`${Style.check}`}
          />
          <p className={Style.contents}>udzielenie świadczenia zdrowotnego</p>
          <Field
            className={`${Style.check}`}
            name="statement.refusal"
            type="radio"
            value="transportHospital"
          />
          <p className={Style.contents}>przewiezienie do szpitala</p>
        </div>
        <p className={Style.contents}>
          Oświadczam również, że udzielono mi wyczerpujących informacji o stanie
          zdrowia oraz uzyskałem odpowiedzi na zadawane przeze mnie pytania.
        </p>
        <div>
          <label className={Style.contents}>Data i godzina odmowy:</label>
          <Field className={Style.inputText} name="statement.patientRefusalDate" />
          <button
            className={Style.btnAddDate}
            onClick={() => {
              setFieldValue('statement.patientRefusalDate', currentDate());
            }}
            type="button"
          >
            <AddDate />
          </button>
        </div>
        <div className={Style.wrapSignature}>
          <p>podpis pacjenta lub przedstawiciela ustawowego:</p>
          <div
            className={Style.signature}
            onClick={() => {
              setWrapSignature(!wrapSignature);
            }}
          ></div>
          {wrapSignature && <Signature setWrapSignature={setWrapSignature} />}

        </div>
      </div>
      <WithdrawalAid />
    </>
  );
};
export default Statement;
