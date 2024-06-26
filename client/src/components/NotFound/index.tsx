import { Helmet } from "react-helmet-async";
import Layout from "../Layouts";

const NotFount = () => {
    return (
        <>
            <Helmet>
                <title>Page Not Found!</title>
            </Helmet>
            <Layout />
            <div className="px-0 lg:px-20 h-screen" id="screen">
                <div className="h-screen flex flex-col items-center justify-center">
                    <span className="text-3xl md:text-8xl font-aubette text-error">
                        404
                    </span>
                    <span className="text-2xl md:text-7xl font-bold font-poppins text-error">
                        PAGE NOT FOUND!
                    </span>
                </div>
            </div>
        </>
    );
};

export default NotFount;
