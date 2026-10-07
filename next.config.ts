import type { NextConfig } from "next";

// GitHub Pages serves the site from /PersonalWebsite, so only production
// builds use a base path; `npm run dev` stays at localhost:3000.
const basePath = process.env.NODE_ENV === "production" ? "/PersonalWebsite" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  images: {
    // Static export has no image optimizer; this loader just applies basePath.
    loader: "custom",
    loaderFile: "./src/image-loader.ts",
  },
};

export default nextConfig;
