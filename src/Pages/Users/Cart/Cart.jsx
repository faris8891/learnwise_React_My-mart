import React, { useEffect, useState } from "react";
import style from "./Cart.module.css";
import UsersNavbar from "../../../Components/Users/Navbar/UsersNavbar";
import {
  cart,
  checkoutCOD,
  payment,
  removeFromCart,
} from "../../../services/Users/Users";
import Payment from "../../../Components/Users/Payment/Payment";
import { InputLabel, MenuItem, Select } from "@mui/material";
import CheckoutModal from "../../../Components/Users/CheckoutModal/CheckoutModal";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const navigate = useNavigate();
  const [order, setOrder] = useState([null]);
  const [listOfItems, setListOfItems] = useState([]);
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await cart();
      const order = {
        address: res.address,
        noOfItems: res.noOfItems,
        totalAmount: res.totalAmount,
        dealerId: res.dealerId,
        COD: res.paymentMode.COD,
        onlinePayment: res.paymentMode.onlinePayment,
      };
      setOrder(order);
      setListOfItems(res.listOfItems);
    })();
  }, [trigger]);

  const handleRemove = async (productId) => {
    const data = {
      productId: productId,
    };
    const res = await removeFromCart(data);
    if (res) {
      setTrigger(!trigger);
    }
  };

  const handleCheckout = async () => {
    const res = await checkoutCOD();
    if (res) {
      navigate("/orders");
    }
  };
  return (
    <>
      <div className="container">
        <div className="row gap-lg-3 mt-3">
          <div className="col-4 p-0">
            <div
              id={style.orderCard}
              className="bg-light p-5 py-5 d-flex flex-column justify-content-center align-items-center"
            >
              <p className="fs-4 m-1">Your Cart Total</p>
              <h1 className="fs-3">{order.totalAmount}</h1>
              <p className="fs-5 m-1">No.Products : {order.noOfItems}</p>
              <p className="fs-6 text-center m-3 text-black-50">
                Address : {order.address}
              </p>

              <CheckoutModal orders={order} handler={handleCheckout}>
                <button
                  disabled={order.totalAmount > 0 ? false : true}
                  id={style.CheckoutBtn}
                  className="fs-5 "
                >
                  Secure Checkout
                </button>
              </CheckoutModal>
            </div>
          </div>
          <div className="col p-0">
            {listOfItems.length > 0 ? null : (
              <p className="fs-4 text-center mt-4">
                There are no items in your cart!
              </p>
            )}
            {listOfItems.map((e) => {
              return (
                <div
                  key={e._id}
                  id={style.productCard}
                  className="container-fluid bg-light  w-100 mb-3 p-3 d-flex "
                >
                  <div className="row  w-100 position-relative">
                    <div className="col-3 ">
                      <div
                        id={style.imageContainer}
                        className="d-flex justify-content-center align-items-center bg-light "
                      >
                        <img
                          id={style.productImage}
                          src={e.defaultImage}
                          alt="product image"
                        />
                      </div>
                    </div>
                    <div className="col ">
                      <h1 className="fs-6 m-0">
                        Product Name: {e.productName}
                      </h1>
                      <p className="fs-6 m-0 ">Price: {e.price}</p>
                      <p className="fs-6 m-0 ">Quantity: {e.quantity}</p>
                      <p
                        style={{
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          maxWidth: "140ch",
                        }}
                        className="fs-6 m-0 "
                      >
                        Description: {e.description}
                      </p>
                      <i
                        onClick={() => handleRemove(e.productId)}
                        className="bx bx-sm bx-x text-black-50 position-absolute end-0 top-0"
                      ></i>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
