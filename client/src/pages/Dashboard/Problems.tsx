/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import ProblemsTable from "../../components/Dashboard/ProblemsTable";
import AddProblemModal from "../../components/Dashboard/AddProblemModal";
import Layout from "../../layouts/Layout";
import { Helmet } from "react-helmet-async";

const Problems = () => {
  return (
    <>
      <Helmet>
        <title>Admin cockpit for Problems</title>
      </Helmet>
      <Layout />
      <div className="px-4 py-8 sm:ml-64 mt-16 flex flex-col gap-4">
        <div className="p-2 rounded-lg">
          <div className="w-full h-10">
            <button
              className="btn btn-sm btn-accent text-accent-content hover:text-accent/50 float-right"
              onClick={() => {
                let el: any = document.getElementById("add-problem-modal")!;
                el.showModal();
              }}
            >
              Add Problem
            </button>
            <AddProblemModal />
          </div>
          <ProblemsTable />
        </div>
      </div>
    </>
  );
};

export default Problems;
