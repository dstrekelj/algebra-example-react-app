import logo from "./logo.svg";
import "./App.css";
import { idHelpers, arrayHelpers } from "./library/helpers";

console.log(arrayHelpers.getRandomElement([1, 2, 3]));

function RepositoryLink() {
  return (
    <a className="App-link" href="https://github.com/dstrekelj/algebra-example-react-app">
      GitHub Repository Link
    </a>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>algebra-example-react-app</h1>
        <p>Your unique ID is: {idHelpers.generateId()}</p>
        <RepositoryLink />
      </header>
    </div>
  );
}

export default App;
