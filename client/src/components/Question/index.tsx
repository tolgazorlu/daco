import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/a11y-dark.css";

import Layout from "../Layouts";
import ErrorMessage from "../ErrorMessage";
import { getError } from "../../utils/getError";
import { User } from "../../contexts/User";
import {
    useGetProblemQuery,
    useSolveProblemMutation,
} from "../../hooks/problemHooks";
import { ApiError } from "../../types/ApiError";
import Loading from "../Loading";

const Question = () => {
    const { slug } = useParams();
    const { data: problem, isLoading, error } = useGetProblemQuery(slug!);
    const { mutateAsync: solveProblem, isLoading: solveProblemLoading } =
        useSolveProblemMutation();

    const { state, dispatch } = useContext(User);
    const { userInfo } = state;

    const [isSolved, setIsSolved] = useState(false);
    const [answer, setAnswer] = useState("");
    const [problemId, setProblemId] = useState("");
    const [congratsAnimation, setCongratAnimation] = useState(false);

    useEffect(() => {
        if (problem) {
            setProblemId(problem._id);
        }
        if (userInfo?.solvedProblems) {
            setIsSolved(
                userInfo.solvedProblems.some(
                    (solvedProblem) => solvedProblem.problemId === problemId,
                ),
            );
        }
    }, [problem, problemId, userInfo]);

    const submitHandler = async (e: React.FormEvent) => {
        e.preventDefault();
        if (problem) {
            try {
                const data = await solveProblem({
                    id: problem._id,
                    answer: answer,
                });
                setCongratAnimation(true);
                toast.success("Problem solved!");
                dispatch({ type: "USER_SIGNIN", payload: data });
                localStorage.setItem("userInfo", JSON.stringify(data));
            } catch (error) {
                toast.error(getError(error as ApiError));
            }
        }
    };

    const animationCloseHandler = () => {
        setCongratAnimation(false);
    };

    if (isLoading) {
        return (
            <>
                <Layout />
                <Loading />
            </>
        );
    }

    if (error || !problem) {
        return <ErrorMessage>{getError(error as ApiError)}</ErrorMessage>;
    }

    return (
        <>
            <Helmet>
                {problem.level == "easy" ? (
                    <title>It's a piece of cake for you!</title>
                ) : problem.level == "medium" ? (
                    <>You can do this!</>
                ) : (
                    <>Just focus!</>
                )}
            </Helmet>
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
                theme="colored"
            />
            <Layout />

            <main>
                <div className="py-10 px-4 lg:px-24 gap-4 mt-20 md:p-10 h-[85vh] lg:h-[90vh]">
                    <div className="h-5/6 overflow-x-scroll">
                        {userInfo?.isAdmin ? (
                            <a
                                href={`/question/${slug}/edit`}
                                className={
                                    problem.level === "easy"
                                        ? "btn btn-success btn-sm float-right text-success-content text-sm font-medium me-2 px-2.5 py-0.5 rounded"
                                        : problem.level === "medium"
                                          ? "btn btn-warning btn-sm float-right text-warning-content text-sm font-medium me-2 px-2.5 py-0.5 rounded"
                                          : "btn btn-error btn-sm float-right text-error-content text-sm font-medium me-2 px-2.5 py-0.5 rounded"
                                }
                            >
                                Edit Problem
                            </a>
                        ) : (
                            <div
                                className={
                                    problem.level === "easy"
                                        ? "btn btn-success btn-sm float-right  text-success-content text-sm font-medium me-2 px-2.5 py-0.5 rounded"
                                        : problem.level === "medium"
                                          ? "btn btn-warning btn-sm float-right text-warning-content text-sm font-medium me-2 px-2.5 py-0.5 rounded"
                                          : "btn btn-error btn-sm float-right text-error-content text-sm font-medium me-2 px-2.5 py-0.5 rounded "
                                }
                            >
                                {problem.level}
                            </div>
                        )}
                        <div className="prose lg:prose-xl">
                            <Markdown
                                remarkPlugins={[remarkGfm, remarkToc]}
                                rehypePlugins={[rehypeHighlight]}
                                children={problem.description}
                            />
                        </div>
                    </div>

                    <div className="flex justify-between items-center fixed right-0 left-0 bottom-0 w-full px-4 lg:px-24 bg-base-300 h-1/6">
                        <span className="text-xl md:text-3xl font-bandal text-base-content">
                            {problem.title}{" "}
                        </span>
                        {isSolved ? (
                            <button className="btn btn-success btn-sm sm:w-64 rounded">
                                <span>This problem solved!</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                    />
                                </svg>
                            </button>
                        ) : (
                            <form className="flex flex-col md:flex-row gap-4">
                                <input
                                    className="px-4 py-1 rounded bg-neutral-content text-neutral placeholder:text-neutral"
                                    placeholder="Enter answer here!"
                                    value={answer}
                                    onChange={(e) => setAnswer(e.target.value)}
                                />
                                {solveProblemLoading ? (
                                    <button className="btn btn-warning btn-sm w-32 rounded">
                                        <span className="loading loading-spinner"></span>
                                    </button>
                                ) : (
                                    <button
                                        className="btn btn-primary btn-sm w-full md:w-32 rounded"
                                        onClick={submitHandler}
                                    >
                                        Submit
                                    </button>
                                )}
                            </form>
                        )}
                        {congratsAnimation ? (
                            <div
                                className="fixed bottom-0 p-2 z-20 w-full bg-gradient-to-r from-primary to-accent flex justify-center items-center animate-leftToRight"
                                onClick={animationCloseHandler}
                            >
                                <span className="text-4xl sm:text-5xl md:text-7xl text-primary-content font-bandal relative animate-congrats">
                                    Congratulations!
                                </span>
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
            </main>
        </>
    );
};

export default Question;
