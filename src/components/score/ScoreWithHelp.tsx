import React, { useState } from "react";
import { HelpCircle } from "lucide-react";
import ControlPanel from "../control_panel/ControlPanel";
import "./ScoreWithHelp.styles.css";

interface ScoreWithHelpProps {
  points: number;
  showTooltip?: boolean;
}

const ScoreWithHelp: React.FC<ScoreWithHelpProps> = ({ points, showTooltip }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="score-row">
      <p className="points-container">{points} PTS</p>
      {showTooltip && (
        <div className="controls-tooltip-container">
          <div
            className="icon-tooltip-wrapper"
            tabIndex={0}
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
            onFocus={() => setShow(true)}
            onBlur={() => setShow(false)}
          >
            <button className="help-icon-btn" aria-label="Mostrar controles">
              <HelpCircle size={32} className="help-icon" />
            </button>
            <div className={`controls-tooltip${show ? " visible" : ""}`}>
              <ControlPanel />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScoreWithHelp; 