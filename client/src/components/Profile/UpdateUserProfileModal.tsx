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
    //     useUploadAvatarMutation();
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
                    <span className="text-lg font-semibold font-poppins">
                        Update User
                    </span>
                    <button
                        type="button"
                        className="rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                        onClick={() => {
                            let el: any =
                                document.getElementById("update-user-modal")!;
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

                <form action="#" className="grid gap-6 mb-4">
                    <div className="grid grid-cols-4 items-center">
                        <img src={avatar} className="h-24 w-24 rounded-md" />
                        <div className="col-span-3 flex flex-col gap-4">
                            <input
                                onChange={(event: any) => fileSelected(event)}
                                type="file"
                                accept="image/*"
                                className="file-input file-input-bordered w-full"
                            />
                            <button
                                className="btn btn-sm font-poppins bg-neutral text-neutral-content w-full"
                                onClick={uploadImageHandler}
                            >
                                {/* {uploadAvatarLoading ? (
                                    <span className="btn btn-sm font-poppins bg-neutral text-neutral-content w-full loading loading-spinner"></span>
                                ) : (
                                    <span>Upload image</span>
                                )} */}
                                Set Image
                            </button>
                        </div>
                    </div>
                    <div className="flex gap-2 flex-col">
                        <div>
                            <label>Username</label>
                            <label className="input input-bordered flex items-center gap-2 mt-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="w-4 h-4 opacity-70"
                                >
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                                </svg>
                                <input
                                    type="text"
                                    className="grow bg-base-100"
                                    name="username"
                                    value={username}
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                    placeholder="username"
                                />
                            </label>
                        </div>
                        <div>
                            <label>Email</label>
                            <label className="input input-bordered flex items-center gap-2 mt-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="w-4 h-4 opacity-70"
                                >
                                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                </svg>
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="grow bg-base-100"
                                    placeholder="Email"
                                />
                            </label>
                        </div>
                    </div>
                    <button
                        className="btn btn-sm font-poppins bg-primary text-primary-content w-full"
                        onClick={UpdateUserHandler}
                    >
                        {isLoading ? (
                            <span className="btn btn-sm font-poppins bg-primary text-primary-content w-full loading loading-spinner"></span>
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
