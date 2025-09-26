import React from 'react'
import Style from '../AssessHealthConditionBreathEyes.module.scss'
import { Field } from 'formik';

const Pupil = () => {
    return (
        <div className={Style.wrapGlasgow}>
            <h2>ŹRENICE</h2>
            <ul>
                <div className={Style.wrapLungSide}>
                    <p className={Style.description}>Reakcja na światło:</p>
                    <p className={Style.lungSide}>L</p>
                    <p className={Style.lungSide}>P</p>
                </div>
                <li className={Style.wrapCheck}>
                    <label>prawidłowa</label>
                    <div className={Style.wrapCheck}>
                        <Field
                            className={Style.check}
                            name="public.normal.left"
                            type="checkbox"
                        />
                        <Field
                            className={Style.check}
                            name="public.normal.right"
                            type="checkbox"
                        />
                    </div>
                </li>
                <li className={Style.wrapCheck}>
                    <label>powolna</label>
                    <div className={Style.wrapCheck}>
                        <Field
                            className={Style.check}
                            name="public.slow.left"
                            type="checkbox"
                        />
                        <Field
                            className={Style.check}
                            name="public.slow.right"
                            type="checkbox"
                        />
                    </div>
                </li>
                <li className={Style.wrapCheck}>
                    <label>brak</label>
                    <div className={Style.wrapCheck}>
                        <Field
                            className={Style.check}
                            name="public.absent.left"
                            type="checkbox"
                        />
                        <Field
                            className={Style.check}
                            name="public.absent.right"
                            type="checkbox"
                        />
                    </div>
                </li>
            </ul>
            <ul>
                <p className={Style.description}>Reakcja na światło:</p>
                <li className={Style.wrapCheck}>
                    <label>normalne</label>
                    <div className={Style.wrapCheck}>
                        <Field
                            className={Style.check}
                            name="public.regular.left"
                            type="checkbox"
                        />
                        <Field
                            className={Style.check}
                            name="public.regular.right"
                            type="checkbox"
                        />
                    </div>
                </li>
                <li className={Style.wrapCheck}>
                    <label>wąskie</label>
                    <div className={Style.wrapCheck}>
                        <Field
                            className={Style.check}
                            name="public.narrow.left"
                            type="checkbox"
                        />
                        <Field
                            className={Style.check}
                            name="public.narrow.right"
                            type="checkbox"
                        />
                    </div>
                </li>
                <li className={Style.wrapCheck}>
                    <label>szerokie</label>
                    <div className={Style.wrapCheck}>
                        <Field
                            className={Style.check}
                            name="public.wide.left"
                            type="checkbox"
                        />
                        <Field
                            className={Style.check}
                            name="public.wide.right"
                            type="checkbox"
                        />
                    </div>
                </li>
            </ul>
        </div>

    )
}

export default Pupil