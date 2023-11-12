import Navbar from "../../layouts/Navbar";
import Sidebar from "../../components/Dashboard/Sidebar";
import UsersTable from "../../components/Dashboard/UsersTable";

const Users = () => {
  return (
    <div>
      <Navbar/>
      <Sidebar />
      <div className="px-4 py-8 sm:ml-64 mt-16 flex flex-col gap-4">
        <UsersTable />
      </div>
    </div>
  );
};

export default Users;
