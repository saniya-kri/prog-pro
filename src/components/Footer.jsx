import React from 'react'
import logoTh from '../images/download.png'
import logoTo from '../images/download2.png'
import footLogo from '../images/e-coin.svg'

function Footer() {
  return (
    <div className='w-full footerImg'>
      <div className="lg:w-7/12 w-full lg:px-2 px:5 flex flex-col text-center mx-auto mt-16 items-center">
        <div className="lg:text-[35px] text-[20px] font-bold flex-col text-white">
          <div className="flex mt-20 px-10">
            <h2>Get Started with</h2>
            <div className="lg:mt-2">
            <img className="lg:w-[120px] w-[50px] lg:mx-3 lg:mt-0 mt-2" src={logoTh} />
            </div>
            <div>
            <h2>Today</h2>
            </div>
          </div>
          <div className="flex gap-5 lg:px-14 lg:text-[15px] text-[12px] font-semibold text-neutral-300">
            <p className='px-5 py-2'>Get 30 days of full access to all Platform. Cancel anytime.</p>  
          </div>
          <button className="mt-8 text-[13px] text-white font-semibold rounded-md bg-[#ff8057] hover:bg-[#ff5217] transition-all duration-300 ease-in-out py-3 lg:w-7/12 w-10/12">
              Request demo
            </button>
        </div>
      </div>
      <div className='w-full overflow-x-hidden mt-20 border border-white'></div>
      <div className='flex flex-wrap w-8/12 mx-auto'>
        <div className='lg:w-6/12 w-full mt-30 flex flex-col mb-5'>
               <div className='mt-20'>
                <img className='w-40' src={logoTo}/>
                 <ul className='mt-10 ml-8'>
                        <li><a href='#' className='underline text-neutral-400 font-light text-[16px]'>Home</a></li>
                        <li><a href='#' className='underline text-neutral-400 font-light text-[16px]'>Login</a></li>
                        <li><a href='#' className='underline text-neutral-400 font-light text-[16px]'>About Us</a></li>
                        <li><a href='#' className='underline text-neutral-400 font-light text-[16px]'>Privacy policy</a></li>
                        <li><a href='#' className='underline text-neutral-400 font-light text-[16px]'>Contact Us</a></li>
                 </ul>
                 <ul className='mt-10 ml-8 text-neutral-400 text-[14px] py-5'>
                        <li className='py-2'>Address:</li>
                        <li className='py-1'>C-3, Block C,Qutab Institutional Area,</li>
                        <li className='py-1'>New Delhi, Delhi-110016</li>
                        <li className='py-2'>CIN - U74999DL2017PTC310632</li><br></br>
                        <li><b className='underline'>Made with ❤️ Anjali © 2024</b></li>
                 </ul>
               </div>
        </div>
        <div className='lg:w-6/12 mb-5 w-full flex flex-col '>
               <div className='lg:mt-40 mt-20 items-center text-center flex flex-col justify-center'>
                <img className='w-[70px]' src={footLogo}/>
                <h3 className='font-semibold text-2xl py-2 text-white'>Get Started</h3>
               </div>
               <div className='w-full'>
                        <input type='text' className='w-11/12 mt-5  text-[13px] ml-5 p-4 border border-none rounded-lg' placeholder='Enter your Mobile '/>
                        <button className='w-11/12 mt-5  text-[13px] ml-5 p-4 rounded-lg bg-neutral-400 hover:bg-neutral-500 transition-all duration-300 ease-out text-white font-semibold'>
                                Request demo
                        </button>
                </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
