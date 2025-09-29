import React from 'react';
import Style from './CustomRadio.module.scss'
import { Field } from 'formik'

type CustomRadioProps = {
    name: string;
    value: number | string;
    id: string;
    children?: React.ReactNode;
}

const CustomRadio: React.FC<CustomRadioProps> = ({ name, value, id, children }) => {
    return (
        <>
            <Field
                id={id}
                className={Style.checkField}
                name={name}
                type="radio"
                value={value}
            />
            <label htmlFor={id} className={`${Style.check} ${!children ? Style.checkIcon : ''}`}>
                {children ?? null}
            </label>
        </>
    )
}

export default CustomRadio