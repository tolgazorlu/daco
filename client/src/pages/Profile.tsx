import { useContext } from "react";
import {
  FullScreen,
  FullScreenHandle,
  useFullScreenHandle,
} from "react-full-screen";
import Navbar from "../layouts/Navbar";
import { User } from "../contexts/User";

const Profile = () => {
  const handle: FullScreenHandle = useFullScreenHandle();

  const { state } = useContext(User);
  const { userInfo } = state;

  return (
    <FullScreen handle={handle}>
      <div id="screen" className="h-screen">
        <div className="px-0 lg:px-20">
          <Navbar fullscreenHandle={handle} />
        </div>
        <div className="flex w-full lg:px-20 h-[70vh] gap-4 items-center">
          <div className="flex flex-col gap-4 border shadow-md w-2/6 h-[55vh] rounded-lg p-8">
            <div className="avatar">
              <div className="w-24 rounded-lg shadow border">
                <img src={userInfo?.avatar} />
              </div>
            </div>
            <div>
              <span className="text-xl font-bold text-primary">
                {userInfo?.username}
              </span>
            </div>
            <div>
              <span className="text-base">Software Engineer</span>
            </div>
            <div className="flex flex-col">
              <span className="text-base">Email Address</span>
              <span className="font-bold text-base">{userInfo?.email}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-base">Solved Question</span>
              <span className="font-bold text-success">1</span>
            </div>
            <div className="flex flex-col">
              <span className="text-base">Total Puan</span>
              <span className="font-bold text-success">1</span>
            </div>
          </div>
          <div className="flex flex-col gap-4 border shadow-md w-4/6 h-[55vh] rounded-lg p-8">
            <div className="overflow-x-auto">
              <table className="table table-xs font-poppins">
                <thead>
                  <tr>
                    <th></th>
                    <th>Status</th>
                    <th>Title</th>
                    <th>Your Answer</th>
                    <th>Acceptance</th>
                    <th>Difficulty</th>
                    <th>Question</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <td>
                      <span className="bg-success px-2 py-1 rounded-md">
                        Solved
                      </span>
                    </td>
                    <td>Quality Control Specialist</td>
                    <td>1124</td>
                    <td>75.1%</td>
                    <td className="text-success">Easy</td>
                    <td>
                      <button className="bg-primary px-2 py-1 rounded-md text-primary-content">
                        Problem
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th>1</th>
                    <td>
                      <span className="bg-warning px-2 py-1 rounded-md">
                        Not Solved
                      </span>
                    </td>
                    <td>Quality Control Specialist</td>
                    <td>Littel, Schaden and Vandervort</td>
                    <td>75.1%</td>
                    <td className="text-warning">Medium</td>
                    <td>
                      <button className="bg-primary px-2 py-1 rounded-md text-primary-content">
                        Problem
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th>1</th>
                    <td>
                      <span className="bg-warning px-2 py-1 rounded-md">
                        Not Solved
                      </span>
                    </td>
                    <td>Quality Control Specialist</td>
                    <td>Littel, Schaden and Vandervort</td>
                    <td>75.1%</td>
                    <td className="text-error">Hard</td>
                    <td>
                      <button className="bg-primary px-2 py-1 rounded-md text-primary-content">
                        Problem
                      </button>
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th></th>
                    <th>Status</th>
                    <th>Title</th>
                    <th>Your Answer</th>
                    <th>Acceptance</th>
                    <th>Difficulty</th>
                    <th>Action</th>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </FullScreen>
  );
};

export default Profile;
