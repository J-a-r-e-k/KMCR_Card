import React from 'react'
import Style from './WrapList.module.scss'

const WrapList = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={Style.wrap}>
            <h2>UKŁAD ODDECHOWY</h2>
            <ul>
                {children}
            </ul>
        </div>
    )
}
export default WrapList