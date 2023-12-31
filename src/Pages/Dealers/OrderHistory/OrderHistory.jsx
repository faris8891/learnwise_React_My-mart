import React, { useEffect } from "react";
import style from "./OrderHistory.module.css";
import DealerOrderModel from "../../../Components/DealerOrderModel/DealerOrderModel";
import DealerProfileCard from "../../../Components/Dealers/DealerProfileCard/DealerProfileCard";
import { useDispatch, useSelector } from "react-redux";
import { ordersHistory } from "../../../services/Dealers/Dealers";
import { setOrdersHistory } from "../../../Redux/DealerSlice";
import MessageModal from "../../../Components/MessageModal/MessageModal";

export default function OrderHistory() {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const data = await ordersHistory();
      dispatch(setOrdersHistory(data));
    })();
  }, []);
  const data = useSelector((store) => store.dealers.ordersHistory);
  console.log(data);
  return (
    <>
      <div className="container  px-0 py-3">
        <div className="row m-0">
          <div className="col p-0">
            <DealerProfileCard />
          </div>
        </div>

        <p className="fs-2 text-center">New Orders</p>
        <hr />

        <div id={style.search_container} className="container-fluid px-0 py-2">
          <div className="container ">
            <div className="row ">
              <div
                id={style.searchBar}
                className="col-11 p-0 pe-4 d-flex justify-content-center align-items-center"
              >
                <input id={style.search_input} className="" type="text"></input>
              </div>
              <div className="col-1 p-0 d-flex ">
                <button id={style.SearchButton}>
                  <div className="d-flex justify-content-center align-items-center">
                    <i
                      id={style.searchButton}
                      className="bx bx-search-alt-2 bx-md"
                    ></i>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Orders history card start ==============> */}
        {data.length > 0 ? null : (
          <p className="fs-4 text-center mt-4">Your Order History is Empty</p>
        )}
        {data.map((e) => {
          return (
            <div
              key={e._id}
              id={style.orderCard}
              className="row m-0 mt-3 bg-light "
            >
              <div className="col m-0 p-0 ">
                <div className="container py-3 ">
                  <h1 className="fs-6 my-1">{e.orderId}</h1>
                  <p className="fs-6 m-0">User name: {e.userName}</p>
                  <p className="fs-6 m-0">date: {e.orderDate}</p>
                  <p className="fs-6 m-0">Payment mod: {e.paymentMode}</p>
                  <p className="fs-6 m-0">Address: {e.address}</p>
                </div>
              </div>
              <div className="col p-0">
                <div className="container py-3 px-5 h-100 d-flex flex-column align-items-center justify-content-evenly">
                  <div className="input-group input-group-lg mb-3">
                    <i className="bx bx-trip bx-sm input-group-text"></i>
                    <input
                      disabled
                      type="text"
                      value={e.orderStatus}
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
                      value={"need to update API"}
                      className="form-control"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-lg"
                    />
                  </div>
                </div>
              </div>
              <div className="col p-0">
                <div className="container py-3  h-100 d-flex flex-column justify-content-center align-items-center">
                  <h1 id={style.amount} className="fs-5 m-0">
                    Total amount: {e.totalAmount}
                  </h1>
                  {e.paymentStatus ? (
                    <h1
                      id={style.complete}
                      className=" fs-6 my-2 mb-2 px-3 py-1 rounded-2"
                    >
                      Complete
                    </h1>
                  ) : (
                    <h1
                      id={style.pending}
                      className="fs-6 my-2 mb-2 px-3 py-1 rounded-2"
                    >
                      Pending
                    </h1>
                  )}
                  <div className="d-flex ">
                    <MessageModal
                      title={e.userName}
                      body={e.feedback.message}
                      value={e.feedback.rating}
                    >
                      <div id={style.editButton} className="m-1">
                        <i className="bx bx-message-detail bx-sm p-2"></i>
                      </div>
                    </MessageModal>
                    <div id={style.editButton} className="m-1">
                      <i className="bx bxs-trash-alt bx-sm p-2"></i>
                    </div>
                  </div>
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
        {/* Orders history card end <=============== */}
      </div>
    </>
  );
}
