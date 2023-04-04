import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : "cell";
  return <span className={className}>{letter}</span>;
}

export function Guess({ guess, answer }) {
  const result = checkGuess(guess, answer) ?? "";

  return (
    <p className="guess">
      {range(5).map((num) => (
        <Cell
          key={num}
          letter={result[num]?.letter}
          status={result[num]?.status}
        />
      ))}
    </p>
  );
}
