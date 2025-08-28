import Style from './TimeIncident.module.scss'
import AddDate from '../../Icon/AddDate';
import { Field, useFormikContext } from 'formik';
import { currentDate } from '../../../Utils/CurrentDate';

const TimeIncident = () => {
    const { setFieldValue } = useFormikContext();
    return (
        <div className={`${Style.wrapDiv} ${Style.wrapDate}`}>
            <label className={Style.contents}>
                Data i godzina udzielenia swiadczenia zdrowotnego (rrrr-mm-dd
                gg:mm):
            </label>
            <Field className={Style.inputText} name="incidentDate" />
            {/* <Field className={Style.inputText} name="incidentDate" type="datetime-local" /> */}
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
    )
}
export default TimeIncident