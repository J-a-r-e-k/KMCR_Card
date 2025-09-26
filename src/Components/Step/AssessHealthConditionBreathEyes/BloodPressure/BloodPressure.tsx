import React from 'react'
import Style from '../AssessHealthConditionBreathEyes.module.scss'
import { Field } from 'formik';

const BloodPressure = () => {
    return (
        <div className={`${Style.wrapGlasgow}`}>
            <h2>CIŚNIENIE TĘTNICZE</h2>
            <div className={`${Style.wrapCheck} ${Style.wrapBreathingRate}`}>
                <Field
                    className={Style.breathingRate}
                    name="bloodPressure.systolic"
                    type="number"
                />
                <p>/</p>
                <Field
                    className={Style.breathingRate}
                    name="bloodPressure.diastolic"
                    type="number"
                />
                <p> mm/Hg</p>
            </div>
        </div>
    )
}

export default BloodPressure