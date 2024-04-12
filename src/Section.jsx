import React from "react";
import "./App.css";
function Section({ titlechange, parachange, url }) {
  return (
    <>
      <div className=" flex justify-center ">
        <div className="first flex items-center justify-center m-6 ">
          <div className="txt-first p-8 relative">
            <h2 className="font-bold">{titlechange}</h2>
            <p className=".span font-normal">{parachange}</p>
          </div>
          <div className="img-first relative">
            <img className="relative z-10" src={url} alt="img"></img>
            <video className="" src="" muted autoPlay loop></video>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section;
