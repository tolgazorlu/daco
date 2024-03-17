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
                    <div className="stats shadow-lg border border-base-300">
                        <div className="stat hidden md:flex justify-center items-center min-w-[12em] shadow-lg">
                            <img
                                src={userInfo?.avatar}
                                alt={userInfo?.username}
                                className="w-24 rounded-full ring ring-neutral"
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
                                        d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"
                                    />
                                </svg>
                            </div>
                            <div className="stat-title">Username</div>
                            <div className="stat-value text-primary">
                                {userInfo.username}
                            </div>
                            <div className="stat-desc">
                                You can change profile information here!
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

                    <div className="stats shadow-lg border border-base-300">
                        <div className="stat shadow-lg">
                            <div className="stat-figure text-accent">
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
                                        d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z"
                                    />
                                </svg>
                            </div>
                            <div className="stat-title">You're in</div>
                            <div className="stat-value text-accent">
                                {day}. Day
                            </div>
                            <div className="stat-desc">You're amazing!</div>
                        </div>

                        <div className="hidden md:stat">
                            <div className="stat-figure text-accent">
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
                            <div className="stat-value text-accent">
                                {registerAt}
                            </div>
                            <div className="stat-desc">
                                You created your account this date!
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default UserProfileInfo;
