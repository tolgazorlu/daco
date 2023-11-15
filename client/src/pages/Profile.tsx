import { ToastContainer } from "react-toastify";
import UserProfileInfo from "../components/User/UserProfileInfo";
import UserMainStats from "../components/User/UserMainStats";
import UserSolvedProblemsTable from "../components/User/UserSolvedProblemsTable";
import Layout from "../layouts/Layout";
import { Helmet } from "react-helmet-async";

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
        theme="colored"
      />
      <Helmet>
        <title>This is your profile!</title>
      </Helmet>
      <Layout />
      <div className="p-4 sm:ml-64 mt-16 flex flex-col gap-4">
        <UserProfileInfo />
        <UserMainStats />
        <UserSolvedProblemsTable />
      </div>
    </div>
  );
};

export default Profile;
