import { Outlet , Link } from "react-router-dom";

const Admin = () => {
    document.title = "Admin Panel - New Magazine";
    return (
        <div className="w-full h-full flex items-start justify-start mt-16">
            <div className="w-1/5 h-full flex flex-col items-start justify-start p-4">
                <Link to="" className="text-lg font-bold text-gray-800 mb-4">Головна</Link>
                <Link to="categories" className="text-lg font-bold text-gray-800 mb-4">Категорії</Link>
                <Link to="products" className="text-lg font-bold text-gray-800 mb-4">Продукти</Link>
                <Link to="messages" className="text-lg font-bold text-gray-800 mb-4">Повідомлення</Link>
                <Link to="history" className="text-lg font-bold text-gray-800 mb-4">Історія</Link>
                <Link to="users" className="text-lg font-bold text-gray-800 mb-4">Користувачі</Link>
                <Link to="orders" className="text-lg font-bold text-gray-800 mb-4">Замовлення</Link>
            </div>
            <div className="w-4/5 h-full flex items-center justify-center ">
                <Outlet />
            </div>
        </div>
    );
}
export default Admin;