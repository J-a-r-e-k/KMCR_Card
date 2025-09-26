import Style from '../AssessHealthConditionBreathEyes.module.scss'
import { Field } from 'formik';

const Pulse = () => {
    return (
        <div className={Style.wrapGlasgow}>
            <h2>TĘTNO</h2>
            <div className={Style.wrapPulse}>
                <div className={`${Style.wrapCheck} ${Style.wrapBreathingRate}`}>
                    <Field
                        className={Style.breathingRate}
                        name="pulse"
                        type="number"
                    />
                    <p> /min</p>
                </div>
                <div className={Style.wrapPulseCheck}>
                    <label htmlFor="heartRhythmRegular" className={Style.pulsText}>
                        miarowe
                    </label>
                    <Field
                        id="heartRhythmRegular"
                        className={Style.check}
                        name="heartRhythm"
                        type="radio"
                        value="Regular"
                    />
                    <Field
                        id="heartRhythmIrregular"
                        className={Style.check}
                        name="heartRhythm"
                        type="radio"
                        value="Irregular"
                    />
                    <label htmlFor="heartRhythmIrregular" className={Style.pulsText}>
                        niemiarowe
                    </label>

                    <div className={Style.wrapLungSide}></div>
                </div>
            </div>
        </div>
    )
}

export default Pulse