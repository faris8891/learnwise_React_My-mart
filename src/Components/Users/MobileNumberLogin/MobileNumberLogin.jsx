import style from "./MobileNumberLogin.module.css";
import { TextField } from "@mui/material";
import * as yup from "yup";
import { useFormik } from "formik";
import React, { useState } from "react";
import OTPVerify from "../OTPVerify/OTPVerify";

const validationSchema = yup.object({
  phone: yup
    .string("Enter mobile number")
    .matches(/^\S*$/, "Password should not be contain space!")
    .matches(
      /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/,
      "Enter a valid mobile number!"
    )
    .required("Required"),
});

export default function MobileNumberLogin({ handler }) {
  const formik = useFormik({
    initialValues: {
      phone: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handler(values);
      formik.resetForm(formik.initialValues);
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
        <div className="form-outline mb-4">
          <TextField
            type="tel"
            fullWidth
            id="otpPhone"
            name="phone"
            label="Mobile"
            value={formik.values.phone}
            onChange={formik.handleChange}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
          />
        </div>

        {/* Submit button */}
        <OTPVerify>
          <button type="submit" className="w-100" id={style.ok}>
            Get OTP
          </button>
        </OTPVerify>
      </form>
    </>
  );
}
