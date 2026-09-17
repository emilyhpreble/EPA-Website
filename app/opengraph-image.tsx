import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Emily Preble Auctions — Benefit Auctioneer + Consultant";

export default async function OG() {
  const fontsDir = join(process.cwd(), "public/fonts");
  const louize = await readFile(join(fontsDir, "LouizeDisplay-Regular.ttf"));
  const louizeItalic = await readFile(join(fontsDir, "LouizeDisplay-Italic.ttf"));
  const albertSans = await readFile(join(fontsDir, "AlbertSans-SemiBold.ttf"));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#eae5d6",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
        }}
      >
        <div
          style={{
            fontFamily: "Albert Sans",
            color: "#394430",
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            display: "flex",
          }}
        >
          Benefit Auctioneer + Consultant
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontFamily: "LouizeDisplay" }}>
          <div style={{ display: "flex", color: "#321426", fontSize: 96, lineHeight: 1, letterSpacing: -2 }}>
            <span style={{ fontStyle: "italic" }}>Energizing</span>&nbsp;Your Cause.
          </div>
          <div style={{ display: "flex", color: "#394430", fontSize: 64, lineHeight: 1, letterSpacing: -2, marginTop: 16 }}>
            <span style={{ fontStyle: "italic" }}>Elevating</span>&nbsp;Your Impact.
          </div>
        </div>
        <div style={{ fontFamily: "Albert Sans", color: "#321426", fontSize: 28, display: "flex" }}>
          Emily Preble Auctions · Austin, TX
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "LouizeDisplay", data: louize, weight: 400, style: "normal" },
        { name: "LouizeDisplay", data: louizeItalic, weight: 400, style: "italic" },
        { name: "Albert Sans", data: albertSans, weight: 600, style: "normal" },
      ],
    }
  );
}
