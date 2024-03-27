/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {
    useDeleteUserMutation,
    useGetUsersQuery,
} from "../../../hooks/userHooks";
import { toast } from "react-toastify";
import { getError } from "../../../utils/getError";
import { ApiError } from "../../../types/ApiError";

const UsersTable = () => {
    const { data: users, isLoading, error, refetch } = useGetUsersQuery();
    const { mutateAsync: deleteUser, isLoading: loadingDelete } =
        useDeleteUserMutation();

    const [chooseUser, setChooseUser] = useState<string>("");

    const userDeleteHandler = async (id: string) => {
        try {
            await deleteUser(id);
            refetch();
            toast.success("User deleted successfully");
        } catch (error) {
            toast.error(getError(error as ApiError));
        }
    };

    return (
        <>
            {isLoading ? (
                <div className="stats shadow-lg border border-base-300">
                    <div className="stat overflow-x-auto flex flex-col gap-4">
                        <div className="alert flex justify-center">
                            <span className="loading loading-lg"></span>
                        </div>
                    </div>
                </div>
            ) : error ? (
                <div className="stats shadow-lg border border-base-300">
                    <div className="stat overflow-x-auto flex flex-col gap-4">
                        <div className="alert alert-error">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="stroke-current shrink-0 h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <span>Error! Something went wrong.</span>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <div className="stat-title font-bold">All Users</div>
                    <div className="relative overflow-x-auto shadow-md sm:rounded">
                        <table className="w-full text-sm text-left rtl:text-right">
                            <thead className="text-xs uppercase bg-neutral text-neutral-content">
                                <tr>
                                    <th scope="col" className="p-4">
                                        <div className="flex items-center">
                                            <input
                                                id="checkbox-all-search"
                                                type="checkbox"
                                                className="w-4 h-4 rounded"
                                            />
                                            <label
                                                htmlFor="checkbox-all-search"
                                                className="sr-only"
                                            >
                                                checkbox
                                            </label>
                                        </div>
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        User
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Solved
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Created At
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Role
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            {users?.map((item) => {
                                return (
                                    <tbody key={item._id}>
                                        <tr className="border-b border-base-300">
                                            <td className="w-4 p-4">
                                                <div className="flex items-center">
                                                    <input
                                                        id="checkbox-table-search-1"
                                                        type="checkbox"
                                                        className="w-4 h-4 rounded"
                                                    />
                                                    <label
                                                        htmlFor="checkbox-table-search-1"
                                                        className="sr-only"
                                                    >
                                                        checkbox
                                                    </label>
                                                </div>
                                            </td>
                                            <th
                                                scope="row"
                                                className="flex items-center px-6 py-4 whitespace-nowrap"
                                            >
                                                <img
                                                    className="w-10 h-10 rounded-full"
                                                    src={item.avatar}
                                                    alt={item.username}
                                                />
                                                <div className="ps-3">
                                                    <div className="text-base font-semibold">
                                                        {item.username}
                                                    </div>
                                                    <div className="font-normal text-base-content/50">
                                                        {item.email}
                                                    </div>
                                                </div>
                                            </th>
                                            <td className="px-6 py-4">
                                                Total:{" "}
                                                {item.solvedProblems.length}
                                            </td>
                                            <td className="px-6 py-4">
                                                {item.createdAt}
                                            </td>
                                            <td className="px-6 py-4">
                                                {item.isAdmin ? (
                                                    <span className="text-primary">
                                                        Admin
                                                    </span>
                                                ) : (
                                                    <span>User</span>
                                                )}
                                            </td>
                                            <td className="px-6 py-4">
                                                <button
                                                    onClick={() => {
                                                        let el: any =
                                                            document.getElementById(
                                                                "my_modal_1",
                                                            )!;
                                                        el.showModal();
                                                        setChooseUser(item._id);
                                                    }}
                                                    className="text-error hover:underline ml-2"
                                                >
                                                    Delete
                                                </button>
                                                {/* DELETE MODAL*/}
                                                <dialog
                                                    id="my_modal_1"
                                                    className="modal modal-bottom sm:modal-middle"
                                                >
                                                    <div className="modal-box">
                                                        <h3 className="font-bold text-lg">
                                                            Attention!
                                                        </h3>
                                                        <p className="py-4">
                                                            Do you want to
                                                            delete this user?
                                                            You can not take it
                                                            back the process!
                                                        </p>
                                                        <div className="modal-action">
                                                            <form className="flex">
                                                                <button
                                                                    className="btn btn-error mr-2 text-error-content"
                                                                    onClick={() =>
                                                                        userDeleteHandler(
                                                                            chooseUser,
                                                                        )
                                                                    }
                                                                >
                                                                    {loadingDelete ? (
                                                                        <span className="loading"></span>
                                                                    ) : (
                                                                        <span>
                                                                            Delete
                                                                        </span>
                                                                    )}
                                                                </button>
                                                                <button className="btn">
                                                                    Close
                                                                </button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </dialog>
                                            </td>
                                        </tr>
                                    </tbody>
                                );
                            })}
                        </table>
                    </div>
                </>
            )}
        </>
    );
};

export default UsersTable;
