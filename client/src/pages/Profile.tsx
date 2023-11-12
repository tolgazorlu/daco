import Navbar from "../layouts/Navbar";
import Sidebar from "../components/Dashboard/Sidebar";
import { ToastContainer } from "react-toastify";
import UserProfileInfo from "../components/User/UserProfileInfo";
import UserMainStats from "../components/User/UserMainStats";
import UserSolvedProblemsTable from "../components/User/UserSolvedProblemsTable";

const Profile = () => {
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
      <Navbar />
      <div>
        <Sidebar />
        <div className="p-4 sm:ml-64 mt-16 flex flex-col gap-4">
          <UserProfileInfo />
          <UserMainStats />
          <UserSolvedProblemsTable />
        </div>
      </div>
    </div>
  );
};

export default Profile;
