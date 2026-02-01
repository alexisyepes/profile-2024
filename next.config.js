/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,

	images: {
		remotePatterns: [
			// Hotmart - múltiples subdominios
			{
				protocol: "https",
				hostname: "static-media.hotmart.com",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "**.hotmart.com",
				pathname: "/**",
			},

			// Amazon - múltiples dominios de imágenes
			{
				protocol: "https",
				hostname: "m.media-amazon.com",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "images-na.ssl-images-amazon.com",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "**.amazon.com",
				pathname: "/images/**",
			},

			// Unsplash - para imágenes de placeholder
			{
				protocol: "https",
				hostname: "images.unsplash.com",
				pathname: "/**",
			},

			// Otros dominios comunes
			{
				protocol: "https",
				hostname: "**.googleusercontent.com",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "**.cloudinary.com",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "**.githubusercontent.com",
				pathname: "/**",
			},
		],

		// Optimizaciones opcionales
		formats: ["image/webp", "image/avif"],
		minimumCacheTTL: 60,
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
	},

	// Configuraciones adicionales recomendadas
	swcMinify: true,
	compiler: {
		// Habilitar styled-components si los usas
		// styledComponents: true,
	},

	// Headers de seguridad
	async headers() {
		return [
			{
				source: "/(.*)",
				headers: [
					{
						key: "X-DNS-Prefetch-Control",
						value: "on",
					},
					{
						key: "Strict-Transport-Security",
						value: "max-age=63072000; includeSubDomains; preload",
					},
					{
						key: "X-XSS-Protection",
						value: "1; mode=block",
					},
					{
						key: "X-Frame-Options",
						value: "SAMEORIGIN",
					},
					{
						key: "X-Content-Type-Options",
						value: "nosniff",
					},
					{
						key: "Referrer-Policy",
						value: "origin-when-cross-origin",
					},
				],
			},
		];
	},
};

module.exports = nextConfig;
