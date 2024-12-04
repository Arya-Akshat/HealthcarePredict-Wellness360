import React, { useState } from 'react';
import { motion } from 'framer-motion';

function LipidProfileAnalyzer() {
  const [lipidProfile, setLipidProfile] = useState({
    totalCholesterol: '',
    ldl: '',
    hdl: '',
    triglycerides: ''
  });
  const [analysis, setAnalysis] = useState(null);

  const handleInputChange = (e) => {
    setLipidProfile({
      ...lipidProfile,
      [e.target.name]: e.target.value
    });
  };

  const analyzeLipidProfile = () => {
    const { totalCholesterol, ldl, hdl, triglycerides } = lipidProfile;
    let risks = [];
    let diseases = [];

    // Total Cholesterol Analysis
    if (totalCholesterol > 240) {
      risks.push('High Risk');
      diseases.push('Hypercholesterolemia');
    } else if (totalCholesterol >= 200) {
      risks.push('Borderline High Risk');
    }

    // LDL Analysis
    if (ldl > 160) {
      risks.push('High LDL');
      diseases.push('Atherosclerosis');
    } else if (ldl >= 130) {
      risks.push('Borderline High LDL');
    }

    // HDL Analysis
    if (hdl < 40) {
      risks.push('Low HDL (Increased Risk)');
      diseases.push('Coronary Heart Disease');
    }

    // Triglycerides Analysis
    if (triglycerides > 200) {
      risks.push('High Triglycerides');
      diseases.push('Hypertriglyceridemia');
    }

    setAnalysis({
      riskLevel: risks.length > 2 ? 'High' : risks.length > 0 ? 'Moderate' : 'Low',
      risks,
      diseases: [...new Set(diseases)],
      recommendations: getRecommendations(risks)
    });
  };

  const getRecommendations = (risks) => {
    const recommendations = [
      'Maintain a balanced, heart-healthy diet',
      'Regular exercise (at least 30 minutes daily)',
      'Maintain a healthy weight'
    ];

    if (risks.length > 0) {
      recommendations.push(
        'Consider consulting a healthcare provider',
        'Limit saturated and trans fats',
        'Increase fiber intake'
      );
    }

    if (risks.length > 2) {
      recommendations.push(
        'Immediate medical consultation recommended',
        'Regular lipid profile monitoring',
        'Possible medication evaluation'
      );
    }

    return recommendations;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto px-4 py-8"
    >
      <h1 className="text-4xl font-bold text-center gradient-text mb-12">Lipid Profile Analyzer</h1>

      <div className="glass-effect p-8 rounded-2xl shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Total Cholesterol (mg/dL)
              </label>
              <input
                type="number"
                name="totalCholesterol"
                value={lipidProfile.totalCholesterol}
                onChange={handleInputChange}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter value"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                LDL Cholesterol (mg/dL)
              </label>
              <input
                type="number"
                name="ldl"
                value={lipidProfile.ldl}
                onChange={handleInputChange}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter value"
              />
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                HDL Cholesterol (mg/dL)
              </label>
              <input
                type="number"
                name="hdl"
                value={lipidProfile.hdl}
                onChange={handleInputChange}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter value"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Triglycerides (mg/dL)
              </label>
              <input
                type="number"
                name="triglycerides"
                value={lipidProfile.triglycerides}
                onChange={handleInputChange}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter value"
              />
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <button
            onClick={analyzeLipidProfile}
            className="px-8 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
          >
            Analyze Profile
          </button>
        </div>

        {analysis && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className={`p-4 rounded-lg ${
              analysis.riskLevel === 'High' ? 'bg-red-100' :
              analysis.riskLevel === 'Moderate' ? 'bg-yellow-100' :
              'bg-green-100'
            }`}>
              <h3 className="font-semibold text-lg mb-2">Risk Level: {analysis.riskLevel}</h3>
              <ul className="list-disc list-inside">
                {analysis.risks.map((risk, index) => (
                  <li key={index}>{risk}</li>
                ))}
              </ul>
            </div>

            {analysis.diseases.length > 0 && (
              <div className="p-4 bg-orange-100 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Potential Conditions:</h3>
                <ul className="list-disc list-inside">
                  {analysis.diseases.map((disease, index) => (
                    <li key={index}>{disease}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Recommendations:</h3>
              <ul className="list-disc list-inside">
                {analysis.recommendations.map((rec, index) => (
                  <li key={index}>{rec}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default LipidProfileAnalyzer;