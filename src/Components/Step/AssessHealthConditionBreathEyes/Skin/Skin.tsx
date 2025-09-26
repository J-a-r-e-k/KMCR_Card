import React from 'react'
import Style from '../AssessHealthConditionBreathEyes.module.scss'
import { Field } from 'formik';

const Skin = () => {
    return (
        <div className={Style.wrapGlasgow}>
            <h2>OBJAWY</h2>
            <ul className={Style.wrapList}>
                <li className={Style.wrapCheck}>
                    <p>wstrząs</p>
                    <div className={Style.wrapCheck}>
                        <Field
                            id="ShockYes"
                            className={Style.checkField}
                            name="symptomsClinical.Shock"
                            type="radio"
                            value="yes"
                        />
                        <label htmlFor="ShockYes" className={Style.check}>
                            TAK
                        </label>

                        <Field
                            id="ShockNO"
                            className={Style.checkField}
                            name="symptomsClinical.Shock"
                            type="radio"
                            value="no"
                        />
                        <label htmlFor="ShockNO" className={Style.check}>
                            NIE
                        </label>
                    </div>
                </li>
                <li className={Style.wrapCheck}>
                    <p>NZK</p>
                    <div className={Style.wrapCheck}>
                        <Field
                            id="cardiacArrestYes"
                            className={Style.checkField}
                            name="symptomsClinical.cardiacArrest"
                            type="radio"
                            value="yes"
                        />
                        <label htmlFor="cardiacArrestYes" className={Style.check}>
                            TAK
                        </label>
                        <Field
                            id="cardiacArrestNo"
                            className={Style.checkField}
                            name="symptomsClinical.cardiacArrest"
                            type="radio"
                            value="no"
                        />
                        <label htmlFor="cardiacArrestNo" className={Style.check}>
                            NIE
                        </label>
                    </div>
                </li>
                <li className={Style.wrapCheck}>
                    <p>objawy oponowe</p>
                    <div className={Style.wrapCheck}>
                        <Field
                            id="meningealSignsYes"
                            className={Style.checkField}
                            name="symptomsClinical.meningealSigns"
                            type="radio"
                            value="yes"
                        />
                        <label htmlFor="meningealSignsYes" className={Style.check}>
                            TAK
                        </label>
                        <Field
                            id="meningealSignsNo"
                            className={Style.checkField}
                            name="symptomsClinical.meningealSigns"
                            type="radio"
                            value="no"
                        />
                        <label htmlFor="meningealSignsNo" className={Style.check}>
                            NIE
                        </label>
                    </div>
                </li>
                <li className={Style.wrapCheck}>
                    <p>drgawki</p>
                    <div className={Style.wrapCheck}>
                        <Field
                            id="seizuresYes"
                            className={Style.checkField}
                            name="symptomsClinical.seizures"
                            type="radio"
                            value="yes"
                        />
                        <label htmlFor="seizuresYes" className={Style.check}>
                            TAK
                        </label>
                        <Field
                            id="seizuresNo"
                            className={Style.checkField}
                            name="symptomsClinical.seizures"
                            type="radio"
                            value="no"
                        />
                        <label htmlFor="seizuresNo" className={Style.check}>
                            NIE
                        </label>
                    </div>
                </li>
                <li className={Style.wrapCheck}>
                    <p>afazja</p>
                    <div className={Style.wrapCheck}>
                        <Field
                            id="aphasiaYes"
                            className={Style.checkField}
                            name="symptomsClinical.aphasia"
                            type="radio"
                            value="yes"
                        />
                        <label htmlFor="aphasiaYes" className={Style.check}>
                            TAK
                        </label>
                        <Field
                            id="aphasiaNo"
                            className={Style.checkField}
                            name="symptomsClinical.aphasia"
                            type="radio"
                            value="no"
                        />
                        <label htmlFor="aphasiaNo" className={Style.check}>
                            NIE
                        </label>
                    </div>
                </li>
                <li className={Style.wrapCheck}>
                    <p>wymioty</p>
                    <div className={Style.wrapCheck}>
                        <Field
                            id="vomitingYes"
                            className={Style.checkField}
                            name="symptomsClinical.vomiting"
                            type="radio"
                            value="yes"
                        />
                        <label htmlFor="vomitingYes" className={Style.check}>
                            TAK
                        </label>
                        <Field
                            id="vomitingNo"
                            className={Style.checkField}
                            name="symptomsClinical.vomiting"
                            type="radio"
                            value="no"
                        />
                        <label htmlFor="vomitingNo" className={Style.check}>
                            NIE
                        </label>
                    </div>
                </li>
                <li className={Style.wrapCheck}>
                    <p>biegunka</p>
                    <div className={Style.wrapCheck}>
                        <Field
                            id="diarrheaYes"
                            className={Style.checkField}
                            name="symptomsClinical.diarrhea"
                            type="radio"
                            value="yes"
                        />
                        <label htmlFor="diarrheaYes" className={Style.check}>
                            TAK
                        </label>
                        <Field
                            id="diarrheaNo"
                            className={Style.checkField}
                            name="symptomsClinical.diarrhea"
                            type="radio"
                            value="no"
                        />
                        <label htmlFor="diarrheaNo" className={Style.check}>
                            NIE
                        </label>
                    </div>
                </li>
                <li className={Style.wrapCheck}>
                    <p>krwawienie</p>
                    <div className={Style.wrapCheck}>
                        <Field
                            id="bleedingYes"
                            className={Style.checkField}
                            name="symptomsClinical.bleeding"
                            type="radio"
                            value="yes"
                        />
                        <label htmlFor="bleedingYes" className={Style.check}>
                            TAK
                        </label>
                        <Field
                            id="bleedingNo"
                            className={Style.checkField}
                            name="symptomsClinical.bleeding"
                            type="radio"
                            value="no"
                        />
                        <label htmlFor="bleedingNo" className={Style.check}>
                            NIE
                        </label>
                    </div>
                </li>
                <li className={Style.wrapCheck}>
                    <p>obrzęki</p>
                    <div className={Style.wrapCheck}>
                        <Field
                            id="swellingYes"
                            className={Style.checkField}
                            name="symptomsClinical.swelling"
                            type="radio"
                            value="yes"
                        />
                        <label htmlFor="swellingYes" className={Style.check}>
                            TAK
                        </label>
                        <Field
                            id="swellingNo"
                            className={Style.checkField}
                            name="symptomsClinical.swelling"
                            type="radio"
                            value="no"
                        />
                        <label htmlFor="swellingNo" className={Style.check}>
                            NIE
                        </label>
                    </div>
                </li>
                <li className={Style.wrapCheck}>
                    <p>zasłabnięcie</p>
                    <div className={Style.wrapCheck}>
                        <Field
                            id="syncopeYes"
                            className={Style.checkField}
                            name="symptomsClinical.syncope"
                            type="radio"
                            value="yes"
                        />
                        <label htmlFor="syncopeYes" className={Style.check}>
                            TAK
                        </label>
                        <Field
                            id="syncopeNo"
                            className={Style.checkField}
                            name="symptomsClinical.syncope"
                            type="radio"
                            value="no"
                        />
                        <label htmlFor="syncopeNo" className={Style.check}>
                            NIE
                        </label>
                    </div>
                </li>
                <li className={Style.wrapCheck}>
                    <p>hipotermia</p>
                    <div className={Style.wrapCheck}>
                        <Field
                            id="hypothermiaYes"
                            className={Style.checkField}
                            name="symptomsClinical.hypothermia"
                            type="radio"
                            value="yes"
                        />
                        <label htmlFor="hypothermiaYes" className={Style.check}>
                            TAK
                        </label>
                        <Field
                            id="hypothermiaNo"
                            className={Style.checkField}
                            name="symptomsClinical.hypothermia"
                            type="radio"
                            value="no"
                        />
                        <label htmlFor="hypothermiaNo" className={Style.check}>
                            NIE
                        </label>
                    </div>
                </li>
                <li className={Style.wrapCheck}>
                    <div>
                        <p>Porażenie prądem </p>
                        <p>lub piorunem</p>
                    </div>
                    <div className={Style.wrapCheck}>
                        <Field
                            id="electrocutionYes"
                            className={Style.checkField}
                            name="symptomsClinical.electrocution"
                            type="radio"
                            value="yes"
                        />
                        <label htmlFor="electrocutionYes" className={Style.check}>
                            TAK
                        </label>
                        <Field
                            id="electrocutionNo"
                            className={Style.checkField}
                            name="symptomsClinical.electrocution"
                            type="radio"
                            value="no"
                        />
                        <label htmlFor="electrocutionNo" className={Style.check}>
                            NIE
                        </label>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Skin