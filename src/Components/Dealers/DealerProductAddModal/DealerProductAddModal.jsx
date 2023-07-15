import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import style from "./DealerProductAddModal.module.css";
import { TextField, TextareaAutosize } from "@mui/material";
import * as yup from "yup";
import { useFormik } from "formik";

const validationSchema = yup.object({
  productName: yup
    .string("Enter product name")
    .trim("The product name cannot include leading and trailing spaces")
    .strict(true)
    .min(3, "The product name should be at least 4 characters long!")
    .max(40, "The product name should not allow more than 40 characters long!")
    .required("Required"),

  price: yup
    .string("Enter price in INR")
    .trim("The price cannot include leading and trailing spaces")
    .strict()
    .matches(/^\d+(,\d{1,2})?$/, "Price should be positive number")
    .required("Required"),
  category: yup
    .string("Enter category")
    .trim("The category cannot include leading and trailing spaces")
    .strict(true)
    .required("Required"),
  noOfItem: yup
    .string("Enter quantity")
    .trim("The Quantity cannot include leading and trailing spaces")
    .strict(true)
    .matches(/[1-9][0-9]*/, "Quantity should be positive number")
    .matches(
      /^([1-9][0-9][0-9]?)$/,
      "Quantity should be between in 10 and 1000"
    )
    .required("Required"),
  description: yup
    .string("Enter description")
    .trim("The description cannot include leading and trailing spaces")
    .strict(true)
    .min(24, "The product description should be at least 24 characters long!")
    .max(240, "The description should not allow more than 240 characters long!")
    .required("Required"),
  defaultImage: yup.mixed().required(),

  // defaultImage
  // productImages
  // productActive
});

export default function DealerProductAddModal({ handler }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const formik = useFormik({
    initialValues: {
      productName: "",
      price: "",
      category: "",
      noOfItem: "",
      description: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handler(values);
      // formik.resetForm(formik.initialValues);
      handleClose();
    },
  });
  return (
    <div>
      <button id={style.AddButton} onClick={handleShow}>
        <div className="d-flex justify-content-center align-items-center">
          <box-icon size="md" color="#f8f8f8" name="plus"></box-icon>
        </div>
      </button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
          <Modal.Header closeButton>
            <Modal.Title>Add Products</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="my-3">
              <TextField
                fullWidth
                id="productName"
                name="productName"
                label="Product Name"
                value={formik.values.productName}
                onChange={formik.handleChange}
                error={
                  formik.touched.productName &&
                  Boolean(formik.errors.productName)
                }
                helperText={
                  formik.touched.productName && formik.errors.productName
                }
              />
            </div>
            <div className="my-3">
              <TextField
                fullWidth
                id="price"
                name="price"
                label="Price"
                value={formik.values.price}
                onChange={formik.handleChange}
                error={formik.touched.price && Boolean(formik.errors.price)}
                helperText={formik.touched.price && formik.errors.price}
              />
            </div>
            <div className="my-3">
              <TextField
                fullWidth
                id="category"
                name="category"
                label="Category"
                value={formik.values.category}
                onChange={formik.handleChange}
                error={
                  formik.touched.category && Boolean(formik.errors.category)
                }
                helperText={formik.touched.category && formik.errors.category}
              />
            </div>
            <div className="my-3">
              <TextField
                fullWidth
                id="noOfItem"
                name="noOfItem"
                label="Quantity"
                value={formik.values.noOfItem}
                onChange={formik.handleChange}
                error={
                  formik.touched.noOfItem && Boolean(formik.errors.noOfItem)
                }
                helperText={formik.touched.noOfItem && formik.errors.noOfItem}
              />
            </div>
            <div className="my-3">
              <TextField
                fullWidth
                multiline
                id="description"
                name="description"
                label="Description"
                value={formik.values.description}
                onChange={formik.handleChange}
                error={
                  formik.touched.description &&
                  Boolean(formik.errors.description)
                }
                helperText={
                  formik.touched.description && formik.errors.description
                }
              />
            </div>
            <div className="my-3">
              <TextField
                fullWidth
                type="file"
                id="defaultImage"
                name="defaultImage"
                onChange={(e) => {
                  formik.setFieldValue("defaultImage",e.currentTarget.files[0])
                }}
                // error={
                //   formik.touched.defaultImage &&
                //   Boolean(formik.errors.defaultImage)
                // }
                // helperText={
                //   formik.touched.defaultImage && formik.errors.defaultImage
                // }
              />
            </div>
            {/* <input
              type="file"
              name="defaultImage"
              accept="image/*"
              onChange={(e) =>
                formik.setFieldValue("defaultImage", e.currentTarget.files[0])
              }
            /> */}
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
    </div>
  );
}
