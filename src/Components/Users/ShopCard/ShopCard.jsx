import React from "react";
import style from "./shopCard.module.css";

export default function ShopCard() {
  return (
    <div id={style.shopCard} className=" h-100">
      <div
        id={style.shopImgContainer}
        className="container p-0 m-0 bg-light d-flex align-items-center justify-content-center "
      >
        <img
          className="m-0 p-0"
          id={style.shopImage}
          src="https://res.cloudinary.com/dknozjmje/image/upload/v1689747807/MyMartShops/k2601od043ivbqmnowq2.jpg"
          alt="Shop Image"
        />
      </div>
    </div>
  );
}
