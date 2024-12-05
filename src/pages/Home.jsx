import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HeartIcon, ChatBubbleBottomCenterTextIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline';

function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold gradient-text mb-6">
          Welcome to Health Monitoring
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Your personal health companion for monitoring and maintaining wellness. Get started with our intelligent health tools.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-3 gap-8 mt-12"
      >
        <motion.div variants={itemVariants}>
          <Link to="/symptom-checker" className="block">
            <div className="glass-effect p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <ClipboardDocumentCheckIcon className="h-8 w-8 text-blue-500" />
              </div>
              <h2 className="text-2xl font-semibold text-center mb-4">Symptom Checker</h2>
              <p className="text-gray-600 text-center">
                Advanced AI-powered symptom analysis for accurate health insights
              </p>
            </div>
          </Link>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Link to="/heart-rate" className="block">
            <div className="glass-effect p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <HeartIcon className="h-8 w-8 text-red-500 animate-pulse-slow" />
              </div>
              <h2 className="text-2xl font-semibold text-center mb-4">Heart Rate Monitor</h2>
              <p className="text-gray-600 text-center">
                Real-time heart rate monitoring with detailed analytics
              </p>
            </div>
          </Link>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Link to="/chatbot" className="block">
            <div className="glass-effect p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <ChatBubbleBottomCenterTextIcon className="h-8 w-8 text-green-500" />
              </div>
              <h2 className="text-2xl font-semibold text-center mb-4">Health Chatbot</h2>
              <p className="text-gray-600 text-center">
                24/7 intelligent health assistant for instant guidance
              </p>
            </div>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-16 text-center"
      >
        <p className="text-sm text-gray-500">
          Always consult with healthcare professionals for medical advice
        </p>
      </motion.div>
    </div>
  );
}

export default Home;
