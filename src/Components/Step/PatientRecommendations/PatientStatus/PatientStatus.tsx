import { Field } from 'formik';
import Style from './PatientStatus.module.scss'

const PatientStatus = () => {
    return (
        <div className={Style.wrap}>
            <p>Postępowanie z pacjentem:</p>
            <ul className={Style.patientManagement}>
                <li className={`${Style.wrapCheck} `}>
                    <Field
                        className={Style.check}
                        name="patientStatus.remainedAtScene"
                        type="checkbox"
                    />
                    <p>pacjent pozostał w miejscu zdarzenia</p>
                </li>
                <li className={`${Style.wrapCheck} ${Style.anotherWrapCheck} `}>
                    <Field
                        className={Style.check}
                        name="patientStatus.transferredToEMS"
                        type="checkbox"
                    />
                    <p>pacjent przekazany zespołowi ratownictwa medycznego</p>
                </li>
                <li className={Style.wrapCheck}>
                    <Field
                        className={Style.check}
                        name="patientStatus.patientWent"
                        type="checkbox"
                    />
                    <p>pacjent oddalił sie samodzielnie</p>
                </li>
                <li className={Style.wrapCheck}>
                    <Field
                        className={Style.check}
                        name="patientStatus.handedOverToPolice"
                        type="checkbox"
                    />
                    <p>przekazano Policji</p>
                </li>
                <li className={`${Style.wrapCheck}  `}>
                    <Field
                        className={Style.check}
                        name="patientStatus.other"
                        type="checkbox"
                    />
                    <p>Inne: </p>
                    <Field
                        className={Style.anotherText}
                        name="patientStatus.otherText"
                        type="text"
                    />
                </li>
            </ul>
        </div>
    )
}
export default PatientStatus