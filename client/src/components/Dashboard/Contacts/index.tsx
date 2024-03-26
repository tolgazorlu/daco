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
            <div className="px-4 py-8 lg:px-24 sm:ml-64 mt-16 flex flex-col gap-4">
                {isLoading ? (
                    <div className="stats shadow-lg border border-base-300 rounded">
                        <div className="stat overflow-x-auto flex flex-col gap-4">
                            <div className="stat-title">Contact Messages</div>
                            <div className="alert flex justify-center">
                                <span className="loading loading-lg"></span>
                            </div>
                        </div>
                    </div>
                ) : error ? (
                    <div className="stats shadow-lg border border-base-300 rounded">
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
                    <>
                        <div className="breadcrumbs bg-neutral text-neutral-content py-2 px-4 rounded font-poppins">
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
                                <li>Contacts</li>
                            </ul>
                        </div>
                        <div className="stats shadow-lg border border-base-300 rounded">
                            <div className="stat overflow-x-auto flex flex-col gap-4">
                                <div className="stat-title">
                                    Contact Messages
                                </div>
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
                    </>
                )}
            </div>
        </>
    );
};

export default Contacts;
