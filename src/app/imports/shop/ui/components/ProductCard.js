"use client";
import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <div className="col-lg-6 col-sm-6 custom-col-10">
      <div className="product-wrapper mb-40">
        <div className="pro-img mb-20">
          <Link href={`/shop/${product.id}`}>
            <img src={product.image} className="img-fluid" alt={product.name} />
          </Link>
          <div className="product-action text-center">
            <a href="#" title="Shopping Cart">
              <i className="fa-solid fa-cart-arrow-down"></i>
            </a>
            <a href="#" title="Quick View">
              <i className="fa-solid fa-eye"></i>
            </a>
            <a href="#" title="Compare">
              <i className="fa-solid fa-exchange"></i>
            </a>
          </div>
        </div>
        <div className="pro-text">
          <div className="pro-title">
            <h6>
              <Link href={`/product/${product.id}`}>{product.name}</Link>
            </h6>
            <h5 className="pro-price">{product.price}</h5>
          </div>
          <div className="cart-icon">
            <a href="/cart">
              <i className="fa-solid fa-heart"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
