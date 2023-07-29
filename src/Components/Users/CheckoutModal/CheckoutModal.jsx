import { InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import style from "./CheckoutModal.module.css";
import Payment from "../Payment/Payment";

export default function CheckoutModal({ children, handler, orders }) {
  const [show, setShow] = useState(false);
  const [paymentMode, setPaymentMode] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = (e) => {
    setPaymentMode(e.target.value);
  };
  const handleCancel = () => {
    setPaymentMode("");
    handleClose();
  };

  return (
    <>
      <div onClick={handleShow} className="w-100">
        {children}
      </div>

      <Modal
        centered
        show={show}
        onHide={handleCancel}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <p className="fs-4 p-0 m-0">Place Order</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div id={style.modalBody} className="d-flex flex-column justify-content-top align-items-center">
            <p1 className="fs-4">Total Amount</p1>
            <h1 className="fs-2">{orders.totalAmount}</h1>
            <p className=" fs-6 text-black-50 mb-1 mt-2 pb-0">Select payment mode</p>
            <Select
              defaultValue=""
              size="small"
              id={style.paymentMode}
              onChange={handleChange}
            >
              {orders.COD ? <MenuItem value="COD">COD</MenuItem> : null}
              {orders.onlinePayment ? (
                <MenuItem value="online">Online</MenuItem>
              ) : null}
            </Select>
            {paymentMode === "COD" ? (
              <button id={style.greenBTN} className="mt-3  fs-5" onClick={handler}> Pay On Delivery</button>
            ) : null}
            {paymentMode === "online" ? <Payment /> : null}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button id={style.cancel}  onClick={handleCancel}>Close</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
