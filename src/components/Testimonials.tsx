
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const testimonialsData = [
  {
    id: "finance",
    title: "Finance Case Studies",
    testimonials: [
      {
        client: "Global Investment Bank",
        logo: "GB",
        quote: "DataNexus provided us with an algorithmic trading platform that increased our trade execution efficiency by 34% and reduced latency to under 10ms.",
        author: "Sarah Chen",
        position: "Chief Technology Officer"
      },
      {
        client: "Hedge Fund Group",
        logo: "HF",
        quote: "The risk assessment models developed by DataNexus identified exposure patterns we'd missed for years, potentially saving us millions in unexpected losses.",
        author: "Mark Reynolds",
        position: "Head of Risk Management"
      }
    ]
  },
  {
    id: "energy",
    title: "Energy Case Studies",
    testimonials: [
      {
        client: "Renewable Energy Corporation",
        logo: "RE",
        quote: "Their predictive maintenance solution reduced our wind farm downtime by 47% and increased annual energy production by 8.3%, significantly boosting our ROI.",
        author: "Elena Rodriguez",
        position: "Operations Director"
      },
      {
        client: "Global Oil & Gas",
        logo: "OG",
        quote: "DataNexus helped us transform our supply chain forecasting with a 92% accuracy rate, optimizing our inventory levels and reducing carrying costs by $14.2M annually.",
        author: "James Wilson",
        position: "VP of Supply Chain"
      }
    ]
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Case Studies</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we've helped leading organizations transform their operations through advanced data science.
          </p>
        </div>

        <Tabs defaultValue="finance" className="max-w-5xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="finance" className="text-lg px-6 py-3">Finance</TabsTrigger>
              <TabsTrigger value="energy" className="text-lg px-6 py-3">Energy</TabsTrigger>
            </TabsList>
          </div>
          
          {testimonialsData.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.testimonials.map((item, index) => (
                  <Card key={index} className="border border-gray-200 shadow-md overflow-hidden">
                    <CardContent className="p-0">
                      <div className="bg-gradient-to-r from-datablue-600 to-datateal-600 py-4 px-6">
                        <div className="flex items-center justify-between">
                          <h4 className="text-white font-bold text-xl">{item.client}</h4>
                          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white font-bold">
                            {item.logo}
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <blockquote className="text-gray-700 italic mb-6">"{item.quote}"</blockquote>
                        <div>
                          <p className="font-semibold text-gray-900">{item.author}</p>
                          <p className="text-gray-500 text-sm">{item.position}</p>
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
