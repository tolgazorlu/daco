import { ToastContainer } from "react-toastify";
import Contact from "../Contact";
import Faq from "../FAQ";
import Layout from "../Layouts";
import Footer from "../Layouts/Footer";
import Calendar from "./Calendar";
import Hero from "./Hero";

const index = () => {
    return (
        <>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                stacked
            />
            <Layout />
            <section className="lg:grid grid-cols-2 px-4 lg:px-24 overflow-hidden">
                <Hero />
                <Calendar />
            </section>
            <Faq />
            <Contact />
            <Footer />
        </>
    );
};

export default index;
