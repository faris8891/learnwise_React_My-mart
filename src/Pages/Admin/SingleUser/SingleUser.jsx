import style from "./SingleUser.module.css";
import IMAGES from "../../../assets/images/Image";
import CardCarosal from "../../../Components/CardCarosal/CardCarosal";

export default function SingleUser() {
  return (
    <>
      <div className="container">
        {/* remove bh here */}
        <div className="row a row-cols-1 my-3">
          <div id={style.UserCard} className="container bg-light ">
            <div className="row ">
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

              <div id={style.user_details} className="col py-2 ps-0 ">
                <h5 className="fs5 m-1">User name</h5>
                <p className="mx-1 my-0">Id: 64358b73172f0e2526625239</p>
                <p className="mx-1 my-0">Email: sample@mail.com</p>
                <p className="mx-1 my-0">Location: calicut</p>
                <p className="mx-1 my-0">Mobile: 8812345678</p>
                <p className="mx-1 my-0">Flate No: #123D5</p>
                <p className="mx-1 my-0">Active: Enabled</p>
                <div id={style.vl1}></div>
              </div>

              <div className="col py-4 position-relative ">
                <p className="mx-1 my-0 w-75">
                  Address : <br /> Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Nunc vulputate libero et velit interdum, ac
                  aliquet odio mattis.
                </p>
                <div id={style.vl2}></div>
              </div>

              <div className="col-2 ">
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

        <div className="row row-col-1 ">
          <div className="container mt-3 px-0">
            <p className="fs-2 text-center">User cart</p>
            <hr />
            <div
              id="CarosalConatiner "
              className="d-flex justify-content-center align-items-center px-5"
            >
              <CardCarosal />
            </div>
          </div>
        </div>
        <div className="row row-col-1">
          <div className="container mt-4 px-0">
            <p className="fs-2 text-center">Orders</p>
            <hr />

            <div
              id={style.search_container}
              className="container-fluid px-0 py-2"
            >
              <div className="container ">
                <div className="row ">
                  <div
                    id={style.searchBar}
                    className="col-11 p-0 pe-4 d-flex justify-content-center align-items-center"
                  >
                    <input
                      id={style.search_input}
                      className=""
                      type="text"
                    ></input>
                  </div>
                  <div className="col-1 p-0 d-flex ">
                    <button id={style.AddButton}>
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

            <div
              id={style.orderContainer}
              className="container bg-light  my-3 p-0 pb-2"
            >
              <div className="row m-0">
                <div className="col-4">
                  <h1 className="fs-6 mt-2 mb-0">Order id :</h1>
                  <p className="mt-0">Delivered to : userName</p>
                </div>
                <div className="col">
                  <h1 className="fs-6 mt-2 mb-0">Driver name :</h1>
                  <p className="mt-0">Date : date</p>
                </div>
                <div className="col-3 d-flex justify-content-center align-items-center">
                  <h1 className="fs-4 ">Total amount:</h1>
                </div>
              </div>

              <hr className="mt-0 mb-2" />
              <div className="row ">
                <div className="col-4 ">
                  <div className="container ">
                    <h1 className="fs-6">Product name</h1>
                  </div>
                </div>
                <div className="col-1">
                  <div className="container text-center ">
                    <h1 className="fs-6">Qty</h1>
                  </div>
                </div>
                <div className="col-1">
                  <div className="container text-center ">
                    <h1 className="fs-6">Price</h1>
                  </div>
                </div>
                <div className="col-2">
                  <div className="container text-center ">
                    <h1 className="fs-6">Order status</h1>
                  </div>
                </div>
                <div className="col-2">
                  <div className="container text-center ">
                    <h1 className="fs-6">Payment mod</h1>
                  </div>
                </div>
                <div className="col-2">
                  <div className="container text-center ">
                    <h1 className="fs-6">Payment status</h1>
                  </div>
                </div>
              </div>

              {/* this area will loop for order items */}
              <hr className="mt-1 mb-2" />
              <div className="row ">
                <div className="col-4 ">
                  <div className="container">
                    <div className="row">
                      <div className="col-2">
                        <div
                          id={style.orderProductImg}
                          className="container p-0"
                        >
                          <img
                            style={{ borderRadius: "5px" }}
                            src={IMAGES.product_46}
                            className=" float-left w-100 "
                            alt="shop image"
                          />
                        </div>
                      </div>
                      <div className="col">
                        <p className="fs-6 mb-0">Product name</p>
                        <p className="fs-6 mt-0">Category</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-1">
                  <div className="container h-100 d-flex justify-content-center align-items-center ">
                    <p className="fs-6 m-0">3</p>
                  </div>
                </div>
                <div className="col-1">
                  <div className="container h-100 d-flex justify-content-center align-items-center  ">
                    <p className="fs-6 m-0">100</p>
                  </div>
                </div>
                <div className="col-2">
                  <div className="container h-100 d-flex justify-content-center align-items-center ">
                    <p className="fs-6 m-0">Order status</p>
                  </div>
                </div>
                <div className="col-2">
                  <div className="container h-100 d-flex justify-content-center align-items-center">
                    <p className="fs-6 m-0">Online</p>
                  </div>
                </div>
                <div className="col-2">
                  <div className="container h-100 d-flex justify-content-center align-items-center ">
                    <p className="fs-6 m-0">Success</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              id={style.orderContainer}
              className="container bg-light  my-3 p-0 pb-2"
            >
              <div className="row m-0">
                <div className="col-4">
                  <h1 className="fs-6 mt-2 mb-0">Order id :</h1>
                  <p className="mt-0">Delivered to : userName</p>
                </div>
                <div className="col">
                  <h1 className="fs-6 mt-2 mb-0">Driver name :</h1>
                  <p className="mt-0">Date : date</p>
                </div>
                <div className="col-3 d-flex justify-content-center align-items-center">
                  <h1 className="fs-4 ">Total amount:</h1>
                </div>
              </div>

              <hr className="mt-0 mb-2" />
              <div className="row ">
                <div className="col-4 ">
                  <div className="container ">
                    <h1 className="fs-6">Product name</h1>
                  </div>
                </div>
                <div className="col-1">
                  <div className="container text-center ">
                    <h1 className="fs-6">Qty</h1>
                  </div>
                </div>
                <div className="col-1">
                  <div className="container text-center ">
                    <h1 className="fs-6">Price</h1>
                  </div>
                </div>
                <div className="col-2">
                  <div className="container text-center ">
                    <h1 className="fs-6">Order status</h1>
                  </div>
                </div>
                <div className="col-2">
                  <div className="container text-center ">
                    <h1 className="fs-6">Payment mod</h1>
                  </div>
                </div>
                <div className="col-2">
                  <div className="container text-center ">
                    <h1 className="fs-6">Payment status</h1>
                  </div>
                </div>
              </div>

              {/* this area will loop for order items */}
              <hr className="mt-1 mb-2" />
              <div className="row ">
                <div className="col-4 ">
                  <div className="container">
                    <div className="row">
                      <div className="col-2">
                        <div
                          id={style.orderProductImg}
                          className="container p-0"
                        >
                          <img
                            style={{ borderRadius: "5px" }}
                            src={IMAGES.product_46}
                            className=" float-left w-100 "
                            alt="shop image"
                          />
                        </div>
                      </div>
                      <div className="col">
                        <p className="fs-6 mb-0">Product name</p>
                        <p className="fs-6 mt-0">Category</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-1">
                  <div className="container h-100 d-flex justify-content-center align-items-center ">
                    <p className="fs-6 m-0">3</p>
                  </div>
                </div>
                <div className="col-1">
                  <div className="container h-100 d-flex justify-content-center align-items-center  ">
                    <p className="fs-6 m-0">100</p>
                  </div>
                </div>
                <div className="col-2">
                  <div className="container h-100 d-flex justify-content-center align-items-center ">
                    <p className="fs-6 m-0">Order status</p>
                  </div>
                </div>
                <div className="col-2">
                  <div className="container h-100 d-flex justify-content-center align-items-center">
                    <p className="fs-6 m-0">Online</p>
                  </div>
                </div>
                <div className="col-2">
                  <div className="container h-100 d-flex justify-content-center align-items-center ">
                    <p className="fs-6 m-0">Success</p>
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
