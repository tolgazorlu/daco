import { useGetUsersQuery } from "../../hooks/userHooks";

const UsersTable = () => {
  const { data: users } = useGetUsersQuery();

  return (
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
                    <td>
                      {item.isAdmin ? (
                        <span className="badge badge-success text-success-content">
                          true
                        </span>
                      ) : (
                        <span className="badge badge-warning text-warning-content">
                          false
                        </span>
                      )}
                    </td>
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
  );
};

export default UsersTable;
