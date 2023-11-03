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
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            {users?.map((item, index) => {
              return (
                <tbody>
                  <tr>
                    <th> <span className="badge">{index + 1}</span></th>
                    <td>{item.username}</td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>{item.createdAt}</td>
                    <td>
                      {item.isAdmin ? (
                        <span className="badge badge-success text-success-content">
                          Admin
                        </span>
                      ) : (
                        <span className="badge">
                          User
                        </span>
                      )}
                    </td>
                    {item.isAdmin ? null : (
                      <td className="flex gap-1 h-12 items-center">
                        <button className="btn btn-xs btn-info text-info-content hover:bg-info/50">
                          Detail
                        </button>
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
