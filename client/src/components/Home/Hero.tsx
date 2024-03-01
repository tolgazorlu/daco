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

    const [solvedArray, setSolvedArray] = useState<string[]>([]);

    useEffect(() => {
        if (userInfo) {
            // Extracting only problemId from solvedProblems
            const problemIds = userInfo.solvedProblems.map(
                (solvedProblem) => solvedProblem.problemId,
            );
            setSolvedArray(problemIds);
        }
    }, [userInfo]);

    return (
        <section className="hero h-screen md:snap-start">
            <div>
                <span className="flex items-center justify-center w-full">
                    {problems ? (
                        <h1 className="text-7xl font-bold font-aubette text-primary text-center sm:text-8xl">
                            <span className="bg-primary inline-block text-transparent bg-clip-text">
                                DACO DAY {problems[0].day}
                            </span>{" "}
                        </h1>
                    ) : (
                        <h1 className="text-8xl font-bold font-aubette text-primary text-center sm:text-8xl">
                            DACO DAY ?
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
                        <ErrorMessage>
                            {getError(error as ApiError)}
                        </ErrorMessage>
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
            </div>
        </section>
    );
};

export default Hero;
