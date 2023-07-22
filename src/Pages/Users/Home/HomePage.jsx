import React from "react";
import style from "./HomePage.module.css";
import ShopCard from "../../../Components/Users/ShopCard/ShopCard";
import UsersNavbar from "../../../Components/Users/Navbar/UsersNavbar";
import UsersFooter from "../../../Components/Users/UsersFooter/UsersFooter";

export default function HomePage() {
  return (
    <>
      <UsersNavbar/>
      <div className=" row row-cols-1 m-0 p-0">
        <div className="container-fluid p-0 m-0">
          <div id={style.mainBanner}>
            <img
              src="https://res.cloudinary.com/dknozjmje/image/upload/v1689664221/MyMartImages/w0nqnpgmglogzgjvtyse.svg"
              alt="Banner"
            />
            <div id={style.logo}>
              <img
                src="https://res.cloudinary.com/dknozjmje/image/upload/v1689664666/MyMartImages/qhtzwtqlobb48ayfkvkz.svg"
                alt="Logo"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container p-0 ">
        <div className="row row-cols-lg-4 row-cols-sm-2 row-cols-sx-1 my-3 gy-3">
          <div className="  d-flex align-items-center ps-4  justify-content-lg-start  justify-content-md-start">
            <div className={style.featuresIcon}>
              <img
                className="w-100"
                src="https://res.cloudinary.com/dknozjmje/image/upload/v1689666336/MyMartImages/gr1zywba8hq0k0bqscyh.png"
                alt="fast-delivery"
              />
            </div>
            <div>
              <h1 className="fs-6 m-0 ps-3">Fast & Secure Delivery</h1>
              <p className="fs-6 m-0 ps-3">Tell about your service.</p>
            </div>
          </div>
          <div className="  d-flex align-items-center ps-4 justify-content-lg-start  justify-content-md-start">
            <div className={style.featuresIcon}>
              <img
                className="w-100"
                src="https://res.cloudinary.com/dknozjmje/image/upload/v1689666336/MyMartImages/hekomt7cbdihi8vstjgl.png"
                alt="returns"
              />
            </div>
            <div>
              <h1 className="fs-6 m-0 ps-3">2 Days Return Policy</h1>
              <p className="fs-6 m-0 ps-3">No question ask.</p>
            </div>
          </div>
          <div className="d-flex align-items-center ps-4  justify-content-lg-start  justify-content-md-start">
            <div className={style.featuresIcon}>
              <img
                className="w-100"
                src="https://res.cloudinary.com/dknozjmje/image/upload/v1689666336/MyMartImages/ezipa3ig3k8orybgm0mx.png"
                alt="guarantee-certificate"
              />
            </div>
            <div>
              <h1 className="fs-6 m-0 ps-3">Money Back Guarantee</h1>
              <p className="fs-6 m-0 ps-3">Within 5 business days.</p>
            </div>
          </div>
          <div className="d-flex align-items-center ps-4  justify-content-lg-start  justify-content-md-start">
            <div className={style.featuresIcon}>
              <img
                className="w-100"
                src="https://res.cloudinary.com/dknozjmje/image/upload/v1689666336/MyMartImages/xopy8stqbynvwf0e3yj4.png"
                alt="24-hours-support"
              />
            </div>
            <div>
              <h1 className="fs-6 m-0 ps-3">24 X 7 Service</h1>
              <p className="fs-6 m-0 ps-3">Online service for customer</p>
            </div>
          </div>
        </div>

        <div className="row row-cols-1 m-0 ">
          <div className="text-center w-75 container-fluid">
            <h1 className="fs-2">Top Shops</h1>
            <p>
              Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu Curabitur tempus urna at turpis condimentum
              lobortis. Ut commodo efficitur neque.
            </p>
          </div>
        </div>

        <div className="row row-cols-lg-4 row-cols-sm-2 row-cols-sx-1 my-3 gy-3 ">
          <div className="d-flex justify-content-center">
            <ShopCard />
          </div>
          <div className="d-flex justify-content-center">
            <ShopCard />
          </div>
          <div className="d-flex justify-content-center">
            <ShopCard />
          </div>
          <div className="d-flex justify-content-center">
            <ShopCard />
          </div>
        </div>

        <hr className="mt-5" />

        <div className="row row-cols-sm-1  row-cols-lg-2 p-0 m-0">
          <div className=" p-0 m-0 d-flex justify-content-lg-start justify-content-sm-center justify-content-sx-center ">
            <div className="d-flex flex-column justify-content-lg-center  h-100">
              <h1 className="fs-1">
                Fresh products
                <br />
                directly to your door
                <br />
                with free delivery
              </h1>
              <p className="mt-4 fs-6">
                Free Next Day Delivery within 5KM of the store of your choice.
                <br />
                Top-quality fresh products. Properly packed.
              </p>
              <div className="d-flex w">
                <div className="d-flex me-3 ">
                  <i
                    style={{ color: "#82b440" }}
                    className="bx bxs-truck ps-0 p-1 me-1"
                  ></i>
                  <p className="p-0 m-0">Free delivery for all orders</p>
                </div>
                <div className=" d-flex">
                  <i
                    style={{ color: "#82b440" }}
                    className="bx bx-leaf ps-0 p-1 me-1"
                  ></i>
                  <p className="p-0 m-0">Only fresh foods</p>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end p-0 py-5">
            <img
              id={style.adImg}
              src="https://res.cloudinary.com/dknozjmje/image/upload/v1689764442/MyMartImages/kwutjrdnf8jlkamw4pwb.jpg"
              alt=""
            />
          </div>
        </div>
        <hr />
        <div className="container p-0 my-4">
          <div>
            <img
              id={style.ad2}
              src="https://res.cloudinary.com/dknozjmje/image/upload/v1689832653/MyMartImages/u1ajugfbpz7hxl9vpvzn.jpg"
              alt="Ad image"
            />
          </div>
        </div>
        <hr />
        <div className="row row-cols-1 m-0 ">
          <div className="text-center w-75 container-fluid">
            <h1 className="fs-2">Recently added shop</h1>
            <p>
              Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu Curabitur tempus urna at turpis condimentum
              lobortis. Ut commodo efficitur neque.
            </p>
          </div>
        </div>
        <div className="row row-cols-lg-4 row-cols-sm-2 row-cols-sx-1 my-3 gy-3 ">
          <div className="d-flex justify-content-center">
            <ShopCard />
          </div>
          <div className="d-flex justify-content-center">
            <ShopCard />
          </div>
          <div className="d-flex justify-content-center">
            <ShopCard />
          </div>
          <div className="d-flex justify-content-center">
            <ShopCard />
          </div>
        </div>
      </div>
      <UsersFooter/>
    </>
  );
}
