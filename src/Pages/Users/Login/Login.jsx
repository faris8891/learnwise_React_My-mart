import style from "./Login.module.css";
import { TextField } from "@mui/material";
import * as yup from "yup";
import { useFormik } from "formik";

import {
  otpLogin,
  userRegister,
  usersLogin,
} from "../../../services/Users/Users";
import Cookies from "js-cookie";

import React, { useContext, useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";
import Register from "../../../Components/Users/Register/Register";
import MobileNumberLogin from "../../../Components/Users/MobileNumberLogin/MobileNumberLogin";
import OTPVerify from "../../../Components/Users/OTPVerify/OTPVerify";
import { OTPContext } from "../../../Context/useContext";
import { useNavigate } from "react-router-dom";

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
  const { OTPShow, setOTPShow } = useContext(OTPContext);
  const [isFlipped, setIsFlipped] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userToken = Cookies.get("userToken");
    if (userToken) {
      navigate("/");
    }
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped((prevState) => !prevState);
  };

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
    if (res) {
      navigate("/")
    }
    Cookies.set("userToken", res.data, { expires: 1 });
  };

  const handleSignUp = async (values) => {
    const res = await userRegister(values);
    if (res) {
      setIsFlipped((prevState) => !prevState);
    }
  };

  const handleOtpLogin = (values) => {
    otpLogin(values);
    setOTPShow(true);
  };
  return (
    <>
      <section className="h-100">
        <div
          className="px-4 py-5 px-md-5 text-center text-lg-start d-flex align-items-center"
          style={{ minHeight: "100vh", backgroundColor: "hsl(0, 0%, 96%)" }}
        >
          <div className="container ">
            <div className="row gx-lg-5 align-items-center">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <h1 className="my-5 display-3 fw-bold ls-tight">
                  The best offer <br />
                  <span style={{ color: "#82b440" }}>for your Home</span>
                </h1>
                <p style={{ color: "hsl(217, 10%, 50.8%)" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                  quibusdam tempora at cupiditate quis eum maiores libero
                  veritatis? Dicta facilis sint aliquid ipsum atque?
                </p>
              </div>

              <div className="col-lg-6 mb-5 mb-lg-0">
                <div>
                  <ReactCardFlip
                    isFlipped={isFlipped}
                    flipDirection="horizontal"
                  >
                    <div>
                      <div className="card">
                        <div className="card-body  py-4 px-md-5">
                          <p className="fs-3 text-center mb-3 p-0">Sign in</p>
                          <form
                            onSubmit={formik.handleSubmit}
                            encType="multipart/form-data"
                          >
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
                                  formik.touched.email &&
                                  Boolean(formik.errors.email)
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
                                  formik.touched.password &&
                                  formik.errors.password
                                }
                              />
                            </div>
                            {/* Submit button */}
                            <button
                              type="submit"
                              className="w-100"
                              id={style.ok}
                            >
                              Sign In
                            </button>
                          </form>

                          <p className="fs-6 text-center m-3 p-0">
                            Or Sign in with OTP
                          </p>
                          <div>
                            <MobileNumberLogin handler={handleOtpLogin} />
                            {/* <OTPVerify/> */}
                          </div>
                          <div
                            onClick={handleClick}
                            className="d-flex justify-content-center align-items-center mt-3"
                          >
                            <button
                              id={style.logInToggle}
                              className="fs-6 p-0 m-0 text-black-50"
                            >
                              Don't have an account ?{" "}
                              <span style={{ color: "#82b440" }}>Sign Up</span>
                            </button>
                            <i
                              style={{ color: "#82b440" }}
                              className="bx bx-sm bx-right-arrow-alt p-0 mt-1"
                            ></i>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="card">
                        <div className="card-body  py-4 px-md-5">
                          <p className="fs-3 text-center mb-3 p-0">Sign up</p>
                          <Register handler={handleSignUp} />
                          <div
                            onClick={handleClick}
                            className="d-flex justify-content-center align-items-center mt-3"
                          >
                            <button
                              id={style.logInToggle}
                              className="fs-6 p-0 m-0 text-black-50"
                            >
                              Already have an account ?{" "}
                              <span style={{ color: "#82b440" }}>Sign In</span>
                            </button>
                            <i
                              style={{ color: "#82b440" }}
                              className="bx bx-sm bx-right-arrow-alt p-0 mt-1"
                            ></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ReactCardFlip>
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
