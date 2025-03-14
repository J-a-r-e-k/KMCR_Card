import Style from './Select.module.scss'
import { useFormikContext } from 'formik';

export const Select = ({ setBtnTitle }: {
    setBtnTitle: (value: boolean) => void,
}) => {
    const titles = ['Ratownik Medyczny', 'Pielęgniarka systemu', 'Lekarz'];
    const { setFieldValue } = useFormikContext();

    const selectionList = titles.map((title, index) => {
        return (
            <li
                key={index}
                className={Style.btnSelect}
                onClick={() => {
                    setFieldValue('responderSignature.title', `${title}`);
                    setBtnTitle(false);
                }}
            >
                {title}
            </li>
        );
    });

    return (
        <>
            <ul className={`${Style.select} `}>{selectionList}</ul>
            <div
                className={Style.wrapSelect}
                onClick={() => setBtnTitle(false)}
            ></div>
        </>
    );
};