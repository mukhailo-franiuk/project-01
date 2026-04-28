import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Header from "./components/header/Header";

// App Component pages
import Home from "./components/pages/home/Home"

// App Component error page
import Error from "./components/pages/error/Error";
// Admin Panel
import Admin from "./components/admin-panel/Admin";
import HomeAdmin from "./components/admin-panel/pages/home-admin/HomeAdmin";
import AdminCategories from "./components/admin-panel/pages/categories/AdminCategorries";
import AdminProducts from "./components/admin-panel/pages/products/AdminProducts";
import Messages from "./components/admin-panel/pages/messages/Messages";
import History from "./components/admin-panel/pages/history/History";
import Users from "./components/admin-panel/pages/users/Users";
import Orders from "./components/admin-panel/pages/orders/Orders";
const App = () => {
  return (
    <div className="w-full">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} >
              <Route index element={<HomeAdmin />} />
              <Route path="categories" element={<AdminCategories />} />
              <Route path="products" element={<AdminProducts />} />
              <Route path="messages" element={<Messages />} />
              <Route path="history" element={<History />} />
              <Route path="users" element={<Users />} />
              <Route path="orders" element={<Orders />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>

      </Router>
    </div>
  );
};

export default App;
