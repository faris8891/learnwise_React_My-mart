import React, { useEffect, useState } from "react";
import style from "./Orders.module.css";
import DealerOrderModel from "../../../Components/DealerOrderModel/DealerOrderModel";
import DealerProfileCard from "../../../Components/Dealers/DealerProfileCard/DealerProfileCard";
import { useDispatch, useSelector } from "react-redux";
import { orderStatusUpdate, orders } from "../../../services/Dealers/Dealers";
import { setOrders } from "../../../Redux/DealerSlice";

export default function Orders() {
  const [trigger, setTrigger] = useState(false);
  const [status, setStatus] = useState(null);

  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const newOrders = await orders();
      dispatch(setOrders(newOrders.data));
    })();
  }, [dispatch, trigger]);
  const newOrders = useSelector((store) => store.dealers.orders);

  const orderStatusHandler = async (orderId) => {
    const data = {
      orderStatus: status,
      orderId: orderId,
    };
    if (status !== null) {
      const res = await orderStatusUpdate(data);
      console.log(res);
      if (res) {
        setTrigger(!trigger);
      }
    }
  };

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

        {/* order card start==> map here */}
        {newOrders.map((e) => {
          return (
            <div
              key={e._id}
              id={style.orderCard}
              className="row m-0 mt-3 bg-light "
            >
              <div className="col m-0 p-0 ">
                <div className="container py-3 ">
                  <h1 className="fs-6 my-1">{e.orderId}</h1>
                  <p className="fs-6 m-0">User name: *** need to update api</p>
                  <p className="fs-6 m-0">date: {e.orderDate}</p>
                  <p className="fs-6 m-0">Payment mod: {e.paymentMode}</p>
                  <p className="fs-6 m-0">Address: {e.address}</p>
                </div>
              </div>
              <div className="col p-0">
                <div className="container py-3 px-5 h-100 d-flex flex-column align-items-center justify-content-evenly">
                  <div className="input-group input-group-lg mb-3">
                    <i className="bx bx-trip bx-sm input-group-text"></i>

                    {/* Order status change =========> */}
                    <select
                      onChange={(d) => setStatus(d.target.value)}
                      className="form-select"
                      id="inputGroupSelect01"
                    >
                      <option defaultValue={e.orderStatus}>
                        {e.orderStatus}
                      </option>
                      <option value="pending">Pending</option>
                      <option value="confirmed">Confirmed</option>
                      <option value="on the way">On the way</option>
                      <option value="delivered">Delivered</option>
                      <option value="rejected">Rejected</option>
                    </select>
                  </div>

                  <div className="input-group input-group-lg">
                    <span
                      className="input-group-text"
                      id="inputGroup-sizing-default"
                    >
                      <i className="bx bx-sm bxs-truck"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-lg"
                    />
                  </div>
                </div>
              </div>
              {/* Order status change <=========== */}

              <div className="col p-0 ">
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
                  <button
                    onClick={() => orderStatusHandler(e._id)}
                    id={style.submitBtn}
                    className=""
                  >
                    Submit
                  </button>
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

        {/* order card end <== */}
      </div>
    </>
  );
}
