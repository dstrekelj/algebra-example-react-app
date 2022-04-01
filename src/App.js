import logo from "./logo.svg";
import "./App.css";
import { idHelpers } from "./library/helpers";
import { RandomValue } from "./components/RandomValue";
import { RepositoryLink } from "./components/RepositoryLink";
import { ABQuestion } from "./components/ABQuestion";

function App() {
  const handleOnChoice = (choiceValue) => console.log(choiceValue);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>algebra-example-react-app</h1>
        <p>Your unique ID is: {idHelpers.generateId()}</p>
        <RepositoryLink>View Repository</RepositoryLink>
        <RandomValue values={[4, 5, 6]} />
        <ABQuestion
          question="Make the right choice"
          buttonA="Blue pill"
          buttonB="Red pill"
          buttonAValue="Blue"
          buttonBValue="Red"
          onChoice={handleOnChoice}
        />
      </header>
    </div>
  );
}

export default App;
