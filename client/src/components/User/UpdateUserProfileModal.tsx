/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useState } from "react";
import { getError } from "../../utils/getError";
import { ApiError } from "../../types/ApiError";
import { useUpdateUserMutation } from "../../hooks/userHooks";
import { toast } from "react-toastify";
import { User } from "../../contexts/User";

const UpdateUserProfileModal = () => {

  const { mutateAsync: updateUser, isLoading } = useUpdateUserMutation();
  const {state} = useContext(User)
  const {userInfo} = state

  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [avatar, setAvatar] = useState<string>("");

  const UpdateUserHandler = async () => {
    try {
      await updateUser({
        username: username,
        email: email,
        avatar: avatar,
      });
    } catch (err) {
      toast.error(getError(err as ApiError));
    }
  };

  useEffect(() => {
    if(userInfo){
        setUsername(userInfo.username)
        setEmail(userInfo.email)
        setAvatar(userInfo.avatar)
      }
  }, [userInfo])

  return (
    <dialog id="update-user-modal" className="modal">
      {/* <!-- Modal content --> */}
      <div className="modal-box">
        {/* <!-- Modal header --> */}
        <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b border-base-content sm:mb-5">
          <h3 className="text-lg font-semibold">{isLoading ? (<span className="loading loading-spinner loading-lg"></span>) : (<>Update Profile</>)}</h3>
          <button
            type="button"
            className="rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            onClick={() => {
              let el: any = document.getElementById("update-user-modal")!;
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
                htmlFor="username"
                className="block mb-2 text-sm font-medium"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="input input-bordered input-sm input-primary w-full max-w-xs"
                placeholder="username"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered input-sm input-primary w-full max-w-xs"
                placeholder="user@mail.com"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">Avatar</label>
              <input
                className="input input-bordered input-sm input-primary w-full max-w-xs"
                placeholder="https:avatar.png"
                value={avatar}
                onChange={(e) => setAvatar(e.target.value)}
              ></input>
            </div>
          </div>
          <button
            className="float-right btn btn-sm bg-success text-success-content hover:bg-success/50"
            onClick={() => UpdateUserHandler()}
          >
            Update User
          </button>
        </form>
      </div>
    </dialog>
  );
};

export default UpdateUserProfileModal;
