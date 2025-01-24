"use client";
import React, { useEffect, useState } from "react";
import query from "jquery";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "select2/dist/css/select2.min.css";
import { useQuery } from "@tanstack/react-query";
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

  // Set the default language
  const [selectedLanguage, setSelectedLanguage] = useState("Eng");
  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  // Set the default currency
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
  };

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
    setActiveIndexCat(activeIndexCat === index ? null : index);
  };

  const { data } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const { data } = await clientApiRequest({
        url: 'categories',
        parameter: 'business_id=1',
        method: 'GET'
      })
      return data
    }
  })

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
        className={`mobile-menu scroll-sm d-lg-none d-block ${menuActive && "active"
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
            <img src="assets/images/logo/logo.png" alt="Logo" />
          </Link>
          <div className="mobile-menu__menu">
            {/* Nav Menu Start */}
            <ul className="nav-menu flex-align nav-menu--mobile">
              <li className="nav-menu__item">
                <Link href="/" className="nav-menu__link">
                  Home
                </Link>
              </li>
              <li className="nav-menu__item">
                <Link href="/contact" className="nav-menu__link">
                  Contact Us
                </Link>
              </li>
              <li className="nav-menu__item">
                <Link href="/contact" className="nav-menu__link">
                  About Us
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
                  src="https://res.cloudinary.com/dilb4d364/image/upload/v1737661961/dbf1c02b-7254-4187-9236-41d26e03d77f.png"
                  alt="Logo"
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
                    {/* <option value={1}>Grocery</option>
                    <option value={1}>Breakfast &amp; Dairy</option>
                    <option value={1}>Vegetables</option>
                    <option value={1}>Milks and Dairies</option>
                    <option value={1}>Pet Foods &amp; Toy</option>
                    <option value={1}>Breads &amp; Bakery</option>
                    <option value={1}>Fresh Seafood</option>
                    <option value={1}>Fronzen Foods</option>
                    <option value={1}>Noodles &amp; Rice</option>
                    <option value={1}>Ice Cream</option> */}
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
                      2
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
        className={`header bg-white border-bottom border-gray-100 ${scroll && "fixed-header"
          }`}
      >
        <div className="container">
          <nav className="header-inner d-flex justify-content-between gap-8">
            <div className="flex-align menu-category-wrapper">
              {/* Category Dropdown Start */}
              <div
                className={`category-two ${category === false ? "d-block" : "d-none"
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
                  className={`responsive-dropdown cat common-dropdown d-lg-none d-block nav-submenu p-0 submenus-submenu-wrapper shadow-none border border-gray-100 ${activeCategory && "active"
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
                      <img src="assets/images/logo/logo.png" alt="Logo" />
                    </Link>
                  </div>
                  <ul className="scroll-sm p-0 py-8 overflow-y-auto">
                    <li
                      onClick={() => handleCatClick(0)}
                      className={`has-submenus-submenu ${activeIndexCat === 0 ? "active" : ""
                        }`}
                    >
                      <Link
                        onClick={() => setActiveIndexCat(null)}
                        href="#"
                        className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                      >
                        <span>Cell Phone</span>
                        <span className="icon text-md d-flex ms-auto">
                          <i className="ph ph-caret-right" />
                        </span>
                      </Link>
                      <div
                        className={`submenus-submenu py-16 ${activeIndexCat === 0 ? "open" : ""
                          }`}
                      >
                        <h6 className="text-lg px-16 submenus-submenu__title">
                          Cell Phone
                        </h6>
                        <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                          <li>
                            <Link href="/shop">Samsung</Link>
                          </li>
                          <li>
                            <Link href="/shop">Iphone</Link>
                          </li>
                          <li>
                            <Link href="/shop">Vivo</Link>
                          </li>
                          <li>
                            <Link href="/shop">Oppo</Link>
                          </li>
                          <li>
                            <Link href="/shop">Itel</Link>
                          </li>
                          <li>
                            <Link href="/shop">Realme</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li
                      onClick={() => handleCatClick(1)}
                      className={`has-submenus-submenu ${activeIndexCat === 1 ? "active" : ""
                        }`}
                    >
                      <Link
                        href="#"
                        className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                      >
                        <span>Wear</span>
                        <span className="icon text-md d-flex ms-auto">
                          <i className="ph ph-caret-right" />
                        </span>
                      </Link>
                      <div
                        className={`submenus-submenu py-16 ${activeIndexCat === 1 ? "open" : ""
                          }`}
                      >
                        <h6 className="text-lg px-16 submenus-submenu__title">
                          Wear
                        </h6>
                        <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                          <li>
                            <Link href="/shop">Samsung</Link>
                          </li>
                          <li>
                            <Link href="/shop">Iphone</Link>
                          </li>
                          <li>
                            <Link href="/shop">Vivo</Link>
                          </li>
                          <li>
                            <Link href="/shop">Oppo</Link>
                          </li>
                          <li>
                            <Link href="/shop">Itel</Link>
                          </li>
                          <li>
                            <Link href="/shop">Realme</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li
                      onClick={() => handleCatClick(2)}
                      className={`has-submenus-submenu ${activeIndexCat === 2 ? "active" : ""
                        }`}
                    >
                      <Link
                        href="#"
                        className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                      >
                        <span>Computer</span>
                        <span className="icon text-md d-flex ms-auto">
                          <i className="ph ph-caret-right" />
                        </span>
                      </Link>
                      <div
                        className={`submenus-submenu py-16 ${activeIndexCat === 2 ? "open" : ""
                          }`}
                      >
                        <h6 className="text-lg px-16 submenus-submenu__title">
                          Computer
                        </h6>
                        <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                          <li>
                            <Link href="/shop">Samsung</Link>
                          </li>
                          <li>
                            <Link href="/shop">Iphone</Link>
                          </li>
                          <li>
                            <Link href="/shop">Vivo</Link>
                          </li>
                          <li>
                            <Link href="/shop">Oppo</Link>
                          </li>
                          <li>
                            <Link href="/shop">Itel</Link>
                          </li>
                          <li>
                            <Link href="/shop">Realme</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li
                      onClick={() => handleCatClick(3)}
                      className={`has-submenus-submenu ${activeIndexCat === 3 ? "active" : ""
                        }`}
                    >
                      <Link
                        href="#"
                        className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                      >
                        <span>Headphone</span>
                        <span className="icon text-md d-flex ms-auto">
                          <i className="ph ph-caret-right" />
                        </span>
                      </Link>
                      <div
                        className={`submenus-submenu py-16 ${activeIndexCat === 3 ? "open" : ""
                          }`}
                      >
                        <h6 className="text-lg px-16 submenus-submenu__title">
                          Headphone
                        </h6>
                        <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                          <li>
                            <Link href="/shop">Samsung</Link>
                          </li>
                          <li>
                            <Link href="/shop">Iphone</Link>
                          </li>
                          <li>
                            <Link href="/shop">Vivo</Link>
                          </li>
                          <li>
                            <Link href="/shop">Oppo</Link>
                          </li>
                          <li>
                            <Link href="/shop">Itel</Link>
                          </li>
                          <li>
                            <Link href="/shop">Realme</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li
                      onClick={() => handleCatClick(4)}
                      className={`has-submenus-submenu ${activeIndexCat === 4 ? "active" : ""
                        }`}
                    >
                      <Link
                        href="#"
                        className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                      >
                        <span>Smart Screen</span>
                        <span className="icon text-md d-flex ms-auto">
                          <i className="ph ph-caret-right" />
                        </span>
                      </Link>
                      <div
                        className={`submenus-submenu py-16 ${activeIndexCat === 4 ? "open" : ""
                          }`}
                      >
                        <h6 className="text-lg px-16 submenus-submenu__title">
                          Smart Screen
                        </h6>
                        <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                          <li>
                            <Link href="/shop">Samsung</Link>
                          </li>
                          <li>
                            <Link href="/shop">Iphone</Link>
                          </li>
                          <li>
                            <Link href="/shop">Vivo</Link>
                          </li>
                          <li>
                            <Link href="/shop">Oppo</Link>
                          </li>
                          <li>
                            <Link href="/shop">Itel</Link>
                          </li>
                          <li>
                            <Link href="/shop">Realme</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li
                      onClick={() => handleCatClick(5)}
                      className={`has-submenus-submenu ${activeIndexCat === 5 ? "active" : ""
                        }`}
                    >
                      <Link
                        href="#"
                        className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                      >
                        <span>Smart Home</span>
                        <span className="icon text-md d-flex ms-auto">
                          <i className="ph ph-caret-right" />
                        </span>
                      </Link>
                      <div
                        className={`submenus-submenu py-16 ${activeIndexCat === 5 ? "open" : ""
                          }`}
                      >
                        <h6 className="text-lg px-16 submenus-submenu__title">
                          Smart Home
                        </h6>
                        <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                          <li>
                            <Link href="/shop">Samsung</Link>
                          </li>
                          <li>
                            <Link href="/shop">Iphone</Link>
                          </li>
                          <li>
                            <Link href="/shop">Vivo</Link>
                          </li>
                          <li>
                            <Link href="/shop">Oppo</Link>
                          </li>
                          <li>
                            <Link href="/shop">Itel</Link>
                          </li>
                          <li>
                            <Link href="/shop">Realme</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li
                      onClick={() => handleCatClick(6)}
                      className={`has-submenus-submenu ${activeIndexCat === 6 ? "active" : ""
                        }`}
                    >
                      <Link
                        href="#"
                        className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                      >
                        <span>Digital Accessories</span>
                        <span className="icon text-md d-flex ms-auto">
                          <i className="ph ph-caret-right" />
                        </span>
                      </Link>
                      <div
                        className={`submenus-submenu py-16 ${activeIndexCat === 6 ? "open" : ""
                          }`}
                      >
                        <h6 className="text-lg px-16 submenus-submenu__title">
                          Digital Accessories
                        </h6>
                        <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                          <li>
                            <Link href="/shop">Samsung</Link>
                          </li>
                          <li>
                            <Link href="/shop">Iphone</Link>
                          </li>
                          <li>
                            <Link href="/shop">Vivo</Link>
                          </li>
                          <li>
                            <Link href="/shop">Oppo</Link>
                          </li>
                          <li>
                            <Link href="/shop">Itel</Link>
                          </li>
                          <li>
                            <Link href="/shop">Realme</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li
                      onClick={() => handleCatClick(7)}
                      className={`has-submenus-submenu ${activeIndexCat === 7 ? "active" : ""
                        }`}
                    >
                      <Link
                        href="#"
                        className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                      >
                        <span> Value Added Services</span>
                        <span className="icon text-md d-flex ms-auto">
                          <i className="ph ph-caret-right" />
                        </span>
                      </Link>
                      <div
                        className={`submenus-submenu py-16 ${activeIndexCat === 7 ? "open" : ""
                          }`}
                      >
                        <h6 className="text-lg px-16 submenus-submenu__title">
                          {" "}
                          Value Added Services
                        </h6>
                        <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                          <li>
                            <Link href="/shop">Samsung</Link>
                          </li>
                          <li>
                            <Link href="/shop">Iphone</Link>
                          </li>
                          <li>
                            <Link href="/shop">Vivo</Link>
                          </li>
                          <li>
                            <Link href="/shop">Oppo</Link>
                          </li>
                          <li>
                            <Link href="/shop">Itel</Link>
                          </li>
                          <li>
                            <Link href="/shop">Realme</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li
                      onClick={() => handleCatClick(8)}
                      className={`has-submenus-submenu ${activeIndexCat === 8 ? "active" : ""
                        }`}
                    >
                      <Link
                        href="#"
                        className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                      >
                        <span>Car Products</span>
                        <span className="icon text-md d-flex ms-auto">
                          <i className="ph ph-caret-right" />
                        </span>
                      </Link>
                      <div
                        className={`submenus-submenu py-16 ${activeIndexCat === 8 ? "open" : ""
                          }`}
                      >
                        <h6 className="text-lg px-16 submenus-submenu__title">
                          Car Products
                        </h6>
                        <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                          <li>
                            <Link href="/shop">Samsung</Link>
                          </li>
                          <li>
                            <Link href="/shop">Iphone</Link>
                          </li>
                          <li>
                            <Link href="/shop">Vivo</Link>
                          </li>
                          <li>
                            <Link href="/shop">Oppo</Link>
                          </li>
                          <li>
                            <Link href="/shop">Itel</Link>
                          </li>
                          <li>
                            <Link href="/shop">Realme</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li
                      onClick={() => handleCatClick(9)}
                      className={`has-submenus-submenu ${activeIndexCat === 9 ? "active" : ""
                        }`}
                    >
                      <Link
                        href="#"
                        className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                      >
                        <span>Ecological Products</span>
                        <span className="icon text-md d-flex ms-auto">
                          <i className="ph ph-caret-right" />
                        </span>
                      </Link>
                      <div
                        className={`submenus-submenu py-16 ${activeIndexCat === 9 ? "open" : ""
                          }`}
                      >
                        <h6 className="text-lg px-16 submenus-submenu__title">
                          Ecological Products
                        </h6>
                        <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                          <li>
                            <Link href="/shop">Samsung</Link>
                          </li>
                          <li>
                            <Link href="/shop">Iphone</Link>
                          </li>
                          <li>
                            <Link href="/shop">Vivo</Link>
                          </li>
                          <li>
                            <Link href="/shop">Oppo</Link>
                          </li>
                          <li>
                            <Link href="/shop">Itel</Link>
                          </li>
                          <li>
                            <Link href="/shop">Realme</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li
                      onClick={() => handleCatClick(10)}
                      className={`has-submenus-submenu ${activeIndexCat === 10 ? "active" : ""
                        }`}
                    >
                      <Link
                        href="#"
                        className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                      >
                        <span>Flat</span>
                        <span className="icon text-md d-flex ms-auto">
                          <i className="ph ph-caret-right" />
                        </span>
                      </Link>
                      <div
                        className={`submenus-submenu py-16 ${activeIndexCat === 10 ? "open" : ""
                          }`}
                      >
                        <h6 className="text-lg px-16 submenus-submenu__title">
                          Flat
                        </h6>
                        <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                          <li>
                            <Link href="/shop">Samsung</Link>
                          </li>
                          <li>
                            <Link href="/shop">Iphone</Link>
                          </li>
                          <li>
                            <Link href="/shop">Vivo</Link>
                          </li>
                          <li>
                            <Link href="/shop">Oppo</Link>
                          </li>
                          <li>
                            <Link href="/shop">Itel</Link>
                          </li>
                          <li>
                            <Link href="/shop">Realme</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li
                      onClick={() => handleCatClick(11)}
                      className={`has-submenus-submenu ${activeIndexCat === 11 ? "active" : ""
                        }`}
                    >
                      <Link
                        href="#"
                        className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                      >
                        <span>Commercial Terminal</span>
                        <span className="icon text-md d-flex ms-auto">
                          <i className="ph ph-caret-right" />
                        </span>
                      </Link>
                      <div
                        className={`submenus-submenu py-16 ${activeIndexCat === 11 ? "open" : ""
                          }`}
                      >
                        <h6 className="text-lg px-16 submenus-submenu__title">
                          Commercial Terminal
                        </h6>
                        <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                          <li>
                            <Link href="/shop">Samsung</Link>
                          </li>
                          <li>
                            <Link href="/shop">Iphone</Link>
                          </li>
                          <li>
                            <Link href="/shop">Vivo</Link>
                          </li>
                          <li>
                            <Link href="/shop">Oppo</Link>
                          </li>
                          <li>
                            <Link href="/shop">Itel</Link>
                          </li>
                          <li>
                            <Link href="/shop">Realme</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li
                      onClick={() => handleCatClick(12)}
                      className={`has-submenus-submenu ${activeIndexCat === 12 ? "active" : ""
                        }`}
                    >
                      <Link
                        href="#"
                        className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                      >
                        <span>Headphone</span>
                        <span className="icon text-md d-flex ms-auto">
                          <i className="ph ph-caret-right" />
                        </span>
                      </Link>
                      <div
                        className={`submenus-submenu py-16 ${activeIndexCat === 12 ? "open" : ""
                          }`}
                      >
                        <h6 className="text-lg px-16 submenus-submenu__title">
                          Headphone
                        </h6>
                        <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                          <li>
                            <Link href="/shop">Samsung</Link>
                          </li>
                          <li>
                            <Link href="/shop">Iphone</Link>
                          </li>
                          <li>
                            <Link href="/shop">Vivo</Link>
                          </li>
                          <li>
                            <Link href="/shop">Oppo</Link>
                          </li>
                          <li>
                            <Link href="/shop">Itel</Link>
                          </li>
                          <li>
                            <Link href="/shop">Realme</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li
                      onClick={() => handleCatClick(13)}
                      className={`has-submenus-submenu ${activeIndexCat === 13 ? "active" : ""
                        }`}
                    >
                      <Link
                        href="#"
                        className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                      >
                        <span>Smart Screen</span>
                        <span className="icon text-md d-flex ms-auto">
                          <i className="ph ph-caret-right" />
                        </span>
                      </Link>
                      <div
                        className={`submenus-submenu py-16 ${activeIndexCat === 13 ? "open" : ""
                          }`}
                      >
                        <h6 className="text-lg px-16 submenus-submenu__title">
                          Smart Screen
                        </h6>
                        <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                          <li>
                            <Link href="/shop">Samsung</Link>
                          </li>
                          <li>
                            <Link href="/shop">Iphone</Link>
                          </li>
                          <li>
                            <Link href="/shop">Vivo</Link>
                          </li>
                          <li>
                            <Link href="/shop">Oppo</Link>
                          </li>
                          <li>
                            <Link href="/shop">Itel</Link>
                          </li>
                          <li>
                            <Link href="/shop">Realme</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className={`category main  on-hover-item bg-main-600 text-white ${category === true ? "d-block" : "d-none"
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
                      <img src="assets/images/logo/logo.png" alt="Logo" />
                    </Link>
                  </div>
                  <ul className="scroll-sm p-0 py-8 w-300 max-h-400 overflow-y-auto">
                    {data && data.map((item, index) => (
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
                          {/* <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                            <li>
                              <Link href="/shop">Potato &amp; Tomato</Link>
                            </li>
                            <li>
                              <Link href="/shop">Cucumber &amp; Capsicum</Link>
                            </li>
                            <li>
                              <Link href="/shop">Leafy Vegetables</Link>
                            </li>
                            <li>
                              <Link href="/shop">Root Vegetables</Link>
                            </li>
                            <li>
                              <Link href="/shop">Beans &amp; Okra</Link>
                            </li>
                            <li>
                              <Link href="/shop">Cabbage &amp; Cauliflower</Link>
                            </li>
                            <li>
                              <Link href="/shop">Gourd &amp; Drumstick</Link>
                            </li>
                            <li>
                              <Link href="/shop">Specialty</Link>
                            </li>
                          </ul> */}
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
                  <li className="on-hover-item nav-menu__item ">
                    <Link href="/" className="nav-menu__link">
                      Home
                    </Link>
                  </li>
                  <li className="nav-menu__item">
                    <Link
                      href="/contact"
                      scroll={false}
                      className={`nav-menu__link ${pathname == "/contact" && "activePage"
                        } `}
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="nav-menu__item">
                    <Link
                      href="#"
                      scroll={false}
                      className={`nav-menu__link ${pathname == "/contact" && "activePage"
                        } `}
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
                {/* Nav Menu End */}
              </div>
              {/* Menu End  */}
            </div>
          </nav>
        </div>
      </header>
      {/* ==================== Header End Here ==================== */}
    </>
  );
};

export default HeaderTwo;
