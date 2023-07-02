import React from "react";
import IMAGES from "../../assets/images/Image";
import style from "./AdminNavBar.module.css";

export default function AdminNavBar() {
  return (
    <>
      <div
        id={style.headerContainer}
        className="container-fluid d-flex flex-column justify-content-center"
      >
        <div className="row">
          <div className="col px-4 ">
            <img   alt="mymart logo" src={IMAGES.Mymart_Logo} />
          </div>
          <div className="col d-flex justify-content-center align-items-center px-4">
            <h5 className="m-3">Home</h5>
            <h5 className="m-3">Dealers</h5>
            <h5 className="m-3">Users</h5>
            <h5 className="m-3">Settings</h5>
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
