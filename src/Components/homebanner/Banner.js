import React from 'react'
import Form from 'react-bootstrap/Form'
import flag from '../../Asets/image/fleg.png'
import { BsWhatsapp } from "react-icons/bs"
import logo from '../../Asets/image/BestBrands_2 (1).png'

function Banner() {
    return (
        <div className='bg-banner h-[50rem] w-auto bg-cover relative opacity-95 object-cover bg-no-repeat'>
            <div className='lg:mx-20'>
                <div className='lg:flex block justify-between lg:py-14 md:py-0'>
                    <div className='banner-text lg:px-20 pt-36 md:mx-6 p-4'>
                        <h1 className='xl:text-6xl md:text-5xl lg:text-5xl text-4xl font-Lato font-bold my-4 text-white'>Give your home the</h1>
                        <span className='xl:text-6xl md:text-5xl lg:text-5xl text-4xl font-extrabold font-Lato text-white'> new look it deserves.</span>
                        <div className='banner-logo my-10'>
                            <img src={logo} alt="" className='md:w-56 w-44'/>
                        </div>
                    </div>
                    <div className='expert-box lg:mt-14 mx-1 pb-1 xl:w-[30%] lg:px-2 mt-36 h-[100%] rounded-2xl shadow-sm bg-[#F3F3F3]'>
                        <h4 className=' p-3 text-center text-[#142B67] text-xl font-Jost border-[#BDBBBB] border-b-2'>Talk to a Renovation Expert</h4>
                        <div className='input-num justify-center relative p-6 flex'>
                            <input type="text" className=' w-full p-3 font-semibold shadow-sm outline-none font-Jost placeholder-[#142B67] indent-12' placeholder=' Add Mobile Number |' name="" id="" />
                            <img src={flag} className='h-8 w-8 absolute left-10 top-9' alt="" />
                        </div>
                        <div class="mx-8">
                            <label class="form-check-label flex items-center text-[#142B67]" for="flexSwitchCheckDefault">
                                <Form.Check
                                    type="switch"
                                    id="custom-switch"
                                /> <h6 className='m-1 md:pl-0 pl-4 text-md'>You can reach me on WhatsApp</h6><BsWhatsapp className='m-0 p-0 md:text-lg text-2xl' /></label>
                        </div>
                        <div className='box-btn text-center bg-[#D81A28] m-6 mx-8 my-6 rounded-md'>
                            <button className='justify-center text-white p-2.5 inline-block'>BOOK FREE HOME VISIT</button>
                        </div>
                        <div className='privacy-text mx-8 m-6'>
                            <p className='text-[#142B67]'>By Submitting this from, you agree to the <a href="./" className='underline text-[#142B67]'>privacy policy</a> and <a href="./" className='underline text-[#142B67]'> terms of use</a></p>
                        </div>
                    </div>
                    <div className='p-3 absolute right-0 bottom-60 md:bottom-96 lg:bottom-44 lg:w-[600px] bg-[#807163] md:w-96 opacity-50 text-white'>
                        <h3 className='font-bold text-4xl'>Getty<span className='font-normal text-3xl'>image</span> </h3>
                        <h4 className='font-normal text-md'>alvarez</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Banner





