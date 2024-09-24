import react, { useRef, useState } from "react";
import Button from "../components/Button";
import data from "../Services/question.js";

function Quiz() {
  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(data[index]);
  let [status, setStatus] = useState(false);
  let [score, setScore] = useState(0);
  let [correct, setCorrect] = useState(0);
  let [result, setResult] = useState(false);

  let Option1 = useRef(null);
  let Option2 = useRef(null);
  let Option3 = useRef(null);
  let Option4 = useRef(null);
  let Option5 = useRef(null);

  const option_array = [Option1, Option2, Option3, Option4, Option5];

  const Reset = () => {
    window.location.href = "http://localhost:5173/Quiz";
  };

  const checkAns = (e, ans) => {
    if (status === false) {
      if (question.ans === ans) {
        e.target.classList.add("correct");
        setStatus(true);
        setScore((prevScore) => prevScore + 10);
        setCorrect((prevCorrect) => prevCorrect + 1);
      } else {
        e.target.classList.add("wrong");
        setStatus(true);
        option_array[question.ans - 1].current.classList.add("correct");
      }
    }
  };

  const nextButton = () => {
    if (status === true) {
      if (index === data.length - 1) {
        setResult(true);
        return 0;
      }
      setIndex(++index);
      setQuestion(data[index]);
      setStatus(false);
      option_array.map((option) => {
        option.current.classList.remove("correct");
        option.current.classList.remove("wrong");
        return null;
      });
    }
  };

  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center items-center p-4">
        {result ? (
          <>
            <h1 className="text-3xl font-bold text-center text-primary p-3 mb-28 lg:text-5xl">
              Result
            </h1>
            <div className="w-full mb-12 lg:text-center">
              <h3 className="text-base text-white lg:text-2xl">
                Total Correct Answer{" "}
                <span className="block mt-2 text-primary font-semibold">
                  {correct} out of 10 questions
                </span>
              </h3>
            </div>
            <div className="w-60 h-80 bg-gradient-to-b from-indigo-600 to-indigo-700 rounded-3xl flex flex-col justify-center items-center mb-32 lg:w-72">
              <h1 className="mb-10 text-2xl font-bold text-white">
                Your final score is
              </h1>
              <div className="w-36 h-36 bg-gradient-to-b from-yellow-300 to-yellow-500 rounded-full flex items-center justify-center">
                <p className="text-6xl text-white font-bold">{score}</p>
              </div>
            </div>
            <Button
              className="text-center text-2xl font-bold bg-indigo-700 rounded-lg w-full h-16 text-white lg:w-60"
              type="button"
              onClick={Reset}
            >
              Reset
            </Button>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold text-center text-primary p-3 mb-32 lg:text-5xl">
              Questions
            </h1>
            <div className="mb-16 w-full">
              <p className="text-sm text-primary">{index + 1}/10</p>
              <h3 className="text-2xl font-semibold text-white">
                {question.question}
              </h3>
            </div>
            <div className="w-full mb-16">
              <li
                ref={Option1}
                onClick={(e) => checkAns(e, 1)}
                className="w-full flex text-2xl font-semibold hover:text-blue-950 p-3 rounded-lg list-none text-white mt-4 transition duration-300 ease-in-out"
              >
                <span className="bg-indigo-700 rounded-full text-center mr-4 p-2 w-10 h-10 flex items-center justify-center ">
                  A
                </span>
                {question.option1}
              </li>
              <li
                ref={Option2}
                onClick={(e) => checkAns(e, 2)}
                className="w-full flex rounded-lg text-2xl font-semibold hover:text-blue-950 p-3 list-none text-white mt-4 transition duration-300 ease-in-out "
              >
                <span className="bg-indigo-700 rounded-full text-center mr-4 p-2 w-10 h-10 flex items-center justify-center">
                  B
                </span>
                {question.option2}
              </li>
              <li
                ref={Option3}
                onClick={(e) => checkAns(e, 3)}
                className="w-full flex rounded-lg text-2xl font-semibold hover:text-blue-950 p-3 list-none text-white mt-4 transition duration-300 ease-in-out"
              >
                <span className="bg-indigo-700 rounded-full text-center mr-4 p-2 w-10 h-10 flex items-center justify-center">
                  C
                </span>
                {question.option3}
              </li>
              <li
                ref={Option4}
                onClick={(e) => checkAns(e, 4)}
                className="w-full flex rounded-lg text-2xl font-semibold hover:text-blue-950 p-3 list-none text-white mt-4 transition duration-300 ease-in-out"
              >
                <span className="bg-indigo-700 rounded-full text-center mr-4 p-2 w-10 h-10 flex items-center justify-center">
                  D
                </span>
                {question.option4}
              </li>
              <li
                ref={Option5}
                onClick={(e) => checkAns(e, 5)}
                className="w-full flex rounded-lg text-2xl font-semibold hover:text-blue-950 p-3 list-none text-white mt-4 transition duration-300 ease-in-out"
              >
                <span className="bg-indigo-700 rounded-full text-center mr-4 p-2 w-10 h-10 flex items-center justify-center">
                  E
                </span>
                {question.option5}
              </li>
            </div>
            <div className="w-full mb-4 flex justify-end">
              <Button
                className="text-center text-2xl font-bold bg-indigo-700 rounded-lg w-36 h-12 text-white"
                type="button"
                onClick={nextButton}
              >
                Next
              </Button>
            </div>
          </>
        )}
        ;
      </div>
    </div>
  );
}
export default Quiz;
