import { useState } from "react";
import { Modal, Row } from "react-bootstrap";
import style from "./EditDealerModal.module.css";
import { TextField } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  fullName: yup
    .string("Enter full name")
    .trim()
    .min(4, "The full name should be at least four characters long!")
    .required("Required"),
  userName: yup
    .string("Enter user name")
    .trim()
    .min(5, "The use name should be at least 5 characters long!")
    .required("Required"),
  phone: yup
    .string("Enter mobile number")
    .matches(/^\S*$/, "Password should not be contain space!")
    .matches(
      /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/,
      "Enter a valid mobile number!"
    )
    .required("Required"),
  location: yup
    .string("Enter location")
    .trim()
    .min(4, "The location should be at least 4 characters long!")
    .required("Required"),
  address: yup
    .string("Enter address")
    .min(4, "The address should be at least 4 characters long!")
    .required("Required"),
});

export default function EditDealerModal({ children, title, dealer, handler }) {
  const formik = useFormik({
    initialValues: {
      fullName: dealer.fullName,
      userName: dealer.userName,
      phone: dealer.mobile,
      location: dealer.location,
      address: dealer.address,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const id = dealer._id;
      handler(id, values);
      formik.resetForm(formik.initialValues);
      handleClose();
    },
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="w-100" onClick={handleShow}>
        {children}
      </div>

      <Modal show={show} backdrop="static" onHide={handleClose}>
        <form onSubmit={formik.handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="my-3">
              <TextField
                fullWidth
                id="fullName"
                name="fullName"
                label="FullName"
                value={formik.values.fullName}
                onChange={formik.handleChange}
                error={
                  formik.touched.fullName && Boolean(formik.errors.fullName)
                }
                helperText={formik.touched.fullName && formik.errors.fullName}
              />
            </div>

            <div className="my-3">
              <TextField
                fullWidth
                id="userName"
                name="userName"
                label="userName"
                value={formik.values.userName}
                onChange={formik.handleChange}
                error={
                  formik.touched.userName && Boolean(formik.errors.userName)
                }
                helperText={formik.touched.userName && formik.errors.userName}
              />
            </div>
            <div className="my-3">
              <TextField
                disabled
                type="tel"
                fullWidth
                id="phone"
                name="phone"
                label="Mobile"
                value={formik.values.phone}
                onChange={formik.handleChange}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
              />
            </div>
            <div className="my-3">
              <TextField
                type="text"
                fullWidth
                id="location"
                name="location"
                label="Location"
                value={formik.values.location}
                onChange={formik.handleChange}
                error={
                  formik.touched.location && Boolean(formik.errors.location)
                }
                helperText={formik.touched.location && formik.errors.location}
              />
            </div>
            <div className="my-3">
              <TextField
                type="text"
                fullWidth
                id="address"
                name="address"
                label="Address"
                value={formik.values.address}
                onChange={formik.handleChange}
                error={formik.touched.address && Boolean(formik.errors.address)}
                helperText={formik.touched.address && formik.errors.address}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button type="button" id={style.cancel} onClick={handleClose}>
              cancel
            </button>
            <button type="submit" id={style.ok}>
              Add
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}
