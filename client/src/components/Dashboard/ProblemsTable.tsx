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
  const { data: problems, refetch } = useGetProblemsQuery();
  const { mutateAsync: deleteProblem } = useDeleteProblemMutation();

  const [problemId, setProblemId] = useState<string>("");

  const deleteProblemHandler = async (id: string) => {
    try {
      await deleteProblem(id);
      refetch;
      toast.success("Product deleted!");
    } catch (error) {
      toast.error(getError(error as ApiError));
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="table table-xs font-poppins">
        <thead>
          <tr>
            <th></th>
            <th>Day</th>
            <th>Date</th>
            <th>Title</th>
            <th>Answer</th>
            <th>Slug</th>
            <th>Difficulty</th>
            <th>Action</th>
          </tr>
        </thead>
        {problems?.map((item) => {
          return (
            <tbody>
              <tr>
                <td>
                  <span className="badge">{item.sequence}</span>
                </td>
                <td>000{item.day}</td>
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
                    className="btn btn-xs bg-info px-2 py-1 rounded-md text-info-content"
                  >
                    Detail
                  </a>
                  <button className="btn btn-xs bg-warning px-2 py-1 rounded-md text-warning-content">
                    Edit
                  </button>
                  <button 
                  onClick={() => {
                    let el: any = document.getElementById("my_modal_1")!;
                    el.showModal();
                    setProblemId(item._id);
                  }}
                  className="btn btn-xs bg-error px-2 py-1 rounded-md text-error-content">
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
                        Do you want to delete this product? You can not take it
                        back the process!
                      </p>
                      <div className="modal-action">
                        <form className="flex">
                          <button
                            className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                            onClick={() => deleteProblemHandler(problemId)}
                          >
                            Delete
                          </button>
                          <button className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
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
            <th>Action</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ProblemsTable;
