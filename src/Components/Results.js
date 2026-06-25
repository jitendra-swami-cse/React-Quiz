function Results({ points, totalPoints, dispatch }) {
  return (
    <>
      <p className="result">
        <span>🤨</span>
        You scored <strong>{points}</strong> out of {totalPoints} (
        {((points / totalPoints) * 100).toFixed(2)}% )
      </p>
      <p className="highscore">(Highscore: 70 points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "reset" })}
      >
        Restart quiz
      </button>
    </>
  );
}

export default Results;
