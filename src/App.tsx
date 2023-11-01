import Tetris from "react-tetris";
import "./App.css";
import Modal from "./components/modal/Modal";
import logo from "./resources/Sirius_Logo.png";
import ControlPanel from "./components/control_panel/ControlPanel";
import GameContainer from "components/game_container/GameContainer";

const App = () => {
  return (
    <main>
      <img src={logo} id="logo" />
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
        }) => {
          return (
            <>
              <p className="points-container">{points} PTS</p>
              <div className="main-container">
                <div></div>
                <GameContainer controller={controller}>
                  <Gameboard />
                </GameContainer>
                <ControlPanel />
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
          );
        }}
      </Tetris>
    </main>
  );
};

export default App;
