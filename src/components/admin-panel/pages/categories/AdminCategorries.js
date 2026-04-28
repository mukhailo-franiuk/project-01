import { useGetCategoriesQuery } from "../../../store/categorySlice/categorySlice";
const AdminCategories = () => {
    document.title = "Admin добачити ,редагувати ,видалити категорії - Admin Panel";
    const { data } = useGetCategoriesQuery();
    return (
        <div className="w-full">
            
        </div>

    );
}
export default AdminCategories;