import { useReducer } from "react";

import { useFetchData } from "../Hooks/useFetchData";

import Header from "./Header";
import Main from "./Main";
import Start from "./Start";
import Quiz from "./Quiz";
import Results from "./Results";

const intialState = {
  questions: [],

  // 'loading', 'error', 'ready', 'active', 'finished'
  status: "start",
  index: 0,
  answer: null,
  points: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "active":
      return { ...state, status: "active" };
    case "setQuestions":
      return { ...state, questions: [...action.payload] };
    case "answer": {
      let points =
        action.payload === state.questions.at(state.index).correctOption
          ? state.points + state.questions.at(state.index).points
          : state.points;
      return { ...state, points, answer: action.payload };
    }
    case "next": {
      return { ...state, index: state.index + 1, answer: null };
    }
    case "finish": {
      console.log(state);
      return { ...state, status: "finished" };
    }
    case "reset": {
      return { ...intialState, questions: state.questions };
    }
    default:
      return "";
  }
}

export default function App() {
  const [{ questions, status, index, answer, points }, dispatch] = useReducer(
    reducer,
    intialState,
  );

  // const { isLoading, isError } = useFetchData(
  useFetchData("http://localhost:8000/questions", (data) =>
    dispatch({ type: "setQuestions", payload: data }),
  );

  const totalPoints = questions.reduce((prev, curr) => prev + curr.points, 0);
  const totalQuestions = questions.length;
  const isLastQues = index === totalQuestions - 1;
  console.log(`isLastQues -> ${isLastQues}`);
  return (
    <div className="app">
      <Header />
      <Main>
        {status === "start" && (
          <Start dispatch={dispatch} totalQuestions={totalQuestions} />
        )}
        {status === "active" && (
          <Quiz
            index={index}
            totalQuestions={totalQuestions}
            points={points}
            totalPoints={totalPoints}
            question={questions.at(index)}
            dispatch={dispatch}
            answer={answer}
            isLastQues={isLastQues}
          />
        )}
        {status === "finished" && (
          <Results
            points={points}
            totalPoints={totalPoints}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}
