import Navbar from "../../layouts/Navbar";
import Sidebar from "../../components/Dashboard/Sidebar";
import { FullScreenHandle, useFullScreenHandle } from "react-full-screen";
import { useGetUsersQuery } from "../../hooks/userHooks";

const Users = () => {
  const handle: FullScreenHandle = useFullScreenHandle();

  const { data: users } = useGetUsersQuery();

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
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
      <div className="grid grid-cols-12">
        <Sidebar />

        <div className="p-4 col-span-10">
          <div className="p-2 rounded-lg">
            <div className="overflow-x-auto">
              <table className="table table-xs font-poppins">
                <thead>
                  <tr>
                    <th></th>
                    <th>Avatar</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Created</th>
                    <th>Is Admin</th>
                    <th>Action</th>
                  </tr>
                </thead>
                {users?.map((item, index) => {
                  return (
                    <tbody>
                      <tr>
                        <th>{index + 1}</th>
                        <td>{item.username}</td>
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                        <td>{item.createdAt}</td>
                        <td>{item.isAdmin ? <span className="badge badge-success text-success-content">true</span> : <span className="badge badge-warning text-warning-content">false</span>}</td>
                        {item.isAdmin ? null : (
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
                        )}
                      </tr>
                    </tbody>
                  );
                })}
                <tfoot>
                  <tr>
                    <th></th>
                    <th>Avatar</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Created</th>
                    <th>Is Admin</th>
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

export default Users;
