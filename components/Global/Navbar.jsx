'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import NavMenu from './NavMenu';
import NavMenu2 from './NavMenu2';
import NavMenu3 from './NavMenu3';
import Button from './Button';
import Image from 'next/image';
import Logo from '../../assets/Logo.svg';
import SearchModal from './SearchModal';
import Country from './Country';

export default function Navbar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const toggleSearchModal = () => {
        setSearchOpen(!searchOpen);
    };


    return (
        <>
            {/* Top Navigation Links */}
            <div className="flex flex-wrap justify-center w-full sm:justify-between items-center py-0.5 bg-black text-white px-4 md:px-[var(--paddingX)]">

                <div className="items-center space-x-1 flex order-2 sm:order-none">
                    <i className="ri-send-plane-fill text-lg"></i>
                    <a href="mailto:sales@printpropackaging.com" className='text-sm'>sales@printpropackaging.com</a>
                </div>

                <div className="overflow-hidden w-full md:w-[45%] order-1 sm:order-none">
                    <div className="text-sm flex items-center whitespace-nowrap infiniteText w-fit">
                        Get 10% Discount On Your First Order
                    </div>
                </div>

                <div className="items-center space-x-3 hidden md:flex">
                    <Country color="white" />
                    <div className="items-center flex mail__btn">
                        <Button text="Get Free Quote" icon={<i className="ri-file-text-line mr-1"></i>} />
                    </div>
                </div>

            </div>

            <div className="w-full sticky inset-0 z-[9999]">
                <div className="flex relative items-center justify-between py-3 border-b border-black primary_bg px-4 md:px-[var(--paddingX)]">
                    <Link href='/'>
                        <div>
                            <Image width={200} height={100} src={Logo} alt="Logo" className="h-12 object-cover" />
                        </div>
                    </Link>

                    <div className="items-center justify-between hidden md:flex">
                        <NavMenu2 setSidebarOpen={setSidebarOpen} />
                        <NavMenu setSidebarOpen={setSidebarOpen} />
                        <NavMenu3 setSidebarOpen={setSidebarOpen} />
                        <Link href='/contact' className='font-semibold pr-3'>
                            Contact
                        </Link>
                        <div className="border-l-4 border-black pl-3">
                            <i className="ri-search-line text-xl font-bold cursor-pointer" onClick={toggleSearchModal}></i>
                        </div>
                    </div>

                    <div className="flex gap-3 items-center md:hidden">
                        <div onClick={toggleSidebar}>
                            <i className="ri-menu-5-line text-4xl"></i>
                        </div>
                        <div onClick={toggleSearchModal}>
                            <i className="ri-search-line text-3xl font-bold"></i>
                        </div>
                    </div>

                </div>
            </div>

            {/* Sidebar */}
            <div className={`fixed inset-0 z-[999999999] bg-white transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
                <div className="flex items-center justify-between p-4 border-b relative">
                    <Link href='/'>
                        <div >
                            <Image width={200} height={100} src={Logo} alt="Logo" className="h-12 object-cover" />
                        </div>
                    </Link>
                    <button onClick={toggleSidebar} className="text-gray-900 text-4xl">
                        <i className="ri-close-line"></i>
                    </button>
                </div>
                <div className="flex flex-col space-y-4 p-4">

                    <Link onClick={toggleSidebar} href="/" className="text-sm text-gray-800 font-semibold pl-2 pt-3" prefetch={false}>
                        HOME
                    </Link>

                    <NavMenu setSidebarOpen={setSidebarOpen} />

                    <NavMenu2 setSidebarOpen={setSidebarOpen} />

                    <NavMenu3 setSidebarOpen={setSidebarOpen} />

                    <Link onClick={toggleSidebar} href="/about" className="text-sm text-gray-800 font-semibold pl-2" prefetch={false}>
                        ABOUT US
                    </Link>
                    <Link onClick={toggleSidebar} href="/blogs" className="text-sm text-gray-800 font-semibold pl-2 pt-3" prefetch={false}>
                        BLOGS
                    </Link>
                    <Link onClick={toggleSidebar} href="/contact" className="text-sm text-gray-800 font-semibold pl-2 pt-3" prefetch={false}>
                        CONTACT
                    </Link>
                </div>
                <div className="items-center ml-4 flex pl-2 pt-3 ">
                    <Button text="Get Free Quote" icon={<i className="ri-file-text-line mr-1"></i>} />
                    <Country color="black" />
                </div>
            </div>

            {/* Search Modal */}
            <SearchModal isOpen={searchOpen} onClose={toggleSearchModal} />
        </>
    );
}

