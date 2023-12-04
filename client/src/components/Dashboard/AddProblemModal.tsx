/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useCreateProblemMutation } from "../../hooks/problemHooks";
import { getError } from "../../utils/getError";
import { ApiError } from "../../types/ApiError";

const AddProblemModal = () => {
  const { mutateAsync: createProblem } = useCreateProblemMutation();

  const [day, setDay] = useState<number>(0);
  const [date, setDate] = useState<string>("");
  const [sequence, setSequence] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [slug, setSlug] = useState<string>("");
  const [level, setLevel] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [example, setExample] = useState<string>("");
  const [constrain, setConstrain] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");

  const createProblemHandler = async () => {
    try {
      await createProblem({
        day: day,
        date: date,
        sequence: sequence,
        title: title,
        slug: slug,
        level: level,
        description: description,
        example: example,
        constrain: constrain,
        answer: answer,
      });
    } catch (err) {
      console.log(getError(err as ApiError));
    }
  };

  return (
    <>
      <dialog id="add-problem-modal" className="modal">
        {/* <!-- Modal content --> */}
        <div className="modal-box">
          {/* <!-- Modal header --> */}
          <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b border-base-content sm:mb-5">
            <h3 className="text-lg font-semibold">Add New Problem</h3>
            <button
              type="button"
              className="rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              onClick={() => {
                let el: any = document.getElementById("add-problem-modal")!;
                el.close();
              }}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          {/* FORM */}

          <form action="#">
            <div className="grid gap-4 mb-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="title"
                  className="block mb-2 text-sm font-medium"
                >
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="input input-bordered input-sm input-accent w-full max-w-xs"
                  placeholder="Algorithm title"
                />
              </div>
              <div>
                <label
                  htmlFor="slug"
                  className="block mb-2 text-sm font-medium"
                >
                  Slug
                </label>
                <input
                  type="text"
                  name="slug"
                  id="slug"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  className="input input-bordered input-sm input-accent w-full max-w-xs"
                  placeholder="Algorithm slug"
                />
              </div>
              <div>
                <label htmlFor="day" className="block mb-2 text-sm font-medium">
                  Day
                </label>
                <input
                  type="number"
                  name="day"
                  id="day"
                  value={day}
                  onChange={(e) => setDay(parseInt(e.target.value))}
                  className="input input-bordered input-sm input-accent w-full max-w-xs"
                  placeholder="0"
                />
              </div>
              <div>
                <label
                  htmlFor="difficulty"
                  className="block mb-2 text-sm font-medium"
                >
                  Difficulty
                </label>
                <select
                  id="difficulty"
                  className="input input-bordered input-sm input-accent w-full max-w-xs"
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                >
                  <option>Select Difficulty</option>
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="date"
                  className="block mb-2 text-sm font-medium"
                >
                  Date
                </label>
                <input
                  type="string"
                  name="date"
                  id="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="input input-bordered input-sm input-accent w-full max-w-xs"
                  placeholder="November, 1, 2023"
                />
              </div>
              <div>
                <label
                  htmlFor="sequence"
                  className="block mb-2 text-sm font-medium"
                >
                  Sequence
                </label>
                <input
                  type="number"
                  className="input input-bordered input-sm input-accent w-full max-w-xs"
                  placeholder="5"
                  value={sequence}
                  onChange={(e) => setSequence(parseInt(e.target.value))}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium">
                  Example
                </label>
                <input
                  className="input input-bordered input-sm input-accent w-full max-w-xs"
                  placeholder="Example"
                  value={example}
                  onChange={(e) => setExample(e.target.value)}
                ></input>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium">
                  Constrain
                </label>
                <input
                  className="input input-bordered input-sm input-accent w-full max-w-xs"
                  placeholder="constrain"
                  value={constrain}
                  onChange={(e) => setConstrain(e.target.value)}
                ></input>
              </div>
              <div className="sm:col-span-2">
                <label className="block mb-2 text-sm font-medium">Answer</label>
                <input
                  className="input input-bordered input-sm input-accent w-full"
                  placeholder="answer"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                ></input>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium"
                >
                  Detail
                </label>
                <textarea
                  id="description"
                  rows={4}
                  className="textarea textarea-accent w-full"
                  placeholder="Write algorithm description here"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
            </div>
            <button
              className="float-right btn btn-sm bg-success text-success-content hover:bg-success/50"
              onClick={() => createProblemHandler()}
            >
              Add Product
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default AddProblemModal;
