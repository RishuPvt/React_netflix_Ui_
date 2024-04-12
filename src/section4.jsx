import React from "react";
import "./App.css";
function Section4({ titlechange, parachange, url,link }) {
  return (
    <>
      <div className="third flex justify-center ">
        <div className="first flex items-center justify-center m-6 ">
          <div className="txt-first p-8 relative">
            <h2 className="font-bold">{titlechange}</h2>
            <p className=".span font-normal">{parachange}</p>
          </div>
          <div className="img-second relative">
            <img className="relative z-10 w-[450px]" src={url} alt="img"></img>
            <video className="absolute top-[25px] w-[255px] right-[71px]" src={link} muted autoPlay loop></video>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section4;
