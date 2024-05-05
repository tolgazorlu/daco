import { Helmet } from "react-helmet-async";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { User } from "../../contexts/User";
import { useLoginMutation } from "../../hooks/userHooks";
import { ToastContainer, toast } from "react-toastify";
import { getError } from "../../utils/getError";
import { ApiError } from "../../types/ApiError";
import { VscLoading } from "react-icons/vsc";
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
            <section className="lg:grid grid-cols-2 overflow-hidden">
                <div className="h-screen md:snap-start flex flex-col justify-center items-center">
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
                                className="btn w-full text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded text-sm px-5 py-2.5 text-center inline-flex items-center justify-between"
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    fill="currentColor"
                                    className="mr-2"
                                    viewBox="0 0 1792 1792"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z"></path>
                                </svg>
                                Continue with Google<div></div>
                            </button>
                            <button
                                type="button"
                                className="btn w-full text-white  bg-neutral hover:bg-neutral/80 focus:ring-4 focus:outline-none focus:ring-[#4B5563]/50 font-medium rounded text-sm px-5 py-2.5 text-center inline-flex items-center justify-between"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    fill="currentColor"
                                    className="mr-2"
                                    viewBox="0 0 1792 1792"
                                >
                                    <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
                                </svg>
                                Continue with Github<div></div>
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
                <div className="border-l w-full h-full bg-base-200 flex justify-center items-center">
                    <span className="text-8xl font-bandal text-accent">
                        dacospace
                    </span>
                </div>
            </section>
        </>
    );
};

export default Login;
