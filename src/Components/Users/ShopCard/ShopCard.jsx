import React from "react";
import style from "./shopCard.module.css";

export default function ShopCard({ shops }) {
  return (
    // <div id={style.shopCard} className=" h-100">
    //   <div
    //     id={style.shopImgContainer}
    //     className="container p-0 m-0 bg-light d-flex align-items-center justify-content-center "
    //   >
    //     <img
    //       className="m-0 p-0"
    //       id={style.shopImage}
    //       src="https://res.cloudinary.com/dknozjmje/image/upload/v1689747807/MyMartShops/k2601od043ivbqmnowq2.jpg"
    //       alt="Shop Image"
    //     />
    //   </div>
    // </div>

    // =====================>

    <div>
      {/* Card 2 */}
      <div id={style.cardContainer} className="card-container">
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
              <div>
                
              </div>
              <button type="submit" className="w-100" id={style.greenBtn}>
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
