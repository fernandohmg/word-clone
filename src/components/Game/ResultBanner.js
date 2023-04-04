export function ResultBanner({ isWin, answer, tries }) {
  if (isWin) {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong>
          {` Got it in `}
          <strong>{tries} guess(es)</strong>.
        </p>
      </div>
    );
  }

  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );
}
