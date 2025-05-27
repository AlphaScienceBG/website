import AboutUs from "@/components/AboutUs";
import CaseStudies from "@/components/CaseStudies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Home from "@/components/Home";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";

const Index = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <Home />
            <Services />
            <CaseStudies />
            <AboutUs />
            <Contact />
            <Footer />
        </div>
    );
};

export default Index;
