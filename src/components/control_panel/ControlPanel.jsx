import ArrowSVG from "../../resources/ArrowSVG"
import CustomContainer from "../custom_container/CustomContainer"
import Key from "../key/Key"
import './ControlPanel.styles.css'

const ControlPanel = () => {
  return (
    <CustomContainer title={"CONTROLS"} className={"control-panel"}>
      <div className="key-container">
        <Key style={{ padding: "14px 100px 11px 14px" }}>Space</Key>
        <p>Hard Drop</p>
      </div>
      <div className="key-container">
        <Key style={{ padding: "12px" }}>
          <ArrowSVG />
        </Key>
        <Key style={{ padding: "12px" }}>
          <ArrowSVG transform={"rotate(180)"} />
        </Key>
        <p>Move Left - Right</p>
      </div>
      <div className="key-container">
        <Key style={{ padding: "12px" }}>
          <ArrowSVG transform={"rotate(270)"} />
        </Key>
        <p>Go fast to bottom</p>
      </div>
      <div className="key-container">
        <Key style={{ padding: "12px" }}>
          <ArrowSVG transform={"rotate(90)"} />
        </Key>
        <p>Flip Clockwise</p>
      </div>
      <div className="key-container">
        <Key style={{ padding: "12px" }}>Z</Key>
        <p>Flip CC</p>
      </div>
      <div className="key-container">
        <Key style={{ padding: "12px" }}>P</Key>
        <p>Pause</p>
      </div>
    </CustomContainer>
  )
}

export default ControlPanel;