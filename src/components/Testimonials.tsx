import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const testimonialsData = [
	{
		id: "technology",
		title: "Technology Case Studies",
		testimonials: [
			{
				client: "Data Analytics Platform",
				logo: "QT",
				quote:
					"The quantitative platform developed by The Quant Labs automated our data collection, feature engineering, model training, and decision making, enabling rapid deployment of new analytics strategies and improved performance.",
				author: "Chief Technology Officer",
				position: "Enterprise Analytics Firm",
			},
			{
				client: "Data Science Team",
				logo: "BT",
				quote:
					"Their ETL pipelines and analytics platform unified our data from multiple sources and significantly accelerated our research cycles for strategy development.",
				author: "Head of Data Science",
				position: "Technology Firm",
			},
			{
				client: "Information Management Company",
				logo: "PM",
				quote:
					"The predictive modeling and ETL pipelines enhanced our performance and streamlined research workflows, giving us a significant edge in the market.",
				author: "Analytics Director",
				position: "Information Services",
			},
			{
				client: "Technology Company",
				logo: "AT",
				quote:
					"The automated algorithms and system integrations engineered by The Quant Labs increased our processing throughput and system reliability substantially.",
				author: "CTO",
				position: "Software Company",
			},
		],
	},
	{
		id: "industry",
		title: "Industry Case Studies",
		testimonials: [
			{
				client: "Resource Management",
				logo: "EM",
				quote:
					"The Python-based ETL system and Laravel web application provided real-time data visualization, tracking, and management tools that improved our decision-making and operational efficiency.",
				author: "Head of Operations",
				position: "Resource Management Company",
			},
			{
				client: "Health-Tech Startup",
				logo: "HD",
				quote:
					"Their health metrics analytics and privacy-preserving synthetic data generation tools enabled accurate health score modeling and improved user engagement through data-driven recommendations.",
				author: "Product Director",
				position: "Health Analytics Platform",
			},
			{
				client: "Data Science Team",
				logo: "ML",
				quote:
					"The end-to-end data engineering and ML pipelines designed by The Quant Labs automated our analytics workflows and accelerated data-driven decision-making across the organization.",
				author: "Data Science Lead",
				position: "Technology Company",
			},
			{
				client: "Manufacturing Company",
				logo: "SE",
				quote:
					"The advanced numerical models and automation scripts for data processing improved our modeling accuracy and reduced simulation turnaround times for component optimization.",
				author: "R&D Director",
				position: "Manufacturing Company",
			},
		],
	},
];

const Testimonials = () => {
	return (
		<section id="testimonials" className="py-20 bg-gray-50">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
						Projects & Case Studies
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Explore how we've helped leading organizations transform their
						operations through advanced quantitative methods and data science.
					</p>
				</div>

				<Tabs defaultValue="technology" className="max-w-5xl mx-auto">
					<div className="flex justify-center mb-8">
						<TabsList>
							<TabsTrigger value="technology" className="text-lg px-6 py-3">
								Technology
							</TabsTrigger>
							<TabsTrigger value="industry" className="text-lg px-6 py-3">
								Industry
							</TabsTrigger>
						</TabsList>
					</div>

					{testimonialsData.map((category) => (
						<TabsContent key={category.id} value={category.id}>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
								{category.testimonials.map((item, index) => (
									<Card
										key={index}
										className="border border-gray-200 shadow-md overflow-hidden"
									>
										<CardContent className="p-0">
											<div className="bg-gradient-to-r from-datablue-600 to-datateal-600 py-4 px-6">
												<div className="flex items-center justify-between">
													<h4 className="text-white font-bold text-xl">
														{item.client}
													</h4>
													<div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white font-bold">
														{item.logo}
													</div>
												</div>
											</div>
											<div className="p-6">
												<blockquote className="text-gray-700 italic mb-6">
													"{item.quote}"
												</blockquote>
												<div>
													<p className="font-semibold text-gray-900">
														{item.author}
													</p>
													<p className="text-gray-500 text-sm">
														{item.position}
													</p>
												</div>
											</div>
										</CardContent>
									</Card>
								))}
							</div>
						</TabsContent>
					))}
				</Tabs>
			</div>
		</section>
	);
};

export default Testimonials;
