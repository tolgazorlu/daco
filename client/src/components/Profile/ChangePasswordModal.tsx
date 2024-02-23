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
          <h3 className="text-lg font-semibold">Change Password</h3>
          <button
            type="button"
            className="rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            onClick={() => {
              let el: any = document.getElementById("change-password-modal")!;
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

        <form action="#">
          <div className="grid gap-4 mb-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="oldPassword"
                className="block mb-2 text-sm font-medium"
              >
                Old Password
              </label>
              <input
                type="password"
                name="oldPassword"
                id="oldPassword"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="input input-bordered input-sm input-primary w-full max-w-xs"
                placeholder="********"
              />
            </div>
            <div>
              <label
                htmlFor="newPassword"
                className="block mb-2 text-sm font-medium"
              >
                New Password
              </label>
              <input
                type="password"
                name="newPassword"
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="input input-bordered input-sm input-primary w-full max-w-xs"
                placeholder="********"
              />
            </div>
            <div>
              <label
                htmlFor="confirmNewPassword"
                className="block mb-2 text-sm font-medium"
              >
                Confirm New Password
              </label>
              <input
                type="password"
                name="confirmNewPassword"
                id="confirmNewPassword"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
                className="input input-bordered input-sm input-primary w-full max-w-xs"
                placeholder="********"
              />
            </div>
          </div>
          <button
            className="float-right btn btn-sm bg-success text-success-content hover:bg-success/50 w-full"
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
