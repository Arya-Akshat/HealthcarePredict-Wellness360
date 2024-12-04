export const diseases = {
  respiratory: {
    "Pneumonia": {
      symptoms: ["fever", "cough", "shortnessOfBreath", "chestPain"],
      severity: "high",
      description: "An infection that inflames air sacs in one or both lungs",
      urgency: "Seek immediate medical attention"
    },
    "Bronchitis": {
      symptoms: ["cough", "mucusProduction", "fatigue", "chestDiscomfort"],
      severity: "moderate",
      description: "Inflammation of the bronchial tubes that carry air to lungs",
      urgency: "Consult healthcare provider if symptoms persist"
    },
    "Asthma": {
      symptoms: ["shortnessOfBreath", "wheezing", "chestTightness", "cough"],
      severity: "moderate",
      description: "A condition causing airways to narrow and swell",
      urgency: "Follow asthma action plan or seek medical help"
    }
  },
  cardiovascular: {
    "Hypertension": {
      symptoms: ["headache", "dizziness", "nosebleeds", "shortnessOfBreath"],
      severity: "high",
      description: "High blood pressure that can lead to severe complications",
      urgency: "Regular monitoring and medication compliance important"
    },
    "Coronary Artery Disease": {
      symptoms: ["chestPain", "shortnessOfBreath", "fatigue", "heartburn"],
      severity: "high",
      description: "Reduced blood flow to the heart due to arterial buildup",
      urgency: "Immediate medical attention for chest pain"
    }
  },
  gastrointestinal: {
    "Gastritis": {
      symptoms: ["abdominalPain", "nausea", "vomiting", "bloating"],
      severity: "moderate",
      description: "Inflammation of the stomach lining",
      urgency: "Consult healthcare provider if symptoms persist"
    },
    "GERD": {
      symptoms: ["heartburn", "chestPain", "difficultySwallowing", "regurgitation"],
      severity: "moderate",
      description: "Chronic acid reflux that can damage the esophagus",
      urgency: "Lifestyle changes and possible medication needed"
    }
  },
  neurological: {
    "Migraine": {
      symptoms: ["headache", "nausea", "lightSensitivity", "soundSensitivity"],
      severity: "moderate",
      description: "Severe recurring headaches with various triggers",
      urgency: "Rest in dark room, seek help if severe"
    },
    "Tension Headache": {
      symptoms: ["headache", "neckPain", "shoulderPain", "fatigue"],
      severity: "low",
      description: "Common headache caused by muscle tension",
      urgency: "Over-the-counter medication usually sufficient"
    }
  }
};

export const symptoms = {
  fever: "Elevated body temperature",
  cough: "Forceful expulsion of air",
  shortnessOfBreath: "Difficulty breathing or dyspnea",
  chestPain: "Pain or discomfort in the chest",
  headache: "Pain in the head or upper neck",
  fatigue: "Extreme tiredness or exhaustion",
  nausea: "Feeling of sickness with an inclination to vomit",
  vomiting: "Forceful expulsion of stomach contents",
  diarrhea: "Loose, watery stools",
  abdominalPain: "Pain in the stomach or belly",
  muscleAches: "Pain in muscles",
  jointPain: "Pain in joints",
  rash: "Skin inflammation or discoloration",
  soreThroat: "Pain or irritation in the throat",
  runnyNose: "Excess nasal discharge",
  congestion: "Blocked or stuffy nose",
  chills: "Feeling of cold with shivering",
  dizziness: "Lightheadedness or vertigo",
  wheezing: "Breathing with a whistling sound",
  lossOfAppetite: "Reduced desire to eat"
};
