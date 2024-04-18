import Window from "./Window";

const Hero = () => {
    return (
        <section className="lg:grid grid-cols-3 px-24 overflow-hidden bg-base-200 mt-20">
            <Window />
            {/* <div className="hidden h-screen lg:flex flex-col items-center justify-center gap-10 ">
                <div className="w-96 h-96 absolute rounded bg-warning mt-8 mr-8"></div>
                <div className="w-96 h-96 rounded bg-neutral  mt-16 mr-16"></div>
                <img className="absolute rounded w-96" src={TolgaZorluImage} />
            </div> */}
        </section>
    );
};

export default Hero;
