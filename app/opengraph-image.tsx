import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          color: "#f5f3ef",
          backgroundColor: "#121314",
          backgroundImage:
            "radial-gradient(circle at 0% 0%, rgba(176,141,87,0.35), transparent 45%), radial-gradient(circle at 100% 100%, rgba(176,141,87,0.15), transparent 45%)",
          fontFamily: "serif",
        }}
      >
        <div style={{ fontSize: 30, letterSpacing: "0.28em", textTransform: "uppercase", opacity: 0.7 }}>
          Smart Home Architects
        </div>
        <div style={{ fontSize: 84, lineHeight: 1.02, maxWidth: "90%" }}>
          Intelligent Homes, Architected with Quiet Precision.
        </div>
        <div style={{ fontSize: 26, opacity: 0.82 }}>Cape Town & Garden Route</div>
      </div>
    ),
    {
      ...size,
    },
  );
}
