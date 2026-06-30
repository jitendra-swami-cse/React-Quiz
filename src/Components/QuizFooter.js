import { useState, useEffect } from "react";

function QuizFooter({ answer, isLastQues, dispatch }) {
  const [sec, setSec] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSec((sec) => sec + 1);
    }, 1000);
    if (sec >= 600) dispatch({ type: "finish" });
    return () => clearInterval(timer);
  }, [sec, dispatch]);

  const mm = Math.floor(sec / 60);
  const ss = sec % 60;

  return (
    <footer>
      <div className="timer">{`0${mm}:${ss > 9 ? ss : "0" + ss}`}</div>
      {answer !== null && (
        <button
          className="btn btn-ui"
          onClick={() =>
            isLastQues
              ? dispatch({ type: "finish" })
              : dispatch({ type: "next" })
          }
        >
          {isLastQues ? "Finish" : "Next"}
        </button>
      )}
    </footer>
  );
}

export default QuizFooter;
