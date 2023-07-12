import React from "react";
import DealerOrderModel from "../../../Components/DealerOrderModel/DealerOrderModel";
import style from "./Products.module.css";
import IMAGES from "../../../assets/images/Image";
import AdminDealerCard from "../../../Components/AdminDealerCard/AdminDealerCard";
export default function Products() {
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

        <p className="fs-2 text-center">Products</p>
        <hr />

        <div
          id={style.search_container}
          className="container-fluid px-0 py-2 pb-4"
        >
          <div className="container ">
            <div className="row ">
              <div className="col-5 ">
                <div className="row">
                  <div
                    id={style.searchBar}
                    className="col-10 p-0 pe-3 d-flex justify-content-center align-items-center"
                  >
                    <input
                      id={style.search_input}
                      className=""
                      type="text"
                    ></input>
                  </div>
                  <div className="col-2 p-0 d-flex ">
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
              <div className="col-3   ">
                <div className="input-group input-group-lg mb">
                  <i className="bx bx-sm bx-filter-alt input-group-text"></i>
                  <select className="form-select" id="inputGroupSelect01">
                    <option defaultValue="Select filter">filter</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
              <div className="col-3 px-0">
                <div className="input-group input-group-lg mb">
                  <i className="bx bx-sm bx-sort input-group-text"></i>
                  <select className="form-select" id="inputGroupSelect01">
                    <option defaultValue="Sort">Sort</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
              <div className="col-1 pe-0">
                <button id={style.AddButton}>
                  <div className="d-flex justify-content-center align-items-center">
                    <box-icon size="md" color="#f8f8f8" name="plus"></box-icon>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="row row-cols-4 gy-3">
          <div>
            <AdminDealerCard />
          </div>
          <div>
            <AdminDealerCard />
          </div>
          <div>
            <AdminDealerCard />
          </div>
          <div>
            <AdminDealerCard />
          </div>
          <div>
            <AdminDealerCard />
          </div>
          <div>
            <AdminDealerCard />
          </div>
          <div>
            <AdminDealerCard />
          </div>
          <div>
            <AdminDealerCard />
          </div>
        </div>
      </div>
    </>
  );
}
