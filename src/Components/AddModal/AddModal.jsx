import { useState } from "react";
import { Modal, Row } from "react-bootstrap";
import style from "./AddModal.module.css";
import { TextField } from "@mui/material";


export default function AddModal({ children, title, handler }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleConfirm = () => {
    handler();
    handleClose();
  };
  return (
    <>
      <div className="w-100" onClick={handleShow}>
        {children}
      </div>

      <Modal show={show} backdrop="static" onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* {
                      fullName: data.fullName,
                      email: data.email,
                      password: password,
                      phone: data.phone,
                      location: data.location,
                      address: data.address,
                      flatNo: data.flatNo,
                      profileImage: data.profileImage,
                  } */}
          <form action="">
            <TextField
              fullWidth
              id="fullName"
              name="fullName"
              label="fullName"
              //   value
              onChange=""
              error=""
              helperText=""
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button id={style.cancel} onClick={handleClose}>
            cancel
          </button>
          <button id={style.ok} onClick={handleConfirm}>
            Add
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
