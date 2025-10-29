
import React, { useEffect } from 'react';
import AnimatedSection from '../components/AnimatedSection';

const AboutPage: React.FC = () => {
   useEffect(() => {
    document.title = 'About Us | Indian Packers and Movers';
  }, []);

  return (
    <div className="bg-white">
      {/* Page Header */}
      <header className="bg-gradient-to-r from-blue-700 to-blue-400 text-white py-20 text-center">
        <h1 className="text-4xl font-bold">About Indian Packers and Movers</h1>
        <p className="text-xl mt-2">Your Trusted Partner in Relocation</p>
      </header>

      {/* Company Introduction */}
      <AnimatedSection className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Building Trust, One Move at a Time</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Founded with the vision of making relocation a stress-free experience, Indian Packers and Movers has grown into one of the country's most reliable moving companies. We understand that moving is more than just transporting goods; it's about moving lives, memories, and dreams.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our team of dedicated professionals is trained to handle every aspect of your move with the utmost care and precision. From meticulous packing to safe transportation and timely delivery, we ensure a seamless transition to your new home or office.
              </p>
            </div>
            <div>
              <img src="https://picsum.photos/seed/team/600/400" alt="Our professional team" className="rounded-lg shadow-xl" loading="lazy" />
            </div>
          </div>
        </div>
      </AnimatedSection>
      
      {/* Mission & Vision */}
      <AnimatedSection className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-8 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-secondary mb-3">Our Mission</h3>
              <p className="text-gray-600">
                To provide exceptional, affordable, and reliable packing and moving services that exceed customer expectations, ensuring 100% satisfaction and peace of mind.
              </p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-primary mb-3">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading packers and movers company in India, renowned for our quality of service, operational excellence, and unwavering commitment to our clients.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Packing Process Photos */}
      <AnimatedSection className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Our Quality Packing Process</h2>
            <p className="text-lg text-gray-600 mt-2">We use the best materials to protect your valuables.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <img src="https://picsum.photos/seed/pack1/600/400" alt="Packing fragile items" className="rounded-lg shadow-md w-full h-64 object-cover" loading="lazy" />
            <img src="https://picsum.photos/seed/pack2/600/400" alt="Loading packed boxes into a truck" className="rounded-lg shadow-md w-full h-64 object-cover" loading="lazy" />
            <img src="https://picsum.photos/seed/pack3/600/400" alt="Securing furniture with blankets" className="rounded-lg shadow-md w-full h-64 object-cover" loading="lazy" />
          </div>
        </div>
      </AnimatedSection>
      
      {/* PAN India + AP Focus */}
      <AnimatedSection className="py-20 bg-blue-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Serving All of India, Mastering Andhra Pradesh</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                While our network spans the entire nation, we have a deep-rooted presence and specialized expertise in serving the cities and towns of Andhra Pradesh. Whether you're moving locally within AP or relocating across the country, we have the local knowledge and national reach to make it happen flawlessly.
              </p>
          </div>
      </AnimatedSection>

    </div>
  );
};

export default AboutPage;
