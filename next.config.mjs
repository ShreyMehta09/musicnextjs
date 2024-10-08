/** @type {import('next').NextConfig} */
const nextConfig = {
	eslint: {
		ignoreDuringBuilds: true,
	},
	images: {
		domains: ["images.unsplash.com", "res.cloudinary.com"],
	},
};

export default nextConfig;
