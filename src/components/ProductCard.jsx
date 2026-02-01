import {
	FaStar,
	FaShoppingCart,
	FaExternalLinkAlt,
	FaBox,
	FaDownload,
	FaFire,
} from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import { BsLightningCharge } from "react-icons/bs";
import { GiLaptop } from "react-icons/gi";
import Link from "next/link";
import Image from "next/image";

const ProductCard = ({ product }) => {
	const isDigitalProduct = product.marketplace === "Digital Products";
	const isPhysicalProduct = product.marketplace === "Physical Products";

	return (
		<div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200 flex flex-col h-full">
			{/* Product Type Badge */}
			{isDigitalProduct && (
				<div className="absolute top-4 left-4 z-10">
					<span className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
						<GiLaptop className="text-xs" /> Digital
					</span>
				</div>
			)}

			{isPhysicalProduct && (
				<div className="absolute top-4 left-4 z-10">
					<span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
						<FaBox className="text-xs" /> Physical
					</span>
				</div>
			)}

			{/* Featured Badge */}
			{product.featured && (
				<div className="absolute top-4 right-4 z-10">
					<span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
						<BsLightningCharge className="text-xs" /> FEATURED
					</span>
				</div>
			)}

			{/* Discount Badge */}
			{product.discount && (
				<div className="absolute top-12 left-4 z-10">
					<span className="bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full">
						{product.discount}
					</span>
				</div>
			)}

			{/* Product Image - Clickable for details */}
			<Link href={`/affiliates/products/${product.id}`}>
				<div className="h-48 overflow-hidden bg-gray-100 relative cursor-pointer">
					<Image
						src={product.image}
						alt={product.name}
						width={400}
						height={300}
						className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
					/>
					{/* Product Type Indicator */}
					<div className="absolute bottom-2 left-2">
						<span className="text-xs font-semibold text-white bg-black/70 px-2 py-1 rounded flex items-center gap-1">
							{isDigitalProduct ? (
								<FaDownload className="text-xs" />
							) : (
								<FaBox className="text-xs" />
							)}
							{isDigitalProduct ? "Instant Access" : "Shipped"}
						</span>
					</div>
					{/* View Details Overlay */}
					<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
						<span className="text-white font-bold bg-black/50 px-4 py-2 rounded-lg">
							View Details
						</span>
					</div>
				</div>
			</Link>

			{/* Content Area - This will grow to fill available space */}
			<div className="p-6 flex flex-col flex-grow">
				{/* Category and Commission */}
				<div className="flex justify-between items-start mb-2">
					<span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
						{product.category}
					</span>
					<span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">
						Affiliate Program
					</span>
				</div>

				{/* Product Name - Clickable */}
				<Link href={`/affiliates/products/${product.id}`} className="mb-2">
					<h3 className="text-lg font-bold text-gray-900 line-clamp-2 hover:text-blue-600 cursor-pointer transition-colors min-h-[3.5rem]">
						{product.name}
					</h3>
				</Link>

				{/* Description */}
				<p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
					{product.description}
				</p>

				{/* Tags */}
				<div className="flex flex-wrap gap-2 mb-4">
					{product.tags.map((tag, index) => (
						<Link
							key={index}
							href={`/affiliates/products?search=${encodeURIComponent(tag)}`}
							className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded hover:bg-gray-200 transition-colors"
						>
							{tag}
						</Link>
					))}
					{isPhysicalProduct && product.primeEligible && (
						<span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">
							Fast Shipping
						</span>
					)}
				</div>

				{/* Rating and Reviews */}
				<div className="flex items-center justify-between mb-4">
					<div className="flex items-center gap-2">
						<div className="flex items-center">
							{[...Array(5)].map((_, i) => (
								<FaStar
									key={i}
									className={`text-sm ${
										i < Math.floor(product.rating)
											? "text-yellow-400"
											: "text-gray-300"
									}`}
								/>
							))}
						</div>
						<span className="text-sm font-bold text-gray-900">
							{product.rating}
						</span>
					</div>
					<Link
						href={`/affiliates/products/${product.id}#reviews`}
						className="text-sm text-gray-500 hover:text-blue-600"
					>
						({product.reviews.toLocaleString()} reviews)
					</Link>
				</div>

				{/* Pricing */}
				<div className="flex items-end justify-between mb-4">
					<div>
						{product.originalPrice &&
							product.originalPrice !== product.price && (
								<p className="text-sm text-gray-500 line-through">
									{product.originalPrice}
								</p>
							)}
						<p className="text-2xl font-bold text-gray-900">
							{product.price}
							{isPhysicalProduct && (
								<span className="text-sm font-normal text-gray-500 ml-1">
									+ shipping
								</span>
							)}
						</p>
					</div>
					<div className="flex items-center text-sm text-green-600 font-semibold">
						<IoTime className="mr-1" />
						Special Offer
					</div>
				</div>

				{/* Spacer to push buttons to bottom */}
				<div className="mt-auto">
					{/* Two Action Buttons */}
					<div className="flex flex-col gap-3">
						<Link
							href={`/affiliates/products/${product.id}`}
							className="w-full border-2 border-blue-600 text-blue-600 font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:bg-blue-50 hover:border-blue-700"
						>
							View Details
						</Link>
						<a
							href={product.affiliateLink}
							target="_blank"
							rel="noopener noreferrer nofollow sponsored"
							className={`w-full font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ${
								isDigitalProduct
									? "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
									: "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
							}`}
						>
							<FaShoppingCart />
							{isDigitalProduct ? "Learn More" : "View on Store"}
							<FaExternalLinkAlt className="text-sm" />
						</a>
					</div>

					{/* Additional Info */}
					<div className="mt-3 text-xs text-gray-500 flex justify-between">
						<Link
							href={`/affiliates/products/${product.id}#shipping`}
							className="hover:text-blue-600"
						>
							{isDigitalProduct
								? "⚡ Instant Access"
								: product.primeEligible
									? "🚚 Fast Shipping"
									: "📦 Ships Worldwide"}
						</Link>
						<span>
							{isDigitalProduct ? "🎁 Bonus Content" : "🔒 Secure Checkout"}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
