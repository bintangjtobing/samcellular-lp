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
};

const page = () => {
  return (
    <>
      {/* ColorInit */}
      <ColorInit color={true} />

      {/* ScrollToTop */}
      <ScrollToTopInit color="#FA6400" />

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

      {/* TopSellingOne */}
      <TopSellingOne />

      {/* TrendingOne */}
      <TrendingOne />

      {/* DiscountOne */}
      <DiscountOne />

      {/* FeaturedOne */}
      <FeaturedOne />

      {/* BigDealOne */}
      <BigDealOne />

      {/* TopSellingTwo */}
      <TopSellingTwo />

      {/* PopularProductsOne */}
      <PopularProductsOne />

      {/* TopVendorsTwo */}
      <TopVendorsTwo />

      {/* DaySaleOne */}
      <DaySaleOne />

      {/* RecentlyViewedOne */}
      <RecentlyViewedOne />

      {/* ShippingTwo */}
      <ShippingTwo />

      {/* NewsletterTwo */}
      <NewsletterTwo />

      {/* FooterTwo */}
      <FooterTwo />

      {/* BottomFooter */}
      <BottomFooter />
    </>
  );
};

export default page;
