import React from "react";
import style from "./UsersFooter.module.css";
import IMAGES from "../../../assets/images/Image";
import { Outlet } from "react-router-dom";

export default function UsersFooter() {
  return (
    <>
      <div className={style.footerContainer}>
        <div className=" container-fluid mt-5">
          <div className="container p-0">
            <div className="row pt-4 row-cols-lg-3 row-cols-lg-1 g-sm-4">
              <div className="">
                <div className="d-flex">
                  <img
                    id={style.navLogo}
                    alt="mymart logo"
                    src={IMAGES.Mymart_Logo}
                  />
                </div>
                <p style={{color:"rgba(236, 236, 236, 0.652)"}} className="mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis
                  Class
                </p>
                <div className="d-flex gap-3">
                  <div>
                    <img src={IMAGES.facebook} alt="Logo" />
                  </div>
                  <div>
                    <img src={IMAGES.instagram} alt="Logo" />
                  </div>
                  <div>
                    <img src={IMAGES.twitter} alt="Logo" />
                  </div>
                  <div>
                    <img src={IMAGES.whatsapp} alt="Logo" />
                  </div>
                </div>
              </div>
              <div style={{color:"rgba(236, 236, 236, 0.652)"}}>
                <h1 className="fs-5">Information</h1>
                <p className="my-2">Customer Service</p>
                <p className="my-2">FAQs</p>
                <p className="my-2">Contacts</p>
                <p className="my2">Help</p>
              </div>
              <div style={{color:"rgba(236, 236, 236, 0.652)"}}>
                <h1 className="fs-5">Customer Service</h1>
                <p className="my-2">Payment Methods</p>
                <p className="my-2">Money-back!</p>
                <p className="my-2">Return</p>
                <p className="my-2">Shipping</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid  d-flex  align-items-center justify-content-between">
          <div className="py-3 h-100 container-fluid  d-flex flex-wrap align-items-center justify-content-between">
            <p className="p-0 m-0">© 2023, MyMart.com.</p>
            <p className="p-0 m-0">
              Conditions of Use & Sale Privacy Notice Interest-Based Ads
            </p>
          </div>
        </div>
      </div>
      <Outlet/>
    </>
  );
}
