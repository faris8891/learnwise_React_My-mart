import React from "react";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import style from "./MessageModal.module.css";
import { Rating } from "@mui/material";

export default function MessageModal({
  children,
  title,
  body,
  value,
  _id,
  data,
}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleConfirm = () => {
    handler(_id, data);
    handleClose();
  };
  return (
    <>
      <div onClick={handleShow}>{children}</div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <div className="text-center">
          <Modal.Body>{body}</Modal.Body>
          <Rating name="half-rating-read" defaultValue={value} precision={0.5} readOnly />
        </div>
        <Modal.Footer>
          <button id={style.ok} onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
