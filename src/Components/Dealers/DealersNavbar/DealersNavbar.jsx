import IMAGES from "../../../assets/images/Image";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import style from "./DealersNavbar.module.css";
import Cookies from "js-cookie";

export default function DealersNavBar() {
  const navigate = useNavigate();
  const handleSignOut = () => {
    Cookies.remove("dealerToken");
    navigate("/dealers");
  };
  return (
    <>
      <div
        id={style.headerContainer}
        className="container-fluid d-flex flex-column justify-content-center"
      >
        <div className="row">
          <div className="col px-4 ">
            <img alt="mymart logo" src={IMAGES.Mymart_Logo} />
          </div>
          <div className="col-auto d-flex justify-content-center align-items-center px-4">
            <NavLink
              to="orders"
              style={({ isActive }) => ({
                color: isActive ? "#82b440" : "#f8f8f8",
              })}
            >
              <h5 className="m-3">Orders</h5>
            </NavLink>
            <NavLink
              to="order-history"
              style={({ isActive }) => ({
                color: isActive ? "#82b440" : "#f8f8f8",
              })}
            >
              <h5 className="m-3">Order history</h5>
            </NavLink>
            <NavLink
              to="products"
              style={({ isActive }) => ({
                color: isActive ? "#82b440" : "#f8f8f8",
              })}
            >
              <h5 className="m-3">Products</h5>
            </NavLink>
          </div>
          <div className="col d-flex flex-column justify-content-center align-items-end px-4 ">
            <div>
              <button
                onClick={handleSignOut}
                className="px-2"
                id={style.signOutButton}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}
