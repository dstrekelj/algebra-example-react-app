import { useEffect, useState } from "react";
import { ABCQuestion } from "./ABCQuestion";
import { ABQuestion } from "./ABQuestion";
import { FreeInputQuestion } from "./FreeInputQuestion";

const questions = ["Enter your name", "Enter your age", "Enter your favourite food"];

export function Quiz(props) {
  const [state, setState] = useState({});

  useEffect(() => {
    props.onStateChange();
  }, [state]);

  const handleAnswer = (id, choiceValue) => {
    setState((currentState) => ({
      ...currentState,
      [id]: choiceValue,
    }));
  };

  const handleSubmit = () => {
    props.onSubmit(state, props.id);
  };

  const questionsMap = questions.map((question, index) => {
    return (
      <FreeInputQuestion
        key={index}
        id={`freeInputQuestion${index}`}
        text={question}
        onKeyUp={handleAnswer}
      />
    );
  });

  return (
    <div>
      {questionsMap}
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
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
