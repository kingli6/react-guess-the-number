import React, { useState } from "react";
export default function Nlogic() {
  const [difficulty, setDifficulty] = useState("");
  const [number, setNumber] = useState(null);
  const [attempts, setAttempts] = useState(0);
  const [maxAttempts, setMaxAttempts] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [gameOver, setGameOver] = useState(false);
  console.log(number);
  const handleStart = () => {
    switch (difficulty) {
      case "easy":
        setNumber(Math.floor(Math.random() * 10) + 1);
        setMaxAttempts(3);
        break;
      case "medium":
        setNumber(Math.floor(Math.random() * 100) + 1);
        setMaxAttempts(5);
        break;
      case "hard":
        setNumber(Math.floor(Math.random() * 1000) + 1);
        setMaxAttempts(10);
        break;
      default:
        break;
    }
    setAttempts(0);
    setFeedback("");
    setGameOver(false);
  };

  const handleGuess = (event) => {
    event.preventDefault();
    const guess = parseInt(event.target.elements.guess.value);
    if (isNaN(guess)) {
      setFeedback("Please enter a valid number.");
    } else if (guess === number) {
      setFeedback(
        `Congratulations! You guessed the number ${number} in ${attempts} attempts.`
      );
      setGameOver(true);
    } else {
      setAttempts(attempts + 1);
      if (guess > number) {
        setFeedback("Too high. Try again.");
      } else {
        setFeedback("Too low. Try again.");
      }
      if (attempts + 1 >= maxAttempts) {
        setGameOver(true);
        setFeedback(
          `Sorry, you've reached the maximum number of attempts. The number was ${number}.`
        );
      }
    }
  };

  const handleReset = () => {
    setDifficulty("");
    setNumber(null);
    setAttempts(0);
    setMaxAttempts(0);
    setFeedback("");
    setGameOver(false);
  };

  return (
    <div className="App">
      <h1>Guess the number</h1>
      {!gameOver ? (
        <div>
          <form onSubmit={handleGuess}>
            <label>
              Guess a number between 1 and{" "}
              {difficulty === "easy"
                ? "10"
                : difficulty === "medium"
                ? "100"
                : "1000"}
              :
              <input type="number" name="guess" />
            </label>
            <button type="submit">Guess</button>
          </form>
          {feedback && <p>{feedback}</p>}
        </div>
      ) : (
        <div>
          <p>{feedback}</p>
          {gameOver && (
            <div>
              <button type="button" onClick={handleReset}>
                Play again
              </button>
            </div>
          )}
        </div>
      )}
      <h2>Select difficulty level:</h2>
      <form>
        <label>
          <input
            type="radio"
            name="difficulty"
            value="easy"
            onChange={(event) => setDifficulty(event.target.value)}
          />
          Easy (1-10)
        </label>
        <label>
          <input
            type="radio"
            name="difficulty"
            value="medium"
            onChange={(event) => setDifficulty(event.target.value)}
          />
          Medium (1-100)
        </label>
        <label>
          <input
            type="radio"
            name="difficulty"
            value="hard"
            onChange={(event) => setDifficulty(event.target.value)}
          />
          Hard (1-1000)
        </label>
      </form>
      <button type="button" disabled={!difficulty} onClick={handleStart}>
        Start
      </button>
    </div>
  );
}
