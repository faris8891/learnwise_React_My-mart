import React from "react";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import style from "./ConfirmModal.module.css";

export default function ConfirmModal({
  children,
  title,
  body,
  handler,
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
        <Modal.Body>{body}!</Modal.Body>
        <Modal.Footer>
          <button id={style.cancel} onClick={handleClose}>
            cancel
          </button>
          <button id={style.ok} onClick={handleConfirm}>
            ok
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
