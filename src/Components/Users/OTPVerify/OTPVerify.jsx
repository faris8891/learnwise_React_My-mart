import React, { useContext, useState } from "react";
import { MuiOtpInput } from "mui-one-time-password-input";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { OTPContext } from "../../../Context/useContext";
import style from "./OTPVerify.module.css";
import { verifyOTP } from "../../../services/Users/Users";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function OTPVerify({ children }) {
  const navigate = useNavigate();
  const [otp, setOtp] = React.useState("");
  const { OTPShow, setOTPShow } = useContext(OTPContext);

  const handleClose = () => setOTPShow(false);
  const handleShow = () => setOTPShow(true);

  const handleChange = (newValue) => {
    const data = {
      otp: newValue,
      otpToken: Cookies.get("otpToken"),
    };
    setOtp(data);
  };
  const handleConfirm = async () => {
    const res = await verifyOTP(otp);
    if (res) {
      setOTPShow(false);
      navigate("/");
    }
  };
  return (
    <>
      <div>{children}</div>

      <Modal
        centered
        show={OTPShow}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h1 className="fs-3">Enter your OTP</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <MuiOtpInput length={5} value={otp.otp} onChange={handleChange} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button id={style.cancel} onClick={handleClose}>
            cancel
          </button>
          <button id={style.ok} onClick={handleConfirm}>
            Confirm
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
