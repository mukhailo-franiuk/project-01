import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
// App Component pages
import Home from "./components/pages/home/Home";
import Discount from "./components/pages/discount/Discount";
import ContactUs from "./components/pages/contact-us/ContactUs";
import SignUp from "./components/pages/sing-up/SingUp";
// App Component error page
import Error from "./components/pages/error/Error";
// User panel
import UserPanel from "./components/user-panel/UserPanel";
// Admin Panel
import AdminPanel from "./components/admin-panel/AdminPanel";
import Dashboard from "./components/admin-panel/pages/dashboard/Dashboard";
import AdminProducts from "./components/admin-panel/pages/products/AdminProducts";
const App = () => {
  return (
    <div className="w-full">
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="discount" element={<Discount />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="sing-up" element={<SignUp />} />
            <Route path="users" element={<UserPanel />} />
            <Route path="admin" element={<AdminPanel />} >
            <Route index element={<Dashboard />} />
            <Route path="products" element={<AdminProducts />} />
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
};

export default App;
