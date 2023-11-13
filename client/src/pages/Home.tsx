import { Helmet } from "react-helmet-async";
import Hero from "../components/Home/Hero";
import Layout from "../layouts/Layout";
import { useContext } from "react";
import { User } from "../contexts/User";

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

      <div>
        <Layout />
        <Hero />
      </div>
    </>
  );
};

export default Home;
