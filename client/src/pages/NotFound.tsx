import { Helmet } from "react-helmet-async";
import Layout from "../layouts/Layout";

const NotFount = () => {
  return (
    <>
      <Helmet>
        <title>DACO</title>
      </Helmet>
      <>
        <Layout />
        <div className="px-0 lg:px-20 h-screen" id="screen">
          <div className="h-[80vh] flex flex-col items-center justify-center">
            <span className="text-8xl font-aubette text-error">404</span>
            <span className="text-6xl font-aubette text-error">
              PAGE NOT FOUND!
            </span>
          </div>
        </div>
      </>
    </>
  );
};

export default NotFount;
