import { useGetProductsQuery } from "../../store/productSlice/productSlice"


export const NewProductList = () => {
    const { data } = useGetProductsQuery();
    const rating = data?.map(item => item.rating);
    console.log(rating)
    const stars = [];
    const totalStars = 5;

    for (let i = 1; i <= totalStars; i++) {
        const fillAmount = Math.max(0, Math.min(1, rating - (i - 1)));
        const fillPercentage = Math.round(fillAmount * 100);
        stars.push(
            <div key={i} className="relative flex flex-row w-[12.92px] h-[12.39px]">
                <svg width="12.921875" height="12.386719" viewBox="0 0 12.9219 12.3867">
                    <path
                        id="Star 1"
                        d="M5.56 0.55L4.34 3.03C4.19 3.32 3.91 3.53 3.58 3.57L0.85 3.97C0.03 4.09 -0.3 5.1 0.3 5.68L2.28 7.6C2.51 7.83 2.62 8.16 2.56 8.49L2.1 11.21C1.96 12.03 2.81 12.65 3.55 12.26L5.99 10.98C6.28 10.83 6.63 10.83 6.92 10.98L9.37 12.26C10.1 12.65 10.96 12.03 10.82 11.21L10.35 8.49C10.29 8.16 10.4 7.83 10.64 7.6L12.61 5.68C13.21 5.1 12.88 4.09 12.06 3.97L9.33 3.57C9 3.53 8.72 3.32 8.57 3.03L7.35 0.55C6.99 -0.19 5.93 -0.19 5.56 0.55Z"
                        fill="#BFBFBF"
                        fillOpacity="1"
                        className="absolute"
                    />
                </svg>

                {fillAmount > 0 && (
                    <div
                        className="absolute top-0 left-0 h-full overflow-hidden"
                        style={{ width: `${fillPercentage}%` }}
                    >
                        <svg
                            width="12.921875"
                            height="12.386719"
                            viewBox="0 0 12.9219 12.3867"
                        >
                            <path
                                id="Star 1"
                                d="M5.56 0.55L4.34 3.03C4.19 3.32 3.91 3.53 3.58 3.57L0.85 3.97C0.03 4.09 -0.3 5.1 0.3 5.68L2.28 7.6C2.51 7.83 2.62 8.16 2.56 8.49L2.1 11.21C1.96 12.03 2.81 12.65 3.55 12.26L5.99 10.98C6.28 10.83 6.63 10.83 6.92 10.98L9.37 12.26C10.1 12.65 10.96 12.03 10.82 11.21L10.35 8.49C10.29 8.16 10.4 7.83 10.64 7.6L12.61 5.68C13.21 5.1 12.88 4.09 12.06 3.97L9.33 3.57C9 3.53 8.72 3.32 8.57 3.03L7.35 0.55C6.99 -0.19 5.93 -0.19 5.56 0.55Z"
                                fill="#ffff00"
                                fillOpacity="1"
                            />
                        </svg>
                    </div>
                )}
            </div>
        );
    }
        return (
            <div class="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
                {data?.map(item => (
                    <div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800" key={item.id}>
                        <div class="h-56 w-full">
                            <a href="#">
                                <img class="mx-auto h-full dark:hidden" src={item.imagePath[0]} alt="" />
                                <img class="mx-auto hidden h-full dark:block" src={item.imagePath[0]} alt="" />
                            </a>
                        </div>
                        <div class="pt-6">
                            <div class="mb-4 flex items-center justify-between gap-4">
                                <span class="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300"> {item.status}</span>

                                <div class="flex items-center justify-end gap-1">
                                    <button type="button" data-tooltip-target="tooltip-quick-look" class="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                        <span class="sr-only"> Quick look </span>
                                        <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-width="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
                                            <path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg>
                                    </button>
                                    <div id="tooltip-quick-look" role="tooltip" class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700" data-popper-placement="top">
                                        Quick look
                                        <div class="tooltip-arrow" data-popper-arrow=""></div>
                                    </div>

                                    <button type="button" data-tooltip-target="tooltip-add-to-favorites" class="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                        <span class="sr-only"> Add to Favorites </span>
                                        <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z" />
                                        </svg>
                                    </button>
                                    <div id="tooltip-add-to-favorites" role="tooltip" class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700" data-popper-placement="top">
                                        Add to favorites
                                        <div class="tooltip-arrow" data-popper-arrow=""></div>
                                    </div>
                                </div>
                            </div>

                            <a href="#" class="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">{item.description}</a>

                            <div class="mt-2 flex items-center gap-2">
                                        {stars}
                                        <p class="text-sm font-medium text-gray-900 dark:text-white">{item.rating}</p>
                                        <p class="text-sm font-medium text-gray-500 dark:text-gray-400">(455)</p>
                                    </div>
                            <ul class="mt-2 flex items-center gap-4">
                                <li class="flex items-center gap-2">
                                    <svg class="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
                                    </svg>
                                    <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Fast Delivery</p>
                                </li>

                                <li class="flex items-center gap-2">
                                    <svg class="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 7V6c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1h-1M3 18v-7c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                                    </svg>
                                    <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Best Price</p>
                                </li>
                            </ul>

                            <div class="mt-4 flex items-center justify-between gap-4">
                                <p class="text-xl font-extrabold leading-tight text-gray-900 dark:text-white">{item.price}</p>

                                <button type="button" class="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                    <svg class="-ms-2 me-2 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6" />
                                    </svg>
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }