import React from "react";
import style from "./ProductsCard.module.css";
import { useParams } from "react-router-dom";
import { addToCart } from "../../../services/Users/Users";

export default function ProductsCard({ products }) {
  const params = useParams();
  const dealerId = params.dealerId;
  const handleAddCart = async (id) => {
    const product = {
      productId: id,
      dealerId: dealerId,
      quantity: 1,
    };
    const res = await addToCart(product);
    console.log(res);
  };

  return (
    <>
      <div id={style.productCard} className="container bg-light p-0 m-0">
        <div
          id={style.productImageContainer}
          className="d-flex justify-content-center align-items-center m-0 p-0"
        >
          <img
            id={style.productImage}
            className="m-0 p-0"
            src={products.defaultImage}
            alt=""
          />
        </div>
        <hr className="m-0 p-0" />
        <h1
          className="fs-6 ms-2 mt-1 mb-0 p-0"
          style={{
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            maxWidth: "24ch",
          }}
        >
          {products.productName}
        </h1>
        <p className="fs-6 text-black-50 ms-2 p-0 m-0">{products.category}</p>
        <div className="mx-2 mt-3 d-flex justify-content-between align-items-center ">
          <div className="d-flex mt-1 flex-column">
            <div className="d-flex  justify-content-start align-items-center">
              <h1 className="fs-6  mb-0 p-0 ">{products.price}</h1>
              <i className="bx bx-rupee bx-xs p-0 m-0"></i>
            </div>
            <p className="fs-6 text-black-50 p-0 m-0">
              {products.productActive ? "In stock" : "Out of stock"}
            </p>
          </div>
          <div className=" m-0 mt-2 p-0 d-flex">
            <button
              onClick={(d) => handleAddCart(products._id)}
              id={style.addCartButton}
              className="p-0 me-2 d-flex justify-content-center align-items-center"
            >
              <i className="bx bx-sm bx-cart-add p-0 m-0"></i>
            </button>
            <button
              id={style.productViewButton}
              className="p-0  me-0 d-flex justify-content-center align-items-center"
            >
              View
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
