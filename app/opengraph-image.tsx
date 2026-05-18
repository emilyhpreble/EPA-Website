import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Emily Preble Auctions — Benefit Auctioneer + Consultant";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#ebe4d4",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ color: "#3f4d32", fontSize: 22, letterSpacing: 6, textTransform: "uppercase", display: "flex" }}>
          Benefit Auctioneer + Consultant
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ color: "#360025", fontSize: 96, lineHeight: 1, letterSpacing: -2 }}>
            Energizing Your Cause.
          </div>
          <div style={{ color: "#3f4d32", fontSize: 64, lineHeight: 1, letterSpacing: -2 }}>
            Elevating Your Impact.
          </div>
        </div>
        <div style={{ color: "#360025", fontSize: 28, display: "flex" }}>
          Emily Preble Auctions · Austin, TX
        </div>
      </div>
    ),
    size
  );
}
