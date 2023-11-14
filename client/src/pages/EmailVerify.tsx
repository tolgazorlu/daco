import { Helmet } from "react-helmet-async";
import Layout from "../layouts/Layout";

const EmailVerify = () => {
  return (
    <>
      <Helmet>
        <title>Verify Email!</title>
      </Helmet>
      <Layout />
      <div>
        <div className="h-screen flex flex-col items-center justify-center">
          <span className="text-4xl font-poppins">
            You need to verify your email address, check your email!
          </span>
        </div>
      </div>
    </>
  );
};

export default EmailVerify;
