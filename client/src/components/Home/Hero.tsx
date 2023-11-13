import { useGetDailyProblemsQuery } from "../../hooks/problemHooks";
import { ApiError } from "../../types/ApiError";
import { getError } from "../../utils/getError";
import ErrorMessage from "../ErrorMessage";
import Counter from "./Counter";

const Hero = () => {
  const { data: problems, isLoading, error } = useGetDailyProblemsQuery();

  return (
    <div className="hero h-screen">
        <div>
          <span className="flex items-center justify-center w-full">
            {problems ? (
              <h1 className="text-8xl font-bold font-aubette text-primary">
                DAY {problems[0].day}
              </h1>
            ) : (
              <h1 className="text-8xl font-bold font-aubette text-primary">
                DAY ?
              </h1>
            )}
          </span>
          <Counter />
          <div className="text-2xl flex flex-col gap-4 justify-center">
            {isLoading ? (
              <span className="bg-secoprimaryndary-content px-4 py-2 w-full rounded-xl text-primary font-poppins border border-primary animate-pulse">
                Loading
              </span>
            ) : error ? (
              <ErrorMessage>{getError(error as ApiError)}</ErrorMessage>
            ) : !problems ? (
              <ErrorMessage>Question Not Found!</ErrorMessage>
            ) : (
              problems.map((item) => {
                return (
                  <a
                    key={item._id}
                    className="btn bg-primary-content px-4 py-2 text-primary font-bold border border-primary"
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
  );
};

export default Hero;
