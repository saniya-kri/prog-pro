import React from 'react'
import aboutImg3 from '../images/abbt_img_3.png'
import { checklistItems } from '../data'

function Challenges() {
  return (
    <div className='w-full-overflow-x-hidden'>
      <div className='lg:w-8/12 w-11/12 flex lg:flex-nowrap flex-wrap mx-auto lg:mt-20 mt-4'>
         <div className='lg:w-6/12 w-full text-right'>
                <img className='lg:w-[90%] w-[100%] mt-20 right-0' src={aboutImg3}/>
         </div>
         <div className='lg:w-6/12 w-full text-left'>
                <h1 className='font-bold text-4xl text-neutral-800 py-2 lg:mt-0 mt-10'>Our Challenge!</h1>
                <p className='lg:text-[18px] text-[12px] text-neutral-700 pb-8'>... if you find better tool that lets you do all these things</p>
               <div className='flex flex-col w-full'>
                 {
                        checklistItems.map((checkItems, index) => {
                                return(
                                        <div className='flex'>
                                                <div className='mt-5 px-4 text-[#ff8057] font-bold'>{checkItems.icon}</div>
                                                <div className='mt-4 text-neutral-600 text-[14px]'>{checkItems.description}</div>
                                        </div>
                                )
                        })
                 }
               </div>
               <button className='px-3 mt-16 text-white font-semibold ml-8 rounded-md bg-[#ff8057] hover:bg-[#ff5217] transition-all duration-300 ease-in-out py-3 text-[13px]'>Discover all progComm features</button>
         </div>
      </div>
    </div>
  )
}

export default Challenges
