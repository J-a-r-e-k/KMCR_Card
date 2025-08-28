import { useState } from 'react';
import { Field } from 'formik';
import Style from './PlaceIncident.module.scss'
import AddForm from '../../Icon/AddForm';
import Address from './Address';

const PlaceIncident = () => {
    const [addressField, setAddressField] = useState(false);
    return (
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
            <Address addressField={addressField} />
            <Field
                className={Style.inputText}
                name="incidentPlace"
                placeholder="Miejsce zdarzenia"
            />
        </div>
    )
}
export default PlaceIncident