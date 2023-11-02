import { FullScreenHandle, useFullScreenHandle } from "react-full-screen";
import Navbar from "../layouts/Navbar";
import Sidebar from "../components/Dashboard/Sidebar";
import DailyProblemsTable from "../components/Dashboard/DailyProblemsTable";
import { ToastContainer } from "react-toastify";
import SidebarButton from "../components/Dashboard/SidebarButton";
import UserProfileInfo from "../components/User/UserProfileInfo";
import UserMainStats from "../components/User/UserMainStats";

const Profile = () => {
  const handle: FullScreenHandle = useFullScreenHandle();

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Navbar fullscreenHandle={handle} />
      <hr className="border-base-200"></hr>
      <SidebarButton />
      <div className="bg-white grid grid-cols-12">
        <Sidebar />
        <div className="p-4 col-span-10 bg-base-100 flex flex-col gap-4">
          <UserProfileInfo />
          <UserMainStats />
          <DailyProblemsTable />
        </div>
      </div>
    </div>
  );
};

export default Profile;
