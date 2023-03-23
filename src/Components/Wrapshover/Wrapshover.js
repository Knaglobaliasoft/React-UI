import React from 'react'
import img_one from '../../Asets/image/hoverone.jpeg'
import img_two from '../../Asets/image/hovertwo.png'
import img_three from '../../Asets/image/hoverthree.jpeg'
import img_four from '../../Asets/image/hoverfour.png'
import img_five from '../../Asets/image/hoverfive.png'
import img_six from '../../Asets/image/hoverfive.png'
import img_seaven from '../../Asets/image/hoverseaven.png'
import img_eight from '../../Asets/image/Screenshot23.png'
import '../Wrapshover/Style.css'

function Wrapshover() {
    return (
        <div className='SpecerT'>
            <div className='lg:mx-20 p-4'>
                <div className='wraps-hading'>
                    <h2 className='xl:text-6xl md:text-3xl text-3xl text-[#142B67] font-Lato font-extrabold'>Where can you apply Wraps?</h2>
                </div>
                <div className='hover-parent xl:mx-36 my-20 font-Lato'>
                    <div className='wraps-list relative lg:flex border-b border-[#DFDFDF]'>
                        <h4 className='text-xl text-[#142B67] font-bold'>01</h4>
                        <h3 className='2xl:text-3xl md:text-2xl text-xl text-[#142B67] font-bold xl:p-8 p-4'>Kitchen Cabinets</h3>
                        <div className='hover-img z-10'>
                            <img src={img_one} className="rounded-xl lg:absolute -right-24 justify-end lg:w-auto w-96 h-96" alt="" />
                        </div>
                    </div>
                    <div className='wraps-list relative lg:flex border-b border-[#DFDFDF]'>
                        <h4 className='text-xl text-[#142B67] font-bold'>02</h4>
                        <h3 className='2xl:text-3xl md:text-2xl text-xl text-[#142B67] font-bold xl:p-8 p-4'>Counter tops</h3>
                        <div className='hover-img z-10'>
                            <img src={img_two} className="rounded-xl lg:absolute -right-24 -top-24 justify-end lg:w-auto w-96 h-96" alt="" />
                        </div>
                    </div>
                    <div className='wraps-list relative lg:flex border-b border-[#DFDFDF]'>
                        <h4 className='text-xl text-[#142B67] font-bold'>03</h4>
                        <h3 className='2xl:text-3xl md:text-2xl text-xl text-[#142B67] font-bold xl:p-8 p-4'>Room Doors</h3>
                        <div className='hover-img z-10'>
                            <img src={img_three} className="rounded-xl lg:absolute -right-24 -top-44 justify-end lg:w-auto w-96 h-96" alt="" />
                        </div>
                    </div>
                    <div className='wraps-list relative lg:flex border-b border-[#DFDFDF]'>
                        <h4 className='text-xl text-[#142B67] font-bold'>04</h4>
                        <h3 className='2xl:text-3xl md:text-2xl text-xl text-[#142B67] font-bold xl:p-8 p-4'>TV Units</h3>
                        <div className='hover-img z-10'>
                            <img src={img_four} className="rounded-xl lg:absolute -right-24 -top-44 justify-end lg:w-auto w-96 h-96" alt="" />
                        </div>
                    </div>
                    <div className='wraps-list relative lg:flex border-b border-[#DFDFDF]'>
                        <h4 className='text-xl text-[#142B67] font-bold'>05</h4>
                        <h3 className='2xl:text-3xl md:text-2xl text-xl text-[#142B67] font-bold xl:p-8 p-4'>Wardrobes</h3>
                        <div className='hover-img z-10'>
                            <img src={img_five} className="rounded-xl lg:absolute -right-24 -top-44 justify-end lg:w-auto w-96 h-96" alt="" />
                        </div>
                    </div>
                    <div className='wraps-list relative lg:flex border-b border-[#DFDFDF]'>
                        <h4 className='text-xl text-[#142B67] font-bold'>06</h4>
                        <h3 className='2xl:text-3xl md:text-2xl text-xl text-[#142B67] font-bold xl:p-8 p-4'>Storage / Cabinetry</h3>
                        <div className='hover-img z-10'>
                            <img src={img_six} className="rounded-xl lg:absolute -right-24 -top-44 justify-end lg:w-auto w-96 h-96" alt="" />
                        </div>
                    </div>
                    <div className='wraps-list relative lg:flex border-b border-[#DFDFDF]'>
                        <h4 className='text-xl text-[#142B67] font-bold'>07</h4>
                        <h3 className='2xl:text-3xl md:text-2xl text-xl text-[#142B67] font-bold xl:p-8 p-4'>Tables</h3>
                        <div className='hover-img z-10'>
                            <img src={img_seaven} className="rounded-xl lg:absolute -right-24 -top-56 justify-end lg:w-auto w-96 h-96" alt="" />
                        </div>
                    </div>
                    <div className='wraps-list relative lg:flex border-b border-[#DFDFDF]'>
                        <h4 className='xl:text-xl text-lg text-[#142B67] font-bold'>08</h4>
                        <h3 className='2xl:text-3xl md:text-2xl text-xl text-[#142B67] font-bold xl:p-8 p-4'>Shelving Units</h3>
                        <div className='hover-img z-10'>
                            <img src={img_eight} className="rounded-xl lg:absolute -right-24 -top-80 justify-end lg:w-auto w-96 h-96" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wrapshover


