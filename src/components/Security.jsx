import React from "react";
import aboutImg from "../images/abbt_img_2.png";

function Security() {
  return (
    <div className="flex w-full overflow-x-hidden">
      <div className="w-8/12 mt-20 mx-auto pl-2 flex lg:flex-unwrap flex-wrap">
        <div className="lg:w-6/12 w-full">
          <div className="lg:mt-32 md:mt-0 mt-0 w-full">
            <h1 className="text-2xl font-bold text-neutral-800 ">
              100% Secure & Private, Always!
            </h1>
            <p className="text-[14px] mt-2 pt-2 text-neutral-600">
              We respect your privacy and vow to never exploit or misuse your
              information, allowing you to focus on what matters most while we
              diligently protect your valuable data.
            </p>
            <button className="px-3 mt-8 text-white font-semibold rounded-md bg-[#ff8057] hover:bg-[#ff5217] transition-all duration-300 ease-in-out py-2">
              Learn More
            </button>
          </div>
        </div>
        <div className="lg:w-6/12 w-full">
          <div>
            <img className="w-[90%] lg:ml-12" src={aboutImg} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Security;
