
import React, { useState, useEffect } from 'react';
import { ContactFormData, ShiftingType } from '../types';
import { CONTACT_DETAILS } from '../constants';
import { MapPin, Phone, Mail } from '../components/Icons';
import AnimatedSection from '../components/AnimatedSection';

const ContactPage: React.FC = () => {
    useEffect(() => {
        document.title = 'Contact Us | Indian Packers and Movers';
    }, []);

  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    phone: '',
    pickupLocation: '',
    dropLocation: '',
    shiftingType: ShiftingType.HOME,
    shiftingDate: '',
    message: '',
  });

  const [status, setStatus] = useState<{ type: 'success' | 'error' | 'idle'; message: string }>({
    type: 'idle',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.phone || !formData.pickupLocation || !formData.dropLocation) {
        setStatus({ type: 'error', message: 'Please fill in all required fields.'});
        return;
    }
    
    setStatus({ type: 'idle', message: 'Submitting...' });
    
    // **Backend Integration Placeholder**
    // In a real application, you would send this data to a backend endpoint.
    // This endpoint would then process the data, save it to Google Sheets, and send an email.
    // For this example, we will simulate a successful submission.
    console.log('Form Data Submitted:', formData);
    
    setTimeout(() => {
      setStatus({ type: 'success', message: 'Thank you! We have received your request and will contact you shortly.' });
      setFormData({
        fullName: '', phone: '', pickupLocation: '', dropLocation: '',
        shiftingType: ShiftingType.HOME, shiftingDate: '', message: '',
      });
    }, 1500);
  };

  return (
    <div>
      {/* Page Header */}
      <header className="bg-gradient-to-r from-blue-700 to-blue-400 text-white py-20 text-center">
        <h1 className="text-4xl font-bold">Get in Touch</h1>
        <p className="text-xl mt-2">We're here to help you with your move. Contact us today!</p>
      </header>

      <AnimatedSection className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Request a Free Quote</h2>
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" />
                  <input type="tel" name="phone" placeholder="Phone Number*" value={formData.phone} onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" />
                  <input type="text" name="pickupLocation" placeholder="Pickup Location*" value={formData.pickupLocation} onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" />
                  <input type="text" name="dropLocation" placeholder="Drop Location*" value={formData.dropLocation} onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" />
                  <select name="shiftingType" value={formData.shiftingType} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500">
                    {Object.values(ShiftingType).map(type => <option key={type} value={type}>{type} Shifting</option>)}
                  </select>
                  <input type="date" name="shiftingDate" value={formData.shiftingDate} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 text-gray-500" />
                </div>
                <textarea name="message" placeholder="Additional Message" value={formData.message} onChange={handleChange} rows={4} className="w-full p-3 border border-gray-300 rounded-md mb-6 focus:ring-2 focus:ring-blue-500"></textarea>
                <button type="submit" className="w-full bg-secondary text-white py-3 rounded-md font-bold text-lg hover:bg-primary transition-colors">Submit Request</button>
                {status.message && (
                  <p className={`mt-4 text-center ${status.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                    {status.message}
                  </p>
                )}
              </form>
            </div>

            {/* Contact Details & Map */}
            <div className="space-y-8">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold mb-4">Direct Contact</h3>
                    <ul className="space-y-4 text-gray-600">
                        <li className="flex items-start"><MapPin className="h-6 w-6 mr-4 text-secondary flex-shrink-0" />{CONTACT_DETAILS.address}</li>
                        <li className="flex items-center"><Phone className="h-6 w-6 mr-4 text-secondary" /><a href={`tel:${CONTACT_DETAILS.phone}`} className="hover:text-primary">{CONTACT_DETAILS.phone}</a></li>
                        <li className="flex items-center"><Mail className="h-6 w-6 mr-4 text-secondary" /><a href={`mailto:${CONTACT_DETAILS.email}`} className="hover:text-primary">{CONTACT_DETAILS.email}</a></li>
                    </ul>
                </div>
                <div className="rounded-lg shadow-lg overflow-hidden">
                   <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.583957262963!2d79.30906801482163!3d16.57728798862143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a350f5a77777777%3A0x1c8f8b8a7b3b3e3e!2sAndhra%20Pradesh!5e0!3m2!1sen!2sin!4v1678886400000"
                        width="100%"
                        height="250"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Our Location in Andhra Pradesh"
                    ></iframe>
                </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default ContactPage;
