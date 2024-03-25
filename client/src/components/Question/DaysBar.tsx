import { useContext, useEffect, useState } from "react";
import { useGetAllProblemsSoFarQuery } from "../../hooks/problemHooks";
import { User } from "../../contexts/User";

const DaysBar = () => {
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
        <ul className="hidden col-span-1 md:flex gap-2 flex-col">
            {problems
                ?.sort((a, b) => parseInt(a._id) - parseInt(b._id))
                .map((day) => {
                    return (
                        <li
                            key={day._id}
                            className="collapse collapse-arrow bg-base-200 rounded"
                        >
                            <input
                                type="radio"
                                name="my-accordion-3"
                                defaultChecked
                            />
                            {parseInt(day._id) == userInfo?.currentDay ? (
                                <span className="collapse-title text-xl font-bold font-aubette text-primary">
                                    {day._id}. DAY - TODAY
                                </span>
                            ) : (
                                <span className="collapse-title text-xl font-bold font-aubette">
                                    {day._id}. DAY
                                </span>
                            )}
                            <ul className="collapse-content flex flex-col gap-2">
                                {day.problems.map((item) => (
                                    <li
                                        key={item._id}
                                        className="flex flex-col"
                                    >
                                        {solvedArray.includes(item._id) ? (
                                            <a
                                                href={item.slug}
                                                className="bg-base-100 rounded p-2 btn border-0 justify-start"
                                            >
                                                <input
                                                    type="checkbox"
                                                    className="checkbox checkbox-sm"
                                                    checked
                                                />{" "}
                                                <span className="ml-2 text-base-content">
                                                    {item.title}
                                                </span>
                                            </a>
                                        ) : (
                                            <>
                                                {item.level == "easy" ? (
                                                    <a
                                                        href={item.slug}
                                                        className="bg-success rounded p-2 btn border-0 justify-start"
                                                    >
                                                        <input
                                                            type="checkbox"
                                                            className="checkbox checkbox-sm border-2 border-base-200"
                                                        />{" "}
                                                        <span className="ml-2 text-success-content">
                                                            {item.title}
                                                        </span>
                                                    </a>
                                                ) : item.level == "medium" ? (
                                                    <a
                                                        href={item.slug}
                                                        className="bg-warning rounded p-2 btn border-0 justify-start"
                                                    >
                                                        <input
                                                            type="checkbox"
                                                            className="checkbox checkbox-sm border-2 border-base-200"
                                                        />{" "}
                                                        <span className="ml-2 text-warning-content">
                                                            {item.title}
                                                        </span>
                                                    </a>
                                                ) : (
                                                    <a
                                                        href={item.slug}
                                                        className="bg-error rounded p-2 btn border-0 justify-start"
                                                    >
                                                        <input
                                                            type="checkbox"
                                                            className="checkbox checkbox-sm border-2 border-base-200"
                                                        />{" "}
                                                        <span className="ml-2 text-error-content">
                                                            {item.title}
                                                        </span>
                                                    </a>
                                                )}{" "}
                                            </>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    );
                })}
        </ul>
    );
};

export default DaysBar;
