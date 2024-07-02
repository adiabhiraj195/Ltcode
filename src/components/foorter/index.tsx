import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <footer className='flex justify-between items-center text-gray-400 px-40'>
            <p className='text-gray-500'>Copyright © 2024 LeetCode</p>

            <li className='flex justify-between'>
                <Link href={"#"} className='px-3 hover:text-gray-200 text-sm border-r'>Help Center</Link>
                <Link href={"#"} className='px-3 hover:text-gray-200 text-sm border-r'>Jobs</Link>
                <Link href={"#"} className='px-3 hover:text-gray-200 text-sm border-r'>Bug Bounty</Link>
                <Link href={"#"} className='px-3 hover:text-gray-200 text-sm border-r'>Assessment</Link>
                <Link href={"#"} className='px-3 hover:text-gray-200 text-sm border-r'>Students</Link>
                <Link href={"#"} className='px-3 hover:text-gray-200 text-sm border-r'>Terms</Link>
                <Link href={"#"} className='px-3 hover:text-gray-200 text-sm'>Privacy Policy</Link>
            </li>

            <p>India</p>
        </footer>
    )
}
