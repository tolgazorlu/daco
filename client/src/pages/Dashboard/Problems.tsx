/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Navbar from "../../layouts/Navbar";
import Sidebar from "../../components/Dashboard/Sidebar";
import { FullScreenHandle, useFullScreenHandle } from "react-full-screen";
import ProblemsTable from "../../components/Dashboard/ProblemsTable";
import SidebarButton from "../../components/Dashboard/SidebarButton";
import AddProblemModal from "../../components/Dashboard/AddProblemModal";

const Problems = () => {
  const handle: FullScreenHandle = useFullScreenHandle();

  return (
    <div>
      <Navbar fullscreenHandle={handle} />
      <hr></hr>
      <SidebarButton />
      <div className="bg-white grid grid-cols-12">
        <Sidebar />
        <div className="p-4 col-span-10 bg-base-100">
          <div className="p-2 rounded-lg">
            <div className="w-full h-10">
              <button
                className="btn btn-sm btn-primary text-primary-content hover:text-primary/50 float-right"
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
      </div>
    </div>
  );
};

export default Problems;
