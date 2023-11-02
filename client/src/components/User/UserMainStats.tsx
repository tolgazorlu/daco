/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */

const UserMainStats = () => {
  return (
    <div className="stats bg-primary shadow-md">
      <div className="stat">
        <div className="stat-title text-primary-content">Solved Problems</div>
        <div className="stat-value text-primary-content">25</div>
        <div className="stat-actions">
          <button
            className="btn btn-sm btn-primary-content text-primary hover:text-primary/50"
          >
            Check New Problems
          </button>
        </div>
      </div>

      <div className="stat">
        <div className="stat-title text-primary-content">Total Day</div>
        <div className="stat-value text-primary-content">123</div>
        <div className="stat-actions flex gap-2">
          <button className="btn btn-sm btn-primary-content text-primary hover:text-primary/50">
            Check Statistics
          </button>
          <button className="btn btn-sm btn-primary-content text-primary hover:text-primary/50">
            Copy Link
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserMainStats;
