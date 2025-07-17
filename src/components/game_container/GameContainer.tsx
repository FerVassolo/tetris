import Control from "../controls/Control";
import "./GameContainer.styles.css";
import { Controller } from "react-tetris";

type GameProps = {
  children: React.ReactNode;
  controller: Controller;
};

const GameContainer = ({ children, controller }: GameProps) => {
  return (
    <div className="game-container">
      {children}
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
    </div>
  );
};

export default GameContainer;
