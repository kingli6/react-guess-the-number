import React, { useState } from "react";

export default function Game() {
  const [gameStarted, setGameStarted] = useState(false);
  const [message, setMessage] = useState(false);
  const [answer, setAnswer] = useState(0);
  const [randomNumber, setRandomNumber] = useState(0);
  console.log(randomNumber);

  //Functions
  const submitHandler = (e) => {
    e.preventDefault();
    const formValid = +answer >= 0;
    if (!formValid) {
      return;
    }
    if (+answer === +randomNumber) {
      setMessage("you got it");
      setGameStarted(false);
    } else if (+answer < +randomNumber) {
      setMessage("too low");
    } else {
      setMessage("too high");
    }
  };
  //function 2
  const start = () => {
    setRandomNumber(Math.ceil(Math.random() * 10));
    setGameStarted(true);
  };
  if (gameStarted) {
    return (
      <div>
        <form onSubmit={submitHandler}>
          <div>
            <label>answer</label>
            <input value={answer} onChange={(e) => setAnswer(e.target.value)} />
          </div>
          <button type="submitHandler">check</button>
        </form>
        <p>{message}</p>
      </div>
    );
  } else {
    return (
      <div>
        <button type="button" onClick={start}>
          start
        </button>
        <p>{message}</p>
      </div>
    );
  }
}
