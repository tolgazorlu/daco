import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { useVerifyEmailMutation } from "../../../hooks/userHooks";
import { getError } from "../../../utils/getError";
import { ApiError } from "../../../types/ApiError";
import Layout from "../../Layouts";

const EmailVerify = () => {
    const [validUrl, setValidUrl] = useState(false);
    const param = useParams();
    const { mutateAsync: verifyEmail } = useVerifyEmailMutation();

    useEffect(() => {
        const emailVerify = async () => {
            if (param.token && param.id)
                try {
                    await verifyEmail({
                        id: param.id,
                        token: param.token,
                    });
                    setValidUrl(true);
                } catch (error) {
                    console.log(getError(error as ApiError));
                    setValidUrl(false);
                }
        };

        emailVerify();
    }, [param, verifyEmail]);

    return (
        <>
            {validUrl ? (
                <>
                    <Helmet>
                        <title></title>
                    </Helmet>
                    <Layout />
                    <div>
                        <div className="h-screen flex flex-col items-center justify-center">
                            <span className="text-7xl font-poppins text-success">
                                Email successfully verified!
                            </span>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <Helmet>
                        <title></title>
                    </Helmet>
                    <Layout />
                    <div>
                        <div className="h-screen flex flex-col items-center justify-center">
                            <span className="text-7xl font-poppins text-error">
                                Something went wrong!
                            </span>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default EmailVerify;
