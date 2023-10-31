/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Navbar from "../../layouts/Navbar";
import Sidebar from "../../components/Dashboard/Sidebar";
import { FullScreenHandle, useFullScreenHandle } from "react-full-screen";
import { useGetDailyAlgorithmQuery } from "../../hooks/algorithmHooks";

const Dashboard = () => {
  const handle: FullScreenHandle = useFullScreenHandle();

  const { data: algorithms } = useGetDailyAlgorithmQuery();

  return (
    <div>
      <Navbar fullscreenHandle={handle} />
      <hr className="border-base-200"></hr>
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

        <div className="p-4 col-span-9 bg-base-100 flex flex-col gap-8">
          <div className="stats bg-primary shadow-md">
            <div className="stat">
              <div className="stat-title text-primary-content">
                Total Algorithm Questions
              </div>
              <div className="stat-value text-primary-content">25</div>
              <div className="stat-actions">
                <button
                  className="btn btn-sm btn-primary-content text-primary hover:text-primary/50"
                  onClick={() => {
                    let el: any = document.getElementById("add-product-modal")!;
                    el.showModal();
                  }}
                >
                  Add New Problem
                </button>
                <dialog id="add-product-modal" className="modal">
                  {/* <!-- Modal content --> */}
                  <div className="modal-box">
                    {/* <!-- Modal header --> */}
                    <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b border-base-content sm:mb-5">
                      <h3 className="text-lg font-semibold">Add New Problem</h3>
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
              </div>
            </div>

            <div className="stat">
              <div className="stat-title text-primary-content">Total Users</div>
              <div className="stat-value text-primary-content">4200</div>
              <div className="stat-actions flex gap-2">
                <button className="btn btn-sm btn-primary-content text-primary hover:text-primary/50">
                  Check Users
                </button>
                <button className="btn btn-sm btn-primary-content text-primary hover:text-primary/50">
                  Copy Link
                </button>
              </div>
            </div>
          </div>

          <div className="stats shadow-md">
            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 inline-block stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="stat-title">Day</div>
              <div className="stat-value">31</div>
              <div className="stat-desc">November, 1, 2023</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 inline-block stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div className="stat-title">Visit</div>
              <div className="stat-value">31K</div>
              <div className="stat-desc">Jan 1st - Feb 1st</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 inline-block stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                  />
                </svg>
              </div>
              <div className="stat-title">New Users</div>
              <div className="stat-value">4200</div>
              <div className="stat-desc">↗︎ 400 (22%)</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 inline-block stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              </div>
              <div className="stat-title">Total Rate</div>
              <div className="stat-value">3.7/5</div>
              <div className="stat-desc">↘︎ 90 (14%)</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 inline-block stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="stat-title">Solved Problems</div>
              <div className="stat-value">4200</div>
              <div className="stat-desc">↗︎ 400 (22%)</div>
            </div>
          </div>

          <div className="rounded-lg">
            <div className="overflow-x-auto">
              <table className="table table-xs font-poppins">
                <thead>
                  <tr>
                    <th></th>
                    <th>Sequence</th>
                    <th>Day</th>
                    <th>Date</th>
                    <th>Title</th>
                    <th>Answer</th>
                    <th>Slug</th>
                    <th>Difficulty</th>
                    <th>Action</th>
                  </tr>
                </thead>
                {algorithms?.map((item, index) => {
                  return (
                    <tbody>
                      <tr>
                        <th>{index + 1}</th>
                        <td>{item.sequence}</td>
                        <td>{item.day}</td>
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
                    <th>Sequence</th>
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

export default Dashboard;
