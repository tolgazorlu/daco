import {
  FullScreen,
  FullScreenHandle,
  useFullScreenHandle,
} from "react-full-screen";
import { Helmet } from "react-helmet-async";
import Navbar from "../layouts/Navbar";
import { FormEvent, useState } from "react";
import { useRegisterMutation } from "../hooks/userHooks";
import { getError } from "../utils/getError";
import { ApiError } from "../types/ApiError";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { VscLoading } from "react-icons/vsc";

const Register = () => {
  const handle: FullScreenHandle = useFullScreenHandle();

  const navigation = useNavigate();

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
    0
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
    try {
      if (password == confirmPassword) {
        await register({
          username: username,
          email: email,
          password: password,
          isAdmin: false,
        })
          .then(() => {
            setTimeout(() => {
              navigation("/login");
            }, 1000);
            toast.success("Registration successed!");
          })
          .catch(() => {
            toast.error("Registration failed!");
          });
      }
    } catch (error) {
      toast.error(getError(error as ApiError));
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Helmet>
        <title>DACO</title>
      </Helmet>
      <FullScreen handle={handle}>
        <div className="px-0 lg:px-20" id="screen">
          <Navbar fullscreenHandle={handle} />
        </div>
        <div className="flex h-[90vh] py-8">
          <div className="w-1/2 p-8 m-auto rounded-md  lg:max-w-lg">
            <h1 className="text-3xl font-semibold text-center text-primary font-aubette">
              REGISTER
            </h1>
            <form className="space-y-4 font-poppins" onSubmit={handleSubmit}>
              <div>
                <label className="label">
                  <span className="text-base label-text">Username</span>
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                  className="w-full input input-bordered input-primary"
                  required
                />
              </div>
              <div>
                <label className="label">
                  <span className="text-base label-text">Email</span>
                </label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  className="w-full input input-bordered input-primary"
                  required
                />
              </div>
              <div>
                <label className="label">
                  <span className="text-base label-text">Password</span>
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    validatePassword(e.target.value);
                  }}
                  placeholder="Enter Password"
                  className="w-full input input-bordered input-primary"
                  required
                />
                {strength > 0 ? (
                  <progress
                    hidden={password.length === 0}
                    className={
                      strength == 1
                        ? "progress w-full progress-error"
                        : strength == 2
                        ? "progress w-full progress-warning"
                        : strength == 3
                        ? "progress w-full progress-info"
                        : "progress w-full progress-success"
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
                  <span className="text-base label-text">Password Confirm</span>
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    checkPasswordisMatch(e.target.value);
                  }}
                  placeholder="Confirm Password"
                  className="w-full input input-bordered input-primary"
                  required
                />
              </div>
              {confirmPassword.length > 0 && isPasswordMatched == false ? (
                <div className="text-error">
                  Passwords is not same! Please check again!
                </div>
              ) : null}
              <div>
                <a href="/login" className="text-xs text-info hover:underline">
                  If you have an account
                </a>
              </div>
              <div>
                <button
                  className={
                    strength > 3 && isPasswordMatched
                      ? "px-6 btn btn-primary font-poppins shadow-md shadow-primary/50"
                      : "px-6 btn btn-disabled font-poppins "
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
      </FullScreen>
    </>
  );
};

export default Register;
