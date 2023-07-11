import IMAGES from "../../../assets/images/Image";
import style from "./DealersNavbar.module.css";
import { NavLink } from "react-router-dom";

export default function DealersNavBar() {
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
              to="dashboard"
              style={({ isActive }) => ({
                color: isActive ? "#82b440" : "#f8f8f8",
              })}
            >
              <h5 className="m-3">Orders</h5>
            </NavLink>
            <NavLink
              to="dealers"
              style={({ isActive }) => ({
                color: isActive ? "#82b440" : "#f8f8f8",
              })}
            >
              <h5 className="m-3">Order history</h5>
            </NavLink>
            <NavLink
              to="users"
              style={({ isActive }) => ({
                color: isActive ? "#82b440" : "#f8f8f8",
              })}
            >
              <h5 className="m-3">Products</h5>
            </NavLink>
            <NavLink
              to="users"
              style={({ isActive }) => ({
                color: isActive ? "#82b440" : "#f8f8f8",
              })}
            >
              <h5 className="m-3">Feedback</h5>
            </NavLink>
          </div>
          <div className="col d-flex flex-column justify-content-center align-items-end px-4 ">
            <div>
              <box-icon color="#f8f8f8" size="md" name="user"></box-icon>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
