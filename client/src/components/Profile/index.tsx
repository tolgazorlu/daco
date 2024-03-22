import { ToastContainer } from "react-toastify";
import UserProfileInfo from "./UserProfileInfo";
import UserMainStats from "./UserMainStats";
import UserSolvedProblemsTable from "./UserSolvedProblemsTable";
import Layout from "../Layouts";
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
            <div className="px-4 py-8 lg:px-24 sm:ml-64 mt-16 flex flex-col gap-4">
                <UserProfileInfo />
                <UserMainStats />
                <UserSolvedProblemsTable />
            </div>
        </div>
    );
};

export default Profile;
