import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import style from "./DealerOrderModel.module.css";
import IMAGES from "../../assets/images/Image";

export default function DealerOrderModel({ products, date }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open ? (
        <i
          className="bx bx-md bx-chevron-up"
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        />
      ) : (
        <i
          className="bx bx-md bx-chevron-down"
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        />
      )}

      <Collapse in={open}>
        <div id="example-collapse-text" className="w-100">
          <hr className="mt-0 mb-2" />
          <div className="row ">
            <div className="col-6 ">
              <div className="container ">
                <h1 className="fs-6">Product name</h1>
              </div>
            </div>
            <div className="col-2">
              <div className="container text-center ">
                <h1 className="fs-6">Qty</h1>
              </div>
            </div>
            <div className="col-2">
              <div className="container text-center ">
                <h1 className="fs-6">Price</h1>
              </div>
            </div>
            <div className="col-2">
              <div className="container text-center ">
                <h1 className="fs-6">Date</h1>
              </div>
            </div>
          </div>
          {/* this area will loop for order items */}
          {products.map((e) => {
            return (
              <div key={e._id}>
                <hr className="mt-1 mb-2" />
                <div className="row ">
                  <div className="col-6 ">
                    <div className="container">
                      <div className="row">
                        <div className="col-2">
                          <div
                            id={style.orderProductImg}
                            className="container p-0"
                          >
                            <img
                              style={{ borderRadius: "5px" }}
                              src={e.defaultImage}
                              className=" float-left w-100 "
                              alt="shop image"
                            />
                          </div>
                        </div>
                        <div className="col">
                          <h1 className="fs-6 mb-0">{e.productName}</h1>
                          <p className="fs-6 mt-0">
                            Category: need to update api
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="container h-100 d-flex justify-content-center align-items-center ">
                      <p className="fs-6 m-0">{e.quantity}</p>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="container h-100 d-flex justify-content-center align-items-center  ">
                      <p className="fs-6 m-0">{e.price}</p>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="container h-100 d-flex justify-content-center align-items-center ">
                      <p className="fs-6 m-0">{date}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Collapse>
    </>
  );
}
