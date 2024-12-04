import { createInterface } from 'readline';
import chalk from 'chalk';
import { getSymptomQuestions } from './questions.js';
import { analyzeSymptoms } from './analyzer.js';
import { getRecommendation } from './recommendations.js';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (query) => new Promise((resolve) => rl.question(query, resolve));

async function startChatbot() {
  console.log(chalk.blue('Welcome to the Health Chatbot!'));
  console.log(chalk.cyan('I will ask you some questions to understand your symptoms better.\n'));

  const symptoms = {};
  const questions = getSymptomQuestions();

  for (const q of questions) {
    const answer = await question(chalk.yellow(`${q.question} (yes/no): `));
    symptoms[q.id] = answer.toLowerCase() === 'yes';
  }

  const analysis = analyzeSymptoms(symptoms);
  const recommendation = getRecommendation(analysis);

  console.log('\n' + chalk.green('Analysis Results:'));
  console.log(chalk.white(analysis.description));
  console.log('\n' + chalk.green('Recommendations:'));
  console.log(chalk.white(recommendation));
  
  console.log(chalk.red('\nDisclaimer: This chatbot provides general information only and should not replace professional medical advice.'));
  
  rl.close();
}

startChatbot().catch(console.error);