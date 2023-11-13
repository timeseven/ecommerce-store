/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "https://ecommerce-store-black-mu.vercel.app/api/:path*",
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
