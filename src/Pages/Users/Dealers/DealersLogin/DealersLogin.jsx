import style from "./DealersLogin.module.css";
import { TextField } from "@mui/material";
import * as yup from "yup";
import { useFormik } from "formik";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { dealersLogin } from "../../../services/DealersApi";
import { toast } from "react-toastify";

const validationSchema = yup.object({
  userName: yup.string("Enter User Name").required("User name can't be empty"),
  password: yup.string("Enter password").required("Password can't be empty"),
});

export default function DealersLogin() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const res = await dealersLogin(values);
        console.log(res.data);
        Cookies.set("dealerToken", res.data, { expires: 1 });
        navigate("orders");
      } catch (error) {
        toast.error(error, { position: "top-center" });
      }
    },
  });

  return (
    <>
      <div id={style.mainContainer} className="container p-0">
        <div id={style.loginCard} className="container p-0 w-25 pt-3 ">
          <form onSubmit={formik.handleSubmit}>
            <p className="fs-4 ms-3">Dealer Login In</p>
            <div className="m-3">
              <TextField
                fullWidth
                id="userName"
                name="userName"
                label="User Name"
                value={formik.values.userName}
                onChange={formik.handleChange}
                error={
                  formik.touched.userName && Boolean(formik.errors.userName)
                }
                helperText={formik.touched.userName && formik.errors.userName}
              />
            </div>
            <div className="m-3">
              <TextField
                fullWidth
                type="password"
                id="password"
                name="password"
                label="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
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
