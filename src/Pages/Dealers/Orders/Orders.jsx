import React from "react";
import style from "./Orders.module.css";
import DealerOrderModel from "../../../Components/DealerOrderModel/DealerOrderModel";
import IMAGES from "../../../assets/images/Image";
import DealerProfileCard from "../../../Components/Dealers/DealerProfileCard/DealerProfileCard";

export default function Orders() {
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
                  <option defaultValue={"Select status..."}>
                    Select status...
                  </option>
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
            <div className="container py-3  h-100 d-flex flex-column justify-content-center align-items-center">
              <h1 id={style.amount} className="fs-5 m-0">
                Total amount: 2388
              </h1>
              <p>Complete</p>
              <button id={style.submitBtn} className="">
                Submit
              </button>
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
