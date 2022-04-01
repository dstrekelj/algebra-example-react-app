import PropTypes from "prop-types";

export function ABQuestion(props) {
  const handleOnClickA = () => props.onChoice(props.buttonAValue);
  const handleOnClickB = () => props.onChoice(props.buttonBValue);

  return (
    <div>
      <p>{props.question}</p>
      <div>
        <button onClick={handleOnClickA}>{props.buttonA}</button>
        <button onClick={handleOnClickB}>{props.buttonB}</button>
      </div>
    </div>
  );
}

ABQuestion.propTypes = {
  onChoice: PropTypes.func.isRequired,
  question: PropTypes.string.isRequired,
  buttonA: PropTypes.string.isRequired,
  buttonB: PropTypes.string.isRequired,
  buttonAValue: PropTypes.string.isRequired,
  buttonBValue: PropTypes.string.isRequired,
};
