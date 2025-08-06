import Headernew from "@/app/imports/Header/Headernew";
import React from "react";
import ProductInfo from "../components/ProductInfo";
import Footer from "@/app/imports/Footer/Footer";
import ProductDes from "../components/ProductDes";
import ProductArea from "../components/ProductArea";

const ProductDetail = ({ id }) => {
  return (
    <div>
      <Headernew />
      <ProductInfo productId={id} />
      <ProductDes productId={id} />
      <ProductArea productId={id} />
      <Footer />
    </div>
  );
};

export default ProductDetail;
