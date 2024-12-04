export function getRecommendation(analysis) {
  const { condition } = analysis;

  const recommendations = {
    severe: [
      'Seek immediate medical attention or call emergency services.',
      'Isolate yourself from others until you receive medical care.',
      'Monitor your breathing and other vital signs.'
    ],
    moderate: [
      'Schedule an appointment with your healthcare provider.',
      'Rest and stay hydrated.',
      'Monitor your symptoms and seek immediate care if they worsen.',
      'Consider taking over-the-counter medications for symptom relief.'
    ],
    mild: [
      'Rest and get plenty of sleep.',
      'Stay hydrated by drinking plenty of fluids.',
      'Consider over-the-counter medications for symptom relief.',
      'Monitor your symptoms for any changes.'
    ],
    minimal: [
      'Continue monitoring your symptoms.',
      'Practice good hygiene and rest if needed.',
      'Maintain a healthy diet and stay hydrated.'
    ]
  };

  return recommendations[condition].join('\n• ');
}