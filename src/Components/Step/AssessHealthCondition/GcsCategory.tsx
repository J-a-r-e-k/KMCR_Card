import CustomRadio from '../../Utils/CustomRadio/CustomRadio';
import Style from './AssessHealthCondition.module.scss'

type GcsOption = {
    label: string;
    value: number;
}
type GcsCategoryProps = {
    title: string;
    name: string;
    options: GcsOption[];
}

const GcsCategory: React.FC<GcsCategoryProps> = ({ title, name, options }) => {
    return (
        <ul className={Style.wrapList}>
            <p>{title}</p>
            {options.map((option) => (
                <li key={option.value} className={Style.wrapCheck}>
                    <p>{option.label}</p>
                    <CustomRadio name={name} value={String(option.value)} id={`${name}-${option.value}`} />
                </li>
            ))}
        </ul>
    )
}
export default GcsCategory