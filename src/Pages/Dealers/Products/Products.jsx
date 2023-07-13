import { useEffect } from "react";
import style from "./Products.module.css";
import AdminDealerCard from "../../../Components/AdminDealerCard/AdminDealerCard";
import { getProducts } from "../../../services/DealersApi";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../../Redux/DealerSlice";
import DealerProfileCard from "../../../Components/Dealers/DealerProfileCard/DealerProfileCard";
import DealersProductCard from "../../../Components/Dealers/DealersProductCard/DealersProductCard";
export default function Products() {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const res = await getProducts();
        dispatch(setProducts(res.data.products));
      } catch (error) {
        console.log(error);
      }
    })();
  }, [dispatch]);

  const products = useSelector((store) => store.dealers.products);
  console.log(products);

  return (
    <>
      <div className="container  px-0 py-3">
        <div className="row m-0">
          <div className="col p-0">
            <DealerProfileCard />
          </div>
        </div>

        <p className="fs-2 text-center">Products</p>
        <hr />

        <div
          id={style.search_container}
          className="container-fluid px-0 py-2 pb-4"
        >
          <div className="container ">
            <div className="row ">
              <div className="col-5 ">
                <div className="row">
                  <div
                    id={style.searchBar}
                    className="col-10 p-0 pe-3 d-flex justify-content-center align-items-center"
                  >
                    <input
                      id={style.search_input}
                      className=""
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
              <div className="col-3   ">
                <div className="input-group input-group-lg mb">
                  <i className="bx bx-sm bx-filter-alt input-group-text"></i>
                  <select className="form-select" id="inputGroupSelect01">
                    <option defaultValue="Select filter">filter</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
              <div className="col-3 px-0">
                <div className="input-group input-group-lg mb">
                  <i className="bx bx-sm bx-sort input-group-text"></i>
                  <select className="form-select" id="inputGroupSelect01">
                    <option defaultValue="Sort">Sort</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
              <div className="col-1 pe-0">
                <button id={style.AddButton}>
                  <div className="d-flex justify-content-center align-items-center">
                    <box-icon size="md" color="#f8f8f8" name="plus"></box-icon>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="row row-cols-4 gy-3">
          {products.map((e) => {
            return (
              <div key={e._id}>
                <DealersProductCard products={e} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
