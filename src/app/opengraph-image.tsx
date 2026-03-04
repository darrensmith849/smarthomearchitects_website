import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const runtime = "edge";
export const alt = `${siteConfig.artistName} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1A1A1A",
          color: "#FAF8F5",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 20,
            letterSpacing: "0.2em",
            color: "#C8A97E",
            marginBottom: 20,
            textTransform: "uppercase",
          }}
        >
          The Debut Album
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 300,
            letterSpacing: "-0.02em",
            marginBottom: 12,
          }}
        >
          {siteConfig.album.title}
        </div>
        <div
          style={{
            fontSize: 24,
            fontWeight: 300,
            color: "rgba(250, 248, 245, 0.6)",
          }}
        >
          by {siteConfig.artistName}
        </div>
      </div>
    ),
    { ...size }
  );
}
