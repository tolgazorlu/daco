import ProblemsTable from "../ProblemsTable";
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
