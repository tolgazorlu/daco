import { useParams } from "react-router-dom";
import { useGetAlgorithmQuery } from "../hooks/algorithmHooks";
import Navbar from "../layouts/Navbar";
import {
  FullScreen,
  FullScreenHandle,
  useFullScreenHandle,
} from "react-full-screen";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import { getError } from "../utils/getError";
import { ApiError } from "../types/ApiError";

const Question = () => {
  const { slug } = useParams();
  const { data: algorithm, isLoading, error } = useGetAlgorithmQuery(slug!);

  const handle: FullScreenHandle = useFullScreenHandle();
  return isLoading ? (
    <Loading />
  ) : error ? (
    <ErrorMessage>{getError(error as ApiError)}</ErrorMessage>
  ) : !algorithm ? (
    <ErrorMessage>Question Not Found!</ErrorMessage>
  ) : (
    <FullScreen handle={handle}>
      <div id="screen" className="h-screen">
        <div className="px-0 lg:px-20">
          <Navbar fullscreenHandle={handle} />
        </div>
        <div className="px-0 lg:px-4 rounded-xl h-5/6 overflow-hidden w-full">
          <div className="p-4 overflow-scroll max-h-full flex flex-col gap-4">
            <span className="font-bold text-2xl">
              <span>{algorithm.sequence}.</span> <span>{algorithm.title}</span>
            </span>
            <div>
              <span className="badge badge-success">
                {algorithm.level}
              </span>
            </div>
            <span dangerouslySetInnerHTML={{ __html: algorithm.description }} className="leading-24"/>
            <div className="flex flex-col gap-2 max-w-max">
              <strong>Constrain:</strong>
              <span className="py-1 px-2 bg-primary-content text-primary rounded-md">
                {algorithm.constrain}
              </span>
            </div>
            <div className="flex flex-col gap-2 max-w-max">
              <strong>Example:</strong>
              <span className="py-1 px-2 bg-primary-content text-primary rounded-md">Input: nums = [2,7,11,15], target = 9</span><span className="py-1 px-2 bg-primary-content text-primary rounded-md">Output: [0,1]</span><span className="py-1 px-2 bg-primary-content text-primary rounded-md">Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].</span>
            </div>
          </div>
          <div className="p-4 overflow-scroll max-h-full w-1/6 flex flex-col gap-4">
            <input
              className="px-4 py-1 rounded-md bg-secondary-content text-secondary placeholder:text-secondary"
              placeholder="Enter answer here!"
            />
            <button
              className="px-4 py-1 rounded-md bg-secondary text-secondary-content">
                Submit
            </button>
          </div>
        </div>
      </div>
    </FullScreen>
  );
};

export default Question;
