import React from 'react'
import { BiPhone } from "react-icons/bi";
import logo from '../../Asets/image/footerlogo.png'

function Header() {
    return (
        <div className='main-header items-center lg:px-20 flex justify-between'>
            <div className='header-logo p-4'>
               <a href="./"> <img src={logo} alt="" /></a>
            </div>
            <div className='header-right py-4 md:block hidden'>
                <div className='flex items-center'>
                    <a href="./" className='bg-[#E2EEF7] lg:p-2.5 md:p-2 no-underline px-6 font-semibold items-center text-lg text-[#142B67] rounded-lg flex'>
                        <span className='text-[#DC3545] flex items-center'> <BiPhone className='text-[#142B67] text-xl' /> 18003098789</span></a>
                    <div className='header-text lg:px-6 px-3'>
                        <a href="./" className='flex underline text-[#142B67] font-Jost'>Make the most of your interiors hear<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg></a>
                    </div>
                </div>
            </div>
            <div className='menu-toggle md:hidden p-4 block'>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </div>
        </div>
    )
}

export default Header
