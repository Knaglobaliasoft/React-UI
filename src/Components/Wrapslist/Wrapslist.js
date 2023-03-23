import React from 'react'
import list_img_one from '../../Asets/image/Mask Group 26.png'
import list_img_two from '../../Asets/image/Mask Group 60.png'
import list_img_three from '../../Asets/image/Mask Group 63.png'
import list_img_four from '../../Asets/image/Mask Group 62.png'
import list_img_six from '../../Asets/image/Mask Group 64.png'





function Wrapslist() {
    return (
        <div className='SpecerT'>
            <div className='bg-[#142B67] pb-14'>
                <div className='lg:mx-28 font-Lato'>
                    <div className='list-hading'>
                        <h2 className='xl:text-5xl md:text-3xl text-3xl font-bold text-center text-white font-Lato lg:p-24 p-8'>Why You should get HomeLane Pronto Wraps</h2>
                    </div>
                    {/* list one */}
                    <div className='grid lg:grid-cols-2 grid-cols-1 items-center'>
                        <div className='list-one lg:order-first order-last'>
                            <h4 className='text-white m-2 text-xl'>01</h4>
                            <div className='list-text p-6 text-white'>
                                <h3 className=' text-3xl font-semibold'>Cost-efficient designing process</h3>
                                <p className='text-xl xl:w-2/3 py-6'>For a house designed just 5 years back, replacing the entire furniture was always very expensive. With Wraps, now I can change just the look of the shutters, counters without spending a lot. it is almost 50-70% cheaper than replacing the entire furniture.</p>
                            </div>
                        </div>
                        <div className='list-right lg:justify-center m-4 justify-center flex lg:order-last order-fisrt'>
                            <img src={list_img_one}  alt="" />
                        </div>
                    </div>
                    {/* list two */}
                    <div className='grid lg:grid-cols-2 grid-cols-1 lg:my-20 mt-10 items-center'>
                        <div className='list-right m-4 lg:justify-start lg:order-last order-first justify-center flex'>
                            <img src={list_img_two} alt="" />
                        </div>
                        <div className='list-one  lg:order-last order-fisrt'>
                            <h4 className='text-white m-2 text-xl'>02</h4>
                            <div className='list-text p-6 text-white'>
                                <h3 className=' text-3xl font-semibold'>End to end finishing</h3>
                                <p className='text-xl xl:w-2/3 py-6'>We provide hardware upgrades along with wraps for select furnitures. Fittings like hinges, shutter alignment etc is covered as part of our services.</p>
                            </div>
                        </div>
                    </div>
                    {/* list three */}
                    <div className='grid lg:grid-cols-2 grid-cols-1 lg:my-20 mt-10 items-center'>
                        <div className='list-one lg:order-first order-last'>
                            <h4 className='text-white m-2 text-xl'>03</h4>
                            <div className='list-text p-6 text-white'>
                                <h3 className=' text-3xl font-semibold'>Easy installation</h3>
                                <p className='text-xl xl:w-2/3 py-6'>I got it done while I was living in my house. It was not a noisy installation and we all could carry on with our work as usual. I didnt have to leave the house to get these done.</p>
                            </div>
                        </div>
                        <div className='list-right lg:justify-center m-4 justify-center lg:order-last order-fisrt flex'>
                            <img src={list_img_three} alt="" />
                        </div>
                    </div>
                    {/* list four */}
                    <div className='grid lg:grid-cols-2 grid-cols-1 lg:my-20 mt-10 items-center'>
                        <div className='list-right m-4 lg:justify-start justify-center lg:order-last order-first flex'>
                            <img src={list_img_four} alt="" />
                        </div>
                        <div className='list-one lg:order-last order-first'>
                            <h4 className='text-white m-2 text-xl'>04</h4>
                            <div className='list-text p-6 text-white'>
                                <h3 className=' text-3xl font-semibold'>Smooth process</h3>
                                <p className='text-xl xl:w-2/3 py-6'>It is a quick process. there were no hassels of long going carpentry work. It took just 2 days to get my kitchen done. and there was no mess of dust or dirt and thus I didnt have to do any deep cleaning etc.</p>
                            </div>
                        </div>
                    </div>
                    {/* list five */}
                    <div className='grid lg:grid-cols-2 grid-cols-1 lg:my-20 mt-10 items-center'>
                        <div className='list-one lg:order-first order-last'>
                            <h4 className='text-white m-2 text-xl'>05</h4>
                            <div className='list-text p-6 text-white'>
                                <h3 className=' text-3xl font-semibold'>Tested for quality</h3>
                                <p className='text-xl xl:w-2/3 py-6'>The change will still not change the basic features of the furniture as this is also water resistant, termite resistant and scratch resistant. It is also so easy to clean. It can be maintained without any special care.</p>
                            </div>
                        </div>
                        <div className='list-right lg:justify-center m-4 lg:order-last order-fisrt justify-center flex'>
                            <img src={list_img_one} alt="" />
                        </div>
                    </div>
                    {/* list six */}
                    <div className='grid lg:grid-cols-2 grid-cols-1 lg:my-20 mt-10 items-center'>
                        <div className='list-right m-4 lg:justify-start justify-center lg:order-last order-first flex'>
                            <img src={list_img_six} alt="" />
                        </div>
                        <div className='list-one'>
                            <h4 className='text-white m-2 text-xl'>06</h4>
                            <div className='list-text p-6 text-white'>
                                <h3 className=' text-3xl font-semibold'>1 year warranty</h3>
                                <p className='text-xl xl:w-2/3 py-6'>Also it comes with 1 years warranty. it just made the life of my furniture much longer!</p>
                            </div>
                        </div>
                    </div>
                    {/* list seaven */}
                    <div className='grid lg:grid-cols-2 grid-cols-1 lg:my-20 mt-10 items-center'>
                        <div className='list-one lg:order-first order-last'>
                            <h4 className='text-white m-2 text-xl'>07</h4>
                            <div className='list-text p-6 text-white'>
                                <h3 className=' text-3xl font-semibold'>Extensive design palette</h3>
                                <p className='text-xl xl:w-2/3 py-6'>Ugrading the looks and aesthetis is very easy as a lot of color and finish options are available</p>
                            </div>
                        </div>
                        <div className='list-right lg:justify-center m-4  lg:order-last order-fisrt justify-center flex'>
                            <img src={list_img_two} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wrapslist