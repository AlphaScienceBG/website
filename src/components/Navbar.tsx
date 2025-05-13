import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-30 py-4 shadow-sm">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="flex items-center">
                        <div class="bg-datablue-600 p-2 rounded-md mr-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="lucide lucide-chart-no-axes-column-increasing text-white"
                                data-lov-id="src/components/Navbar.tsx:15:14"
                                data-lov-name="BarChart"
                                data-component-path="src/components/Navbar.tsx"
                                data-component-line="15"
                                data-component-file="Navbar.tsx"
                                data-component-name="BarChart"
                                data-component-content="%7B%22className%22%3A%22text-white%22%7D"
                            >
                                <line x1="12" x2="12" y1="20" y2="10"></line>
                                <line x1="18" x2="18" y1="20" y2="4"></line>
                                <line x1="6" x2="6" y1="20" y2="16"></line>
                            </svg>
                        </div>
                        <div>
                            <span className="text-2xl font-bold text-datablue-700">
                                The <span className="text-datateal-600">Quant Labs</span>
                            </span>
                            <p className="text-xs text-gray-600 italic">
                                Just give us the data we will figure it out
                            </p>
                        </div>
                    </div>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex space-x-8 items-center">
                    <a
                        href="#services"
                        className="text-gray-700 hover:text-datablue-600 transition-colors font-medium"
                    >
                        Services
                    </a>
                    <a
                        href="#industries"
                        className="text-gray-700 hover:text-datablue-600 transition-colors font-medium"
                    >
                        Solutions
                    </a>
                    <a
                        href="#expertise"
                        className="text-gray-700 hover:text-datablue-600 transition-colors font-medium"
                    >
                        Expertise
                    </a>
                    <a
                        href="#testimonials"
                        className="text-gray-700 hover:text-datablue-600 transition-colors font-medium"
                    >
                        Case Studies
                    </a>
                    <Button className="bg-datablue-600 hover:bg-datablue-700">
                        <a href="#contact">Contact Us</a>
                    </Button>
                </div>

                {/* Mobile Nav Button */}
                <div className="md:hidden">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </Button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden fixed inset-0 top-16 bg-white z-20 px-4 py-8">
                    <div className="flex flex-col space-y-6 text-center text-lg">
                        <a
                            href="#services"
                            className="text-gray-700 hover:text-datablue-600 transition-colors py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Services
                        </a>
                        <a
                            href="#industries"
                            className="text-gray-700 hover:text-datablue-600 transition-colors py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Industries
                        </a>
                        <a
                            href="#expertise"
                            className="text-gray-700 hover:text-datablue-600 transition-colors py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Expertise
                        </a>
                        <a
                            href="#testimonials"
                            className="text-gray-700 hover:text-datablue-600 transition-colors py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Case Studies
                        </a>
                        <Button
                            className="bg-datablue-600 hover:bg-datablue-700 mx-auto"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <a href="#contact">Contact Us</a>
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
