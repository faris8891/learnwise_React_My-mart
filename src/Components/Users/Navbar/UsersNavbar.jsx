import IMAGES from "../../../assets/images/Image";
import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";
export default function UsersNavbar() {
  return (
    <>
      
      <nav id={style.headerContainer} className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <button
            style={{ border: "1px solid #f8f8f8", right: "30px", top: "25px" }}
            className="navbar-toggler position-absolute"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i style={{ color: "#f8f8f8" }} className="bx bx-menu"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="ps-1">
              <img
                id={style.navLogo}
                alt="mymart logo"
                src={IMAGES.Mymart_Logo}
              />
            </div>

            <NavLink
              className="ms-4"
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "#82b440" : "#f8f8f8",
              })}
            >
              <h5 className="m-3">Home</h5>
            </NavLink>
            <NavLink
              to="/shops"
              style={({ isActive }) => ({
                color: isActive ? "#82b440" : "#f8f8f8",
              })}
            >
              <h5 className="m-3">Shops</h5>
            </NavLink>
            <NavLink
              to="/orders"
              style={({ isActive }) => ({
                color: isActive ? "#82b440" : "#f8f8f8",
              })}
            >
              <h5 className="m-3">Orders</h5>
            </NavLink>
          </div>

          <div className="d-flex ">
            <NavLink
              to="/cart"
              style={{
                color: "#82b440",
              }}
            >
              <div className="position-relative me-1">
                <i className="bx bx-md bx-cart-alt"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  1
                </span>
              </div>
            </NavLink>

            <div className="mx-3">
              <NavLink>
                <img
                  style={{ height: "40px" }}
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  className="rounded-circle"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
              </NavLink>
            </div>

            <button className="px-2" id={style.signOutButton}>
              Sign Out
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
