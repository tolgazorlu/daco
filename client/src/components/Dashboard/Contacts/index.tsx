import { Helmet } from "react-helmet-async";
import Layout from "../../Layouts";
import { useGetContactsQuery } from "../../../hooks/contactHook";

const Contacts = () => {
    const { data: contacts, isLoading, error } = useGetContactsQuery();

    return (
        <>
            <Helmet>
                <title>Contact Messages</title>
            </Helmet>
            <Layout />
            <div className="px-4 py-8 lg:px-32 sm:ml-64 mt-14 flex flex-col gap-4">
                {isLoading ? (
                    <div className="p-2 stats shadow-lg border border-base-300">
                        <div className="stat overflow-x-auto flex flex-col gap-4">
                            <div className="stat-title">Contact Messages</div>
                            <div className="alert flex justify-center">
                                <span className="loading loading-lg"></span>
                            </div>
                        </div>
                    </div>
                ) : error ? (
                    <div className="p-2 stats shadow-lg border border-base-300">
                        <div className="stat overflow-x-auto flex flex-col gap-4">
                            <div className="stat-title">Contact Messages</div>
                            <div className="alert alert-error">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="stroke-current shrink-0 h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                <span>Error! Something went wrong.</span>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="p-2 stats shadow-lg border border-base-300">
                        <div className="stat overflow-x-auto flex flex-col gap-4">
                            <div className="stat-title">Contact Messages</div>
                            <table className="table table-xs font-poppins table-zebra">
                                <thead>
                                    <tr>
                                        <th>Email</th>
                                        <th>Subject</th>
                                        <th>Message</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                {contacts?.map((item, index) => {
                                    return (
                                        <tbody key={index}>
                                            <tr>
                                                <td>{item.email}</td>
                                                <td>{item.subject}</td>
                                                <td>{item.message}</td>
                                            </tr>
                                        </tbody>
                                    );
                                })}
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Contacts;
