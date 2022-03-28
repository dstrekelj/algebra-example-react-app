import logo from "./logo.svg";
import "./App.css";
import { nanoid } from "nanoid";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>algebra-example-react-app</h1>
        <p>Your unique ID is: {nanoid()}</p>
        <a
          className="App-link"
          href="https://github.com/dstrekelj/algebra-example-react-app"
        >
          GitHub Repository
        </a>
      </header>
    </div>
  );
}

export default App;
