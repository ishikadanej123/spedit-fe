"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Headernew from "@/app/imports/Header/Headernew";
import HeroSection from "../component/HeroSection";
import Categories from "../component/Categories";
import FeatureProduct from "../component/FeatureProduct";
import TrendingProduct from "../component/TrendingProduct";
import CountDown from "../component/CountDown";
import BestSellingProducts from "../component/BestSellingProducts";
import TopFeaturePro from "../component/TopFeaturePro";
import Discover from "../component/Discover";
import Footer from "@/app/imports/Footer/Footer";

const HeroSlider = () => {
  return (
    <div>
      <Headernew />
      <HeroSection />
      <Categories />
      <FeatureProduct />
      <TrendingProduct />
      <CountDown />
      <BestSellingProducts />
      <TopFeaturePro />
      <Discover />
      <Footer />
    </div>
  );
};

export default HeroSlider;
