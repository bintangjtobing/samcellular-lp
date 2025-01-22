"use client";

import React from "react";
import Link from "next/link";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import { clientApiRequest } from "@/services/clientApiRequest";

const BannerTwo = () => {
  const [data, setData] = useState([])
  const settings = {
    dots: true,

    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };


  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await clientApiRequest({
          url: 'categories',
          method: 'GET',
          parameter: 'business_id=1'
        })
        console.log(data);
        setData(data)
      } catch (error) {
        console.log(error);
      }
    }

    getData()
  }, [])

  return (
    <div className='banner-two'>
      <div className='container container-lg'>
        <div className='banner-two-wrapper d-flex align-items-start'>
          <div className='w-265 d-lg-block d-none flex-shrink-0'>
            <div className='responsive-dropdown style-two common-dropdown nav-submenu p-0 submenus-submenu-wrapper shadow-none border border-gray-100 position-relative border-top-0'>
              <button
                type='button'
                className='close-responsive-dropdown rounded-circle text-xl position-absolute inset-inline-end-0 inset-block-start-0 mt-4 me-8 d-lg-none d-flex'
              >
                <i className='ph ph-x' />{" "}
              </button>
              <div className='logo px-16 d-lg-none d-block'>
                <Link href='/' className='link'>
                  <img src='assets/images/logo/logo.png' alt='Logo' />
                </Link>
              </div>
              <ul className='responsive-dropdown__list scroll-sm p-0 py-8 overflow-y-auto '>
                {data && data.map((item, index) => (
                    <li key={index} className='has-submenus-submenu'>
                      <Link
                        href='#'
                        className='text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0'
                      >
                        <span>{item.name}</span>
                        <span className='icon text-md d-flex ms-auto'>
                          <i className='ph ph-caret-right' />
                        </span>
                      </Link>
                      <div className='submenus-submenu py-16'>
                        <h6 className='text-lg px-16 submenus-submenu__title'>
                          {item.sub_categories[0].name}
                        </h6>
                        <ul className='submenus-submenu__list max-h-300 overflow-y-auto scroll-sm'>
                          {/* <li>
                            <Link href='/shop'>Samsung</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Iphone</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Vivo</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Oppo</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Itel</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Realme</Link>
                          </li> */}
                        </ul>
                      </div>
                    </li>
                ))}
              </ul>
            </div>
          </div>
          <div className='banner-item-two-wrapper rounded-24 overflow-hidden position-relative arrow-center flex-grow-1 mb-0'>
            <img
              src='assets/images/bg/banner-two-bg.png'
              alt=''
              className='banner-img position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 z-n1 object-fit-cover rounded-24'
            />
            <div className='banner-item-two__slider'>
              <Slider {...settings}>
                <div className='banner-item-two'>
                  <div className='banner-item-two__content'>
                    <span className='text-white mb-8 h6'>
                      Starting at only $250
                    </span>
                    <h2 className='banner-item-two__title bounce text-white'>
                      Get The Sound You Love For Less
                    </h2>
                    <Link
                      href='/shop'
                      className='btn btn-outline-white d-inline-flex align-items-center rounded-pill gap-8 mt-48'
                    >
                      Shop Now
                      <span className='icon text-xl d-flex'>
                        <i className='ph ph-shopping-cart-simple' />
                      </span>
                    </Link>
                  </div>
                  <div className='banner-item-two__thumb position-absolute bottom-0'>
                    <img src='assets/images/thumbs/banner-two-img.png' alt='' />
                  </div>
                </div>
                <div className='banner-item-two'>
                  <div className='banner-item-two__content'>
                    <span className='text-white mb-8 h6'>
                      Starting at only $250
                    </span>
                    <h2 className='banner-item-two__title bounce text-white'>
                      Get The Sound You Love For Less
                    </h2>
                    <Link
                      href='/shop'
                      className='btn btn-outline-white d-inline-flex align-items-center rounded-pill gap-8 mt-48'
                    >
                      Shop Now
                      <span className='icon text-xl d-flex'>
                        <i className='ph ph-shopping-cart-simple' />
                      </span>
                    </Link>
                  </div>
                  <div className='banner-item-two__thumb position-absolute bottom-0'>
                    <img
                      src='assets/images/thumbs/banner-two-img2.png'
                      alt=''
                    />
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerTwo;
