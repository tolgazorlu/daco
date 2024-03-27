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
import Layout from "../Layouts";

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
                    isAdmin: false,
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
                theme="colorful"
                stacked
            />
            <Layout />
            <div className="flex h-screen justify-center items-center">
                <div className="p-2 md:px-8 w-full md:w-1/2">
                    <h1 className="text-3xl font-semibold text-center font-poppins">
                        REGISTER
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
                            {strength > 0 ? (
                                <progress
                                    hidden={password.length === 0}
                                    className={
                                        strength == 1
                                            ? "w-full h-5 mt-2 progress-error"
                                            : strength == 2
                                              ? "transition rounded w-full h-5 mt-2 progress-warning"
                                              : strength == 3
                                                ? "rounded w-full h-5 mt-2 progress-info"
                                                : "rounded w-full h-5 mt-2 progress-success"
                                    }
                                    value={strength}
                                    max="4"
                                />
                            ) : null}
                            <br />
                            <div
                                className={
                                    strength == 1
                                        ? "text-error"
                                        : strength == 2
                                          ? "text-warning"
                                          : strength == 3
                                            ? "text-info"
                                            : "text-success"
                                }
                                hidden={password.length === 0}
                            >
                                {feedback}
                            </div>
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
                            <a
                                href="/login"
                                className="text-xs text-primary hover:underline"
                            >
                                If you have an account
                            </a>
                        </div>
                        <div>
                            <button
                                className={
                                    strength > 3 && isPasswordMatched
                                        ? "px-6 btn w-full btn-neutral text-neutral-content font-poppins rounded"
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
                    </form>
                </div>
            </div>
        </>
    );
};

export default Register;
