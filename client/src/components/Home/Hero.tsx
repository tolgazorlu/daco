import { useGetDailyAlgorithmQuery } from "../../hooks/algorithmHooks";
import { ApiError } from "../../types/ApiError";
import { getError } from "../../utils/getError";
import ErrorMessage from "../ErrorMessage";
import Counter from "./Counter";

const Hero = () => {
  const { data: algorithms, isLoading, error } = useGetDailyAlgorithmQuery();

  return (
    <div className="hero h-[90vh]">
      <div className="hero-content text-center">
        <div className="max-w-md -mt-20">
          <span className="flex gap-4 items-center justify-center w-full">
            {algorithms ? (<h1 className="text-8xl font-bold font-aubette text-primary">
              DAY {algorithms[0].day}
            </h1>) : <h1 className="text-8xl font-bold font-aubette text-primary">
              DAY ?
            </h1>}
          </span>
          <Counter />
          <div className="text-2xl flex flex-col gap-4 justify-center">
            {isLoading ? (
              <span className="bg-secoprimaryndary-content px-4 py-2 w-full rounded-xl text-primary font-poppins border border-primary animate-pulse">
                Loading
              </span>
            ) : error ? (
              <ErrorMessage>{getError(error as ApiError)}</ErrorMessage>
            ) : !algorithms ? (
              <ErrorMessage>Question Not Found!</ErrorMessage>
            ) : (
              algorithms.map((item) => {
                return (
                  <a
                    key={item._id}
                    className="bg-primary-content px-4 py-2 rounded-xl text-primary font-poppins border border-primary"
                    href={"/question/" + item.slug}
                  >
                    {item.title}
                  </a>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
