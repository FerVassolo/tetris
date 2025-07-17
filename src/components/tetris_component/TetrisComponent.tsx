import Tetris from "react-tetris";
import Modal from "../modal/Modal";
import logo from "../../resources/Sirius_Logo.png";
import ControlPanel from "../control_panel/ControlPanel";
import GameContainer from "../game_container/GameContainer";
import { HelpCircle } from "lucide-react";
import React from "react";
import "./TetrisComponent.styles.css";
import ScoreWithHelp from "../score/ScoreWithHelp";

interface TetrisComponentProps {
  showTooltip?: boolean;
  showNextPieces?: boolean;
}

const TetrisComponent: React.FC<TetrisComponentProps> = ({ showTooltip = true, showNextPieces = true }) => {
  return (
    <main>
      <Tetris
        keyboardControls={{
          down: "MOVE_DOWN",
          left: "MOVE_LEFT",
          right: "MOVE_RIGHT",
          space: "HARD_DROP",
          z: "FLIP_COUNTERCLOCKWISE",
          x: "FLIP_CLOCKWISE",
          up: "FLIP_CLOCKWISE",
          p: "TOGGLE_PAUSE",
          c: "HOLD",
          shift: "HOLD",
        }}
      >
        {({
          HeldPiece,
          Gameboard,
          PieceQueue,
          points,
          linesCleared,
          state,
          controller,
        }) => (
          <>
            <ScoreWithHelp points={points} showTooltip={showTooltip} />
            <div className="game-layout">
              <div className="main-container">
                <div></div>
                <GameContainer controller={controller}>
                  <Gameboard />
                </GameContainer>
                {showNextPieces && <PieceQueue />}
              </div>
            </div>

            {state === "LOST" && (
              <Modal>
                <h2>GAME OVER</h2>
                <button
                  onClick={controller.restart}
                  className="game-over-btn"
                >
                  New game
                </button>
              </Modal>
            )}
          </>
        )}
      </Tetris>
    </main>
  );
};

export default TetrisComponent; 