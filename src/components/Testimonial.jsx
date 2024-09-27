import React from "react";
import asset18n from "../images/asset 18.png";
import asset19n from "../images/asset 19.gif";
import secLogo from "../images/logo.png"
import { network } from "../data";

function Testimonial() {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="lg:w-8/12 w-full lg:px-2 px:5 text-[#000000] flex flex-col text-center mx-auto lg:mt-20 mt-10 lg:text-[33px] font-bold items-center text-[20px] md:text-[40px]">
        <div>
          <h1> 
            “Using this platform has boosted our business and brought us closer
            to our retailers. If you haven't tried it, you're truly missing
            out!”
          </h1>
        </div>
      </div>
      <div className="lg:w-8/12 w-full lg:px-2 px:5 flex flex-col text-center mx-auto mt-10 items-center">
        <div className="flex flex-col">
          <img className="w-[80px]" src={asset18n} />
          <p className="font-bold mt-2 text-[13px]">Shiv Dubey</p>
        </div>
        <p className="text-[13px] text-neutral-900 pt-1">
          Promoter and Managing Director, Shiv Enterprises
        </p>
        <p className="text-[13px] text-neutral-500 pt-1">
          Source: ProgComm G2 reviews
        </p>
      </div>
      <div className="lg:w-8/12 w-full lg:px-2 px:5 flex flex-col text-center mx-auto mt-16 items-center">
        <div className="lg:text-[35px] text-[15px] font-bold flex-col">
          <div className="flex">
            <h2>Built with</h2>
            <div className="lg:mt-2">
            <img className="lg:w-[35px] w-[25px] lg:mx-3 mx-1" src={asset19n} />
            </div>
            <div>
            <h2>by India’s Leading</h2>
            </div>
          </div>
          <div className="flex gap-5 lg:px-14">
            <h2 className="pl-4">Fintech Company</h2>
            <img className="lg:w-[120px] w-[80px] lg:mt-3 mt-1 pr-5" src={secLogo}/>
          </div>
        </div>
      </div>
      <div className="lg:w-8/12 w-full p-0 flex flex-col text-center   mx-auto mt-16 items-center">
        <div className="flex space-x-10 w-full">
          <div className="flex w-full justify-evenly lg:flex-unwrap flex-wrap">
            {
              network.map((network, index) => {
                return <div className="flex lg:ml-0 ml-16 flex-col mt-5 text-neutral-800">
                  <div className="ml-20"><img className="w-[65px]" src={network.image}/></div>
                  <div className="text-5xl font-bold"><h2 className="mr-20 -mt-8">{network.title}</h2></div>
                  <div className="text-[20px] py-2 font-bold"><h2 className="mr-20">{network.head}</h2></div>
                </div>
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
