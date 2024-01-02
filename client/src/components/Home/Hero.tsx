// import { useContext, useEffect, useState } from "react";
// import { useGetDailyProblemsQuery } from "../../hooks/problemHooks";
// import { ApiError } from "../../types/ApiError";
// import { getError } from "../../utils/getError";
// import ErrorMessage from "../ErrorMessage";
// import Counter from "./Counter";
// import { User } from "../../contexts/User";

const Hero = () => {
  // const { data: problems, isLoading, error } = useGetDailyProblemsQuery();
  // const { state } = useContext(User);
  // const { userInfo } = state;

  // const [solvedArray, setSolvedArray] = useState([""]);

  // useEffect(() => {
  //   if (userInfo) {
  //     setSolvedArray(userInfo.solvedProblems);
  //   }
  // }, [userInfo]);

  return (
    <section className="hero h-screen md:snap-start">
      {/* <div>
        <span className="flex items-center justify-center w-full">
          {problems ? (
            <h1 className="text-7xl font-bold font-aubette text-primary text-center sm:text-8xl">
              <span className="bg-primary inline-block text-transparent bg-clip-text">
                DALE DAY {problems[0].day}
              </span>{" "}
            </h1>
          ) : (
            <h1 className="text-8xl font-bold font-aubette text-primary text-center sm:text-8xl">
              DALE DAY ?
            </h1>
          )}
        </span>
        <Counter />
        <div className="text-2xl flex flex-col gap-4 justify-center">
          {isLoading ? (
            <div className="flex justify-center items-center">
              <span className="loading loading-spinner text-primary loading-lg"></span>
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
                      ? "btn bg-disabled p-1 md:px-4 md:py-2 text-content font-bandal font-extrabold text-lg shadow"
                      : "btn bg-gradient-to-r from-primary to-secondary p-1 sm:px-4 sm:py-2 font-bandal text-primary-content font-extrabold text-lg shadow animate-leftToRight"
                  }
                  href={"/question/" + item.slug}
                >
                  {item.title.toUpperCase().slice(0, 30)}...
                </a>
              );
            })
          )}
        </div>
      </div> */}

      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <br />
        <a
          href="#"
          className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm rounded-full border border-primary"
          role="alert"
        >
          <span className="text-xs rounded-full px-4 py-1.5 mr-3 text-primary-content bg-primary">
            New
          </span>{" "}
          <span className="text-sm font-medium">
            DALE is out! See what's new
          </span>
          <svg
            className="ml-2 w-5 h-5 stroke-primary-content"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
        <br></br>
        <span className="text-9xl font-bandal font-bold bg-gradient-to-r from-primary to-accent animate-leftToRight text-transparent bg-clip-text">
          dale
        </span>
        <h1 className="mb-4 text-xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl bg-gradient-to-r from-primary to-accent animate-leftToRight text-transparent bg-clip-text">
          Don't Brake The Chain!
        </h1>
        <p className="mb-8 text-lg font-normal lg:text-xl sm:px-16 xl:px-48">
          Here at DALE we focus on markets where technology, innovation, and
          educarion can unlock long-term value and drive economic growth.
        </p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 font-medium text-center rounded-lg "
          >
            Learn more
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 font-medium text-center rounded-lg border border-primary hover:bg-primary-content hover:text-primary"
          >
            <svg
              className="mr-2 -ml-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
            </svg>
            Watch video
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
