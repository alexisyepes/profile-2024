import Link from "next/link";
import {
	FaArrowLeft,
	FaShieldAlt,
	FaCheckCircle,
	FaEnvelope,
} from "react-icons/fa";

export default function AffiliateDisclosure() {
	const email = "alexisyep@gmail.com";

	return (
		<div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
			{/* Header con botón de regreso */}
			<div className="bg-white border-b border-gray-200">
				<div className="container mx-auto px-4 py-6">
					<nav className="flex items-center">
						<Link
							href="/affiliates/products"
							className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
						>
							<FaArrowLeft className="mr-2" />
							Back to Products
						</Link>
					</nav>
				</div>
			</div>

			{/* Contenido principal */}
			<div className="container mx-auto px-4 py-12">
				<div className="max-w-3xl mx-auto">
					{/* Header con icono */}
					<div className="text-center mb-10">
						<div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
							<FaShieldAlt className="text-blue-600 text-2xl" />
						</div>
						<h1 className="text-4xl font-bold text-gray-900 mb-4">
							Affiliate Disclosure
						</h1>
						<p className="text-gray-600 text-lg">
							Transparency is our priority. Here's how our affiliate program
							works.
						</p>
					</div>

					{/* Tarjeta de contenido */}
					<div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
						<div className="prose prose-lg max-w-none">
							<p className="text-gray-700 text-lg leading-relaxed mb-6">
								This website contains affiliate links, which means I may earn a
								commission if you make a purchase through these links, at no
								additional cost to you. This helps support our work and allows
								us to continue providing valuable content.
							</p>

							<div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
								<p className="text-blue-800 font-medium">
									<strong>Important:</strong> Product prices and availability
									are accurate as of the date/time indicated and are subject to
									change. Any price and availability information displayed at
									the time of purchase will apply to the purchase.
								</p>
							</div>

							<h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6 flex items-center">
								<FaCheckCircle className="text-green-500 mr-3" />
								Our Commitment to You
							</h2>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
								<div className="bg-gray-50 p-6 rounded-xl">
									<h3 className="font-bold text-gray-900 mb-3">
										Honest Recommendations
									</h3>
									<ul className="space-y-2 text-gray-700">
										<li className="flex items-start">
											<span className="text-green-500 mr-2">✓</span>
											<span>Only products we genuinely recommend</span>
										</li>
										<li className="flex items-start">
											<span className="text-green-500 mr-2">✓</span>
											<span>Personal testing and evaluation</span>
										</li>
										<li className="flex items-start">
											<span className="text-green-500 mr-2">✓</span>
											<span>Unbiased and transparent reviews</span>
										</li>
									</ul>
								</div>

								<div className="bg-gray-50 p-6 rounded-xl">
									<h3 className="font-bold text-gray-900 mb-3">
										User Benefits
									</h3>
									<ul className="space-y-2 text-gray-700">
										<li className="flex items-start">
											<span className="text-green-500 mr-2">✓</span>
											<span>No additional cost to you</span>
										</li>
										<li className="flex items-start">
											<span className="text-green-500 mr-2">✓</span>
											<span>Same price as direct purchase</span>
										</li>
										<li className="flex items-start">
											<span className="text-green-500 mr-2">✓</span>
											<span>Support our independent work</span>
										</li>
									</ul>
								</div>
							</div>

							<h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">
								Affiliate Programs We Participate In
							</h2>

							<div className="space-y-4">
								<div className="p-4 border border-gray-200 rounded-lg">
									<h3 className="font-bold text-gray-900 mb-2">
										Digital Product Platforms
									</h3>
									<p className="text-gray-600">
										We partner with platforms that offer digital products such
										as online courses, ebooks, software, and digital tools.
									</p>
								</div>

								<div className="p-4 border border-gray-200 rounded-lg">
									<h3 className="font-bold text-gray-900 mb-2">
										Online Marketplaces
									</h3>
									<p className="text-gray-600">
										We work with established online retailers that offer
										physical products with reliable shipping and customer
										support.
									</p>
								</div>
							</div>

							{/* Sección de contacto con email */}
							<div className="mt-10 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
								<div className="flex items-start mb-4">
									<FaEnvelope className="text-blue-600 text-xl mr-3 mt-1" />
									<div>
										<h3 className="text-xl font-bold text-gray-900 mb-2">
											Questions or Concerns?
										</h3>
										<p className="text-gray-700 mb-4">
											If you have any questions about our affiliate
											relationships or how we select products, feel free to
											reach out via email.
										</p>
									</div>
								</div>

								<div className="bg-white p-4 rounded-lg border border-gray-200">
									<div className="flex items-center justify-between">
										<div>
											<p className="text-sm text-gray-500 mb-1">Email us at:</p>
											<a
												href={`mailto:${email}`}
												className="text-blue-600 hover:text-blue-800 font-medium text-lg"
											>
												{email}
											</a>
										</div>
										<a
											href={`mailto:${email}?subject=Question about Affiliate Disclosure`}
											className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
										>
											<FaEnvelope className="mr-2" />
											Send Email
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Botones de acción */}
					<div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
						<Link
							href="/affiliates/products"
							className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
						>
							<FaArrowLeft className="mr-3" />
							Back to Products
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
