import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Emily Preble Auctions",
    short_name: "EPA",
    description:
      "Benefit auctioneer and fundraising consultant helping nonprofits raise more.",
    start_url: "/",
    display: "standalone",
    background_color: "#ebe4d4",
    theme_color: "#360025",
    icons: [{ src: "/icon", sizes: "32x32", type: "image/png" }],
  };
}
