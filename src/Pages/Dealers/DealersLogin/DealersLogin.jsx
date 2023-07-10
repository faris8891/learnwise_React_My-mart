import React from "react";
import style from "./DealersLogin.module.css";
import { TextField } from "@mui/material";

export default function DealersLogin() {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div id={style.mainContainer} className="container p-0">
        <div id={style.loginCard} className="container p-0 w-25 pt-3 ">
          <form onSubmit={submitHandler}>
            <p className="fs-4 ms-3">Dealer Login In</p>
            <div className="m-3">
              <TextField
                fullWidth
                id="userName"
                name="userName"
                label="User Name"
              />
            </div>
            <div className="m-3">
              <TextField
                fullWidth
                type="password"
                id="password"
                name="password"
                label="Password"
              />
            </div>
            <div className="container-fluid ">
              <div className=" mt-4  d-flex flex-column justify-content-center  align-items-center ">
                <button className="mb-3 " type="submit" id={style.signInBtn}>
                  Log in
                </button>
                <div>
                  <p className="mb-3 ">
                    {"Don't have an account yet? Contact admin!"}
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
