import BootstrapInit from "@/helper/BootstrapInit";
import RouteScrollToTop from "@/helper/RouteScrollToTop";
import "./font.css";
import "./globals.scss";
import PhosphorIconInit from "@/helper/PhosphorIconInit";

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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <BootstrapInit />
        <PhosphorIconInit />
        <RouteScrollToTop />
        {children}
      </body>
    </html>
  );
}
