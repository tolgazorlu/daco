import { Helmet } from "react-helmet-async";
import Hero from "../components/Home/Hero";
import Navbar from "../layouts/Navbar";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>DACO</title>
      </Helmet>
      <div>
        <Navbar />
        <Hero />
      </div>
    </>
  );
};

export default Home;
