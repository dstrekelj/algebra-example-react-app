export function ABQuestion(props) {
  return (
    <div>
      <p>Make the right choice:</p>
      <div>
        <button onClick={props.onButtonAClick}>Blue pill</button>
        <button onClick={props.onButtonBClick}>Red pill</button>
      </div>
    </div>
  );
}