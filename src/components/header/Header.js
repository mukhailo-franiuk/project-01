import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useGetCategoriesQuery } from "../../store/categorySlice/categorySlice";

const Header = () => {
    // const [isOpenMobileMenu, setIsOpenMobileMenu] = useState('hidden');
    const navLinks = [
        { name: 'Категорії', path: 'categories' },
        { name: 'Акції', path: 'discount' },
        { name: 'Контакти', path: 'contact-us' },
        { name: 'Про нас', path: 'about' },
    ];

    let closeForm = false;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSinInFormOpen, setIsSinInFormOpen] = useState(closeForm);
    const [isSearchForm, setIsSearchForm] = useState(false);
    const closeAllWindow = () => {
        setIsMenuOpen(false);
        setIsSinInFormOpen(false);
        setIsSearchForm(false);

    }
    return (
        <header className="w-full ">
            <nav className={` bg-indigo-500 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 $ bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-4 md:py-6`}>

                {/* Logo */}
                <Link to={`/`} className="flex items-center gap-2"
                
                onClick={closeAllWindow}>
                    Store App
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-4 lg:gap-8">
                    {navLinks.map((link, i) => (
                        <Link key={i} to={link.path} className={`group flex flex-col gap-0.5 text-gray-800`}>
                            {link.name}
                            <div className={`"bg-white h-0.5 w-0 group-hover:w-full transition-all duration-300`} />
                        </Link>
                    ))}
                </div>

                {/* Desktop Right */}
                <div className="hidden md:flex items-center gap-4">
                    <svg className={`h-6 w-6 text-gray-800 transition-all duration-500`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                    onClick={() => setIsSearchForm(!isSearchForm)}
                    >
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                    <button
                        className={`px-8 py-2.5 rounded-full ml-4 transition-all duration-500 bg-white text-black"}`}
                        onClick={() => setIsSinInFormOpen(true)}
                    >
                        Увійти
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-3 md:hidden">
                    <svg className={`h-6 w-6 text-gray-800 transition-all duration-500`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                        onClick={() => setIsSearchForm(!isSearchForm)}
                    >
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                    <svg onClick={() => setIsMenuOpen(!isMenuOpen)} className={`h-6 w-6 cursor-pointer`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <line x1="4" y1="6" x2="20" y2="6" />
                        <line x1="4" y1="12" x2="20" y2="12" />
                        <line x1="4" y1="18" x2="20" y2="18" />
                    </svg>
                </div>

                {/* Mobile Menu */}
                <div className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                    <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>

                    {navLinks.map((link, i) => (
                        <Link key={i} to={link.path} onClick={() => setIsMenuOpen(false)}>
                            {link.name}
                        </Link>
                    ))}
                    <button
                        className="bg-black text-white px-8 py-2.5 rounded-full transition-all duration-500"
                        onClick={() => {
                            setIsSinInFormOpen(true)
                            setIsMenuOpen(false)
                        }}
                    >
                        Login
                    </button>
                </div>
                {/* Open Sing In form*/}
                <div className={`fixed top-0 z-20 left-0 w-full h-screen bg-white text-base flex flex-col items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isSinInFormOpen ? "translate-x-0" : "-translate-x-full"}`}>
                    <div className="bg-white text-gray-500 max-w-96 mx-4 md:p-6 p-4 text-left text-sm rounded-xl shadow-[0px_0px_20px_0px] shadow-black/10">
                        <form className="bg-white rounded-lg shadow-xl shadow-gray-800 text-sm text-gray-500 border border-gray-200 p-8 py-12 w-80 sm:w-[352px]"
                        >
                            <button className="relative top-0 right-4" onClick={() => setIsSinInFormOpen(false)}>
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </button>
                            <p className="text-2xl font-medium text-center">
                                <span className="text-gray-800">Увійти</span>
                            </p>

                            <div className="mt-4">
                                <label className="block">Логін</label>
                                <input type="text" placeholder="type here" required
                                    className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500" />
                            </div>

                            <div className="mt-4">
                                <label className="block">Пароль</label>
                                <input type="password" placeholder="type here" required
                                    className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500" />
                            </div>

                            <p className="mt-4">
                                Створити акаунт?
                                <Link to={`sing-up`} className="text-indigo-500"
                                    onClick={() => setIsSinInFormOpen(false)}
                                >Реєстрація</Link>
                            </p>

                            <button type="submit" className="bg-indigo-500 hover:bg-indigo-600 transition-all text-white w-full py-2 rounded-md mt-4 cursor-pointer">
                                Увійти
                            </button>
                        </form>
                    </div>
                </div>
                {/* search form */}
                {/* Open Sing In form*/}
                <div className={`fixed top-0 z-20 left-0 w-full md:w-4/5 lg:w-1/2  bg-gray-500 text-base flex flex-col items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isSearchForm ? "translate-y-20" : "-translate-y-full"}`}>
                    <div className="bg-gray-700 text-gray-500 w-full mx-4 md:p-6 p-4 text-left text-sm shadow-[0px_0px_20px_0px] shadow-black/10">

                        <form className=" mx-auto">
                            <div className="flex shadow-xs rounded-base -space-x-0.5">
                                <label htmlFor="search-dropdown" className="block mb-2.5 text-sm font-medium text-heading sr-only ">Your Email</label>
                                <button type="button" className="inline-flex items-center shrink-0 z-10 text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary font-medium leading-3 rounded-s-base text-sm px-4 py-2.5 focus:outline-none">
                                    <svg className="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.143 4H4.857A.857.857 0 0 0 4 4.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 10 9.143V4.857A.857.857 0 0 0 9.143 4Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 20 9.143V4.857A.857.857 0 0 0 19.143 4Zm-10 10H4.857a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286A.857.857 0 0 0 9.143 14Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286a.857.857 0 0 0-.857-.857Z" /></svg>
                                    All categories
                                    <svg className="w-4 h-4 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" /></svg>
                                </button>
                                <div className="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44">
                                    <ul className="p-2 text-sm text-body font-medium">
                                        <li>
                                            <a href="#" className="block p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Shopping</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Images</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">News</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Finance</a>
                                        </li>
                                    </ul>
                                </div>
                                <input type="search" className="px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm focus:ring-brand focus:border-brand block w-full placeholder:text-body" placeholder="Search for products" required />
                                <button type="button" className="items-center hidden md:flex  text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-e-base text-sm px-4 py-2.5 focus:outline-none">
                                    <svg className="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" /></svg>
                                    Search
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            </nav>
        </header>
    );
}
export default Header;
