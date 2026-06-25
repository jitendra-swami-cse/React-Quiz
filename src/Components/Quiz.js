import QuizHeader from "./QuizHeader";
import QuizFooter from "./QuizFooter";

function Options({ correctOption, options, dispatch, answer }) {
  const hasAnswered = answer !== null;

  return (
    <div className="options">
      {options.map((opt, i) => (
        <button
          className={`btn btn-option${answer === i ? " answer" : ""}${hasAnswered ? (correctOption === i ? " correct" : " wrong") : ""} `}
          key={opt}
          onClick={() => dispatch({ type: "answer", payload: i })}
          disabled={answer !== null}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

function Quiz({
  index,
  totalQuestions,
  points,
  totalPoints,
  question,
  dispatch,
  answer,
  isLastQues,
}) {
  // console.log(`Quiz Component`);

  return (
    <>
      <QuizHeader
        index={index}
        totalQuestions={totalQuestions}
        points={points}
        totalPoints={totalPoints}
        answer={answer}
      />
      <div>
        <h4>{question.question}</h4>
        <Options
          correctOption={question.correctOption}
          options={question.options}
          dispatch={dispatch}
          answer={answer}
        />
      </div>
      <QuizFooter answer={answer} dispatch={dispatch} isLastQues={isLastQues} />
    </>
  );
}

export default Quiz;
