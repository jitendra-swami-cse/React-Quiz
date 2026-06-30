import { useLocalStorageState } from "../Hooks/useLocalStorage";

function Results({ points, totalPoints, dispatch }) {
  const [highscore, setHighScore] = useLocalStorageState(0, "highScore");
  if (highscore < points) setHighScore(points);

  return (
    <>
      <p className="result">
        <span>🤨</span>
        You scored <strong>{points}</strong> out of {totalPoints} (
        {((points / totalPoints) * 100).toFixed(2)}% )
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
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
