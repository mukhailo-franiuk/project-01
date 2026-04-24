import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Header from "./components/header/Header";

// App Component pages
import Home from "./components/pages/home/Home"

// App Component error page
import Error from "./components/pages/error/Error";
const App = () => {
  return (
    <div className="w-full">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>

      </Router>
    </div>
  );
};

export default App;
