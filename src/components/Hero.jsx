import "../index.css";
import logoImg from "../images/download.png";
import shape1 from "../images/shape-1.png";
import systmeImg from "../images/asset 3.png";
 import orangeBall from "../images/asset 1.png";

const Hero = () => {
  return (
    <div className="w-full overflow-x-hidden top-bg text-white pb-96">
      <div className="flex flex-col p-8 relative">
        <div className="lg:ml-28 mg:ml-24 ml-2 lg:w-[260px] w-[160px] md:w-[290px]">
          <img
            className="lg:w-[160px] w-[110px] ml-8"
            src={logoImg}
            alt="logo"
          />
        </div>
        <div className="absolute lg:-right-32 lg:-top-56 -right-24 -top-32">
          <img className="lg:w-[450px] w-[280px]" src={shape1} />
        </div>
      </div>
      <div className="lg:w-9/12 w-11/12 lg:p-5 tracking-wider text-center flex flex-col lg:mt-28 mt-20 mx-auto">
        <h1 className="text-neutral-200 text-3xl lg:text-[46px] font-semibold text-center lg:leading-[58px]">
          Game-Changing<br></br>
          B2B Commerce Platform
        </h1>
        <p className="mt-2 text-[15px] text-gray-300">
          Stop stressing yourself with doing everything manually. Focus on
          what &apos;s important and leave the rest to us. Digitize your orders &
          payments, send automatic collection reminders, get actionable insights
          from just one platform.
        </p>
        <div className="lg:w-9/12 w-full p-5 gap-4 mt-2 mx-auto flex justify-between lg:flex-nowrap flex-wrap flex-row">
          <div className="lg:w-8/12 w-full">
            <input
              className="w-full p-3 text-sm rounded-md text-black"
              type="text"
              placeholder="Enter your phone no.."
            />
          </div>
          <div className="text-sm font-semibold lg:w-3/12 md:6/12 w-full text-start flex justify-center rounded-md items-center bg-[#ff8057] hover:bg-[#ff5217] transition-all duration-300 ease-in-out py-[14px] cursor-pointer">
            Request Demo
          </div>
        </div>
        <div className="w-full flex items-center flex-col mt-8 relative">
          <img src={systmeImg} alt="laptop image" />
          <div className="font-bold lg:text-4xl text-3xl">
            See what's inside
          </div>
          <div>
            <img
              className="absolute bottomBall lg:w-[500px] w-[350px] -z-0 lg:-left-80 -left-52 lg:top-40 top-60"
              src={orangeBall}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
