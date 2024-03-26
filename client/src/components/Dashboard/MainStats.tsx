/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "react-toastify";
import { useCreateProblemMutation } from "../../hooks/problemHooks";
import {
    useGetTotalProblemsQuery,
    useGetTotalUsersQuery,
} from "../../hooks/statsHooks";
import { getError } from "../../utils/getError";
import { ApiError } from "../../types/ApiError";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const MainStats = () => {
    const { data: problems, isLoading, error } = useGetTotalProblemsQuery();
    const { data: users, isLoading: isTotalUsersLoading } =
        useGetTotalUsersQuery();
    const { mutateAsync: createProblem } = useCreateProblemMutation();

    const [createButtonLoading, setCreateButtonLoading] =
        useState<boolean>(false);

    const navigation = useNavigate();

    const day = 1;
    const title = "New Problem";
    const level = "easy";
    const description = "## New Problem";
    const answer = "answer";
    const slug = "slug";

    const createProblemHandler = async () => {
        try {
            const data = await createProblem({
                day: day,
                title: title,
                level: level,
                description: description,
                answer: answer,
                slug: slug,
            });
            toast.success("Problem created!");
            setCreateButtonLoading(true);
            setInterval(() => {
                navigation("/question/" + data.slug + "/edit");
            }, 1000);
        } catch (error) {
            toast.error(getError(error as ApiError));
            setCreateButtonLoading(false);
        }
    };

    return (
        <>
            <div className="stats shadow-lg border border-base-300 rounded bg-base-300">
                <div className="stat  shadow-lg">
                    <div className="stat-figure text-primary">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block w-8 h-8 stroke-current"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                            />
                        </svg>
                    </div>
                    <div className="stat-title font-bold">
                        Algorithm Questions
                    </div>
                    <div className="stat-value text-primary">
                        {isLoading ? (
                            <span className="loading"></span>
                        ) : error ? (
                            <>?</>
                        ) : (
                            <span>
                                {problems?.countProblems ? (
                                    <>{problems.countProblems}</>
                                ) : (
                                    <></>
                                )}
                            </span>
                        )}
                    </div>
                    <div className="stat-desc">You're amazing!</div>
                    <div className="stat-actions">
                        <button
                            className="btn btn-sm btn-primary text-primary-content rounded"
                            onClick={() => createProblemHandler()}
                        >
                            {createButtonLoading ? (
                                <span className="loading loading-sm"></span>
                            ) : (
                                <span>Add New Problem</span>
                            )}
                        </button>
                    </div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-accent">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block w-8 h-8 stroke-current"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                            />
                        </svg>
                    </div>
                    <div className="stat-title font-bold">
                        Total Number of Users
                    </div>
                    <div className="stat-value text-accent">
                        {isTotalUsersLoading ? (
                            <span className="loading"></span>
                        ) : error ? (
                            <>?</>
                        ) : (
                            <span>
                                {users?.totalUsers ? (
                                    <>{users.totalUsers}</>
                                ) : (
                                    <></>
                                )}
                            </span>
                        )}
                    </div>
                    <div className="stat-desc">
                        You created your account this date!
                    </div>
                    <div className="stat-actions flex gap-2">
                        <a
                            className="btn btn-sm btn-accent text-accent-content rounded"
                            href="/dashboard/users"
                        >
                            Check Users
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainStats;
