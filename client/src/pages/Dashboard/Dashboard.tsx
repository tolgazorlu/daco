/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Navbar from "../../layouts/Navbar";
import Sidebar from "../../components/Dashboard/Sidebar";
import DailyProblemsTable from "../../components/Dashboard/DailyProblemsTable";
import MainStats from "../../components/Dashboard/MainStats";
import MiniStats from "../../components/Dashboard/MiniStats";
import SidebarButton from "../../components/Dashboard/SidebarButton";


const Dashboard = () => {

  return (
    <div>
      <Navbar/>
      <hr className="border-base-200"></hr>
      <SidebarButton />
      <div className="bg-white grid grid-cols-12">
        <Sidebar />
        <div className="p-4 col-span-10 bg-base-100 flex flex-col gap-8">
          <MainStats />
          <MiniStats />
          <DailyProblemsTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
