import { useContext, useEffect, useState } from "react";
import { useGetDailyProblemsQuery } from "../../hooks/problemHooks";
import { ApiError } from "../../types/ApiError";
import { getError } from "../../utils/getError";
import ErrorMessage from "../ErrorMessage";
import Counter from "./Counter";
import { User } from "../../contexts/User";

const Hero = () => {
  const { data: problems, isLoading, error } = useGetDailyProblemsQuery();
  const { state } = useContext(User);
  const { userInfo } = state;

  const [solvedArray, setSolvedArray] = useState([""]);

  useEffect(() => {
    if (userInfo) {
      setSolvedArray(userInfo.solvedProblems);
    }
  }, [userInfo]);

  return (
    <div className="hero h-screen">
      <div>
        <span className="flex items-center justify-center w-full">
          {problems ? (
            <h1 className="text-7xl font-bold font-aubette text-accent text-center sm:text-8xl">
              DACO DAY {problems[0].day}
            </h1>
          ) : (
            <h1 className="text-8xl font-bold font-aubette text-accent text-center sm:text-8xl">
              DACO DAY ?
            </h1>
          )}
        </span>
        <Counter />
        <div className="text-2xl flex flex-col gap-4 justify-center">
          {isLoading ? (
            <div className="flex justify-center items-center">
              <span className="loading loading-spinner text-accent loading-lg"></span>
            </div>
          ) : error ? (
            <ErrorMessage>{getError(error as ApiError)}</ErrorMessage>
          ) : !problems ? (
            <ErrorMessage>Question Not Found!</ErrorMessage>
          ) : (
            problems.map((item) => {
              return (
                <a
                  key={item._id}
                  className={
                    solvedArray.includes(item._id)
                      ? "btn bg-disabled px-4 py-2 font-bold"
                      : "btn bg-accent-content px-4 py-2 text-accent font-bold border border-accent"
                  }
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
