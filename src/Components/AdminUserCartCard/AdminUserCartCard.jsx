import React from 'react'
import style from "./AdminUserCartCard.module.css"
import IMAGES from '../../assets/images/Image';

export default function AdminUserCartCard() {
  return (
    <>
      <div
        id={style.productCard}
        className="container m-2 p-0 pb-3 bg-light position-relative"
      >
        
        <div
          id={style.image_container}
          className=" border-bottom d-flex justify-content-center align-items-center"
        >
          <img
            style={{ borderRadius: "5px" }}
            src={IMAGES.product_46}
            className=" float-left w-100 "
            alt="shop image"
          />
        </div>
        <div className="text-center my-2">
          <h6 className="fs-5 my-0">Product name</h6>
          <p className="fs-5  my-0">Price : 43</p>
          <p className="fs-5  my-0">Qty : 3</p>
        </div>
      </div>
    </>
  );
}
