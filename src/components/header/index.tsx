import Link from 'next/link'
import React from 'react'
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaFire, FaRegUser } from "react-icons/fa";

export default function Navbar() {
    return (
        <header className='flex justify-between px-40 py-3 text-center align-middle bg-[#282828] text-gray-400'>
            <div className='nav-left flex'>
                <Link href={'/'} className='mr-8'> LOGO</Link>

                <div className='nav-elements flex justify-center align-middle items-center'>
                    <Link href={"#"} className='mr-6 font-semibold hover:text-gray-100'>Explore</Link>
                    <Link href={"#"} className='mr-6 font-semibold hover:text-gray-100'>Problems</Link>
                    <Link href={"#"} className='mr-6 font-semibold hover:text-gray-100'>Contest</Link>
                    <Link href={"#"} className='mr-6 font-semibold hover:text-gray-100'>Discuss</Link>
                    <Link href={"#"} className='mr-6 font-semibold hover:text-gray-100'>Store</Link>
                </div>
            </div>


            <div className='nav-right flex justify-center items-center'>
                <div className='notification mr-4 cursor-pointer hover:text-gray-100'>
                    <IoMdNotificationsOutline />
                </div>
                <div className='streak pr-4 cursor-pointer hover:text-gray-100'>
                    <FaFire />
                </div>
                <div className='account pr-4 cursor-pointer hover:text-gray-100'>
                    <FaRegUser />

                </div>
            </div>
        </header>
    )
}
