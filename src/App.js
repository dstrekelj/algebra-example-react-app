import logo from "./logo.svg";
import "./App.css";
import { idHelpers } from "./library/helpers";
import { RandomValue } from "./components/RandomValue";
import { RepositoryLink } from "./components/RepositoryLink";
import { ABQuestion } from "./components/ABQuestion";
import { ABCQuestion } from "./components/ABCQuestion";
import { FreeInputQuestion } from "./components/FreeInputQuestion";
import { useState } from "react";

function App() {
  const [state, setState] = useState({});

  const handleAnswer = (id, choiceValue) => {
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
          {state.question1}, {state.question2}, {state.question3}
        </div>
        <FreeInputQuestion id="question3" text="Enter your name" onKeyUp={handleAnswer} />
        <ABQuestion
          id="question1"
          question="Make the right choice"
          buttonA="Blue pill"
          buttonB="Red pill"
          buttonAValue="Blue"
          buttonBValue="Red"
          onChoice={handleAnswer}
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
          onChoice={handleAnswer}
        />
      </header>
    </div>
  );
}

export default App;
