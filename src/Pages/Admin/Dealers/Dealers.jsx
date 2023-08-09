import { useEffect, useState } from "react";
import style from "./Dealers.module.css";
import IMAGES from "../../../assets/images/Image";
import { addDealers, getDealers } from "../../../services/AdminApi";
import { useDispatch, useSelector } from "react-redux";
import { setDealers } from "../../../Redux/AdminSlice";
import AddDealerModal from "../../../Components/AddDealerModel/AddDealerModel";
import { toast } from "react-toastify";
import ConfirmModal from "../../../Components/ConfirmModal/ConfirmModal";
import EditDealerModal from "../../../Components/EditDealerModal/EditDealerModal";
import {
  disableDealers,
  setTopShops,
  updateDealers,
} from "../../../services/Admin/Dealers";

export default function Dealers() {
  const [trigger, setTrigger] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      try {
        const res = await getDealers();
        const data = res.data;
        dispatch(setDealers(data));
      } catch (error) {
        console.log(error);
      }
    })();
  }, [dispatch, trigger]);
  const dealers = useSelector((store) => store.admin.dealers);

  // add dealers
  const addDealerHandler = async (data) => {
    try {
      const res = await addDealers(data);
      setTrigger(!trigger);
      toast.success(res.data, { position: "top-center" });
    } catch (error) {
      toast.error(error, { position: "top-center" });
    }
  };

  // Edit / Update Dealers
  const editDealerHandler = (id, values) => {
    values.dealerId = id;
    updateDealers(values, setTrigger, trigger);
  };

  // disable/ enable dealer
  const toggleHandler = (id, dealerStatus) => {
    disableDealers(id, dealerStatus, setTrigger, trigger);
  };

  //add / remove top shops
  const handleTopShops = (id, value) => {
    setTopShops(id, value, setTrigger, trigger);
  };



  return (
    <>
      <div id={style.search_container} className="container-fluid py-4">
        <div className="container ">
          <div className="row ">
            <div
              id={style.searchBar}
              className="col-11 p-0 pe-4 d-flex justify-content-center align-items-center"
            >
              <input id={style.search_input} type="text"></input>

              <i
                id={style.searchButton}
                className="bx bx-search-alt-2 bx-sm"
              ></i>
            </div>

            <div className="col-1 p-0 d-flex ">
              <AddDealerModal
                title="Add new dealer"
                role="dealer"
                handler={addDealerHandler}
              >
                <button id={style.AddButton}>
                  <div className="d-flex justify-content-center align-items-center">
                    <box-icon size="md" color="#f8f8f8" name="plus"></box-icon>
                  </div>
                </button>
              </AddDealerModal>
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
                <p className="m-1">Disabled dealers</p>
                <p className="m-1">Enabled dealers</p>
                <p className="m-1">Closed</p>
                <p className="m-1">Online payment</p>
                <p className="m-1">COD payment</p>
                <p className="m-1">Top rated dealers</p>
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
              <hr />
              <h5 className="fs-6">Rating</h5>
              <div className="container">
                <div className="d-flex align-items-center">
                  <box-icon name="radio-circle-marked"></box-icon>
                  <p className="m-1">Show all</p>
                </div>
                <div className="d-flex align-items-center">
                  <box-icon name="radio-circle"></box-icon>
                  <p className="m-1">1 star and higher</p>
                </div>
                <div className="d-flex align-items-center">
                  <box-icon name="radio-circle"></box-icon>
                  <p className="m-1">2 star and higher</p>
                </div>
                <div className="d-flex align-items-center">
                  <box-icon name="radio-circle"></box-icon>
                  <p className="m-1">3 star and higher</p>
                </div>
                <div className="d-flex align-items-center">
                  <box-icon name="radio-circle"></box-icon>
                  <p className="m-1">4 star and higher</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-9 p-0">
            {/* Dealer card start */}
            {dealers.map((e) => {
              return (
                <div key={e._id}>
                  <div
                    id={style.DealerCard}
                    className="container bg-light mb-3"
                  >
                    <div className="row">
                      <div className="col-auto p-3">
                        <div
                          id={style.image_container}
                          className=" d-flex justify-content-center align-items-center"
                        >
                          <img
                            src={IMAGES.Shop_S1}
                            className=" float-left w-100  "
                            alt="shop image"
                          />
                        </div>
                      </div>
                      <div
                        id={style.dealer_details}
                        className="col-5 py-2 ps-0 "
                      >
                        <h5 className="fs5 m-1">{e.fullName}</h5>
                        <p className="m-1">Id: {e._id}</p>
                        <p className="m-1">Location: {e.location}</p>
                        <p className="m-1">Mobile: {e.mobile}</p>
                        <p className="m-1">
                          Status: {e.active ? "Active" : "Inactive"}
                        </p>
                        <div id={style.vl}></div>
                      </div>
                      <div className="col ">
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
                          <p className="m-1 fs-5">{e.userName}</p>
                          <p className="m-0 fs-6">{e.location}</p>
                          <p className="m-0 fs-6">
                            Products: {e.products.length}
                          </p>
                          <div className="d-flex justify-content-center align-items-center mt-3">
                            <ConfirmModal
                              title={
                                e.isTopShops
                                  ? `Remove from top shops!`
                                  : `Add to top shops!`
                              }
                              body={
                                e.isTopShops
                                  ? `Click ok to remove ${e.fullName} from top shops`
                                  : `Click ok to add ${e.fullName} to top shops`
                              }
                              handler={handleTopShops}
                              _id={e._id}
                              data={e.isTopShops}
                            >
                              <div id={style.editButton} className="m-1">
                                {e.isTopShops ? (
                                  <i className="bx bxs-heart bx-sm p-2"></i>
                                ) : (
                                  <i className="bx bx-heart bx-sm p-2"></i>
                                )}
                              </div>
                            </ConfirmModal>

                            {/* <div id={style.editButton} className="m-1">
                              <i class="bx bx-heart bx-sm p-2"></i>
                            </div> */}
                            {/* dealer edit/update */}

                            <EditDealerModal
                              title={`Edit ${e.fullName}`}
                              dealer={e}
                              handler={editDealerHandler}
                            >
                              <div id={style.editButton} className="m-1">
                                <i className="bx bxs-pencil bx-sm p-2"></i>
                              </div>
                            </EditDealerModal>

                            <ConfirmModal
                              title={
                                e.active
                                  ? `Disable ${e.fullName}`
                                  : `Enable ${e.fullName}`
                              }
                              body={
                                e.active
                                  ? `Click ok to disable ${e.fullName}`
                                  : `Click ok to enable ${e.fullName}`
                              }
                              handler={toggleHandler}
                              _id={e._id}
                              data={e.active}
                            >
                              <div id={style.editButton} className="m-1">
                                {e.active ? (
                                  <i className="bx bx-toggle-right bx-sm p-2"></i>
                                ) : (
                                  <i className="bx bx-toggle-left bx-sm p-2"></i>
                                )}
                              </div>
                            </ConfirmModal>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Dealer card end */}
          </div>
        </div>
      </div>
    </>
  );
}
