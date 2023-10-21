import React from "react";
import "./get-started.css";
import { Link } from "react-router-dom";

export const Getstarted = () => {
  return (
    <div>
      <div className="container1">
        <h1>
          Start building <br /> your CookBook.
        </h1>
        <p>
          Get started, sign up and access all download links <br /> and
          extensions
        </p>
      </div>

      {/* SIGN UP */}
      <div className="container2">
        <div className="left_content">
          <h2>
            Create a CookBook <br />
            account
          </h2>
          <p>
            Sign up to CookBook and give it a go for free with up to <br /> 20
            recipes & 5 recipe photo scans
          </p>
          <p>
            Your recipes will be saved safely and securely in our <br /> Cloud
            Kitchen, ready to sync across all of your devices!
          </p>
          <Link to={"/signup"}>
            <button className="get-started_2">SIGN UP</button>{" "}
          </Link>
        </div>

        <div className="rightimage">
          <img src="https://uploads-ssl.webflow.com/63bb7fe09d70bb7dc8e86719/63cb230a0760e7dc4f2245a4_Account%20circle%20CB.webp" />
        </div>
      </div>

      {/* lOGIN */}

      <div className="container2">
        <div className="rightimage">
          <img src="https://uploads-ssl.webflow.com/63bb7fe09d70bb7dc8e86719/63cb22cca9ca427b45b620da_Web%20App%20circle%20CB.webp" />
        </div>

        <div className="left_content">
          <h2>
            Bookmark the Web <br /> App{" "}
          </h2>
          <p>
            Experience ultimate convenience with the fully-featured <br />{" "}
            CookBook Web App, accessible on any laptop,
          </p>
          <p>
            computer, or device with a browser. Enjoy optimised <br /> large
            screen layouts for maximum recipe organisation!
          </p>
          <Link to={"/login"}>
            <button className="get-started_2">LOGIN</button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};
