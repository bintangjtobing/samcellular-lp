import React from "react";
import Link from "next/link";

const DeliveryOne = () => {
  return (
    <div className="delivery-section pt-40">
      <div className="container">
        <div className="delivery position-relative rounded-16 bg-main-600 p-16 flex-align gap-16 flex-wrap z-1">
          <img
            src="assets/images/bg/delivery-bg.png"
            alt="SamCellular"
            className="position-absolute inset-block-start-0 inset-inline-start-0 z-n1 w-100 h-100"
          />
          <div className="row align-items-center">
            <div className="col-md-3 d-md-block d-none">
              <div className="delivery__man text-center">
                <img
                  src="https://res.cloudinary.com/du0tz73ma/image/upload/v1737306027/cc5d4ece-2f09-4e18-943b-f3b5608a4a10.png"
                  alt="SamCellular"
                />
              </div>
            </div>
            <div className="col-md-5 col-sm-7">
              <div className="text-center">
                <h4 className="text-white mb-8">
                  We Delivery on Next Day from 10:00 AM to 08:00 PM
                </h4>
                <p className="text-white">For Orders starts from $100</p>
                <Link
                  href="/shop"
                  className="mt-16 btn btn-main-two fw-medium d-inline-flex align-items-center rounded-pill gap-8"
                >
                  Shop Now
                  <span className="icon text-xl d-flex">
                    <i className="ph ph-arrow-right" />
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-md-4 col-sm-5 d-sm-block d-none">
              <img
                src="assets/images/thumbs/special-snacks-img.png"
                alt="SamCellular"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryOne;
