"use client";

import React, { useState } from "react";
import ReactSlider from "react-slider";
import { useQuery } from "@tanstack/react-query";
import { clientApiRequest } from "@/services/clientApiRequest";
import { addData } from "@/db/helper";

import Link from "next/link";

const fetchDataCategories = async () => {
  const { data } = await clientApiRequest({
    url: "categories",
    method: "GET",
    parameter: "business_id=1",
  });
  return data;
};

const fetchDataBrands = async () => {
  const { data } = await clientApiRequest({
    url: "brands",
    method: "GET",
    parameter: "business_id=1",
  });
  return data;
};

const fetchDataProducts = async () => {
  const { data } = await clientApiRequest({
    url: "products",
    method: "GET",
    parameter: "business_id=1",
  });
  return data;
};

const ShopSection = () => {
  const categoriesQuery = useQuery({
    queryKey: ["categories"],
    queryFn: fetchDataCategories,
  });

  const brandsQuery = useQuery({
    queryKey: ["brands"],
    queryFn: fetchDataBrands,
  });

  const productQuery = useQuery({
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

  let [grid, setGrid] = useState(false);

  let [active, setActive] = useState(false);
  let sidebarController = () => {
    setActive(!active);
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
    <section className="shop py-80">
      <div className={`side-overlay ${active && "show"}`}></div>
      <div className="container">
        <div className="row">
          {/* Sidebar Start */}
          <div className="col-lg-3">
            <div className={`shop-sidebar ${active && "active"}`}>
              <button
                onClick={sidebarController}
                type="button"
                className="shop-sidebar__close d-lg-none d-flex w-32 h-32 flex-center border border-gray-100 rounded-circle hover-bg-main-600 position-absolute inset-inline-end-0 me-10 mt-8 hover-text-white hover-border-main-600"
              >
                <i className="ph ph-x" />
              </button>
              <div className="shop-sidebar__box border border-gray-100 rounded-8 p-32 mb-32">
                <h6 className="text-xl border-bottom border-gray-100 pb-24 mb-24">
                  Product Category
                </h6>
                <ul className="max-h-540 overflow-y-auto scroll-sm">
                  {categoriesQuery.data &&
                    categoriesQuery.data.map((item, index) => (
                      <li key={index} className="mb-24">
                        <Link
                          href="/product-details-two"
                          className="text-gray-900 hover-text-main-600"
                        >
                          {item.name} ({item.sub_categories.length})
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
              <div className="shop-sidebar__box border border-gray-100 rounded-8 p-32 mb-32">
                <h6 className="text-xl border-bottom border-gray-100 pb-24 mb-24">
                  Filter by Price
                </h6>
                <div className="custom--range">
                  <ReactSlider
                    className="horizontal-slider"
                    thumbClassName="example-thumb"
                    trackClassName="example-track"
                    defaultValue={[0, 100]}
                    ariaLabel={["Lower thumb", "Upper thumb"]}
                    ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
                    renderThumb={(props, state) => {
                      const { key, ...restProps } = props;
                      return (
                        <div {...restProps} key={state.index}>
                          {state.valueNow}
                        </div>
                      );
                    }}
                    pearling
                    minDistance={10}
                  />

                  <br />
                  <br />
                  <div className="flex-between flex-wrap-reverse gap-8 mt-24 ">
                    <button
                      type="button"
                      className="btn btn-main h-40 flex-align"
                    >
                      Filter{" "}
                    </button>
                  </div>
                </div>
              </div>

              <div className="shop-sidebar__box border border-gray-100 rounded-8 p-32 mb-32">
                <h6 className="text-xl border-bottom border-gray-100 pb-24 mb-24">
                  Filter by Color
                </h6>
                <ul className="max-h-540 overflow-y-auto scroll-sm">
                  <li className="mb-24">
                    <div className="form-check common-check common-radio checked-black">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="color"
                        id="color1"
                      />
                      <label className="form-check-label" htmlFor="color1">
                        Black(12)
                      </label>
                    </div>
                  </li>
                  <li className="mb-24">
                    <div className="form-check common-check common-radio checked-primary">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="color"
                        id="color2"
                      />
                      <label className="form-check-label" htmlFor="color2">
                        Blue (12)
                      </label>
                    </div>
                  </li>
                  <li className="mb-24">
                    <div className="form-check common-check common-radio checked-gray">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="color"
                        id="color3"
                      />
                      <label className="form-check-label" htmlFor="color3">
                        Gray (12)
                      </label>
                    </div>
                  </li>
                  <li className="mb-24">
                    <div className="form-check common-check common-radio checked-success">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="color"
                        id="color4"
                      />
                      <label className="form-check-label" htmlFor="color4">
                        Green (12)
                      </label>
                    </div>
                  </li>
                  <li className="mb-24">
                    <div className="form-check common-check common-radio checked-danger">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="color"
                        id="color5"
                      />
                      <label className="form-check-label" htmlFor="color5">
                        Red (12)
                      </label>
                    </div>
                  </li>
                  <li className="mb-24">
                    <div className="form-check common-check common-radio checked-white">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="color"
                        id="color6"
                      />
                      <label className="form-check-label" htmlFor="color6">
                        White (12)
                      </label>
                    </div>
                  </li>
                  <li className="mb-0">
                    <div className="form-check common-check common-radio checked-purple">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="color"
                        id="color7"
                      />
                      <label className="form-check-label" htmlFor="color7">
                        Purple (12)
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="shop-sidebar__box border border-gray-100 rounded-8 p-32 mb-32">
                <h6 className="text-xl border-bottom border-gray-100 pb-24 mb-24">
                  Filter by Brand
                </h6>
                <ul className="max-h-540 overflow-y-auto scroll-sm">
                  {brandsQuery.data &&
                    brandsQuery.data.map((item, index) => (
                      <li key={index} className="mb-24">
                        <div className="form-check common-check common-radio">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="brands"
                            id={item.id}
                          />
                          <label
                            className="form-check-label"
                            htmlFor={item.name}
                          >
                            {item.name}
                          </label>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
          {/* Sidebar End */}
          {/* Content Start */}
          <div className="col-lg-9">
            {/* Top Start */}
            <div className="flex-between gap-16 flex-wrap mb-40 ">
              <span className="text-gray-900">Showing 1-20 of 85 result</span>
              <div className="position-relative flex-align gap-16 flex-wrap">
                <div className="list-grid-btns flex-align gap-16">
                  <button
                    onClick={() => setGrid(true)}
                    type="button"
                    className={`w-44 h-44 flex-center border rounded-6 text-2xl list-btn border-gray-100 ${
                      grid === true && "border-main-600 text-white bg-main-600"
                    }`}
                  >
                    <i className="ph-bold ph-list-dashes" />
                  </button>
                  <button
                    onClick={() => setGrid(false)}
                    type="button"
                    className={`w-44 h-44 flex-center border rounded-6 text-2xl grid-btn border-gray-100 ${
                      grid === false && "border-main-600 text-white bg-main-600"
                    }`}
                  >
                    <i className="ph ph-squares-four" />
                  </button>
                </div>
                <div className="position-relative text-gray-500 flex-align gap-4 text-14">
                  <label
                    htmlFor="sorting"
                    className="text-inherit flex-shrink-0"
                  >
                    Sort by:{" "}
                  </label>
                  <select
                    defaultValue={1}
                    className="form-control common-input px-14 py-14 text-inherit rounded-6 w-auto"
                    id="sorting"
                  >
                    <option value={1}>Popular</option>
                    <option value={1}>Latest</option>
                    <option value={1}>Trending</option>
                    <option value={1}>Matches</option>
                  </select>
                </div>
                <button
                  onClick={sidebarController}
                  type="button"
                  className="w-44 h-44 d-lg-none d-flex flex-center border border-gray-100 rounded-6 text-2xl sidebar-btn"
                >
                  <i className="ph-bold ph-funnel" />
                </button>
              </div>
            </div>
            {/* Top End */}
            <div className={`list-grid-wrapper ${grid && "list-view"}`}>
              {productQuery.data &&
                productQuery.data.map((item, index) => (
                  <div
                    key={index}
                    className="product-card h-100 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2"
                  >
                    <Link
                      href={`/product-details-two/${item.id}`}
                      className="product-card__thumb flex-center rounded-8 bg-gray-50 position-relative"
                    >
                      <img
                        src={item.image_url}
                        style={{
                          width: "126px",
                          height: "140px",
                          objectFit: "cover",
                        }}
                        alt=""
                        className="w-auto w-[1rem]"
                      />
                      <span className="product-card__badge bg-primary-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0">
                        Hot{" "}
                      </span>
                    </Link>
                    <div className="product-card__content mt-16 w-100">
                      <h6 className="title fw-medium mt-12 mb-0 text-14">
                        <Link
                          href={`/product-details-two/${item.id}`}
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
                      <button
                        onClick={() => storeProductToCart(item)}
                        className="product-card__cart btn bg-gray-50 text-heading hover-bg-main-600 hover-text-white py-11 rounded-8 flex-center gap-8 fw-medium px-72 w-100"
                        tabIndex={0}
                      >
                        <i className="ph ph-shopping-cart" /> Beli
                      </button>
                    </div>
                  </div>
                ))}
            </div>
            {/* Pagination Start */}
            <ul className="pagination flex-center flex-wrap gap-16">
              <li className="page-item">
                <Link
                  className="page-link h-64 w-64 flex-center text-xxl rounded-8 fw-medium text-neutral-600 border border-gray-100"
                  href="#"
                >
                  <i className="ph-bold ph-arrow-left" />
                </Link>
              </li>
              <li className="page-item active">
                <Link
                  className="page-link h-64 w-64 flex-center text-md rounded-8 fw-medium text-neutral-600 border border-gray-100"
                  href="#"
                >
                  01
                </Link>
              </li>
              <li className="page-item">
                <Link
                  className="page-link h-64 w-64 flex-center text-xxl rounded-8 fw-medium text-neutral-600 border border-gray-100"
                  href="#"
                >
                  <i className="ph-bold ph-arrow-right" />
                </Link>
              </li>
            </ul>
            {/* Pagination End */}
          </div>
          {/* Content End */}
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
