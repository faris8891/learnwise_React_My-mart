import { useState, useEffect, memo } from "react";
import { Modal } from "react-bootstrap";
import style from "./UpdateModal.module.css";
import { TextField } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { useSelector } from "react-redux";

const validationSchema = yup.object({
  fullName: yup
    .string("Enter full name")
    .trim()
    .min(4, "The full name should be at least four characters long!")
    .required("Required"),
  email: yup
    .string("Enter email")
    .trim()
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      "Enter a valid email!"
    )
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
  flatNo: yup
    .string("Enter address")
    .min(3, "The flat number should be at least 3 characters long!")
    .required("Required"),
});

export default function UpdateModal({ children, title, handler, _id }) {
  const data = useSelector((store) =>
    store.admin.users.find((element) => element._id == _id)
  );
  const formik = useFormik({
    initialValues: {
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      location: data.location,
      address: data.address,
      flatNo: data.flatNo,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handler(data._id, values);
      formik.resetForm({ values: values });
      handleClose();
    },
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleReset = () => {
    formik.resetForm(formik.initialValues);
    handleClose();
  };

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
                disabled
                id="email"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </div>
            <div className="my-3">
              <TextField
                type="tel"
                fullWidth
                disabled
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
            <div className="my-3">
              <TextField
                type="text"
                fullWidth
                id="flatNo"
                name="flatNo"
                label="Flat Number"
                value={formik.values.flatNo}
                onChange={formik.handleChange}
                error={formik.touched.flatNo && Boolean(formik.errors.flatNo)}
                helperText={formik.touched.flatNo && formik.errors.flatNo}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button type="button" id={style.cancel} onClick={handleReset}>
              Cancel
            </button>
            <button type="submit" id={style.ok}>
              Update
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}
