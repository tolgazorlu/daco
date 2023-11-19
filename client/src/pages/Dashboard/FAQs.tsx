/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Helmet } from "react-helmet-async";
import Layout from "../../layouts/Layout";
import {
  useDeleteFAQMutation,
  useEditFAQMutation,
  useGetFAQsQuery,
} from "../../hooks/faqHook";
import AddFAQModal from "../../components/Dashboard/AddFaqModal";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { getError } from "../../utils/getError";
import { ApiError } from "../../types/ApiError";

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

  return (
    <>
      <Helmet>
        <title>FAQs</title>
      </Helmet>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Layout />
      <div className="sm:ml-64 mt-16 flex flex-col gap-4">
        {isLoading ? (
          <div className="p-2 rounded-lg">
            <button
              className="btn btn-sm btn-accent text-accent-content hover:text-accent/50 float-right"
              onClick={() => {
                let el: any = document.getElementById("add-faq-modal")!;
                el.showModal();
              }}
            >
              Add FAQ
            </button>
            <div className="overflow-x-auto">
              <table className="table table-xs font-poppins">
                <caption className="text-left text-xl font-bold mb-4">
                  FAQs
                </caption>
              </table>
            </div>
            <div className="alert flex justify-center">
              <span className="loading loading-lg"></span>
            </div>
          </div>
        ) : error ? (
          <div className="p-2 rounded-lg">
            <button
              className="btn btn-sm btn-accent text-accent-content hover:text-accent/50 float-right"
              onClick={() => {
                let el: any = document.getElementById("add-faq-modal")!;
                el.showModal();
              }}
            >
              Add FAQ
            </button>
            <div className="overflow-x-auto">
              <table className="table table-xs font-poppins">
                <caption className="text-left text-xl font-bold mb-4">
                  FAQs
                </caption>
              </table>
            </div>
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
        ) : (
          <div className="p-4 col-span-10">
            <div className="p-2 rounded-lg">
              <button
                className="btn btn-sm btn-accent text-accent-content hover:text-accent/50 float-right"
                onClick={() => {
                  let el: any = document.getElementById("add-faq-modal")!;
                  el.showModal();
                }}
              >
                Add FAQ
              </button>
              <AddFAQModal />
              <div className="overflow-x-auto">
                <table className="table table-xs">
                  <caption className="text-left text-xl font-bold mb-4">
                    FAQs
                  </caption>
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Description</th>
                      <th></th>
                    </tr>
                  </thead>
                  {faqs?.map((item) => {
                    return (
                      <tbody key={item._id}>
                        <tr>
                          <td>{item.title}</td>
                          <td>{item.description}</td>
                          <td className="flex gap-1 h-12 items-center float-right">
                            <button
                              className="btn btn-xs btn-warning"
                              onClick={() => {
                                setEditItemId(item._id);
                                editModalLoader(item.title, item.description);
                                let el: any =
                                  document.getElementById("edit-faq-modal")!;
                                el.showModal();
                              }}
                            >
                              Edit
                            </button>
                            <dialog id="edit-faq-modal" className="modal">
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
                                    <span className="sr-only">Close modal</span>
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
                                        value={title}
                                        onChange={(e) =>
                                          setTitle(e.target.value)
                                        }
                                        className="input input-bordered input-sm input-accent w-full"
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
                                        rows={4}
                                        className="textarea textarea-accent w-full"
                                        placeholder="Write FAQ description here"
                                        value={description}
                                        onChange={(e) =>
                                          setDescription(e.target.value)
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
                                setFaqId(item._id);
                                let el: any =
                                  document.getElementById("faq-delete-modal")!;
                                el.showModal();
                              }}
                              className="btn btn-xs btn-error text-error-content hover:bg-error/50"
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
                                  Do you want to delete this problem? You can
                                  not take it back the process!
                                </p>
                                <div className="modal-action">
                                  <form className="flex">
                                    <button
                                      className="btn btn-error mr-2 text-error-content"
                                      onClick={() => deleteFAQHandler(faqId)}
                                    >
                                      {FAQLoading ? (
                                        <span className="loading loading-spinner"></span>
                                      ) : (
                                        <>Delete</>
                                      )}
                                    </button>
                                    <button className="btn">Close</button>
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
                      <th>Title</th>
                      <th>Description</th>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FAQs;