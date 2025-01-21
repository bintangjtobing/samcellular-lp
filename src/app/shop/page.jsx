import Breadcrumb from "@/components/Breadcrumb";
import FooterTwo from "@/components/FooterTwo";
import HeaderTwo from "@/components/HeaderTwo";
import ShippingTwo from "@/components/ShippingTwo";
import ShopSection from "@/components/ShopSection";
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

      {/* HeaderOne */}
      <HeaderTwo category={true} />

      {/* Breadcrumb */}
      <Breadcrumb title={"Shop"} />

      {/* ShopSection */}
      <ShopSection />

      {/* ShippingTwo */}
      <ShippingTwo />

      {/* FooterTwo */}
      <FooterTwo />
    </>
  );
};

export default page;
