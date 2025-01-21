"use client";

import React from "react";
import Link from "next/link";
import Slider from "react-slick";

const NewArrivalOne = () => {
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <button
        type="button"
        onClick={onClick}
        className={` ${className} slick-next slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1`}
      >
        <i className="ph ph-caret-right" />
      </button>
    );
  }
  function SamplePrevArrow(props) {
    const { className, onClick } = props;

    return (
      <button
        type="button"
        onClick={onClick}
        className={`${className} slick-prev slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1`}
      >
        <i className="ph ph-caret-left" />
      </button>
    );
  }
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1599,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 424,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className="new-arrival pb-80">
      <div className="container container-lg">
        <div className="section-heading">
          <div className="flex-between flex-wrap gap-8">
            <h5 className="mb-0">New Arrivals</h5>
            <div className="flex-align mr-point gap-16">
              <Link
                href="/shop"
                className="text-sm fw-medium text-gray-700 hover-text-main-600 hover-text-decoration-underline"
              >
                View All Deals
              </Link>
            </div>
          </div>
        </div>
        <div className="new-arrival__slider arrow-style-two">
          <Slider {...settings}>
            <div>
              <div className="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                <Link
                  href="/product-details"
                  className="product-card__thumb flex-center"
                >
                  <img
                    src="https://res.cloudinary.com/du0tz73ma/image/upload/v1737305786/582a56e7-37f0-43aa-b766-b6e51fa037b3.png"
                    alt=""
                  />
                </Link>
                <div className="product-card__content mt-12">
                  <div className="flex-align gap-6">
                    <span className="text-xs fw-bold text-gray-500">4.8</span>
                    <span className="text-15 fw-bold text-warning-600 d-flex">
                      <i className="ph-fill ph-star" />
                    </span>
                    <span className="text-xs fw-bold text-gray-500">(17k)</span>
                  </div>
                  <h6 className="title text-lg fw-semibold mt-12 mb-8">
                    <Link href="/product-details" className="link text-line-2">
                      C-500 Antioxidant Protect Dietary Supplement
                    </Link>
                  </h6>
                  <div className="flex-align gap-4">
                    <span className="text-main-600 text-md d-flex">
                      <i className="ph-fill ph-storefront" />
                    </span>
                    <span className="text-gray-500 text-xs">
                      by SamCellular
                    </span>
                  </div>
                  <div className="flex-between gap-8 mt-24 flex-wrap">
                    <div className="product-card__price">
                      <span className="text-gray-400 text-md fw-semibold text-decoration-line-through d-block"></span>
                      <span className="text-heading text-md fw-semibold ">
                        Rp. 23.999.999{" "}
                        <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                      </span>
                    </div>
                    <Link
                      href="/cart"
                      className="product-card__cart btn btn-main py-11 px-24 rounded-pill flex-align gap-8"
                    >
                      Add <i className="ph ph-shopping-cart" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                <Link
                  href="/product-details"
                  className="product-card__thumb flex-center"
                >
                  <img
                    src="https://res.cloudinary.com/du0tz73ma/image/upload/v1737305910/61f4ce89-5ec5-41b7-b9e7-6db031560f08.png"
                    alt=""
                  />
                </Link>
                <div className="product-card__content mt-12">
                  <div className="flex-align gap-6">
                    <span className="text-xs fw-bold text-gray-500">4.8</span>
                    <span className="text-15 fw-bold text-warning-600 d-flex">
                      <i className="ph-fill ph-star" />
                    </span>
                    <span className="text-xs fw-bold text-gray-500">(17k)</span>
                  </div>
                  <h6 className="title text-lg fw-semibold mt-12 mb-8">
                    <Link href="/product-details" className="link text-line-2">
                      C-500 Antioxidant Protect Dietary Supplement
                    </Link>
                  </h6>
                  <div className="flex-align gap-4">
                    <span className="text-main-600 text-md d-flex">
                      <i className="ph-fill ph-storefront" />
                    </span>
                    <span className="text-gray-500 text-xs">
                      by SamCellular
                    </span>
                  </div>
                  <div className="flex-between gap-8 mt-24 flex-wrap">
                    <div className="product-card__price">
                      <span className="text-gray-400 text-md fw-semibold text-decoration-line-through d-block"></span>
                      <span className="text-heading text-md fw-semibold ">
                        Rp. 23.999.999{" "}
                        <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                      </span>
                    </div>
                    <Link
                      href="/cart"
                      className="product-card__cart btn btn-main py-11 px-24 rounded-pill flex-align gap-8"
                    >
                      Add <i className="ph ph-shopping-cart" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                <Link
                  href="/product-details"
                  className="product-card__thumb flex-center"
                >
                  <img
                    src="https://res.cloudinary.com/du0tz73ma/image/upload/v1737306027/cc5d4ece-2f09-4e18-943b-f3b5608a4a10.png"
                    alt=""
                  />
                </Link>
                <div className="product-card__content mt-12">
                  <div className="flex-align gap-6">
                    <span className="text-xs fw-bold text-gray-500">4.8</span>
                    <span className="text-15 fw-bold text-warning-600 d-flex">
                      <i className="ph-fill ph-star" />
                    </span>
                    <span className="text-xs fw-bold text-gray-500">(17k)</span>
                  </div>
                  <h6 className="title text-lg fw-semibold mt-12 mb-8">
                    <Link href="/product-details" className="link text-line-2">
                      C-500 Antioxidant Protect Dietary Supplement
                    </Link>
                  </h6>
                  <div className="flex-align gap-4">
                    <span className="text-main-600 text-md d-flex">
                      <i className="ph-fill ph-storefront" />
                    </span>
                    <span className="text-gray-500 text-xs">
                      by SamCellular
                    </span>
                  </div>
                  <div className="flex-between gap-8 mt-24 flex-wrap">
                    <div className="product-card__price">
                      <span className="text-gray-400 text-md fw-semibold text-decoration-line-through d-block"></span>
                      <span className="text-heading text-md fw-semibold ">
                        Rp. 23.999.999{" "}
                        <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                      </span>
                    </div>
                    <Link
                      href="/cart"
                      className="product-card__cart btn btn-main py-11 px-24 rounded-pill flex-align gap-8"
                    >
                      Add <i className="ph ph-shopping-cart" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                <Link
                  href="/product-details"
                  className="product-card__thumb flex-center"
                >
                  <img
                    src="https://res.cloudinary.com/du0tz73ma/image/upload/v1737305910/61f4ce89-5ec5-41b7-b9e7-6db031560f08.png"
                    alt=""
                  />
                </Link>
                <div className="product-card__content mt-12">
                  <div className="flex-align gap-6">
                    <span className="text-xs fw-bold text-gray-500">4.8</span>
                    <span className="text-15 fw-bold text-warning-600 d-flex">
                      <i className="ph-fill ph-star" />
                    </span>
                    <span className="text-xs fw-bold text-gray-500">(17k)</span>
                  </div>
                  <h6 className="title text-lg fw-semibold mt-12 mb-8">
                    <Link href="/product-details" className="link text-line-2">
                      C-500 Antioxidant Protect Dietary Supplement
                    </Link>
                  </h6>
                  <div className="flex-align gap-4">
                    <span className="text-main-600 text-md d-flex">
                      <i className="ph-fill ph-storefront" />
                    </span>
                    <span className="text-gray-500 text-xs">
                      by SamCellular
                    </span>
                  </div>
                  <div className="flex-between gap-8 mt-24 flex-wrap">
                    <div className="product-card__price">
                      <span className="text-gray-400 text-md fw-semibold text-decoration-line-through d-block"></span>
                      <span className="text-heading text-md fw-semibold ">
                        Rp. 23.999.999{" "}
                        <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                      </span>
                    </div>
                    <Link
                      href="/cart"
                      className="product-card__cart btn btn-main py-11 px-24 rounded-pill flex-align gap-8"
                    >
                      Add <i className="ph ph-shopping-cart" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                <Link
                  href="/product-details"
                  className="product-card__thumb flex-center"
                >
                  <img
                    src="https://res.cloudinary.com/du0tz73ma/image/upload/v1737305786/582a56e7-37f0-43aa-b766-b6e51fa037b3.png"
                    alt=""
                  />
                </Link>
                <div className="product-card__content mt-12">
                  <div className="flex-align gap-6">
                    <span className="text-xs fw-bold text-gray-500">4.8</span>
                    <span className="text-15 fw-bold text-warning-600 d-flex">
                      <i className="ph-fill ph-star" />
                    </span>
                    <span className="text-xs fw-bold text-gray-500">(17k)</span>
                  </div>
                  <h6 className="title text-lg fw-semibold mt-12 mb-8">
                    <Link href="/product-details" className="link text-line-2">
                      C-500 Antioxidant Protect Dietary Supplement
                    </Link>
                  </h6>
                  <div className="flex-align gap-4">
                    <span className="text-main-600 text-md d-flex">
                      <i className="ph-fill ph-storefront" />
                    </span>
                    <span className="text-gray-500 text-xs">
                      by SamCellular
                    </span>
                  </div>
                  <div className="flex-between gap-8 mt-24 flex-wrap">
                    <div className="product-card__price">
                      <span className="text-gray-400 text-md fw-semibold text-decoration-line-through d-block"></span>
                      <span className="text-heading text-md fw-semibold ">
                        Rp. 23.999.999{" "}
                        <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                      </span>
                    </div>
                    <Link
                      href="/cart"
                      className="product-card__cart btn btn-main py-11 px-24 rounded-pill flex-align gap-8"
                    >
                      Add <i className="ph ph-shopping-cart" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                <Link
                  href="/product-details"
                  className="product-card__thumb flex-center"
                >
                  <img
                    src="https://res.cloudinary.com/du0tz73ma/image/upload/v1737306027/cc5d4ece-2f09-4e18-943b-f3b5608a4a10.png"
                    alt=""
                  />
                </Link>
                <div className="product-card__content mt-12">
                  <div className="flex-align gap-6">
                    <span className="text-xs fw-bold text-gray-500">4.8</span>
                    <span className="text-15 fw-bold text-warning-600 d-flex">
                      <i className="ph-fill ph-star" />
                    </span>
                    <span className="text-xs fw-bold text-gray-500">(17k)</span>
                  </div>
                  <h6 className="title text-lg fw-semibold mt-12 mb-8">
                    <Link href="/product-details" className="link text-line-2">
                      C-500 Antioxidant Protect Dietary Supplement
                    </Link>
                  </h6>
                  <div className="flex-align gap-4">
                    <span className="text-main-600 text-md d-flex">
                      <i className="ph-fill ph-storefront" />
                    </span>
                    <span className="text-gray-500 text-xs">
                      by SamCellular
                    </span>
                  </div>
                  <div className="flex-between gap-8 mt-24 flex-wrap">
                    <div className="product-card__price">
                      <span className="text-gray-400 text-md fw-semibold text-decoration-line-through d-block"></span>
                      <span className="text-heading text-md fw-semibold ">
                        Rp. 23.999.999{" "}
                        <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                      </span>
                    </div>
                    <Link
                      href="/cart"
                      className="product-card__cart btn btn-main py-11 px-24 rounded-pill flex-align gap-8"
                    >
                      Add <i className="ph ph-shopping-cart" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                <Link
                  href="/product-details"
                  className="product-card__thumb flex-center"
                >
                  <img
                    src="https://res.cloudinary.com/du0tz73ma/image/upload/v1737306027/cc5d4ece-2f09-4e18-943b-f3b5608a4a10.png"
                    alt=""
                  />
                </Link>
                <div className="product-card__content mt-12">
                  <div className="flex-align gap-6">
                    <span className="text-xs fw-bold text-gray-500">4.8</span>
                    <span className="text-15 fw-bold text-warning-600 d-flex">
                      <i className="ph-fill ph-star" />
                    </span>
                    <span className="text-xs fw-bold text-gray-500">(17k)</span>
                  </div>
                  <h6 className="title text-lg fw-semibold mt-12 mb-8">
                    <Link href="/product-details" className="link text-line-2">
                      C-500 Antioxidant Protect Dietary Supplement
                    </Link>
                  </h6>
                  <div className="flex-align gap-4">
                    <span className="text-main-600 text-md d-flex">
                      <i className="ph-fill ph-storefront" />
                    </span>
                    <span className="text-gray-500 text-xs">
                      by SamCellular
                    </span>
                  </div>
                  <div className="flex-between gap-8 mt-24 flex-wrap">
                    <div className="product-card__price">
                      <span className="text-gray-400 text-md fw-semibold text-decoration-line-through d-block"></span>
                      <span className="text-heading text-md fw-semibold ">
                        Rp. 23.999.999{" "}
                        <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                      </span>
                    </div>
                    <Link
                      href="/cart"
                      className="product-card__cart btn btn-main py-11 px-24 rounded-pill flex-align gap-8"
                    >
                      Add <i className="ph ph-shopping-cart" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default NewArrivalOne;
