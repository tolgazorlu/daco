/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import DailyProblemsTable from "../../components/Dashboard/DailyProblemsTable";
import MainStats from "../../components/Dashboard/MainStats";
import MiniStats from "../../components/Dashboard/MiniStats";
import Layout from "../../layouts/Layout";

const Dashboard = () => {
  return (
    <div>
      <Layout />
      <div className="px-4 py-8 sm:ml-64 mt-14 flex flex-col gap-4">
        <MainStats />
        <MiniStats />
        <DailyProblemsTable />
      </div>
    </div>
  );
};

export default Dashboard;
