
import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS, SERVICES_DATA, CONTACT_DETAILS } from '../constants';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Indian Packers and Movers</h3>
            <p className="text-gray-400">
              Your trusted partner for safe, fast, and hassle-free relocation services across India. We are committed to providing top-quality service with a focus on customer satisfaction.
            </p>
            <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-white"><Facebook /></a>
                <a href="#" className="text-gray-400 hover:text-white"><Twitter /></a>
                <a href="#" className="text-gray-400 hover:text-white"><Instagram /></a>
                <a href="#" className="text-gray-400 hover:text-white"><Linkedin /></a>
            </div>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Important Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-white transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {SERVICES_DATA.slice(0, 6).map(service => (
                <li key={service.title}>
                  <Link to="/services" className="text-gray-400 hover:text-white transition-colors">{service.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
             <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
             <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                    <MapPin className="h-5 w-5 mr-3 mt-1 text-secondary flex-shrink-0" />
                    <span>{CONTACT_DETAILS.address}</span>
                </li>
                <li className="flex items-center">
                    <Phone className="h-5 w-5 mr-3 text-secondary" />
                    <a href={`tel:${CONTACT_DETAILS.phone}`} className="hover:text-white">{CONTACT_DETAILS.phone}</a>
                </li>
                <li className="flex items-center">
                    <Mail className="h-5 w-5 mr-3 text-secondary" />
                    <a href={`mailto:${CONTACT_DETAILS.email}`} className="hover:text-white">{CONTACT_DETAILS.email}</a>
                </li>
             </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Indian Packers and Movers. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
