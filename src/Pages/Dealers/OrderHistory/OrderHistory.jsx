import React from "react";
import style from "./OrderHistory.module.css";
import DealerOrderModel from "../../../Components/DealerOrderModel/DealerOrderModel";
import IMAGES from "../../../assets/images/Image";

export default function OrderHistory() {
  return (
    <>
      <div className="container  px-0 py-3">
        <div className="row m-0">
          <div className="col p-0">
            <div id={style.DealerCard} className="container bg-light mb-3">
              <div className="row">
                <div className="col-auto p-3">
                  <div
                    id={style.image_container}
                    className=" d-flex justify-content-center align-items-center"
                  >
                    <img
                      src={IMAGES.Shop_S1}
                      className=" float-left w-100"
                      alt="shop image"
                    />
                  </div>
                </div>
                <div id={style.dealer_details} className="col  py-2 ps-0 ">
                  <h5 className="fs5 m-1 mb-2">Dealer name</h5>
                  <p className="m-1 my-0">Location: calicut</p>
                  <p className="m-1 my-0">Address: Address</p>
                  <p className="m-1 my-0">Mobile: 8812345678</p>
                  {/* <div id={style.vl}></div> */}
                </div>
                <div className="col-auto m-3 ">
                  <div className="container-fluid  d-flex flex-column justify-content-center align-items-start h-100">
                    <h1 className="my-1 fs-5">Payment</h1>
                    <div id={style.cod}>
                      <p className="m-0 fs-6">Cash on delivery</p>
                      <i className="bx bx-toggle-right bx-sm m-0"></i>
                    </div>
                    <div id={style.online}>
                      <p className="m-0 fs-6">Online payment</p>
                      <i className="bx bx-toggle-right bx-sm m-0"></i>
                    </div>
                    <button id={style.redBtn} className="my-3">
                      Close shop
                    </button>
                  </div>
                </div>
              </div>
            </div>
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
        <div id={style.orderCard} className="row m-0 mt-3 bg-light ">
          <div className="col m-0 p-0 ">
            <div className="container py-3 ">
              <h1 className="fs-6 my-1">Order id</h1>
              <p className="fs-6 m-0">User name: Sample user</p>
              <p className="fs-6 m-0">date: Date</p>
              <p className="fs-6 m-0">Payment mod: Online</p>
              <p className="fs-6 m-0">Address: Sample Address</p>
            </div>
          </div>
          <div className="col p-0">
            <div className="container py-3 px-5 h-100 d-flex flex-column align-items-center justify-content-evenly">
              <div className="input-group input-group-lg mb-3">
                <i className="bx bx-trip bx-sm input-group-text"></i>
                <select
                  disabled
                  className="form-select"
                  id="inputGroupSelect01"
                >
                  <option defaultValue="Select status...">delivered</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
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
                  disabled
                  type="text"
                  value={"driver name"}
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
                Total amount: 2388
              </h1>
              <p>Complete</p>
              <div className="d-flex ">
                <div id={style.editButton} className="m-1">
                  <i className="bx bx-message-detail bx-sm p-2"></i>
                </div>
                <div id={style.editButton} className="m-1">
                  <i className="bx bxs-trash-alt bx-sm p-2"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="row row-cols-1 m-0 p-0">
            <div className="d-flex flex-column p-0 align-items-center">
              <DealerOrderModel />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
