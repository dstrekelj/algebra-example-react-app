import { RepositoryLink } from "./components/RepositoryLink";
import { Quiz } from "./components/Quiz";
import { useContext, useState } from "react";
import { LoginForm } from "./components/LoginForm";
import { Timer } from "./components/Timer";
import { AppContext } from "./contexts/AppContext";
import { withLocale } from "./hoc/withLocale";
import { Heading } from "./components/Heading";
import { Paragraph } from "./components/Paragraph";
import { Button } from "./components/Button";
import { Routes, Route, Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>Home page</h1>
      <Link to="/help">Help page</Link>
    </div>
  );
}

function HelpPage() {
  return (
    <div>
      <h1>Help page</h1>
      <Link to="/">Home page</Link>
    </div>
  );
}

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
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="help" element={<HelpPage />} />
      </Routes>
      <header className="App-header">
        <Heading element="h1" size="1">
          Quiz Application
        </Heading>
        <Paragraph element="div">
          {appState.translate("currentLocale")}: {appState.locale}
        </Paragraph>
        <Button buttonType="ghost" onClick={() => appState.setLocale("hr")}>
          HR
        </Button>
        <Button buttonType="ghost" onClick={() => appState.setLocale("en")}>
          EN
        </Button>
        <Button buttonType="ghost" onClick={() => appState.setLocale("de")}>
          DE
        </Button>
        <Paragraph element="p">
          <div>Your action count is: {actionCount}</div>
          <RepositoryLink>View Repository</RepositoryLink>
          <LocalizedRepositoryLink>View Repository</LocalizedRepositoryLink>
        </Paragraph>
        {loginState === null && <LoginForm onLogin={handleLogin} />}
        {loginState !== null && (
          <Paragraph element="div">
            {loginState.name} ({loginState.email})
          </Paragraph>
        )}
        {quizAnswer === null && loginState !== null && (
          <>
            <Timer onTick={(time) => console.log(time)} onFinish={handleTimerFinish} />
            <Quiz onSubmit={handleSubmit} onStateChange={handleStateChange} />
          </>
        )}
        {quizAnswer !== null && answerComponents}
        {quizAnswer !== null && <Paragraph element="div">{quizAnswer.id}</Paragraph>}
        {finishTime !== null && <Paragraph element="div">{finishTime} s</Paragraph>}
      </header>
    </div>
  );
}

export default App;
