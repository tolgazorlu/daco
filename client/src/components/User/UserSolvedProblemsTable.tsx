import { useContext, useEffect } from "react";
import { useGetDailyProblemsQuery } from "../../hooks/problemHooks";
import { User } from "../../contexts/User";

const UserSolvedProblemsTable = () => {
  const { data: problem, isLoading, error } = useGetDailyProblemsQuery();

  const { state } = useContext(User);
  const { userInfo } = state;

  useEffect(() => {
    if (userInfo) {
      console.log(userInfo.solvedProblems[0]);
    }
  });

  return (
    <>
      {isLoading ? (
        <></>
      ) : error ? (
        <></>
      ) : (
        <div className="p-2 rounded-lg">
          <div className="overflow-x-auto">
            <table className="table table-xs font-poppins">
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
                        <button className="btn btn-xs btn-warning text-warning-content hover:bg-warning/50">
                          Edit
                        </button>
                        <button className="btn btn-xs btn-error text-error-content hover:bg-error/50">
                          Delete
                        </button>
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

export default UserSolvedProblemsTable;
