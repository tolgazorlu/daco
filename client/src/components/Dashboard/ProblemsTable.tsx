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
import EditProblemModal from "./EditProblemModal";

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
                  <EditProblemModal item={item}/>
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
                        Do you want to delete this problem? You can not take it
                        back the process!
                      </p>
                      <div className="modal-action">
                        <form className="flex">
                          <button
                            className="btn btn-error mr-2 text-error-content"
                            onClick={() => deleteProblemHandler(problemId)}
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
            <th>Action</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ProblemsTable;
