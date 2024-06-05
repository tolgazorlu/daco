import ProblemsTable from "./ProblemsTable";
import Layout from "../../Layouts";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateProblemMutation } from "../../../hooks/problemHooks";
import { toast } from "react-toastify";
import { getError } from "../../../utils/getError";
import { ApiError } from "../../../types/ApiError";

const Problems = () => {
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
            <Helmet>
                <title>Admin cockpit for Problems</title>
            </Helmet>
            <Layout />
            <div className="px-4 py-8 lg:px-24 sm:ml-64 mt-16 flex flex-col gap-4">
                <div className="breadcrumbs bg-base-100 text-base-content py-2 px-4 rounded font-poppins">
                    <ul>
                        <li>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-4 h-4 mr-2"
                            >
                                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                            </svg>
                            <span> Home</span>
                        </li>
                        <li>Admin</li>
                        <li>Problems</li>
                    </ul>
                </div>
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
                <ProblemsTable />
            </div>
        </>
    );
};

export default Problems;
