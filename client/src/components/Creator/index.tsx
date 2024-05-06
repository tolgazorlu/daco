import Layout from "../Layouts";
import Footer from "../Layouts/Footer";
import Experiences from "./Experiences";
import Hero from "./Hero";
import Works from "./Works";

const Creator = () => {
    return (
        <>
            <Layout />
            <Hero />
            <Works />
            <Experiences />
            <Footer />
        </>
    );
};

export default Creator;
