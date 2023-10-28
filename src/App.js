import Tetris from "react-tetris";
import "./App.css";
import Modal from "./components/modal/Modal";
import music from "./resources/Dont-Stop-Me-Now.mp3";
import { useEffect, useState } from "react";
import Control from "./components/controls/Control";
import logo from "./resources/Sirius_Logo.png";
import CustomContainer from "./components/custom_container/CustomContainer";
import Key from "./components/key/Key";

const App = () => {
  //const [startGame, setStartGame] = useState(false);

  //const play = () => {
  //  new Audio(music).play();
  //};

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
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  alignContent: "center",
                  justifyItems: "center",
                }}
              >
                <div></div>
                <Gameboard />
                <CustomContainer title={"CONTROLS"}>
                  <div>
                    <Key style={{ padding: "14px 117px 11px 14px" }}>Space</Key>
                    <p>Hard Drop</p>
                  </div>
                  <p>Move left: Left arrow</p>
                  <p>Move right: Right arrow</p>
                  <p>Move down: Down arrow</p>
                  <p>Hard drop: Space</p>
                  <p>Rotate clockwise: Up arrow</p>
                  <p>Rotate counterclockwise: Z</p>
                  <p>Hold: Shift</p>
                  <p>Pause: P</p>
                </CustomContainer>
              </div>
              <section className="controls">
                <Control
                  up={controller.flipClockwise}
                  right={controller.moveRight}
                  down={controller.moveDown}
                  left={controller.moveLeft}
                />
                <Control
                  up={controller.hardDrop}
                  down={controller.flipCounterclockwise}
                  left={controller.hold}
                  right={controller.flipClockwise}
                  roundedBtn
                />
              </section>
              {state === "LOST" && (
                <Modal>
                  <h2>GAME OVER</h2>
                  <button onClick={controller.restart}>New game</button>
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
