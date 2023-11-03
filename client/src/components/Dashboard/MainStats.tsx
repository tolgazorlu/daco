/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import AddAlgorithmModal from "./AddProblemModal";

const MainStats = () => {
  return (
    <div className="stats bg-primary shadow-md">
      <div className="stat">
        <div className="stat-title text-primary-content">
          Total Algorithm Questions
        </div>
        <div className="stat-value text-primary-content">25</div>
        <div>
          <AddAlgorithmModal />
        </div>
      </div>

      <div className="stat">
        <div className="stat-title text-primary-content">Total Users</div>
        <div className="stat-value text-primary-content">4200</div>
        <div className="stat-actions flex gap-2">
          <button className="btn btn-sm btn-primary-content text-primary hover:text-primary/50">
            Check Users
          </button>
          <button className="btn btn-sm btn-primary-content text-primary hover:text-primary/50">
            Copy Link
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainStats;
