import ProductDetail from "@/app/imports/productdetail/ui/page/ProductDetail";
import React from "react";

const page = ({ params }) => {
  const { id } = params;

  return (
    <div>
      <ProductDetail productId={id} />
    </div>
  );
};

export default page;
