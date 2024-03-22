import { useContext, useEffect, useState } from "react";
import { useGetAllProblemsSoFarQuery } from "../../hooks/problemHooks";
import Counter from "./Counter";
import { User } from "../../contexts/User";
import { Problem } from "../../types/ProblemType";

const Hero = () => {
    const { data: problems, isLoading, error } = useGetAllProblemsSoFarQuery();
    const { state } = useContext(User);
    const { userInfo } = state;

    const [solvedArray, setSolvedArray] = useState<string[]>([]);

    useEffect(() => {
        if (userInfo) {
            const problemIds = userInfo.solvedProblems.map(
                (solvedProblem) => solvedProblem.problemId,
            );
            setSolvedArray(problemIds);
        }
    }, [userInfo]);

    if (isLoading) {
        return (
            <div className="h-screen flex flex-col justify-center items-center">
                <span className="loading loading-spinner text-primary loading-lg"></span>
            </div>
        );
    } else if (error) {
        return (
            <div className="h-screen flex flex-col justify-center items-center text-error text-7xl text-poppins">
                Something went wrong!
            </div>
        );
    }

    return (
        <section className="h-screen flex flex-col justify-between ">
            <div className="mt-20 flex flex-col gap-4 p-4 px-4 lg:px-24 h-5/6 overflow-scroll">
                <div className="flex flex-col gap-3">
                    <div className="text-2xl flex flex-col gap-4">
                        {problems
                            ?.sort((a, b) => parseInt(b._id) - parseInt(a._id))
                            .map((day) => {
                                return (
                                    <ul key={day._id} className="flex flex-col">
                                        <div className="flex flex-col">
                                            {parseInt(day._id) ==
                                            userInfo?.currentDay ? (
                                                <span className="text-center px-6 p-2 rounded bg-primary text-primary-content mb-4 font-aubette">
                                                    {day._id}. DAY - TODAY
                                                </span>
                                            ) : (
                                                <span className="text-center px-6 p-2 rounded bg-base-300 text-base-content mb-4 font-extrabold font-aubette">
                                                    {day._id}. DAY
                                                </span>
                                            )}
                                        </div>
                                        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            {day.problems.map(
                                                (item: Problem) => (
                                                    <li key={item._id}>
                                                        <a
                                                            href={
                                                                "/question/" +
                                                                item.slug
                                                            }
                                                            className={
                                                                solvedArray.includes(
                                                                    item._id,
                                                                )
                                                                    ? "max-w-lg p-6 rounded hover:bg-base-300 bg-base-200 shadow-lg flex flex-col gap-2"
                                                                    : item.level ==
                                                                        "easy"
                                                                      ? "max-w-lg p-6 rounded hover:bg-base-300 hover:text-base-content bg-success text-success-content shadow-lg flex flex-col gap-2"
                                                                      : item.level ==
                                                                          "medium"
                                                                        ? "max-w-lg p-6 rounded hover:bg-base-300 hover:text-base-content bg-warning text-warning-content shadow-lg flex flex-col gap-2"
                                                                        : "max-w-lg p-6 rounded hover:bg-base-300 hover:text-base-content bg-error text-error-content shadow-lg flex flex-col gap-2"
                                                            }
                                                        >
                                                            <span className="text-xl font-bold font-poppins">
                                                                {item.title}
                                                            </span>
                                                        </a>
                                                    </li>
                                                ),
                                            )}
                                        </ul>
                                    </ul>
                                );
                            })}
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center bg-base-300 w-full h-1/6 overflow-hidden">
                <Counter />
                <span className="font-bandal hidden lg:flex text-2xl text-accent font-bold">
                    left
                </span>
            </div>
        </section>
    );
};

export default Hero;
