import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useGetCategoriesQuery } from "../store/categorySlice/categorySlice";

const Header = () => {
    const { data } = useGetCategoriesQuery();
    const [isOpenCategoriesMenu, setIsOpenCategoriesMenu] = useState('hidden');
    const [isOpenMobileMenu, setIsOpenMobileMenu] = useState('hidden');

    const CloseAllWindow = () => {
        setIsOpenCategoriesMenu('hidden');
        setIsOpenMobileMenu('hidden');
    }
    return (
        <header>
            <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">
                <Link
                    to={`/`}
                    onClick={CloseAllWindow}
                >
                    Mobile store
                </Link>

                <button
                    className="flex items-center justify-between py-2 px-3 font-medium text-heading border-b border-light md:w-auto hover:bg-neutral-secondary-soft md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0"
                    onClick={() => (isOpenCategoriesMenu === 'hidden') ? setIsOpenCategoriesMenu('block') : setIsOpenCategoriesMenu('hidden')}
                >
                    <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M20 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6h-2m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4" />
                    </svg>

                </button>
                <div className="relative cursor-pointer md:hidden">
                    <svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0" stroke="#000" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <button className="absolute -top-2 -right-3 text-xs text-white bg-gray-900 w-[18px] h-[18px] rounded-full">0</button>
                </div>
                <button
                    className="sm:hidden"
                    onClick={() => (isOpenMobileMenu === 'hidden') ? setIsOpenMobileMenu('block') : setIsOpenMobileMenu('hidden')}
                >
                    <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="21" height="1.5" rx=".75" fill="#426287" />
                        <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
                        <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
                    </svg>
                </button>

                <div className={`${isOpenMobileMenu} absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}>
                    <Link to={`/contact`} className="block">Contact</Link>
                    <button className="cursor-pointer px-6 py-2 mt-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full text-sm">
                        Login
                    </button>
                </div>

                <div className="hidden sm:flex items-center gap-8">
                    <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
                        <li>
                            <button
                                className="flex items-center justify-between w-full py-2 px-3 font-medium text-heading md:w-auto hover:bg-neutral-secondary-soft md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0"
                                onClick={() => (isOpenCategoriesMenu === 'hidden') ? setIsOpenCategoriesMenu('block') : setIsOpenCategoriesMenu('hidden')}
                            >
                                Categories
                                <svg className="w-4 h-4 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" /></svg>
                            </button>
                        </li>
                    </ul>
                    <Link to={`/discount`}>Discount</Link>
                    <Link to={`/contact`}>Contact</Link>

                    <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
                        <input className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search products" />
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.836 10.615 15 14.695" stroke="#7A7B7D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                            <path clipRule="evenodd" d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783" stroke="#7A7B7D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>

                    <div className="relative cursor-pointer">
                        <svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0" stroke="#000" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <button className="absolute -top-2 -right-3 text-xs text-white bg-gray-900 w-[18px] h-[18px] rounded-full">0</button>
                    </div>

                    <button className="cursor-pointer px-8 py-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full">
                        Login
                    </button>
                </div>
                {/* Categories menu */}
                <div className={`fixed z-10 top-0 w-full h-screen mt-16 left-0 flex justify-center items-baseline  text-sm shadow-xl md:grid-cols-3 ${isOpenCategoriesMenu}`}>
                    <div className="p-4 pb-0 text-heading md:pb-4">
                        <ul className="space-x-3 flex flex-row flex-wrap gap-3 items-start justify-between p-5 shadow-lg rounded-lg bg-white shadow-gray-700 min-w-64">
                            {data?.map(item => (
                                <li key={item.id}>
                                    <Link
                                        to={`products/${item.path}`}
                                        className="text-body hover:text-fg-brand"
                                        onClick={CloseAllWindow}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
export default Header;
