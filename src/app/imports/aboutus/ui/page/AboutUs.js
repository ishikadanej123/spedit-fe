import React from "react";
import HeroAbout from "../components/HeroAbout";
import FeturesArea from "../components/FeturesArea";
import TeamMember from "../components/TeamMember";
import GetConsultant from "../components/GetConsultant";
import Testimonial from "../components/Testimonial";
import Footer from "@/app/imports/Footer/Footer";
import Headernew from "@/app/imports/Header/Headernew";

const AboutUs = () => {
  return (
    <div>
      <Headernew />
      <HeroAbout />
      <FeturesArea />
      <TeamMember />
      <GetConsultant />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default AboutUs;
