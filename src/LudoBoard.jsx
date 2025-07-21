import { useState } from "react";

const LudoBoard = () => {
  let [Moves, setMoves] = useState({
    blue: 0,
    yellow: 0,
    red: 0,
    green: 0,
  });
  let [arr, setArr] = useState(["No moves yet"]);

  const updateBlue = () => {
    setMoves((preValue) => {
      return { ...preValue, blue: preValue.blue + 1 };
    });
    setArr((preValue) => {
      return [...preValue, `Blue moved to ${Moves.blue + 1}`];
    });
  };

  const updateYellow = () => {
    setMoves((preValue) => {
      return { ...preValue, yellow: preValue.yellow + 1 };
    });
  };
  const updateRed = () => {
    setMoves((preValue) => {
      return { ...preValue, red: preValue.red + 1 };
    });
  };

  const updateGreen = () => {
    setMoves((preValue) => {
      return { ...preValue, green: preValue.green + 1 };
    });
  };

  return (
    <div className="ludo-board">
      <p>Game begins </p>
      <p> {arr} </p>
      <div className="board">
        <p>Blue Moves {Moves.blue} </p>

        <button
          style={{ backgroundColor: "blue", color: "white", padding: "10px" }}
          onClick={updateBlue}
        >
          +1
        </button>
        <p>Yellow Moves {Moves.yellow} </p>
        <button
          style={{ backgroundColor: "yellow", color: "white", padding: "10px" }}
          onClick={updateYellow}
        >
          +1
        </button>
        <p>Red Moves {Moves.red} </p>
        <button
          style={{ backgroundColor: "red", color: "white", padding: "10px" }}
          onClick={updateRed}
        >
          +1
        </button>
        <p>Green Moves {Moves.green} </p>
        <button
          style={{ backgroundColor: "green", color: "white", padding: "10px" }}
          onClick={updateGreen}
        >
          +1
        </button>
      </div>
    </div>
  );
};

export default LudoBoard;
