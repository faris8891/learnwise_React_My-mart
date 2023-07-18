import React from "react";
import style from "./HomePage.module.css";
import IMAGES from "../../../assets/images/Image";

export default function HomePage() {
  return (
    <>
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

      <div
        className="container p-0 bg-secondary-subtle"
      >
        <div id={style.featuresContainer} className="m-0  my-4 ">
          <div className="p-0  d-flex align-items-center">
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
          <div className=" p-0 d-flex align-items-center">
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
          <div className=" p-0  d-flex align-items-center">
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
          <div className=" p-0  d-flex align-items-center">
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
        <div id={style.shopCardContainer} className="row row-cols-4 m-0 gy-3">
          <div id={style.shopCard}>1</div>
          <div id={style.shopCard}>1</div>
          <div id={style.shopCard}>1</div>
          <div id={style.shopCard}>1</div>
          <div id={style.shopCard}>1</div>
          
        </div>
        <hr className="my-4"/>
      </div>
    </>
  );
}
