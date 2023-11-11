import { useEffect } from "react";
import { useGetSolvedProblemsQuery } from "../../hooks/problemHooks";

const UserSolvedProblemsTable = () => {
  const { data: problem, isLoading, error } = useGetSolvedProblemsQuery();

  useEffect(() => {
    if (problem) {
      console.log(problem);
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
              <caption className="text-left text-xl font-bold mb-4">
                Solved Problems
              </caption>
              <thead>
                <tr>
                  <th></th>
                  <th>Day</th>
                  <th>Title</th>
                  <th>Date</th>
                  <th>Difficulty</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {problem?.map((item, index) => {
                  return (
                    <tr key={item._id}>
                      <th>{index + 1}</th>
                      <td>{item.day}</td>
                      <td>{item.title}</td>
                      <td>{item.date}</td>
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
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr>
                  <th></th>
                  <th>Day</th>
                  <th>Title</th>
                  <th>Date</th>
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
