import { useState } from "react";
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
const Gamelogic = () => {
  const [startGame, setStartGame] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [difficulty, setDifficulty] = useState("");
  const [maxAttempts, setMaxAttempts] = useState(0);
  const [number, setNumber] = useState(null);
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState("");
  //////////////////////////////////////
  const handleStart = () => {
    switch (difficulty) {
      case "easy":
        setNumber(Math.floor(Math.random() * 10) + 1);
        setMaxAttempts(4);
        break;
      case "medium":
        setNumber(Math.floor(Math.random() * 100) + 1);
        setMaxAttempts(6);
        break;
      case "hard":
        setNumber(Math.floor(Math.random() * 1000) + 1);
        setMaxAttempts(8);
        break;
      default:
        break;
    }
    setAttempts(0);
    setMessage("");
    setStartGame(true);
  };

  const handleUserGuess = (e) => {
    e.preventDefault();
    const guess = parseInt(e.target.elements.guess.value);
    if (isNaN(guess)) {
      setMessage("Please enter a number");
    } else if (guess === number) {
      setMessage("You won! Wohoo!!!");
      setGameOver(true);
    } else {
      setAttempts(attempts + 1);
      if (guess > number) {
        setMessage("Guess lower!");
      } else {
        setMessage("Guess higher!");
      }

      if (attempts + 1 >= maxAttempts) {
        setGameOver(true);
        setMessage(
          `Ohh no.. you've reached the max attempts. The number was ${number}`
        );
      }
    }
  };

  const restartGame = (e) => {
    setDifficulty("");
    setNumber(null);
    setAttempts(0);
    setMaxAttempts(0);
    setMessage("");
    setStartGame(false);
    setGameOver(false);
  };
  /////////////////////////////////////////////
  console.log(number);
  return (
    <div>
      <p>-------------------------------------</p>
      <h1 className="title">Guess the number game!</h1>
      {!startGame ? (
        <div>
          <h2>Choose difficulty:</h2>
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
      ) : !gameOver ? (
        <div>
          <form onSubmit={handleUserGuess}>
            <label>
              Guess a number between 1 and{" "}
              {difficulty === "easy"
                ? "10"
                : difficulty === "medium"
                ? "100"
                : 1000}
              {": "}
              <input type="number" name="guess" />
            </label>
            <button type="submit">Guess</button>
          </form>
          <p>{message}</p> {/*need to add a && logic?*/}
        </div>
      ) : (
        gameOver && (
          <div>
            <p>{message}</p>
            <button type="button" onClick={restartGame}>
              Play again
            </button>
          </div>
        )
      )}
    </div>
  );
};
