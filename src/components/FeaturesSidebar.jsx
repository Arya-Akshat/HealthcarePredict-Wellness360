import React from 'react';
import { Link } from 'react-router-dom';
import {
  ClipboardDocumentCheckIcon,
  ChartBarIcon,
  ChatBubbleBottomCenterTextIcon,
} from '@heroicons/react/24/outline';

function FeaturesSidebar() {
  const features = [
    {
      name: 'Symptom Checker',
      description: 'Advanced analysis of your symptoms',
      icon: ClipboardDocumentCheckIcon,
      path: '/symptom-checker',
      color: 'text-blue-500'
    },
    {
      name: 'Lipid Profile Analyzer',
      description: 'Heart health risk assessment',
      icon: ChartBarIcon,
      path: '/lipid-profile',
      color: 'text-purple-500'
    },
    {
      name: 'Health Chatbot',
      description: '24/7 health guidance assistant',
      icon: ChatBubbleBottomCenterTextIcon,
      path: '/chatbot',
      color: 'text-green-500'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-6">Key Features</h2>
      <div className="space-y-4">
        {features.map((feature) => (
          <Link
            key={feature.name}
            to={feature.path}
            className="block p-4 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-start">
              <feature.icon className={`h-6 w-6 ${feature.color} mt-1`} />
              <div className="ml-4">
                <h3 className="font-medium">{feature.name}</h3>
                <p className="text-sm text-gray-500">{feature.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default FeaturesSidebar;
