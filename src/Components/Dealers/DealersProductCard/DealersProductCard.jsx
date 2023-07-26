import React from "react";
import style from "./DealersProductCard.module.css";
import IMAGES from "../../../assets/images/Image";
import ConfirmModal from "../../ConfirmModal/ConfirmModal";
import { useDispatch } from "react-redux";
import { disableProducts, unsetProduct } from "../../../Redux/DealerSlice";
import {
  disableProduct,
  removeProduct,
  updateProduct,
} from "../../../services/Dealers/Dealers";
import EditProduct from "../EditProduct/EditProduct";

export default function DealersProductCard({ products, trigger, setTrigger }) {
  const dispatch = useDispatch();

  const toggleHandler = async (_id, productStatus) => {
    const productData = {
      productId: _id,
      productStatus: !productStatus,
    };
    const res = await disableProduct(productData);
    if (res) {
      setTrigger(!trigger);
    }
  };

  const deleteHandler = async (id) => {
    const productId = {
      productId: id,
    };
    const res = await removeProduct(productId);
    if (res) {
      setTrigger(!trigger);
      dispatch(unsetProduct(id));
    }
  };

  const handleProductsEdit = async (productId, values) => {
    values.productId = productId;
    console.log(values);
    const res = await updateProduct(values);
    setTrigger(!trigger);
  };

  return (
    <>
      <div
        id={style.productCard}
        className="container p-0 pb-3 bg-light h-100 position-relative"
      >
        <div id={style.qtyTag}>
          <div>
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
          className="border-bottom p-0 m-0  d-flex  justify-content-center align-items-center"
        >
          <div className="m-0 p-0">
            <img
              id={style.productImage}
              style={{ borderRadius: "5px" }}
              src={products.defaultImage}
              className=" img-fluid float-left w-100 m-0 p-0 "
              alt="Product image"
            />
          </div>
        </div>

        <div className="text-center my-2">
          <h6 className="fs-5 my-0">{products.productName}</h6>
          <p className="fs-5  my-0">Price : {products.price}</p>
          <p className="fs-5  my-0">Category : {products.category}</p>
        </div>

        <div className=" d-flex justify-content-center align-items-center ">
          {/* Product edit button */}
          <EditProduct products={products} handler={handleProductsEdit} />

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
            handler={toggleHandler}
            _id={products._id}
            data={products.productActive}
          >
            <div id={style.editButton} className="m-1">
              {products.productActive ? (
                <i className="bx bx-toggle-right bx-sm p-2"></i>
              ) : (
                <i
                  style={{ color: "#da3330" }}
                  className="bx bx-toggle-left bx-sm p-2"
                ></i>
              )}
            </div>
          </ConfirmModal>
          <ConfirmModal
            title={`Delete ${products.productName} ?`}
            body={`Click ok to Delete ${products.productName}`}
            handler={deleteHandler}
            _id={products._id}
          >
            <div id={style.editButton} className="m-1">
              <i className="bx bxs-trash-alt bx-sm p-2"></i>
            </div>
          </ConfirmModal>
        </div>
      </div>
    </>
  );
}
