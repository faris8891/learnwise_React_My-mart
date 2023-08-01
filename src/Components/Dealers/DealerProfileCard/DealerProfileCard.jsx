import React, { useEffect, useState } from "react";
import style from "./DealerProfileCard.module.css";
import IMAGES from "../../../assets/images/Image";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../../services/DealersApi";
import { setProfile } from "../../../Redux/DealerSlice";
import {
  toggleCOD,
  toggleClose,
  toggleOnlinePayment,
} from "../../../services/Dealers/Dealers";
import ConfirmModal from "../../ConfirmModal/ConfirmModal";

export default function DealerProfileCard() {
  const [trigger, setTrigger] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      try {
        const profile = await getProfile();
        console.log(profile.data);
        dispatch(setProfile(profile.data));
      } catch (error) {
        console.log(error);
      }
    })();
  }, [trigger]);
  const profile = useSelector((store) => store.dealers.profile);
  const handleCOD = async (values) => {
    const res = await toggleCOD(values);
    if (res) {
      setTrigger(!trigger);
    }
  };
  const handleOnlinePayment = async (values) => {
    const res = await toggleOnlinePayment(values);
    if (res) {
      setTrigger(!trigger);
    }
  };

  const handleShopClose = (id, values) => {
    console.log(id, values);
    toggleClose(id, values,trigger, setTrigger)
  };
  return (
    <>
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
            <h5 className="fs5 m-1 mb-2">{profile.fullName}</h5>
            <p className="m-1 my-0">Location: {profile.location}</p>
            <p className="m-1 my-0">Mobile: {profile.mobile}</p>
            <p className="m-1 my-0">Address: {profile.address}</p>
          </div>
          <div className="col-auto m-3 ">
            <div className="container-fluid  d-flex flex-column justify-content-center align-items-start h-100">
              <h1 className="my-1 fs-5">Payment</h1>
              <div id={style.cod}>
                <p className="m-0 fs-6">Cash on delivery</p>
                <div onClick={() => handleCOD(!profile.COD)}>
                  {profile.COD ? (
                    <i
                      style={{ color: "#82b440" }}
                      className="bx bx-toggle-right bx-sm m-0"
                    ></i>
                  ) : (
                    <i className="bx bx-toggle-left bx-sm m-0 text-black-50"></i>
                  )}
                </div>
              </div>
              <div id={style.online}>
                <p className="m-0 fs-6">Online payment</p>
                <div
                  onClick={() => handleOnlinePayment(!profile.onlinePayment)}
                >
                  {profile.onlinePayment ? (
                    <i
                      style={{ color: "#82b440" }}
                      className="bx bx-toggle-right bx-sm m-0"
                    ></i>
                  ) : (
                    <i className="bx bx-toggle-left bx-sm m-0 text-black-50"></i>
                  )}
                </div>
              </div>

              <ConfirmModal
                title={
                  profile.isOpen
                    ? `Open ${profile.fullName}`
                    : `Close ${profile.fullName}`
                }
                body={
                  profile.isOpen
                    ? `Click ok to close ${profile.fullName}`
                    : `Click ok to open ${profile.fullName}`
                }
                handler={handleShopClose}
                _id={profile._id}
                data={profile.isOpen}
              >
                {profile.isOpen ? (
                  <button id={style.redBtn} className="my-3">
                    Close shop
                  </button>
                ) : (
                  <button id={style.green} className="my-3">
                    Open shop
                  </button>
                )}
              </ConfirmModal>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
