import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Search } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const faqs = [
    {
      id: 1,
      category: 'General',
      question: 'What services does MyBusiness offer?',
      answer: 'We offer comprehensive digital solutions including web development (MERN stack, WordPress), mobile app development (React Native, Flutter), graphic design, SEO optimization, and job consultancy services. Our team specializes in creating custom solutions tailored to your business needs.'
    },
    {
      id: 2,
      category: 'Web Development',
      question: 'What technologies do you use for web development?',
      answer: 'We primarily use the MERN stack (MongoDB, Express.js, React, Node.js) for modern web applications. We also work with WordPress for content management systems, and other technologies like PHP, Python, and various databases depending on project requirements.'
    },
    {
      id: 3,
      category: 'Pricing',
      question: 'How much do your services cost?',
      answer: 'Our pricing varies based on project complexity and requirements. Web development starts at $999, mobile apps at $1,999, graphic design at $299, SEO services at $599, and job consultancy at $199. We provide detailed quotes after understanding your specific needs during our free consultation.'
    },
    {
      id: 4,
      category: 'Timeline',
      question: 'How long does it take to complete a project?',
      answer: 'Project timelines depend on scope and complexity. Typical timeframes are: Web development (2-4 weeks), Mobile apps (4-8 weeks), Graphic design (1-2 weeks), SEO optimization (3-6 months for results), and Job consultancy (1-3 months). We provide detailed timelines during project planning.'
    },
    {
      id: 5,
      category: 'Mobile Development',
      question: 'Do you develop both iOS and Android apps?',
      answer: 'Yes, we develop for both iOS and Android platforms. We offer native development for each platform as well as cross-platform solutions using React Native and Flutter, which can significantly reduce development time and costs while maintaining high performance.'
    },
    {
      id: 6,
      category: 'Support',
      question: 'Do you provide ongoing support and maintenance?',
      answer: 'Absolutely! We offer comprehensive support and maintenance packages for all our projects. This includes regular updates, security patches, bug fixes, performance optimization, and technical support. Our support is available 24/7 to ensure your digital assets run smoothly.'
    },
    {
      id: 7,
      category: 'SEO',
      question: 'How long does it take to see SEO results?',
      answer: 'SEO is a long-term strategy. While some improvements can be seen within 1-2 months, significant results typically take 3-6 months. Factors affecting timeline include competition, current website status, and target keywords. We provide monthly reports to track progress.'
    },
    {
      id: 8,
      category: 'Design',
      question: 'What design services do you offer?',
      answer: 'Our design services include logo design, brand identity development, UI/UX design, print design, digital graphics, marketing materials, and complete brand guidelines. We work closely with clients to ensure designs align with their brand vision and business goals.'
    },
    {
      id: 9,
      category: 'Process',
      question: 'What is your development process?',
      answer: 'Our process includes 4 main phases: 1) Discovery - Understanding your needs and goals, 2) Strategy - Creating a customized plan and roadmap, 3) Development - Building your solution with regular updates, 4) Launch - Deployment and ongoing support. We maintain transparent communication throughout.'
    },
    {
      id: 10,
      category: 'Payment',
      question: 'What are your payment terms?',
      answer: 'We typically work with a 50% upfront payment and 50% upon completion for smaller projects. For larger projects, we can arrange milestone-based payments. We accept bank transfers, credit cards, PayPal, and offer flexible payment plans for enterprise clients.'
    },
    {
      id: 11,
      category: 'Job Consultancy',
      question: 'How does your job consultancy service work?',
      answer: 'Our job consultancy includes career counseling, resume optimization, interview preparation, skill assessment, and job placement assistance. We work with you to identify career goals, improve your professional profile, and connect you with relevant opportunities in the tech industry.'
    },
    {
      id: 12,
      category: 'Communication',
      question: 'How do you communicate during projects?',
      answer: 'We maintain regular communication through email, video calls, project management tools, and our client portal. You\'ll receive weekly progress updates, and we\'re always available for questions. We also offer real-time chat support for urgent matters.'
    }
  ];

  const categories = ['All', ...Array.from(new Set(faqs.map(faq => faq.category)))];

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <HelpCircle className="w-16 h-16 mx-auto mb-6 text-purple-300" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">
            Find answers to common questions about our services, process, and policies.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-2xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
              placeholder="Search for answers..."
            />
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 bg-white text-gray-700 rounded-full hover:bg-purple-100 hover:text-purple-700 transition-colors font-medium"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Items */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {filteredFaqs.map((faq) => (
              <div key={faq.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                        {faq.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="flex-shrink-0">
                    {openItems.includes(faq.id) ? (
                      <ChevronUp className="w-6 h-6 text-purple-600" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                </button>
                
                {openItems.includes(faq.id) && (
                  <div className="px-8 pb-6">
                    <div className="border-t border-gray-200 pt-6">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
              <p className="text-gray-600">
                Try adjusting your search terms or browse all categories above.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Can't find the answer you're looking for? Our team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
            >
              Contact Support
            </a>
            <a
              href="https://wa.me/15551234567"
              className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Quick Links
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Getting Started</h3>
              <p className="text-gray-600 mb-4">Learn how to begin your project with us</p>
              <a href="/services" className="text-purple-600 hover:text-purple-700 font-medium">
                View Services →
              </a>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Process</h3>
              <p className="text-gray-600 mb-4">Understand how we work on projects</p>
              <a href="/about" className="text-blue-600 hover:text-blue-700 font-medium">
                Learn More →
              </a>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Support Center</h3>
              <p className="text-gray-600 mb-4">Get help with your existing projects</p>
              <a href="/contact" className="text-green-600 hover:text-green-700 font-medium">
                Get Support →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;