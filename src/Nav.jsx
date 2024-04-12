import React from "react";
import "./App.css";
import netflix from "./assets/img/netflix-logo.png";
const Nav = () => {
  console.log(netflix);
  return (
    <>
      <div className="main w-ful h-[90vh] bg-yellow-500">
        <div className="flex justify-between h-16 items-center max-w-screen-xl mx-auto w-80vw mx-auto z-10 relative">
          <span>
            {" "}
            <img className="z-10 relative w-40" src={netflix} alt="logo" />
          </span>
          <div>
            <button className="m-1.5  w-20 bg-red-600 rounded">HINDI</button>
            <button className=" w-20 bg-red-600 rounded">Sign in</button>
          </div>
        </div>
        <div className="w-full h-[90vh] opacity-55 bg-black absolute inset-0"></div>
        <div className="text h-full flex justify-center w-ful text-center flex-col relative">
          <h2 className=" font-semibold ">
            Unlimited movies, TV shows and more
          </h2>
          <p className="font-normal ">Watch anywhere. Cancel anytime</p>
          <p className="font-normal ">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="box2 mt-3.5 flex justify-center items-center">
            <form className="form">
              <input
                className=" mr-2.5 border-2 border-black p-3 font-bold opacity-50"
                type="text"
                placeholder="Enter E-Mail"
              ></input>
            </form>
            <button className=" btn2 w-32 p-2.5 p-3.5 rounded font-semibold bg-red-600">
              Get started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
