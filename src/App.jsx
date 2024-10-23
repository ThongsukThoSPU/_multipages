import { HashRouter, Routes, Route } from "react-router-dom";

import { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Layout from "./layout/Layout/Layout";

import Home from "./pages/Home/Home";
import Calculator from "./pages/Calculator/Calculator";
import Animation from "./pages/Animation/Animation";
import Component from "./pages/Component/Component";
import Todo from "./pages/Todo/Todo";
import Products from "./pages/Product/Product";
import Carts from "./pages/Carts/Carts";
import Login from "./pages/Login/Login";

import "./App.css";

import { fetchProducts } from "./data/products";

// const initPage = 'home'

function App() {
  //login
  const [token, setToken] = useState("");
  const [role, setRole] = useState("");

  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);

  useEffect(() => setProducts(fetchProducts()), []); //only in first loaded
  useEffect(() => console.log(products), [products]);

  if (token === "") {
    return <Login setToken={setToken} setRole={setRole} />;
  } else {
    return (
      <div className="app-container">
        <HashRouter>
          <Routes>
            <Route
              element={
                <Layout products={products} carts={carts} setToken={setToken} />
              }
            >
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/calculator" element={<Calculator />} />
              <Route path="/animation" element={<Animation />} />
              <Route path="/components" element={<Component />} />
              <Route path="/todo" element={<Todo />} />
              <Route
                path="/products"
                element={
                  <Products
                    products={products}
                    carts={carts}
                    setCarts={setCarts}
                  />
                }
              />
              <Route
                path="/carts"
                element={<Carts 
                  carts={carts} 
                  setCarts={setCarts} />}
              />
            </Route>
          </Routes>
        </HashRouter>
      </div>
    );
  }
}

export default App;

