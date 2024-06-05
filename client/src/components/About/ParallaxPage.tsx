import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import StarsImage from "../../assets/parallax/stars.png";
import NeutronImage from "../../assets/parallax/neutron.png";
import GroundImage from "../../assets/parallax/ground.png";
import AstronoutImage from "../../assets/parallax/astronaut.png";
import Hero from "./Hero";
import Testimotion from "./Testimotion";
import Vision from "./Vision";
import Schedule from "./Schedule";
import Pricing from "./Pricing";

const ParallaxPage = () => {
    return (
        <Parallax pages={2.5} className="bg-black">
            <ParallaxLayer offset={0.1} speed={1}>
                <img
                    src={StarsImage}
                    className="absolute animate-pulse z-[999]"
                />
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.1}>
                <div className="h-[70vh] w-full flex justify-around items-center text-secondary-content font-bandal z-[999]">
                    <span className="text-2xl animate-textLeft font-bold text-primary ">
                        Hello World,
                    </span>
                    <span className="text-2xl animate-textRight font-bold text-primary ">
                        This is <span className="text-primary ">dacospace</span>
                        !
                    </span>
                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={1.8}>
                <img src={NeutronImage} className="z-[999]" />
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={2}>
                <img src={GroundImage} className="z-[999]" />
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={2}>
                <img src={AstronoutImage} className="z-[999]" />
                <Hero />
                <Vision />
                <Schedule />
                <Pricing />
                <Testimotion />
            </ParallaxLayer>
        </Parallax>
    );
};

export default ParallaxPage;
