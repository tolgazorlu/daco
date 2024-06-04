import Layout from "../Layouts";
import Calendar from "./Calendar";
import Hero from "./Hero";

const index = () => {
    return (
        <>
            <Layout />
            <section className="lg:grid grid-cols-2 px-4 lg:px-24 overflow-hidden">
                <Hero />
                <Calendar />
            </section>
        </>
    );
};

export default index;
