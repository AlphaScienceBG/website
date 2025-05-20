const AboutUs = () => {
  return (
    <section
      id="aboutus"
      className="py-20 bg-gradient-to-br from-gray-900 to-datablue-900 text-white"
    >
      <link rel="stylesheet" href="/src/styles.css" />
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Who we are</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Vlado */}
          <div className="bg-white rounded-lg shadow-md p-6 centered">
            <div className="rounded-image">
              <img src="/public/images/vlado.jpeg" />
            </div>
            <p className="text-gray-700 text-lg">
              Placeholder paragraph for team member 1. Add a short bio here.
            </p>
          </div>

          {/* Hristo H */}
          <div className="bg-white rounded-lg shadow-md p-6 centered">
            <div className="rounded-image">
              <img src="/public/images/hristoh.jpeg" />
            </div>
            <p className="text-gray-700 text-lg">
              Placeholder paragraph for team member 2. Add a short bio here.
            </p>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white rounded-lg shadow-md p-6 centered">
            <div className="rounded-image">
              <img src="/public/images/hristog.png" />
            </div>
            <p className="text-gray-700 text-lg">
              <b>Simulation Engineer</b> and <b>Data Scientist</b> in multiple
              fields:
              <ul className="fa-bullets">
                <li>- Aerospace and Defense</li>
                <li>- Materials Research</li>
                <li>- Nuclear Power Plant Safety</li>
                <li>- Semiconductors</li>
                <li>- Financial Sector</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
