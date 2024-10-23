import { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Navbar.css";

const initPage = "home";

function Navbar({ carts, products, setToken }) {
  const [tab, setTab] = useState("");
  const navigate = useNavigate();
  // console.log("Current tab:", tab);

  useEffect(() => {
    setTab(initPage);
    navigate("/home");
  }, []); //first load


  useEffect(() => {
    //console.log(tab)

    if (tab === "calculator") navigate("/calculator");
    else if (tab === "components") navigate("/components");
    else if (tab === "animation") navigate("/animation");
    else if (tab === "todo") navigate("/todo");
    else if (tab === "products") navigate("/products");
    else if (tab === "carts") navigate("/carts");
    else navigate("/home");
  }, [tab, navigate]);


  return (
    <div className="navbar-container">
      <Link to="/home">
        <button
          className={
            "btn " + (tab === "home" ? "btn-primary" : "btn-outline-primary")
          }
          onClick={() => setTab("home")}
        >
          Home
        </button>
      </Link>

      <Link to="/calculator">
        <button
          className={
            "btn " +
            (tab === "calculator" ? " btn-primary" : "btn-outline-primary")
          }
          onClick={() => setTab("calculator")}
        >
          Calculator
        </button>
      </Link>

      <Link to="/animation">
        <button
          className={
            "btn " +
            (tab === "animation" ? " btn-primary" : "btn-outline-primary")
          }
          onClick={() => setTab("animation")}
        >
          Animation
        </button>
      </Link>

      <Link to="/components">
        <button
          className={
            "btn " +
            (tab === "components" ? " btn-primary" : "btn-outline-primary")
          }
          onClick={() => setTab("components")}
        >
          Component
        </button>
      </Link>

      <Link to="/todo">
        <button
          className={
            "btn " + (tab === "todo" ? " btn-primary" : "btn-outline-primary")
          }
          onClick={() => setTab("todo")}
        >
          Todo
        </button>
      </Link>

      <Link to="/products">
        <button
          className={
            "btn " +
            (tab === "products" ? " btn-primary" : "btn-outline-primary")
          }
          onClick={() => setTab("products")}
        >
          Products ({products.length})
        </button>
      </Link>

      <Link to="/carts">
        <button
          style={{ position: "relative" }}
          className={
            "btn " + (tab === "carts" ? " btn-primary" : "btn-outline-primary")
          }
          onClick={() => setTab("carts")}
        >
          Carts
          {carts.length > 0 && (
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {carts.length < 10 ? carts.length : "9+"}
              <span className="visually-hidden">unread messages</span>
            </span>
          )}
        </button>
      </Link>

      <button className="btn btn-outline-danger" style={{ marginLeft: '1rem' }} onClick={() => { setToken('') }}>
        Logout
      </button>

    </div>
  );
}

export default Navbar;
