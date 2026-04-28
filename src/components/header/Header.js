import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useGetCategoriesQuery } from "../store/categorySlice/categorySlice";

import { ListInfo, ListHelp } from "./option/ListLinks";
// import components header

const Header = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isMenuSignInOpen, setIsMenuSignInOpen] = useState(false);
    const [isCategoryList, setIsCategoryList] = useState('hidden');
    const [isOpenMobileMenu, setIsOpenMobileMenu] = useState('hidden');

    const closeAllModal = () => {
        setIsMenuSignInOpen(false);
        setIsCategoryList('hidden');
        setIsOpenMobileMenu('hidden');
    }

    const { data, isLoading } = useGetCategoriesQuery();
    const singInSubmit = (data) => {
        if (data.login === "ApexPredator" && data.password === "Flhtyfkby21987") {
            window.location.replace("/admin");
        } else {
            alert("Invalid login or password");
        }
    }
    return (
        <header className="w-full flex flex-col">
            {/* Banner */}
            <div className="flex flex-wrap items-center justify-center w-full py-2 font-medium text-sm text-white text-center bg-gradient-to-b from-orange-500 to-orange-600">
                <p>Templates are live on prebuiltui!</p>
                <Link to="/" className="flex items-center gap-1 px-3 py-1 text-xs rounded-md text-orange-600 bg-white hover:bg-slate-200 transition active:scale-95 ml-3">
                    Check it out
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.91797 7H11.0846" stroke="#F54900" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7 2.9165L11.0833 6.99984L7 11.0832" stroke="#F54900" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Link>
            </div>
            <div className="w-full flex justify-center items-center">
                <div className="lg:w-4/5 w-full flex items-center justify-between py-4 px-6">
                    {/* Logo */}
                    <Link to="/" className="text-2xl font-bold text-gray-800">
                        Логотип
                    </Link>
                    {/* Button mobile meno */}
                    <button className=" lg:hidden flex items-center gap-1 px-3 py-2 text-sm rounded-md text-gray-600 hover:text-gray-800 transition"
                        onClick={() => setIsOpenMobileMenu('block')}
                    >
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.75 3.5H12.25" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M1.75 7H12.25" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M1.75 10.5H12.25" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    {/* Categories Button */}
                    <button className=" lg:flex hidden items-center gap-1 px-3 py-2 text-sm rounded-md border border-orange-500 text-gray-600 hover:text-gray-800 transition"
                        onClick={() => setIsCategoryList('block')}
                    >
                        Категорії
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.75 3.5H12.25" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M1.75 7H12.25" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M1.75 10.5H12.25" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    {/* Search component */}
                    <div className="md:flex items-center gap-3 max-w-md w-full hidden">
                        <div className="flex items-center w-full border pl-3 gap-2 bg-white border-gray-500/30 h-[46px] rounded-md overflow-hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 30 30" fill="#6B7280">
                                <path d="M13 3C7.489 3 3 7.489 3 13s4.489 10 10 10a9.95 9.95 0 0 0 6.322-2.264l5.971 5.971a1 1 0 1 0 1.414-1.414l-5.97-5.97A9.95 9.95 0 0 0 23 13c0-5.511-4.489-10-10-10m0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8" />
                            </svg>
                            <input type="text" placeholder="Пошук ..." className="w-full h-full outline-none text-gray-500 placeholder-gray-500 text-sm" />
                        </div>
                        <button type="submit" className="bg-orange-500 w-32 h-[46px] rounded-md text-sm text-white">Search</button>
                    </div>
                    {/* Navigation */}
                    <nav className="flex items-center gap-6 relative">
                        {/* Search Button */}
                        <button className={`flex items-center px-1 py-2 text-sm rounded-md text-gray-600 hover:text-gray-800 transition md:hidden`}>
                            <svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.5 12.5C9.53757 12.5 12 10.0376 12 7C12 3.96243 9.53757 1.5 6.5 1.5C3.46243 1.5 1 3.96243 1 7C1 10.0376 3.46243 12.5 6.5 12.5Z" stroke="#4B5563" strokeWidth="2.0" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M9.58984 9.58984L12.5898 12.5898" stroke="#4B5563" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <div className="relative cursor-pointer">
                            <svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0" stroke="#000" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <button className="absolute -top-2 -right-3 text-xs text-white bg-gray-900 w-[18px] h-[18px] rounded-full">0</button>
                        </div>
                        <div className="flex flex-col text-sm">
                            <button className="text-white rounded-full" type="button"
                                onClick={() => setIsMenuSignInOpen(true)}
                            >
                                <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>

                            </button>
                        </div>
                        {/* Sing in form */}
                        <div className={`fixed right-0 top-0 w-full h-full bg-transparent p-4 md:p-4 ${isMenuSignInOpen ? 'block' : 'hidden'}`}>
                            <div className="w-full md:w-[400px] bg-orange-500 rounded-lg shadow-lg p-6 mx-auto mt-20">
                                <div className="flex items-center justify-between border-b border-default pb-4 md:pb-5">
                                    <h3 className="text-lg text-white font-medium">
                                        Увійти
                                    </h3>
                                    <button type="button" className="text-body bg-transparent hover:bg-neutral-tertiary hover:text-heading rounded-base text-sm w-9 h-9 ms-auto inline-flex justify-center items-center"
                                        onClick={() => setIsMenuSignInOpen(false)}
                                    >
                                        <svg className="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" /></svg>
                                        <span className="sr-only">Close modal</span>
                                    </button>
                                </div>

                                <form action="#" className="pt-2 md:pt-2" onSubmit={handleSubmit(singInSubmit)}>
                                    <div className="mb-4">
                                        <label htmlFor="login" className="block mb-2.5 text-sm font-medium text-white">Логін</label>
                                        <input type="text" id="login" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-1.5 shadow-xs placeholder:text-body" placeholder="Введіть ваш логін" required
                                            {...register("login", { required: "Login is required" })}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="block mb-2.5 text-sm font-medium text-white">Пароль</label>
                                        <input type="password" id="password" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-1.5 shadow-xs placeholder:text-body" placeholder="Введіть ваш пароль" required
                                            {...register("password", { required: "Password is required" })}
                                        />
                                    </div>
                                    <div className="flex items-start my-6">
                                        <div className="flex items-center">
                                            <input id="checkbox-remember" type="checkbox" value="" className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft" />
                                            <label htmlFor="checkbox-remember" className="ms-2 text-sm font-medium text-white">Запам'ятати мене</label>
                                        </div>
                                        <Link to="/forgot-password" className="ms-auto text-sm font-medium text-fg-brand hover:underline">Забули пароль?</Link>
                                    </div>
                                    <button type="submit" className="text-white bg-brand box-border border border-gray-900 hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none w-full mb-3">Login to your account</button>
                                    <div className="text-sm font-medium text-body">Not registered? <Link to="/register" className="text-fg-brand hover:underline">Create account</Link></div>
                                </form>
                            </div>
                        </div>
                        {/* Category list */}
                        <div className={`fixed right-0 top-10 w-full h-full bg-transparent p-4 md:p-4 ${isCategoryList}`}>
                            <div className="w-full md:w-[600px] bg-orange-500 rounded-lg shadow-lg p-6 mx-auto mt-20">
                                <div className="flex items-center justify-between border-b border-default pb-4 md:pb-5">
                                    <h3 className="text-lg text-white font-medium">
                                        Категорії
                                    </h3>
                                    <button type="button" className="text-body bg-transparent hover:bg-neutral-tertiary hover:text-heading rounded-base text-sm w-9 h-9 ms-auto inline-flex justify-center items-center"
                                        onClick={() => setIsCategoryList('hidden')}
                                    >
                                        <svg className="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" /></svg>
                                        <span className="sr-only">Close modal</span>
                                    </button>
                                </div>

                                <div className="w-full flex flex-row flex-wrap justify-between gap-2">
                                    {data?.map(item => (
                                        <Link key={item.id} to={item.path} className="text-white text-sm md:text-md py-2">{item.name}</Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* Mobile menu */}
                        <div className={`fixed left-0 top-0 z-10 flex flex-col px-5 py-2 w-full sm:w-4/5 md:w-1/2 h-full lg:hidden bg-orange-500 ${isOpenMobileMenu}`}>
                            <div className="flex items-center justify-between border-b border-default pb-4 md:pb-5">
                                <Link to={`/`} className="text-lg text-white font-medium"
                                    onClick={closeAllModal}
                                >
                                    Логотип
                                </Link>
                                <button type="button" className="text-body bg-transparent hover:bg-neutral-tertiary hover:text-heading rounded-base text-sm w-9 h-9 ms-auto inline-flex justify-center items-center"
                                    onClick={() => setIsOpenMobileMenu('hidden')}
                                >
                                    <svg className="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" /></svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <div className="w-full px-5 flex justify-center items-center">
                                <button className="flex items-center justify-center w-3/4 gap-1 px-3 py-2 text-sm rounded-md border-2 border-white my-2 text-white hover:text-gray-800 transition"
                                    onClick={() => {
                                        setIsCategoryList('block')
                                        setIsOpenMobileMenu('hidden')
                                    }}
                                >
                                    Категорії
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.75 3.5H12.25" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M1.75 7H12.25" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M1.75 10.5H12.25" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <div className="w-full px-5 flex flex-col justify-start items-start">
                                {/* Information list */}
                                <ul className="space-y-4 text-body my-4">
                                    <li className="font-bold text-lg pb-4">
                                        Інформація про компанію
                                        {ListInfo.map((item, index) => (
                                            <ul className="ps-5 mt-2 space-y-1 text-sm" key={index}>
                                                <li>
                                                    <Link to={item.path} title={item.name} className="text-white"
                                                        onClick={() => setIsOpenMobileMenu('hidden')}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                </li>
                                            </ul>
                                        ))}
                                    </li>
                                </ul>
                                {/* Help list */}
                                <ul className="space-y-4 text-body my-4">
                                    <li className="font-bold text-lg pb-4">
                                        Допомога
                                        {ListHelp.map((item, index) => (
                                            <ul className="ps-5 mt-2 space-y-1 text-sm" key={index}>
                                                <li>
                                                    <Link to={item.path} title={item.name} className="text-white"
                                                        onClick={() => setIsOpenMobileMenu('hidden')}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                </li>
                                            </ul>
                                        ))}
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </nav>
                </div >
            </div >
        </header >
    );
}
export default Header;