"use client";
import BottomFooter from "@/components/BottomFooter";
import Breadcrumb from "@/components/Breadcrumb";
import FooterTwo from "@/components/FooterTwo";
import HeaderTwo from "@/components/HeaderTwo";
import NewArrivalTwo from "@/components/NewArrivalTwo";
import Product from "@/components/Product";
import ColorInit from "@/helper/ColorInit";
import Preloader from "@/helper/Preloader";
import ScrollToTopInit from "@/helper/ScrollToTopInit";
import ShippingTwo from "@/components/ShippingTwo";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const PageComponents = ({ id }) => {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      {/* ColorInit */}
      <ColorInit color={false} />

      {/* ScrollToTop */}
      <ScrollToTopInit color="#4B4B4B" />

      {/* Preloader */}
      <Preloader />

      {/* HeaderTwo */}
      <HeaderTwo category={false} />

      {/* Breadcrumb */}
      <Breadcrumb title={"Product Details"} />

      {/* Product */}
      <Product id={id} />

      {/* NewArrivalTwo */}
      <NewArrivalTwo />

      {/* ShippingOne */}
      <ShippingTwo />

      {/* FooterTwo */}
      <FooterTwo />

      {/* BottomFooter */}
      <BottomFooter />
    </QueryClientProvider>
  );
};

export default PageComponents;
