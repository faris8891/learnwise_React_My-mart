import IMAGES from "../../../assets/images/Image";
import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function Navbar_() {
  return (
    <>

      <div id={style.headerContainer} className="container-fluid ">
        <div className="row row-cols-2 row-cols-lg-2">
          <div className="d-flex">
            <img
              id={style.navLogo}
              alt="mymart logo"
              src={IMAGES.Mymart_Logo}
            />
          </div>

          <div className="d-flex justify-content-end ">
            <Navbar expand="lg" id={style.headerContainer}>
              <Container fluid>
                <Navbar.Toggle
                  aria-controls="navbarScroll"
                  style={{ color: "#f8f8f8", borderColor: "#f8f8f8" }}
                >
                  <i class="bx bx-menu"></i>
                </Navbar.Toggle>

                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto my-2 my-lg-0"
                    // style={{ maxHeight: "100px" }}
                    navbarScroll
                  >
                    <NavLink
                      to="/"
                      style={({ isActive }) => ({
                        color: isActive ? "#82b440" : "#f8f8f8",
                      })}
                    >
                      <h5 className="m-3">Home</h5>
                    </NavLink>
                    <NavLink
                      to="shops"
                      style={({ isActive }) => ({
                        color: isActive ? "#82b440" : "#f8f8f8",
                      })}
                    >
                      <h5 className="m-3">Shops</h5>
                    </NavLink>
                    <NavLink
                      to="products"
                      style={({ isActive }) => ({
                        color: isActive ? "#82b440" : "#f8f8f8",
                      })}
                    >
                      <h5 className="m-3">Products</h5>
                    </NavLink>
                    <NavLink
                      to="orders"
                      style={({ isActive }) => ({
                        color: isActive ? "#82b440" : "#f8f8f8",
                      })}
                    >
                      <h5 className="m-3">Orders</h5>
                    </NavLink>
                    <NavLink
                      to="cart"
                      style={({ isActive }) => ({
                        color: isActive ? "#82b440" : "#f8f8f8",
                      })}
                    >
                      <h5 className="m-3">Cart</h5>
                    </NavLink>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
          <div className="d-flex justify-content-end align-items-center">
          </div>
        </div>
      </div>
    </>
  );
}
