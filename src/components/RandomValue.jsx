import { arrayHelpers } from "../library/helpers";

export function RandomValue() {
  const value = arrayHelpers.getRandomElement([1, 2, 3]);

  return (
    <div>
      {value} is {value % 2 === 1 ? "odd" : "even"}
    </div>
  );
}
