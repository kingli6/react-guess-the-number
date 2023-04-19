import "./App.css";
// import { Game } from "./Game";

function App() {
  return (
    <div className="App">
      {
        <div>
          <Component />
          <Gamelogic />
        </div>
      }
    </div>
  );
}

function Component() {
  return (
    <div>
      <h2>hello</h2>
    </div>
  );
}

const Gamelogic = () => {
  return (
    <div>
      <p>Some text describing an idea</p>
    </div>
  );
};
export default App;
