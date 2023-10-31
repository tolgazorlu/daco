import Navbar from "../../layouts/Navbar";
import Sidebar from "../../components/Dashboard/Sidebar";
import { FullScreenHandle, useFullScreenHandle } from "react-full-screen";
import { useGetDailyAlgorithmQuery } from "../../hooks/algorithmHooks";

const Dashboard = () => {
  const handle: FullScreenHandle = useFullScreenHandle();

  const { data: algorithms, isLoading, error } = useGetDailyAlgorithmQuery();

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
          <div className="stats bg-primary text-primary-content shadow-md">
            <div className="stat">
              <div className="stat-title text-primary-content">Total Algorithm Questions</div>
              <div className="stat-value">25</div>
              <div className="stat-actions">
                <button className="btn btn-sm btn-success btn-success-content">Add Question</button>
              </div>
            </div>

            <div className="stat">
            <div className="stat-title text-primary-content">Total Users</div>
              <div className="stat-value">4200</div>
              <div className="stat-actions flex gap-2">
                <button className="btn btn-sm">Check Users</button>
                <button className="btn btn-sm">Copy Link</button>
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
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
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
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
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
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">New Users</div>
              <div className="stat-value">4,200</div>
              <div className="stat-desc">↗︎ 400 (22%)</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">New Registers</div>
              <div className="stat-value">1,200</div>
              <div className="stat-desc">↘︎ 90 (14%)</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Solved Problems</div>
              <div className="stat-value">4,200</div>
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
                        <td className={item.level == "easy" ? "text-success" : item.level == "medium" ? "text-warning" : "text-error"}>{item.level}</td>
                        <td className="flex gap-1">
                          <button className="bg-info px-2 py-1 rounded-md text-info-content">
                            Detail
                          </button>
                          <button className="bg-warning px-2 py-1 rounded-md text-warning-content">
                            Edit
                          </button>
                          <button className="bg-error px-2 py-1 rounded-md text-error-content">
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
