import "./App.css";
import { RepositoryLink } from "./components/RepositoryLink";
import { Quiz } from "./components/Quiz";
import { useContext, useState } from "react";
import { LoginForm } from "./components/LoginForm";
import { Timer } from "./components/Timer";
import { AppContext } from "./contexts/AppContext";
import { withLocale } from "./hoc/withLocale";

const LocalizedRepositoryLink = withLocale(RepositoryLink);

function App() {
  const appState = useContext(AppContext);
  console.log(appState);
  const [actionCount, setActionCount] = useState(0);
  const [quizAnswer, setQuizAnswer] = useState(null);
  const [loginState, setLoginState] = useState(null);
  const [finishTime, setFinishTime] = useState(null);

  const handleSubmit = (answers, id) => setQuizAnswer({ answers, id });
  const handleStateChange = () => setActionCount((state) => state + 1);
  const handleLogin = (formState) => setLoginState(formState);
  const handleTimerFinish = (time) => setFinishTime(time);

  let answerComponents = null;

  if (quizAnswer !== null) {
    answerComponents = Object.keys(quizAnswer.answers).map((key) => {
      return (
        <div key={key}>
          {key}: {quizAnswer.answers[key]}
        </div>
      );
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => appState.setId("foo")}>Click me</button>
        <div>
          {appState.translate("currentLocale")}: {appState.locale}
        </div>
        <button onClick={() => appState.setLocale("hr")}>HR</button>
        <button onClick={() => appState.setLocale("en")}>EN</button>
        <button onClick={() => appState.setLocale("de")}>DE</button>
        <p>Your action count is: {actionCount}</p>
        <RepositoryLink>View Repository</RepositoryLink>
        <LocalizedRepositoryLink>View Repository</LocalizedRepositoryLink>
        {loginState === null && <LoginForm onLogin={handleLogin} />}
        {loginState !== null && (
          <div>
            {loginState.name} ({loginState.email})
          </div>
        )}
        {quizAnswer === null && loginState !== null && (
          <>
            <Timer onTick={(time) => console.log(time)} onFinish={handleTimerFinish} />
            <Quiz onSubmit={handleSubmit} onStateChange={handleStateChange} />
          </>
        )}
        {quizAnswer !== null && answerComponents}
        {quizAnswer !== null && <div>{quizAnswer.id}</div>}
        {finishTime !== null && <div>{finishTime} s</div>}
      </header>
    </div>
  );
}

export default App;
