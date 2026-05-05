import { Link } from "react-router-dom";
import { useGetSubCategoriesQuery } from "../../../store/categorySlice/categorySlice";

const CategoriesList = (categoryId) => {
    const { data } = useGetSubCategoriesQuery();
    return (
        <>
            {data.forEach(item => ( 
                (item.categoryId === categoryId.categoryId)
                ?
                    <Link
                    to={`${item.path}`} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800" key={item.id}>
                    <div className="h-56 w-full">
                        <img className="mx-auto h-full" src={item.imagePath} alt="" />
                    </div>
                    <div className="pt-6">
                        <span className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">{item.name}</span>
                    </div>
                </Link>
                :
                console.log()
            ))}
        </>
    )
}
export default CategoriesList;