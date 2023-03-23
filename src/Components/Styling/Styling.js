import React from 'react'
import img_styling from '../../Asets/image/08_AI58_002.jpg'
import po_one from '../../Asets/image/posterone.jpg'
import po_two from '../../Asets/image/postertwo.webp'
import po_three from '../../Asets/image/download.svg'


function Styling() {
    return (
        <div className='SpecerT'>
            <div className='lg:mx-20'>
                <div className="Styling-hading">
                    <h2 className='xl:text-6xl md:text-3xl text-3xl font-bold text-center text-[#142B67] font-Jost'>Versatile Wrap Styling</h2>
                </div>
                <div class="xl:flex my-10">
                    <div className='img'>
                        <img src={img_styling} className='w-[1250px]' alt="" />
                    </div>
                    <div className='part-two px-2'>
                        <div class="col-span-2 mx-24 font-Jost">
                            <h3 className='text-xl font-bold mt-4 text-[#D40010] text-center'>Browse Wrap Category</h3>
                            <div className='poster my-6'>
                                <div className='posterone justify-center flex'>
                                    <img src={po_one} className='w-16' alt="" />
                                </div>
                                <div className='text-center'>
                                    <h4 className='text-lg text-[#142B67] font-semibold py-2'>Classic Woods</h4>
                                </div>
                                <div className='posterone justify-center flex'>
                                    <img src={po_two} className="w-16" alt="" />
                                </div>
                                <div className='text-center'>
                                    <h4 className='text-lg text-[#142B67] font-semibold py-2'>Impressions</h4>
                                </div>
                                <div className='posterone justify-center flex'>
                                    <img src={po_three} className="w-16" alt="" />
                                </div>
                                <div className='text-center'>
                                    <h4 className='text-lg text-[#142B67] font-semibold py-2'>Solids</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Styling



