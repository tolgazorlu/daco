import { Helmet } from "react-helmet-async";
import Hero from "../components/Home/Hero";
import Layout from "../layouts/Layout";
import { useContext } from "react";
import { User } from "../contexts/User";
import FeaturedIn from "../components/Home/FeaturedIn";

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
          <title>Welcome to DALE!</title>
        </Helmet>
      )}
      <div className="snap-y snap-mandatory h-screen overflow-scroll">
        <Layout />
        <Hero />
        <FeaturedIn />
      </div>
    </>
  );
};

export default Home;
