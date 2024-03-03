import { useGetContactsQuery } from "../../hooks/contactHook";

const ContactTable = () => {
    const { data: contacts, isLoading, error } = useGetContactsQuery();

    return (
        <>
            {isLoading ? (
                <div className="p-2 rounded-lg">
                    <div className="overflow-x-auto">
                        <table className="table font-poppins">
                            <caption className="text-left text-xl font-bold mb-4">
                                Contact Messages
                            </caption>
                        </table>
                    </div>
                    <div className="alert flex justify-center">
                        <span className="loading loading-lg"></span>
                    </div>
                </div>
            ) : error ? (
                <div className="p-2 rounded-lg">
                    <div className="overflow-x-auto">
                        <table className="table font-poppins">
                            <caption className="text-left text-xl font-bold mb-4">
                                Contact Messages
                            </caption>
                        </table>
                    </div>
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
            ) : (
                <div className="p-2 stats shadow-lg border border-base-300">
                    <div className="stat overflow-x-auto flex flex-col gap-4">
                        <div className="stat-title">All Users</div>
                        <table className="table table-xs font-poppins table-zebra">
                            <thead>
                                <tr>
                                    <th>Subject</th>
                                    <th>Email</th>
                                    <th>Message</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contacts?.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{item.subject}</td>
                                            <td>{item.email}</td>
                                            <td>{item.message}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </>
    );
};

export default ContactTable;
