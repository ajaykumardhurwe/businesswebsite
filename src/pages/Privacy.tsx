import React from 'react';
import { Shield, Eye, Lock, Users, FileText, Mail } from 'lucide-react';

const Privacy: React.FC = () => {
  const sections = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Information We Collect',
      content: [
        'Personal information you provide when contacting us or using our services',
        'Technical information about your device and how you use our website',
        'Communication records when you interact with our support team',
        'Project-related information necessary to deliver our services'
      ]
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: 'How We Use Your Information',
      content: [
        'To provide and improve our web development, app development, and design services',
        'To communicate with you about your projects and our services',
        'To send you important updates and marketing communications (with your consent)',
        'To analyze website usage and improve user experience',
        'To comply with legal obligations and protect our rights'
      ]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Information Sharing',
      content: [
        'We do not sell, trade, or rent your personal information to third parties',
        'We may share information with trusted service providers who assist in our operations',
        'We may disclose information when required by law or to protect our rights',
        'Anonymous, aggregated data may be shared for business purposes'
      ]
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: 'Data Security',
      content: [
        'We implement industry-standard security measures to protect your data',
        'All data transmission is encrypted using SSL/TLS protocols',
        'Access to personal information is restricted to authorized personnel only',
        'Regular security audits and updates are performed on our systems'
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Shield className="w-16 h-16 mx-auto mb-6 text-purple-300" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">
            Your privacy is important to us. Learn how we collect, use, and protect your information.
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
              At MyBusiness, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our 
              website or use our services.
            </p>
            <p className="text-gray-600 mt-6">
              By using our website or services, you agree to the collection and use of information in accordance with this policy. 
              If you do not agree with our policies and practices, please do not use our services.
            </p>
          </div>
        </div>
      </section>

      {/* Main Sections */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {sections.map((section, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* Cookies */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Cookies and Tracking Technologies</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  We use cookies and similar tracking technologies to enhance your experience on our website. 
                  Cookies are small data files stored on your device that help us:
                </p>
                <ul className="mt-4 space-y-2">
                  <li>Remember your preferences and settings</li>
                  <li>Analyze website traffic and usage patterns</li>
                  <li>Provide personalized content and advertisements</li>
                  <li>Improve website functionality and performance</li>
                </ul>
                <p className="mt-4">
                  You can control cookie settings through your browser preferences. However, disabling cookies 
                  may affect the functionality of our website.
                </p>
              </div>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Privacy Rights</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>Depending on your location, you may have the following rights regarding your personal information:</p>
                <ul className="mt-4 space-y-2">
                  <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Portability:</strong> Request transfer of your data to another service provider</li>
                  <li><strong>Objection:</strong> Object to certain processing of your personal information</li>
                  <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, please contact us using the information provided at the end of this policy.
                </p>
              </div>
            </div>

            {/* Data Retention */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Retention</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined 
                  in this Privacy Policy, unless a longer retention period is required or permitted by law. 
                  The retention period depends on:
                </p>
                <ul className="mt-4 space-y-2">
                  <li>The nature of the information and why it was collected</li>
                  <li>Legal, regulatory, or contractual requirements</li>
                  <li>The need to resolve disputes or enforce agreements</li>
                  <li>Business operational requirements</li>
                </ul>
              </div>
            </div>

            {/* International Transfers */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">International Data Transfers</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  Your information may be transferred to and processed in countries other than your own. 
                  We ensure that such transfers are conducted in accordance with applicable data protection laws 
                  and that appropriate safeguards are in place to protect your information.
                </p>
              </div>
            </div>

            {/* Children's Privacy */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Children's Privacy</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  Our services are not intended for children under the age of 13. We do not knowingly collect 
                  personal information from children under 13. If you are a parent or guardian and believe 
                  your child has provided us with personal information, please contact us immediately.
                </p>
              </div>
            </div>

            {/* Changes to Policy */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Changes to This Privacy Policy</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices or 
                  for other operational, legal, or regulatory reasons. We will notify you of any material 
                  changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                </p>
                <p className="mt-4">
                  We encourage you to review this Privacy Policy periodically to stay informed about how 
                  we protect your information.
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
          <h2 className="text-3xl font-bold mb-6">Questions About This Policy?</h2>
          <p className="text-xl text-purple-100 mb-8">
            If you have any questions about this Privacy Policy or our data practices, please contact us.
          </p>
          <div className="space-y-4">
            <p className="text-lg">
              <strong>Email:</strong> privacy@mybusiness.com
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

export default Privacy;