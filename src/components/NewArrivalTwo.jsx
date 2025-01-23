"use client";

import React from "react";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { clientApiRequest } from "@/services/clientApiRequest";

import dynamic from "next/dynamic";
const Slider = dynamic(() => import("react-slick"), { ssr: false });

const NewArrivalTwo = () => {
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await clientApiRequest({
        url: "products",
        parameter: "business_id=1",
        method: "GET",
      });
      return data;
    },
  });
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
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1599,
        settings: {
          slidesToShow: 5,
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
      <div className="container">
        <div className="section-heading">
          <div className="flex-between flex-wrap gap-8">
            <h5 className="mb-0">You Might Also Like</h5>
            <div className="flex-align mr-point gap-16">
              <Link
                href="/shop"
                className="text-sm fw-medium text-gray-700 hover-text-main-600 hover-text-decoration-underline"
              >
                All Products
              </Link>
            </div>
          </div>
        </div>
        <div className="new-arrival__slider arrow-style-two">
          <Slider {...settings}>
            {data &&
              data.map((item, index) => (
                <div key={index}>
                  <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <Link
                      href={`/product-details-two/${item.id}`}
                      className="product-card__thumb flex-center"
                    >
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
                    <div className="product-card__content p-sm-2">
                      <h6 className="title fw-medium mt-12 mb-0 text-14">
                        <Link
                          href="/product-details-two"
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
                          }).format(item.variations[0].sell_price_inc_tax)}{" "}
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
                      <Link
                        href="/cart"
                        className="product-card__cart btn bg-gray-50 text-heading hover-bg-main-600 hover-text-white py-11 rounded-8 flex-center gap-8 fw-medium px-68"
                        tabIndex={0}
                      >
                        <i className="ph ph-shopping-cart" /> Beli
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default NewArrivalTwo;
