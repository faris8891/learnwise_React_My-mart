import React from "react";
import style from "./UsersFooter.module.css";
import IMAGES from "../../../assets/images/Image";

export default function UsersFooter() {
  return (
    <>
      <div className={style.footerContainer}>
        <div className=" container-fluid mt-4">
          <div className="container p-0">
            <div className="row  row-cols-3">
              <div>
                <div className="d-flex">
                  <img
                    id={style.navLogo}
                    alt="mymart logo"
                    src={IMAGES.Mymart_Logo}
                  />
                </div>
                <p>
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
              <div>
                <h1>Information</h1>
                <p>Customer Service</p>
                <p>FAQs</p>
                <p>Contacts</p>
                <p>Help</p>
              </div>
              <div>
                <h1>Customer Service</h1>
                <p>Payment Methods</p>
                <p>Money-back!</p>
                <p>Return</p>
                <p>Shipping</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid  d-flex  align-items-center justify-content-between">
          <div className="py-3 h-100 container-fluid  d-flex  align-items-center justify-content-between">
            <p className="p-0 m-0">© 2023, MyMart.com.</p>
            <p className="p-0 m-0">
              Conditions of Use & Sale Privacy Notice Interest-Based Ads
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
