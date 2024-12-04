export function analyzeSymptoms(symptoms) {
  // Count the number of positive symptoms
  const positiveSymptoms = Object.entries(symptoms)
    .filter(([_, value]) => value)
    .map(([key]) => key);

  let condition = 'mild';
  let description = '';

  // Analysis logic
  if (symptoms.shortnessOfBreath) {
    condition = 'severe';
    description = 'Your symptoms suggest a potentially serious condition.';
  } else if (positiveSymptoms.length >= 5) {
    condition = 'moderate';
    description = 'You are showing multiple symptoms that require attention.';
  } else if (positiveSymptoms.length >= 2) {
    condition = 'mild';
    description = 'You are showing some mild symptoms.';
  } else {
    condition = 'minimal';
    description = 'Your symptoms appear to be minimal.';
  }

  return {
    condition,
    description,
    symptoms: positiveSymptoms
  };
}