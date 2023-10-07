import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./layouts/Navbar";
import {
  FullScreen,
  FullScreenHandle,
  useFullScreenHandle,
} from "react-full-screen";

const App = () => {
  const handle: FullScreenHandle = useFullScreenHandle();
  return (
    <FullScreen handle={handle}>
      <div className="px-0 lg:px-20 h-screen" id="screen">
        <Navbar fullscreenHandle={handle} />
        <Hero />
      </div>
    </FullScreen>
  );
};

export default App;
