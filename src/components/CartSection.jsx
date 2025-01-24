"use client";

import React, { useState } from "react";
import Link from "next/link";
import QuantityControl from "../helper/QuantityControl";
import { getAllData, deleteData } from "@/db/helper";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const CartSection = () => {
  const queryClient = useQueryClient(); // Akses query client
  const [quantities, setQuantities] = useState({}); // Menyimpan kuantitas per item

  // Ambil semua data menggunakan useQuery
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

  // Mutasi untuk menghapus data
  const mutation = useMutation({
    mutationFn: deleteData, // Fungsi untuk menghapus data
    onSuccess: () => {
      // Invalidasi query untuk memuat ulang data
      queryClient.invalidateQueries(["cart-products"]);
    },
  });

  // Hitung subtotal untuk setiap item
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

  // Handler untuk mengubah kuantitas
  const handleQuantityChange = (id, newQuantity) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: newQuantity,
    }));
  };

  return (
    <section className="cart py-80">
      <div className="container">
        <div className="row gy-4">
          <div className="col-xl-9 col-lg-8">
            <div className="cart-table border border-gray-100 rounded-8 px-40 py-48">
              <div className="overflow-x-auto scroll-sm scroll-sm-horizontal">
                <table className="table style-three">
                  <thead>
                    <tr>
                      <th className="h6 mb-0 text-lg fw-bold">Product Name</th>
                      <th className="h6 mb-0 text-lg text-end fw-bold">
                        Subtotal
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {products &&
                      products.map((item) => (
                        <tr key={item.id}>
                          <td>
                            <div className="table-product d-flex align-items-center gap-24">
                              <Link
                                style={{
                                  maxWidth: "50px",
                                }}
                                href={`/product/${item.id}`}
                                className="table-product__thumb border border-gray-100 rounded-8 flex-center"
                              >
                                <img
                                  style={{
                                    maxWidth: "40px",
                                  }}
                                  src={item.image}
                                  alt=""
                                />
                              </Link>
                              <div
                                className="table-product__content text-start"
                                style={{
                                  minWidth: "12rem",
                                  maxWidth: "25rem",
                                }}
                              >
                                <h6 className="title text-md fw-semibold mb-8">
                                  <Link
                                    href={`/product/${item.id}`}
                                    className="link text-line-2"
                                    tabIndex={0}
                                  >
                                    {item.name}
                                  </Link>
                                </h6>
                                <span className="text-sm text-gray-600">
                                  {item.product_description}
                                </span>
                                <QuantityControl
                                  initialQuantity={quantities[item.id] || 1}
                                  quantity={quantities[item.id] || 1}
                                  setQuantity={(newQuantity) =>
                                    handleQuantityChange(item.id, newQuantity)
                                  }
                                />
                              </div>
                            </div>
                          </td>
                          <td className="text-end">
                            <span className="text-lg h6 mb-0 fw-normal">
                              {new Intl.NumberFormat("id-ID", {
                                style: "currency",
                                currency: "IDR",
                                maximumFractionDigits: 0,
                              }).format(
                                calculateSubTotal(
                                  item.price,
                                  quantities[item.id] || 1
                                )
                              )}{" "}
                            </span>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4">
            <div className="cart-sidebar border border-gray-100 rounded-8 px-24 py-40">
              <h6 className="text-xl mb-32">Ringkasan Belanja</h6>
              <div className="flex-between gap-8 bg-color-three rounded-8 p-24 mt-32 text-lg">
                <span className="text-gray-900 font-heading-two">Total</span>
                <span className="text-gray-900 fw-semibold">
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    maximumFractionDigits: 0,
                  }).format(totalPrice)}{" "}
                </span>
              </div>
              <Link
                href="/checkout"
                className="btn btn-main mt-40 py-18 w-100 rounded-8"
              >
                Proses Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartSection;
