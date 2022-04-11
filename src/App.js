import "./App.css";
import { idHelpers } from "./library/helpers";
import { RepositoryLink } from "./components/RepositoryLink";
import { Quiz } from "./components/Quiz";
import { useState } from "react";

function App() {
  const [actionCount, setActionCount] = useState(0);
  const [quizAnswer, setQuizAnswer] = useState(null);
  const id = idHelpers.generateId();
  const handleSubmit = (answers, id) => {
    setQuizAnswer({ answers, id });
  };
  const handleStateChange = () => setActionCount((state) => state + 1);

  return (
    <div className="App">
      <header className="App-header">
        <p>Your action count is: {actionCount}</p>
        <RepositoryLink>View Repository</RepositoryLink>
        {quizAnswer === null && (
          <Quiz id={id} onSubmit={handleSubmit} onStateChange={handleStateChange} />
        )}
        {quizAnswer !== null && <div>{JSON.stringify(quizAnswer)}</div>}
      </header>
    </div>
  );
}

export default App;
