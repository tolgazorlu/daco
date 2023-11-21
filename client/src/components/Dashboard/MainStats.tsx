/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetStatisticsQuery } from "../../hooks/problemHooks";
import AddAlgorithmModal from "./AddProblemModal";

const MainStats = () => {
  const { data: statistics, isLoading, error } = useGetStatisticsQuery();

  return (
    <div className="stats bg-accent shadow-md border">
      <div className="stat">
        <div className="stat-title text-accent-content">
          Total Algorithm Questions
        </div>
        <div className="stat-value text-accent-content">
          {isLoading ? (
            <span className="loading"></span>
          ) : error ? (
            <>?</>
          ) : (
            <span>
              {statistics?.countProblems ? (
                <>{statistics.countProblems}</>
              ) : (
                <></>
              )}
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
        <div className="stat-title text-accent-content">Total Users</div>
        <div className="stat-value text-accent-content">
        {isLoading ? (
            <span className="loading"></span>
          ) : error ? (
            <>?</>
          ) : (
            <span>
              {statistics?.totalUsers ? (
                <>{statistics.totalUsers}</>
              ) : (
                <></>
              )}
            </span>
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
