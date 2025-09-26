import React from 'react'
import Style from './DualSidedChecklist.module.scss'
import DualListItem from '../DualListItem/DualListItem';

type DualSidedChecklistProps = {
    title?: string;
    children: React.ReactNode;
}

const DualSidedChecklist: React.FC<DualSidedChecklistProps> = ({ title, children }) => {
    return (
        <ul >
            <h3>{title ?? ''}</h3>
            <DualListItem>
                <p className={Style.nameSide}>L</p>
                <p className={Style.nameSide}>P</p>
            </DualListItem>
            {children}
        </ul>
    )
}
export default DualSidedChecklist