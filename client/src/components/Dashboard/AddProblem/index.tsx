import Layout from "../../Layouts";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/a11y-dark.css";
import { useState } from "react";
import { getError } from "../../../utils/getError";
import { ApiError } from "../../../types/ApiError";
import { useCreateProblemMutation } from "../../../hooks/problemHooks";
import { ToastContainer, toast } from "react-toastify";

const EditProblem = () => {
    const { mutateAsync: createProblem, isLoading: createLoading } =
        useCreateProblemMutation();

    const [day, setDay] = useState<number>(0);
    const [title, setTitle] = useState<string>("");
    const [level, setLevel] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [answer, setAnswer] = useState<string>("");

    const createProblemHandler = async () => {
        try {
            await createProblem({
                day: day,
                title: title,
                level: level,
                description: description,
                answer: answer,
            });
            toast.success("Problem created!");
        } catch (error) {
            toast.error(getError(error as ApiError));
        }
    };

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

            <section className="mt-20 flex justify-between py-2 px-4  bg-base-200 rounded-none">
                <div className="flex gap-4 items-center">
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
                        placeholder="Enter title"
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
                        placeholder="Enter answer"
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                    ></input>
                </div>
                <div className="gap-2 h-full flex items-center">
                    <button className="btn btn-accent text-accent-content btn-sm rounded">
                        Save Draft
                    </button>
                    <button
                        className="btn btn-primary text-primary-content btn-sm rounded"
                        onClick={() => createProblemHandler()}
                    >
                        {createLoading ? (
                            <span className="loading loading-lg"></span>
                        ) : (
                            <span>Save & Publish</span>
                        )}
                    </button>
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
