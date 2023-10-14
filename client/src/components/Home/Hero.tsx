import { useGetAlgorithmsQuery } from "../../hooks/algorithmHooks";
import { ApiError } from "../../types/ApiError";
import { getError } from "../../utils/getError";
import ErrorMessage from "../ErrorMessage";
import Loading from "../Loading";
import Counter from "./Counter";

const Hero = () => {
  const { data: algorithms, isLoading, error } = useGetAlgorithmsQuery();

  return isLoading ? (
    <Loading />
  ) : error ? (
    <ErrorMessage>{getError(error as ApiError)}</ErrorMessage>
  ) : !algorithms ? (
    <ErrorMessage>Question Not Found!</ErrorMessage>
  ) : (
    <div className="hero h-[90vh]">
      <div className="hero-content text-center">
        <div className="max-w-md -mt-20">
          <span className="flex gap-4 items-center justify-center w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              className="w-24 h-24 stroke-secondary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
              />
            </svg>
            <h1 className="text-8xl font-bold font-aubette text-primary">
              DACO
            </h1>
          </span>
          <Counter />
          <div className="text-2xl flex gap-4 justify-center">
            {algorithms.map((item) => {
              return (
                <a
                  key={item._id}
                  className="bg-secondary-content px-4 py-2 rounded-xl text-secondary font-poppins border border-secondary"
                  href={"/question/" + item.slug}
                >
                  {item.title}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
