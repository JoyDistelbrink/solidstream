/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["utfs.io"],
  },
  //TODO: only add this if there is a livekit error
  webpack: (config) => {
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: "javascript/auto",
    });

    return config;
  },
};

export default nextConfig;
