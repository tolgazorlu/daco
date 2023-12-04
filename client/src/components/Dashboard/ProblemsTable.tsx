/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "react-toastify";
import {
  useDeleteProblemMutation,
  useGetProblemsQuery,
  useUpdateProblemMutation,
} from "../../hooks/problemHooks";
import { getError } from "../../utils/getError";
import { ApiError } from "../../types/ApiError";
import { useState } from "react";

const ProblemsTable = () => {
  const { data: problems, isLoading, error, refetch } = useGetProblemsQuery();
  const { mutateAsync: deleteProblem } = useDeleteProblemMutation();
  const { mutateAsync: updateProblem } = useUpdateProblemMutation();

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

  const [editItemId, setEditItemId] = useState<string>("");
  const [deleteItemId, setDeleteItemId] = useState<string>("");

  const deleteProblemHandler = async (id: string) => {
    try {
      await deleteProblem(id);
      refetch;
      toast.success("Problem deleted!");
    } catch (error) {
      toast.error(getError(error as ApiError));
    }
  };

  const editModalLoader = (
    day: number,
    date: string,
    sequence: number,
    title: string,
    slug: string,
    level: string,
    description: string,
    example: string,
    constrain: string,
    answer: string,
  ) => {
    setDay(day);
    setDate(date);
    setTitle(title);
    setSequence(sequence);
    setSlug(slug);
    setLevel(level);
    setDescription(description);
    setExample(example);
    setConstrain(constrain);
    setAnswer(answer);
  };

  const updateProblemHandler = async () => {
    try {
      await updateProblem({
        id: editItemId,
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
      {isLoading ? (
        <div className="p-2 rounded-lg">
          <div className="overflow-x-auto">
            <table className="table table-xs font-poppins">
              <caption className="text-left text-xl font-bold mb-4">
                All Problems
              </caption>
            </table>
          </div>
          <div className="alert flex justify-center">
            <span className="loading loading-lg"></span>
          </div>
        </div>
      ) : error ? (
        <div className="p-2 rounded-lg">
          <div className="overflow-x-auto">
            <table className="table table-xs font-poppins">
              <caption className="text-left text-xl font-bold mb-4">
                All Problems
              </caption>
            </table>
          </div>
          <div className="alert alert-error">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Error! Something went wrong.</span>
          </div>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table table-xs">
            <caption className="text-left text-xl font-bold mb-4">
              All Problems
            </caption>
            <thead>
              <tr>
                <th></th>
                <th>Day</th>
                <th>Date</th>
                <th>Title</th>
                <th>Answer</th>
                <th>Slug</th>
                <th>Difficulty</th>
              </tr>
            </thead>
            {problems?.map((item) => {
              return (
                <tbody key={item._id}>
                  <tr>
                    <td>
                      <span className="badge">{item.sequence}</span>
                    </td>
                    <td>000{item.day}</td>
                    <td>{item.date}</td>
                    <td>{item.title}</td>
                    <td>{item.answer}</td>
                    <td>{item.slug}</td>
                    <td
                      className={
                        item.level == "easy"
                          ? "text-success"
                          : item.level == "medium"
                            ? "text-warning"
                            : "text-error"
                      }
                    >
                      {item.level}
                    </td>
                    <td className="flex gap-1 h-12 items-center float-right">
                      <a
                        href={`/question/${item.slug}`}
                        className="btn btn-xs btn-info text-info-content hover:bg-info/50"
                      >
                        Detail
                      </a>
                      <button
                        className="btn btn-xs btn-warning text-warning-content hover:bg-warning/50"
                        onClick={() => {
                          editModalLoader(
                            item.day,
                            item.date,
                            item.sequence,
                            item.title,
                            item.slug,
                            item.level,
                            item.description,
                            item.example,
                            item.constrain,
                            item.answer,
                          );
                          setEditItemId(item._id);
                          let el: any =
                            document.getElementById("edit-problem-modal")!;
                          el.showModal();
                        }}
                      >
                        Edit
                      </button>
                      <dialog id="edit-problem-modal" className="modal">
                        {/* <!-- Modal content --> */}
                        <div className="modal-box">
                          {/* <!-- Modal header --> */}
                          <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b border-base-content sm:mb-5">
                            <h3 className="text-lg font-semibold">
                              Edit Problem
                            </h3>
                            <button
                              type="button"
                              className="rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                              onClick={() => {
                                let el: any =
                                  document.getElementById(
                                    "edit-problem-modal",
                                  )!;
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
                                <label
                                  htmlFor="day"
                                  className="block mb-2 text-sm font-medium"
                                >
                                  Day
                                </label>
                                <input
                                  type="number"
                                  name="day"
                                  id="day"
                                  value={day}
                                  onChange={(e) =>
                                    setDay(parseInt(e.target.value))
                                  }
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
                                  onChange={(e) =>
                                    setSequence(parseInt(e.target.value))
                                  }
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
                                <label className="block mb-2 text-sm font-medium">
                                  Answer
                                </label>
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
                                  onChange={(e) =>
                                    setDescription(e.target.value)
                                  }
                                ></textarea>
                              </div>
                            </div>
                            <button
                              className="float-right btn btn-sm bg-success text-success-content hover:bg-success/50"
                              onClick={() => {
                                updateProblemHandler();
                              }}
                            >
                              Edit Problem
                            </button>
                          </form>
                        </div>
                      </dialog>
                      <button
                        onClick={() => {
                          let el: any = document.getElementById("my_modal_1")!;
                          el.showModal();
                          setDeleteItemId(item._id);
                        }}
                        className="btn btn-xs btn-error text-error-content hover:bg-error/50"
                      >
                        Delete
                      </button>
                      {/* DELETE */}

                      <dialog
                        id="my_modal_1"
                        className="modal modal-bottom sm:modal-middle"
                      >
                        <div className="modal-box">
                          <h3 className="font-bold text-lg">Attention!</h3>
                          <p className="py-4">
                            Do you want to delete this problem? You can not take
                            it back the process!
                          </p>
                          <div className="modal-action">
                            <form className="flex">
                              <button
                                className="btn btn-error mr-2 text-error-content"
                                onClick={() =>
                                  deleteProblemHandler(deleteItemId)
                                }
                              >
                                Delete
                              </button>
                              <button className="btn">Close</button>
                            </form>
                          </div>
                        </div>
                      </dialog>
                    </td>
                  </tr>
                </tbody>
              );
            })}
            <tfoot>
              <tr>
                <th></th>
                <th>Day</th>
                <th>Date</th>
                <th>Title</th>
                <th>Answer</th>
                <th>Slug</th>
                <th>Difficulty</th>
              </tr>
            </tfoot>
          </table>
        </div>
      )}
    </>
  );
};

export default ProblemsTable;
