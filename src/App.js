import logo from "./logo.svg";
import "./App.css";
import { idHelpers } from "./library/helpers";
import { RandomValue } from "./components/RandomValue";
import { RepositoryLink } from "./components/RepositoryLink";
import { ABQuestion } from "./components/ABQuestion";
import { ABCQuestion } from "./components/ABCQuestion";
import { useState } from "react";

function App() {
  const [state, setState] = useState({ question1: null, question2: null });

  const handleOnChoice = (id, choiceValue) => {
    setState((currentState) => ({
      ...currentState,
      [id]: choiceValue,
    }));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>algebra-example-react-app</h1>
        <p>Your unique ID is: {idHelpers.generateId()}</p>
        <RepositoryLink>View Repository</RepositoryLink>
        <RandomValue values={[4, 5, 6]} />
        <div>
          {state.question1}, {state.question2}
        </div>
        <ABQuestion
          id="question1"
          question="Make the right choice"
          buttonA="Blue pill"
          buttonB="Red pill"
          buttonAValue="Blue"
          buttonBValue="Red"
          onChoice={handleOnChoice}
        />
        <ABCQuestion
          id="question2"
          question="Make the right choice"
          buttonA="Blue pill"
          buttonB="Red pill"
          buttonC="Pink pill"
          buttonAValue="Blue"
          buttonBValue="Red"
          buttonCValue="Pink"
          onChoice={handleOnChoice}
        />
      </header>
    </div>
  );
}

export default App;
