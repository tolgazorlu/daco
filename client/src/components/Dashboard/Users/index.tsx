import { Helmet } from "react-helmet-async";
import UsersTable from "../UsersTable";
import Layout from "../../Layouts";

const Users = () => {
    return (
        <>
            <Helmet>
                <title>Admin cockpit for Users</title>
            </Helmet>
            <Layout />
            <div className="px-4 py-8 lg:px-32 sm:ml-64 mt-14 flex flex-col gap-4">
                <UsersTable />
            </div>
        </>
    );
};

export default Users;
