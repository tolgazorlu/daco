import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import StarsImage from "../../assets/parallax/stars.png";
import NeutronImage from "../../assets/parallax/neutron.png";
import GroundImage from "../../assets/parallax/ground.png";
import AstronoutImage from "../../assets/parallax/astronaut.png";
import Hero from "./Hero";
import Vision from "./Vision";
import Testimotion from "./Testimotion";

const ParallaxPage = () => {
    return (
        <Parallax pages={1.5} className="bg-black">
            <ParallaxLayer offset={0} speed={0.5}>
                <img src={StarsImage} className="absolute animate-pulse" />
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.1}>
                <div className="h-[70vh] w-full flex justify-around items-center text-secondary-content font-bandal">
                    <span className="text-2xl animate-textLeft font-bold text-gray-300 blur-[0.5px]">
                        Hello World,
                    </span>
                    <span className="text-2xl animate-textRight font-bold text-gray-300 blur-[0.5px]">
                        This is{" "}
                        <span className="text-gray-300 blur-[0.5px]">
                            dacospace
                        </span>
                        !
                    </span>
                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={2}>
                <img src={NeutronImage} />
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={2.5}>
                <img src={GroundImage} />
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={2.5}>
                <img src={AstronoutImage} />
                <div className="lg:py-20">
                    <Hero />
                    <Vision />
                    <Testimotion />
                </div>
            </ParallaxLayer>
        </Parallax>
    );
};

export default ParallaxPage;
