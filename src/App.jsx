import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./section/Header/";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowDown, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import Navbar from "./section/Navbar";
import About from "./section/About";
import Experience from "./section/Experience";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="mt-14 mx-auto max-w-6xl grid gap-y-5 lg:grid-cols-[40%_60%] ">
        <div className="px-5">
          <div className="top-14 sticky grid gap-y-5 lg:grid-rows-[35%_45%_20%] lg:h-[85vh]">
            <Header/>
            <Navbar/>
            <div className="flex items-end gap-4 text-2xl ">
              <FontAwesomeIcon
                className="hover:scale-125 hover:text-primaryTitle transition-all"
                icon={faGithub}
              />
              <FontAwesomeIcon
                className="hover:scale-125 hover:text-primaryTitle transition-all"
                icon={faMedium}
              />
              <FontAwesomeIcon
                className="hover:scale-125 hover:text-primaryTitle transition-all"
                icon={faLinkedin}
              />
            </div>
          </div>
        </div>
        <div className="grid gap-y-14 px-5">
          <About/>
          <Experience/>
          <div >Experience</div>
          <div >Experience</div>
          <div >Experience</div>
          <div >Experience</div>
          <div >Experience</div>
          <div >Experience</div>
        </div>
      </div>
    </>
  );
}

export default App;
