/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true, // optional but helps on Hostinger
  images: {
    unoptimized: true, // required for static export with <Image>
  },
};

export default nextConfig;
