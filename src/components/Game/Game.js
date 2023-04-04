import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import { WORDS } from "../../data";
import { sample } from "../../utils";
import { GuessResults } from "./GuessResults";
import { ResultBanner } from "./ResultBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState("");
  const [guessList, setGuessList] = React.useState([]);
  const [isWin, setWin] = React.useState(false);

  const isFinished = guessList.length === NUM_OF_GUESSES_ALLOWED;

  function handleOnSubmit(e) {
    e.preventDefault();
    setGuessList([...guessList, guess]);
    setGuess("");
    setWin(answer === guess);
  }

  return (
    <>
      <GuessResults guessList={guessList} answer={answer} />
      <form className="guess-input-wrapper" onSubmit={handleOnSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          onChange={(e) => setGuess(e.target.value.toUpperCase())}
          value={guess}
          pattern="[A-Za-z]{5}"
          minLength={5}
          maxLength={5}
          disabled={isFinished || isWin}
        />
      </form>
      {(isFinished || isWin) && (
        <ResultBanner isWin={isWin} answer={answer} tries={guessList.length} />
      )}
    </>
  );
}

export default Game;
