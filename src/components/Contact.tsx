import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
	return (
		<section id="contact" className="py-20 bg-white">
			<div className="container mx-auto px-4">
				<div className="max-w-5xl mx-auto">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
						<div>
							<h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
							<p className="text-lg text-gray-600 mb-8">
								Ready to transform your data into strategic insights? Contact us
								to schedule a consultation with our expert team.
							</p>

							<div className="space-y-6">
								<div className="flex items-start">
									<div className="flex-shrink-0 bg-datablue-100 p-3 rounded-full mr-4">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={1.5}
											stroke="currentColor"
											className="w-6 h-6 text-datablue-600"
										>
											<title>X</title>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
											/>
										</svg>
									</div>
									<div>
										<h4 className="text-lg font-semibold">Email Us</h4>
										<p className="text-gray-600">contact@thequantlabs.com</p>
									</div>
								</div>

								<div className="flex items-start">
									<div className="flex-shrink-0 bg-datateal-100 p-3 rounded-full mr-4">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={1.5}
											stroke="currentColor"
											className="w-6 h-6 text-datateal-600"
										>
											<title>X</title>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
											/>
										</svg>
									</div>
									<div>
										<h4 className="text-lg font-semibold">Call Us</h4>
										<p className="text-gray-600">+359 (888) 681 896</p>
									</div>
								</div>

								<div className="flex items-start">
									<div className="flex-shrink-0 bg-datagold-100 p-3 rounded-full mr-4">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={1.5}
											stroke="currentColor"
											className="w-6 h-6 text-datagold-600"
										>
											<title>X</title>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
											/>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
											/>
										</svg>
									</div>
									<div>
										<h4 className="text-lg font-semibold">Visit Us</h4>
										<p className="text-gray-600">
											ul. Lavele 19
											<br />
											1000 Sofia
										</p>
									</div>
								</div>
							</div>
						</div>

						<div>
							<form
								name="contact"
								method="POST"
								data-netlify="true"
								className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm"
							>
								<input type="hidden" name="form-name" value="contact" />
								<h3 className="text-2xl font-semibold mb-6">
									Request a Consultation
								</h3>

								<div className="space-y-4">
									<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
										<div className="space-y-2">
											<Label htmlFor="name">Full Name</Label>
											<Input
												id="name"
												name="name"
												type="text"
												required
												placeholder="John Smith"
											/>
										</div>

										<div className="space-y-2">
											<Label htmlFor="email">Email</Label>
											<Input
												id="email"
												name="email"
												type="email"
												required
												placeholder="john@company.com"
											/>
										</div>
									</div>

									<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
										<div className="space-y-2">
											<Label htmlFor="company">Company</Label>
											<Input
												id="company"
												name="company"
												required
												placeholder="Your Company"
											/>
										</div>
									</div>

									<div className="space-y-2">
										<Label htmlFor="message">Message</Label>
										<Textarea
											id="message"
											name="message"
											required
											placeholder="Tell us about your data challenges"
											className="min-h-[120px]"
										/>
									</div>

									<Button
										type="submit"
										className="w-full bg-datablue-600 hover:bg-datablue-700"
									>
										Submit Request
									</Button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
