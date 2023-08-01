import style from "./Register.module.css";
import { TextField } from "@mui/material";
import * as yup from "yup";
import { useFormik } from "formik";
import React, { useState } from "react";

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
  password: yup
    .string("Enter password")
    .matches(/^\S*$/, "Password should not be contain space!")
    .min(8, "The password should be at least 8 characters long!")
    .required("Required"),
  phone: yup
    .string("Enter mobile number")
    .matches(/^\S*$/, "Password should not be contain space!")
    .matches(
      /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/,
      "Enter a valid mobile number!"
    )
    .required("Required"),
});

export default function Register({ handler }) {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      phone: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handler(values);
      formik.resetForm(formik.initialValues);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
      <div className="form-outline mb-4">
        <TextField
          fullWidth
          id="fullName"
          name="fullName"
          label="FullName"
          value={formik.values.fullName}
          onChange={formik.handleChange}
          error={formik.touched.fullName && Boolean(formik.errors.fullName)}
          helperText={formik.touched.fullName && formik.errors.fullName}
        />
      </div>

      <div className="form-outline mb-4">
        <TextField
          fullWidth
          id="registerEmail"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
      </div>
      <div className="form-outline mb-4">
        <TextField
          type="password"
          fullWidth
          id="registerPassword"
          name="password"
          label="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
      </div>
      <div className="form-outline mb-4">
        <TextField
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

      {/* Submit button */}
      <button type="submit" className="w-100" id={style.ok}>
        Sign Up
      </button>
    </form>
  );
}
