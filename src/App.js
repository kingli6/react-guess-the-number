import React, { useState } from "react";
import "./App.css";
export default function App() {
  return (
    <div className="App">
      {
        <div>
          <Gamelogic />
        </div>
      }
    </div>
  );
}
/* So far....
with button click, we choose a random number. */

const Gamelogic = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [message, setMessage] = useState(false);
  const [randomNumber, setRandomNumber] = useState(0);
  const [userAnswer, setUserAnswer] = useState(0);

  const difficulty = [
    { value: "level1", label: "Level 1" },
    { value: "level2", label: "Level 2" },
    { value: "level3", label: "Level 3" },
  ];
  //functions/////////////////////////////
  const start = () => {
    setRandomNumber(Math.ceil(Math.random() * 10));
    setGameStarted(true);
  };

  const submitHandler = (e) => {
    e.preventDefault(); //stops from submitting the form (default action)
    const checkInput = +userAnswer >= 0; //validate userinput
    if (!checkInput) return;
    if (+userAnswer === +randomNumber) {
      setMessage("Correct!");
      setGameStarted(false);
    } else if (+userAnswer < +randomNumber) {
      setMessage("too low");
    } else {
      setMessage("too high");
    }
  };
  //rendering/////////////////////////////
  if (gameStarted) {
    return (
      <div>
        <form onSubmit={submitHandler}>
          <div>
            <label>answer</label>
            <input
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
            />
          </div>
          <button type="submitHandler">Check</button>
        </form>
        <p>random number: {randomNumber}</p>
        <p>{message}</p>
      </div>
    );
  } else {
    return (
      <div>
        <button type="button" onClick={start}>
          Start
        </button>

        <p>{message}</p>
      </div>
    );
  }
};
