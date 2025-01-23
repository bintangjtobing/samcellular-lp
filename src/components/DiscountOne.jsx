"use client";

import React from "react";
import Link from "next/link";

const DiscountOne = () => {
  return (
    <section className="discount py-80">
      <div className="container container-lg">
        <div className="row gy-4">
          <div className="col-xl-6">
            <div className="discount-item rounded-16 overflow-hidden position-relative z-1 h-100 d-flex flex-column align-items-start justify-content-center">
              <img
                src="assets/images/bg/discount-bg1.jpg"
                alt="marketpro"
                className="position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 z-n1"
              />
              <div className="w-100 flex-between gap-20">
                <div className="discount-item__content">
                  <span className="fw-semibold text-tertiary-600 mb-20">
                    UP TO 30% OFF
                  </span>
                  <h6 className="mb-20">
                    Tingkatkan produktivitas dengan MacBook Pro! Cepat, kuat,
                    elegan.
                  </h6>
                  <Link
                    href="/shop"
                    className="btn btn-outline-black rounded-pill gap-8"
                    tabIndex={0}
                  >
                    Shop Now
                  </Link>
                </div>
                <img
                  src="https://res.cloudinary.com/dilb4d364/image/upload/v1737629628/4e78e60e-be9e-4b88-94fd-70de10092c2d.png"
                  alt="marketpro"
                  className="d-sm-block d-none"
                />
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="discount-item rounded-16 overflow-hidden position-relative z-1 h-100 d-flex flex-column align-items-center justify-content-center">
              <img
                src="assets/images/bg/discount-bg2.jpg"
                alt="marketpro"
                className="position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 z-n1"
              />
              <div className="w-100 flex-between gap-20">
                <div className="discount-item__content">
                  <span className="fw-semibold text-tertiary-600 mb-20">
                    UP TO 30% OFF
                  </span>
                  <h6 className="mb-20">
                    Pantau kesehatan Anda dengan gaya – Apple Watch Series 8!
                  </h6>
                  <Link
                    href="/shop"
                    className="btn btn-outline-black rounded-pill gap-8"
                    tabIndex={0}
                  >
                    Shop Now
                  </Link>
                </div>
                <img
                  src="https://res.cloudinary.com/dilb4d364/image/upload/v1737629559/de6fd67b-5480-4289-a64e-ab738fce4fad.png"
                  alt="marketpro"
                  className="d-sm-block d-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscountOne;
