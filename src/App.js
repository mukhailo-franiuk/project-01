import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Header from "./components/header/Header";
// App Component pages
import Home from "./components/pages/home/Home"
import ShoppingCart from "./components/pages/basket/ShoppingCart";
import Category from "./components/pages/listProducts/AllProducts";
// App Component error page
import Error from "./components/pages/error/Error";
// Admin Panel
import AdminPanel from "./components/admin-panel/AdminPanel";
const App = () => {
  return (
    <div className="w-full">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ShoppingCart />} />
          <Route path="/products/*" element={<Category />} />
          <Route path="admin" element={<AdminPanel />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
