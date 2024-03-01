/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from "react";
import { User } from "../../contexts/User";
import UpdateUserProfileModal from "./UpdateUserProfileModal";
import ChangePasswordModal from "./ChangePasswordModal";

const UserProfileInfo = () => {
  const { state } = useContext(User);
  const { userInfo } = state;

  return (
    <div className="stats bg-base shadow-md">
      <div className="stat min-w-max">
        <div className="flex justify-center lg:justify-start items-center gap-8">
          <img
            src={userInfo?.avatar}
            alt={userInfo?.username}
            className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
          ></img>
          <div className="stat-value text-primary hidden lg:block">
            {userInfo?.username}
          </div>
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
          <button
            onClick={() => {
              let el: any = document.getElementById("change-password-modal")!;
              el.showModal();
            }}
            className="btn btn-sm btn-primary text-primary-content hover:text-primary-content/50"
          >
            Change Password
          </button>
          <ChangePasswordModal />
        </div>
      </div>
    </div>
  );
};

export default UserProfileInfo;