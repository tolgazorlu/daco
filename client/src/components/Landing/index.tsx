import { ToastContainer } from "react-toastify";
import Contact from "../Contact";
import Faq from "../FAQ";
import Layout from "../Layouts";
import Footer from "../Layouts/Footer";
import Hero from "./Hero";
import PopularCourses from "./PopularCourses";
import CourseCategories from "./CourseCategories";

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
            <Hero />
            <PopularCourses />
            <CourseCategories />

            <Faq />
            <Contact />
            <Footer />
        </>
    );
};

export default index;
