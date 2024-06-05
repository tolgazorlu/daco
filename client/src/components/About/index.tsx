import Layout from "../Layouts";
import Hero from "./Hero";
import ParallaxPage from "./ParallaxPage";
import Schedule from "./Schedule";
import Testimotion from "./Testimotion";
import Vision from "./Vision";
const About = () => {
    return (
        <>
            <Layout />
            <div className="hidden lg:block">
                <ParallaxPage />
            </div>
            <div className="block lg:hidden">
                <Hero />
                <Vision />
                <Schedule />
                <Testimotion />
            </div>
        </>
    );
};

export default About;
