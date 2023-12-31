import React, { useEffect, useState } from "react";
import style from "./Shops.module.css";
import ShopCard from "../../../Components/Users/ShopCard/ShopCard";
import { allShops } from "../../../services/Users/Users";
import { useDispatch, useSelector } from "react-redux";
import { setLatestShops } from "../../../Redux/UserSlice";

export default function Shops() {
  const dispatch = useDispatch();
  const [shops, setShops] = useState([]);
  const [filterShops, setFilterShops] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [location, setLocation] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await allShops();
      if (data) {
        setShops(data);
        setFilterShops(data);

        // latest shops
        const sortShops = [...data];
        dispatch(
          setLatestShops(
            sortShops.sort(function (a, b) {
              return new Date(b.created_at) - new Date(a.created_at);
            })
          )
        );
      }
      //location
      const shopsData = [...data];
      const allLocations = shopsData.map((e) => e.location);

      function onlyUnique(value, index, array) {
        return array.indexOf(value) === index;
      }
      const uniqueLocations = allLocations.filter(onlyUnique);
      setLocation(uniqueLocations);
    })();
  }, []);

  // Search by product
  const handleSearch = () => {
    const key = searchKey.value.toLowerCase();
    if (key.length) {
      const searchShops = shops.filter((e) => {
        return e.fullName.toLowerCase().match(`${key}`);
      });
      setFilterShops(searchShops);
    } else {
      setFilterShops(shops);
    }
  };

  // filter by location
  const handleLocationFilter = (e) => {
    const filterLocation = { value: e.target.value };
    if (filterLocation.value !== "All") {
      const data = shops.filter((e) => e.location == filterLocation.value);
      setFilterShops(data);
    } else {
      setFilterShops(shops);
    }
  };
  const newShops = useSelector((store) => store.users.latestShops);

 
  return (
    <>
      <div className="row row-cols-1 m-0 p-0">
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
      <div className="container p-0  pb-3">
        <div id={style.search_container} className="container-fluid px-0 pb-3">
          <div className="container mt-4 ">
            <div className="row ">
              <div className="col-lg-6 col-sm-12">
                <div className="row">
                  <div
                    id={style.searchBar}
                    className="col-10 p-0 pe-3 d-flex justify-content-center align-items-center"
                  >
                    <input
                      onChange={(e) => setSearchKey({ value: e.target.value })}
                      placeholder="Search shops"
                      id={style.search_input}
                      className="fs-5 ps-2"
                      type="text"
                    ></input>
                  </div>
                  <div className="col-2 p-0 d-flex ">
                    <button onClick={handleSearch} id={style.SearchButton}>
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
                  <i className="text-black-50 bx bx-sm bx-current-location input-group-text"></i>

                  <select
                    onChange={handleLocationFilter}
                    className="form-select"
                    id={style.email}
                  >
                    <option defaultValue="All">All</option>
                    {location.map((e) => {
                      return (
                        <option key={e} value={e}>
                          {e}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="col-lg-3 col-sm-12 px-0">
                <div className="input-group input-group-lg mb">
                  <i className=" text-black-50 bx bx-sm bx-sort input-group-text"></i>
                  <select className="form-select" id={style.password}>
                    <option defaultValue="All">Filter</option>
                    <option value="1">Featured</option>
                    <option value="2">Recommended</option>
                  </select>
                </div>
              </div>
              <div className="col-1 pe-0"></div>
            </div>
          </div>
        </div>

        <hr />
        {filterShops.length > 0 ? null : (
          <p className="fs-4 text-center mt-4">There are no Shops!</p>
        )}
        <div className="row row-cols-lg-4 row-cols-sm-2 row-cols-sx-1 my-3 gy-3 ">
          {filterShops.map((e) => {
            return (
              <div key={e._id} className="d-flex justify-content-center">
                <ShopCard shops={e} />
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
            <h1 className="fs-2">Recently added shop</h1>
            <p>
              Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu Curabitur tempus urna at turpis condimentum
              lobortis. Ut commodo efficitur neque.
            </p>
          </div>
        </div>

        <div className="row row-cols-lg-4 row-cols-sm-2 row-cols-sx-1 my-3 mb-5 gy-3 ">
          {newShops.map((e, i) => {
            return i < 4 ? (
              <div key={e._id} className="d-flex justify-content-center">
                <ShopCard shops={e} />
              </div>
            ) : null;
          })}
        </div>
        <hr />
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
      </div>
    </>
  );
}
