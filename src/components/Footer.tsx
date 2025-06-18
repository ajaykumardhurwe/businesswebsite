import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-teal-900/20 to-cyan-900/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-xl font-bold">MyBusiness</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering businesses with cutting-edge web development, app development, and digital solutions that drive growth and success.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:bg-emerald-500/20 transition-all duration-300 backdrop-blur-sm">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:bg-emerald-500/20 transition-all duration-300 backdrop-blur-sm">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:bg-emerald-500/20 transition-all duration-300 backdrop-blur-sm">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://wa.me/1234567890" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-green-400 hover:bg-green-500/20 transition-all duration-300 backdrop-blur-sm">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'Services', href: '/services' },
                { name: 'About Us', href: '/about' },
                { name: 'Portfolio', href: '/portfolio' },
                { name: 'Blog', href: '/blog' },
                { name: 'Contact', href: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-gray-400 hover:text-emerald-400 transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-3">
              {[
                'Web Development',
                'App Development',
                'Graphic Design',
                'SEO Optimization',
                'Job Consultancy'
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-400 hover:text-emerald-400 transition-colors cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center group-hover:bg-emerald-500/30 transition-all duration-300">
                  <Mail className="w-5 h-5 text-emerald-400" />
                </div>
                <span className="text-gray-400 group-hover:text-emerald-400 transition-colors">
                  info@mybusiness.com
                </span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-teal-500/20 rounded-xl flex items-center justify-center group-hover:bg-teal-500/30 transition-all duration-300">
                  <Phone className="w-5 h-5 text-teal-400" />
                </div>
                <span className="text-gray-400 group-hover:text-teal-400 transition-colors">
                  +1 (555) 123-4567
                </span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-cyan-500/20 rounded-xl flex items-center justify-center group-hover:bg-cyan-500/30 transition-all duration-300">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                </div>
                <span className="text-gray-400 group-hover:text-cyan-400 transition-colors">
                  123 Business St, City, State 12345
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 MyBusiness. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link 
                to="/privacy" 
                className="text-gray-400 hover:text-emerald-400 text-sm transition-all duration-300 hover:translate-x-1"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="text-gray-400 hover:text-emerald-400 text-sm transition-all duration-300 hover:translate-x-1"
              >
                Terms of Service
              </Link>
              <Link 
                to="/faq" 
                className="text-gray-400 hover:text-emerald-400 text-sm transition-all duration-300 hover:translate-x-1"
              >
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;