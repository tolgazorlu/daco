import Window from "./Window";
import TolgaZorluImage from "../../assets/auhtor/tolgazorlu.jpg";

const Hero = () => {
    return (
        <section className="lg:grid grid-cols-2 px-4 lg:px-24 overflow-hidden">
            <div className="hidden h-screen lg:flex flex-col items-center justify-center gap-10 ">
                <div className="w-96 h-96 absolute rounded bg-base-300 mt-8 mr-8"></div>
                <div className="w-96 h-96 rounded bg-neutral  mt-16 mr-16"></div>
                <img className="absolute rounded w-96" src={TolgaZorluImage} />
            </div>

            <Window />
        </section>
    );
};

export default Hero;
