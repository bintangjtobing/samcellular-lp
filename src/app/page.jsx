import BannerTwo from "@/components/BannerTwo";
import BigDealOne from "@/components/BigDealOne";
import BottomFooter from "@/components/BottomFooter";
import DaySaleOne from "@/components/DaySaleOne";
import DealsOne from "@/components/DealsOne";
import DiscountOne from "@/components/DiscountOne";
import FeaturedOne from "@/components/FeaturedOne";
import FooterTwo from "@/components/FooterTwo";
import HeaderTwo from "@/components/HeaderTwo";
import NewsletterTwo from "@/components/NewsletterTwo";
import PopularProductsOne from "@/components/PopularProductsOne";
import PromotionalTwo from "@/components/PromotionalTwo";
import RecentlyViewedOne from "@/components/RecentlyViewedOne";
import ShippingTwo from "@/components/ShippingTwo";
import TopSellingOne from "@/components/TopSellingOne";
import TopSellingTwo from "@/components/TopSellingTwo";
import TopVendorsTwo from "@/components/TopVendorsTwo";
import TrendingOne from "@/components/TrendingOne";
import ColorInit from "@/helper/ColorInit";
import Preloader from "@/helper/Preloader";
import ScrollToTopInit from "@/helper/ScrollToTopInit";

export const metadata = {
  title: "Sam Cellular - Jual Beli HP Baru & Bekas | Kredit HP Cepat Cair",
  description:
    "Sam Cellular melayani jual beli HP baru & bekas dengan harga terbaik! Nikmati kredit HP tanpa DP hanya dengan modal KTP, cair dalam 10 menit. Tersedia di Medan Fair dan Plaza Millenium. Toko HP terpercaya untuk kredit HP iPhone, Android, dan banyak lagi!",
  keywords: [
    "Jual HP Baru dan Bekas",
    "Kredit HP Cepat Cair",
    "Jual Beli HP Medan",
    "HP Kredit Tanpa DP",
    "HP Modal KTP",
    "HP Harga Terjangkau",
    "Toko HP Terpercaya Medan",
    "Beli HP Bekas Berkualitas",
    "Kredit HP KTP Cair 10 Menit",
    "Beli HP Baru Cicilan Mudah",
    "Toko HP Medan Fair",
    "Jual HP Bekas Harga Tinggi",
    "Plaza Millenium Toko HP",
    "Jual HP Android Terbaru",
    "HP Kredit Bunga Rendah",
    "Promo Kredit HP Medan",
    "HP iPhone Kredit Cepat",
    "HP Murah COD Medan",
    "Cara kredit HP modal KTP tanpa DP di Medan",
    "Tempat jual beli HP baru dan bekas terpercaya",
    "Kredit HP tanpa kartu kredit proses cepat",
    "Beli HP bekas berkualitas dengan cicilan mudah",
    "Jual beli HP bekas harga terbaik di Medan",
    "Sam Cellular HP Baru",
    "Kredit HP Sam Cellular",
    "Sam Cellular Medan Fair",
    "Promo HP Sam Cellular",
  ],
};

const page = () => {
  return (
    <>
      {/* ColorInit */}
      <ColorInit color={false} />

      {/* ScrollToTop */}
      <ScrollToTopInit color="#4B4B4B" />

      {/* Preloader */}
      <Preloader />

      {/* HeaderTwo */}
      <HeaderTwo category={false} />

      {/* BannerTwo */}
      <BannerTwo />

      {/* PromotionalTwo */}
      <PromotionalTwo />

      {/* DealsOne */}
      <DealsOne />

      {/* DiscountOne */}
      <DiscountOne />

      {/* FeaturedOne */}
      <FeaturedOne />

      {/* BigDealOne */}
      <BigDealOne />

      {/* DaySaleOne */}
      <DaySaleOne />

      {/* ShippingTwo */}
      <ShippingTwo />

      {/* FooterTwo */}
      <FooterTwo />

      {/* BottomFooter */}
      <BottomFooter />
    </>
  );
};

export default page;
