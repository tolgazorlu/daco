/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Navbar from "../../layouts/Navbar";
import Sidebar from "../../components/Dashboard/Sidebar";
import { FullScreenHandle, useFullScreenHandle } from "react-full-screen";
import { useGetAlgorithmsQuery } from "../../hooks/algorithmHooks";

const Problems = () => {
  const handle: FullScreenHandle = useFullScreenHandle();

  const { data: algorithms } = useGetAlgorithmsQuery();

  return (
    <div>
      <Navbar fullscreenHandle={handle} />
      <hr></hr>
      <button
        data-drawer-target="cta-button-sidebar"
        data-drawer-toggle="cta-button-sidebar"
        aria-controls="cta-button-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
      <div className="bg-white grid grid-cols-12">
        <Sidebar />

        <div className="p-4 col-span-9 bg-base-100">
          <div className="p-2 rounded-lg">
            <div className="w-full h-10">
              <button
                className="btn btn-sm btn-success float-right"
                onClick={() => {
                  let el: any = document.getElementById("add-product-modal")!;
                  el.showModal();
                }}
              >
                Add Problem
              </button>
            </div>
            <dialog id="add-product-modal" className="modal">
              {/* <!-- Modal content --> */}
              <div className="modal-box">
                {/* <!-- Modal header --> */}
                <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b border-base-content sm:mb-5">
                  <h3 className="text-lg font-semibold">
                    Add New Problem
                  </h3>
                  <button
                    type="button"
                    className="rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                    onClick={() => {
                      let el: any =
                        document.getElementById("add-product-modal")!;
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
                        className="input input-bordered input-sm input-primary w-full max-w-xs"
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
                        className="input input-bordered input-sm input-primary w-full max-w-xs"
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
                        className="input input-bordered input-sm input-primary w-full max-w-xs"
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
                        className="input input-bordered input-sm input-primary w-full max-w-xs"
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
                        className="input input-bordered input-sm input-primary w-full max-w-xs"
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
                        className="input input-bordered input-sm input-primary w-full max-w-xs"
                        placeholder="5"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium">
                        Example
                      </label>
                      <input
                        className="input input-bordered input-sm input-primary w-full max-w-xs"
                        placeholder="Example"
                      ></input>
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium">
                        Constrain
                      </label>
                      <input
                        className="input input-bordered input-sm input-primary w-full max-w-xs"
                        placeholder="constrain"
                      ></input>
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block mb-2 text-sm font-medium">
                        Answer
                      </label>
                      <input
                        className="input input-bordered input-sm input-primary w-full"
                        placeholder="answer"
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
                        className="textarea textarea-primary w-full"
                        placeholder="Write algorithm description here"
                      ></textarea>
                    </div>
                  </div>
                  <button className="float-right btn btn-sm bg-success text-success-content hover:bg-success/50">
                    Add Product
                  </button>
                </form>
              </div>
            </dialog>
            <div className="overflow-x-auto">
              <table className="table table-xs font-poppins">
                <thead>
                  <tr>
                    <th></th>
                    <th>Day</th>
                    <th>Date</th>
                    <th>Title</th>
                    <th>Answer</th>
                    <th>Slug</th>
                    <th>Difficulty</th>
                    <th>Action</th>
                  </tr>
                </thead>
                {algorithms?.map((item) => {
                  return (
                    <tbody>
                      <tr>
                        <td><span className="badge">{item.sequence}</span></td>
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
                        <td className="flex gap-1 h-12 items-center">
                          <button className="btn btn-xs bg-info px-2 py-1 rounded-md text-info-content">
                            Detail
                          </button>
                          <button className="btn btn-xs bg-warning px-2 py-1 rounded-md text-warning-content">
                            Edit
                          </button>
                          <button className="btn btn-xs bg-error px-2 py-1 rounded-md text-error-content">
                            Delete
                          </button>
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
                    <th>Action</th>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Problems;
