import { Link } from "react-router-dom";

import { useState } from "react";

// import components header

const Header = () => {
    const [isLeftMenuOpen, setIsLeftMenuOpen] = useState(false);
    const [isCatalogueMenuOpen, setIsCatalogueMenuOpen] = useState(false);
    return (
        <header className="w-full">
            {/* Banner  */}
            <div className="w-full flex items-center justify-between px-2 md:px-14 py-1 font-medium text-sm text-white text-center bg-gray-800">
                <p className="font-bold text-sm md:text-sm">Get 20% OFF on Your First Order!</p>
                <div className="flex items-center space-x-6">
                    <button type="button" className="font-normal text-sm md:text-base text-gray-800 bg-white px-7 py-2 rounded-full">Claim Offer</button>
                    <button type="button">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="12.532" width="17.498" height="2.1" rx="1.05" transform="rotate(-45.74 0 12.532)" fill="#fff" />
                            <rect x="12.533" y="13.915" width="17.498" height="2.1" rx="1.05" transform="rotate(-135.74 12.533 13.915)" fill="#fff" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="w-full flex items-center justify-between px-2 md:px-14 py-4">
                {/* Menu Button */}
                <button type="button" className="block md:hidden" onClick={() => setIsLeftMenuOpen(!isLeftMenuOpen)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="4" width="24" height="2" rx="1" fill="#000" />
                        <rect y="11" width="24" height="2" rx="1" fill="#000" />
                        <rect y="18" width="24" height="2" rx="1" fill="#000" />
                    </svg>
                </button>
                {/* Logo */}
                <Link to="/" className="font-bold text-md md:text-3xl ">New Magazine</Link>
                {/* Catalogue Button */}
                <button type="button" className="border-2 border-gray-500/30 px-3 py-2 rounded-md items-center hidden md:flex" 
                onClick={() => setIsCatalogueMenuOpen(!isCatalogueMenuOpen)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="4" width="24" height="2" rx="1" fill="#000" />
                        <rect y="11" width="24" height="2" rx="1" fill="#000" />
                        <rect y="18" width="24" height="2" rx="1" fill="#000" />
                    </svg>
                    <span className="ml-2 font-medium text-sm md:text-base text-gray-800">Catalogue</span>
                </button>
                {/* Search Bar */}
                <div className="hidden md:flex items-center gap-3 max-w-md w-full ">
                    <div className="flex items-center w-full border pl-3 gap-2 bg-white border-gray-500/30 h-[46px] rounded-md overflow-hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 30 30" fill="#6B7280">
                            <path d="M13 3C7.489 3 3 7.489 3 13s4.489 10 10 10a9.95 9.95 0 0 0 6.322-2.264l5.971 5.971a1 1 0 1 0 1.414-1.414l-5.97-5.97A9.95 9.95 0 0 0 23 13c0-5.511-4.489-10-10-10m0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8" />
                        </svg>
                        <input type="text" placeholder="Search for products" className="w-full h-full outline-none text-gray-500 placeholder-gray-500 text-sm" />
                    </div>
                    <button type="submit" className="bg-gray-800 w-32 h-[46px] rounded-md text-sm text-white">Search</button>
                </div>
                {/* Navigation users */}
                <nav className="flex items-center justify-between md:space-x-6 space-x-2 mr-2 md:mr-0">
                    <div className="flex justify-center items-center w-10 h-10 overflow-hidden bg-neutral-secondary-medium rounded-full border-2 hover:bg-gray-300 cursor-pointer">
                        <svg className="w-6 h-6 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </div>

                    <Link to="/wishlist" className=" cursor-pointer">
                        <svg className="w-6 h-6 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
                        </svg>
                    </Link>
                    <div className="relative cursor-pointer">
                        <svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0" stroke="#615fff" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <button className="absolute -top-2 -right-3 text-xs text-white bg-gray-800 w-[18px] h-[18px] rounded-full">3</button>
                    </div>
                </nav>
            </div>
            {/* Mobile Menu */}
            <div className={`w-full md:w-1/2 xl:w-1/4 fixed left-0 top-0 h-screen flex flex-col items-start justify-start px-2 md:px-0 py-0 bg-white shadow-md z-10 ${isLeftMenuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out`}>
                <div className="w-full bg-gray-800 flex flex-row items-center justify-between py-2 space-y-2">
                    <Link to="/" className="block w-full text-center py-4 text-white font-bold text-lg"
                        onClick={() => setIsLeftMenuOpen(false)}
                    >New Magazine</Link>
                    <button type="button" className="mb-4" onClick={() => setIsLeftMenuOpen(false)}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="12.532" width="17.498" height="2.1" rx="1.05" transform="rotate(-45.74 0 12.532)" fill="#fff" />
                            <rect x="12.533" y="13.915" width="17.498" height="2.1" rx="1.05" transform="rotate(-135.74 12.533 13.915)" fill="#fff" />
                        </svg>
                    </button>
                </div>
                <div className="w-full flex-col items-center justify-center px-4 py-6 space-y-4 border-b-2 border-gray-500/30 hidden">
                    <button type="button" className="flex border-2 bg-gray-800 px-3 py-2 rounded-md items-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="4" width="24" height="2" rx="1" fill="#fff" />
                            <rect y="11" width="24" height="2" rx="1" fill="#fff" />
                            <rect y="18" width="24" height="2" rx="1" fill="#fff" />
                        </svg>
                        <span className="ml-2 font-medium text-sm md:text-base text-white">Catalogue</span>
                    </button>
                </div>
            </div>
            {/* Catalogue menu */}
            <div className={`w-full  bg-gray-900 opacity-70 fixed left-0 top-0 h-screen flex items-center justify-center px-2 md:px-0 py-0 shadow-md z-10 ${isCatalogueMenuOpen ? "translate-y-0" : "-translate-y-full"} transition-transform duration-300 ease-in-out`}
            onClick={() => setIsCatalogueMenuOpen(false)}
            >
                <div className="w-1/2 relative z-20  md:w-1/2 xl:w-1/4 bg-white opacity-100 rounded-md p-6 flex flex-row items-start justify-start">
                <div className="w-full flex flex-col items-start justify-start space-y-4">
                    <Link to="/category/1" className="w-full text-left text-gray-800 font-medium text-sm md:text-base"
                    onClick={() => setIsCatalogueMenuOpen(false)}   
                    >Category 1</Link>
                    <Link to="/category/2" className="w-full text-left text-gray-800 font-medium text-sm md:text-base"
                    onClick={() => setIsCatalogueMenuOpen(false)}   
                    >Category 2</Link>
                    <Link to="/category/3" className="w-full text-left text-gray-800 font-medium text-sm md:text-base"
                    onClick={() => setIsCatalogueMenuOpen(false)}   
                    >Category 3</Link>
                    <Link to="/category/4" className="w-full text-left text-gray-800 font-medium text-sm md:text-base"
                    onClick={() => setIsCatalogueMenuOpen(false)}   
                    >Category 4</Link>
                    <Link to="/category/5" className="w-full text-left text-gray-800 font-medium text-sm md:text-base"
                    onClick={() => setIsCatalogueMenuOpen(false)}   
                    >Category 5</Link>
                    <Link to="/category/6" className="w-full text-left text-gray-800 font-medium text-sm md:text-base"
                    onClick={() => setIsCatalogueMenuOpen(false)}   
                    >Category 6</Link>  

                </div>
            </div>
            </div>
        </header>
    );
}
export default Header;