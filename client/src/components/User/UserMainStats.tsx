/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useContext, useEffect, useState } from "react";
import { User } from "../../contexts/User";
import { useGetDailyProblemsQuery } from "../../hooks/problemHooks";

const UserMainStats = () => {
  const { state } = useContext(User);
  const { userInfo } = state;
  const { data: problems } = useGetDailyProblemsQuery();
  const [day, setDay] = useState<number>()
  const [solved, setSolved] = useState<number>(0)
  
  useEffect(() => {
    if(problems){
      setDay(problems[0].day)
    }
    if(userInfo?.solvedProblems){
      setSolved(userInfo.solvedProblems.length)
    }
  }, [problems, day, userInfo?.solvedProblems])

  return (
    <div className="stats bg-primary shadow-md">
      <div className="stat">
        <div className="stat-title text-primary-content">Solved Problems</div>
        <div className="stat-value text-primary-content">
          {solved}
        </div>
        <div className="stat-actions">
          <a href="/" className="btn btn-sm btn-nautral-content text-nautral">
            Check New Problems
          </a>
        </div>
      </div>

      <div className="stat">
        <div className="stat-title text-primary-content">Total Day</div>
        <div className="stat-value text-primary-content">{day}</div>
        <div className="stat-actions flex gap-2">
          <button className="btn btn-sm btn-nautral-content text-nautral">
            Check Statistics
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserMainStats;
