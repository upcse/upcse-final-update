import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Facebook, Instagram, Twitter } from 'lucide-react';
import { ASSET_PATHS } from '../lib/assets';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white mt-16">
      {/* Footer Top */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src={ASSET_PATHS.logos.main}
              alt="UPCSE Logo"
              className="h-16"
            />
            <span className="ml-4 text-2xl font-bold animate-blink">UPCSE</span>
          </div>
          
          <h2 className="text-2xl font-bold text-center">
            Uttar Pradesh Council for Sports & Education
          </h2>
          
          <div className="flex space-x-6">
            <a href="https://facebook.com/upcse" target="_blank" rel="noopener noreferrer">
              <Facebook className="h-6 w-6 hover:text-blue-500 transition-colors" />
            </a>
            <a href="https://instagram.com/upcse" target="_blank" rel="noopener noreferrer">
              <Instagram className="h-6 w-6 hover:text-pink-500 transition-colors" />
            </a>
            <a href="https://twitter.com/upcse" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-6 w-6 hover:text-blue-400 transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Middle */}
      <div className="container mx-auto px-4 py-8 border-t border-gray-800">
        <div className="grid grid-cols-3 gap-8">
          <div>
            <p className="text-gray-300 mt-4">
              Promoting sports and education at the grassroots level since 2017.
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="hover:text-[#FF9933] transition-colors">Home</Link>
              <Link to="/about" className="hover:text-[#FF9933] transition-colors">About UPCSE</Link>
              <Link to="/gallery" className="hover:text-[#FF9933] transition-colors">Gallery</Link>
              <Link to="/student-records" className="hover:text-[#FF9933] transition-colors">Student Records</Link>
              <Link to="/district-secretaries" className="hover:text-[#FF9933] transition-colors">District Secretaries</Link>
            </nav>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <p className="flex items-start">
                <MapPin className="h-6 w-6 mr-2 flex-shrink-0" />
                <span>733/C, Bicchiya Sarvodaya Nagar, Near PAC Camp, Gorakhpur, Uttar Pradesh, India - 273014</span>
              </p>
              <p className="flex items-center">
                <Phone className="h-6 w-6 mr-2" />
                <span>+91 8418807808</span>
              </p>
              <p className="flex items-center">
                <Mail className="h-6 w-6 mr-2" />
                <span>info[at]upcse[dot]info</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-black/30 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <p>Copyright © 2025 Uttar Pradesh Council for Sports & Education | All Rights Reserved</p>
          <p>Website developed by Suvrajeet Banerjee</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;