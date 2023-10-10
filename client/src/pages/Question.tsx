import Navbar from "../layouts/Navbar";
import {
  FullScreen,
  FullScreenHandle,
  useFullScreenHandle,
} from "react-full-screen";

const Question = () => {
  const handle: FullScreenHandle = useFullScreenHandle();
  return (
    <FullScreen handle={handle}>
      <div id="screen" className="h-screen">
        <div className="px-0 lg:px-20">
          <Navbar fullscreenHandle={handle} />
        </div>
        <div
          className="px-0 lg:px-4 rounded-xl h-5/6 overflow-hidden w-full"
        >
          <div className="p-4 overflow-scroll max-h-full flex flex-col gap-4">
            <span className="font-bold text-2xl"><span>1.</span><span>Two Sum</span></span>
            <div>
              <span className="badge badge-success badge-outline">Easy</span>
            </div>
            <p>
              Given an array of n integers nums, a 132 pattern is a subsequence
              of three integers nums[i], nums[j] and nums[k] such that i j k and
              nums[i] nums[k] nums[j]. Return true if there is a 132 pattern in
              nums, otherwise, return false. Given an array of n integers nums,
              a 132 pattern is a subsequence of three integers nums[i], nums[j]
              and nums[k] such that i j k and nums[i] nums[k] nums[j]. Return
              true if there is a 132 pattern in nums, otherwise, return false.
              Given an array of n integers nums, a 132 pattern is a subsequence
              of three integers nums[i], nums[j] and nums[k] such that i j k and
              nums[i] nums[k] nums[j]. Return true if there is a 132 pattern in
              nums, otherwise, return false. Given an array of n integers nums,
              a 132 pattern is a subsequence of three integers nums[i], nums[j]
              and nums[k] such that i j k and nums[i] nums[k] nums[j]. Return
              true if there is a 132 pattern in nums, otherwise, return false.
              Given an array of n integers nums, a 132 pattern is a subsequence
              of three integers nums[i], nums[j] and nums[k] such that i j k and
              nums[i] nums[k] nums[j]. Return true if there is a 132 pattern in
              nums, otherwise, return false.
            </p>
          </div>
        </div>
      </div>
    </FullScreen>
  );
};

export default Question;
