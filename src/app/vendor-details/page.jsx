import BottomFooter from "@/components/BottomFooter";
import BreadcrumbThree from "@/components/BreadcrumbThree";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import NewsletterOne from "@/components/NewsletterOne";
import VendorsListTwo from "@/components/VendorsListTwo";
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
      <ColorInit color={false} />

      {/* ScrollToTop */}
      <ScrollToTopInit color="#299E60" />

      {/* Preloader */}
      <Preloader />

      {/* HeaderOne */}
      <HeaderOne />

      {/* BreadcrumbThree */}
      <BreadcrumbThree title={"Vendor Details"} />

      {/* VendorsListTwo */}
      <VendorsListTwo />

      {/* NewsletterOne */}
      <NewsletterOne />

      {/* FooterOne */}
      <FooterOne />

      {/* BottomFooter */}
      <BottomFooter />
    </>
  );
};

export default page;
