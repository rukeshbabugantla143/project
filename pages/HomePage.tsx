
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_DATA, WHY_CHOOSE_US_POINTS, SHIFTING_PROCESS_STEPS, TESTIMONIALS_DATA } from '../constants';
import ServiceCard from '../components/ServiceCard';
import AnimatedSection from '../components/AnimatedSection';

const HomePage: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    document.title = 'Indian Packers and Movers - Safe & Fast Relocation';
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[500px] flex items-center text-white bg-gradient-to-r from-blue-800 to-blue-500">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2')"}}></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-reveal">Indian Packers and Movers</h1>
          <p className="text-xl md:text-2xl mb-8 animate-reveal" style={{animationDelay: '0.3s'}}>Safe • Fast • Hassle-Free Relocation Services</p>
          <div className="flex justify-center space-x-4 animate-reveal" style={{animationDelay: '0.6s'}}>
            <Link to="/contact" className="bg-accent text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-yellow-500 transition-transform duration-300 hover:scale-105">Get Free Quote</Link>
            <Link to="/services" className="bg-white text-primary px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-200 transition-transform duration-300 hover:scale-105">Our Services</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <AnimatedSection className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Why Choose Us?</h2>
            <p className="text-lg text-gray-600 mt-2">Your Most Trusted Moving Partner</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_CHOOSE_US_POINTS.map((point, index) => (
              <div key={index} className="flex items-start p-4">
                <point.icon className="h-8 w-8 text-secondary flex-shrink-0 mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-1">{point.title}</h3>
                  <p className="text-gray-600">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Top Services Section */}
      <AnimatedSection className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Top Services</h2>
            <p className="text-lg text-gray-600 mt-2">Comprehensive solutions for all your moving needs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.slice(0, 3).map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </AnimatedSection>
      
      {/* Shifting Process Section */}
      <AnimatedSection className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Simple 4-Step Process</h2>
            <p className="text-lg text-gray-600 mt-2">Making your move as easy as possible.</p>
          </div>
          <div className="relative">
             <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-blue-200"></div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {SHIFTING_PROCESS_STEPS.map((step, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg relative">
                   <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-secondary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">{step.number}</div>
                   <h3 className="text-xl font-semibold mt-8 mb-2">{step.title}</h3>
                   <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials Slider */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-gray-700 to-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">What Our Customers Say</h2>
            <div className="relative h-48 overflow-hidden">
            {TESTIMONIALS_DATA.map((testimonial, index) => (
                <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentTestimonial ? 'opacity-100' : 'opacity-0'}`}>
                    <p className="text-xl italic mb-4">"{testimonial.quote}"</p>
                    <p className="font-bold text-lg">{testimonial.name}</p>
                    <p className="text-gray-400">{testimonial.location}</p>
                </div>
            ))}
            </div>
        </div>
      </AnimatedSection>

      {/* PAN India Presence */}
      <AnimatedSection className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">PAN India Presence</h2>
            <p className="text-lg text-gray-600 mt-2">Serving you wherever you go, with a special focus on Andhra Pradesh.</p>
          </div>
          <div className="flex justify-center">
            <img src="https://picsum.photos/seed/map/1000/500?grayscale" alt="Map of India highlighting our presence" className="rounded-lg shadow-lg object-cover" loading="lazy" />
          </div>
        </div>
      </AnimatedSection>

       {/* Lead Capture CTA */}
      <AnimatedSection className="py-20 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Ready for a Smooth Move?</h2>
              <p className="text-lg mb-8">Let's get you started. Get a free, no-obligation quote today!</p>
              <Link to="/contact" className="bg-accent text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-500 transition-transform duration-300 hover:scale-105">Request a Callback</Link>
          </div>
      </AnimatedSection>
    </div>
  );
};

export default HomePage;
