import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import StarsImage from "../../assets/parallax/stars.png";
import NeutronImage from "../../assets/parallax/neutron.png";
import GroundImage from "../../assets/parallax/ground.png";
import AstronoutImage from "../../assets/parallax/astronaut.png";

const ParallaxPage = () => {
    return (
        <Parallax pages={1.3} className="bg-black">
            <ParallaxLayer offset={0} speed={0.5}>
                <img src={StarsImage} className="absolute animate-pulse" />
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.1}>
                <div className="h-[70vh] w-full flex justify-around items-center text-secondary-content font-bandal">
                    <span className="text-2xl animate-textLeft font-bold text-white">
                        Hello World,
                    </span>
                    <span className="text-2xl animate-textRight font-bold text-white">
                        This is <span className="text-accent">dacospace</span>!
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
                <div className="h-auto bg-black text-slate-300 px-24 font-bricolage text-xl">
                    <p>
                        Hi, This is Tolga!
                        <br />
                        <br />
                        Born and raised in Turkey, my fascination with computers
                        led me to pursue a career in software engineering.
                        Specializing in web3, AI, and full-stack development,
                        I've enjoyed solving complex problems and crafting
                        innovative solutions.
                        <br />
                        <br /> Outside of work, I'm an avid reader and music
                        enthusiast. Exploring the intersection of art and
                        technology has been a constant source of inspiration,
                        fueling my creativity and drive.
                        <br />
                        <br />
                        My journey is a blend of technical expertise, artistic
                        exploration, and a passion for making a positive impact
                        through technology and creativity.
                    </p>
                </div>
            </ParallaxLayer>
        </Parallax>
    );
};

export default ParallaxPage;
