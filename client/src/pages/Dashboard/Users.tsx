import Navbar from "../../layouts/Navbar";
import Sidebar from "../../components/Dashboard/Sidebar";
import { FullScreenHandle, useFullScreenHandle } from "react-full-screen";
import SidebarButton from "../../components/Dashboard/SidebarButton";
import UsersTable from "../../components/Dashboard/UsersTable";

const Users = () => {
  const handle: FullScreenHandle = useFullScreenHandle();

  

  return (
    <div>
      <Navbar fullscreenHandle={handle} />
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
