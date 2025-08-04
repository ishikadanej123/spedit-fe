"use client";
import Header from "@/app/imports/Header/component/Header";
import styled from "styled-components";
import HeroSection from "../component/HeroSection";

const Homepage = () => {
  return (
    <Wrapper>
      <Header />
      <HeroSection />
    </Wrapper>
  );
};

export default Homepage;

const Wrapper = styled.div`
  max-width: 1430px;
  width: 100%;
  margin: 0 auto;
`;




