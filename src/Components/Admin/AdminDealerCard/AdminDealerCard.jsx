import style from "./AdminDealerCard.module.css";
import IMAGES from "../../../assets/images/Image.jsx";

export default function AdminDealerCard() {
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
            <p id={style.Qty}>100</p>
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
          <h6 className="fs-5 my-0">Product name</h6>
          <p className="fs-5  my-0">Price : 43</p>
        </div>

        <div className=" d-flex justify-content-center align-items-center ">
          <div id={style.editButton} className="m-1">
            <i className="bx bxs-pencil bx-sm p-2"></i>
          </div>
          <div id={style.editButton} className="m-1">
            <i className="bx bx-toggle-right bx-sm p-2"></i>
          </div>
          <div id={style.editButton} className="m-1">
            <i className="bx bxs-trash-alt bx-sm p-2"></i>
          </div>
        </div>
      </div>
    </>
  );
}
