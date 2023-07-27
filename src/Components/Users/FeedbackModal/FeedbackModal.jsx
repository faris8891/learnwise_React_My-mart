import React from "react";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import style from "./FeedbackModal.module.css";
import { Rating, TextField } from "@mui/material";

export default function FeedbackModal({
  children,
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
          <Modal.Title>Feedback</Modal.Title>
        </Modal.Header>
        <div className="text-center">
          <Modal.Body>
            <div className="my-3">
              <TextField
                fullWidth
                multiline
                id="feedback"
                name="feedback"
                label="feedback"

              />
            </div>
          </Modal.Body>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </div>
        <Modal.Footer>
          <button id={style.ok} onClick={handleClose}>
            Submit
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
