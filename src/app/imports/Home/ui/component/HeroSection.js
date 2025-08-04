"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import imageUrlBuilder from "@sanity/image-url";
import { client, HERO_BANNER_QUERY } from "../../../../../../lib/sanity";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source).url();
}

const HeroSection = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    client.fetch(HERO_BANNER_QUERY).then(setData);
  }, []);

  if (!data) return null;

  const bgImage = data?.mainImages?.[0]?.asset && urlFor(data.mainImages[0]);

  return (
    <Container>
      <HeroBanner>
        <Content>
          <BadgeRow>
            <Badge>{data.discount}</Badge>
            <Badge>{data.label}</Badge>
          </BadgeRow>
          <MainTitle>{data.title}</MainTitle>
          <Subtitle>{data.subtitle}</Subtitle>
          <CTA href={data.ctaLink}>
            <CtaText>{data.ctaText}</CtaText>
            <Icon>
              <IoIosArrowDroprightCircle />
            </Icon>
          </CTA>
        </Content>
        <Image backgroundImage={bgImage}></Image>
      </HeroBanner>
      <RightBanner>hey</RightBanner>
    </Container>
  );
};

export default HeroSection;

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
  padding: 40px;
`;

const HeroBanner = styled.div`
  display: flex;
  background-color: #c9eef6;
  width: 72%;
`;

const Image = styled.div`
  min-width: 60%;
  width: 100%;
  color: black;
  background-image: ${({ backgroundImage }) =>
    backgroundImage ? `url(${backgroundImage})` : "none"};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 620px;
`;

const RightBanner = styled.div`
  width: 16%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 371px;
  width: 100%;
  justify-content: center;
  padding-left: 50px;
`;

const BadgeRow = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
`;

const Badge = styled.span`
  background: #fff;
  color: #000;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.9rem;
`;

const MainTitle = styled.h1`
  font-size: 34px;
  font-weight: bold;
  color: black;
  margin-bottom: 35px;
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: black;
  margin-bottom: 30px;
`;

const CTA = styled.a`
  display: flex;
  align-items: center;
`;

const CtaText = styled.div`
  font-weight: 800;
  text-transform: uppercase;
  color: black;
  font-size: 13px;
`;

const Icon = styled.div`
  margin-left: 10px;
  color: black;
  display: flex;
  align-items: center;
`;
