import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MenuList from "./components/MenuList";
import Home from "./pages/Home";

import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/menu" element={<MenuList />} />
  <Route path="/contact" element={<Contact />} />
</Routes>

      <Footer />
    </Router>
  );
};

export default App;
