import UsersTable from "../../components/Dashboard/UsersTable";
import Layout from "../../layouts/Layout";

const Users = () => {
  return (
    <div>
      <Layout />
      <div className="px-4 py-8 sm:ml-64 mt-16 flex flex-col gap-4">
        <UsersTable />
      </div>
    </div>
  );
};

export default Users;
