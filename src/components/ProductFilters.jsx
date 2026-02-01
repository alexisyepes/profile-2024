"use client";

import { useState } from "react";
import {
	FaFilter,
	FaSearch,
	FaSortAmountDown,
	FaSortAmountUp,
	FaAmazon,
	FaFire,
} from "react-icons/fa";

const ProductFilters = ({
	categories,
	marketplaces,
	onFilterChange,
	onSortChange,
}) => {
	const [activeCategory, setActiveCategory] = useState("All");
	const [activeMarketplace, setActiveMarketplace] = useState("All");
	const [sortOrder, setSortOrder] = useState("featured");
	const [searchTerm, setSearchTerm] = useState("");

	const handleCategoryClick = (category) => {
		setActiveCategory(category);
		onFilterChange({
			category,
			marketplace: activeMarketplace,
			search: searchTerm,
		});
	};

	const handleMarketplaceClick = (marketplace) => {
		setActiveMarketplace(marketplace);
		onFilterChange({
			category: activeCategory,
			marketplace,
			search: searchTerm,
		});
	};

	const handleSortChange = (sortType) => {
		setSortOrder(sortType);
		onSortChange(sortType);
	};

	const handleSearch = (e) => {
		const value = e.target.value;
		setSearchTerm(value);
		onFilterChange({
			category: activeCategory,
			marketplace: activeMarketplace,
			search: value,
		});
	};

	const getMarketplaceIcon = (marketplace) => {
		switch (marketplace.toLowerCase()) {
			case "amazon":
				return <FaAmazon className="mr-2" />;
			case "hotmart":
				return <FaFire className="mr-2" />;
			default:
				return null;
		}
	};

	return (
		<div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
			{/* Top Section */}
			<div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
				{/* Title and Filter */}
				<div className="flex items-center gap-3">
					<FaFilter className="text-blue-600 text-xl" />
					<h2 className="text-xl font-bold text-gray-900">Filter Products</h2>
				</div>

				{/* Search Bar */}
				<div className="relative flex-1 max-w-md">
					<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
						<FaSearch className="text-gray-400" />
					</div>
					<input
						type="text"
						value={searchTerm}
						onChange={handleSearch}
						placeholder="Search products, categories..."
						className="w-full text-black pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
					/>
				</div>

				{/* Sort */}
				<div className="flex items-center gap-3">
					<span className="text-gray-700 font-medium">Sort by:</span>
					<div className="flex gap-2">
						<button
							onClick={() => handleSortChange("featured")}
							className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all ${
								sortOrder === "featured"
									? "bg-blue-600 text-white"
									: "bg-gray-100 text-gray-700 hover:bg-gray-200"
							}`}
						>
							<FaSortAmountDown /> Featured
						</button>
						<button
							onClick={() => handleSortChange("commission-high")}
							className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all ${
								sortOrder === "commission-high"
									? "bg-blue-600 text-white"
									: "bg-gray-100 text-gray-700 hover:bg-gray-200"
							}`}
						>
							<FaSortAmountUp /> Price
						</button>
					</div>
				</div>
			</div>

			{/* Marketplace Filter */}
			<div className="mb-6">
				<h3 className="text-lg font-semibold text-gray-900 mb-3">
					Marketplace
				</h3>
				<div className="flex flex-wrap gap-3">
					{marketplaces.map((marketplace) => (
						<button
							key={marketplace}
							onClick={() => handleMarketplaceClick(marketplace)}
							className={`px-5 py-2 rounded-full font-medium transition-all flex items-center ${
								activeMarketplace === marketplace
									? marketplace === "Digital Products"
										? "bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 shadow-lg"
										: marketplace === "Physical Products"
											? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg"
											: "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
									: "bg-gray-100 text-gray-700 hover:bg-gray-200"
							}`}
						>
							{getMarketplaceIcon(marketplace)}
							{marketplace}
						</button>
					))}
				</div>
			</div>

			{/* Categories Filter */}
			<div>
				<h3 className="text-lg font-semibold text-gray-900 mb-3">Categories</h3>
				<div className="flex flex-wrap gap-3">
					{categories.map((category) => (
						<button
							key={category}
							onClick={() => handleCategoryClick(category)}
							className={`px-5 py-2 rounded-full font-medium transition-all ${
								activeCategory === category
									? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
									: "bg-gray-100 text-gray-700 hover:bg-gray-200"
							}`}
						>
							{category}
						</button>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProductFilters;
