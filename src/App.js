import { Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Product />
      {/* <Home /> */}
      {/* <Products /> */}
      <Footer />
    </div>
  );
}

export default App;
