import Style from './EventNumber.module.scss'
import { Field } from 'formik';

const EventNumber = () => {
    return (
        <div className={`${Style.wrapDiv} ${Style.wrapDivPatient}`}>
            <label className={Style.contents}>
                Numer karty nadany przez podmiot udzielający świadczeń
                zdrowotnych:
            </label>
            <Field className={Style.inputText} name="nrIncident" />
        </div>
    )
}
export default EventNumber