const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="text-2xl font-bold mb-4">
              The <span className="text-datateal-400">Quant Labs</span>
            </div>
            <p className="text-gray-400 mb-4">
              Specialized quantitative analysis and data science solutions
              driving superior performance and operational efficiency across
              industries.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-white">
                  Quantitative Modeling Systems
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white">
                  Data Engineering
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white">
                  Simulation & Backtesting
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white">
                  Machine Learning & Predictive Analytics
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white">
                  Decision Intelligence Tools
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white">
                  Synthetic Data Generation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Industries</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#casestudies"
                  className="text-gray-400 hover:text-white"
                >
                  Technology
                </a>
              </li>
              <li>
                <a
                  href="#casestudies"
                  className="text-gray-400 hover:text-white"
                >
                  Industry
                </a>
              </li>
              <li>
                <a
                  href="#casestudies"
                  className="text-gray-400 hover:text-white"
                >
                  Case Studies
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#aboutus" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white">Blog</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {currentYear} The Quant Labs. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a className="text-sm text-gray-400 hover:text-white">
              Privacy Policy
            </a>
            <a className="text-sm text-gray-400 hover:text-white">
              Terms of Service
            </a>
            <a className="text-sm text-gray-400 hover:text-white">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
