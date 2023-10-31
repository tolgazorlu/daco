import Navbar from "../../layouts/Navbar";
import Sidebar from "../../components/Dashboard/Sidebar";
import {
  FullScreenHandle,
  useFullScreenHandle,
} from "react-full-screen";

const Dashboard = () => {

  const handle: FullScreenHandle = useFullScreenHandle();

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

        <div className="p-4 col-span-9 bg-base-100">
          <div className="p-4 border-2 border-gray-200 rounded-lg dark:border-gray-700">
            <div className="overflow-x-auto">
              <table className="table table-xs font-poppins">
                <thead>
                  <tr>
                    <th></th>
                    <th>Status</th>
                    <th>Title</th>
                    <th>Your Answer</th>
                    <th>Acceptance</th>
                    <th>Difficulty</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <td>
                      <span className="bg-success text-success-content px-2 py-1 rounded-md">
                        Published
                      </span>
                    </td>
                    <td>Two Sum</td>
                    <td>1124</td>
                    <td>75.1%</td>
                    <td className="text-success">Easy</td>
                    <td>
                      <button className="bg-warning px-2 py-1 rounded-md text-warning-content">
                        Edit
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th>2</th>
                    <td>
                      <span className="bg-warning text-warning-content px-2 py-1 rounded-md">
                        Not Published
                      </span>
                    </td>
                    <td>Two Sum</td>
                    <td>1124</td>
                    <td>75.1%</td>
                    <td className="text-warning">Medium</td>
                    <td>
                      <button className="bg-warning px-2 py-1 rounded-md text-warning-content">
                        Edit
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th>3</th>
                    <td>
                      <span className="bg-warning text-warning-content px-2 py-1 rounded-md">
                        Not Published
                      </span>
                    </td>
                    <td>Two Sum</td>
                    <td>1124</td>
                    <td>75.1%</td>
                    <td className="text-error">Hard</td>
                    <td>
                      <button className="bg-warning px-2 py-1 rounded-md text-warning-content">
                        Edit
                      </button>
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th></th>
                    <th>Status</th>
                    <th>Title</th>
                    <th>Your Answer</th>
                    <th>Acceptance</th>
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
