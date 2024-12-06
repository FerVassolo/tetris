import Tetris from "react-tetris";
import "./App.css";
import Modal from "./components/modal/Modal";
import music from "./resources/Dont-Stop-Me-Now.mp3";
import {useEffect, useRef, useState} from "react";
import Control from "./components/controls/Control";
import logo from "./resources/Sirius_Logo.png";
import ControlPanel from "./components/control_panel/ControlPanel";

const App = () => {
  const [controller, setController] = useState(null);
  const gameStateRef = useRef(""); // Referencia para el estado del juego

  useEffect(() => {
    const handleMouseMove = (event) => handleMove(event);
    const handleMouseClick = () => handleKeyDown("CLICK");
    const handleMouseDblClick = () => handleKeyDown("DBLCLICK");

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("click", handleMouseClick);
    document.addEventListener("dblclick", handleMouseDblClick);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("click", handleMouseClick);
      document.removeEventListener("dblclick", handleMouseDblClick);
    };
  }, [controller]);


  const handleMove = (event) => {
    const { movementX, movementY } = event;

    let direction = '';
    if (movementX > 0) direction = 'RIGHT';
    if (movementX < 0) direction = 'LEFT';
    if (movementY > 0) direction = 'DOWN';
    if (movementY < 0) direction = 'UP';

    if (direction) {
      handleKeyDown(direction);
    }
  }


  const handleKeyDown = (direction) => {
    if (!controller) return;

    const keyActions = {
      LEFT: () => controller.moveLeft(),
      RIGHT: () => controller.moveRight(),
      DOWN: () => controller.flipClockwise(),
      UP: () => controller.moveDown(),
      DBLCLICK: () => handleReset(),
      CLICK: () => controller.hardDrop(),
    };

    if (keyActions[direction]) {
      keyActions[direction]();
    }
  };

  const handleReset = () => {
    if (gameStateRef.current === "LOST" && controller) {
      controller.restart();
    } else {
      console.log("El juego no está en estado 'isLost', no se reinicia.");
    }
  };



  return (
    <main>
      <img
        src={logo}
        id="logo"
        alt="Logo Sirius"
      />
      <Tetris
        style={{}}
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
          gameStateRef.current = state;
          setController(controller);

          return (
            <>
              <p className="points-container">{points} PTS</p>
              <div className="main-container">
                <div></div>
                <div className="game-container">
                  <Gameboard />
                  {/*{window.innerWidth < 500 && (*/}
                  {/*  <section className="controls">*/}
                  {/*    <Control*/}
                  {/*      up={controller.flipClockwise}*/}
                  {/*      right={controller.moveRight}*/}
                  {/*      down={controller.moveDown}*/}
                  {/*      left={controller.moveLeft}*/}
                  {/*    />*/}
                  {/*    <Control*/}
                  {/*      up={controller.flipCounterclockwise}*/}
                  {/*      down={controller.hardDrop}*/}
                  {/*      left={controller.hold}*/}
                  {/*      right={controller.flipClockwise}*/}
                  {/*      roundedBtn*/}
                  {/*    />*/}
                  {/*  </section>*/}
                  {/*)}*/}
                </div>
                {/*{window.innerWidth < 500 ? <div></div> : <ControlPanel />}*/}
              </div>
              {gameStateRef.current === "LOST" && (
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
