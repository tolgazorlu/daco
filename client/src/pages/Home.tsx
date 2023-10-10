import { Helmet } from "react-helmet-async";
import Hero from "../components/Home/Hero";
import Navbar from "../layouts/Navbar";
import {
  FullScreen,
  FullScreenHandle,
  useFullScreenHandle,
} from "react-full-screen";

const Home = () => {
    const handle: FullScreenHandle = useFullScreenHandle();
    return (
      <>
      <Helmet>
          <title>DACO</title>
        </Helmet>
        <FullScreen handle={handle}>
          <div className="px-0 lg:px-20 h-screen" id="screen">
            <Navbar fullscreenHandle={handle} />
            <Hero />
          </div>
        </FullScreen>
      </>
    );
}

export default Home