import React from "react";
import style from "./AdminFooter.module.css";
import { Outlet } from "react-router-dom";

export default function AdminFooter() {
  return (
    <>
      <div
        id={style.footerContainer}
        className="container-fluid d-flex  align-items-center justify-content-between"
      >
        <p>© 2023, MyMart.com.</p>
        <p>Conditions of Use & Sale Privacy Notice Interest-Based Ads</p>
      </div>
      <Outlet/>
    </>
  );
}
