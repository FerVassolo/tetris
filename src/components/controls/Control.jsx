import './Control.styles.css'
const Control = ({up, down, left, right, roundedBtn=false}) => {
    return (
        <div className={`movement-control`}>
            <div className="upper-section">
                <button className={`up control-btn ${roundedBtn ? "rounded": ""}`} onClick={up}></button>
            </div>
            <div className="mid-section">
                <button className={`left control-btn ${roundedBtn ? "rounded":""}`} onClick={left}></button>
                <button className={`right control-btn ${roundedBtn ? "rounded":""}`} onClick={right}></button>
            </div>
            <div className="bottom-section">
                <button className={`down control-btn ${roundedBtn ? "rounded":""}`} onClick={down}></button>
            </div>

        </div>
    )
}

export default Control