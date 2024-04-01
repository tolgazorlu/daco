/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Helmet } from "react-helmet-async";
import Layout from "../../Layouts";
import {
    useDeleteFAQMutation,
    useEditFAQMutation,
    useGetFAQsQuery,
} from "../../../hooks/faqHook";
import AddFAQModal from "./AddFaqModal";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { getError } from "../../../utils/getError";
import { ApiError } from "../../../types/ApiError";

const FAQs = () => {
    const { data: faqs, isLoading, error, refetch } = useGetFAQsQuery();
    const { mutateAsync: deleteFAQ, isLoading: FAQLoading } =
        useDeleteFAQMutation();
    const { mutateAsync: editFAQ } = useEditFAQMutation();

    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [editItemId, setEditItemId] = useState<string>("");

    const [faqId, setFaqId] = useState<string>("");

    const deleteFAQHandler = async (id: string) => {
        try {
            await deleteFAQ(id);
            refetch;
            toast.success("FAQ deleted!");
        } catch (error) {
            toast.error(getError(error as ApiError));
        }
    };

    const editModalLoader = (title: string, description: string) => {
        setTitle(title);
        setDescription(description);
    };

    const editFAQHandler = async () => {
        try {
            await editFAQ({
                id: editItemId,
                title: title,
                description: description,
            });
        } catch (err) {
            console.log(getError(err as ApiError));
        }
    };

    if (isLoading) {
        return (
            <>
                <Helmet>
                    <title>FAQs</title>
                </Helmet>
                <Layout />
                <div className="px-4 py-8 lg:px-24 sm:ml-64 mt-16 flex flex-col gap-4">
                    <div className="breadcrumbs bg-neutral text-neutral-content py-2 px-4 rounded font-poppins">
                        <ul>
                            <li>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-4 h-4 mr-2"
                                >
                                    <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                                    <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                                </svg>
                                <span> Home</span>
                            </li>
                            <li>Admin</li>
                            <li>FAQs</li>
                        </ul>
                    </div>
                    <div className="flex justify-center items-center">
                        <span className="loading loading-lg"></span>
                    </div>
                </div>
            </>
        );
    } else if (error) {
        return (
            <>
                <Helmet>
                    <title>FAQs</title>
                </Helmet>
                <Layout />
                <div className="px-4 py-8 lg:px-24 sm:ml-64 mt-16 flex flex-col gap-4">
                    <div className="breadcrumbs bg-neutral text-neutral-content py-2 px-4 rounded font-poppins">
                        <ul>
                            <li>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-4 h-4 mr-2"
                                >
                                    <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                                    <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                                </svg>
                                <span> Home</span>
                            </li>
                            <li>Admin</li>
                            <li>FAQs</li>
                        </ul>
                    </div>
                    <div className="alert rounded">
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
                        <span className="font-bold">
                            Error! Something went wrong.
                        </span>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <Helmet>
                <title>FAQs</title>
            </Helmet>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                stacked
            />
            <Layout />
            <div className="px-4 py-8 lg:px-24 sm:ml-64 mt-16 flex flex-col gap-4">
                <div className="breadcrumbs bg-neutral text-neutral-content py-2 px-4 rounded font-poppins">
                    <ul>
                        <li>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-4 h-4 mr-2"
                            >
                                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                            </svg>
                            <span> Home</span>
                        </li>
                        <li>Admin</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <button
                    className="btn btn-sm btn-primary text-primary-content hover:text-primary/50 rounded"
                    onClick={() => {
                        let el: any = document.getElementById("add-faq-modal")!;
                        el.showModal();
                    }}
                >
                    Add FAQ
                </button>
                <AddFAQModal />
                <>
                    <div className="stat-title font-bold">FAQ</div>
                    <div className="relative overflow-x-auto shadow-md sm:rounded">
                        <table className="w-full text-sm text-left shadow-lg rounded">
                            {faqs?.length == 0 ? (
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
                                            <span>FAQs is empty</span>
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
                                                Title
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Description
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
                                        {faqs?.map((item, index) => {
                                            return (
                                                <tr
                                                    key={index}
                                                    className="border-b border-base-300 bg-base-200"
                                                >
                                                    <th className="px-6 py-4 font-medium">
                                                        {item.title}
                                                    </th>

                                                    <th className="px-6 py-4 font-medium">
                                                        {item.description}
                                                    </th>
                                                    <th className="px-6 py-4 font-medium flex gap-2">
                                                        <button
                                                            className="font-medium text-warning hover:underline"
                                                            onClick={() => {
                                                                setEditItemId(
                                                                    item._id,
                                                                );
                                                                editModalLoader(
                                                                    item.title,
                                                                    item.description,
                                                                );
                                                                let el: any =
                                                                    document.getElementById(
                                                                        "edit-faq-modal",
                                                                    )!;
                                                                el.showModal();
                                                            }}
                                                        >
                                                            Edit
                                                        </button>

                                                        <dialog
                                                            id="edit-faq-modal"
                                                            className="modal"
                                                        >
                                                            {/* <!-- Modal content --> */}
                                                            <div className="modal-box">
                                                                {/* <!-- Modal header --> */}
                                                                <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b border-base-content sm:mb-5">
                                                                    <h3 className="text-lg font-semibold">
                                                                        Edit Faq
                                                                    </h3>
                                                                    <button
                                                                        type="button"
                                                                        className="rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                                                                        onClick={() => {
                                                                            let el: any =
                                                                                document.getElementById(
                                                                                    "edit-faq-modal",
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
                                                                        <span className="sr-only">
                                                                            Close
                                                                            modal
                                                                        </span>
                                                                    </button>
                                                                </div>

                                                                {/* FORM */}

                                                                <form action="#">
                                                                    <div className="flex flex-col gap-2">
                                                                        <div>
                                                                            <label
                                                                                htmlFor="title"
                                                                                className="block mb-2 text-sm font-medium"
                                                                            >
                                                                                Title
                                                                            </label>
                                                                            <input
                                                                                type="text"
                                                                                name="title"
                                                                                id="title"
                                                                                value={
                                                                                    title
                                                                                }
                                                                                onChange={(
                                                                                    e,
                                                                                ) =>
                                                                                    setTitle(
                                                                                        e
                                                                                            .target
                                                                                            .value,
                                                                                    )
                                                                                }
                                                                                className="input input-bordered flex items-center gap-2 mt-2 w-full rounded"
                                                                                placeholder="FAQ title"
                                                                            />
                                                                        </div>
                                                                        <div className="sm:col-span-2">
                                                                            <label
                                                                                htmlFor="description"
                                                                                className="block mb-2 text-sm font-medium"
                                                                            >
                                                                                Detail
                                                                            </label>
                                                                            <textarea
                                                                                id="description"
                                                                                rows={
                                                                                    4
                                                                                }
                                                                                className="textarea textarea-bordered flex items-center gap-2 mt-2 w-full rounded mb-2"
                                                                                placeholder="Write FAQ description here"
                                                                                value={
                                                                                    description
                                                                                }
                                                                                onChange={(
                                                                                    e,
                                                                                ) =>
                                                                                    setDescription(
                                                                                        e
                                                                                            .target
                                                                                            .value,
                                                                                    )
                                                                                }
                                                                            ></textarea>
                                                                        </div>
                                                                    </div>
                                                                    <button
                                                                        className="float-right btn btn-sm bg-success text-success-content hover:bg-success/50"
                                                                        onClick={() => {
                                                                            editFAQHandler();
                                                                        }}
                                                                    >
                                                                        Edit FAQ
                                                                    </button>
                                                                </form>
                                                            </div>
                                                        </dialog>
                                                        <button
                                                            onClick={() => {
                                                                setFaqId(
                                                                    item._id,
                                                                );
                                                                let el: any =
                                                                    document.getElementById(
                                                                        "faq-delete-modal",
                                                                    )!;
                                                                el.showModal();
                                                            }}
                                                            className="font-medium text-error hover:underline"
                                                        >
                                                            Delete
                                                        </button>
                                                        {/* DELETE */}

                                                        <dialog
                                                            id="faq-delete-modal"
                                                            className="modal modal-bottom sm:modal-middle"
                                                        >
                                                            <div className="modal-box">
                                                                <h3 className="font-bold text-lg">
                                                                    Attention!
                                                                </h3>
                                                                <p className="py-4">
                                                                    Do you want
                                                                    to delete
                                                                    this
                                                                    problem? You
                                                                    can not take
                                                                    it back the
                                                                    process!
                                                                </p>
                                                                <div className="modal-action">
                                                                    <form className="flex">
                                                                        <button
                                                                            className="btn btn-error mr-2 text-error-content"
                                                                            onClick={() =>
                                                                                deleteFAQHandler(
                                                                                    faqId,
                                                                                )
                                                                            }
                                                                        >
                                                                            {FAQLoading ? (
                                                                                <span className="loading loading-spinner"></span>
                                                                            ) : (
                                                                                <>
                                                                                    Delete
                                                                                </>
                                                                            )}
                                                                        </button>
                                                                        <button className="btn">
                                                                            Close
                                                                        </button>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </dialog>
                                                    </th>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </>
                            )}
                        </table>
                    </div>
                </>
            </div>
        </>
    );
};

export default FAQs;
