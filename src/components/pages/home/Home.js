import { Link } from "react-router-dom";
const Home = () => {
    document.title = "Домашня сторінка - New Magazine";

    return (
         <div className="flex flex-col items-center bg-linear-to-b from-[#D9D9FF] to-[#F8F3F9] px-4 py-4">
            <div className="flex flex-wrap items-center justify-center gap-2 pl-2 pr-4 py-1.5 mt-30 rounded-full bg-white/50 border border-white">
                <p className="text-sm text-black/60">Join 12,450+ brands growing with us</p>
            </div>

            <h1 className="text-4xl md:text-[66px]/19 text-center max-w-2xl mt-8 text-gray-800 bg-clip-text leading-tight font-medium">Websites built to perform beautifully.</h1>
            <p className="text-sm text-gray-600 text-center max-w-[630px] mt-4">
                We design high-impact websites that convert and scale. From sleek interfaces to full stack experiences, we bring your brand to life online.
            </p>

            <div className="flex gap-3 mt-10">
                <button className="bg-violet-600 hover:bg-violet-700 text-white text-xs md:text-sm px-6 py-3 rounded-lg transition cursor-pointer">Get Started Now</button>
                <button className="bg-white hover:bg-white/5 border border-violet-400 text-gray-600 text-xs md:text-sm px-5 py-3 rounded-lg transition cursor-pointer">
                    Book a demo
                </button>
            </div>

            <div className="w-full max-w-[800px] h-[3px] mt-10 bg-linear-to-r from-white/10 via-violet-600 to-white/10"></div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-18 max-w-[930px] w-full">
                <div className="text-center">
                    <h2 className="font-medium text-2xl md:text-3xl text-gray-800">20+</h2>
                    <p className="text-xs md:text-sm text-gray-500">Years Experience</p>
                </div>
                <div className="text-center">
                    <h2 className="font-medium text-2xl md:text-3xl text-gray-800">12k+</h2>
                    <p className="text-xs md:text-sm text-gray-500">Projects Completed</p>
                </div>
                <div className="text-center">
                    <h2 className="font-medium text-2xl md:text-3xl text-gray-800">5k+</h2>
                    <p className="text-xs md:text-sm text-gray-500">Happy Customers</p>
                </div>
                <div className="text-center">
                    <h2 className="font-medium text-2xl md:text-3xl text-gray-800">5+</h2>
                    <p className="text-xs md:text-sm text-gray-500">Countries</p>
                </div>
            </div>
         </div>
    );
}
export default Home;