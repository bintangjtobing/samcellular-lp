"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { clientApiRequest } from "@/services/clientApiRequest";
import db from "@/db/db";
import { addData } from "@/db/helper";
import Swal from 'sweetalert2'


const ProductDetailsTwo = ({ id }) => {

  const { data } = useQuery({
    queryKey: ["product-details"],
    queryFn: async () => {
      const { data } = await clientApiRequest({
        url: "products/" + id,
        method: "GET",
      });
      return data;
    },
  });

  // increment & decrement
  const [quantity, setQuantity] = useState(1);
  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () =>
    setQuantity(quantity > 1 ? quantity - 1 : quantity);

  const storeProductToCart = async () => {
      await addData({
        id: data?.id,
        name: data?.name,
        price: data?.variations[0]?.sell_price_inc_tax,
        qty: quantity,
        image: data.image_url
      })
  };


  return (
    <section className="product-details py-80">
      <div className="container">
        <div className="row gy-4">
          <div className="col-xl-9">
            <div className="row gy-4">
              <div className="col-xl-6">
                <div className="product-details__left">
                  <div className="product-details__thumb-slider border border-gray-100 rounded-16">
                    <div className="">
                      <div className="product-details__thumb flex-center">
                        <img
                          src={data && data.image_url}
                          alt={data && data.name}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="product-details__content">
                  <h5 className="mb-12">{data && data.name}</h5>
                  <div className="flex-align flex-wrap gap-12">
                    <span className="text-gray-900">
                      {" "}
                      <span className="text-gray-400">SKU:</span>
                      {data && data.sku}{" "}
                    </span>
                  </div>
                  <span className="mt-32 pt-32 text-gray-700 border-top border-gray-100 d-block" />
                  <p className="text-gray-700">
                    {data && data.product_description}
                  </p>
                  <div className="my-32 flex-align gap-16 flex-wrap">
                    <div className="flex-align gap-8">
                      <h6 className="mb-0">
                        {new Intl.NumberFormat("id-ID", {
                          style: "currency",
                          currency: "IDR",
                          maximumFractionDigits: 0,
                        }).format(
                          data && data.variations[0].sell_price_inc_tax
                        )}
                        {" "}
                      </h6>
                    </div>
                  </div>
                  <span className="mt-0 text-gray-700 border-top border-gray-100 d-block" />
                  <div className="mt-32">
                    <h6 className="mb-16">Quick Overview</h6>
                    <div className="flex-between align-items-start flex-wrap gap-16">
                      <div>
                        <span className="text-gray-900 d-block mb-12">
                          Color:
                          <span className="fw-medium">
                            &nbsp;Mineral Silver
                          </span>
                        </span>
                        <div className="color-list flex-align gap-8">
                          <button
                            type="button"
                            className="color-list__button w-20 h-20 border border-2 border-gray-50 rounded-circle bg-info-600"
                          />
                          <button
                            type="button"
                            className="color-list__button w-20 h-20 border border-2 border-gray-50 rounded-circle bg-warning-600"
                          />
                          <button
                            type="button"
                            className="color-list__button w-20 h-20 border border-2 border-gray-50 rounded-circle bg-tertiary-600"
                          />
                          <button
                            type="button"
                            className="color-list__button w-20 h-20 border border-2 border-gray-50 rounded-circle bg-main-600"
                          />
                          <button
                            type="button"
                            className="color-list__button w-20 h-20 border border-2 border-gray-50 rounded-circle bg-gray-100"
                          />
                        </div>
                      </div>
                      <div>
                        <span className="text-gray-900 d-block mb-12">
                          Available Storage:
                        </span>
                        <div className="flex-align gap-8 flex-wrap">
                          <Link
                            href="#"
                            className="px-12 py-8 text-sm rounded-8 text-gray-900 border border-gray-200 hover-border-main-600 hover-text-main-600"
                          >
                            with offer{" "}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3">
            <div className="product-details__sidebar py-40 px-32 border border-gray-100 rounded-16">
              <div className="mb-32">
                <label
                  htmlFor="delivery"
                  className="h6 activePage mb-8 text-heading fw-semibold d-block"
                >
                  Delivery
                </label>
                <div className="flex-align border border-gray-100 rounded-4 px-16">
                  <span className="text-xl d-flex text-main-600">
                    <i className="ph ph-map-pin" />
                  </span>
                  <select
                    defaultValue={"medan"}
                    className="common-input border-0 px-8 rounded-4"
                    id="delivery"
                  >
                    <option value={"medan"}>Medan</option>
                    <option value={"jakarta"}>Jakarta</option>
                    <option value={"surabaya"}>Surabaya</option>
                    <option value={"palembang"}>Palembang</option>
                  </select>
                </div>
              </div>
              <div className="mb-32">
                <label
                  htmlFor="stock"
                  className="text-lg mb-8 text-heading fw-semibold d-block"
                >
                  Total Stock:{" "}
                  {data?.variations?.[0]?.variation_location_details?.[0]
                    ?.qty_available
                    ? parseInt(
                      data.variations[0].variation_location_details[0]
                        .qty_available
                    )
                    : 0}{" "}
                  {data && data.unit.short_name}
                </label>
                <span className="text-xl d-flex">
                  <i className="ph ph-location" />
                </span>
                <div className="d-flex rounded-4 overflow-hidden">
                  <button
                    onClick={decrementQuantity}
                    type="button"
                    className="quantity__minus flex-shrink-0 h-48 w-48 text-neutral-600 bg-gray-50 flex-center hover-bg-main-600 hover-text-white"
                  >
                    <i className="ph ph-minus" />
                  </button>
                  <input
                    type="number"
                    className="quantity__input flex-grow-1 border border-gray-100 border-start-0 border-end-0 text-center w-32 px-16"
                    id="stock"
                    value={quantity}
                    readOnly
                  />
                  <button
                    onClick={incrementQuantity}
                    type="button"
                    className="quantity__plus flex-shrink-0 h-48 w-48 text-neutral-600 bg-gray-50 flex-center hover-bg-main-600 hover-text-white"
                  >
                    <i className="ph ph-plus" />
                  </button>
                </div>
              </div>
              <div className="mb-32">
                <div className="flex-between flex-wrap gap-8 border-bottom border-gray-100 pb-16 mb-16">
                  <span className="text-gray-500">Price</span>
                  <h6 className="text-lg mb-0">
                    {new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      maximumFractionDigits: 0,
                    }).format(data && data.variations[0].sell_price_inc_tax)}
                    {" "}
                  </h6>
                </div>
                {/* <div className="flex-between flex-wrap gap-8">
                  <span className="text-gray-500">Shipping</span>
                  <h6 className="text-lg mb-0">From $10.00</h6>
                </div> */}
              </div>
              <button
                onClick={() => storeProductToCart()}
                href="#"
                className="btn btn-main flex-center gap-8 rounded-8 py-16 fw-normal mt-20 w-100"
              >
                <i className="ph ph-shopping-cart-simple text-lg" />
                Add To Cart
              </button>
              <Link
                href="#"
                className="btn btn-outline-main rounded-8 py-16 fw-normal mt-16 w-100"
              >
                Beli langsung
              </Link>
            </div>
          </div>
        </div>
        <div className="pt-80">
          <div className="product-dContent border rounded-24">
            <div className="product-dContent__header border-bottom border-gray-100 flex-between flex-wrap gap-16">
              <ul
                className="nav common-tab nav-pills mb-3"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pills-description-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-description"
                    type="button"
                    role="tab"
                    aria-controls="pills-description"
                    aria-selected="true"
                  >
                    Description
                  </button>
                </li>
              </ul>
            </div>
            <div className="product-dContent__box">
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-description"
                  role="tabpanel"
                  aria-labelledby="pills-description-tab"
                  tabIndex={0}
                >
                  <div className="mb-40">
                    <h6 className="mb-24">Product Description</h6>
                    <p className="text-gray-700">
                      {data && data.product_description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsTwo;
