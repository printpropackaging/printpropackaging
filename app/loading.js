'use client'
import React from 'react'
import Image from 'next/image'
import Logo from '@/assets/Logo.svg'


const loading = () => {
    return (
        <div className='flex justify-center -translate-y-20 items-center h-screen'>
            <Image width={200} height={200} className='md:w-[40vw] w-[90vw] animate-bounce' src={Logo} alt="Logo" />
        </div>
    )
}

export default loading