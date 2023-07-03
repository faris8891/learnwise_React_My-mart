import React from "react";
import style from "./Users.module.css";
import IMAGES from "../../../assets/images/Image";

export default function Users() {
  return (
    <>
      <div id={style.search_container} className="container-fluid py-4">
        <div className="container ">
          <div className="row ">
            <div
              id={style.searchBar}
              className="col-11 p-0 pe-4 d-flex justify-content-center align-items-center"
            >
              <input id={style.search_input} className="" type="text"></input>

              <i
                id={style.searchButton}
                className="bx bx-search-alt-2 bx-sm"
              ></i>
            </div>

            <div className="col-1 p-0 d-flex ">
              <button id={style.AddButton}>
                <div className="d-flex justify-content-center align-items-center">
                  <box-icon size="md" color="#f8f8f8" name="plus"></box-icon>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container  my-4">
        <div className="row">
          <div className="col ps-0">
            <div id={style.filterCard} className="container ms-0 px-0">
              <h5 className="fs-6">Filter & Refine </h5>
              <div className="container">
                <p className="m-1">Disabled users</p>
                <p className="m-1">Enabled users</p>
                <p className="m-1">Top Purchased users</p>
              </div>
              <hr />
              <h5 className="fs-6">Registered Date</h5>
              <div className="container">
                <div className="row">
                  <div className="col-5 p-0 me-1">
                    <div className="w-100">
                      <input
                        id={style.filterDate1}
                        type="date"
                        className="w-100  px-2"
                        placeholder="From"
                      />
                    </div>
                  </div>

                  <div className="col-5  p-0">
                    <div className="w-100 m-0">
                      <input
                        id={style.filterDate2}
                        type="date"
                        className="w-100 p-2"
                        placeholder="From"
                      />
                    </div>
                  </div>
                  <div className="col p-0 ms-2 d-flex w-100 justify-content-center align-items-center ">
                    <div
                      id={style.ArrowBtn}
                      className="w-100  d-flex justify-content-center align-items-center "
                    >
                      <i className=" bx bx-chevron-right bx-sm"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-9 p-0">
            <div id={style.UserCard} className="container bg-light mb-3">
              <div className="row">
                <div className="col-auto p-3">
                  <div
                    id={style.image_container}
                    className=" d-flex justify-content-center align-items-center"
                  >
                    <img
                      src={IMAGES.User1}
                      className=" float-left w-100  "
                      alt="shop image"
                    />
                  </div>
                </div>
                <div id={style.dealer_details} className="col-5 py-2 ps-0 ">
                  <h5 className="fs5 m-1">User name</h5>
                  <p className="m-1">Id: 64358b73172f0e2526625239</p>
                  <p className="m-1">Location: calicut</p>
                  <p className="m-1">Mobile: 8812345678</p>
                  <p className="m-1">Active: Enabled</p>
                  <div id={style.vl}></div>
                </div>
                <div className="col ">
                  <div className="container-fluid d-flex flex-column justify-content-center align-items-center h-100">
                    <p className="m-1 fs-5">Dealer user name</p>
                    <p className="m-0 fs-6">Location</p>
                    <p className="m-0 fs-6">Products: 10</p>
                    <div className="d-flex justify-content-center align-items-center mt-3">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
