import { useGetDailyProblemsQuery } from "../../hooks/problemHooks";

const DailyProblemsTable = () => {
  const { data: problem, isLoading, error } = useGetDailyProblemsQuery();

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
                {problem?.map((item, index) => {
                  return (
                    <tbody>
                      <tr>
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
                          <a href={`/question/${item.slug}`} className="btn btn-xs bg-info px-2 py-1 rounded-md text-info-content">
                            Detail
                          </a>
                          <button className="btn btn-xs bg-warning px-2 py-1 rounded-md text-warning-content">
                            Edit
                          </button>
                          <button className="btn btn-xs bg-error px-2 py-1 rounded-md text-error-content">
                            Delete
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
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
