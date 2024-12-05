import Tetris from "react-tetris";
import "./App.css";
import Modal from "./components/modal/Modal";
import music from "./resources/Dont-Stop-Me-Now.mp3";
import { useEffect, useState } from "react";
import Control from "./components/controls/Control";
import logo from "./resources/Sirius_Logo.png";
import ControlPanel from "./components/control_panel/ControlPanel";

const App = () => {

  const [rotation, setRotation] = useState(0);

  const handleLogoClick = () => {
    setRotation((prevRotation) => prevRotation + 90);
  };
  //const [startGame, setStartGame] = useState(false);

  //const play = () => {
  //  new Audio(music).play();
  //};

  return (
    <main style={{
      transform: `rotate(${rotation}deg)`, // Aplicar transformación
      transition: "transform 0.3s ease-in-out", // Animación suave
    }}>
      <img
        src={logo}
        id="logo"
        onClick={handleLogoClick} // Manejar el clic
      />
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
                <div className="game-container">
                  <Gameboard/>
                  {window.innerWidth < 500 && (
                    <section className="controls">
                      <Control
                        up={controller.flipClockwise}
                        right={controller.moveRight}
                        down={controller.moveDown}
                        left={controller.moveLeft}
                      />
                      <Control
                        up={controller.flipCounterclockwise}
                        down={controller.hardDrop}
                        left={controller.hold}
                        right={controller.flipClockwise}
                        roundedBtn
                      />
                    </section>
                  )}
                </div>
                {window.innerWidth < 500 ? <div></div> : <ControlPanel/>}
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
