import Footer from "@/app/imports/Footer/Footer";
import Headernew from "@/app/imports/Header/Headernew";
import React from "react";
import CoupenArea from "../components/CoupenArea";
import CheckoutArea from "../components/CheckoutArea";

const Checkout = () => {
  return (
    <div>
      <Headernew />
      <CoupenArea />
      <CheckoutArea />
      <Footer />
    </div>
  );
};

export default Checkout;
