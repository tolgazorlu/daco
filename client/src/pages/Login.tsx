import {
  FullScreen,
  FullScreenHandle,
  useFullScreenHandle,
} from "react-full-screen";
import { Helmet } from "react-helmet-async";
import Navbar from "../layouts/Navbar";
import HeroImage from '../assets/algorithm.avif';

const Login = () => {
  const handle: FullScreenHandle = useFullScreenHandle();
  return (
    <>
      <Helmet>
        <title>DACO</title>
      </Helmet>
      <FullScreen handle={handle}>
        <div className="px-0 lg:px-20" id="screen">
          <Navbar fullscreenHandle={handle} />
        </div>
        <div className="flex h-[90vh] py-8">
          <div className="h-[90vh] w-1/2 flex justify-end">
            <img className="h-[80vh] rounded-2xl border-4 border-secondary" src={HeroImage} />
          </div>
          <div className="w-1/2 p-8 m-auto rounded-md  lg:max-w-lg">
            <h1 className="text-3xl font-semibold text-center text-primary font-aubette">
              LOGIN
            </h1>
            <form className="space-y-4 font-poppins">
              <div>
                <label className="label">
                  <span className="text-base label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Email Address"
                  className="w-full input input-bordered input-primary"
                />
              </div>
              <div>
                <label className="label">
                  <span className="text-base label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="w-full input input-bordered input-primary"
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
                <button className="btn btn-primary font-poppins shadow-md shadow-primary/50">Login</button>
              </div>
            </form>
          </div>
        </div>
      </FullScreen>
    </>
  );
};

export default Login;
