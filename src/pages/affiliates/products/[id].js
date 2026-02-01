"use client";

import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { affiliateProducts } from "../../../../utils/products";
import {
	FaStar,
	FaShoppingCart,
	FaExternalLinkAlt,
	FaCheck,
	FaShieldAlt,
	FaClock,
	FaTag,
	FaFire,
	FaUsers,
	FaCertificate,
	FaArrowLeft,
	FaBox,
	FaDownload,
} from "react-icons/fa";
import { IoTime, IoShareSocial } from "react-icons/io5";
import Link from "next/link";

export default function ProductDetailPage() {
	const params = useParams();
	const router = useRouter();
	const [product, setProduct] = useState(null);
	const [loading, setLoading] = useState(true);
	const [selectedImage, setSelectedImage] = useState(0);
	const [quantity, setQuantity] = useState(1);
	const [productId, setProductId] = useState(null);

	useEffect(() => {
		// Verificar que params esté disponible y tenga un id
		if (!params || !params.id) {
			setLoading(false);
			return;
		}

		const id = parseInt(params.id);

		if (isNaN(id)) {
			router.push("/404");
			return;
		}

		setProductId(id);

		// Buscar el producto por ID
		const foundProduct = affiliateProducts.find((p) => p.id === id);

		if (foundProduct) {
			setProduct({
				...foundProduct,
			});
			setLoading(false);
		} else {
			setLoading(false);
			// El producto no fue encontrado
		}
	}, [params, router]);

	const isDigitalProduct = product?.marketplace === "Digital Products";
	const isPhysicalProduct = product?.marketplace === "Physical Products";

	if (loading) {
		return (
			<div className="min-h-screen bg-gray-50 flex items-center justify-center">
				<div className="text-center">
					<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
					<p className="mt-4 text-gray-600">Loading product...</p>
				</div>
			</div>
		);
	}

	// Verificar si el producto existe después de cargar
	if (!product) {
		return (
			<div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center px-4">
				<div className="max-w-md w-full text-center">
					<div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-6">
						<FaTag className="text-red-500 text-3xl" />
					</div>

					<h1 className="text-3xl font-bold text-gray-900 mb-4">
						Product Not Found
					</h1>

					<p className="text-gray-600 mb-8">
						Sorry, the product with ID {productId || "unknown"} doesn&apos;t
						exist.
					</p>

					<div className="space-y-4">
						<Link
							href="/affiliates/products"
							className="inline-flex items-center justify-center w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
						>
							<FaArrowLeft className="mr-2" />
							Back to All Products
						</Link>
					</div>
				</div>
			</div>
		);
	}

	// Datos de características y beneficios
	const features = [
		"High quality product",
		"Money back guarantee",
		"24/7 customer support",
		"Regular updates",
		"Community access",
		"Lifetime access",
	];

	const benefits = [
		"Save time with ready-to-use solutions",
		"Learn from industry experts",
		"Join a community of like-minded people",
		"Get certified upon completion",
		"Access exclusive bonuses",
	];

	return (
		<div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
			{/* Breadcrumb */}
			<div className="bg-white border-b border-gray-200">
				<div className="container mx-auto px-4 py-4">
					<nav className="flex items-center space-x-2 text-sm">
						<Link
							href="/affiliates/products"
							className="text-gray-500 hover:text-blue-600 flex items-center"
						>
							<FaArrowLeft className="mr-2" />
							Back to Products
						</Link>
						<span className="text-gray-400">/</span>
						<Link
							href="/affiliates/products"
							className="text-gray-500 hover:text-blue-600"
						>
							All Products
						</Link>
						<span className="text-gray-400">/</span>
						<span className="text-gray-900 font-medium truncate">
							{product.name}
						</span>
					</nav>
				</div>
			</div>

			{/* Main Content */}
			<div className="container mx-auto px-4 py-8">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					{/* Left Column - Images */}
					<div>
						{/* Main Image */}
						<div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-4">
							<img
								src={product.additionalImages?.[selectedImage] || product.image}
								alt={product.name}
								className="w-full h-96 object-cover"
							/>
						</div>

						{/* Thumbnail Images */}
						<div className="flex space-x-4 overflow-x-auto py-2">
							{product.additionalImages?.map((img, index) => (
								<button
									key={index}
									onClick={() => setSelectedImage(index)}
									className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
										selectedImage === index
											? "border-blue-500 ring-2 ring-blue-200"
											: "border-gray-200"
									}`}
								>
									<img
										src={img}
										alt={`Product view ${index + 1}`}
										className="w-full h-full object-cover"
									/>
								</button>
							))}
						</div>

						{/* Share Buttons */}
						<div className="mt-6 flex items-center space-x-4">
							<span className="text-gray-700 font-medium">Share:</span>
							<button className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200">
								<IoShareSocial />
							</button>
							<button className="p-2 rounded-full bg-green-100 text-green-600 hover:bg-green-200">
								<IoShareSocial />
							</button>
							<button className="p-2 rounded-full bg-red-100 text-red-600 hover:bg-red-200">
								<IoShareSocial />
							</button>
						</div>
					</div>

					{/* Right Column - Product Info */}
					<div>
						{/* Product Type & Category */}
						<div className="flex items-center justify-between mb-4">
							<div className="flex items-center space-x-3">
								{isDigitalProduct ? (
									<span className="px-3 py-1 rounded-full text-sm font-bold text-white bg-gradient-to-r from-orange-500 to-red-500">
										Digital Product
									</span>
								) : (
									<span className="px-3 py-1 rounded-full text-sm font-bold text-gray-900 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200">
										Physical Product
									</span>
								)}
								<span className="px-3 py-1 rounded-full text-sm font-medium text-blue-600 bg-blue-50">
									{product.category}
								</span>
								{product.featured && (
									<span className="px-3 py-1 rounded-full text-sm font-bold text-purple-600 bg-purple-50 flex items-center">
										<FaFire className="mr-1" /> Featured
									</span>
								)}
							</div>

							{/* Rating */}
							<div className="flex items-center">
								<div className="flex items-center mr-2">
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
								<span className="text-sm font-bold">{product.rating}</span>
								<span className="text-sm text-gray-500 ml-1">
									({product.reviews.toLocaleString()} reviews)
								</span>
							</div>
						</div>

						{/* Product Title */}
						<h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							{product.name}
						</h1>

						{/* Product Description */}
						<p className="text-gray-600 text-lg mb-6">{product.description}</p>

						{/* Tags */}
						<div className="flex flex-wrap gap-2 mb-6">
							{product.tags.map((tag, index) => (
								<span
									key={index}
									className="px-3 py-1 rounded-full text-sm text-gray-600 bg-gray-100"
								>
									{tag}
								</span>
							))}
							{isPhysicalProduct && product.primeEligible && (
								<span className="px-3 py-1 rounded-full text-sm font-bold text-blue-600 bg-blue-50">
									Fast Shipping
								</span>
							)}
						</div>

						{/* Price Section */}
						<div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-6">
							<div className="flex items-end justify-between mb-4">
								<div>
									{product.originalPrice &&
										product.originalPrice !== product.price && (
											<div className="flex items-center mb-2">
												<span className="text-lg text-gray-500 line-through mr-2">
													{product.originalPrice}
												</span>
												<span className="px-3 py-1 bg-red-500 text-white text-sm font-bold rounded-full">
													{product.discount} OFF
												</span>
											</div>
										)}
									<div className="text-4xl md:text-5xl font-bold text-gray-900">
										{product.price}
										{isPhysicalProduct && (
											<span className="text-lg text-gray-500 ml-2">
												+ shipping
											</span>
										)}
									</div>
								</div>

								{/* Quantity Selector (for physical products) */}
								{/* {isPhysicalProduct && (
									<div>
										<label className="block text-sm font-medium text-gray-700 mb-2">
											Quantity
										</label>
										<div className="flex items-center">
											<button
												onClick={() => setQuantity(Math.max(1, quantity - 1))}
												className="w-10 h-10 rounded-l-lg border border-gray-300 flex items-center justify-center hover:bg-gray-100"
											>
												-
											</button>
											<input
												type="number"
												value={quantity}
												onChange={(e) =>
													setQuantity(
														Math.max(1, parseInt(e.target.value) || 1),
													)
												}
												className="w-16 h-10 border-t border-b border-gray-300 text-center"
											/>
											<button
												onClick={() => setQuantity(quantity + 1)}
												className="w-10 h-10 rounded-r-lg border border-gray-300 flex items-center justify-center hover:bg-gray-100"
											>
												+
											</button>
										</div>
									</div>
								)} */}
							</div>

							{/* Action Buttons */}
							<div className="space-y-4">
								<a
									href={product.affiliateLink}
									target="_blank"
									rel="noopener noreferrer nofollow sponsored"
									className={`block w-full py-4 px-6 rounded-xl font-bold text-lg text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
										isDigitalProduct
											? "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
											: "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
									}`}
								>
									<div className="flex items-center justify-center">
										<FaShoppingCart className="mr-3" />
										{isDigitalProduct
											? "Learn More & Get Access"
											: "View on Store"}
										<FaExternalLinkAlt className="ml-3" />
									</div>
								</a>

								{/* Guarantee Badges */}
								<div className="flex flex-wrap justify-center gap-4">
									<div className="flex items-center text-sm text-gray-600">
										<FaClock className="text-blue-500 mr-2" />
										24/7 Support
									</div>
									<div className="flex items-center text-sm text-gray-600">
										<FaUsers className="text-purple-500 mr-2" />
										10,000+ Customers
									</div>
								</div>
							</div>
						</div>

						{/* Features */}
						<div className="mb-8">
							<h3 className="text-xl font-bold text-gray-900 mb-4">
								What&apos;s Included
							</h3>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
								{features.map((feature, index) => (
									<div key={index} className="flex items-center text-gray-700">
										<FaCheck className="text-green-500 mr-3" />
										{feature}
									</div>
								))}
							</div>
						</div>
					</div>
				</div>

				{/* Detailed Sections */}
				<div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
					{/* Benefits */}
					<div className="lg:col-span-2">
						<div className="bg-white rounded-2xl shadow-lg p-8">
							<h2 className="text-2xl font-bold text-gray-900 mb-6">
								Why Choose This Product?
							</h2>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								{benefits.map((benefit, index) => (
									<div key={index} className="flex items-start">
										<div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
											<span className="text-blue-600 font-bold">
												{index + 1}
											</span>
										</div>
										<div>
											<h4 className="font-bold text-gray-900 mb-2">
												Benefit {index + 1}
											</h4>
											<p className="text-gray-600">{benefit}</p>
										</div>
									</div>
								))}
							</div>
						</div>

						{/* FAQ Section */}
						<div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
							<h2 className="text-2xl font-bold text-gray-900 mb-6">
								Frequently Asked Questions
							</h2>
							<div className="space-y-6">
								{[
									{
										q: "Is this a one-time payment or subscription?",
										a: isDigitalProduct
											? "Most digital products offer one-time payments, but check the product page for specific payment terms as they vary by creator."
											: "Physical products are typically one-time purchases, but check the retailer's website for exact details.",
									},
									{
										q: "What is the refund policy?",
										a: "Refund policies vary by product and platform. Most digital platforms offer money-back guarantees (typically 30 days), while physical products follow the retailer's return policy. Check the specific product page for details.",
									},
									{
										q: "How do I access the product after purchase?",
										a: isDigitalProduct
											? "Digital products are typically delivered instantly via email or platform access after purchase confirmation."
											: "Physical products will be shipped to your provided address with tracking information from the retailer.",
									},
									{
										q: "What kind of support is available?",
										a: "Support varies by product. Most creators offer support for digital products, while physical products are supported by the retailer. Check the product description for specific support details.",
									},
									{
										q: "Are these products recommended by you?",
										a: "Yes, we only feature products we believe offer good value. However, we are not the creators or sellers - we provide affiliate links to help you discover useful products.",
									},
									{
										q: "Does using your links cost me more?",
										a: "No, the price is exactly the same whether you use our links or go directly. We may earn a commission at no extra cost to you.",
									},
								].map((faq, index) => (
									<div
										key={index}
										className="border-b border-gray-200 pb-6 last:border-b-0"
									>
										<h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
										<p className="text-gray-600">{faq.a}</p>
									</div>
								))}
							</div>
						</div>
					</div>

					{/* Sidebar - Quick Info */}
					<div>
						<div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
							<h3 className="text-lg font-bold text-gray-900 mb-4">
								Product Details
							</h3>

							<div className="space-y-4">
								<div>
									<span className="block text-sm text-gray-500">
										Product Type
									</span>
									<span
										className={`font-bold ${
											isDigitalProduct ? "text-orange-600" : "text-blue-600"
										}`}
									>
										{isDigitalProduct ? "Digital Product" : "Physical Product"}
									</span>
								</div>

								<div>
									<span className="block text-sm text-gray-500">Category</span>
									<span className="font-bold text-gray-900">
										{product.category}
									</span>
								</div>

								<div>
									<span className="block text-sm text-gray-500">
										Affiliate Program
									</span>
									<span className="font-bold text-green-600">Available</span>
								</div>

								<div>
									<span className="block text-sm text-gray-500">Rating</span>
									<div className="flex items-center">
										<div className="flex mr-2">
											{[...Array(5)].map((_, i) => (
												<FaStar
													key={i}
													className={`${
														i < Math.floor(product.rating)
															? "text-yellow-400"
															: "text-gray-300"
													}`}
												/>
											))}
										</div>
										<span className="font-bold">{product.rating}/5</span>
									</div>
								</div>

								<div>
									<span className="block text-sm text-gray-500">
										Total Reviews
									</span>
									<span className="font-bold text-gray-900">
										{product.reviews.toLocaleString()}
									</span>
								</div>

								{isDigitalProduct && (
									<div className="pt-4 border-t border-gray-200">
										<div className="flex items-center text-orange-600 font-bold">
											<FaDownload className="mr-2" />
											Digital Benefits
										</div>
										<ul className="mt-2 space-y-1 text-sm text-gray-600">
											<li>• Instant access after purchase</li>
											<li>• Lifetime updates included</li>
											<li>• Access from any device</li>
										</ul>
									</div>
								)}

								{isPhysicalProduct && product.primeEligible && (
									<div className="pt-4 border-t border-gray-200">
										<div className="flex items-center text-blue-600 font-bold">
											<FaBox className="mr-2" />
											Shipping Info
										</div>
										<ul className="mt-2 space-y-1 text-sm text-gray-600">
											<li>• Fast shipping available</li>
											<li>• Worldwide delivery</li>
											<li>• Tracking included</li>
										</ul>
									</div>
								)}
							</div>

							{/* Quick Action Button */}
							<a
								href={product.affiliateLink}
								target="_blank"
								rel="noopener noreferrer nofollow sponsored"
								className={`mt-6 block w-full py-3 px-4 rounded-lg font-bold text-center transition-all ${
									isDigitalProduct
										? "bg-orange-500 hover:bg-orange-600 text-white"
										: "bg-blue-600 hover:bg-blue-700 text-white"
								}`}
							>
								{isDigitalProduct ? "Learn More" : "View Product"}
							</a>
						</div>

						{/* Related Products */}
						<div className="bg-white rounded-2xl shadow-lg p-6 mt-6">
							<h3 className="text-lg font-bold text-gray-900 mb-4">
								You Might Also Like
							</h3>
							<div className="space-y-4">
								{affiliateProducts
									.filter(
										(p) =>
											p.id !== product.id && p.category === product.category,
									)
									.slice(0, 3)
									.map((relatedProduct) => (
										<Link
											key={relatedProduct.id}
											href={`/affiliates/products/${relatedProduct.id}`}
											className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors group"
										>
											<img
												src={relatedProduct.image}
												alt={relatedProduct.name}
												className="w-16 h-16 rounded-lg object-cover"
											/>
											<div className="ml-4">
												<h4 className="font-medium text-gray-900 group-hover:text-blue-600 line-clamp-1">
													{relatedProduct.name}
												</h4>
												<p className="text-sm text-gray-500">
													{relatedProduct.price}
												</p>
											</div>
										</Link>
									))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
