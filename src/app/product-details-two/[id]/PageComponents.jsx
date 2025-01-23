'use client'
import BottomFooter from "@/components/BottomFooter";
import Breadcrumb from "@/components/Breadcrumb";
import FooterTwo from "@/components/FooterTwo";
import HeaderTwo from "@/components/HeaderTwo";
import NewArrivalTwo from "@/components/NewArrivalTwo";
import ProductDetailsTwo from "@/components/ProductDetailsTwo";
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
            <ColorInit color={true} />

            {/* ScrollToTop */}
            <ScrollToTopInit color="#FA6400" />

            {/* Preloader */}
            <Preloader />

            {/* HeaderTwo */}
            <HeaderTwo category={true} />

            {/* Breadcrumb */}
            <Breadcrumb title={"Product Details"} />

            {/* ProductDetailsTwo */}
            <ProductDetailsTwo id={id} />

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
