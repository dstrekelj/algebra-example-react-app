import "./App.css";
import { idHelpers } from "./library/helpers";
import { RepositoryLink } from "./components/RepositoryLink";
import { Quiz } from "./components/Quiz";
import { useState } from "react";
import { LoginForm } from "./components/LoginForm";

function App() {
  const [actionCount, setActionCount] = useState(0);
  const [quizAnswer, setQuizAnswer] = useState(null);
  const id = idHelpers.generateId();
  const handleSubmit = (answers, id) => {
    setQuizAnswer({ answers, id });
  };
  const handleStateChange = () => setActionCount((state) => state + 1);
  const handleLogin = (formState) => console.log(formState);

  return (
    <div className="App">
      <header className="App-header">
        <p>Your action count is: {actionCount}</p>
        <RepositoryLink>View Repository</RepositoryLink>
        <LoginForm onLogin={handleLogin} />
        {quizAnswer === null && (
          <Quiz id={id} onSubmit={handleSubmit} onStateChange={handleStateChange} />
        )}
        {quizAnswer !== null && <div>{JSON.stringify(quizAnswer)}</div>}
      </header>
    </div>
  );
}

export default App;
