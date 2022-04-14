import { useEffect, useState } from "react";
import { ABCQuestion } from "./ABCQuestion";
import { ABQuestion } from "./ABQuestion";
import { FreeInputQuestion } from "./FreeInputQuestion";
import { SingleChoiceQuestion } from "./SingleChoiceQuestion";

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

const options = [
  {
    text: "Option A",
    value: "A",
    id: "option-a",
  },
  {
    text: "Option B",
    value: "B",
    id: "option-b",
  },
  {
    text: "Option C",
    value: "C",
    id: "option-c",
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
      <SingleChoiceQuestion
        id="singleChoiceQuestion1"
        question="Make a choice:"
        options={options}
        onChoice={handleAnswer}
      />
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
