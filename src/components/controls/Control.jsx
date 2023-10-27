import './Control.styles.css'
const Control = ({up, down, left, right, roundedBtn=false}) => {
    return (
        <div className={`movement-control`}>
            <div className="upper-section">
                <button className={`up move-control-btn ${roundedBtn ? "rounded": ""}`} onClick={up}></button>
            </div>
            <div className="mid-section">
                <button className={`left move-control-btn ${roundedBtn ? "rounded":""}`} onClick={left}></button>
                <button className={`right move-control-btn ${roundedBtn ? "rounded":""}`} onClick={right}></button>
            </div>
            <div className="bottom-section">
                <button className={`down move-control-btn ${roundedBtn ? "rounded":""}`} onClick={down}></button>
            </div>

        </div>
    )
}

export default Control