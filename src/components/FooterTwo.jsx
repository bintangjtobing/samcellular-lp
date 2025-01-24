"use client";

import React from "react";
import Link from "next/link";

const FooterTwo = () => {
  return (
    <footer className="footer py-80">
      <div className="container container-lg">
        <div className="footer-item-two-wrapper d-flex align-items-start flex-wrap">
          <div
            className="footer-item flex-grow-1"
            style={{ maxWidth: "500px" }}
          >
            {" "}
            {/* Adjusted width */}
            <div className="footer-item__logo">
              <Link href="/">
                <img
                  src="https://res.cloudinary.com/dilb4d364/image/upload/v1737748445/samcelular-long-logo_x26w9d.png"
                  alt=""
                />
              </Link>
            </div>
            <p className="mb-24">
              Sam Cellular - Jual Beli HP Baru & Bekas + Kredit Cepat Cair!
              Temukan ponsel impian Anda dengan layanan kredit cepat hanya modal
              KTP.
            </p>
            <div className="flex-align gap-16 mb-16">
              <span className="w-32 h-32 flex-center rounded-circle border border-gray-100 text-main-two-600 text-md flex-shrink-0">
                <i className="ph-fill ph-phone-call" />
              </span>
              <a
                href="tel:+00123456789"
                className="text-md text-gray-900 hover-text-main-600"
              >
                +00 123 456 789
              </a>
            </div>
            <div className="flex-align gap-16 mb-16">
              <span className="w-32 h-32 flex-center rounded-circle border border-gray-100 text-main-two-600 text-md flex-shrink-0">
                <i className="ph-fill ph-envelope" />
              </span>
              <Link
                href="/mailto:cs@samcellular.id"
                className="text-md text-gray-900 hover-text-main-600"
              >
                cs@samcellular.id
              </Link>
            </div>
            <div className="flex-align gap-16 mb-16">
              <span className="w-32 h-32 flex-center rounded-circle border border-gray-100 text-main-two-600 text-md flex-shrink-0">
                <i className="ph-fill ph-map-pin" />
              </span>
              <div className="text-md text-gray-900">
                <p>
                  <b>Plaza Medan Fair</b>
                  <br />
                  Lt 4 Tahap 4 No 232/233, Jl. Gatot Subroto No.30, Sekip, Kec.
                  Medan Petisah, Kota Medan, Sumatera Utara 20113.
                  <br />
                </p>
                <p>
                  <b>Plaza Millenium</b>
                  <br />
                  Lt 1 No 73, Jl. Kapten Muslim No.111, Dwi Kora, Kec. Medan
                  Helvetia, Kota Medan, Sumatera Utara 20118
                  <br />
                </p>
                <p>
                  <b>Area Street Johor</b>
                  <br />
                  Jl Karya Wisata No 167 D, Gedung Johor Medan
                </p>
              </div>
            </div>
          </div>
          <div className="footer-item">
            <h6 className="footer-item__title">Tentang Samcellular</h6>
            <ul className="footer-menu">
              <li className="mb-16">
                <Link
                  href="/shop"
                  className="text-gray-600 hover-text-main-600"
                >
                  Company Profile
                </Link>
              </li>
              <li className="mb-16">
                <Link
                  href="/shop"
                  className="text-gray-600 hover-text-main-600"
                >
                  Samcellular Care
                </Link>
              </li>
              <li className="mb-16">
                <Link
                  href="/shop"
                  className="text-gray-600 hover-text-main-600"
                >
                  Policies & Rules
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-item">
            <h6 className="footer-item__title">Customer Support</h6>
            <ul className="footer-menu">
              <li className="mb-16">
                <Link
                  href="/contact"
                  className="text-gray-600 hover-text-main-600"
                >
                  Help Center
                </Link>
              </li>
              <li className="mb-16">
                <Link
                  href="/shop"
                  className="text-gray-600 hover-text-main-600"
                >
                  Gift Card
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-item">
            <h6 className="">Accept payments</h6>
            <img
              src="https://res.cloudinary.com/dilb4d364/image/upload/v1737628929/payment-xendit_cdmzwr.png"
              alt="SamCellular"
              style={{ width: "400px" }}
            />
            <ul className="flex-align gap-16 pt-40">
              <li>
                <Link
                  href="/https://www.facebook.com"
                  className="w-44 h-44 flex-center bg-main-two-50 text-main-two-600 text-xl rounded-8 hover-bg-main-two-600 hover-text-white"
                >
                  <i className="ph-fill ph-facebook-logo" />
                </Link>
              </li>
              <li>
                <Link
                  href="/https://www.twitter.com"
                  className="w-44 h-44 flex-center bg-main-two-50 text-main-two-600 text-xl rounded-8 hover-bg-main-two-600 hover-text-white"
                >
                  <i className="ph-fill ph-twitter-logo" />
                </Link>
              </li>
              <li>
                <Link
                  href="/https://www.linkedin.com"
                  className="w-44 h-44 flex-center bg-main-two-50 text-main-two-600 text-xl rounded-8 hover-bg-main-two-600 hover-text-white"
                >
                  <i className="ph-fill ph-instagram-logo" />
                </Link>
              </li>
              <li>
                <Link
                  href="/https://www.pinterest.com"
                  className="w-44 h-44 flex-center bg-main-two-50 text-main-two-600 text-xl rounded-8 hover-bg-main-two-600 hover-text-white"
                >
                  <i className="ph-fill ph-linkedin-logo" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterTwo;
