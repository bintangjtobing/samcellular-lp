"use client";

import React, { useState } from "react";
import Link from "next/link";
import { getAllData } from "@/db/helper";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const Checkout = () => {
  const [selectedPayment, setSelectedPayment] = useState("payment1");
  const queryClient = useQueryClient(); // Akses query client
  const [quantities, setQuantities] = useState({}); // Menyimpan kuantitas per item
  const { data: products } = useQuery({
    queryKey: ["cart-products"],
    queryFn: getAllData,
    onSuccess: (data) => {
      // Set kuantitas awal saat data dimuat
      const initialQuantities = {};
      data.forEach((item) => {
        initialQuantities[item.id] = item.qty || 1; // Default kuantitas = 1
      });
      setQuantities(initialQuantities);
    },
  });
  const handlePaymentChange = (event) => {
    setSelectedPayment(event.target.id);
  };
  const calculateSubTotal = (price, quantity) => parseFloat(price) * quantity;

  // Hitung total harga berdasarkan subtotal dari setiap item
  const subtotal = products
    ? products.reduce(
        (sum, product) =>
          sum + calculateSubTotal(product.price, quantities[product.id] || 1),
        0
      )
    : 0;

  // Biaya pengiriman (dalam contoh ini "Free")
  const estimatedDeliveryFee = 0;

  // Total adalah subtotal + biaya pengiriman
  const totalPrice = subtotal + estimatedDeliveryFee;
  return (
    <section className="checkout py-80">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 col-lg-8">
            <form action="#" className="pe-xl-5">
              <div className="row gy-3">
                <div className="col-sm-6 col-xs-6">
                  <input
                    type="text"
                    className="common-input border-gray-100"
                    placeholder="First Name"
                  />
                </div>
                <div className="col-sm-6 col-xs-6">
                  <input
                    type="text"
                    className="common-input border-gray-100"
                    placeholder="Last Name"
                  />
                </div>
                <div className="col-12">
                  <input
                    type="text"
                    className="common-input border-gray-100"
                    placeholder="House number and full street address"
                  />
                </div>
                <div className="col-12">
                  <input
                    type="text"
                    className="common-input border-gray-100"
                    placeholder="Apartment, suite, unit, etc. (Optional)"
                  />
                </div>
                <div className="col-12">
                  <input
                    type="text"
                    className="common-input border-gray-100"
                    placeholder="City"
                  />
                </div>
                <div className="col-12">
                  <input
                    type="text"
                    className="common-input border-gray-100"
                    placeholder="Post Code"
                  />
                </div>
                <div className="col-12">
                  <input
                    type="number"
                    className="common-input border-gray-100"
                    placeholder="Phone"
                  />
                </div>
                <div className="col-12">
                  <input
                    type="email"
                    className="common-input border-gray-100"
                    placeholder="Email Address"
                  />
                </div>
                <div className="col-12">
                  <div className="my-40">
                    <h6 className="text-lg mb-24">Additional Information</h6>
                    <input
                      type="text"
                      className="common-input border-gray-100"
                      placeholder="Notes about your order, e.g. special notes for delivery."
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="col-xl-3 col-lg-4">
            <div className="checkout-sidebar">
              <div className="bg-color-three rounded-8 p-24 text-center">
                <span className="text-gray-900 text-xl fw-semibold">
                  Your Orders
                </span>
              </div>
              <div className="border border-gray-100 rounded-8 px-24 py-40 mt-24">
                <div className="mb-32 pb-32 border-bottom border-gray-100 flex-between gap-8">
                  <span className="text-gray-900 fw-medium text-xl font-heading-two">
                    Product
                  </span>
                  <span className="text-gray-900 fw-medium text-xl font-heading-two">
                    Subtotal
                  </span>
                </div>
                <div>
                  {products && products.length > 0 ? (
                    products.map((product) => (
                      <div
                        key={product.id}
                        className="flex-between gap-24 mb-32"
                      >
                        <div className="flex-align gap-12">
                          <span className="text-gray-900 fw-normal text-md font-heading-two w-100">
                            {product.name}
                            <br />x {quantities[product.id] || 1}
                          </span>
                        </div>
                        <span className="text-gray-900 fw-bold text-md font-heading-two">
                          {new Intl.NumberFormat("id-ID", {
                            style: "currency",
                            currency: "IDR",
                            maximumFractionDigits: 0,
                          }).format(product.price)}{" "}
                        </span>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-600 text-center">
                      Your cart is empty.
                    </p>
                  )}

                  <div className="border-top border-gray-100 pt-30 mt-30">
                    <div className="mb-32 flex-between gap-8">
                      <span className="text-gray-900 font-heading-two text-xl fw-semibold">
                        Subtotal
                      </span>
                      <span className="text-gray-900 font-heading-two text-md fw-bold">
                        {new Intl.NumberFormat("id-ID", {
                          style: "currency",
                          currency: "IDR",
                          maximumFractionDigits: 0,
                        }).format(subtotal)}{" "}
                      </span>
                    </div>
                    <div className="mb-0 flex-between gap-8">
                      <span className="text-gray-900 font-heading-two text-xl fw-semibold">
                        Total
                      </span>
                      <span className="text-gray-900 font-heading-two text-md fw-bold">
                        {new Intl.NumberFormat("id-ID", {
                          style: "currency",
                          currency: "IDR",
                          maximumFractionDigits: 0,
                        }).format(totalPrice)}{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-32">
                <div className="payment-item">
                  <div className="form-check common-check common-radio py-16 mb-0">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="payment"
                      id="payment1"
                      checked={selectedPayment === "payment1"}
                      onChange={handlePaymentChange}
                    />
                    <label
                      className="form-check-label fw-semibold text-neutral-600"
                      htmlFor="payment1"
                    >
                      Direct Bank transfer
                    </label>
                  </div>
                  {selectedPayment === "payment1" && (
                    <div className="payment-item__content px-16 py-24 rounded-8 bg-main-50 position-relative d-block">
                      <p className="text-gray-800">
                        Make your payment directly into our bank account. Please
                        use your Order ID as the payment reference. Your order
                        will not be shipped until the funds have cleared in our
                        account.
                      </p>
                    </div>
                  )}
                </div>
                <div className="payment-item">
                  <div className="form-check common-check common-radio py-16 mb-0">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="payment"
                      id="payment2"
                      checked={selectedPayment === "payment2"}
                      onChange={handlePaymentChange}
                    />
                    <label
                      className="form-check-label fw-semibold text-neutral-600"
                      htmlFor="payment2"
                    >
                      Check payments
                    </label>
                  </div>
                  {selectedPayment === "payment2" && (
                    <div className="payment-item__content px-16 py-24 rounded-8 bg-main-50 position-relative d-block">
                      <p className="text-gray-800">
                        Make your payment directly into our bank account. Please
                        use your Order ID as the payment reference. Your order
                        will not be shipped until the funds have cleared in our
                        account.
                      </p>
                    </div>
                  )}
                </div>
                <div className="payment-item">
                  <div className="form-check common-check common-radio py-16 mb-0">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="payment"
                      id="payment3"
                      checked={selectedPayment === "payment3"}
                      onChange={handlePaymentChange}
                    />
                    <label
                      className="form-check-label fw-semibold text-neutral-600"
                      htmlFor="payment3"
                    >
                      Cash on delivery
                    </label>
                  </div>
                  {selectedPayment === "payment3" && (
                    <div className="payment-item__content px-16 py-24 rounded-8 bg-main-50 position-relative d-block">
                      <p className="text-gray-800">
                        Make your payment directly into our bank account. Please
                        use your Order ID as the payment reference. Your order
                        will not be shipped until the funds have cleared in our
                        account.
                      </p>
                    </div>
                  )}
                </div>
                <div className="payment-item">
                  <div className="form-check common-check common-radio py-16 mb-0">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="payment"
                      id="payment4"
                      checked={selectedPayment === "payment4"}
                      onChange={handlePaymentChange}
                    />
                    <label
                      className="form-check-label fw-semibold text-neutral-600"
                      htmlFor="payment3"
                    >
                      E-Wallet
                    </label>
                  </div>
                  {selectedPayment === "payment4" && (
                    <div className="payment-item__content px-16 py-24 rounded-8 bg-main-50 position-relative d-block">
                      <p className="text-gray-800">
                        Make your payment directly into our bank account. Please
                        use your Order ID as the payment reference. Your order
                        will not be shipped until the funds have cleared in our
                        account.
                      </p>
                    </div>
                  )}
                </div>
                <div className="payment-item">
                  <div className="form-check common-check common-radio py-16 mb-0">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="payment"
                      id="payment5"
                      checked={selectedPayment === "payment5"}
                      onChange={handlePaymentChange}
                    />
                    <label
                      className="form-check-label fw-semibold text-neutral-600"
                      htmlFor="payment3"
                    >
                      Credit Card
                    </label>
                  </div>
                  {selectedPayment === "payment5" && (
                    <div className="payment-item__content px-16 py-24 rounded-8 bg-main-50 position-relative d-block">
                      <p className="text-gray-800">
                        Make your payment directly into our bank account. Please
                        use your Order ID as the payment reference. Your order
                        will not be shipped until the funds have cleared in our
                        account.
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <div className="mt-32 pt-32 border-top border-gray-100">
                <p className="text-gray-500">
                  Your personal data will be used to process your order, support
                  your experience throughout this website, and for other
                  purposes described in our{" "}
                  <Link
                    href="#"
                    className="text-main-600 text-decoration-underline"
                  >
                    {" "}
                    privacy policy
                  </Link>{" "}
                  .
                </p>
              </div>
              <Link
                href="/checkout"
                className="btn btn-main mt-40 py-18 w-100 rounded-8 mt-56"
              >
                Place Order
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
