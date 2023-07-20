import IMAGES from "../../../assets/images/Image";
import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
export default function userNavbar() {
  return (
    <>

      <nav id={style.headerContainer} className="navbar navbar-expand-lg">
        <div className=" ps-3">
          <img id={style.navLogo} alt="mymart logo" src={IMAGES.Mymart_Logo} />
        </div>
        <button
          style={{ border: "1px solid #f8f8f8", right:"30px", top:"20px"}}
          className="navbar-toggler position-absolute"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i style={{ color: "#f8f8f8" }} className="bx bx-menu"></i>
        </button>
        
        <div  className="ps-5 collapse navbar-collapse " id="navbarText">
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "#82b440" : "#f8f8f8",
            })}
          >
            <h5 className="m-3">Home</h5>
          </NavLink>
          <NavLink
            to="shops"
            style={({ isActive }) => ({
              color: isActive ? "#82b440" : "#f8f8f8",
            })}
          >
            <h5 className="m-3">Shops</h5>
          </NavLink>
          <NavLink
            to="products"
            style={({ isActive }) => ({
              color: isActive ? "#82b440" : "#f8f8f8",
            })}
          >
            <h5 className="m-3">Products</h5>
          </NavLink>
          <NavLink
            to="orders"
            style={({ isActive }) => ({
              color: isActive ? "#82b440" : "#f8f8f8",
            })}
          >
            <h5 className="m-3">Orders</h5>
          </NavLink>
          <NavLink
            to="cart"
            style={({ isActive }) => ({
              color: isActive ? "#82b440" : "#f8f8f8",
            })}
          >
            <h5 className="m-3">Cart</h5>
          </NavLink>
        </div>
      </nav>
    </>
  );
}
