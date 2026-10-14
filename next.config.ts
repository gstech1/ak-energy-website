import type { NextConfig } from "next";

const configuredCmsApiUrl = process.env.NEXT_PUBLIC_API_URL?.trim();

if (process.env.NODE_ENV === "production" && !configuredCmsApiUrl) {
  throw new Error(
    "Set NEXT_PUBLIC_API_URL to the existing CMS API before building for production.",
  );
}

const cmsApiUrl = new URL(
  configuredCmsApiUrl || "http://localhost:5001",
);

if (
  process.env.NODE_ENV === "production" &&
  ["localhost", "127.0.0.1", "::1"].includes(cmsApiUrl.hostname)
) {
  throw new Error(
    "NEXT_PUBLIC_API_URL must point to the deployed CMS API, not localhost.",
  );
}

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: cmsApiUrl.protocol.slice(0, -1) as "http" | "https",
        hostname: cmsApiUrl.hostname,
        ...(cmsApiUrl.port ? { port: cmsApiUrl.port } : {}),
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
