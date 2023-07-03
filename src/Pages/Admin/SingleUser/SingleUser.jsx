import style from "./SingleUser.module.css";
import IMAGES from "../../../assets/images/Image";

export default function SingleUser() {
  return (
    <>
      <div className="container bg-info-subtle">
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

          </div>
        </div>

        <div className="row row-col-1">
          <div className="container mt-3 px-0">
            <p className="fs-2 text-center">Orders</p>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
}
