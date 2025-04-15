import React from 'react';
import { Link } from 'react-router-dom';
import { HeartIcon } from '@heroicons/react/24/solid';
import { useTranslation } from 'react-i18next';
//import LanguageSelector from './LanguageSelector';

function Navbar() {
  const { t } = useTranslation();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <HeartIcon className="h-8 w-8 text-red-500" />
            <Link to="/" className="ml-2 font-bold text-xl text-gray-800">
              Health Monitoring
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            <Link to="/symptom-checker" className="text-gray-600 hover:text-gray-900">
              {t('nav.symptomChecker')}
            </Link>
            <Link to="/lipid-profile" className="text-gray-600 hover:text-gray-900">
              {t('nav.lipidProfile')}
            </Link>
            <Link to="/bmi-calculator" className="text-gray-600 hover:text-gray-900">
              {t('nav.bmiCalculator')}
            </Link>
            <Link to="/disease-awareness" className="text-gray-600 hover:text-gray-900">
              {t('nav.diseaseAwareness')}
            </Link>
            <Link to="/chatbot" className="text-gray-600 hover:text-gray-900">
              {t('nav.chatbot')}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
