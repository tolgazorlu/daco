import { Helmet } from "react-helmet-async";
import UsersTable from "../../components/Dashboard/UsersTable";
import Layout from "../../layouts/Layout";

const Users = () => {
  return (
    <>
      <Helmet>
        <title>Admin cockpit for Users</title>
      </Helmet>
      <Layout />
      <div className="p-4 sm:ml-64 mt-16 flex flex-col gap-4">
        <UsersTable />
      </div>
    </>
  );
};

export default Users;
