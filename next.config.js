/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        // destination: "http://localhost:3000/api/:path*",
        destination: "https://ecommerce-admin-eosin-chi.vercel.app/api/:path*",
      },
    ];
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
