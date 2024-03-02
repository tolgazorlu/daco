/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Helmet } from "react-helmet-async";
import DailyProblemsTable from "./DailyProblemsTable";
import MainStats from "./MainStats";
import Layout from "../Layouts";

const Dashboard = () => {
    return (
        <>
            <Helmet>
                <title>Admin cockpit for Dashboard</title>
            </Helmet>
            <Layout />
            <div className="px-4 lg:px-32 py-8 sm:ml-64 mt-14 flex flex-col gap-4">
                <MainStats />
                <DailyProblemsTable />
            </div>
        </>
    );
};

export default Dashboard;
