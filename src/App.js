// .app
// .main
// .app-header
// .error
// img
// h1
// h2
// h3
// h4
// .start
// .progress
// .btn
// .btn-ui
// .options
// .btn-option
// .btn-option.correct
// .btn-option.wrong
// .answer
// .result
// .highscore
// .loader-container
// .timer
// .loader
// .counter
import { useState } from "react";

const questions = [
  {
    question: "Which is the most popular JavaScript framework?",
    options: ["Angular", "React", "Svelte", "Vue"],
    correctOption: 1,
    points: 10,
  },
  {
    question: "Which company invented React?",
    options: ["Google", "Apple", "Netflix", "Facebook"],
    correctOption: 3,
    points: 10,
  },
  {
    question: "What's the fundamental building block of React apps?",
    options: ["Components", "Blocks", "Elements", "Effects"],
    correctOption: 0,
    points: 10,
  },
  {
    question:
      "What's the name of the syntax we use to describe the UI in React components?",
    options: ["FBJ", "Babel", "JSX", "ES2015"],
    correctOption: 2,
    points: 10,
  },
  {
    question: "How does data flow naturally in React apps?",
    options: [
      "From parents to children",
      "From children to parents",
      "Both ways",
      "The developers decides",
    ],
    correctOption: 0,
    points: 10,
  },
  {
    question: "How to pass data into a child component?",
    options: ["State", "Props", "PropTypes", "Parameters"],
    correctOption: 1,
    points: 10,
  },
  {
    question: "When to use derived state?",
    options: [
      "Whenever the state should not trigger a re-render",
      "Whenever the state can be synchronized with an effect",
      "Whenever the state should be accessible to all components",
      "Whenever the state can be computed from another state variable",
    ],
    correctOption: 3,
    points: 30,
  },
  {
    question: "What triggers a UI re-render in React?",
    options: [
      "Running an effect",
      "Passing props",
      "Updating state",
      "Adding event listeners to DOM elements",
    ],
    correctOption: 2,
    points: 20,
  },
  {
    question: 'When do we directly "touch" the DOM in React?',
    options: [
      "When we need to listen to an event",
      "When we need to change the UI",
      "When we need to add styles",
      "Almost never",
    ],
    correctOption: 3,
    points: 20,
  },
  {
    question: "In what situation do we use a callback to update state?",
    options: [
      "When updating the state will be slow",
      "When the updated state is very data-intensive",
      "When the state update should happen faster",
      "When the new state depends on the previous state",
    ],
    correctOption: 3,
    points: 30,
  },
  {
    question:
      "If we pass a function to useState, when will that function be called?",
    options: [
      "On each re-render",
      "Each time we update the state",
      "Only on the initial render",
      "The first time we update the state",
    ],
    correctOption: 2,
    points: 30,
  },
  {
    question:
      "Which hook to use for an API request on the component's initial render?",
    options: ["useState", "useEffect", "useRef", "useReducer"],
    correctOption: 1,
    points: 10,
  },
  {
    question: "Which variables should go into the useEffect dependency array?",
    options: [
      "Usually none",
      "All our state variables",
      "All state and props referenced in the effect",
      "All variables needed for clean up",
    ],
    correctOption: 2,
    points: 30,
  },
  {
    question: "An effect will always run on the initial render.",
    options: [
      "True",
      "It depends on the dependency array",
      "False",
      "In depends on the code in the effect",
    ],
    correctOption: 0,
    points: 30,
  },
  {
    question: "When will an effect run if it doesn't have a dependency array?",
    options: [
      "Only when the component mounts",
      "Only when the component unmounts",
      "The first time the component re-renders",
      "Each time the component is re-rendered",
    ],
    correctOption: 3,
    points: 20,
  },
];

function Header() {
  return (
    <header className="app-header">
      <img src="./logo512.png" alt="React Logo" />
      <h1>The React Quiz</h1>
    </header>
  );
}
function Start({ startApp }) {
  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>15 questions to test your React mastery</h3>
      <button className="btn btn-ui" onClick={startApp}>
        Let's start
      </button>
    </div>
  );
}
function QuizHeader() {
  return (
    <>
      <header className="progress">
        <progress value="0" max="15"></progress>
        <p>
          Question <strong>1</strong>/15
        </p>
        <p>
          <strong>0</strong>/280
        </p>
      </header>
    </>
  );
}
function QuizFooter({ optSelected }) {
  return (
    <>
      <footer>
        <div className="timer">00:00</div>
        {Boolean(optSelected) && <button className="btn btn-ui">Next</button>}
      </footer>
    </>
  );
}

function Quiz() {
  const [curQues, setCurrQues] = useState(1);
  const { question, options, correctOption } = questions[curQues];

  const [optSelected, setOptSelected] = useState(false);
  console.log(options);

  function selectOption(opt) {
    setOptSelected(opt);
    console.log(`Selection is ${opt}`);
  }

  return (
    <>
      <QuizHeader />
      <div className="options">
        <h4>{question}</h4>
        {Array.from({ length: 4 }, (_, i) => (
          <button
            className={
              "btn btn-option" +
              (optSelected &&
                (correctOption == i ? " answer correct" : " wrong"))
            }
            onClick={() => selectOption(i + 1)}
            disabled={Boolean(optSelected)}
          >
            {options[i]}
          </button>
        ))}
      </div>
      <QuizFooter optSelected={optSelected} />
    </>
  );
}

export default function App() {
  const [start, setStart] = useState(false);

  function startApp() {
    setStart(true);
  }

  return (
    <div className="app">
      <Header />
      <main>{start ? <Quiz /> : <Start startApp={startApp} />}</main>
    </div>
  );
}
