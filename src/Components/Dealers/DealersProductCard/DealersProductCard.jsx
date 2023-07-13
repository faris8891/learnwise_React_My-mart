import React from "react";
import style from "./DealersProductCard.module.css";
import IMAGES from "../../../assets/images/Image";
import ConfirmModal from "../../ConfirmModal/ConfirmModal";

export default function DealersProductCard({ products }) {
  return (
    <>
      <div
        id={style.productCard}
        className="container p-0 pb-3 bg-light position-relative"
      >
        <div id={style.qtyTag}>
          <div className="position-relative">
            <img
              src={IMAGES.QuantityTag}
              className=" w-100  "
              alt="shop image"
            />
            <p id={style.Qty}>{products.noOfItem}</p>
          </div>
        </div>
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
          <h6 className="fs-5 my-0">{products.productName}</h6>
          <p className="fs-5  my-0">Price : {products.price}</p>
          <p className="fs-5  my-0">Category : {products.category}</p>
        </div>

        <div className=" d-flex justify-content-center align-items-center ">
          <div id={style.editButton} className="m-1">
            <i className="bx bxs-pencil bx-sm p-2"></i>
          </div>
          <ConfirmModal
            title={
              products.productActive
                ? `Disable ${products.productName} ?`
                : `Enable ${products.productName} ?`
            }
            body={
              products.productActive
                ? `Click ok to disable ${products.productName}`
                : `Click ok to enable ${products.productName}`
            }
          >
            <div id={style.editButton} className="m-1">
              {products.productActive ? (
                <i className="bx bx-toggle-right bx-sm p-2"></i>
              ) : (
                <i className="bx bx-toggle-left bx-sm p-2"></i>
              )}
            </div>
          </ConfirmModal>
          <div id={style.editButton} className="m-1">
            <i className="bx bxs-trash-alt bx-sm p-2"></i>
          </div>
        </div>
      </div>
    </>
  );
}
