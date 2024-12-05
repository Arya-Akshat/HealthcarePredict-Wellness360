import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

function DiseaseCard({ disease, title, description, symptoms, prevention }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
      <div className="mb-4">
        <h4 className="font-medium text-lg mb-2">{symptoms.title}</h4>
        <ul className="list-disc list-inside text-gray-600">
          {symptoms.list.map((symptom, index) => (
            <li key={index}>{symptom}</li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-medium text-lg mb-2">{prevention.title}</h4>
        <ul className="list-disc list-inside text-gray-600">
          {prevention.list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function DiseaseAwareness() {
  const { t } = useTranslation();

  const diseases = {
    dengue: {
      symptoms: {
        title: t('awareness.dengue.symptoms'),
        list: [
          'High fever',
          'Severe headache',
          'Pain behind the eyes',
          'Muscle and joint pain',
          'Rash',
          'Mild bleeding'
        ]
      },
      prevention: {
        title: t('awareness.dengue.prevention'),
        list: [
          'Use mosquito repellent',
          'Wear long-sleeved clothes',
          'Use mosquito nets',
          'Remove standing water',
          'Keep surroundings clean'
        ]
      }
    },
    malaria: {
      symptoms: {
        title: t('awareness.malaria.symptoms'),
        list: [
          'Fever and chills',
          'Headache',
          'Muscle pain',
          'Fatigue',
          'Nausea and vomiting',
          'Anemia'
        ]
      },
      prevention: {
        title: t('awareness.malaria.prevention'),
        list: [
          'Use insecticide-treated bed nets',
          'Apply insect repellent',
          'Take preventive medications',
          'Wear protective clothing',
          'Eliminate breeding sites'
        ]
      }
    },
    typhoid: {
      symptoms: {
        title: t('awareness.typhoid.symptoms'),
        list: [
          'Prolonged fever',
          'Headache',
          'Weakness',
          'Stomach pain',
          'Loss of appetite',
          'Constipation or diarrhea'
        ]
      },
      prevention: {
        title: t('awareness.typhoid.prevention'),
        list: [
          'Get vaccinated',
          'Drink safe water',
          'Eat well-cooked foods',
          'Wash hands frequently',
          'Avoid street food'
        ]
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto px-4 py-8"
    >
      <h1 className="text-4xl font-bold text-center gradient-text mb-12">
        {t('awareness.title')}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <DiseaseCard
          disease="dengue"
          title={t('awareness.dengue.title')}
          description={t('awareness.dengue.description')}
          symptoms={diseases.dengue.symptoms}
          prevention={diseases.dengue.prevention}
        />
        <DiseaseCard
          disease="malaria"
          title={t('awareness.malaria.title')}
          description={t('awareness.malaria.description')}
          symptoms={diseases.malaria.symptoms}
          prevention={diseases.malaria.prevention}
        />
        <DiseaseCard
          disease="typhoid"
          title={t('awareness.typhoid.title')}
          description={t('awareness.typhoid.description')}
          symptoms={diseases.typhoid.symptoms}
          prevention={diseases.typhoid.prevention}
        />
      </div>
    </motion.div>
  );
}

export default DiseaseAwareness;