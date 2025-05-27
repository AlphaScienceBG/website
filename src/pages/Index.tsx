import Contact from "@/components/Contact";
import Expertise from "@/components/Expertise";
import Footer from "@/components/Footer";
import Home from "@/components/Home";
import Industries from "@/components/Industries";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import AboutUs from "@/components/AboutUs";

const Index = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <Home />
            <Services />
            <Industries />
            <Expertise />
            <CaseStudies />
            <AboutUs />
            <Contact />
            <Footer />
        </div>
    );
};

export default Index;
