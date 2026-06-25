function QuizHeader({ index, totalQuestions, points, totalPoints, answer }) {
  return (
    <header className="progress">
      <progress
        max={totalQuestions}
        value={index + (answer !== null ? 1 : 0)}
      ></progress>
      <p>
        Question <strong>{index + 1}</strong>/{totalQuestions}
      </p>
      <p>
        <strong>{points}</strong>/{totalPoints}
      </p>
    </header>
  );
}

export default QuizHeader;
