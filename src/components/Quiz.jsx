import { useEffect, useState } from "react";
import { ABCQuestion } from "./ABCQuestion";
import { ABQuestion } from "./ABQuestion";
import { FreeInputQuestion } from "./FreeInputQuestion";

const questions = [
  {
    text: "Enter your name",
    id: "name",
  },
  {
    text: "Enter your age",
    id: "age",
  },
  {
    text: "Enter your favourite food",
    id: "food",
  },
  {
    text: "Enter your city",
    id: "city",
  },
];

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

  const questionsMap = questions.map((question) => {
    return (
      <FreeInputQuestion
        key={question.id}
        id={question.id}
        text={question.text}
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
