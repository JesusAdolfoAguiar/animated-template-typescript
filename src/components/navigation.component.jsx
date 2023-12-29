import React, { useState } from "react";

const Navigation = () => {

    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const toggleNavbar = () => {
      setIsNavbarOpen(!isNavbarOpen);
    };

    return (
        <>
            <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                {/* <!-- Nav Left Side --> */}
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                    <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white" href="https://www.creative-tim.com/learning-lab/tailwindcss-starter-project#/presentation">
                        {/* <!-- Nav Title --> */}
                        Jacinto Design
                    </a>
                    {/* <!-- Hamburger Menu (Mobile) --> */}
                    <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" onClick={toggleNavbar}>
                        {/* <!-- Icon --> */}
                        <i className="text-white fas fa-bars"></i>
                    </button>
                </div>
                {/* <!-- Nav Flex Row --> */}
                <div className={`lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none ${isNavbarOpen ? 'block' : 'hidden'}`}>
                    {/* <!-- <ul className="flex flex-col lg:flex-row list-none mr-auto">
                    <li className="flex items-center">
                        <a className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold" 
                        href="https://www.creative-tim.com/learning-lab/tailwindcss-starter-project#/landing">
                        Icon    
                        <i className="lg:text-gray-300 text-gray-500 far fa-file-alt text-lg leading-lg mr-2"></i>
                        Docs
                        </a>
                    </li>
                    </ul> --> */}
                {/* <!-- Nav Right Side --> */}
                <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                {/* <!-- Social Media Button --> */}
                <li className="flex items-center">
                    <a className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    href="#pablo">
                    {/* <!-- Icon --> */}
                    <i className="lg:text-gray-300 text-gray-500 fab fa-facebook text-lg leading-lg "></i>
                    <span className="lg:hidden inline-block ml-2">Share</span>
                    </a>
                </li>
                {/* <!-- Social Media Button --> */}
                <li className="flex items-center">
                    <a className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    href="#pablo">
                    {/* <!-- Icon --> */}
                    <i className="lg:text-gray-300 text-gray-500 fab fa-twitter text-lg leading-lg "></i>
                    <span className="lg:hidden inline-block ml-2">Tweet</span>
                    </a>
                </li>
                {/* <!-- Social Media Button --> */}
                <li className="flex items-center">
                    <a className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    href="#pablo">
                    {/* <!-- Icon --> */}
                    <i className="lg:text-gray-300 text-gray-500 fab fa-github text-lg leading-lg "></i>
                    <span className="lg:hidden inline-block ml-2">Star</span>
                    </a>
                </li>
                {/* <!-- Button --> */}
                {/* <!-- <li className="flex items-center">
                    <button
                    className="bg-white text-gray-800 active:bg-gray-100 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
                    type="button"
                    style="transition: all 0.15s ease 0s;">
                    Icon
                    <i className="fas fa-arrow-alt-circle-down"></i>
                    Download
                    </button>
                </li> --> */}
                </ul>
            </div>
            </div>
            </nav>
        </>
    )
}

export default Navigation