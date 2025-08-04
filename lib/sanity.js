import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "i7kzc3ck", // 👈 Replace this
  dataset: "production",
  apiVersion: "2023-01-01", // 👈 Use today's or any recent date
  useCdn: true, // `true` = faster but cached
});
