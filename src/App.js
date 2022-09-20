import { Route, Routes } from "react-router-dom";
import { ProtectedRouteAdmin, ProtectedRouteUser } from "./components/ProtectedRoute";
import NavigationBar from "./components/NavigationBar";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import AbsoluteItems from "./components/AbsoluteItems";
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
import AdminOrders from "./components/Admin/AdminOrders/AdminOrders";
//import AdminOrder from "./components/Admin/AdminOrders/AdminOrder";
import AdminIndex from "./components/Admin/AdminIndex.jsx";
import About from "./components/AboutThisProject";
import AdminCategories from "./components/Admin/AdminCategories/AdminCategories";
import AdminCategoriesProducts from "./components/Admin/AdminCategories/AdminProductsCategory";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AbsoluteItems />
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/product/:slug" element={<Product />}></Route>
        <Route path="/products/:category" element={<Products />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/about" element={<About />}></Route>
        {
          //protect route if user is logged
        }

        <Route element={<ProtectedRouteUser />}>
          <Route path="/billing" element={<Billing />}></Route>
        </Route>
        {
          //protect route if admin
        }

        <Route element={<ProtectedRouteAdmin />}>
          <Route path="/admin" element={<AdminIndex />}></Route>
        </Route>
        <Route element={<ProtectedRouteAdmin />}>
          <Route path="/admin/products" element={<AdminProducts />}></Route>
        </Route>
        <Route element={<ProtectedRouteAdmin />}>
          <Route path="/admin/products/create" element={<AdminProductsNew />}></Route>
        </Route>
        <Route element={<ProtectedRouteAdmin />}>
          <Route path="/admin/products/:slug" element={<AdminProduct />}></Route>
        </Route>
        <Route element={<ProtectedRouteAdmin />}>
          <Route path="/admin/users" element={<AdminUsers />}></Route>
        </Route>
        <Route element={<ProtectedRouteAdmin />}>
          <Route path="/admin/users/:id" element={<AdminUser />}></Route>
        </Route>
        <Route element={<ProtectedRouteAdmin />}>
          <Route path="/admin/orders" element={<AdminOrders />}></Route>
        </Route>
        <Route element={<ProtectedRouteAdmin />}>
          <Route path="/admin/categories" element={<AdminCategories />}></Route>
        </Route>
        <Route element={<ProtectedRouteAdmin />}>
          <Route
            path="/admin/categories/:categoryName"
            element={<AdminCategoriesProducts />}
          ></Route>
        </Route>

        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
