import { useContext, useEffect, useState } from "react";
import { useGetDailyProblemsQuery } from "../../hooks/problemHooks";
import Counter from "./Counter";
import { User } from "../../contexts/User";

const Hero = () => {
    const { data: problems, isLoading, error } = useGetDailyProblemsQuery();
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
        <section className="h-screen flex flex-col justify-between overflow-scroll">
            <div className="mt-20 flex flex-col gap-4 p-4 px-12">
                <div className="flex flex-col gap-3">
                    <span className="font-poppins text-lg">
                        Today's Problems
                    </span>
                    <div className="text-2xl grid grid-cols-3 gap-4">
                        {problems?.map((item, index) => {
                            return (
                                <a
                                    key={item._id}
                                    href={"/question/" + item.slug}
                                    className={
                                        solvedArray.includes(item._id)
                                            ? "max-w-lg p-6 rounded-lg hover:bg-base-300 bg-base-200 shadow-lg flex flex-col gap-2"
                                            : "max-w-lg p-6 rounded-lg hover:bg-base-300 hover:text-base-content bg-accent text-accent-content shadow-lg flex flex-col gap-2"
                                    }
                                >
                                    <span className="text-2xl font-bold font-poppins">
                                        {index + 1}.{" "}
                                        {item.title.toUpperCase().slice(0, 30)}
                                    </span>
                                    <p className="font-normal text-sm font-poppins">
                                        Here are the biggest enterprise
                                        technology acquisitions of 2021 so far,
                                        in reverse chronological order.
                                    </p>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center bg-base-300 fixed bottom-0 w-full">
                <Counter />
                <span className="font-bandal text-4xl text-accent font-bold">
                    left
                </span>
            </div>
        </section>
    );
};

export default Hero;
