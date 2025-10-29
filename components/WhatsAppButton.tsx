
import React from 'react';
import { WhatsApp } from './Icons';

interface WhatsAppButtonProps {
  phoneNumber: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phoneNumber }) => {
  const message = "Hello! I'm interested in your packers and movers services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg z-40 hover:bg-green-600 transition-all duration-300 transform hover:scale-110 animate-float"
      aria-label="Chat with us on WhatsApp"
    >
      <WhatsApp className="w-8 h-8" />
    </a>
  );
};

export default WhatsAppButton;
