import { Helmet } from "react-helmet-async";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { User } from "../../contexts/User";
import { useLoginMutation } from "../../hooks/userHooks";
import { ToastContainer, toast } from "react-toastify";
import { getError } from "../../utils/getError";
import { ApiError } from "../../types/ApiError";
import { VscLoading } from "react-icons/vsc";
import Layout from "../Layouts";

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
  const redirect = redirectInUrl ? redirectInUrl : "/";

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
          navigate(redirect || "/");
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
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Layout />
      <div className="flex h-screen justify-center items-center">
        <div className="p-2 md:px-8 w-full md:w-1/2">
          <h1 className="text-3xl font-semibold text-center text-primary font-aubette">
            LOGIN
          </h1>
          <form className="space-y-4 font-poppins" onSubmit={submitHandler}>
            <div>
              <label className="label">
                <span className="text-base label-text">Email</span>
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
                className="w-full input input-bordered input-primary"
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
                <span className="text-base label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                className="w-full input input-bordered input-primary"
                required
              />
            </div>
            <div className="flex justify-between">
              <div>
                <a href="/forgot-password" className="text-xs text-info hover:underline">
                  Forgot password
                </a>
              </div>
              <div>
                <a
                  href="/register"
                  className="text-xs text-secondary hover:underline"
                >
                  If you don't have any account
                </a>
              </div>
            </div>

            <div>
              <button className="btn w-full btn-primary font-poppins shadow-md shadow-primary/50">
                {isLoading ? (
                  <VscLoading className="animate-spin" />
                ) : (
                  <span>Login</span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
