import { useParams } from "react-router-dom";
import { useGetCategoriesQuery } from "../../store/categorySlice/categorySlice";
import CategoriesList from "./CategoriesList";
const ProductsCategories = () => {
    const { data } = useGetCategoriesQuery();
    let usePath = useParams().path;
    let ID = '';
    let titlePage = '';
    data.forEach(item => {
        if (item.path === usePath) {
            document.title = `${item.name} - Store App`;
            ID = item.id;
            titlePage = item.name;
        }
    })
    return (
        <div className="w-full">
            <section className="py-8 antialiased bg-gray-900 md:py-12">
                <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                    <div className="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
                        <div>
                            <h2 className="mt-3 text-xl font-semibold text-white sm:text-2xl">{titlePage}</h2>
                        </div>
                    </div>
                    <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
                        <CategoriesList categoryId={ID} />
                    </div>
                </div>
            </section>
        </div>
    )
}
export default ProductsCategories;