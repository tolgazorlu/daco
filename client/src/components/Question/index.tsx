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
            {congratsAnimation ? (
                <div
                    className="fixed h-[93vh] z-20 w-full bg-gradient-to-r from-primary to-accent flex justify-center items-center animate-leftToRight"
                    onClick={animationCloseHandler}
                >
                    <span className="text-4xl sm:text-5xl md:text-8xl text-primary-content font-aubette relative animate-congrats">
                        CONGRATULATIONS!
                    </span>
                </div>
            ) : (
                <></>
            )}
            <div>
                <div className="py-10 px-2 lg:px-32 gap-4 mt-14 md:p-10">
                    {userInfo?.isAdmin ? (
                        <a
                            href={`/question/${slug}/edit`}
                            className="btn btn-info btn-sm float-right text-accent-content"
                        >
                            Edit Problem
                        </a>
                    ) : (
                        <></>
                    )}
                    <div className="flex items-center gap-4">
                        <div className="bg-neutral fixed right-0 left-0 bottom-0 w-full px-32 py-6 flex justify-between items-center">
                            <span className="text-3xl font-bandal text-neutral-content">
                                {problem.title}{" "}
                            </span>
                            {isSolved ? (
                                <button className="btn btn-success btn-sm w-64">
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
                                <form className="flex flex-row gap-4">
                                    <input
                                        className="px-4 py-1 rounded-md bg-neutral-content text-neutral placeholder:text-neutral"
                                        placeholder="Enter answer here!"
                                        value={answer}
                                        onChange={(e) =>
                                            setAnswer(e.target.value)
                                        }
                                    />
                                    {solveProblemLoading ? (
                                        <button className="btn btn-warning btn-sm w-32">
                                            <span className="loading loading-spinner"></span>
                                        </button>
                                    ) : (
                                        <button
                                            className="btn btn-primary btn-sm w-32"
                                            onClick={submitHandler}
                                        >
                                            Submit
                                        </button>
                                    )}
                                </form>
                            )}
                        </div>
                        <span className="text-3xl font-bold">
                            {" "}
                            {problem.sequence} - {problem.title}{" "}
                        </span>
                        <span
                            className={
                                problem.level === "easy"
                                    ? "bg-success text-success-content text-sm font-medium me-2 px-2.5 py-0.5 rounded"
                                    : problem.level === "medium"
                                      ? "bg-warning text-warning-content text-sm font-medium me-2 px-2.5 py-0.5 rounded"
                                      : "bg-error text-error-content text-sm font-medium me-2 px-2.5 py-0.5 rounded"
                            }
                        >
                            {problem.level}
                        </span>
                    </div>
                    <br></br>
                    <div className="prose">
                        <Markdown
                            remarkPlugins={[remarkGfm, remarkToc]}
                            rehypePlugins={[rehypeHighlight]}
                            children={problem.description}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Question;
