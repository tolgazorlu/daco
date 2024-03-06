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
            <div className="px-4 py-8 lg:px-32 sm:ml-64 mt-14 flex flex-col gap-4">
                <ProblemsTable />
                <a
                    className="btn btn-sm btn-primary text-primary-content hover:text-primary/50"
                    href="/question/create"
                >
                    Add Problem
                </a>
            </div>
        </>
    );
};

export default Problems;
