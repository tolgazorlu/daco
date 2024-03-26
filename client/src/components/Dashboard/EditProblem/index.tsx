import Layout from "../../Layouts";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/a11y-dark.css";
import { useEffect, useState } from "react";
import { getError } from "../../../utils/getError";
import { ApiError } from "../../../types/ApiError";
import {
    useDraftProblemMutation,
    useGetProblemForEditQuery,
    usePublishProblemMutation,
    useUpdateProblemMutation,
} from "../../../hooks/problemHooks";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Loading from "../../Loading";
import ErrorMessage from "../../ErrorMessage";

const EditProblem = () => {
    const [day, setDay] = useState<number>(0);
    const [level, setLevel] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [answer, setAnswer] = useState<string>("");
    const [itemId, setItemId] = useState<string>("");
    const [isDraft, setIsDraft] = useState<boolean>(true);
    const { mutateAsync: updateProblem, isLoading: updateLoading } =
        useUpdateProblemMutation();
    const { mutateAsync: updatePublishProblem, isLoading: publishLoading } =
        usePublishProblemMutation();
    const { mutateAsync: updateDraftProblem, isLoading: draftLoading } =
        useDraftProblemMutation();

    const { slug } = useParams();
    const {
        data: problem,
        isLoading,
        error,
    } = useGetProblemForEditQuery(slug!);

    const updateProblemHandler = async () => {
        try {
            await updateProblem({
                id: itemId,
                day: day,
                title: title,
                level: level,
                description: description,
                answer: answer,
            });
            toast.success("Problem updated!");
        } catch (err) {
            toast.error(getError(error as ApiError));
        }
    };

    const updatePublishHandler = async () => {
        try {
            updateProblemHandler();
            await updatePublishProblem({
                id: itemId,
            });
            setIsDraft(false);
            toast.success("Problem published!");
        } catch (error) {
            toast.error(getError(error as ApiError));
        }
    };

    const updateDraftHandler = async () => {
        try {
            updateProblemHandler();
            await updateDraftProblem({
                id: itemId,
            });
            setIsDraft(true);
            toast.success("Problem drafted!");
        } catch (error) {
            toast.error(getError(error as ApiError));
        }
    };

    useEffect(() => {
        if (problem) {
            setDay(problem.day);
            setTitle(problem.title);
            setAnswer(problem.answer);
            setLevel(problem.level);
            setDescription(problem.description);
            setItemId(problem._id);
            setIsDraft(problem.isDraft);
        }
    }, [problem]);

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
        <div className="h-screen flex flex-col">
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

            {/* Publish or Save Action Section */}

            <section
                tabIndex={0}
                className="mt-20 flex justify-between py-2 px-4  bg-base-200 rounded-none"
            >
                <div className="flex gap-4 items-center rounded">
                    <label>Day:</label>
                    <input
                        type="number"
                        name="day"
                        id="day"
                        value={day}
                        onChange={(e) => setDay(parseInt(e.target.value))}
                        className="input input-bordered input-sm w-20 rounded"
                    />
                    |<label>Title:</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="input input-bordered input-sm w-32 rounded"
                        placeholder="Algorithm title"
                    />
                    |<label>Difficulty:</label>
                    <select
                        id="difficulty"
                        className="input input-bordered input-sm rounded"
                        value={level}
                        onChange={(e) => setLevel(e.target.value)}
                    >
                        <option>Difficulty</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                    |<label>Answer:</label>
                    <input
                        className="input input-bordered input-sm w-32 rounded"
                        type="text"
                        name="answer"
                        id="answer"
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                    ></input>
                </div>
                <div className="gap-2 h-full flex items-center">
                    {updateLoading ? (
                        <span className="loading loading-lg"></span>
                    ) : (
                        <button
                            className="btn btn-accent text-accent-content rounded btn-sm"
                            onClick={() => {
                                updateProblemHandler();
                            }}
                        >
                            Save
                        </button>
                    )}

                    {publishLoading ? (
                        <button className="btn btn-primary btn-sm px-8">
                            <span className="loading"></span>
                        </button>
                    ) : draftLoading ? (
                        <button className="btn btn-primary btn-sm px-8">
                            <span className="loading"></span>
                        </button>
                    ) : isDraft == true ? (
                        <button
                            className="btn btn-primary text-primary-content rounded btn-sm"
                            onClick={() => {
                                updatePublishHandler();
                            }}
                        >
                            Publish
                        </button>
                    ) : (
                        <button
                            className="btn btn-secondary text-secondary-content rounded btn-sm"
                            onClick={() => {
                                updateDraftHandler();
                            }}
                        >
                            Set Draft
                        </button>
                    )}
                </div>
            </section>

            {/* Markdown Section */}

            <section className="grid grid-cols-1 md:grid-cols-2 gap-1 flex-1 max-h-screen overflow-hidden">
                <form className="h-full overflow-y-auto">
                    <textarea
                        id="description"
                        className="bg-base-300 w-full h-full p-4"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </form>
                <div className="prose h-full overflow-y-auto p-4">
                    <Markdown
                        remarkPlugins={[remarkGfm, remarkToc]}
                        rehypePlugins={[rehypeHighlight]}
                        children={description}
                    />
                </div>
            </section>
        </div>
    );
};

export default EditProblem;
