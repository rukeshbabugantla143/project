
import { Service, Testimonial } from './types';
import { Home, Briefcase, Car, Truck, Package, Archive, ShieldCheck, ArrowRight, CheckCircle, MapPin, Phone, Mail, Clock } from './components/Icons';

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact Us', path: '/contact' },
];

export const SERVICES_DATA: Service[] = [
  { icon: Home, title: 'House Shifting', description: 'Complete household relocation services with safe packing and transport.' },
  { icon: Briefcase, title: 'Office Relocation', description: 'Efficient and systematic office shifting to minimize downtime.' },
  { icon: Car, title: 'Car/Bike Transport', description: 'Secure and timely transportation for your vehicles across India.' },
  { icon: Truck, title: 'Loading/Unloading', description: 'Professional handling of goods by our trained and experienced team.' },
  { icon: Package, title: 'Packing & Unpacking', description: 'We use high-quality packing materials to ensure the safety of your belongings.' },
  { icon: Archive, title: 'Warehousing/Storage', description: 'Safe and secure storage solutions for short-term and long-term needs.' },
  { icon: ShieldCheck, title: 'Insurance Support', description: 'Comprehensive transit insurance to protect your goods against unforeseen events.' },
];

export const WHY_CHOOSE_US_POINTS = [
  { icon: CheckCircle, title: 'Verified Professionals', description: 'Our team consists of skilled and background-checked experts.' },
  { icon: CheckCircle, title: 'Transparent Pricing', description: 'No hidden charges. Get a clear and detailed quote upfront.' },
  { icon: CheckCircle, title: 'On-Time Delivery', description: 'We value your time and ensure timely delivery of your consignment.' },
  { icon: CheckCircle, title: 'PAN India Network', description: 'Extensive network covering every corner of the country.' },
  { icon: CheckCircle, title: 'Quality Packing', description: 'We use premium materials to ensure zero damage to your goods.' },
  { icon: CheckCircle, title: '24/7 Customer Support', description: 'Our team is always available to assist you with your queries.' },
];

export const SHIFTING_PROCESS_STEPS = [
  { number: '01', title: 'Get a Free Quote', description: 'Share your requirements and get a transparent, no-obligation quote from us.' },
  { number: '02', title: 'Schedule Your Move', description: 'Confirm your booking for a date and time that is convenient for you.' },
  { number: '03', title: 'Packing & Loading', description: 'Our expert team arrives on schedule to pack and load your belongings safely.' },
  { number: '04', title: 'Safe Transit & Delivery', description: 'We transport your goods securely and deliver them to your new destination on time.' },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  { quote: "The team was extremely professional and handled all my belongings with care. The move from Hyderabad to Vijayawada was seamless. Highly recommended!", name: 'Ramesh Kumar', location: 'Hyderabad, Telangana' },
  { quote: "Excellent service! They made my office relocation so easy. Everything was well-organized and completed ahead of schedule. Great job!", name: 'Priya Sharma', location: 'Visakhapatnam, Andhra Pradesh' },
  { quote: "I used their service to transport my car from Delhi to Guntur. It arrived without a single scratch. Very reliable and trustworthy company.", name: 'Anil Reddy', location: 'Guntur, Andhra Pradesh' },
];

export const CONTACT_DETAILS = {
  address: "123, Relocation Street, Andhra Pradesh, India",
  phone: "+91 12345 67890",
  email: "contact@indianpackers.com",
};
