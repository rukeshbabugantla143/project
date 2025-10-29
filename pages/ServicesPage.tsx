
import React, { useEffect } from 'react';
import { SERVICES_DATA } from '../constants';
import ServiceCard from '../components/ServiceCard';
import AnimatedSection from '../components/AnimatedSection';

const ServicesPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Our Services | Indian Packers and Movers';
  }, []);

  return (
    <div className="bg-gray-50">
      {/* Page Header */}
      <header className="bg-gradient-to-r from-blue-700 to-blue-400 text-white py-20 text-center">
        <h1 className="text-4xl font-bold">Our Relocation Services</h1>
        <p className="text-xl mt-2">Tailored solutions for every moving requirement.</p>
      </header>

      {/* Services Grid */}
      <AnimatedSection className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map((service) => (
              <ServiceCard key={service.title} service={service} showLink={true} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Additional Services Info Section */}
       <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Committed to Quality and Safety</h2>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                        At Indian Packers and Movers, we don't just move your goods; we move them with the highest standards of safety and care. We employ modern techniques and high-quality materials to ensure that everything from your delicate glassware to your bulky furniture arrives in perfect condition.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center"><span className="text-secondary font-bold mr-2">✓</span> Multi-layer protective packing</li>
                        <li className="flex items-center"><span className="text-secondary font-bold mr-2">✓</span> Specially designed vehicle carriers</li>
                        <li className="flex items-center"><span className="text-secondary font-bold mr-2">✓</span> GPS-enabled trucks for real-time tracking</li>
                        <li className="flex items-center"><span className="text-secondary font-bold mr-2">✓</span> Trained and courteous staff</li>
                    </ul>
                </div>
                <div>
                    <img src="https://picsum.photos/seed/safety/600/400" alt="Safe handling of goods" className="rounded-lg shadow-xl" loading="lazy" />
                </div>
            </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default ServicesPage;
