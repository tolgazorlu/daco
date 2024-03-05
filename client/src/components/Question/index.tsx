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
                    className="absolute h-[93vh] z-20 w-full bg-gradient-to-r from-primary to-accent flex justify-center items-center animate-leftToRight"
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
                <div className="py-10 px-2 lg:px-32 flex flex-col gap-4 mt-14 md:p-10">
                    <span className="font-bold text-2xl">
                        <span>{problem.sequence}.</span>{" "}
                        <span>{problem.title}</span>
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
                    <div className="prose lg:prose-xl">
                        <Markdown
                            remarkPlugins={[remarkGfm, remarkToc]}
                            rehypePlugins={[rehypeHighlight]}
                            children={problem.description}
                        />
                    </div>
                    {isSolved ? (
                        <form className="flex flex-col md:w-1/3 gap-2">
                            <button className="btn btn-disabled btn-sm">
                                Submited
                            </button>
                        </form>
                    ) : (
                        <form className="flex flex-col md:w-1/3 gap-2">
                            <input
                                className="px-4 py-1 rounded-md bg-primary-content text-primary placeholder:text-primary border-2 border-secondary"
                                placeholder="Enter answer here!"
                                value={answer}
                                onChange={(e) => setAnswer(e.target.value)}
                            />
                            {solveProblemLoading ? (
                                <button className="btn btn-primary btn-sm">
                                    <span className="loading loading-spinner"></span>
                                </button>
                            ) : (
                                <button
                                    className="btn btn-primary btn-sm"
                                    onClick={submitHandler}
                                >
                                    Submit
                                </button>
                            )}
                        </form>
                    )}
                </div>
            </div>
        </>
    );
};

export default Question;
