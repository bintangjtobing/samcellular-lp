"use client";

import React from "react";
import Link from "next/link";
import Slider from "react-slick";

const BrandOne = () => {
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <button
        type='button'
        onClick={onClick}
        className={` ${className} slick-next slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1`}
      >
        <i className='ph ph-caret-right' />
      </button>
    );
  }
  function SamplePrevArrow(props) {
    const { className, onClick } = props;

    return (
      <button
        type='button'
        onClick={onClick}
        className={`${className} slick-prev slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1`}
      >
        <i className='ph ph-caret-left' />
      </button>
    );
  }
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 8,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1599,
        settings: {
          slidesToShow: 7,
        },
      },
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 424,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 359,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <div className='brand py-80'>
      <div className='container container-lg'>
        <div className='brand-inner bg-color-one p-24 rounded-16'>
          <div className='section-heading'>
            <div className='flex-between flex-wrap gap-8'>
              <h5 className='mb-0'>Shop by Brands</h5>
              <div className='flex-align mr-point gap-16'>
                <Link
                  href='/shop'
                  className='text-sm fw-medium text-gray-700 hover-text-main-600 hover-text-decoration-underline'
                >
                  View All Deals
                </Link>
              </div>
            </div>
          </div>
          <div className='brand-slider arrow-style-two'>
            <Slider {...settings}>
              <div className='brand-item'>
                <img src='https://res.cloudinary.com/du0tz73ma/image/upload/v1737305786/582a56e7-37f0-43aa-b766-b6e51fa037b3.png' alt='' />
              </div>
              <div className='brand-item'>
                <img src='https://res.cloudinary.com/du0tz73ma/image/upload/v1737305910/61f4ce89-5ec5-41b7-b9e7-6db031560f08.png' alt='' />
              </div>
              <div className='brand-item'>
                <img src='https://res.cloudinary.com/du0tz73ma/image/upload/v1737306027/cc5d4ece-2f09-4e18-943b-f3b5608a4a10.png' alt='' />
              </div>
              <div className='brand-item'>
                <img src='https://res.cloudinary.com/du0tz73ma/image/upload/v1737305786/582a56e7-37f0-43aa-b766-b6e51fa037b3.png' alt='' />
              </div>
              <div className='brand-item'>
                <img src='https://res.cloudinary.com/du0tz73ma/image/upload/v1737305910/61f4ce89-5ec5-41b7-b9e7-6db031560f08.png' alt='' />
              </div>
              <div className='brand-item'>
                <img src='https://res.cloudinary.com/du0tz73ma/image/upload/v1737306027/cc5d4ece-2f09-4e18-943b-f3b5608a4a10.png' alt='' />
              </div>
              <div className='brand-item'>
                <img src='https://res.cloudinary.com/du0tz73ma/image/upload/v1737305786/582a56e7-37f0-43aa-b766-b6e51fa037b3.png' alt='' />
              </div>
              <div className='brand-item'>
                <img src='https://res.cloudinary.com/du0tz73ma/image/upload/v1737305910/61f4ce89-5ec5-41b7-b9e7-6db031560f08.png' alt='' />
              </div>
              <div className='brand-item'>
                <img src='https://res.cloudinary.com/du0tz73ma/image/upload/v1737306027/cc5d4ece-2f09-4e18-943b-f3b5608a4a10.png' alt='' />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandOne;
