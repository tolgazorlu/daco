/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FullScreenHandle, useFullScreenHandle } from "react-full-screen";
import Navbar from "../layouts/Navbar";
import Sidebar from "../components/Dashboard/Sidebar";
import DailyProblemsTable from "../components/Dashboard/DailyProblemsTable";
import { User } from "../contexts/User";
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import UpdateUserProfileModal from "../components/User/UpdateUserProfileModal";
import { ToastContainer } from "react-toastify";

const Profile = () => {
  const handle: FullScreenHandle = useFullScreenHandle();

  const { state } = useContext(User);
  const { userInfo } = state;

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
      {userInfo ? <Helmet>{userInfo?.username}'s Profile</Helmet> : <></>}
      <Navbar fullscreenHandle={handle} />
      <hr className="border-base-200"></hr>
      <button
        data-drawer-target="cta-button-sidebar"
        data-drawer-toggle="cta-button-sidebar"
        aria-controls="cta-button-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
      <div className="bg-white grid grid-cols-12">
        <Sidebar />
        <div className="p-4 col-span-10 bg-base-100 flex flex-col gap-4">
          <div className="stats bg-base shadow-md">
            <div className="stat gap-8 flex items-center">
              <div>
                <img
                  src={userInfo?.avatar}
                  className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
                ></img>
              </div>
              <div className="stat-value text-primary">
                {userInfo?.username}
              </div>
            </div>

            <div className="stat">
              <div className="stat-value text-base">Email</div>
              <div className="stat-title text-primary">{userInfo?.email}</div>
              <div className="stat-actions flex gap-2">
                <button
                  onClick={() => {
                    let el: any = document.getElementById("update-user-modal")!;
                    el.showModal();
                  }}
                  className="btn btn-sm btn-primary text-primary-content hover:text-primary-content/50"
                >
                  Update Profile
                </button>
                <UpdateUserProfileModal />
              </div>
            </div>
          </div>

          <div className="stats bg-primary shadow-md">
            <div className="stat">
              <div className="stat-title text-primary-content">
                Solved Problems
              </div>
              <div className="stat-value text-primary-content">25</div>
              <div className="stat-actions">
                <button
                  className="btn btn-sm btn-primary-content text-primary hover:text-primary/50"
                  onClick={() => {
                    let el: any = document.getElementById("add-product-modal")!;
                    el.showModal();
                  }}
                >
                  Check New Problems
                </button>
              </div>
            </div>

            <div className="stat">
              <div className="stat-title text-primary-content">Total Day</div>
              <div className="stat-value text-primary-content">123</div>
              <div className="stat-actions flex gap-2">
                <button className="btn btn-sm btn-primary-content text-primary hover:text-primary/50">
                  Check Statistics
                </button>
                <button className="btn btn-sm btn-primary-content text-primary hover:text-primary/50">
                  Copy Link
                </button>
              </div>
            </div>
          </div>

          <DailyProblemsTable />
        </div>
      </div>
    </div>
  );
};

export default Profile;
