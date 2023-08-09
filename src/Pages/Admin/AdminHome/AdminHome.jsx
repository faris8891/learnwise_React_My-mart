import { useEffect } from "react";
import style from "../AdminHome/AdminHome.module.css";
import "boxicons";
import { adminProfile } from "../../../services/AdminApi";
import { useDispatch, useSelector } from "react-redux";
import { setAdminDetails } from "../../../Redux/AdminSlice";

export default function AdminHome() {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      try {
        const res = await adminProfile();
        const data = res.data;
        dispatch(setAdminDetails(data));
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  const adminData = useSelector((store) => store.admin);
  return (
    <>
      <div className="container mt-4">
        <div className="row ">
          <div className="col-3 gx-2">
            <div className="container p-0 align-content-stretch">
              <div className={style.profile_card}>
                <div className="container d-flex flex-column p-5  justify-content-center align-items-center">
                  <img
                    className="rounded-circle shadow-4-strong w-75"
                    alt="avatar2"
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  />
                  <div id={style.details}>
                    <h1 className="m-3">{adminData.name}</h1>
                    <p className="m-1">{adminData.role}</p>
                    <p className="m-1">{adminData.email}</p>
                    <p className="mb-2">{adminData.mobile}</p>
                  </div>
                  <div className="mb-3">
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
                  <button id={style.disable_btn}>Disable</button>
                </div>
              </div>
              <div
                id={style.store_container}
                className="store_container mt-3 pt-3 pb-1"
              >
                <div className="container  ">
                  <div className="d-flex justify-content-start align-items-center">
                    <div className="pe-2">
                      <box-icon size="sm" name="store"></box-icon>
                    </div>
                    <h4> Top Stores</h4>
                  </div>

                  <div
                    id={style.TopStore}
                    className=" container my-2  d-flex  fle align-items-center justify-content-between"
                  >
                    <p className="m-0 fs-5">sample store 1</p>
                  </div>
                  <div
                    id={style.TopStore}
                    className=" container my-2  d-flex  fle align-items-center justify-content-between"
                  >
                    <p className="m-0 fs-5">sample store 2</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div id={style.reviewContainer} className="container py-2">
              <div className="row">
                <div className="col-6">
                  <h1 className=" fs-3">Store Name</h1>
                </div>
                <div className="col-6">
                  <div className="d-flex justify-content-end">
                    <div className=" d-flex justify-content-center align-items-center">
                      <box-icon name="like"></box-icon>
                      <box-icon size="md" name="x"></box-icon>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-auto">
                  <h1 className="fs-5">Username</h1>
                </div>
                <div className="col-5">
                  <div className="d-flex">
                    <div className="pe-2">
                      <box-icon size="sm" name="calendar"></box-icon>
                    </div>
                    <h1 className="fs-5">Date</h1>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p>
                    Forem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis. Class aptent taciti sociosqu ad litora torquent per
                    conubia nostra, per inceptos himenaeos. Curabitur tempus
                    urna at turpis condimentum lobortis. Ut commodo efficitur
                    neque. Ut diam quam, semper iaculis condimentum ac,
                    vestibulum eu nisl.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
