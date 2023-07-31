import IMAGES from "../../../assets/images/Image";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import style from "./UserNavbar.module.css";
import { useContext, useEffect } from "react";
import { profile } from "../../../services/Users/Users";
import { useDispatch, useSelector } from "react-redux";
import { setLogin, setProfiles } from "../../../Redux/UserSlice";
import { CartContext } from "../../../Context/useContext";
import Cookies from "js-cookie";
export default function UsersNavbar() {
  const { cartTrigger } = useContext(CartContext);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const userProfile = async () => {
    const res = await profile();
    dispatch(setProfiles(res));
    dispatch(setLogin(true));
    return res;
  };
  useEffect(() => {
    userProfile();
  }, [cartTrigger]);

  const handleLogout = () => {
    Cookies.remove("userToken");
    dispatch(setLogin(false));
    navigate("/");
  };
  const data = useSelector((store) => store.users);
  console.log(data.login);
  return (
    <>
      <nav id={style.headerContainer} className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <button
            style={{ border: "1px solid #f8f8f8", right: "30px", top: "25px" }}
            className="navbar-toggler position-absolute"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i style={{ color: "#f8f8f8" }} className="bx bx-menu"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="ps-1">
              <img
                id={style.navLogo}
                alt="mymart logo"
                src={IMAGES.Mymart_Logo}
              />
            </div>

            <NavLink
              className="ms-4"
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "#82b440" : "#f8f8f8",
              })}
            >
              <h5 className="m-3">Home</h5>
            </NavLink>
            <NavLink
              to="/shops"
              style={({ isActive }) => ({
                color: isActive ? "#82b440" : "#f8f8f8",
              })}
            >
              <h5 className="m-3">Shops</h5>
            </NavLink>
            <NavLink
              to="/orders"
              style={({ isActive }) => ({
                color: isActive ? "#82b440" : "#f8f8f8",
              })}
            >
              <h5 className="m-3">Orders</h5>
            </NavLink>
          </div>

          <div className="d-flex ">
            <NavLink
              to="/cart"
              style={{
                color: "#82b440",
              }}
            >
              <div className="position-relative me-1">
                <i className="bx bx-md bx-cart-alt"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {data.cartLength}
                </span>
              </div>
            </NavLink>

            <div className="mx-3">
              <NavLink>
                {data.profileImage ? (
                  <img
                    style={{ height: "40px", width: "40px" }}
                    src={data.profileImage}
                    className="rounded-circle"
                    loading="lazy"
                  />
                ) : (
                  <img
                    style={{ height: "40px", width: "40px" }}
                    src="https://res.cloudinary.com/dknozjmje/image/upload/v1690616727/MyMartImages/zgsq0drxkymunbbgcufq.webp"
                    className="rounded-circle"
                    loading="lazy"
                  />
                )}
              </NavLink>
            </div>
            {data.login ? (
              <button
                onClick={handleLogout}
                className="px-2"
                id={style.signOutButton}
              >
                Sign out
              </button>
            ) : (
              <button
                onClick={() => navigate("/login")}
                className="px-2"
                id={style.signInButton}
              >
                Sign in
              </button>
            )}
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
