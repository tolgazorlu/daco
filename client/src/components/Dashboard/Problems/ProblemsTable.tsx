/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "react-toastify";
import {
    useDeleteProblemMutation,
    useGetProblemsQuery,
} from "../../../hooks/problemHooks";
import { getError } from "../../../utils/getError";
import { ApiError } from "../../../types/ApiError";
import { useState } from "react";

const ProblemsTable = () => {
    const { data: problems, isLoading, error, refetch } = useGetProblemsQuery();
    const { mutateAsync: deleteProblem } = useDeleteProblemMutation();

    const [deleteItemId, setDeleteItemId] = useState<string>("");

    const deleteProblemHandler = async (id: string) => {
        try {
            await deleteProblem(id);
            refetch;
            toast.success("Problem deleted!");
        } catch (error) {
            toast.error(getError(error as ApiError));
        }
    };

    return (
        <>
            {isLoading ? (
                <div className="shadow-lg border border-base-300">
                    <div className="stat overflow-x-auto flex flex-col gap-4">
                        <div className="stat-title">All Problems</div>
                        <div className="alert flex justify-center">
                            <span className="loading loading-lg"></span>
                        </div>
                    </div>
                </div>
            ) : error ? (
                <div className="shadow-lg border border-base-300">
                    <div className="stat overflow-x-auto flex flex-col gap-4">
                        <div className="stat-title font-bold">All Problems</div>
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
                    <div className="stat-title font-bold">All Problems</div>
                    <div className="relative overflow-x-auto shadow-md sm:rounded">
                        <table className="w-full text-sm text-left shadow-lg rounded">
                            {problems?.length == 0 ? (
                                <tbody>
                                    <tr>
                                        <td role="alert" className="alert">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                className="stroke-info shrink-0 w-6 h-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                ></path>
                                            </svg>
                                            <span>Today's Free!</span>
                                        </td>
                                    </tr>
                                </tbody>
                            ) : (
                                <>
                                    <thead className="text-xs uppercase bg-neutral text-neutral-content">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Day
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Title
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Answer
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Slug
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Difficulty
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {problems?.map((item, index) => {
                                            return (
                                                <tr
                                                    key={index}
                                                    className="border-b border-base-300 bg-base-200"
                                                >
                                                    <th className="px-6 py-4 font-medium">
                                                        {item.day}
                                                    </th>

                                                    <th className="px-6 py-4 font-medium">
                                                        {item.title}
                                                    </th>
                                                    <th className="px-6 py-4 font-medium">
                                                        {item.answer}
                                                    </th>
                                                    <th
                                                        scope="row"
                                                        className="px-6 py-4 font-medium"
                                                    >
                                                        {item.slug}
                                                    </th>
                                                    <th
                                                        scope="row"
                                                        className={
                                                            item.level == "easy"
                                                                ? "text-success px-6 py-4 font-medium"
                                                                : item.level ==
                                                                    "medium"
                                                                  ? "text-warning px-6 py-4 font-medium"
                                                                  : "text-error px-6 py-4 font-medium"
                                                        }
                                                    >
                                                        {item.level}
                                                    </th>
                                                    <td className="flex gap-1 items-center">
                                                        <td className="py-4">
                                                            <a
                                                                href={`/question/${item.slug}`}
                                                                className="font-medium text-info hover:underline"
                                                            >
                                                                Detail
                                                            </a>
                                                            <a
                                                                href={`/question/${item.slug}/edit`}
                                                                className="font-medium text-warning hover:underline ml-2"
                                                            >
                                                                Edit
                                                            </a>
                                                            <button
                                                                onClick={() => {
                                                                    let el: any =
                                                                        document.getElementById(
                                                                            "my_modal_1",
                                                                        )!;
                                                                    el.showModal();
                                                                    setDeleteItemId(
                                                                        item._id,
                                                                    );
                                                                }}
                                                                className="font-medium text-error hover:underline ml-2"
                                                            >
                                                                Delete
                                                            </button>
                                                            {/* DELETE */}

                                                            <dialog
                                                                id="my_modal_1"
                                                                className="modal modal-bottom sm:modal-middle"
                                                            >
                                                                <div className="modal-box">
                                                                    <h3 className="font-bold text-lg">
                                                                        Attention!
                                                                    </h3>
                                                                    <p className="py-4">
                                                                        Do you
                                                                        want to
                                                                        delete
                                                                        this
                                                                        problem?
                                                                        You can
                                                                        not take
                                                                        it back
                                                                        the
                                                                        process!
                                                                    </p>
                                                                    <div className="modal-action">
                                                                        <form className="flex">
                                                                            <button
                                                                                className="btn btn-error mr-2 text-error-content"
                                                                                onClick={() =>
                                                                                    deleteProblemHandler(
                                                                                        deleteItemId,
                                                                                    )
                                                                                }
                                                                            >
                                                                                Delete
                                                                            </button>
                                                                            <button className="btn">
                                                                                Close
                                                                            </button>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                            </dialog>
                                                        </td>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </>
                            )}
                        </table>
                    </div>
                </>
            )}
        </>
    );
};

export default ProblemsTable;
