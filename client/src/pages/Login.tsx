import {
  FullScreen,
  FullScreenHandle,
  useFullScreenHandle,
} from "react-full-screen";
import { Helmet } from "react-helmet-async";
import Navbar from "../layouts/Navbar";
import HeroImage from "../assets/algorithm.avif";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { User } from "../contexts/User";
import { useLoginMutation } from "../hooks/userHooks";
import { ToastContainer, toast } from "react-toastify";
import { getError } from "../utils/getError";
import { ApiError } from "../types/ApiError";
import { VscLoading } from "react-icons/vsc";

const Login = () => {
  const handle: FullScreenHandle = useFullScreenHandle();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        dispatch({ type: "USER_SIGNIN", payload: data });
        localStorage.setItem("userInfo", JSON.stringify(data));
        toast.success("Login successfully");
        setTimeout(() => {
          navigate(redirect || "/");
        }, 3000);
      } else {
        toast.error("Invalid email or password");
      }
    } catch (err) {
      toast.error(getError(err as ApiError));
    }
  };

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

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
          <div className="h-[90vh] w-1/2 flex justify-end">
            <img
              className="h-[80vh] rounded-2xl border-4 border-secondary"
              src={HeroImage}
            />
          </div>
          <div className="w-1/2 p-8 m-auto rounded-md  lg:max-w-lg">
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
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password"
                  className="w-full input input-bordered input-primary"
                  required
                />
              </div>
              <div>
                <a
                  href="/register"
                  className="text-xs text-info hover:underline"
                >
                  If you don't have any account
                </a>
              </div>
              <div>
                <button className="btn btn-primary font-poppins shadow-md shadow-primary/50">
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
      </FullScreen>
    </>
  );
};

export default Login;
