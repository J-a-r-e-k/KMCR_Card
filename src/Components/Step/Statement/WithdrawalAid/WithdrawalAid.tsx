import Style from './WithdrawalAid.module.scss';
import { currentDate } from '../../../Utils/CurrentDate';
import { Field, useFormikContext } from 'formik';
import AddDate from '../../Icon/AddDate';

const WithdrawalAid = () => {
    const { setFieldValue } = useFormikContext();
    return (
        <div className={Style.wrapDiv}>
            <p className={Style.textBold}>
                Odstąpiono od udzielania świadczeń zdrowotnych:
            </p>
            <div>
                <label className={Style.contents}>Data i godzina odmowy:</label>
                <Field className={Style.inputText} name="statement.withdrawalAidTime" />
                <button
                    onClick={() => {
                        setFieldValue('statement.withdrawalAidTime', currentDate());
                    }}
                    type="button"
                >
                    <AddDate />
                </button>
            </div>
            <div className={Style.description}>
                <label>Przyczyna odstąpienia:</label>
                <Field
                    className={Style.inputText}
                    name="statement.legalGuardianFirstName"
                    as="textarea"
                    rows="2"
                    placeholder="Powód nie podjęcia MCR"
                />
            </div>
        </div>
    )
}
export default WithdrawalAid