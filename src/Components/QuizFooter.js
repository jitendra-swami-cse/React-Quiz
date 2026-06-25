function QuizFooter({ answer, isLastQues, dispatch }) {
  console.log(`isLastQues in QuizFooter ${isLastQues}`);
  return (
    <footer>
      <div className="timer">03:18</div>
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
