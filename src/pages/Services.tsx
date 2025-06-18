import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Smartphone, Palette, Search, Users, ArrowRight, CheckCircle, Star } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: 'Web Development',
      description: 'Create powerful, responsive websites that drive engagement and conversions.',
      features: [
        'MERN Stack Development',
        'WordPress Development',
        'E-commerce Solutions',
        'Custom Web Applications',
        'Responsive Design',
        'Performance Optimization'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'WordPress', 'PHP', 'JavaScript'],
      startingPrice: '$999',
      timeline: '2-4 weeks',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: 'App Development',
      description: 'Build native and cross-platform mobile applications for iOS and Android.',
      features: [
        'Native iOS Development',
        'Native Android Development',
        'React Native Apps',
        'Flutter Development',
        'App Store Optimization',
        'Push Notifications'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Redux'],
      startingPrice: '$1,999',
      timeline: '4-8 weeks',
      gradient: 'from-green-500 to-blue-600'
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: 'Graphic Design',
      description: 'Create stunning visual identities that capture your brand essence.',
      features: [
        'Logo Design',
        'Brand Identity',
        'Print Design',
        'Digital Graphics',
        'UI/UX Design',
        'Marketing Materials'
      ],
      technologies: ['Photoshop', 'Illustrator', 'Figma', 'InDesign', 'After Effects', 'Sketch'],
      startingPrice: '$299',
      timeline: '1-2 weeks',
      gradient: 'from-pink-500 to-purple-600'
    },
    {
      icon: <Search className="w-12 h-12" />,
      title: 'SEO Optimization',
      description: 'Boost your online visibility and drive organic traffic to your website.',
      features: [
        'Keyword Research',
        'On-Page SEO',
        'Technical SEO',
        'Content Optimization',
        'Link Building',
        'Analytics & Reporting'
      ],
      technologies: ['Google Analytics', 'SEMrush', 'Ahrefs', 'Search Console', 'Screaming Frog'],
      startingPrice: '$599',
      timeline: '3-6 months',
      gradient: 'from-orange-500 to-red-600'
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Job Consultancy',
      description: 'Expert career guidance and job placement services for professionals.',
      features: [
        'Career Counseling',
        'Resume Building',
        'Interview Preparation',
        'Job Placement',
        'Skill Assessment',
        'Industry Insights'
      ],
      technologies: ['LinkedIn', 'Indeed', 'Glassdoor', 'ATS Systems', 'Career Platforms'],
      startingPrice: '$199',
      timeline: '1-3 months',
      gradient: 'from-teal-500 to-blue-600'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We understand your business needs and goals through detailed consultation.'
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'We create a customized strategy and roadmap for your project.'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Our expert team brings your vision to life with cutting-edge technology.'
    },
    {
      step: '04',
      title: 'Launch',
      description: 'We deploy your project and provide ongoing support and maintenance.'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">
            Comprehensive digital solutions to transform your business and drive growth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.gradient} text-white mb-6`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                    <div className="space-y-2">
                      {service.technologies.map((tech, idx) => (
                        <span key={idx} className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl mb-6">
                  <div>
                    <div className="text-sm text-gray-600">Starting at</div>
                    <div className="text-2xl font-bold text-purple-600">{service.startingPrice}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Timeline</div>
                    <div className="text-lg font-semibold text-gray-900">{service.timeline}</div>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <Link
                    to="/contact"
                    className={`flex-1 bg-gradient-to-r ${service.gradient} text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity text-center`}
                  >
                    Get Quote
                  </Link>
                  <Link
                    to="/contact"
                    className="flex-1 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:border-purple-500 hover:text-purple-600 transition-colors text-center"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure your project's success from start to finish.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                    {item.step}
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 transform -translate-y-1/2"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose MyBusiness?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Team</h3>
                    <p className="text-gray-600">Our skilled professionals have years of experience in their respective fields.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Assurance</h3>
                    <p className="text-gray-600">We maintain the highest standards of quality in every project we deliver.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Timely Delivery</h3>
                    <p className="text-gray-600">We respect deadlines and deliver projects on time, every time.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>
                    <p className="text-gray-600">Our support team is always available to help you when you need it.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Let's discuss your project requirements and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/portfolio"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;