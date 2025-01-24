"use client";

import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { clientApiRequest } from "@/services/clientApiRequest";
import { useQuery } from "@tanstack/react-query";
import { addData } from "@/db/helper";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const fetchProducts = async () => {
  const { data } = await clientApiRequest({
    url: "products",
    method: "GET",
  });
  return data;
};

const FeaturedOne = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <button
        type="button"
        onClick={onClick}
        className={` ${className} slick-next slick-arrow flex-center rounded-circle border border-gray-100 hover-border-neutral-600 text-xl hover-bg-neutral-600 hover-text-white transition-1`}
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
        className={`${className} slick-prev slick-arrow flex-center rounded-circle border border-gray-100 hover-border-neutral-600 text-xl hover-bg-neutral-600 hover-text-white transition-1`}
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
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const storeProductToCart = async (data) => {
    await addData({
      id: data.id,
      name: data.name,
      price: data.variations[0].sell_price_inc_tax,
      qty: 1,
      image: data.image_url,
      product_description: data.product_description,
    });
  };

  return (
    <section className="featured-products">
      <div className="container container-lg">
        <div className="row g-4 flex-wrap-reverse">
          <div className="col-xxl-8">
            <div className="border border-gray-100 p-24 rounded-16">
              <div className="section-heading mb-24">
                <div className="flex-between flex-wrap gap-8">
                  <h5 className="mb-0">Featured Products </h5>
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
              <div className="row gy-4 featured-product-slider">
                <Slider {...settings}>
                  {data &&
                    data.map((item, index) => (
                      <div key={index} className="col-xxl-6">
                        <div className="featured-products__sliders">
                          <div className="">
                            <div className="mt-24 product-card d-flex gap-16 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                              <Link
                                href={`/product/${item.id}`}
                                className="product-card__thumb flex-center h-unset rounded-8 bg-gray-50 position-relative w-unset flex-shrink-0 p-24"
                                tabIndex={0}
                              >
                                <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0">
                                  Sale 50%{" "}
                                </span>
                                <img
                                  src={item.image_url}
                                  style={{
                                    width: "126px",
                                    height: "140px",
                                    objectFit: "cover",
                                  }}
                                  alt=""
                                  className="w-auto w-[20rem]"
                                />
                              </Link>
                              <div className="product-card__content mt-16 flex-grow-1">
                                <h6 className="title fw-medium mt-12 mb-0 text-14">
                                  <Link
                                    href={`/product/${item.id}`}
                                    className="link text-line-2"
                                    tabIndex={0}
                                  >
                                    {item.name}
                                  </Link>
                                </h6>
                                <div className="product-card__price mt-5 mb-20">
                                  <span className="text-heading text-lg fw-semibold ">
                                    {new Intl.NumberFormat("id-ID", {
                                      style: "currency",
                                      currency: "IDR",
                                      maximumFractionDigits: 0,
                                    }).format(
                                      item.variations[0].sell_price_inc_tax
                                    )}{" "}
                                  </span>
                                </div>
                                <div className="flex-align gap-4">
                                  <span className="text-tertiary-600 text-md d-flex">
                                    <i className="ph-fill ph-storefront" />
                                  </span>
                                  <span className="text-gray-500 text-xs">
                                    by SamCellular
                                  </span>
                                </div>
                                <div className="flex-align gap-6 w-full mb-10">
                                  <span className="text-15 fw-medium text-warning-600 d-flex">
                                    <i className="ph-fill ph-star" />
                                  </span>
                                  <span className="text-xs fw-medium text-gray-500">
                                    4.8 |
                                  </span>
                                  <span className="text-xs fw-medium text-gray-500">
                                    17rb+ terjual
                                  </span>
                                </div>
                                <button
                                  onClick={() => storeProductToCart(item)}
                                  className="product-card__cart btn bg-gray-50 text-heading hover-bg-main-600 hover-text-white py-11 rounded-8 flex-center gap-8 fw-medium px-68"
                                  tabIndex={0}
                                >
                                  <i className="ph ph-shopping-cart" /> Beli
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="">
                            <div className="mt-24 product-card d-flex gap-16 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                              <Link
                                href={`/product/${item.id}`}
                                className="product-card__thumb flex-center h-unset rounded-8 bg-gray-50 position-relative w-unset flex-shrink-0 p-24"
                                tabIndex={0}
                              >
                                <span className="product-card__badge bg-tertiary-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0">
                                  Best seller
                                </span>
                                <img
                                  src={item.image_url}
                                  style={{
                                    width: "126px",
                                    height: "140px",
                                    objectFit: "cover",
                                  }}
                                  alt="marketpro"
                                  className="w-auto w-[10rem] aspect-square"
                                />
                              </Link>
                              <div className="product-card__content mt-16 flex-grow-1">
                                <h6 className="title fw-medium mt-12 mb-0 text-14">
                                  <Link
                                    href={`/product/${item.id}`}
                                    className="link text-line-2"
                                    tabIndex={0}
                                  >
                                    {item.name}
                                  </Link>
                                </h6>
                                <div className="product-card__price mt-5 mb-20">
                                  <span className="text-heading text-lg fw-semibold ">
                                    {new Intl.NumberFormat("id-ID", {
                                      style: "currency",
                                      currency: "IDR",
                                      maximumFractionDigits: 0,
                                    }).format(
                                      item.variations[0].sell_price_inc_tax
                                    )}{" "}
                                  </span>
                                </div>
                                <div className="flex-align gap-4">
                                  <span className="text-tertiary-600 text-md d-flex">
                                    <i className="ph-fill ph-storefront" />
                                  </span>
                                  <span className="text-gray-500 text-xs">
                                    by SamCellular
                                  </span>
                                </div>
                                <div className="flex-align gap-6 w-full mb-10">
                                  <span className="text-15 fw-medium text-warning-600 d-flex">
                                    <i className="ph-fill ph-star" />
                                  </span>
                                  <span className="text-xs fw-medium text-gray-500">
                                    4.8 |
                                  </span>
                                  <span className="text-xs fw-medium text-gray-500">
                                    17rb+ terjual
                                  </span>
                                </div>
                                <button
                                  onClick={() => storeProductToCart(item)}
                                  className="product-card__cart btn bg-gray-50 text-heading hover-bg-main-600 hover-text-white py-11 rounded-8 flex-center gap-8 fw-medium px-68"
                                  tabIndex={0}
                                >
                                  <i className="ph ph-shopping-cart" /> Beli
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </Slider>
              </div>
            </div>
          </div>
          <div className="col-xxl-4">
            <div className="position-relative rounded-16 bg-light-purple overflow-hidden p-28 pb-0 z-1 text-center h-100">
              <img
                src="assets/images/bg/featured-product-bg.png"
                alt="marketpro"
                className="position-absolute inset-block-start-0 inset-inline-start-0 z-n1 w-100 h-100 cover-img"
              />
              <div className="py-xl-4 text-center">
                <span className="h6 mb-20 text-white">
                  iPhone Smart Phone - Red
                </span>
                <div className="flex-center gap-12 text-white">
                  <span className="">FROM</span>
                  <h4 className="mb-8 text-white">$890</h4>
                  <span className="badge-style-two position-relative me-8 bg-main-two-600 text-white text-sm py-2 px-8 rounded-4">
                    20% off
                  </span>
                </div>
                <Link
                  href="/shop"
                  className="mt-16 mb-24 btn btn-main-two fw-medium d-inline-flex align-items-center rounded-pill gap-8"
                  tabIndex={0}
                >
                  Shop Now
                  <span className="icon text-xl d-flex">
                    <i className="ph ph-arrow-right" />
                  </span>
                </Link>
              </div>
              <img
                src="https://res.cloudinary.com/dilb4d364/image/upload/v1737629658/82468254-392e-4edc-bf1f-561c69cca4d2.png"
                alt="marketpro"
                className="d-xxl-inline-flex d-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedOne;
