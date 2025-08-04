import { client } from "./sanity";

export async function fetchHeroBanner() {
  const query = `*[_type == "heroBanner"][0]`;
  return await client.fetch(query);
}

export const HERO_BANNER_QUERY = `*[_type == "heroBanner"][0]{
  _id,
  label,
  discount,
  title,
  subtitle,
  description,
  ctaText,
  ctaLink,
  backgroundColor,
  mainImages[]{
    asset->{
      _id,
      url
    }
  }
}`;
