import { Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Footer />
    </div>
  );
}

export default App;
