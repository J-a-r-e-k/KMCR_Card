import React from 'react'
import Style from './DualListItem.module.scss'

type DualListItemProps = {
    description?: string;
    children: React.ReactNode;
}

const DualListItem: React.FC<DualListItemProps> = ({ description, children }) => {
    return (
        <li className={Style.wrapDualList}>
            <label className={Style.name}>{description}</label>
            {children}
        </li>
    )
}
export default DualListItem