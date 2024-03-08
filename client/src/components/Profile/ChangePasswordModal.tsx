/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { getError } from "../../utils/getError";
import { ApiError } from "../../types/ApiError";
import { toast } from "react-toastify";
import { useChangePasswordMutation } from "../../hooks/userHooks";

const ChangePasswordModal = () => {
    const { mutateAsync: changePassword, isLoading } =
        useChangePasswordMutation();

    const [currentPassword, setCurrentPassword] = useState<string>("");
    const [newPassword, setNewPassword] = useState<string>("");
    const [confirmNewPassword, setConfirmNewPassword] = useState<string>("");

    const UpdateUserHandler = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (newPassword == confirmNewPassword) {
            try {
                await changePassword({
                    currentPassword: currentPassword,
                    newPassword: newPassword,
                });
                toast.success("password changed!");
            } catch (err) {
                toast.error(getError(err as ApiError));
            }
        } else {
            toast.error("passwords not matching!");
        }
    };

    return (
        <dialog id="change-password-modal" className="modal">
            {/* <!-- Modal content --> */}
            <div className="modal-box">
                {/* <!-- Modal header --> */}
                <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b border-base-content sm:mb-5">
                    <span className="text-lg font-semibold font-poppins">
                        Password Change
                    </span>
                    <button
                        type="button"
                        className="rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                        onClick={() => {
                            let el: any = document.getElementById(
                                "change-password-modal",
                            )!;
                            el.close();
                        }}
                    >
                        <svg
                            aria-hidden="true"
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>

                {/* FORM */}

                <form action="#" className="flex flex-col gap-4">
                    <div>
                        <label className="">Old Password</label>
                        <div className="input input-bordered flex items-center gap-2 mt-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="w-4 h-4 opacity-70"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <input
                                type="password"
                                name="oldPassword"
                                id="oldPassword"
                                value={currentPassword}
                                onChange={(e) =>
                                    setCurrentPassword(e.target.value)
                                }
                                className="grow bg-base-100"
                                placeholder="********"
                            />
                        </div>
                    </div>
                    <div>
                        <label>New Password</label>
                        <label className="input input-bordered flex items-center gap-2 mt-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="w-4 h-4 opacity-70"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <input
                                type="password"
                                name="newPassword"
                                id="newPassword"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                className="grow bg-base-100"
                                placeholder="********"
                            />
                        </label>
                    </div>
                    <div>
                        <label>Confirm New Password</label>
                        <label className="input input-bordered flex items-center gap-2 mt-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="w-4 h-4 opacity-70"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <input
                                type="password"
                                name="confirmNewPassword"
                                id="confirmNewPassword"
                                value={confirmNewPassword}
                                onChange={(e) =>
                                    setConfirmNewPassword(e.target.value)
                                }
                                className="grow bg-base-100"
                                placeholder="********"
                            />
                        </label>
                    </div>
                    <button
                        className="btn btn-sm font-poppins bg-primary text-primary-content w-full"
                        onClick={UpdateUserHandler}
                    >
                        {isLoading ? (
                            <span className="loading loading-spinner"></span>
                        ) : (
                            <>Change Password</>
                        )}
                    </button>
                </form>
            </div>
        </dialog>
    );
};

export default ChangePasswordModal;
