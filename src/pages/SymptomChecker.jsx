import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { diseases, symptoms } from '../utils/diseases';

function SymptomChecker() {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [analysis, setAnalysis] = useState(null);

  const handleSymptomToggle = (symptom) => {
    setSelectedSymptoms(prev =>
      prev.includes(symptom)
        ? prev.filter(s => s !== symptom)
        : [...prev, symptom]
    );
  };

  const analyzeSymptoms = () => {
    if (selectedSymptoms.length === 0) {
      setAnalysis({
        message: 'Please select at least one symptom.',
        possibleConditions: [],
        urgency: 'low'
      });
      return;
    }

    const possibleConditions = [];
    let highestUrgency = 'low';

    // Check each disease category
    Object.entries(diseases).forEach(([category, categoryDiseases]) => {
      Object.entries(categoryDiseases).forEach(([disease, info]) => {
        const matchingSymptoms = info.symptoms.filter(s => selectedSymptoms.includes(s));
        if (matchingSymptoms.length >= 2) {
          possibleConditions.push({
            name: disease,
            category,
            matchCount: matchingSymptoms.length,
            description: info.description,
            severity: info.severity,
            urgency: info.urgency
          });

          if (info.severity === 'high') highestUrgency = 'high';
          else if (info.severity === 'moderate' && highestUrgency !== 'high') {
            highestUrgency = 'moderate';
          }
        }
      });
    });

    possibleConditions.sort((a, b) => b.matchCount - a.matchCount);

    setAnalysis({
      possibleConditions,
      urgency: highestUrgency,
      message: getUrgencyMessage(highestUrgency)
    });
  };

  const getUrgencyMessage = (urgency) => {
    switch (urgency) {
      case 'high':
        return 'Your symptoms suggest a potentially serious condition. Please seek immediate medical attention.';
      case 'moderate':
        return 'Your symptoms warrant medical attention. Consider scheduling an appointment with your healthcare provider.';
      default:
        return 'Your symptoms appear to be mild. Monitor your condition and rest.';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto px-4 py-8"
    >
      <h1 className="text-4xl font-bold text-center gradient-text mb-12">Advanced Symptom Checker</h1>

      <div className="glass-effect p-8 rounded-2xl shadow-lg">
        <h2 className="text-xl font-semibold mb-6">Select Your Symptoms:</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {Object.entries(symptoms).map(([id, description]) => (
            <div key={id} className="flex items-center space-x-2">
              <input
                type="checkbox"
                id={id}
                checked={selectedSymptoms.includes(id)}
                onChange={() => handleSymptomToggle(id)}
                className="h-4 w-4 text-blue-600 rounded"
              />
              <label htmlFor={id} className="text-sm">
                <span className="font-medium">{id.replace(/([A-Z])/g, ' $1').trim()}</span>
                <span className="text-gray-500 text-xs block">{description}</span>
              </label>
            </div>
          ))}
        </div>

        <div className="text-center mb-8">
          <button
            onClick={analyzeSymptoms}
            className="px-8 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
          >
            Analyze Symptoms
          </button>
        </div>

        {analysis && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className={`p-4 rounded-lg ${analysis.urgency === 'high' ? 'bg-red-100' :
              analysis.urgency === 'moderate' ? 'bg-yellow-100' :
                'bg-green-100'
              }`}>
              <p className="font-semibold">{analysis.message}</p>
            </div>

            {analysis.possibleConditions.length > 0 && (
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Possible Conditions:</h3>
                {analysis.possibleConditions.map((condition, index) => (
                  <div key={index} className="p-4 bg-white rounded-lg shadow">
                    <h4 className="font-semibold text-lg mb-2">{condition.name}</h4>
                    <p className="text-gray-600 mb-2">{condition.description}</p>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-sm ${condition.severity === 'high' ? 'bg-red-100 text-red-800' :
                        condition.severity === 'moderate' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                        {condition.severity.toUpperCase()}
                      </span>
                      <span className="text-sm text-gray-500">{condition.urgency}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default SymptomChecker;
