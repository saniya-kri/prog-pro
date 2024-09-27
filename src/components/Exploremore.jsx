

import { useState } from "react";
import { componentsMap } from "../data";
import React from "react";
import { icons } from "../data";
import sideImage from '../images/asset 16.png';
import asset17 from '../images/asset 17.png';


function Exploremore() {
  const [activeComponent, setActiveComponent] = useState(Object.keys(componentsMap)[0]); // Set the first component by default

  return (
    <div className="w-full relative">
      <div className="lg:w-4/12 w-full flex items-center absolute lg:right-[13%] lg:top-90 top-[85%] h-96 -z-40">
        <img className="lg:w-full w-11/12 md:ml-8 ml-4" src={asset17} />
      </div>
      <div className="flex justify-center text-center  items-center bg-white p-10 shadow-2xl -mt-[350px] z-50 lg:w-8/12 w-10/12 mx-auto rounded-lg text-black boxex">
        <div className="flex w-full justify-start flex-col">
          <div className="flex w-full flex-col">
            <div className="flex flex-col overflow-x-scroll lg:overflow-x-hidden">
              <div className="flex lg:space-x-[45px] pr-4 space-x-10 justify-between">
                {icons.map((icon, index) => {
                  return (
                      <div className="flex justify-center items-center" key={index}>
                      <img className="lg:w-9 w-7 lg:ml-12 ml-10" src={icon.image} />
                      </div>
                  );
                })}
              </div>
              <div className="flex w-full p-0 justify-between">
                {Object.keys(componentsMap).map((componentName) => (
                  <button
                    className="m-2 text-[12px] text-blue-900 font-semibold"
                    key={componentName}
                    onClick={() => setActiveComponent(componentName)}
                  >
                    {componentName}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap justify-center">
              <div className="flex lg:w-7/12 w-full text-left">
                <div className="mt-20">
                  {activeComponent &&
                    React.createElement(componentsMap[activeComponent])}
                </div>
              </div>
              <div className="lg:w-5/12">
                <img className="w-full mt-8" src={sideImage} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exploremore;




