import Style from './NumberInput.module.scss'
import { Field } from 'formik';

type NumberInputProps = {
    name: string;
    id: string;
    label?: string;
    adornment?: string;
}

const NumberInput = ({ name, id, label, adornment }: NumberInputProps) => {
    return (
        <>
            {label && <label className={Style.label}>{label}</label>}
            <Field
                id={id}
                className={Style.input}
                name={name}
                type="number"
            />
            {adornment && <p className={Style.adornment}>{adornment}</p>}
        </>
    )
}
export default NumberInput