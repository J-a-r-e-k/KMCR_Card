import { useAppContext } from '../../../../context/AppContext';
import Style from './PlaceIncident.module.scss'
import { Field } from 'formik';

const Address = ({ addressField }: { addressField: boolean }) => {
    const appContext = useAppContext();
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
                <label className={`${Style.address} ${Style.city}`}>
                    miejscowość:
                    <Field className={`${Style.inputText}`} name="incidentCity" />
                </label>
                <label className={Style.address}>kod pocztowy:
                    <Field
                        className={`${Style.inputText} ${Style.post}`}
                        name="incidentPost"
                    />
                </label>
                <label className={`${Style.address} ${Style.street}`}>
                    ul.
                    <Field
                        className={`${Style.inputText} ${Style.city}`}
                        name="incidentStreet"
                        placeholder="ulica"
                    />
                </label>
                <label className={Style.address}>nr:
                    <Field
                        className={`${Style.inputText}`}
                        name="incidentNr"
                        placeholder="budynku"
                    />
                </label>
                <label className={Style.address}>
                    m:
                    <Field
                        className={`${Style.inputText}`}
                        name="incidentNrApartment"
                        placeholder="mieszkanie"
                    />
                </label>
            </div>
        )
}
export default Address