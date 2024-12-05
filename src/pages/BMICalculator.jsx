import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

function BMICalculator() {
  const { t } = useTranslation();
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      setBMI(parseFloat(bmiValue));
    }
  };

  const getBMICategory = (bmi) => {
    if (bmi < 18.5) return t('bmi.underweight');
    if (bmi < 25) return t('bmi.normal');
    if (bmi < 30) return t('bmi.overweight');
    return t('bmi.obese');
  };

  const getCategoryColor = (bmi) => {
    if (bmi < 18.5) return 'text-blue-600';
    if (bmi < 25) return 'text-green-600';
    if (bmi < 30) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto px-4 py-8"
    >
      <h1 className="text-4xl font-bold text-center gradient-text mb-12">
        {t('bmi.title')}
      </h1>

      <div className="glass-effect p-8 rounded-2xl shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t('bmi.weight')}
            </label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="70"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t('bmi.height')}
            </label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="170"
            />
          </div>
        </div>

        <div className="text-center mb-8">
          <button
            onClick={calculateBMI}
            className="px-8 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
          >
            {t('bmi.calculate')}
          </button>
        </div>

        {bmi && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h2 className="text-2xl font-semibold mb-4">
              {t('bmi.result')} {bmi}
            </h2>
            <p className={`text-xl font-medium ${getCategoryColor(bmi)}`}>
              {getBMICategory(bmi)}
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default BMICalculator;