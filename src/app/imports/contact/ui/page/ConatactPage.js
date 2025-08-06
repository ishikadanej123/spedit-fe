import React from "react";
import ConatactForm from "../components/ConatactForm";
import Headernew from "@/app/imports/Header/Headernew";
import ContactInfo from "../components/ContactInfo";
import Footer from "@/app/imports/Footer/Footer";
import ConatactMap from "../components/ConatactMap";

const ConatactPage = () => {
  return (
    <div>
      <Headernew />
      <ConatactForm />
      <ContactInfo />
      <ConatactMap />
      <Footer />
    </div>
  );
};

export default ConatactPage;
