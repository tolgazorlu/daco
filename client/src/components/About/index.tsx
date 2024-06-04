import Layout from "../Layouts";
import ParallaxPage from "./ParallaxPage";
const About = () => {
    return (
        <>
            <Layout />
            <div className="hidden lg:block">
                <ParallaxPage />
            </div>
        </>
    );
};

export default About;
