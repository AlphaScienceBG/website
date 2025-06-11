import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CaseStudiesData = [
	{
		id: "finance",
		title: "Finance",
		casestudies: [
			{
				topic: "Quantitative Trading Platform for Digital Assets",
				context:
					"A digital asset management firm sought to automate and optimize its trading operations across multiple markets.",
				challenge:
					"The client faced inefficiencies in data collection, model development, and portfolio rebalancing, resulting in missed opportunities and operational risk.",
				solution:
					"We developed a robust end-to-end quantitative trading platform leveraging Python and Dragster. The system automated data ingestion, feature engineering, predictive modeling, and daily portfolio rebalancing. A custom backtesting engine was built to account for trading fees, funding costs, slippage, and market risks.",
				results:
					"The client rapidly deployed and evaluated new strategies, improved portfolio performance, and reduced operational risk.",
			},
			{
				topic: "Crypto Exchange Data Engineering & Backtesting Suite",
				context:
					"A quantitative trading desk required unified data pipelines and reliable backtesting tools to scale its research.",
				challenge:
					"Fragmented exchange data and lack of accurate backtesting limited the team’s ability to iterate on trading strategies.",
				solution:
					"We engineered ETL pipelines to aggregate and standardize data from multiple crypto exchanges and developed a tick-level backtesting platform for directional trading strategies.",
				results:
					"The trading desk accelerated research cycles, improved data quality, and validated strategies with greater confidence.",
			},
			{
				topic: "Equity Trading Strategy Research & Predictive Modeling",
				context:
					"An asset management firm aimed to enhance its equity trading outcomes with advanced analytics.",
				challenge:
					"The firm needed predictive models and robust data infrastructure to support research and trading.",
				solution:
					"We conducted research on equity trading strategies, developed predictive models and ETL pipelines, and ensured best practices in data governance and quality management.",
				results:
					"The firm improved trading performance, streamlined research workflows, and gained a scalable foundation for future analytics.",
			},
			{
				topic: "Energy Market Analytics & Portfolio Management Tools",
				context:
					"An energy trading company required a centralized platform for analytics and portfolio management.",
				challenge:
					"Manual data collection and fragmented tools hindered timely decision-making and risk management.",
				solution:
					"We built a Python-based ETL system for energy data collection and a Laravel web application for real-time price visualization, position tracking, and portfolio management.",
				results:
					"The client improved decision-making, operational efficiency, and risk oversight across diverse energy markets.",
			},
			{
				topic: "Automated Trading Systems & Infrastructure",
				context:
					"A fintech firm needed to scale its automated trading operations across multiple digital asset exchanges.",
				challenge:
					"The client’s legacy systems limited trading throughput and reliability.",
				solution:
					"We engineered automated trading algorithms in Java, integrated with numerous exchange APIs, and contributed to a scalable microservices infrastructure.",
				results:
					"The firm increased trading throughput, improved reliability, and enabled seamless expansion to new markets.",
			},
			{
				topic: "Multi-Asset Risk Management System Enhancement",
				context:
					"A global asset manager with $600bn+ AUM needed to enhance risk systems for asset allocation, fixed income, and equity funds.",
				challenge:
					"Existing systems lacked flexibility and advanced forecasting for commodity-sensitive currencies and FX risks.",
				solution:
					"We enhanced and maintained risk management systems, built ML models utilizing alternative datasets, and evaluated new data science platforms for alpha generation.",
				results:
					"The client improved risk forecasting, adopted innovative data sources, and strengthened portfolio management.",
			}
		],
	},
	{
		id: "data",
		title: "Data",
		casestudies: [
			{
				topic: "Large-Scale Data Processing & Analytics",
				context:
					"Enterprises and open source communities needed scalable big data analytics platforms.",
				challenge:
					"Handling complex, large-scale datasets required high-performance, flexible solutions.",
				solution:
					"We contributed to Apache Spark and Vowpal Wabbit, and developed ontology-driven sub-query extraction and semantic search solutions for distributed resources.",
				results:
					"Clients and communities enhanced big data analytics performance and flexibility.",
			},
			{
				topic: "Cloud-Based Data Engineering & ML",
				context:
					"Enterprises sought robust cloud-based data engineering and machine learning workflows.",
				challenge:
					"Scaling data science operations efficiently in the cloud was a key objective.",
				solution:
					"We implemented distributed data pipelines and cloud analytics using Hadoop and Amazon Cloud, and developed advanced data processing frameworks.",
				results:
					"Clients improved scalability and cost-efficiency of their data science operations.",
			},
			{
				topic: "Data Engineering Workflows",
				context:
					"Organizations across sectors required scalable data engineering and machine learning workflows.",
				challenge:
					"Internal teams lacked the expertise and resources to build robust, automated pipelines.",
				solution:
					"We designed and implemented end-to-end data engineering and ML pipelines using modern Python libraries and cloud platforms.",
				results:
					"Clients automated analytics workflows and accelerated data-driven decision-making.",
			},
			{
				topic: "Health Metrics Analytics & Synthetic Data Generation",
				context:
					"A health-tech company needed to develop new health score models while ensuring user privacy.",
				challenge:
					"The client struggled to build robust analytics and needed privacy-preserving synthetic data for model development.",
				solution:
					"We led health metrics research, engineered a synthetic data generation tool, and translated user data insights into actionable product recommendations. Our team contributed to backend and mobile app development.",
				results:
					"The company launched new health scoring features, improved user engagement, and maintained compliance with privacy standards.",
			},
		],
	},
	{
		id: "engineering",
		title: "Engineering",
		casestudies: [
			{
				topic: "Notification & Workflow Automation for Tech Giants",
				context:
					"Large technology companies required scalable notification and workflow automation tools.",
				challenge:
					"Internal operations needed to support rapid growth and scaling.",
				solution:
					"We designed and implemented notification frameworks for recruiting tools at a global social network and optimized data conversion utilities for a leading search engine’s data warehousing.",
				results:
					"Clients enhanced reliability and efficiency of internal operations.",
			},
			{
				topic: "Weather Derivative Pricing & Demand Modeling",
				context:
					"Energy companies and financial institutions needed to model weather impacts and price weather derivatives accurately.",
				challenge:
					"Modeling demand and pricing derivatives required advanced statistical and computational methods.",
				solution:
					"We built statistical models for temperature time series, priced weather derivatives using density kernels and ensemble methods, and tested new pricing methodologies.",
				results:
					"Clients improved risk management and pricing accuracy for weather-related financial products.",
			},
			{
				topic: "Teaching & Mentorship in Algorithms and Software Engineering",
				context:
					"Universities and organizations aimed to elevate technical skillsets in algorithms and software engineering.",
				challenge:
					"Bridging the gap between theory and practice for students and junior engineers.",
				solution:
					"We delivered practical instruction in advanced algorithms and mentored engineers in software development best practices.",
				results:
					"Clients improved technical capabilities and fostered a culture of innovation.",
			},
			{
				topic: "Simulation Engineering & Automated Data Analysis",
				context:
					"A semiconductor manufacturer needed precise simulation and automated data analysis for EUV lithography component optimization.",
				challenge:
					"Manual modeling and data processing slowed R&D and production.",
				solution:
					"We developed advanced numerical models and Python-based automation scripts for data processing and analysis.",
				results:
					"The client improved modeling accuracy and reduced simulation turnaround times.",
			},
			{
				topic: "Algorithm Optimization & Legacy System Modernization",
				context:
					"Businesses faced challenges modernizing legacy code and extracting business logic for new applications.",
				challenge: "Technical debt and outdated systems limited agility.",
				solution:
					"We improved algorithms for extracting business rules from legacy code and developed frameworks for automated testing and modernization of mobile and web systems.",
				results:
					"Clients reduced technical debt, improved maintainability, and accelerated feature rollout.",
			},
		],
	},
];

