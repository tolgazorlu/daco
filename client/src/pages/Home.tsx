import { Helmet } from "react-helmet-async";
import Hero from "../components/Home/Hero";
import Layout from "../layouts/Layout";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>DACO</title>
      </Helmet>
      <div>
        <Layout />
        <Hero />
      </div>
    </>
  );
};

export default Home;
