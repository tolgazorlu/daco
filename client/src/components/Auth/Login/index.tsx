import { Helmet } from "react-helmet-async";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { User } from "../../../contexts/User";
import { useLoginMutation } from "../../../hooks/userHooks";
import { ToastContainer, toast } from "react-toastify";
import { getError } from "../../../utils/getError";
import { ApiError } from "../../../types/ApiError";
import { VscLoading } from "react-icons/vsc";
import BannerSide from "../BannerSide";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailValidate, setEmailValidate] = useState(false);

    const validateEmail = (email: string) => {
        if (email.match(/\S+@\S+\.\S+/)) {
            setEmailValidate(true);
        } else {
            setEmailValidate(false);
        }
    };

    const navigate = useNavigate();

    const { search } = useLocation();
    const redirectInUrl = new URLSearchParams(search).get("redirect");
    const redirect = redirectInUrl ? redirectInUrl : "/home";

    const { state, dispatch } = useContext(User);
    const { userInfo } = state;

    const { mutateAsync: login, isLoading } = useLoginMutation();

    const submitHandler = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        try {
            const data = await login({
                email,
                password,
            });
            if (data.token) {
                toast.success("Login successfully");
                setTimeout(() => {
                    navigate(redirect || "/home");
                }, 3000);
                dispatch({ type: "USER_SIGNIN", payload: data });
                localStorage.setItem("userInfo", JSON.stringify(data));
            }
        } catch (error) {
            toast.error(getError(error as ApiError));
        }
    };

    useEffect(() => {
        if (userInfo) {
            navigate(redirect);
        }
    }, [navigate, redirect, userInfo]);

    return (
        <>
            <Helmet>
                <title>You can login in this page!</title>
            </Helmet>
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
            <section className="lg:grid grid-cols-2 overflow-hidden px-4">
                <BannerSide />
                <div className="h-screen md:snap-start flex flex-col justify-center lg:items-center">
                    <h1 className="text-3xl font-semibold font-bandal">
                        Welcome back!
                    </h1>
                    <form
                        className="space-y-4 font-poppins"
                        onSubmit={submitHandler}
                    >
                        <div>
                            <label className="label">
                                <span className="text-base label-text">
                                    Email
                                </span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    validateEmail(e.target.value);
                                }}
                                placeholder="Email Address"
                                className="w-full input input-bordered input-neutral rounded"
                                required
                            />
                            {!emailValidate && email.length > 10 ? (
                                <span className="block w-full text-error px-2 py-1">
                                    Email format is invalid!
                                </span>
                            ) : null}
                        </div>
                        <div>
                            <label className="label">
                                <span className="text-base label-text">
                                    Password
                                </span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter Password"
                                className="w-full input input-bordered input-neutral rounded"
                                required
                            />
                        </div>

                        <div>
                            <button className="btn w-full btn-primary text-primary-content font-bold rounded">
                                {isLoading ? (
                                    <VscLoading className="animate-spin" />
                                ) : (
                                    <span>Sign In</span>
                                )}
                            </button>
                        </div>
                        <div className="divider">OR</div>

                        <div className="grid grid-cols-2 gap-2">
                            <button
                                type="button"
                                className="btn w-full text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded text-sm px-5 py-2.5 text-center inline-flex items-center justify-center lg:justify-between"
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    fill="currentColor"
                                    className="lg:mr-2"
                                    viewBox="0 0 1792 1792"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z"></path>
                                </svg>
                                <span className="hidden lg:block">
                                    Continue with Google
                                </span>
                                <div></div>
                            </button>
                        </div>

                        <div className="flex justify-between">
                            <div>
                                <a
                                    href="/forgot-password"
                                    className="text-xs text-primary hover:underline"
                                >
                                    Forgot password
                                </a>
                            </div>
                            <div>
                                <a
                                    href="/register"
                                    className="text-xs text-info hover:underline"
                                >
                                    If you don't have any account
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Login;
