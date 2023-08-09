import React from "react";
import style from "./ShopCard.module.css";
import { useSearchParams, useNavigate } from "react-router-dom";

export default function ShopCard(props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const data = props.shops;
  return (
    <div>
      {/* Card 2 */}
      <div id={style.cardContainer} className="card-container ">
        <div className={style.cardFlip}>
          {/* Card 2 Front */}
          <div className={style.front}>
            <div
              id={style.shopImgContainer}
              className="container p-0 m-0 bg-light d-flex align-items-center justify-content-center "
            >
              <img
                className="m-0 p-0"
                id={style.shopImage}
                src="https://res.cloudinary.com/dknozjmje/image/upload/v1689747807/MyMartShops/k2601od043ivbqmnowq2.jpg"
                alt="Shop Image"
              />
            </div>
          </div>
          {/* End Card 2 Front */}

          {/* Card 2 Back */}
          <div className={style.back}>
            <div className="bg-light h-100">
              <div className="d-flex  flex-column justify-content-center align-items-center p-4">
                {data.isOpen ? (
                  <img
                    className="w-50 mt-5"
                    src="https://res.cloudinary.com/dknozjmje/image/upload/v1690028713/MyMartImages/nyw2diaqrotohh8edura.png"
                    alt="Shop open"
                  />
                ) : (
                  <img
                    className="w-50 mt-5"
                    src="https://res.cloudinary.com/dknozjmje/image/upload/v1690028713/MyMartImages/mbd7ybkkwk9k7fja8dml.png"
                    alt="Shop open"
                  />
                )}

                <h1 className="fs-4 mt-3">{data.fullName}</h1>
                <p className="p-0 m-0">{data.location}</p>
                <p className="p-0 m-0">Closing time</p>
              </div>
              <button
                onClick={() => {
                  setSearchParams({ dealerId: data._id });
                  navigate(`/shops/${data._id}`);
                }}
                className="w-100"
                id={style.greenBtn}
              >
                Visit Shop
              </button>
            </div>
          </div>
          {/* End Card 2 Back */}
        </div>
      </div>
      {/* End Card 2 */}
    </div>
  );
}
