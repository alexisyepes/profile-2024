"use client";

import { useState, useEffect } from "react";
import ProductCard from "../../../components/ProductCard";
import ProductFilters from "../../../components/ProductFilters";
import {
	affiliateProducts,
	categories,
	marketplaces,
} from "../../../../utils/products";
import {
	FaRocket,
	FaShieldAlt,
	FaChartLine,
	FaFire,
	FaDownload,
	FaBox,
	FaCertificate,
} from "react-icons/fa";
import { FaTruckArrowRight } from "react-icons/fa6";
import { GiLaptop } from "react-icons/gi";
import Link from "next/link";

export default function AffiliateProductsPage() {
	const [filteredProducts, setFilteredProducts] = useState(affiliateProducts);
	const [activeFilter, setActiveFilter] = useState({
		category: "All",
		marketplace: "All",
		search: "",
	});
	const [sortType, setSortType] = useState("featured");

	// Filter products
	useEffect(() => {
		let filtered = [...affiliateProducts];

		// Filter by marketplace
		if (activeFilter.marketplace !== "All") {
			filtered = filtered.filter(
				(product) =>
					product.marketplace.toLowerCase() ===
					activeFilter.marketplace.toLowerCase(),
			);
		}

		// Filter by category
		if (activeFilter.category !== "All") {
			filtered = filtered.filter(
				(product) => product.category === activeFilter.category,
			);
		}

		// Filter by search
		if (activeFilter.search) {
			const searchLower = activeFilter.search.toLowerCase();
			filtered = filtered.filter(
				(product) =>
					product.name.toLowerCase().includes(searchLower) ||
					product.description.toLowerCase().includes(searchLower) ||
					product.tags.some((tag) => tag.toLowerCase().includes(searchLower)) ||
					product.category.toLowerCase().includes(searchLower),
			);
		}

		// Sort
		switch (sortType) {
			case "featured":
				filtered.sort((a, b) => {
					if (a.featured && !b.featured) return -1;
					if (!a.featured && b.featured) return 1;
					return b.rating - a.rating;
				});
				break;
			case "commission-high":
				filtered.sort((a, b) => {
					const commissionA = parseFloat(a.price.replace(/[^0-9.]/g, ""));
					const commissionB = parseFloat(b.price.replace(/[^0-9.]/g, ""));
					return commissionB - commissionA;
				});
				break;
			case "price-low":
				filtered.sort((a, b) => {
					const priceA = parseFloat(a.price.replace(/[^0-9.]/g, ""));
					const priceB = parseFloat(b.price.replace(/[^0-9.]/g, ""));
					return priceA - priceB;
				});
				break;
			default:
				break;
		}

		setFilteredProducts(filtered);
	}, [activeFilter, sortType]);

	const handleFilterChange = (filter) => {
		setActiveFilter(filter);
	};

	const handleSortChange = (sort) => {
		setSortType(sort);
	};

	// Statistics
	const hotmartProducts = affiliateProducts.filter(
		(p) => p.marketplace === "Digital Products",
	).length;
	const amazonProducts = affiliateProducts.filter(
		(p) => p.marketplace === "Physical Products",
	).length;
	const totalCommission = affiliateProducts.reduce((acc, product) => {
		const commission = parseFloat(product.commission.replace(/[^0-9.]/g, ""));
		return isNaN(commission) ? acc : acc + commission;
	}, 0);

	const stats = [
		{
			icon: <FaRocket className="text-2xl" />,
			value: `${affiliateProducts.length}+`,
			label: "Total Products",
			color: "from-blue-500 to-cyan-500",
		},
		{
			icon: <GiLaptop className="text-2xl" />,
			value: `${hotmartProducts}+`,
			label: "Digital Products",
			color: "from-orange-500 to-red-500",
		},
		{
			icon: <FaTruckArrowRight className="text-2xl" />,
			value: `${amazonProducts}+`,
			label: "Physical Products",
			color: "from-yellow-400 to-orange-500",
		},
		{
			icon: <FaChartLine className="text-2xl" />,
			value: `${Math.round(totalCommission / affiliateProducts.length)}% Avg`,
			label: "Commission Rate",
			color: "from-green-500 to-emerald-500",
		},
	];

	return (
		<div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
			{/* Hero Section */}
			<div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 text-white">
				<div className="container mx-auto px-4 py-16">
					<div className="max-w-4xl mx-auto text-center">
						{/* Título corregido */}
						<h1 className="text-4xl md:text-5xl font-bold mb-6">
							Curated Affiliate Products
						</h1>

						{/* Descripción corregida */}
						<p className="text-xl mb-8 opacity-90">
							Discover carefully selected digital and physical products. All our
							recommendations include verified quality and value.
						</p>

						{/* Stats - VERSIÓN CORREGIDA */}
						<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
							{stats.map((stat, index) => (
								<div key={index} className="text-center">
									<div
										className={`inline-flex p-4 rounded-2xl ${stat.color} mb-3`}
									>
										{stat.icon}
									</div>
									<div className="text-3xl font-bold">{stat.value}</div>
									<div className="text-sm opacity-90">{stat.label}</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* Main Content */}
			<div className="container mx-auto px-4 py-8">
				{/* Filters */}
				<ProductFilters
					categories={categories}
					marketplaces={marketplaces}
					onFilterChange={handleFilterChange}
					onSortChange={handleSortChange}
				/>

				{/* Results */}
				<div className="mb-6">
					<div className="flex justify-between items-center mb-4">
						<h2 className="text-2xl font-bold text-gray-900">
							Recommended Products
							<span className="text-blue-600 ml-2">
								({filteredProducts.length})
							</span>
						</h2>
						<div className="text-sm text-gray-600">
							Showing {filteredProducts.length} of {affiliateProducts.length}{" "}
							products
							{activeFilter.marketplace !== "All" &&
								` from ${activeFilter.marketplace}`}
						</div>
					</div>

					{/* Products Grid */}
					{filteredProducts.length > 0 ? (
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
							{filteredProducts.map((product) => (
								<ProductCard key={product.id} product={product} />
							))}
						</div>
					) : (
						<div className="text-center py-16">
							<div className="text-gray-400 text-6xl mb-4">😕</div>
							<h3 className="text-2xl font-bold text-gray-700 mb-2">
								No products found
							</h3>
							<p className="text-gray-500">Try other filters or search terms</p>
						</div>
					)}
				</div>

				{/* Product Type Comparison */}
				<div className="mt-12 mb-8">
					<h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
						Product Types Comparison
					</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
							<div className="flex items-center gap-4 mb-4">
								<div className="p-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white">
									<FaDownload className="text-2xl" />
								</div>
								<div>
									<h4 className="text-xl font-bold text-gray-900">
										Digital Products
									</h4>
									<p className="text-gray-600">
										Courses, ebooks, software & digital goods
									</p>
								</div>
							</div>
							<ul className="space-y-2">
								<li className="flex items-center text-gray-700">
									<FaDownload className="text-orange-500 mr-2" />
									Instant access after purchase
								</li>
								<li className="flex items-center text-gray-700">
									<FaDownload className="text-orange-500 mr-2" />
									Lifetime updates included
								</li>
								<li className="flex items-center text-gray-700">
									<FaDownload className="text-orange-500 mr-2" />
									Access from any device
								</li>
								<li className="flex items-center text-gray-700">
									<FaDownload className="text-orange-500 mr-2" />
									No shipping required
								</li>
							</ul>
						</div>

						<div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
							<div className="flex items-center gap-4 mb-4">
								<div className="p-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 text-white">
									<FaBox className="text-2xl" />
								</div>
								<div>
									<h4 className="text-xl font-bold text-gray-900">
										Physical Products
									</h4>
									<p className="text-gray-600">
										Electronics, books, gadgets & tangible goods
									</p>
								</div>
							</div>
							<ul className="space-y-2">
								<li className="flex items-center text-gray-700">
									<FaTruckArrowRight className="text-blue-500 mr-2" />
									Fast worldwide shipping
								</li>
								<li className="flex items-center text-gray-700">
									<FaTruckArrowRight className="text-blue-500 mr-2" />
									Trusted retailers
								</li>
								<li className="flex items-center text-gray-700">
									<FaTruckArrowRight className="text-blue-500 mr-2" />
									Easy returns & support
								</li>
								<li className="flex items-center text-gray-700">
									<FaTruckArrowRight className="text-blue-500 mr-2" />
									Secure checkout process
								</li>
							</ul>
						</div>
					</div>
				</div>

				{/* Affiliate Information (Versión corregida) */}
				<div className="mt-12 p-8 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl border border-blue-100">
					<div className="max-w-3xl mx-auto text-center">
						<h3 className="text-2xl font-bold text-gray-900 mb-4">
							💡 How our recommendation system works
						</h3>
						<p className="text-gray-600 mb-6">
							We carefully select the best digital and physical products from
							trusted platforms. Digital products offer instant access and
							lifetime updates, while physical products come with reliable
							shipping and support. When you make a purchase through our
							recommendations, it supports our work at no extra cost to you.
						</p>
						<div className="flex flex-wrap justify-center gap-4">
							<span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
								<FaDownload className="inline mr-1" /> Digital: Instant Access
							</span>
							<span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
								<FaBox className="inline mr-1" /> Physical: Fast Shipping
							</span>
							<span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
								<FaShieldAlt className="inline mr-1" /> Always Secure
							</span>
						</div>

						{/* Optional: Add disclosure link */}
						<div className="mt-6 pt-6 border-t border-blue-200">
							<Link
								href="/affiliate-disclosure"
								className="text-sm text-blue-600 hover:text-blue-800 hover:underline inline-flex items-center"
							>
								<FaCertificate className="mr-2" />
								Learn about our affiliate partnerships
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
