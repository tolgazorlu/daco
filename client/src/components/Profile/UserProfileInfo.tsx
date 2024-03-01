/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useState } from "react";
import { User } from "../../contexts/User";
import UpdateUserProfileModal from "./UpdateUserProfileModal";
import ChangePasswordModal from "./ChangePasswordModal";

const UserProfileInfo = () => {
    const { state } = useContext(User);
    const { userInfo } = state;
    const [day, setDay] = useState<number>(0);
    const [registerAt, setRegisterAt] = useState<string>("--------------");

    useEffect(() => {
        if (userInfo) {
            setDay(userInfo.currentDay || 0);
            const date = userInfo.createdAt
                ? userInfo.createdAt.split("T")[0]
                : null;
            setRegisterAt(date || "--------------");
        }
    }, [userInfo]);

    return (
        <>
            {userInfo && (
                <>
                    <div className="stats">
                        <div className="stat flex justify-center items-center min-w-24">
                            <img
                                src={userInfo?.avatar}
                                alt={userInfo?.username}
                                className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
                            />
                        </div>
                        <div className="stat">
                            <div className="stat-figure text-primary">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="inline-block w-8 h-8 stroke-current"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                    />
                                </svg>
                            </div>
                            <div className="stat-title">You're in</div>
                            <div className="stat-value text-primary">
                                {day}. Day
                            </div>
                            <div className="stat-desc">You're amazing!</div>
                        </div>

                        <div className="stat">
                            <div className="stat-figure text-secondary">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="inline-block w-8 h-8 stroke-current"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                                    />
                                </svg>
                            </div>
                            <div className="stat-title">Created At</div>
                            <div className="stat-value text-secondary">
                                {registerAt}
                            </div>
                            <div className="stat-desc">
                                You created your account this date!
                            </div>
                        </div>
                    </div>

                    <div className="stats bg-base-300 shadow-md">
                        <div className="stat">
                            <div className="stat-value text-base">Username</div>
                            <div className="stat-title text-primary">
                                {userInfo?.username}
                            </div>
                            <div className="stat-actions flex gap-2">
                                <button
                                    onClick={() => {
                                        let el: any =
                                            document.getElementById(
                                                "update-user-modal",
                                            )!;
                                        el.showModal();
                                    }}
                                    className="btn btn-sm btn-primary text-primary-content hover:text-primary-content/50"
                                >
                                    Update Profile
                                </button>
                                <UpdateUserProfileModal />
                                <button
                                    onClick={() => {
                                        let el: any = document.getElementById(
                                            "change-password-modal",
                                        )!;
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
                </>
            )}
        </>
    );
};

export default UserProfileInfo;
