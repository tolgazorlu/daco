/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "react-toastify";
import {
    useDeleteProblemMutation,
    useGetProblemsQuery,
} from "../../hooks/problemHooks";
import { getError } from "../../utils/getError";
import { ApiError } from "../../types/ApiError";
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
                <div className="p-2 stats shadow-lg border border-base-300">
                    <div className="stat overflow-x-auto flex flex-col gap-4">
                        <div className="stat-title">All Problems</div>
                        <table className="table table-xs font-poppins table-zebra">
                            <div className="alert flex justify-center">
                                <span className="loading loading-lg"></span>
                            </div>
                        </table>
                    </div>
                </div>
            ) : error ? (
                <div className="p-2 stats shadow-lg border border-base-300">
                    <div className="stat overflow-x-auto flex flex-col gap-4">
                        <div className="stat-title">All Problems</div>
                        <table className="table table-xs font-poppins table-zebra">
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
                        </table>
                    </div>
                </div>
            ) : (
                <div className="p-2 stats shadow-lg border border-base-300">
                    <div className="stat overflow-x-auto flex flex-col gap-4">
                        <div className="stat-title">All Problems</div>
                        <table className="table table-xs font-poppins table-zebra">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Day</th>
                                    <th>Title</th>
                                    <th>Answer</th>
                                    <th>Slug</th>
                                    <th>Difficulty</th>
                                </tr>
                            </thead>
                            {problems?.map((item) => {
                                return (
                                    <tbody key={item._id}>
                                        <tr>
                                            <td>
                                                <span className="badge">
                                                    {item.sequence}
                                                </span>
                                            </td>
                                            <td>000{item.day}</td>
                                            <td>{item.title}</td>
                                            <td>{item.answer}</td>
                                            <td>{item.slug}</td>
                                            <td
                                                className={
                                                    item.level == "easy"
                                                        ? "text-success"
                                                        : item.level == "medium"
                                                          ? "text-warning"
                                                          : "text-error"
                                                }
                                            >
                                                {item.level}
                                            </td>
                                            <td className="flex gap-1 h-12 items-center float-right">
                                                <a
                                                    href={`/question/${item.slug}`}
                                                    className="btn btn-xs btn-info text-info-content hover:bg-info/50"
                                                >
                                                    Detail
                                                </a>
                                                <a
                                                    className="btn btn-xs btn-warning text-warning-content hover:bg-warning/50"
                                                    href={`/question/${item.slug}/edit`}
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
                                                    className="btn btn-xs btn-error text-error-content hover:bg-error/50"
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
                                                            Do you want to
                                                            delete this problem?
                                                            You can not take it
                                                            back the process!
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
                                        </tr>
                                    </tbody>
                                );
                            })}
                            <tfoot>
                                <tr>
                                    <th></th>
                                    <th>Day</th>
                                    <th>Date</th>
                                    <th>Title</th>
                                    <th>Answer</th>
                                    <th>Slug</th>
                                    <th>Difficulty</th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProblemsTable;
