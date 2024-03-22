import ProblemsTable from "../ProblemsTable";
import Layout from "../../Layouts";
import { Helmet } from "react-helmet-async";

const Problems = () => {
    return (
        <>
            <Helmet>
                <title>Admin cockpit for Problems</title>
            </Helmet>
            <Layout />
            <div className="px-4 py-8 lg:px-24 sm:ml-64 mt-16 flex flex-col gap-4">
                <a
                    className="btn btn-sm btn-primary text-primary-content rounded"
                    href="/question/create"
                >
                    Add Problem
                </a>
                <ProblemsTable />
            </div>
        </>
    );
};

export default Problems;
