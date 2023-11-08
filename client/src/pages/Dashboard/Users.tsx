import Navbar from "../../layouts/Navbar";
import Sidebar from "../../components/Dashboard/Sidebar";
import SidebarButton from "../../components/Dashboard/SidebarButton";
import UsersTable from "../../components/Dashboard/UsersTable";

const Users = () => {
  return (
    <div>
      <Navbar/>
      <hr></hr>
      <SidebarButton />
      <div className="grid grid-cols-12">
        <Sidebar />
        <UsersTable />
      </div>
    </div>
  );
};

export default Users;
