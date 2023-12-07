/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useState } from "react";
import { getError } from "../../utils/getError";
import { ApiError } from "../../types/ApiError";
import {
  useUpdateUserMutation,
  // useUploadAvatarMutation,
} from "../../hooks/userHooks";
import { toast } from "react-toastify";
import { User } from "../../contexts/User";
import axios from "axios";

async function postImage({ image }: any) {
  const formData = new FormData();
  console.log(formData);
  formData.append("image", image);
  const result = await axios.post(
    "https://daco.onrender.com/api/user/images",
    formData,
    {
      headers: { "Content-Type": "multipart/form-data" },
    },
  );
  return result.data;
}

const UpdateUserProfileModal = () => {
  const { mutateAsync: updateUser, isLoading } = useUpdateUserMutation();
  // const { mutateAsync: postImage, isLoading: uploadAvatarLoading } =
  //   useUploadAvatarMutation();
  const { state, dispatch } = useContext(User);
  const { userInfo } = state;

  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [avatar, setAvatar] = useState<string>("");

  const [file, setFile] = useState<string>();

  const UpdateUserHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const data = await updateUser({
        username: username,
        email: email,
        avatar: avatar,
      });
      dispatch({ type: "USER_SIGNIN", payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));
      toast.success("profile updated!");
    } catch (err) {
      toast.error(getError(err as ApiError));
    }
  };

  useEffect(() => {
    if (userInfo) {
      setUsername(userInfo.username);
      setEmail(userInfo.email);
      setAvatar(userInfo.avatar);
    }
  }, [userInfo]);

  const uploadImageHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const result = await postImage({ image: file });
      setAvatar(`https://daco.onrender.com/api/user${result.imagePath}`);
      toast.success("profile picture uploaded!");
    } catch (error) {
      toast.error(getError(error as ApiError));
    }
  };

  const fileSelected = (event: { target: { files: any[] } }) => {
    const file = event.target.files[0];
    setFile(file);
  };

  return (
    <dialog id="update-user-modal" className="modal">
      {/* <!-- Modal content --> */}
      <div className="modal-box">
        {/* <!-- Modal header --> */}
        <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b border-base-content sm:mb-5">
          <h3 className="text-lg font-semibold">Update User</h3>
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
          <div className="grid gap-4 mb-4">
            <div className="flex items-center justify-center flex-col gap-4">
              <img src={avatar} className="h-32 w-32" />
              <input
                onChange={(event: any) => fileSelected(event)}
                type="file"
                accept="image/*"
                className="file-input file-input-bordered file-input-primary file-input-sm w-full"
              />
              <button
                className="float-right btn btn-sm bg-success text-success-content hover:bg-success/50 w-full"
                onClick={uploadImageHandler}
              >
                {/* {uploadAvatarLoading ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  <span>Upload image</span>
                )} */}
                Upload Image
              </button>
            </div>
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
                className="input input-bordered input-sm input-primary w-full"
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
                className="input input-bordered input-sm input-primary w-full"
                placeholder="user@mail.com"
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
              <>Update User</>
            )}
          </button>
        </form>
      </div>
    </dialog>
  );
};

export default UpdateUserProfileModal;
