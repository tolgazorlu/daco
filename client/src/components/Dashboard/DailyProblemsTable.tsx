/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {
  useDeleteProblemMutation,
  useGetDailyProblemsQuery,
} from "../../hooks/problemHooks";
import EditProblemModal from "./EditProblemModal";
import { toast } from "react-toastify";
import { getError } from "../../utils/getError";
import { ApiError } from "../../types/ApiError";

const DailyProblemsTable = () => {
  const {
    data: problem,
    isLoading,
    error,
    refetch,
  } = useGetDailyProblemsQuery();
  const { mutateAsync: deleteProblem } = useDeleteProblemMutation();

  const [problemId, setProblemId] = useState<string>("");

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
        <div className="p-2 rounded-lg">
          <div className="overflow-x-auto">
            <table className="table table-xs font-poppins">
              <caption className="text-left text-xl font-bold mb-4">
                Daily Problems
              </caption>
            </table>
          </div>
          <div className="alert flex justify-center">
            <span className="loading loading-lg"></span>
          </div>
        </div>
      ) : error ? (
        <div className="p-2 rounded-lg">
          <div className="overflow-x-auto">
            <table className="table table-xs font-poppins">
              <caption className="text-left text-xl font-bold mb-4">
                Daily Problems
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
        <div className="p-2 rounded-lg">
          <div className="overflow-x-auto">
            <table className="table table-xs">
              <caption className="text-left text-xl font-bold mb-4">
                Daily Problems
              </caption>
              <thead>
                <tr>
                  <th></th>
                  <th>Sequence</th>
                  <th>Day</th>
                  <th>Date</th>
                  <th>Title</th>
                  <th>Answer</th>
                  <th>Slug</th>
                  <th>Difficulty</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {problem?.map((item, index) => {
                  return (
                    <tr key={item._id}>
                      <th>{index + 1}</th>
                      <td>{item.sequence}</td>
                      <td>{item.day}</td>
                      <td>{item.date}</td>
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
                      <td className="flex gap-1 h-12 items-center">
                        <a
                          href={`/question/${item.slug}`}
                          className="btn btn-xs btn-info text-info-content hover:bg-info/50"
                        >
                          Detail
                        </a>
                        <EditProblemModal item={item} />
                        <button
                          onClick={() => {
                            let el: any =
                              document.getElementById("my_modal_1")!;
                            el.showModal();
                            setProblemId(item._id);
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
                            <h3 className="font-bold text-lg">Attention!</h3>
                            <p className="py-4">
                              Do you want to delete this problem? You can not
                              take it back the process!
                            </p>
                            <div className="modal-action">
                              <form className="flex">
                                <button
                                  className="btn btn-error mr-2 text-error-content"
                                  onClick={() =>
                                    deleteProblemHandler(problemId)
                                  }
                                >
                                  Delete
                                </button>
                                <button className="btn">Close</button>
                              </form>
                            </div>
                          </div>
                        </dialog>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr>
                  <th></th>
                  <th>Sequence</th>
                  <th>Day</th>
                  <th>Date</th>
                  <th>Title</th>
                  <th>Answer</th>
                  <th>Slug</th>
                  <th>Difficulty</th>
                  <th>Action</th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default DailyProblemsTable;
