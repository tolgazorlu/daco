/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Navbar from "../../layouts/Navbar";
import Sidebar from "../../components/Dashboard/Sidebar";
import DailyProblemsTable from "../../components/Dashboard/DailyProblemsTable";
import MainStats from "../../components/Dashboard/MainStats";
import MiniStats from "../../components/Dashboard/MiniStats";


const Dashboard = () => {

  return (
    <div>
      <Navbar/>
      <div>
        <Sidebar />
        <div className="px-4 py-8 sm:ml-64 mt-14 flex flex-col gap-4">
          <MainStats />
          <MiniStats />
          <DailyProblemsTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