const CaseStudies = () => {
	return (
		<section id="casestudies" className="py-20 bg-gray-50">
			<link rel="stylesheet" href="/styles.css" />
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

				<Tabs defaultValue="finance" className="max-w-5xl mx-auto">
					<div className="flex justify-center mb-8">
						<TabsList>
							<TabsTrigger value="finance" className="text-lg px-6 py-3">
								Finance
							</TabsTrigger>
							<TabsTrigger value="data" className="text-lg px-6 py-3">
								Data
							</TabsTrigger>
							<TabsTrigger value="engineering" className="text-lg px-6 py-3">
								Engineering
							</TabsTrigger>
						</TabsList>
					</div>
					{CaseStudiesData.map((category) => (
						<TabsContent key={category.id} value={category.id}>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
								{category.casestudies.map((item, index) => (
									<Card
										key={index}
										className="border border-gray-200 shadow-md overflow-hidden"
									>
										<CardContent className="p-0">
											<div className="bg-gradient-to-r from-datablue-600 to-datateal-600 py-4 px-6 case_study_header">
												<h4 className="text-white font-bold text-xl">
													{item.topic}
												</h4>
											</div>
											<div className="p-2">
												<h3 className="font-bold mb-2">Context:</h3>
												<p className="text-gray-700">{item.context}</p>
											</div>
											<div className="p-2">
												<h3 className="font-bold mb-2">Challenge:</h3>
												<p className="text-gray-700">{item.challenge}</p>
											</div>
											<div className="p-2">
												<h3 className="font-bold mb-2">Solution:</h3>
												<p className="text-gray-700">{item.solution}</p>
											</div>
											<div className="p-2">
												<h3 className="font-bold mb-2">Results:</h3>
												<p className="text-gray-700">{item.results}</p>
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

export default CaseStudies;
