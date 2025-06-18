import React from 'react';
import { FileText, Scale, AlertTriangle, CheckCircle, Mail } from 'lucide-react';

const Terms: React.FC = () => {
  const sections = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Acceptance of Terms',
      content: 'By accessing and using our website and services, you accept and agree to be bound by the terms and provision of this agreement.'
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Services Description',
      content: 'MyBusiness provides web development, mobile app development, graphic design, SEO optimization, and job consultancy services as described on our website.'
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: 'User Responsibilities',
      content: 'Users must provide accurate information, respect intellectual property rights, and use our services in compliance with applicable laws.'
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: 'Limitation of Liability',
      content: 'Our liability is limited to the amount paid for our services. We are not liable for indirect, incidental, or consequential damages.'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Scale className="w-16 h-16 mx-auto mb-6 text-purple-300" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Terms of Service
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">
            Please read these terms carefully before using our services.
          </p>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600">
            <strong>Last Updated:</strong> January 1, 2024
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed">
              These Terms of Service ("Terms") govern your use of the MyBusiness website and services. 
              By accessing or using our services, you agree to be bound by these Terms. If you disagree 
              with any part of these terms, then you may not access our services.
            </p>
          </div>
        </div>
      </section>

      {/* Key Sections Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Terms Overview</h2>
            <p className="text-xl text-gray-600">Important points you should know</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                    {section.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{section.title}</h3>
                </div>
                <p className="text-gray-700">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Terms */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* Services */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Services</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>MyBusiness provides the following services:</p>
                <ul className="mt-4 space-y-2">
                  <li><strong>Web Development:</strong> Custom websites using MERN stack, WordPress, and other technologies</li>
                  <li><strong>Mobile App Development:</strong> Native and cross-platform mobile applications</li>
                  <li><strong>Graphic Design:</strong> Logo design, brand identity, and visual design services</li>
                  <li><strong>SEO Optimization:</strong> Search engine optimization and digital marketing services</li>
                  <li><strong>Job Consultancy:</strong> Career guidance and job placement assistance</li>
                </ul>
                <p className="mt-4">
                  All services are provided subject to availability and our current service offerings. 
                  We reserve the right to modify or discontinue services at any time.
                </p>
              </div>
            </div>

            {/* User Accounts */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">User Accounts</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>When you create an account with us, you must provide accurate and complete information. You are responsible for:</p>
                <ul className="mt-4 space-y-2">
                  <li>Maintaining the confidentiality of your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Notifying us immediately of any unauthorized use</li>
                  <li>Ensuring your contact information remains current</li>
                </ul>
                <p className="mt-4">
                  We reserve the right to suspend or terminate accounts that violate these terms or engage in fraudulent activity.
                </p>
              </div>
            </div>

            {/* Payment Terms */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Payment Terms</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>Payment terms for our services:</p>
                <ul className="mt-4 space-y-2">
                  <li>Prices are quoted in USD and subject to change with notice</li>
                  <li>Payment is typically required 50% upfront and 50% upon completion</li>
                  <li>Larger projects may have milestone-based payment schedules</li>
                  <li>Late payments may incur additional fees</li>
                  <li>Refunds are provided according to our refund policy</li>
                </ul>
                <p className="mt-4">
                  All payments are processed securely through our payment partners. We do not store credit card information.
                </p>
              </div>
            </div>

            {/* Intellectual Property */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Intellectual Property</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>Intellectual property rights are handled as follows:</p>
                <ul className="mt-4 space-y-2">
                  <li>Upon full payment, clients receive ownership of custom work created specifically for them</li>
                  <li>We retain rights to our proprietary tools, frameworks, and methodologies</li>
                  <li>Third-party components remain subject to their respective licenses</li>
                  <li>We may showcase completed work in our portfolio unless otherwise agreed</li>
                </ul>
                <p className="mt-4">
                  Clients must respect intellectual property rights and not use our work for unauthorized purposes.
                </p>
              </div>
            </div>

            {/* Prohibited Uses */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Prohibited Uses</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>You may not use our services for:</p>
                <ul className="mt-4 space-y-2">
                  <li>Any unlawful purpose or to solicit others to perform unlawful acts</li>
                  <li>Violating any international, federal, provincial, or state regulations or laws</li>
                  <li>Infringing upon or violating our intellectual property rights or the intellectual property rights of others</li>
                  <li>Harassing, abusing, insulting, harming, defaming, slandering, disparaging, intimidating, or discriminating</li>
                  <li>Submitting false or misleading information</li>
                  <li>Uploading or transmitting viruses or any other type of malicious code</li>
                </ul>
              </div>
            </div>

            {/* Disclaimers */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Disclaimers</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  Our services are provided "as is" without warranties of any kind, either express or implied. 
                  We do not warrant that:
                </p>
                <ul className="mt-4 space-y-2">
                  <li>Our services will meet your specific requirements</li>
                  <li>Our services will be uninterrupted, timely, secure, or error-free</li>
                  <li>The results obtained from using our services will be accurate or reliable</li>
                  <li>Any errors in our services will be corrected</li>
                </ul>
                <p className="mt-4">
                  We disclaim all warranties, express or implied, including but not limited to implied warranties 
                  of merchantability and fitness for a particular purpose.
                </p>
              </div>
            </div>

            {/* Termination */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Termination</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  We may terminate or suspend your account and access to our services immediately, without prior notice 
                  or liability, for any reason, including but not limited to breach of these Terms.
                </p>
                <p className="mt-4">
                  Upon termination, your right to use our services will cease immediately. If you wish to terminate 
                  your account, you may contact us directly.
                </p>
              </div>
            </div>

            {/* Governing Law */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Governing Law</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  These Terms shall be interpreted and governed by the laws of the State of [Your State], 
                  without regard to its conflict of law provisions. Any disputes arising from these Terms 
                  will be resolved in the courts of [Your Jurisdiction].
                </p>
              </div>
            </div>

            {/* Changes to Terms */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Changes to Terms</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  We reserve the right to modify or replace these Terms at any time. If a revision is material, 
                  we will try to provide at least 30 days notice prior to any new terms taking effect.
                </p>
                <p className="mt-4">
                  Your continued use of our services after any changes constitutes acceptance of the new Terms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Mail className="w-16 h-16 mx-auto mb-6 text-purple-200" />
          <h2 className="text-3xl font-bold mb-6">Questions About These Terms?</h2>
          <p className="text-xl text-purple-100 mb-8">
            If you have any questions about these Terms of Service, please contact us.
          </p>
          <div className="space-y-4">
            <p className="text-lg">
              <strong>Email:</strong> legal@mybusiness.com
            </p>
            <p className="text-lg">
              <strong>Address:</strong> 123 Business Street, City, State 12345
            </p>
            <p className="text-lg">
              <strong>Phone:</strong> +1 (555) 123-4567
            </p>
          </div>
          <div className="mt-8">
            <a
              href="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;