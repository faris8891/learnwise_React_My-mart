import style from "./Login.module.css";
import { TextField } from "@mui/material";
import * as yup from "yup";
import { useFormik } from "formik";
import { useState } from "react";
import { usersLogin } from "../../../services/Users/Users";
import Cookies from "js-cookie";

const FILE_SIZE = 500 * 1024;

const validationSchema = yup.object({
  email: yup
    .string("Enter email")
    .trim("The Enter email cannot include leading and trailing spaces")
    .strict(true)
    .matches(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/, "Enter a valid email address")
    .required("Required"),

  password: yup
    .string("Enter password")
    .trim("The password cannot include leading and trailing spaces")
    .strict(true)
    .required("Required"),
});

export default function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      login(values);
      formik.resetForm(formik.initialValues);
    },
  });
  const login = async (values) => {
    const res = await usersLogin(values);
    Cookies.set("userToken", res.data, { expires: 1 })
  };
  return (
    <>
      <section>
        <div
          className="px-4 py-5 px-md-5 text-center text-lg-start d-flex align-items-center"
          style={{ height: "100vh", backgroundColor: "hsl(0, 0%, 96%)" }}
        >
          <div className="container ">
            <div className="row gx-lg-5 align-items-center">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <h1 className="my-5 display-3 fw-bold ls-tight">
                  The best offer <br />
                  <span style={{ color: "#82b440" }}>for your business</span>
                </h1>
                <p style={{ color: "hsl(217, 10%, 50.8%)" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                  quibusdam tempora at cupiditate quis eum maiores libero
                  veritatis? Dicta facilis sint aliquid ipsum atque?
                </p>
              </div>

              <div className="col-lg-6 mb-5 mb-lg-0">
                <div className="card">
                  <div className="card-body py-5 px-md-5">
                    <form
                      onSubmit={formik.handleSubmit}
                      encType="multipart/form-data"
                    >
                      {/* 2 column grid layout with text inputs for the first and last names */}

                      {/* Email input */}
                      <div className="form-outline mb-4">
                        <TextField
                          fullWidth
                          id="email"
                          name="email"
                          label="Email"
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.email && Boolean(formik.errors.email)
                          }
                          helperText={
                            formik.touched.email && formik.errors.email
                          }
                        />
                      </div>

                      {/* Password input */}
                      <div className="form-outline mb-4">
                        <TextField
                          fullWidth
                          id="password"
                          name="password"
                          label="Password"
                          value={formik.values.password}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.password &&
                            Boolean(formik.errors.password)
                          }
                          helperText={
                            formik.touched.password && formik.errors.password
                          }
                        />
                      </div>
                      {/* Submit button */}
                      <button type="submit" className="w-100" id={style.ok}>
                        Sign In
                      </button>
                    </form>

                    {/* Register buttons */}
                    {/* <div className="text-center mt-4 ">
                      <form
                        onSubmit={formik.handleSubmit}
                        encType="multipart/form-data"
                      >
                        <div className="form-outline mb-4">
                          <p>or sign in with mobile number</p>
                          <TextField
                            fullWidth
                            id="productName"
                            name="productName"
                            label="Mobile number"
                            value={formik.values.productName}
                            onChange={formik.handleChange}
                            error={
                              formik.touched.productName &&
                              Boolean(formik.errors.productName)
                            }
                            helperText={
                              formik.touched.productName &&
                              formik.errors.productName
                            }
                          />
                        </div>
                        <button type="submit" className="w-100" id={style.ok}>
                          Get OTP
                        </button>
                      </form>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Jumbotron */}
      </section>
    </>
  );
}
