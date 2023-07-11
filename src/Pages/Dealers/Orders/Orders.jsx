import React from "react";
import style from "./Orders.module.css";
import IMAGES from "../../../assets/images/Image";

export default function Orders() {
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
                  <div id={style.vl}></div>
                </div>
                <div className="col-2 ">
                  <div className="container-fluid d-flex flex-column justify-content-center align-items-start h-100">
                    <p className="m-0 fs-5">Payment</p>
                    <p className="m-0 fs-6">Cash on delivery</p>
                    <p className="m-0 fs-6">Online payment</p>
                    <button>Close shop</button>
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
                <select className="form-select" id="inputGroupSelect01">
                  <option selected>Select status...</option>
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
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg"
                />
              </div>
            </div>
          </div>
          <div className="col p-0">
            <div className="container py-3 bg-danger-subtle">aasd</div>
          </div>
        </div>
      </div>
    </>
  );
}
