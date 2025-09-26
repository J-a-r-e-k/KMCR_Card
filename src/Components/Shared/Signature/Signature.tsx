import Style from './Signature.module.scss'

export const Signature = ({ setWrapSignature }: { setWrapSignature: (value: boolean) => void }) => {
    return (
        <div className={Style.wrapPanelSignature}>
            <div className={Style.panelSignature}>
                <button className={`${Style.btn} ${Style.btnClean}`}>Wyczyść </button>
                <div className={Style.signatureWrite}></div>
                <button
                    className={`${Style.btn}`}
                    onClick={() => setWrapSignature(false)}
                >
                    Zapisz
                </button>
            </div>
        </div>
    );
};