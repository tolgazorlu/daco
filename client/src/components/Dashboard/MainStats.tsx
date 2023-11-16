/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import AddAlgorithmModal from "./AddProblemModal";

const MainStats = () => {
  return (
    <div className="stats bg-accent shadow-md">
      <div className="stat">
        <div className="stat-title text-accent-content">
          Total Algorithm Questions
        </div>
        <div className="stat-value text-accent-content">25</div>
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
        <div className="stat-value text-accent-content">4200</div>
        <div className="stat-actions flex gap-2">
          <button className="btn btn-sm btn-nautral-content text-nautral">
            Check Users
          </button>
          <button className="btn btn-sm btn-nautral-content text-nautral">
            Copy Link
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainStats;
