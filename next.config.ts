import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Plain static files in out/, hosted on Cloudflare Pages (free, commercial use
  // allowed; Vercel Hobby is non-commercial). Everything here is known at build
  // time, so the site needs no server. Cache Components are off: they don't
  // combine with route segment config, which the export needs on robots/sitemap.
  output: "export",
};

export default nextConfig;
