/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakeapi.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
