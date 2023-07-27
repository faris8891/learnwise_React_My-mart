import React, { useEffect, useState } from "react";
import style from "./Orders.module.css";
import { allOrders } from "../../../services/Users/Users";
import DealerOrderModel from "../../../Components/DealerOrderModel/DealerOrderModel";
import FeedbackModal from "../../../Components/Users/FeedbackModal/FeedbackModal";

export default function Orders() {
  const [open, setOpen] = useState(false);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const orderHandler = (async () => {
      const res = await allOrders();
      setOrders(() => res.data);
    })();
  }, []);
  return (
    <div className="container  pb-5">
      <div className="row row-cols-lg-1">
        {orders.map((e) => {
          return (
            <div
              key={e._id}
              id={style.orderCard}
              className="row m-0 mt-3 bg-light "
            >
              <div className="col-lg col-md-12 m-0 p-0 ">
                <div className="container py-3 ">
                  <h1 className="fs-6 my-1">{e.orderId}</h1>
                  <p className="fs-6 m-0">User name: *** need to update api</p>
                  <p className="fs-6 m-0">date: {e.orderDate}</p>
                  <p className="fs-6 m-0">Payment mod: {e.paymentMode}</p>
                  <p className="fs-6 m-0">Address: {e.address}</p>
                </div>
              </div>
              <div className="col-lg col-md-12 p-0">
                <div className="container py-3 px-5 h-100 d-flex flex-column align-items-center justify-content-evenly">
                  <div className="input-group my-3 my-lg-0 input-group-lg">
                    <span
                      className="input-group-text"
                      id="inputGroup-sizing-default"
                    >
                      <i className="bx bx-sm bx-trip"></i>
                    </span>
                    <input
                      disabled
                      value={e.orderStatus}
                      type="text"
                      className="form-control"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-lg"
                    />
                  </div>

                  <div className="input-group input-group-lg">
                    <span
                      className="input-group-text"
                      id="inputGroup-sizing-default"
                    >
                      <i className="bx bx-sm bxs-truck"></i>
                    </span>
                    <input
                      disabled
                      type="text"
                      className="form-control"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-lg"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg col-md-12 p-0 ">
                <div className="container py-3  h-100 d-flex flex-column justify-content-center align-items-center">
                  <h1 id={style.amount} className="fs-5 m-0">
                    Total amount: {e.totalAmount}
                  </h1>
                  {e.paymentStatus ? (
                    <h1
                      id={style.complete}
                      className=" fs-6 my-2 mb-2 px-3 py-1 rounded-2"
                    >
                      Paid
                    </h1>
                  ) : (
                    <h1
                      id={style.pending}
                      className="fs-6 my-2 mb-2 px-3 py-1 rounded-2"
                    >
                      COD
                    </h1>
                  )}

                  <FeedbackModal>
                    <div id={style.editButton} className="m-1">
                      <i className="bx bx-message-detail bx-sm p-2"></i>
                    </div>
                  </FeedbackModal>
                </div>
              </div>
              <div className="row row-cols-1 m-0 p-0">
                <div className="d-flex flex-column p-0 align-items-center">
                  <DealerOrderModel products={e.items} date={e.orderDate} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
