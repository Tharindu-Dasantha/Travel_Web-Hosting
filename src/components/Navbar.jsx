import { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="fixed top-0 flex w-full px-8 md:px-20 justify-between items-center py-4 bg-white shadow-md z-50 transition-all duration-300">
            <h2 className="text-black font-montserrat text-xl md:text-2xl font-semibold leading-normal tracking-widest">
                Logo
            </h2>
            <div className="hidden md:flex justify-between items-center flex-shrink-0 gap-10">
                <a className="text-black font-montserrat text-sm md:text-base font-semibold leading-normal" href="">
                    Activities
                </a>
                <a className="text-black font-montserrat text-sm md:text-base font-semibold leading-normal" href="">
                    Services
                </a>
                <button className="flex p-2 md:p-3 items-start gap-2 rounded-full bg-black hover:bg-gray-700 text-white duration-300 font-montserrat text-sm md:text-base font-semibold leading-normal">
                    Contact Us
                </button>
            </div>
            <div className="md:hidden">
                <button className="text-black focus:outline-none" onClick={toggleMenu}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>
            {isMenuOpen && (
                <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4">
                    <a className="text-black font-montserrat text-sm font-semibold leading-normal" href="">
                        Activities
                    </a>
                    <a className="text-black font-montserrat text-sm font-semibold leading-normal" href="">
                        Services
                    </a>
                    <button className="flex p-2 items-start gap-2 rounded-full bg-black hover:bg-gray-700 text-white duration-300 font-montserrat text-sm font-semibold leading-normal">
                        Contact Us
                    </button>
                </div>
            )}
        </div>
    );
};

export default Navbar;