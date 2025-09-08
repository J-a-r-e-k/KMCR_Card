import Style from './ProviderDetails.module.scss'
import { Field } from 'formik';

const ProviderDetails = () => {
    return (
        <div className={`${Style.wrapDiv} `}>
            <p className={`${Style.contents} `}>
                Dane podmiotu udzielającego świadczenia, ze wskazaniem komórki
                organizacyjnej, w której udzielono świadczeń zdrowotnych:
            </p>
            <Field
                name="incidentData.companyName"
                className={Style.inputText}
                type="text"
                placeholder=""
            />
        </div>
    )
}
export default ProviderDetails