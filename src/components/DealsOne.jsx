"use client";

import React, { memo, useEffect, useState } from "react";
import Link from "next/link";
import Slider from "react-slick";
import { clientApiRequest } from "@/services/clientApiRequest";
import { useQuery } from "@tanstack/react-query";
import { addData } from "@/db/helper";

const SampleNextArrow = memo(function SampleNextArrow(props) {
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
});

const SamplePrevArrow = memo(function SamplePrevArrow(props) {
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
});

const fetchProducts = async () => {
  const { data } = await clientApiRequest({
    url: "products",
    method: "GET",
  });
  return data;
};

const DealsOne = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const loadCountdown = async () => {
      const { getCountdown } = await import("../helper/Countdown");
      setTimeLeft(getCountdown());
    };
    loadCountdown();
    const interval = setInterval(() => {
      loadCountdown();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
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
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 575,
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
      image: data.image_url
    })
  }
  return (
    <section className="deals-weeek pt-80">
      <div className="container">
        <div className="border border-gray-100 p-24 rounded-16">
          <div className="section-heading mb-24">
            <div className="flex-between flex-wrap gap-8">
              <h5 className="mb-0">Deal of The Week</h5>
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
          <div className="deal-week-box rounded-16 overflow-hidden flex-between position-relative z-1 mb-24">
            <img
              src="assets/images/bg/week-deal-bg.png"
              alt=""
              className="position-absolute inset-block-start-0 inset-block-start-0 w-100 h-100 z-n1 object-fit-cover"
            />
            <div className="d-lg-block d-none ps-32 flex-shrink-0">
              <img
                src="https://res.cloudinary.com/dilb4d364/image/upload/v1737629269/46047a0c-cd16-4bef-9a05-75b17e3f990a.png"
                alt=""
              />
            </div>
            <div className="deal-week-box__content px-sm-4 d-block w-100 text-center">
              <h6 className="mb-20">Apple AirPods Max, Over Ear Headphones</h6>
              <div className="countdown mt-20" id="countdown4">
                <ul className="countdown-list style-four flex-center flex-wrap">
                  <li className="countdown-list__item flex-align flex-column text-sm fw-medium text-white rounded-circle bg-neutral-600">
                    <span className="days" />
                    {timeLeft.days} <br /> Days
                  </li>
                  <li className="countdown-list__item flex-align flex-column text-sm fw-medium text-white rounded-circle bg-neutral-600">
                    <span className="hours" />
                    {timeLeft.hours} <br /> Hour
                  </li>
                  <li className="countdown-list__item flex-align flex-column text-sm fw-medium text-white rounded-circle bg-neutral-600">
                    <span className="minutes" />
                    {timeLeft.minutes} <br /> Min
                  </li>
                  <li className="countdown-list__item flex-align flex-column text-sm fw-medium text-white rounded-circle bg-neutral-600">
                    <span className="seconds" />
                    {timeLeft.seconds} <br /> Sec
                  </li>
                </ul>
              </div>
            </div>
            <div className="d-lg-block d-none flex-shrink-0 pe-xl-5">
              <div className="me-xxl-5">
                <img
                  src="https://res.cloudinary.com/dilb4d364/image/upload/v1737629324/fc0636db-b61b-4072-b7ad-cbc25675ac79.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="deals-week-slider arrow-style-two">
            <Slider {...settings}>
              {data &&
                data.map((item, index) => (
                  <div key={index}>
                    <div className="product-card h-100 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                      <Link
                        href="/product-details-two"
                        className="product-card__thumb flex-center rounded-8 bg-gray-50 position-relative"
                      >
                        <span className="product-card__badge bg-main-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0">
                          Hot
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
                      <div className="product-card__content mt-16 w-100">
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
                          className="product-card__cart w-100 btn bg-gray-50 text-heading hover-bg-main-600 hover-text-white py-11 rounded-8 flex-center gap-8 fw-medium px-68"
                          tabIndex={0}
                        >
                          <i className="ph ph-shopping-cart" /> Beli
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealsOne;
