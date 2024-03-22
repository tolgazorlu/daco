import { Helmet } from "react-helmet-async";
import Hero from "./Hero";
import Layout from "../Layouts";
import { useContext } from "react";
import { User } from "../../contexts/User";
const Home = () => {
    const { userInfo } = useContext(User).state;

    return (
        <>
            {userInfo ? (
                <Helmet>
                    <title>Welcome {userInfo.username}</title>
                </Helmet>
            ) : (
                <Helmet>
                    <title>Welcome to DACO!</title>
                </Helmet>
            )}
            <div className="h-screen">
                <Layout />
                <Hero />
            </div>
        </>
    );
};

export default Home;
