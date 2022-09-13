import { Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Products from "./components/Products";
import Product from "./components/Product";
import Cart from "./components/Cart.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Search from "./components/Search.jsx";
import Billing from "./components/Billing";
//Import dashboard elements
import AdminUsers from "./components/Admin/AdminUsers/AdminUsers";
import AdminUser from "./components/Admin/AdminUsers/AdminUser";
import AdminProducts from "./components/Admin/AdminProducts/AdminProducts";
import AdminProductsNew from "./components/Admin/AdminProducts/AdminProductNew";
import AdminProduct from "./components/Admin/AdminProducts/AdminProduct";
//import AdminOrders from "./components/Admin/AdminOrders";
//import AdminOrder from "./components/Admin/AdminOrders/AdminOrder";
import AdminIndex from "./components/Admin/AdminIndex.jsx";
import ProtectedRouteBilling from "./components/ProtectedRoute";

import "./App.css";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/product/:slug" element={<Product />}></Route>
        <Route path="/products/:category" element={<Products />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route element={<ProtectedRouteBilling />}>
          <Route path="/billing" element={<Billing />}></Route>
        </Route>

        <Route path="/admin" element={<AdminIndex />}></Route>
        <Route path="/adminProducts" element={<AdminProducts />} />
        <Route path="/adminProductsNew" element={<AdminProductsNew />} />
        <Route path="/adminProducts/:id" element={<AdminProduct />} />

        <Route path="/adminUsers" element={<AdminUsers />} />
        {/* { <Route path="/adminOrders" element={<AdminOrders />} />} */}

        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
