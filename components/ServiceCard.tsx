
import React from 'react';
import { Service } from '../types';
import { Link } from 'react-router-dom';
import { ArrowRight } from './Icons';

interface ServiceCardProps {
  service: Service;
  showLink?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, showLink = false }) => {
  const { icon: Icon, title, description } = service;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
      <div className="flex-shrink-0">
        <div className="bg-blue-100 text-secondary w-16 h-16 rounded-full flex items-center justify-center mb-4">
          <Icon className="w-8 h-8" />
        </div>
      </div>
      <div className="flex-grow">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      {showLink && (
        <div className="mt-4">
            <Link to="/contact" className="text-secondary font-semibold hover:text-primary flex items-center">
                Get Service <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
