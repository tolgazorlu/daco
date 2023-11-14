import { Helmet } from "react-helmet-async";
import Layout from "../layouts/Layout";
import { useContext } from "react";
import { User } from "../contexts/User";

const EmailVerify = () => {
  const { state } = useContext(User);
  const { userInfo } = state;

  if (!userInfo?.emailVerified) {
    return (
      <>
        <Helmet>
          <title>Verify Email!</title>
        </Helmet>
        <Layout />
        <div>
          <div className="h-screen flex flex-col items-center justify-center">
            <span className="text-4xl font-poppins text-error">
              You need to verify your email address, check your email!
            </span>
          </div>
        </div>
      </>
    );
  } else {
    <>
      <Helmet>
        <title></title>
      </Helmet>
      <Layout />
      <div>
        <div className="h-screen flex flex-col items-center justify-center">
          <span className="text-4xl font-poppins text-success">
            Email successfullt verified!
          </span>
        </div>
      </div>
    </>;
  }
};

export default EmailVerify;
