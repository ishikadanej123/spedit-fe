import React from "react";
import Headernew from "../Header/Headernew";
import Footer from "../Footer/Footer";

const WishList = () => {
  return (
    <div>
      <Headernew />
      <section className="cart-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <form action="#">
                <div className="table-content table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="product-thumbnail">Images</th>
                        <th className="cart-product-name">Product</th>
                        <th className="product-price">Unit Price</th>
                        <th className="product-quantity">Quantity</th>
                        <th className="product-subtotal">Total</th>
                        <th className="product-remove">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="product-thumbnail">
                          <a href="#">
                            <img src="img/product/product-12.jpg" alt="" />
                          </a>
                        </td>
                        <td className="product-name">
                          <a href="#">Bakix Furniture</a>
                        </td>
                        <td className="product-price">
                          <span className="amount">$130.00</span>
                        </td>
                        <td className="product-quantity">
                          <button className="bt-btn theme-btn" type="submit">
                            Add TO Cart
                          </button>
                        </td>
                        <td className="product-subtotal">
                          <span className="amount">$130.00</span>
                        </td>
                        <td className="product-remove">
                          <a href="#">
                            <i className="fa fa-times"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="product-thumbnail">
                          <a href="#">
                            <img src="img/product/product-13.jpg" alt="" />
                          </a>
                        </td>
                        <td className="product-name">
                          <a href="#">Sujon Chair Set</a>
                        </td>
                        <td className="product-price">
                          <span className="amount">$120.50</span>
                        </td>
                        <td className="product-quantity">
                          <button className="bt-btn theme-btn" type="submit">
                            Add TO Cart
                          </button>
                        </td>
                        <td className="product-subtotal">
                          <span className="amount">$120.50</span>
                        </td>
                        <td className="product-remove">
                          <a href="#">
                            <i className="fa fa-times"></i>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default WishList;
