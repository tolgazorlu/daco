/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Helmet } from "react-helmet-async";
import DailyProblemsTable from "../../components/Dashboard/DailyProblemsTable";
import MainStats from "../../components/Dashboard/MainStats";
import MiniStats from "../../components/Dashboard/MiniStats";
import Layout from "../../layouts/Layout";

const Dashboard = () => {
  return (
    <>
      <Helmet>
        <title>Admin cockpit for Dashboard</title>
      </Helmet>
      <Layout />
      <div className="px-4 py-8 sm:ml-64 mt-14 flex flex-col gap-4">
        <MainStats />
        <MiniStats />
        <DailyProblemsTable />
      </div>
    </>
  );
};

export default Dashboard;
