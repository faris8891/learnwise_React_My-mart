import React from "react";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import style from "./FeedbackModal.module.css";
import { Rating, TextField } from "@mui/material";
import * as yup from "yup";
import { useFormik } from "formik";

const validationSchema = yup.object({
  feedback: yup.string("Enter feedback").trim().required("Required"),
});

export default function FeedbackModal({
  children,
  value,
  data,
  orderId,
  handler,
}) {
  const [show, setShow] = useState(false);
  const [rating, setRating] = useState(value);
  const formik = useFormik({
    initialValues: {
      feedback: data,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      values.orderId = orderId;
      values.rating = Number(rating);
      handler(values);
      formik.resetForm({ values: values });
      handleClose();
    },
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleRating = (e) => {
    setRating(e.target.value);
  };
  return (
    <>
      <div onClick={handleShow}>{children}</div>

      <Modal
        centered
        backdrop="static"
        keyboard={false}
        show={show}
        onHide={handleClose}
      >
        <form onSubmit={formik.handleSubmit}>
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
                  value={formik.values.feedback}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.feedback && Boolean(formik.errors.feedback)
                  }
                  helperText={formik.touched.feedback && formik.errors.feedback}
                />
              </div>
            </Modal.Body>
            <Rating
              name="simple-controlled"
              defaultValue={value}
              onChange={handleRating}
            />
          </div>
          <Modal.Footer>
            <button type="button" id={style.cancel} onClick={handleClose}>
              Close
            </button>
            <button id={style.ok} type="submit">
              Submit
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}
