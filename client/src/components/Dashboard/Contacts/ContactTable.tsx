import { useGetContactsQuery } from "../../../hooks/contactHook";

const ContactTable = () => {
    const { data: contacts, isLoading, error } = useGetContactsQuery();

    return (
        <>
            {isLoading ? (
                <div className="rounded">
                    <div className="alert flex justify-center">
                        <span className="loading loading-lg"></span>
                    </div>
                </div>
            ) : error ? (
                <div className="rounded">
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
                        <span>Error! Messages can not loaded.</span>
                    </div>
                </div>
            ) : (
                <>
                    <div className="stat-title font-bold font-poppins">
                        Messages
                    </div>
                    <div className="relative overflow-x-auto rounded shadow-lg ">
                        <table className="w-full text-sm text-left">
                            {contacts?.length == 0 ? (
                                <tbody>
                                    <tr>
                                        <td role="alert" className="alert">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                className="stroke-info shrink-0 w-6 h-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                ></path>
                                            </svg>
                                            <span>
                                                You don't have any messages
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            ) : (
                                <>
                                    <thead className="text-xs uppercase bg-neutral text-neutral-content">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Subject
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Email
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Message
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {contacts?.map((item, index) => {
                                            return (
                                                <tr
                                                    key={index}
                                                    className="border-b border-base-300 bg-base-200"
                                                >
                                                    <th className="px-6 py-4 font-medium">
                                                        {item.subject}
                                                    </th>
                                                    <th
                                                        scope="row"
                                                        className="px-6 py-4 font-medium"
                                                    >
                                                        {item.email}
                                                    </th>
                                                    <th
                                                        scope="row"
                                                        className="px-6 py-4 font-medium"
                                                    >
                                                        {item.message}
                                                    </th>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </>
                            )}
                        </table>
                    </div>
                </>
            )}
        </>
    );
};

export default ContactTable;
