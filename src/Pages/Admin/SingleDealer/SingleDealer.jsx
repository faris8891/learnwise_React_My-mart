import style from "./SingleDealer.module.css";
import IMAGES from "../../../assets/images/Image";
import AdminDealerCard from "../../../Components/AdminDealerCard/AdminDealerCard";
export default function SingleDealer() {
  return (
    <>
      <div className="container py-3 px-0">
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
                  <p className="m-1 my-0">Id: 64358b73172f0e2526625239</p>
                  <p className="m-1 my-0">Location: calicut</p>
                  <p className="m-1 my-0">Address: Address</p>
                  <p className="m-1 my-0">Mobile: 8812345678</p>
                  <p className="m-1 my-0">Payment: COD ,Online</p>
                  <p className="m-1 my-0">Active: Enabled</p>
                  <div id={style.vl}></div>
                </div>
                <div className="col-2 ">
                  <div className="container-fluid d-flex flex-column justify-content-center align-items-center h-100">
                    <div className="d-flex justify-content-center align-items-center flex-wrap">
                      <box-icon
                        type="solid"
                        color="#FEC600"
                        name="star"
                      ></box-icon>
                      <box-icon
                        type="solid"
                        color="#FEC600"
                        name="star"
                      ></box-icon>
                      <box-icon
                        type="solid"
                        color="#FEC600"
                        name="star"
                      ></box-icon>
                      <box-icon
                        type="solid"
                        color="#FEC600"
                        name="star"
                      ></box-icon>
                      <box-icon
                        type="solid"
                        color="#FEC600"
                        name="star"
                      ></box-icon>
                    </div>
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
        <div className="row m-0 mb-3">
          <div className="col p-0 ">
            <div
              id={style.reviewContainer}
              className="container bg-light py-2  d-flex justify-content-center align-items-center"
            >
              <p className="w-75 fs-4 text-center">
                “ Torem ipsum dolor sit amet, consectetur adipiscing elit.
                Nuncvulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu “
              </p>
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
          0
        </div>
      </div>
    </>
  );
}
