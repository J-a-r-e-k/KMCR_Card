import React from 'react'
import Style from './CustomCheckbox.module.scss'
import { Field } from 'formik'
type CustomCheckboxProps = {
    name: string;
    id: string;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ name, id }) => {
    return (
        <>
            <Field
                id={id}
                className={Style.check}
                name={name}
                type="checkbox"
            />
        </>
    )
}

export default CustomCheckbox