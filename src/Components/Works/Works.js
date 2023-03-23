import React from 'react'
import works_one from '../../Asets/image/Mask Group 68.png'
import works_two from '../../Asets/image/Mask Group 69.png'
import works_three from '../../Asets/image/Mask Group 95.png'
import works_five from '../../Asets/image/Mask Group 96.png'

function Works() {
    return (
        <div className='SpecerT'>
            <div className='bg-[#D9E6F0] pb-24 w-full h-auto'>
                <div className='xl:px-20 md:px-2'>
                    <div className='works-hading text-center xl:p-14 p-8'>
                        <h2 className='xl:text-6xl md:text-3xl text-3xl font-Lato font-bold text-[#142B67]'>How it Works</h2>
                    </div>
                    <div className='works-img lg:gap-6 md:flex block font-Lato'>
                        <div className='img-one bg-white w-auto m-2 rounded-2xl'>
                            <img src={works_one} className="w-full h-auto" alt="" />
                            <div className='img-text w-auto bg-white p-4 rounded-2xl'>
                                <h4 className='text-lg font-bold text-[#142B67] text-center xl:w-72 md:w-auto mx-auto'>Identify the surface to be wrapped/ refreshed/ renovated</h4>
                            </div>
                        </div>
                        <div className='img-one bg-white w-auto  rounded-2xl m-2'>
                            <img src={works_two} className="w-full h-auto" alt="" />
                            <div className='img-text w-auto bg-white p-4 rounded-2xl'>
                                <h4 className='text-lg font-bold text-[#142B67] text-center xl:w-72 md:w-auto mx-auto'>Meet the designer to select a finish and get the quote</h4>
                            </div>
                        </div>
                        <div className='img-one bg-white w-auto rounded-2xl m-2'>
                            <img src={works_five} className="w-full h-auto" alt="" />
                            <div className='img-text w-auto bg-white p-4 rounded-2xl'>
                                <h4 className='text-lg font-bold text-[#142B67] text-center xl:w-72 md:w-auto mx-auto'>HL team visits the site for a site measurement and inspection</h4>
                            </div>
                        </div>
                    </div>
                    <div className='works-img lg:gap-6 lg:pt-6 md:w-[66.70%] w-full justify-center m-auto md:flex block font-Lato'>
                        <div className='img-one bg-white w-auto rounded-2xl m-2'>
                            <img src={works_three} className="w-full h-auto" alt="" />
                            <div className='img-text w-auto bg-white p-3 rounded-2xl'>
                                <h4 className='text-lg font-bold text-[#142B67] text-center mx-auto'>HL wraps are delivered on site</h4>
                            </div>
                        </div>
                        <div className='img-one bg-white rounded-2xl m-2'>
                            <img src={works_five} className="w-full h-auto" alt="" />
                            <div className='img-text bg-white p-3 rounded-2xl'>
                                <h4 className='text-lg font-bold text-[#142B67] text-center xl:w-72 md:w-auto mx-auto'>Installed on site to give a new look as per selection to the surface</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Works