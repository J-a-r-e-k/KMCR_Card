import { FullFormData } from '../../../../context/AppContext';
import Style from './PlaceIncident.module.scss'
import { Field, useFormikContext } from 'formik';

const Address = ({ addressField }: { addressField: boolean }) => {
    const { values } = useFormikContext<FullFormData>();
    const { incidentData } = values;
    const hasAnyAddersData =
        incidentData.incidentCity ||
        incidentData.incidentPost ||
        incidentData.incidentStreet ||
        incidentData.incidentNr ||
        incidentData.incidentNrApartment

    if (addressField || hasAnyAddersData)
        return (
            <div className={Style.wrapAddress}>
                <label className={`${Style.address} ${Style.city}`}>
                    miejscowość:
                    <Field className={`${Style.inputText}`} name="incidentData.incidentCity" />
                </label>
                <label className={Style.address}>kod pocztowy:
                    <Field
                        className={`${Style.inputText} ${Style.post}`}
                        name="incidentData.incidentPost"
                    />
                </label>
                <label className={`${Style.address} ${Style.street}`}>
                    ul.
                    <Field
                        className={`${Style.inputText} ${Style.city}`}
                        name="incidentData.incidentStreet"
                        placeholder="ulica"
                    />
                </label>
                <label className={Style.address}>nr:
                    <Field
                        className={`${Style.inputText}`}
                        name="incidentData.incidentNr"
                        placeholder="budynku"
                    />
                </label>
                <label className={Style.address}>
                    m:
                    <Field
                        className={`${Style.inputText}`}
                        name="incidentData.incidentNrApartment"
                        placeholder="mieszkanie"
                    />
                </label>
            </div>
        )
}
export default Address