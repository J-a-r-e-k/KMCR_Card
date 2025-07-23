
import { Field } from 'formik';
import Style from './ResponderSignature.module.scss'
import { useState } from 'react';
import { Signature } from '../../../Utils/Signature/Signature';
import AddDate from '../../Icon/AddDate';
import { useFormikContext } from 'formik';
import { currentDate } from '../../../Utils/CurrentDate';
import { Select } from '../../../Utils/Select/Select';



const ResponderSignature = () => {
    const { setFieldValue } = useFormikContext();
    const [wrapSignature, setWrapSignature] = useState(false);
    const [btnTitle, setBtnTitle] = useState(false);
    return (
        <form className={Style.wrapRecommendations}>
            <p className={Style.contents}>
                Data, podpis i pieczęć ratownika medycznego:
            </p>
            <ul className={Style.wrapParamedicInfo}>
                <li
                    className={`${Style.paramedicInfo}`}
                >
                    <Field
                        className={Style.elementField}
                        name="responderSignature.fullName"
                        type="text"
                        placeholder="Imie Nazwisko"
                    />
                </li>

                <li
                    className={`${Style.paramedicInfo} `}
                >
                    <Field
                        className={Style.elementField}
                        name="responderSignature.licenseNumber"
                        type="text"
                        placeholder="Nr. dyplomu"
                    />
                </li>
                <li className={Style.paramedicInfo}>
                    <Field
                        className={`${Style.titleField} ${Style.elementField}`}
                        name="responderSignature.title"
                        type="text"
                        autoComplete="off"
                        placeholder="Tytuł osoby udzielającej pomocy:"
                        onFocus={() => setBtnTitle(true)}
                    />
                    {btnTitle && <Select setBtnTitle={setBtnTitle} />}
                </li>

                <li className={`${Style.paramedicInfo} ${Style.dateField}`}>
                    <Field
                        className={` ${Style.elementField}`}
                        name="responderSignature.datetime"
                        type="text"
                        autoComplete="off"
                        placeholder="data:"
                    />
                    <button
                        type='button'
                        onClick={() => {
                            setFieldValue('responderSignature.datetime', currentDate());
                        }}
                    >
                        <AddDate />
                    </button>
                </li>
            </ul>

            <div
                className={Style.signature}
                onClick={() => {
                    setWrapSignature(!wrapSignature);
                }}
            ></div>
            {wrapSignature && <Signature setWrapSignature={setWrapSignature} />}
        </form>

    )
}

export default ResponderSignature