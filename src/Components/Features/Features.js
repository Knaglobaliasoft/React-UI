import React from 'react'
import f_one from '../../Asets/image/Screenshot1.png'
import f_two from '../../Asets/image/Screenshot333.png'
import f_three from '../../Asets/image/Screenshot3.png'
import f_four from '../../Asets/image/Screenshot99.png'
import f_five from '../../Asets/image/Screenshot88.png'
import f_six from '../../Asets/image/Screenshot6.png'
import f_seaven from '../../Asets/image/Screenshot7.png'


function Features() {
    return (
        <div className='bg-[#1563A9] pb-20'>
            <div className='lg:mx-28'>
                <div className='features-hading p-20'>
                    <h2 className='xl:text-6xl md:text-3xl text-3xl font-bold text-center font-Lato text-white'>Features</h2>
                </div>
                <div className='grid xl:grid-cols-3 md:grid-cols-2 gap-14'>
                    <div className='border-2 rounded-lg m-2'>
                        <div className='featuresone p-12 justify-center flex'>
                            <img src={f_one} alt="" />
                        </div>
                        <div className='f_one_text'>
                            <h3 className='text-center font-semibold  font-Lato text-white md:text-2xl text-2xl w-56 p-4 mx-auto pb-6'>Gat a new for your home</h3>
                        </div>
                    </div>
                    <div className='border-2  rounded-lg m-2'>
                        <div className='featuresone p-12 justify-center flex'>
                            <img src={f_two} alt="" />
                        </div>
                        <div className='f_one_text'>
                            <h3 className='text-center font-semibold  font-Lato text-white md:text-2xl text-2xl w-56 p-4 mx-auto pb-6'>One day transformation</h3>
                        </div>
                    </div>
                    <div className='border-2  rounded-lg m-2'>
                        <div className='featuresone p-12 justify-center flex'>
                            <img src={f_three} alt="" />
                        </div>
                        <div className='f_one_text'>
                            <h3 className='text-center font-semibold  font-Lato text-white md:text-2xl text-2xl p-4 mx-auto pb-6'>Available in different shades and rexture</h3>
                        </div>
                    </div>
                    <div className='border-2  rounded-lg m-2'>
                        <div className='featuresone p-12 justify-center flex'>
                            <img src={f_four} alt="" />
                        </div>
                        <div className='f_one_text'>
                            <h3 className='text-center font-semibold  font-Lato text-white md:text-2xl text-2xl p-4 mx-auto'>Safe, transparent and Pardictable</h3>
                        </div>
                    </div>
                    <div className='border-2  rounded-lg m-2'>
                        <div className='featuresone p-12 justify-center flex'>
                            <img src={f_five} alt="" />
                        </div>
                        <div className='f_one_text'>
                            <h3 className='text-center font-semibold  font-Lato text-white md:text-2xl text-2xl p-4 mx-auto'>Can be installed on versatile surfaces</h3>
                        </div>
                    </div>
                    <div className='border-2  rounded-lg m-2'>
                        <div className='featuresone p-12 justify-center flex'>
                            <img src={f_six} alt="" />
                        </div>
                        <div className='f_one_text'>
                            <h3 className='text-center font-semibold font-Lato text-white md:text-2xl text-2xl mx-auto p-4'>Non-toxic: can be used in kitchen and dining areas.</h3>
                        </div>
                    </div>
                    <div className='lg:block hidden'></div>
                    <div className='border-2  rounded-lg m-2'>
                        <div className='featuresone p-12 justify-center flex'>
                            <img src={f_seaven} alt="" />
                        </div>
                        <div className='f_one_text'>
                            <h3 className='text-center font-semibold  font-Lato text-white md:text-2xl text-2xl p-4 mx-auto pb-6'>Moisture-proof,water-resistant,oil-resis</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Features