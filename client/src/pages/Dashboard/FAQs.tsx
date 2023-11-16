/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Helmet } from "react-helmet-async";
import Layout from "../../layouts/Layout";
import { useDeleteFAQMutation, useGetFAQsQuery } from "../../hooks/faqHook";
import AddFAQModal from "../../components/Dashboard/AddFaqModal";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { getError } from "../../utils/getError";
import { ApiError } from "../../types/ApiError";
import EditFaqModal from "../../components/Dashboard/EditFaqModal";

const FAQs = () => {
  const { data: faqs, isLoading, error, refetch } = useGetFAQsQuery();
  const { mutateAsync: deleteFAQ, isLoading: FAQLoading } =
    useDeleteFAQMutation();

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
                      <tbody key={item.title}>
                        <tr>
                          <td>{item.title}</td>
                          <td>{item.description}</td>
                          <td className="flex gap-1 h-12 items-center float-right">
                            <EditFaqModal item={item} />
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
