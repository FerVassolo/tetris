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
  const [controller, setController] = useState(null);

  const handleLogoClick = () => {
    setRotation((prevRotation) => prevRotation + 90);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!controller) return;

      // Mapeo de códigos de teclas del control remoto y teclas estándar
      const keyActions = {
        37: () => controller.moveLeft(), // Flecha izquierda
        38: () => controller.flipClockwise(), // Flecha arriba
        39: () => controller.moveRight(), // Flecha derecha
        40: () => controller.moveDown(), // Flecha abajo
        13: () => controller.hardDrop(), // Tecla Enter/OK
        10009: () => console.log("Botón Back presionado"), // Botón Back (para TVs)
      };

      if (keyActions[event.keyCode]) {
        event.preventDefault();
        keyActions[event.keyCode]();
      }
    };

    // Escuchar eventos de teclas
    window.addEventListener("keydown", handleKeyDown);

    // Limpiar listener al desmontar componente
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [controller]);

  return (
    <main
      style={{
        transform: `rotate(${rotation}deg)`,
        transition: "transform 0.3s ease-in-out",
      }}
    >
      <img
        src={logo}
        id="logo"
        onClick={handleLogoClick}
        alt="Logo Sirius"
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
          setController(controller);
          return (
            <>
              <p className="points-container">{points} PTS</p>
              <div className="main-container">
                <div></div>
                <div className="game-container">
                  <Gameboard />
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
                {window.innerWidth < 500 ? <div></div> : <ControlPanel />}
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
