import { useParams } from "react-router-dom";
import {
  useGetProblemQuery,
  useSolveProblemMutation,
} from "../hooks/problemHooks";
import Navbar from "../layouts/Navbar";
import ErrorMessage from "../components/ErrorMessage";
import { getError } from "../utils/getError";
import { ApiError } from "../types/ApiError";
import { useContext, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { User } from "../contexts/User";

const Question = () => {
  const { slug } = useParams();
  const { data: problem, isLoading, error } = useGetProblemQuery(slug!);
  const { mutateAsync: solveProblem } = useSolveProblemMutation();

  const { state } = useContext(User);
  const { userInfo } = state;

  const [answer, setAnswer] = useState("");
  const [problemId, setProblemId] = useState("");

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    if (problem) {
      if (problem.answer == answer) {
        try {
          await solveProblem({
            id: problem._id,
          });
        } catch (error) {
          console.log(getError(error as ApiError));
        }
      }
    }
  };

  useEffect(() => {
    if (problem) {
      setProblemId(problem?._id);
    }
  }, [problem, problemId, userInfo]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const examples: string[] | any = problem?.example;

  return isLoading ? (
    <>
      <div id="screen" className="h-screen">
        <div className="px-0 lg:px-20">
          <Navbar />
        </div>
        <div className="px-0 lg:px-20 rounded-xl h-5/6 overflow-hidden w-full">
          <div className="p-4 max-h-full flex flex-col gap-4">
            <span className="bg-primary-content rounded-full h-6 w-52 animate-pulse" />
            <span className="bg-primary-content rounded-full h-6 w-12 animate-pulse" />
            <span className="bg-primary-content rounded-full h-6 w-52 animate-pulse" />
            <span className="bg-primary-content rounded-full h-6 w-2/3 animate-pulse" />
            <span className="bg-primary-content rounded-full h-6 w-2/3 animate-pulse" />
            <span className="bg-primary-content rounded-full h-6 w-1/3 animate-pulse" />
            <span className="bg-primary-content rounded-full h-6 w-52 animate-pulse" />
            <span className="bg-primary-content rounded-full h-6 w-64 animate-pulse" />
            <span className="bg-primary-content rounded-full h-6 w-52 animate-pulse" />
            <span className="bg-primary-content rounded-full h-6 w-72 animate-pulse" />
            <span className="bg-primary-content rounded-full h-6 w-72 animate-pulse" />
            <span className="bg-primary-content rounded-full h-6 w-72 animate-pulse" />
          </div>
        </div>
      </div>
    </>
  ) : error ? (
    <ErrorMessage>{getError(error as ApiError)}</ErrorMessage>
  ) : !problem ? (
    <ErrorMessage>Question Not Found!</ErrorMessage>
  ) : (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div id="screen" className="h-screen">
        <div className="px-0 lg:px-20">
          <Navbar />
        </div>
        <div className="px-0 lg:px-20 rounded-xl h-5/6 overflow-hidden w-full">
          <div className="p-4 max-h-full flex flex-col gap-4">
            <span className="font-bold text-2xl">
              <span>{problem.sequence}.</span> <span>{problem.title}</span>
            </span>
            <div>
              <span
                className={
                  problem.level === "easy"
                    ? "py-1 px-2 bg-success-content text-success rounded-md"
                    : problem.level === "medium"
                    ? "py-1 px-2 bg-warning-content text-warning rounded-md"
                    : "py-1 px-2 bg-error-content text-error rounded-md"
                }
              >
                {problem.level}
              </span>
            </div>
            <span
              dangerouslySetInnerHTML={{ __html: problem.description }}
              className="leading-24"
            />
            <div className="flex flex-col gap-2 max-w-max">
              <strong>Constrain:</strong>
              <span className="py-1 px-2 bg-primary-content text-primary rounded-md">
                {problem.constrain}
              </span>
            </div>
            <div className="flex flex-col gap-2 max-w-max">
              <strong>Example:</strong>
              {examples?.map((item: string) => {
                return (
                  <span
                    key={item}
                    className="py-1 px-2 bg-primary-content text-primary rounded-md"
                  >
                    {item}
                  </span>
                );
              })}
            </div>
          </div>
          {userInfo?.solvedProblems.includes(problemId) ? (
            <form className="p-4  max-h-full w-1/6 flex flex-col gap-2">
              <button className="btn btn-disabled btn-sm">Submited</button>
            </form>
          ) : (
            <form className="p-4  max-h-full w-1/6 flex flex-col gap-2">
              <input
                className="px-4 py-1 rounded-md bg-secondary-content text-secondary placeholder:text-secondary"
                placeholder="Enter answer here!"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
              />
              <button
                className="btn btn-primary btn-sm"
                onClick={submitHandler}
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default Question;
