import logo from "./logo.svg";
import "./App.css";
import { idHelpers } from "./library/helpers";
import { RandomValue } from "./components/RandomValue";
import { RepositoryLink } from "./components/RepositoryLink";
import { Quiz } from "./components/Quiz";
import { useState } from "react";

function App() {
  const [quizAnswer, setQuizAnswer] = useState(null);
  const id = idHelpers.generateId();
  const handleSubmit = (answers, id) => {
    setQuizAnswer({ answers, id });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>algebra-example-react-app</h1>
        <p>Your unique ID is: {id}</p>
        <RepositoryLink>View Repository</RepositoryLink>
        <RandomValue values={[4, 5, 6]} />
        {quizAnswer === null && <Quiz id={id} onSubmit={handleSubmit} />}
        {quizAnswer !== null && (
          <div>
            <div>{quizAnswer.answers.question1}</div>
            <div>{quizAnswer.answers.question2}</div>
            <div>{quizAnswer.answers.question3}</div>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
