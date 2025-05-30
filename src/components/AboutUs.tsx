const AboutUs = () => {
	return (
		<section
			id="aboutus"
			className="py-20 bg-gradient-to-br from-gray-900 to-datablue-900 text-white"
		>
			<link rel="stylesheet" href="/styles.css" />
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold mb-8 text-center">Who we are</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{/* Vlado */}
					<div className="bg-white rounded-lg shadow-md p-6">
						<div className="text-center">
							<div className="rounded-image mx-auto">
								<img src="/images/vlado.jpeg" alt="Vladimir Vladimirov" />
							</div>
							<div className="text-gray-700 text-lg">
								<h2 className="text-2xl font-bold mb-1">Vladimir Vladimirov</h2>
								<h4 className="mb-4">
									<b>Financial expert and Data Scientist</b>
								</h4>
							</div>
						</div>
						<div className="text-gray-700 text-lg">
							<h6 className="mb-4">Focus and expertise:</h6>
							<ul>
								<li className="flex items-start">
									<div className="rounded-full bg-datateal-100 p-1 mr-3 mt-1">
										<div className="rounded-full bg-datateal-500 w-2 h-2" />
									</div>
									<p className="text-gray-700">
										Quantitative Strategy Development and Risk Management
									</p>
								</li>
								<li className="flex items-start">
									<div className="rounded-full bg-datateal-100 p-1 mr-3 mt-1">
										<div className="rounded-full bg-datateal-500 w-2 h-2" />
									</div>
									<p className="text-gray-700">
										Investment Process and Asset Allocation
									</p>
								</li>
								<li className="flex items-start">
									<div className="rounded-full bg-datateal-100 p-1 mr-3 mt-1">
										<div className="rounded-full bg-datateal-500 w-2 h-2" />
									</div>
									<p className="text-gray-700">
										Alternative Data Scouting and Data Quality
									</p>
								</li>
								<li className="flex items-start">
									<div className="rounded-full bg-datateal-100 p-1 mr-3 mt-1">
										<div className="rounded-full bg-datateal-500 w-2 h-2" />
									</div>
									<p className="text-gray-700">
										Statistical Analysis and Infrastructure Development
									</p>
								</li>
							</ul>
						</div>
					</div>

					{/* Hristo H */}
					<div className="bg-white rounded-lg shadow-md p-6">
						<div className="text-center">
							<div className="rounded-image mx-auto">
								<img src="/images/hristoh_bg.png" alt="Hristo Hristov" />
							</div>
							<div className="text-gray-700 text-lg">
								<h2 className="text-2xl font-bold mb-1">Hristo Hristov</h2>
								<h4 className="mb-4">
									<b>Software Engineer and Data Analyst</b>
								</h4>
							</div>
						</div>
						<div className="text-gray-700 text-lg">
							<h6 className="mb-4">Focus and expertise:</h6>
							<ul>
								<li className="flex items-start">
									<div className="rounded-full bg-datateal-100 p-1 mr-3 mt-1">
										<div className="rounded-full bg-datateal-500 w-2 h-2" />
									</div>
									<p className="text-gray-700">Automated trading and backtesting</p>
								</li>
								<li className="flex items-start">
									<div className="rounded-full bg-datateal-100 p-1 mr-3 mt-1">
										<div className="rounded-full bg-datateal-500 w-2 h-2" />
									</div>
									<p className="text-gray-700">Crypto and equity market expertise</p>
								</li>
								<li className="flex items-start">
									<div className="rounded-full bg-datateal-100 p-1 mr-3 mt-1">
										<div className="rounded-full bg-datateal-500 w-2 h-2" />
									</div>
									<p className="text-gray-700">
										Energy analytics and data solutions
									</p>
								</li>
								<li className="flex items-start">
									<div className="rounded-full bg-datateal-100 p-1 mr-3 mt-1">
										<div className="rounded-full bg-datateal-500 w-2 h-2" />
									</div>
									<p className="text-gray-700">
										Health data research and synthetic data generation
									</p>
								</li>
							</ul>
						</div>
					</div>

					{/* Hristo G */}
					<div className="bg-white rounded-lg shadow-md p-6">
						<div className="text-center">
							<div className="rounded-image mx-auto">
								<img src="/images/hristog_bg.png" alt="Hristo Goumnerov" />
							</div>
							<div className="text-gray-700 text-lg">
								<h2 className="text-2xl font-bold mb-1">Hristo Goumnerov</h2>
								<h4 className="mb-4">
									<b>Simulation Engineer and Data Engineer</b>
								</h4>
							</div>
						</div>
						<div className="text-gray-700 text-lg">
							<h6 className="mb-4">Focus and expertise:</h6>
							<ul>
								<li className="flex items-start">
									<div className="rounded-full bg-datateal-100 p-1 mr-3 mt-1">
										<div className="rounded-full bg-datateal-500 w-2 h-2" />
									</div>
									<p className="text-gray-700">Aerospace and Defense</p>
								</li>
								<li className="flex items-start">
									<div className="rounded-full bg-datateal-100 p-1 mr-3 mt-1">
										<div className="rounded-full bg-datateal-500 w-2 h-2" />
									</div>
									<p className="text-gray-700">Materials Research</p>
								</li>
								<li className="flex items-start">
									<div className="rounded-full bg-datateal-100 p-1 mr-3 mt-1">
										<div className="rounded-full bg-datateal-500 w-2 h-2" />
									</div>
									<p className="text-gray-700">Nuclear Power Plant Safety</p>
								</li>
								<li className="flex items-start">
									<div className="rounded-full bg-datateal-100 p-1 mr-3 mt-1">
										<div className="rounded-full bg-datateal-500 w-2 h-2" />
									</div>
									<p className="text-gray-700">Semiconductors</p>
								</li>
								<li className="flex items-start">
									<div className="rounded-full bg-datateal-100 p-1 mr-3 mt-1">
										<div className="rounded-full bg-datateal-500 w-2 h-2" />
									</div>
									<p className="text-gray-700">Financial Sector</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
