"use client";
import React, { useEffect, useState } from "react";
import query from "jquery";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "select2/dist/css/select2.min.css";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

import { clientApiRequest } from "@/services/clientApiRequest";
const HeaderTwo = ({ category }) => {
  let pathname = usePathname();
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        setScroll(window.pageYOffset > 150);
      };

      // Attach the scroll event listener
      window.addEventListener("scroll", handleScroll);

      // Initialize Select2
      const selectElement = query(".js-example-basic-single");
      selectElement.select2();

      // Cleanup function
      return () => {
        // Remove the scroll event listener
        window.removeEventListener("scroll", handleScroll);

        // Destroy Select2 instance if it exists
        if (selectElement.data("select2")) {
          selectElement.select2("destroy");
        }
      };
    }
  }, []);

  // Mobile menu support
  const [menuActive, setMenuActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const handleMenuClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const handleMenuToggle = () => {
    setMenuActive(!menuActive);
  };

  // Search control support
  const [activeSearch, setActiveSearch] = useState(false);
  const handleSearchToggle = () => {
    setActiveSearch(!activeSearch);
  };

  // category control support
  const [activeCategory, setActiveCategory] = useState(false);
  const handleCategoryToggle = () => {
    setActiveCategory(!activeCategory);
  };
  const [activeIndexCat, setActiveIndexCat] = useState(null);
  const handleCatClick = (index) => {
    setActiveIndexCat((prevIndex) => (prevIndex === index ? null : index));
  };
  const queryClient = new QueryClient();

  const { data } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const { data } = await clientApiRequest({
        url: "categories",
        parameter: "business_id=1",
        method: "GET",
      });
      return data;
    },
  });

  return (
    <>
      <div className="overlay" />
      <div
        className={`side-overlay ${(menuActive || activeCategory) && "show"}`}
      />
      {/* ==================== Search Box Start Here ==================== */}

      <form action="#" className={`search-box ${activeSearch && "active"}`}>
        <button
          onClick={handleSearchToggle}
          type="button"
          className="search-box__close position-absolute inset-block-start-0 inset-inline-end-0 m-16 w-48 h-48 border border-gray-100 rounded-circle flex-center text-white hover-text-gray-800 hover-bg-white text-2xl transition-1"
        >
          <i className="ph ph-x" />
        </button>
        <div className="container">
          <div className="position-relative">
            <input
              type="text"
              className="form-control py-16 px-24 text-xl rounded-pill pe-64"
              placeholder="Search for a product or brand"
            />
            <button
              type="submit"
              className="w-48 h-48 bg-main-600 rounded-circle flex-center text-xl text-white position-absolute top-50 translate-middle-y inset-inline-end-0 me-8"
            >
              <i className="ph ph-magnifying-glass" />
            </button>
          </div>
        </div>
      </form>
      {/* ==================== Search Box End Here ==================== */}
      {/* ==================== Mobile Menu Start Here ==================== */}
      <div
        className={`mobile-menu scroll-sm d-lg-none d-block ${
          menuActive && "active"
        }`}
      >
        <button
          onClick={() => {
            handleMenuToggle();
            setActiveIndex(null);
          }}
          type="button"
          className="close-button"
        >
          <i className="ph ph-x" />{" "}
        </button>
        <div className="mobile-menu__inner">
          <Link href="/" className="mobile-menu__logo">
            <img
              src="https://res.cloudinary.com/dilb4d364/image/upload/v1737750152/samcelular-long-logo-black_uxfhjm.png"
              alt="Logo SamCellular"
            />
          </Link>
          <div className="mobile-menu__menu">
            {/* Nav Menu Start */}
            <ul className="nav-menu flex-align nav-menu--mobile">
              <li className="nav-menu__item">
                <Link href="/about" className="nav-menu__link">
                  Tentang Samcellular
                </Link>
              </li>
              <li className="nav-menu__item">
                <Link href="/partnership" className="nav-menu__link">
                  Mitra Samcellular
                </Link>
              </li>
              <li className="nav-menu__item">
                <Link href="/customer-education" className="nav-menu__link">
                  Pusat Edukasi Samcellular
                </Link>
              </li>
              <li className="nav-menu__item">
                <Link href="/about" className="nav-menu__link">
                  Samcellular Care
                </Link>
              </li>
            </ul>
            {/* Nav Menu End */}
          </div>
        </div>
      </div>
      {/* ==================== Mobile Menu End Here ==================== */}
      {/* ======================= Middle Header Two Start ========================= */}
      <header className="header-middle style-two bg-color-neutral">
        <div className="container">
          <nav className="header-inner flex-between">
            {/* Logo Start */}
            <div className="logo">
              <Link href="/" className="link">
                <img
                  src="https://res.cloudinary.com/dilb4d364/image/upload/v1737748445/samcelular-long-logo_x26w9d.png"
                  alt="Logo SamCellular"
                  style={{ maxWidth: "200px", height: "auto" }}
                />
              </Link>
            </div>
            {/* Logo End  */}
            {/* form Category Start */}
            <div className="flex-align gap-16">
              <div className="select-dropdown-for-home-two d-lg-none d-block">
                {/* Dropdown Select Start */}

                {/* Dropdown Select End */}
              </div>
              <form
                action="#"
                className="flex-align flex-wrap form-location-wrapper"
              >
                <div className="search-category style-two d-flex h-48 search-form d-sm-flex d-none">
                  <select
                    defaultValue={1}
                    className="js-example-basic-single border border-gray-200 border-end-0 rounded-0 border-0"
                    name="state"
                  >
                    <option value={1}>All Categories</option>
                    {data &&
                      data.map((item, index) => (
                        <option value={item.id} key={index}>
                          {item.name}
                        </option>
                      ))}
                  </select>
                  <div className="search-form__wrapper position-relative">
                    <input
                      type="text"
                      className="search-form__input common-input py-13 ps-16 pe-18 rounded-0 border-0"
                      placeholder="Search for a product or brand"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-main-two-600 flex-center text-xl text-white flex-shrink-0 w-48 hover-bg-main-two-700 d-lg-flex d-none"
                  >
                    <i className="ph ph-magnifying-glass" />
                  </button>
                </div>
              </form>
            </div>
            {/* form Category start */}
            {/* Header Middle Right start */}
            <div className="header-right flex-align d-lg-block d-none">
              <div className="header-two-activities flex-align flex-wrap gap-32">
                <button
                  type="button"
                  className="flex-align search-icon d-lg-none d-flex gap-4 item-hover-two"
                >
                  <span className="text-2xl text-white d-flex position-relative item-hover__text">
                    <i className="ph ph-magnifying-glass" />
                  </span>
                </button>
                <Link
                  href="/cart"
                  className="flex-align flex-column gap-8 item-hover-two"
                >
                  <span className="text-2xl text-white d-flex position-relative me-6 mt-6 item-hover__text">
                    <i className="ph ph-shopping-cart-simple" />
                    <span className="w-16 h-16 flex-center rounded-circle bg-main-two-600 text-white text-xs position-absolute top-n6 end-n4">
                      0
                    </span>
                  </span>
                  <span className="text-md text-white item-hover__text d-none d-lg-flex">
                    Cart
                  </span>
                </Link>
              </div>
            </div>
            {/* Header Middle Right End  */}
          </nav>
        </div>
      </header>
      {/* ======================= Middle Header Two End ========================= */}
      {/* ==================== Header Two Start Here ==================== */}
      <header
        className={`header bg-white border-bottom border-gray-100 ${
          scroll && "fixed-header"
        }`}
      >
        <div className="container">
          <nav className="header-inner d-flex justify-content-between gap-8">
            <div className="flex-align menu-category-wrapper">
              {/* Category Dropdown Start */}
              <div
                className={`category-two ${
                  category === false ? "d-block" : "d-none"
                } `}
              >
                <button
                  onClick={handleCategoryToggle}
                  type="button"
                  className="category__button flex-align gap-8 fw-medium bg-main-two-600 p-16 text-white"
                >
                  <span className="icon text-2xl d-xs-flex d-none">
                    <i className="ph ph-dots-nine" />
                  </span>
                  <span className="d-sm-flex d-none">All</span> Categories
                  <span className="arrow-icon text-xl d-flex">
                    <i className="ph ph-caret-down" />
                  </span>
                </button>
                <div
                  className={`responsive-dropdown cat common-dropdown d-lg-none d-block nav-submenu p-0 submenus-submenu-wrapper shadow-none border border-gray-100 ${
                    activeCategory && "active"
                  }`}
                >
                  <button
                    onClick={() => {
                      handleCategoryToggle();
                      setActiveIndexCat(null);
                    }}
                    type="button"
                    className="close-responsive-dropdown rounded-circle text-xl position-absolute inset-inline-end-0 inset-block-start-0 mt-4 me-8 d-lg-none d-flex"
                  >
                    <i className="ph ph-x" />{" "}
                  </button>
                  <div className="logo px-16 d-lg-none d-block">
                    <Link href="/" className="link">
                      <img
                        src="https://res.cloudinary.com/dilb4d364/image/upload/v1737750152/samcelular-long-logo-black_uxfhjm.png"
                        style={{ maxWidth: "200px", height: "auto" }}
                        alt="Logo SamCellular"
                      />
                    </Link>
                  </div>
                  <ul className="scroll-sm p-0 py-8 overflow-y-auto">
                    {data &&
                      data.map((item, index) => (
                        <li
                          key={item.id}
                          onClick={() => handleCatClick(index)} // Perbarui dengan index yang diklik
                          className={`has-submenus-submenu ${
                            activeIndexCat === index ? "active" : "" // Gunakan index untuk kondisi active
                          }`}
                        >
                          <Link
                            onClick={(e) => e.preventDefault()} // Hindari reload halaman
                            href="#"
                            className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                          >
                            <span>{item.name}</span>
                            <span className="icon text-md d-flex ms-auto">
                              <i className="ph ph-caret-right" />
                            </span>
                          </Link>
                          <div
                            className={`submenus-submenu py-16 ${
                              activeIndexCat === index ? "open" : "" // Gunakan index untuk membuka submenus
                            }`}
                          >
                            <h6 className="text-lg px-16 submenus-submenu__title">
                              {item.name}
                            </h6>
                            {item.sub_categories &&
                              item.sub_categories.length > 0 && (
                                <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                                  {item.sub_categories.map((subItem) => (
                                    <li key={subItem.id}>
                                      <Link
                                        href={`/${subItem.name
                                          .toLowerCase()
                                          .replace(/\s+/g, "-")}`}
                                      >
                                        {subItem.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                          </div>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
              <div
                className={`category main  on-hover-item bg-main-600 text-white ${
                  category === true ? "d-block" : "d-none"
                }`}
              >
                <button
                  type="button"
                  className="category__button flex-align gap-8 fw-medium p-16 border-end border-start border-gray-100 text-white"
                >
                  <span className="icon text-2xl d-xs-flex d-none">
                    <i className="ph ph-dots-nine" />
                  </span>
                  <span className="d-sm-flex d-none">All</span> Categories
                  <span className="arrow-icon text-xl d-flex">
                    <i className="ph ph-caret-down" />
                  </span>
                </button>
                <div className="responsive-dropdown on-hover-dropdown common-dropdown nav-submenu p-0 submenus-submenu-wrapper">
                  <button
                    type="button"
                    className="close-responsive-dropdown rounded-circle text-xl position-absolute inset-inline-end-0 inset-block-start-0 mt-4 me-8 d-lg-none d-flex"
                  >
                    <i className="ph ph-x" />{" "}
                  </button>
                  <div className="logo px-16 d-lg-none d-block">
                    <Link href="/" className="link">
                      <img
                        src="https://res.cloudinary.com/dilb4d364/image/upload/v1737748445/samcelular-long-logo_x26w9d.png"
                        alt="Logo SamCellular"
                      />
                    </Link>
                  </div>
                  <ul className="scroll-sm p-0 py-8 w-300 max-h-400 overflow-y-auto">
                    {data &&
                      data.map((item, index) => (
                        <li key={index} className="has-submenus-submenu">
                          <Link
                            href="#"
                            className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                          >
                            <span>{item.name}</span>
                            <span className="icon text-md d-flex ms-auto">
                              <i className="ph ph-caret-right" />
                            </span>
                          </Link>
                          <div className="submenus-submenu py-16">
                            <h6 className="text-lg px-16 submenus-submenu__title">
                              {item.name}
                            </h6>
                          </div>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
              {/* Category Dropdown End  */}
              {/* Menu Start  */}
              <div className="header-menu d-lg-block d-none">
                {/* Nav Menu Start */}
                <ul className="nav-menu flex-align ">
                  <li className="nav-menu__item">
                    <Link
                      href="/about"
                      scroll={false}
                      className={`nav-menu__link ${
                        pathname == "/about" && "activePage"
                      } `}
                    >
                      Tentang Samcellular
                    </Link>
                  </li>
                  <li className="nav-menu__item">
                    <Link
                      href="/partnership"
                      scroll={false}
                      className={`nav-menu__link ${
                        pathname == "/partnership" && "activePage"
                      } `}
                    >
                      Mitra Samcellular
                    </Link>
                  </li>
                  <li className="nav-menu__item">
                    <Link
                      href="/customer-education"
                      scroll={false}
                      className={`nav-menu__link ${
                        pathname == "/customer-education" && "activePage"
                      } `}
                    >
                      Pusat Edukasi Samcellular
                    </Link>
                  </li>
                  <li className="nav-menu__item">
                    <Link
                      href="/contact"
                      scroll={false}
                      className={`nav-menu__link ${
                        pathname == "/contact" && "activePage"
                      } `}
                    >
                      Samcellular Care
                    </Link>
                  </li>
                </ul>
                {/* Nav Menu End */}
              </div>
              {/* Menu End  */}
            </div>
            {/* Header Right start */}
            <div className="header-right flex-align">
              <div className="me-8 d-lg-none d-block">
                <div className="header-two-activities flex-align flex-wrap gap-32">
                  <Link
                    href="/cart"
                    className="flex-align flex-column gap-8 item-hover-two"
                  >
                    <span className="text-2xl text-white d-flex position-relative me-6 mt-6 item-hover__text">
                      <i className="ph ph-shopping-cart-simple" />
                      <span className="w-16 h-16 flex-center rounded-circle bg-main-two-600 text-white text-xs position-absolute top-n6 end-n4">
                        2
                      </span>
                    </span>
                    <span className="text-md text-white item-hover__text d-none d-lg-flex">
                      Cart
                    </span>
                  </Link>
                </div>
              </div>
              <button
                onClick={handleMenuToggle}
                type="button"
                className="toggle-mobileMenu d-lg-none ms-3n text-gray-800 text-4xl d-flex"
              >
                {" "}
                <i className="ph ph-list" />{" "}
              </button>
            </div>
          </nav>
        </div>
      </header>
      {/* ==================== Header End Here ==================== */}
    </>
  );
};

export default HeaderTwo;
