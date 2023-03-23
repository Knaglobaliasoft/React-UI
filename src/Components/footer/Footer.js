import React from 'react'
import { AiOutlineTwitter, AiOutlineInstagram, AiFillYoutube, AiOutlineWhatsApp, AiFillFacebook } from "react-icons/ai";
import logo_footer from '../../Asets/image/footerlogo.png'


function Footer() {
    return (
        <div className='SpecerT'>
            <div className='bg-[#F3F3F3]'>
                <div className='lg:mx-20'>
                    <div className='footer-logo m-4 SpecerT'>
                        <img src={logo_footer} alt="" />
                    </div>
                    <div className='footer-text my-16 m-4'>
                        <p className='text-[#142B67] text-lg font-Lato pt-12 font-medium'>HomeLane Pronto brings to you a lightning-speed painting service backed up by the design expertise of India’s most trusted home interiors brand. Now, you can transform your home conveniently with a ready team of designer experts topped up with speedy service. Our trained professionals make sure each wall is graced with the perfect finish. And to make sure the beauty stays intact, we follow a thorough no-mess process with a solid support of a HomeLane Pronto 1-Year warranty. Explore a wide range of colours and textures that can transform your walls just the way you want it.</p>
                    </div>
                    <div className='md:flex block justify-between pt-6 items-center'>
                        <div>
                            <h4 className='text-[#142B67] text-lg font-Lato font-medium m-4'>Homevista Decor and Furnishings Pvt. Ltd. © 2022</h4>
                        </div>
                        <div className='footer-icon flex '>
                            <div className='border-2 border-[#142B67] rounded-full p-1 m-3'>
                                <a href="./"><AiOutlineTwitter className='text-xl' /></a>
                            </div>
                            <div className='border-2 border-[#142B67] rounded-full p-1 m-3'>
                                <a href="./"><AiOutlineInstagram className='text-xl' /></a>
                            </div>
                            <div className='border-2 border-[#142B67] rounded-full p-1 m-3'>
                                <a href="./"><AiFillFacebook className='text-xl' /></a>
                            </div>
                            <div className='border-2 border-[#142B67] rounded-full p-1 m-3'>
                                <a href="./"><AiFillYoutube className='text-xl' /></a>
                            </div>
                            <div className='border-2 border-[#142B67] rounded-full p-1 m-3'>
                                <a href="./"><AiOutlineWhatsApp className='text-xl' /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer


