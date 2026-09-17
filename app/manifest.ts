import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Emily Preble Auctions",
    short_name: "EPA",
    description:
      "Benefit auctioneer and fundraising consultant helping nonprofits raise more.",
    start_url: "/",
    display: "standalone",
    background_color: "#eae5d6",
    theme_color: "#321426",
    icons: [{ src: "/icon.png", sizes: "1500x1500", type: "image/png" }],
  };
}
