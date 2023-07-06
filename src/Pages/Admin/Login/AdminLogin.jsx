import { Container } from "react-bootstrap";
import style from "./AdminLogin.module.css";
import InputField from "../../../Components/InputField/InputField";
import Button from "../../../Components/Button/Button";
import { adminLogin } from "../../../services/AdminApi";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function AdminLogin() {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginData = {
      userName: e.target.userName.value,
      password: e.target.password.value,
    };
    try {
      const res = await adminLogin(loginData);
      // console.log(res);
      Cookies.set("adminToken", res.data, { expires: 1 });
      navigate("dashboard");
    } catch (error) {
      // console.log(error);
      toast.error(error, { position: "top-center" });
    }
  };
  return (
    <Container className={style.container} fluid>
      <form className={style.login_form} onSubmit={handleSubmit}>
        <InputField name="userName" type="text" placeholder="User name" />
        <InputField name="password" type="password" placeholder="password" />
        <Button btnName="Log in" type="submit" />
      </form>
    </Container>
  );
}
