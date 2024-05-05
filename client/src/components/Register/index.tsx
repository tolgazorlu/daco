import { Helmet } from "react-helmet-async";
import { FormEvent, useContext, useEffect, useState } from "react";
import { useRegisterMutation } from "../../hooks/userHooks";
import { getError } from "../../utils/getError";
import { ApiError } from "../../types/ApiError";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { VscLoading } from "react-icons/vsc";
import { User } from "../../contexts/User";

const Register = () => {
    const navigation = useNavigate();

    const { state } = useContext(User);
    const { userInfo } = state;

    const { search } = useLocation();
    const redirectInUrl = new URLSearchParams(search).get("redirect");
    const redirect = redirectInUrl ? redirectInUrl : "/login";

    const { mutateAsync: register, isLoading } = useRegisterMutation();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isPasswordMatched, setIsPasswordMatched] = useState(false);
    const [validate, setValidate] = useState({
        hasLow: false,
        hasCap: false,
        hasNumber: false,
        has8digit: false,
    });

    const strength = Object.values(validate).reduce(
        (a, item) => a + Number(item),
        0,
    );
    const feedback = {
        1: "Password is to weak!",
        2: "It's still weak! ",
        3: "You almost there!",
        4: "Great!! now your password is strong",
    }[strength];

    const validatePassword = (password: string) => {
        if (password.match(/\d+/g)) {
            setValidate((o) => ({ ...o, hasNumber: true }));
        } else {
            setValidate((o) => ({ ...o, hasNumber: false }));
        }

        if (password.match(/[A-Z]+/g)) {
            setValidate((o) => ({ ...o, hasCap: true }));
        } else {
            setValidate((o) => ({ ...o, hasCap: false }));
        }

        if (password.match(/[a-z]+/g)) {
            setValidate((o) => ({ ...o, hasLow: true }));
        } else {
            setValidate((o) => ({ ...o, hasLow: false }));
        }

        if (password.length > 7) {
            setValidate((o) => ({ ...o, has8digit: true }));
        } else {
            setValidate((o) => ({ ...o, has8digit: false }));
        }
    };

    const checkPasswordisMatch = (pw: string) => {
        if (password === pw) {
            setIsPasswordMatched(true);
        } else {
            setIsPasswordMatched(false);
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (password == confirmPassword) {
            try {
                await register({
                    username: username,
                    email: email,
                    password: password,
                    role: "learner",
                });
                toast.success("Please check your email!");
                setInterval(() => {
                    navigation(redirect || "/login");
                }, 3000);
            } catch (error) {
                toast.error(getError(error as ApiError));
            }
        }
    };

    useEffect(() => {
        if (userInfo) {
            navigation(redirect);
        }
    }, [navigation, redirect, userInfo]);

    return (
        <>
            <Helmet>
                <title>Register and deep dive into it!</title>
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
            <section className="lg:grid grid-cols-2 overflow-hidden font-bandal">
                <div className="grid grid-cols-1 border-r border-primary/30 w-full bg-base-200">
                    <div className=" flex justify-center items-end">
                        <span className="text-8xl font-bandal text-neutral absolute">
                            dacospace
                        </span>
                        <span className="text-8xl font-bandal text-base-content absolute mb-3 mr-3">
                            dacospace
                        </span>
                        <span className="text-8xl font-bandal text-primary absolute mb-1.5 mr-1.5">
                            dacospace
                        </span>
                    </div>
                    <div className=" flex justify-center px-24 text-center text-2xl">
                        <span>
                            <span className="text-warning">Welcome back!</span>{" "}
                            We're delighted to have you here. Please enter your
                            credentials to access your account and begin your
                            journey with{" "}
                            <span className="text-primary">dacospace</span>.
                        </span>
                    </div>
                </div>
                <div className="h-screen md:snap-start flex flex-col justify-center items-center">
                    <h1 className="text-3xl font-semibold font-bandal">
                        Create your free account!
                    </h1>
                    <form
                        className="space-y-4 font-poppins"
                        onSubmit={handleSubmit}
                    >
                        <div>
                            <label className="label">
                                <span className="text-base label-text">
                                    Username
                                </span>
                            </label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Username"
                                className="w-full input input-bordered input-neutral rounded"
                                required
                            />
                        </div>
                        <div>
                            <label className="label">
                                <span className="text-base label-text">
                                    Email
                                </span>
                            </label>
                            <input
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email Address"
                                className="w-full input input-bordered input-neutral rounded"
                                required
                            />
                        </div>
                        <div>
                            <label className="label">
                                <span className="text-base label-text">
                                    Password
                                </span>
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    validatePassword(e.target.value);
                                }}
                                placeholder="Enter Password"
                                className="w-full input input-bordered input-neutral rounded"
                                required
                            />
                            <div
                                className={
                                    strength == 1
                                        ? "text-error mt-2"
                                        : strength == 2
                                          ? "text-warning mt-2"
                                          : strength == 3
                                            ? "text-info mt-2"
                                            : "text-success mt-2"
                                }
                                hidden={password.length === 0}
                            >
                                {feedback}
                            </div>
                            {strength > 0 ? (
                                <progress
                                    hidden={password.length === 0}
                                    className={
                                        strength == 1
                                            ? "w-full mt-2 progress-error"
                                            : strength == 2
                                              ? "transition  w-full  mt-2 progress-warning"
                                              : strength == 3
                                                ? " w-full  mt-2 progress-info"
                                                : " w-full  mt-2 progress-success"
                                    }
                                    value={strength}
                                    max="4"
                                />
                            ) : null}
                        </div>
                        <div>
                            <label className="label">
                                <span className="text-base label-text">
                                    Password Confirm
                                </span>
                            </label>
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => {
                                    setConfirmPassword(e.target.value);
                                    checkPasswordisMatch(e.target.value);
                                }}
                                placeholder="Confirm Password"
                                className="w-full input input-bordered input-neutral rounded"
                                required
                            />
                        </div>
                        {confirmPassword.length > 0 &&
                        isPasswordMatched == false ? (
                            <div className="text-error">
                                Passwords is not same! Please check again!
                            </div>
                        ) : null}

                        <div>
                            <button
                                className={
                                    strength > 3 && isPasswordMatched
                                        ? "px-6 btn w-full btn-primary text-primary-content font-poppins rounded"
                                        : "px-6 btn w-full btn-disabled font-poppins rounded"
                                }
                            >
                                {isLoading ? (
                                    <VscLoading className="animate-spin" />
                                ) : (
                                    <span>Register</span>
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
                                Sign Up with Google<div></div>
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
                                Sign Up with Github<div></div>
                            </button>
                        </div>
                        <div>
                            <a
                                href="/login"
                                className="text-xs text-info hover:underline float-right"
                            >
                                If you have an account
                            </a>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Register;
