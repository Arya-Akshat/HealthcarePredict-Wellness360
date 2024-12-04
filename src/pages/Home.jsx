import React from 'react';
import { motion } from 'framer-motion';
import FeaturesSidebar from '../components/FeaturesSidebar';

function Home() {
  const healthTips = [
    {
      title: 'Regular Exercise',
      content: 'Aim for at least 150 minutes of moderate aerobic activity or 75 minutes of vigorous aerobic activity weekly.'
    },
    {
      title: 'Balanced Diet',
      content: 'Include a variety of fruits, vegetables, whole grains, lean proteins, and healthy fats in your daily meals.'
    },
    {
      title: 'Adequate Sleep',
      content: 'Get 7-9 hours of quality sleep per night to support physical and mental health.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="text-5xl font-bold gradient-text mb-6">
              Your Health Companion
            </h1>
            <p className="text-xl text-gray-600">
              Welcome to Health Monitoring, your comprehensive platform for tracking and maintaining your well-being. Our advanced tools help you make informed decisions about your health.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass-effect p-8 rounded-2xl">
              <h2 className="text-2xl font-semibold mb-6">Why Monitor Your Health?</h2>
              <div className="prose prose-lg text-gray-600">
                <p>Regular health monitoring helps you:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Detect potential health issues early</li>
                  <li>Track your progress towards health goals</li>
                  <li>Make informed decisions about your lifestyle</li>
                  <li>Maintain better communication with healthcare providers</li>
                </ul>
              </div>
            </div>

            <div className="glass-effect p-8 rounded-2xl">
              <h2 className="text-2xl font-semibold mb-6">Daily Health Tips</h2>
              <div className="grid gap-6">
                {healthTips.map((tip, index) => (
                  <motion.div
                    key={tip.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-6 rounded-lg shadow-sm"
                  >
                    <h3 className="text-xl font-medium text-blue-600 mb-2">{tip.title}</h3>
                    <p className="text-gray-600">{tip.content}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="glass-effect p-8 rounded-2xl">
              <h2 className="text-2xl font-semibold mb-6">Important Notice</h2>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <p className="text-blue-700">
                  While our tools provide valuable health insights, they are not substitutes for professional medical advice. Always consult healthcare professionals for medical decisions.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-1"
        >
          <div className="sticky top-8">
            <FeaturesSidebar />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;