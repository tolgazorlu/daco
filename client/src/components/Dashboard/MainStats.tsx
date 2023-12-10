/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useGetTotalProblemsQuery,
  useGetTotalUsersQuery,
} from "../../hooks/statisticHook";
import AddAlgorithmModal from "./AddProblemModal";

const MainStats = () => {
  const { data: problems, isLoading, error } = useGetTotalProblemsQuery();
  const { data: users, isLoading: isTotalUsersLoading } =
    useGetTotalUsersQuery();

  return (
    <div className="stats bg-primary shadow-md">
      <div className="stat">
        <div className="stat-title text-primary-content">
          Total Algorithm Questions
        </div>
        <div className="stat-value text-primary-content">
          {isLoading ? (
            <span className="loading"></span>
          ) : error ? (
            <>?</>
          ) : (
            <span>
              {problems?.countProblems ? <>{problems.countProblems}</> : <></>}
            </span>
          )}
        </div>
        <div className="stat-actions">
          <button
            className="btn btn-sm btn-nautral-content text-nautral"
            onClick={() => {
              let el: any = document.getElementById("add-problem-modal")!;
              el.showModal();
            }}
          >
            Add Problem
          </button>
          <AddAlgorithmModal />
        </div>
      </div>

      <div className="stat">
        <div className="stat-title text-primary-content">Total Users</div>
        <div className="stat-value text-primary-content">
          {isTotalUsersLoading ? (
            <span className="loading"></span>
          ) : error ? (
            <>?</>
          ) : (
            <span>{users?.totalUsers ? <>{users.totalUsers}</> : <></>}</span>
          )}
        </div>
        <div className="stat-actions flex gap-2">
          <a
            className="btn btn-sm btn-nautral-content text-nautral"
            href="/dashboard/users"
          >
            Check Users
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainStats;
