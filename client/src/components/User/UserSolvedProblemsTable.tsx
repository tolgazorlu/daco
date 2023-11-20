import { useGetSolvedProblemsQuery } from "../../hooks/problemHooks";

const UserSolvedProblemsTable = () => {
  const { data: problem, isLoading, error } = useGetSolvedProblemsQuery();

  return (
    <>
      {isLoading ? (
        <div className="p-2 rounded-lg">
          <div className="overflow-x-auto">
            <table className="table table-xs font-poppins">
              <caption className="text-left text-xl font-bold mb-4">
                Solved Problems
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
                Solved Problems
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
            <table className="table table-xs font-poppins">
              <caption className="text-left text-xl font-bold mb-4">
                Solved Problems
              </caption>
              {problem?.length == 0 ? (
                <div role="alert" className="alert">
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
                  <span>You don't solved any question yet.</span>
                </div>
              ) : (
                <>
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
                </>
              )}
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default UserSolvedProblemsTable;
