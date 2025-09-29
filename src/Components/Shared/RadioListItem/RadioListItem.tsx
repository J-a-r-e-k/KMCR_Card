import Style from './RadioListItem.module.scss'

type RadioListItemProps = {
    children: React.ReactNode;
    description: string;
}

const RadioListItem = ({ children, description }: RadioListItemProps) => {
    return (
        <li className={Style.wrapCheck}>
            <p>{description}</p>
            {children}
        </li>
    )
}
export default RadioListItem