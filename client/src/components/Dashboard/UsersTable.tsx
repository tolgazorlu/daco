import { useGetUsersQuery } from "../../hooks/userHooks";

const UsersTable = () => {
  const { data: users } = useGetUsersQuery();

  return (
    <div className="p-4 col-span-10">
      <div className="p-2 rounded-lg">
        <div className="overflow-x-auto">
          <table className="table table-xs">
            <caption className="text-left text-xl font-bold mb-4">
              Users
            </caption>
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Avatar</th>
                <th>Total solved</th>
                <th>Created</th>
                <th>Role</th>
                <th></th>
              </tr>
            </thead>
            {users?.map((item) => {
              return (
                <tbody>
                  <tr>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={item.avatar}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{item.username}</div>
                          <div className="text-sm opacity-50">{item.email}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="btn btn-xs btn-success text-success-content">
                        {item.solvedProblems.length}
                      </span>
                    </td>
                    <td>{item.createdAt}</td>
                    <td>
                      {item.isAdmin ? (
                        <span className="badge badge-primary text-primary-content">
                          Admin
                        </span>
                      ) : (
                        <span className="badge">User</span>
                      )}
                    </td>
                    {item.isAdmin ? (
                      <td className="h-16"></td>
                    ) : (
                      <td className="flex gap-1 h-16 items-center">
                        <button className="btn btn-xs btn-warning text-warning-content hover:bg-warning/50">
                          Edit
                        </button>
                        <button className="btn btn-xs btn-error text-error-content hover:bg-error/50">
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
                <th>Total solved</th>
                <th>Created</th>
                <th>Role</th>
                <th></th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UsersTable;
