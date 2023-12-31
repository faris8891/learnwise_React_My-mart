import React, { useEffect, useState } from "react";
import style from "./Products.module.css";
import ProductsCard from "../../../Components/Users/ProductsCard/ProductsCard";
import { allProducts } from "../../../services/Users/Users";
import { useParams } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);
  const params = useParams();
  const dealerId = params.dealerId;
  console.log(dealerId);

  useEffect(() => {
    (async () => {
      const res = await allProducts(dealerId);
      // console.log(res.products);
      setProducts(res.products);
    })();
  }, []);
  return (
    <>
      <div className="container p-0 ">
        <div className="row row-cols-lg-4 row-cols-sm-2 row-cols-sx-1 my-4 gy-3">
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
        {/* =======================>> */}
        shop image and ad images*2
        {/* =======================>> */}
        <div className="row row-cols-1 m-0 ">
          <div className="text-center w-75 container-fluid">
            <h1 className="fs-2">Products</h1>
          </div>
        </div>
        <hr />
        <div id={style.search_container} className="container-fluid px-0 pb-3">
          <div className="container mt-4 ">
            <div className="row ">
              <div className="col-lg-6 col-sm-12 ">
                <div className="row">
                  <div
                    id={style.searchBar}
                    className="col-10 p-0 pe-3 d-flex justify-content-center align-items-center"
                  >
                    <input
                      placeholder="Search Products"
                      id={style.search_input}
                      className="fs-5 ps-2"
                      type="text"
                    ></input>
                  </div>
                  <div className="col-2 p-0 d-flex ">
                    <button id={style.SearchButton}>
                      <div className="d-flex justify-content-center align-items-center">
                        <i
                          id={style.searchButton}
                          className="bx bx-search-alt-2 bx-md"
                        ></i>
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 px-lg-2 px-0  col-sm-12 py-3 py-lg-0 ">
                <div className="input-group input-group-lg mb">
                  <i className="bx bx-sm bx-filter-alt input-group-text"></i>
                  <select className="form-select" id={style.inputGroup}>
                    <option defaultValue="All">All</option>

                    <option>123</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-3 col-sm-12 px-0">
                <div className="input-group input-group-lg mb">
                  <i className="bx bx-sm bx-sort input-group-text"></i>
                  <select className="form-select" id={style.inputGroup}>
                    <option defaultValue="All">All</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
              <div className="col-1 pe-0"></div>
            </div>
          </div>
        </div>
        {products.length > 0 ? null : (
          <p className="fs-4 text-center mt-4">There are no Products!</p>
        )}
        <div className="row row-cols-lg-4 row-cols-sm-2 row-cols-sx-1 my-3 gy-3 ">
          {products.map((e) => {
            return (
              <div key={e._id} className="d-flex justify-content-center">
                <ProductsCard products={e} />
              </div>
            );
          })}
        </div>
        <hr className="mt-5" />
        <div className="container p-0">
          <div className="row row-cols-1 m-0 ">
            <div className="text-center w-75 container-fluid">
              <h1 className="fs-2">How it works?</h1>
            </div>
          </div>
          <div className="row  row-cols-lg-3 row-cols-md-3 row-cols-sm-1 my-3">
            <div className=" d-flex flex-column justify-content-center align-items-center">
              <div className={style.colorIcon}>
                <img
                  className="w-100"
                  src="https://res.cloudinary.com/dknozjmje/image/upload/v1689836845/MyMartImages/jo319odre7lbqdcinhuz.png"
                  alt="Location icon"
                />
              </div>
              <div className="text-center">
                <p>
                  Create an account
                  <br />
                  and add your address
                </p>
              </div>
            </div>

            <div className=" d-flex flex-column justify-content-center align-items-center">
              <div className={style.colorIcon}>
                <img
                  className="w-100"
                  src="https://res.cloudinary.com/dknozjmje/image/upload/v1689836845/MyMartImages/xtysbyxjakagsa6zmvcq.png"
                  alt="Location icon"
                />
              </div>
              <div className="text-center">
                <p>
                  Select products
                  <br />
                  you want to buy
                </p>
              </div>
            </div>

            <div className=" d-flex flex-column justify-content-center align-items-center">
              <div className={style.colorIcon}>
                <img
                  className="w-100"
                  src="https://res.cloudinary.com/dknozjmje/image/upload/v1689836845/MyMartImages/d7j1dyjpxmkc69yhe9yl.png"
                  alt="Location icon"
                />
              </div>
              <div className="text-center">
                <p>
                  We will deliver your
                  <br />
                  shopping to your door
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row row-cols-1 m-0 ">
          <div className="text-center w-75 container-fluid">
            <h1 className="fs-2">Recommended shop</h1>
            <p>
              Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu Curabitur tempus urna at turpis condimentum
              lobortis. Ut commodo efficitur neque.
            </p>
          </div>
        </div>
        <div className="row row-cols-lg-4 row-cols-sm-2 row-cols-sx-1 my-3 mb-5 pb-4 gy-3 ">
          <div className="d-flex justify-content-center">
            {/* <ShopCard /> */}
          </div>
          <div className="d-flex justify-content-center">
            {/* <ShopCard /> */}
          </div>
          <div className="d-flex justify-content-center">
            {/* <ShopCard /> */}
          </div>
          <div className="d-flex justify-content-center">
            {/* <ShopCard /> */}
          </div>
        </div>
      </div>
    </>
  );
}
