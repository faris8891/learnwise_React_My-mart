import { useCallback, useEffect, useState } from "react";
import style from "./Products.module.css";
import AdminDealerCard from "../../../Components/AdminDealerCard/AdminDealerCard";
import { getProducts } from "../../../services/DealersApi";
import { useDispatch, useSelector } from "react-redux";

import DealerProfileCard from "../../../Components/Dealers/DealerProfileCard/DealerProfileCard";
import DealersProductCard from "../../../Components/Dealers/DealersProductCard/DealersProductCard";
import DealerProductAddModal from "../../../Components/Dealers/DealerProductAddModal/DealerProductAddModal";
import axios from "axios";
import Cookies from "js-cookie";
export default function Products() {
  const [trigger, setTrigger] = useState(false);
  const [productDta, setProductData] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const res = await getProducts();
        setProductData(res.data.products);
        setFilterProduct(res.data.products);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [dispatch, trigger]);

  const addNewProduct = async (values) => {
    const product = {
      ...values,
      productActive: false,
      productImages: ["productImages-1", "productImages-2"],
    };
    const file = values.defaultImage;
    console.log(file);
    const formData = new FormData();
    formData.append("file", file);
    Object.entries(product).forEach(([key, value]) => {
      if (key != "defaultImage") {
        formData.append(key, product[key]);
      }
    });

    const dealerToken = Cookies.get("dealerToken");
    const headers = {
      Authorization: dealerToken,
      "Content-Type": "multipart/form-data",
    };
    try {
      const res = await axios.post(
        "http://127.0.0.1:3011/dealers/products",
        formData,
        { headers }
      );
      console.log(res);
      setTrigger(!trigger);
      toast.success(res.data, { position: "top-center" });
    } catch (error) {
      console.log(error);
      toast.error(error, { position: "top-center" });
    }
  };

  const handleFilter = (e) => {
    const filterType = { value: e.target.value };
    if (filterType.value !== "All") {
      const data = productDta.filter((e) => e.category == filterType.value);
      setFilterProduct(data);
    } else {
      setFilterProduct(productDta);
    }
  };
  const handleSearch = () => {
    const searchProduct = filterProduct.filter((e) => {
      const key = searchKey.value.toLowerCase();
      return e.productName.toLowerCase().match(`${key}`);
    });
    setFilterProduct(searchProduct);
  };
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
                      placeholder="Search by product name"
                      onChange={(e) => setSearchKey({ value: e.target.value })}
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
              <div className="col-3   ">
                <div className="input-group input-group-lg mb">
                  <i className="bx bx-sm bx-filter-alt input-group-text"></i>
                  <select
                    onChange={handleFilter}
                    className="form-select"
                    id="inputGroupSelect01"
                  >
                    <option defaultValue="all">All</option>
                    {productDta.map((e) => {
                      return (
                        <option key={e._id} value={e.category}>
                          {e.category}
                        </option>
                      );
                    })}
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
                {/* ====================> */}
                <DealerProductAddModal handler={addNewProduct} />
              </div>
            </div>
          </div>
        </div>

        <div className="row row-cols-4 gy-3">
          {filterProduct.map((e) => {
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
