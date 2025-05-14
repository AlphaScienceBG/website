import { Button } from "@/components/ui/button";

const Hero = () => {
	return (
		<section className="relative bg-gradient-to-br from-datablue-900 to-datateal-900 text-white py-20 lg:py-32 overflow-hidden">
			{/* Abstract Data Background Pattern */}
			<div className="absolute inset-0 opacity-10">
				<div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-datateal-400" />
				<div className="absolute top-40 right-20 w-60 h-60 rounded-full bg-datagold-400" />
				<div className="absolute bottom-10 left-1/3 w-80 h-80 rounded-full bg-datablue-400" />
			</div>

			<div className="container mx-auto px-4 relative z-10">
				<div className="max-w-4xl mx-auto text-center">
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
						Advanced Data Science Solutions For Complex Problems
					</h1>
					<p className="text-xl md:text-2xl mb-4 text-gray-200 max-w-2xl mx-auto">
						Just give us the data we will figure it out
					</p>
					<p className="text-lg mb-10 text-gray-300 max-w-2xl mx-auto">
						Specialized data science solutions for finance and energy sectors,
						turning complex data streams into actionable intelligence.
					</p>
					<div className="flex flex-col sm:flex-row justify-center gap-4">
						<Button
							size="lg"
							className="bg-datagold-500 hover:bg-datagold-600 text-black font-medium text-lg"
						>
							<a href="#contact">Schedule a Consultation</a>
						</Button>
						<Button
							size="lg"
							variant="outline"
							className="border-white text-black hover:bg-white/20 font-medium text-lg"
						>
							<a href="#services">Explore Our Services</a>
						</Button>
					</div>
				</div>
			</div>

			{/* Stats Bar */}
			<div className="bg-white/10 backdrop-blur-md py-6 mt-16 md:mt-24">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
						<div>
							<p className="text-3xl md:text-4xl font-bold text-datagold-300">
								15+
							</p>
							<p className="text-sm md:text-base text-gray-300">
								Major Projects
							</p>
						</div>
						<div>
							<p className="text-3xl md:text-4xl font-bold text-datagold-300">
								$3.2B
							</p>
							<p className="text-sm md:text-base text-gray-300">
								Data Analyzed
							</p>
						</div>
						<div>
							<p className="text-3xl md:text-4xl font-bold text-datagold-300">
								20+
							</p>
							<p className="text-sm md:text-base text-gray-300">
								Enterprise Clients
							</p>
						</div>
						<div>
							<p className="text-3xl md:text-4xl font-bold text-datagold-300">
								30+
							</p>
							<p className="text-sm md:text-base text-gray-300">
								Years of Excellence
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
