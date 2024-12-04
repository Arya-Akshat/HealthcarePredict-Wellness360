import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function HeartRate() {
  const [heartRate, setHeartRate] = useState(75);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [heartRateHistory, setHeartRateHistory] = useState([]);
  const [timeLabels, setTimeLabels] = useState([]);

  useEffect(() => {
    let interval;
    if (isMonitoring) {
      interval = setInterval(() => {
        const newRate = Math.floor(Math.random() * (100 - 60) + 60);
        setHeartRate(newRate);
        
        const now = new Date();
        const timeStr = now.toLocaleTimeString('en-US', { 
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        });

        setHeartRateHistory(prev => [...prev, newRate].slice(-20));
        setTimeLabels(prev => [...prev, timeStr].slice(-20));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isMonitoring]);

  const getHeartRateStatus = () => {
    if (heartRate < 60) return { text: 'Low', color: 'text-blue-500', bgColor: 'bg-blue-100' };
    if (heartRate > 100) return { text: 'High', color: 'text-red-500', bgColor: 'bg-red-100' };
    return { text: 'Normal', color: 'text-green-500', bgColor: 'bg-green-100' };
  };

  const chartData = {
    labels: timeLabels,
    datasets: [
      {
        label: 'Heart Rate',
        data: heartRateHistory,
        borderColor: 'rgb(239, 68, 68)',
        backgroundColor: 'rgba(239, 68, 68, 0.5)',
        tension: 0.4
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Heart Rate History'
      }
    },
    scales: {
      y: {
        min: 40,
        max: 120
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto px-4 py-8"
    >
      <h1 className="text-4xl font-bold text-center gradient-text mb-12">Heart Rate Monitor</h1>

      <div className="glass-effect p-8 rounded-2xl shadow-lg">
        <motion.div 
          className="mb-12 text-center"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          <div className={`text-7xl font-bold mb-4 ${getHeartRateStatus().color}`}>
            {heartRate}
          </div>
          <div className="text-2xl text-gray-600">Beats Per Minute</div>
          <div className={`inline-block px-4 py-2 rounded-full mt-4 ${getHeartRateStatus().bgColor} ${getHeartRateStatus().color} font-semibold`}>
            {getHeartRateStatus().text}
          </div>
        </motion.div>

        <div className="mb-8">
          <Line data={chartData} options={chartOptions} />
        </div>

        <div className="text-center">
          <button
            onClick={() => setIsMonitoring(!isMonitoring)}
            className={`px-8 py-3 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105 ${
              isMonitoring 
                ? 'bg-red-500 hover:bg-red-600' 
                : 'bg-green-500 hover:bg-green-600'
            }`}
          >
            {isMonitoring ? 'Stop Monitoring' : 'Start Monitoring'}
          </button>
        </div>

        <div className="mt-8 p-6 bg-gray-50 rounded-xl">
          <h3 className="font-semibold mb-4 text-lg">Heart Rate Guidelines:</h3>
          <ul className="space-y-3">
            <li className="flex items-center text-blue-600">
              <span className="w-4 h-4 bg-blue-200 rounded-full mr-2"></span>
              Below 60 BPM: Low heart rate (Bradycardia)
            </li>
            <li className="flex items-center text-green-600">
              <span className="w-4 h-4 bg-green-200 rounded-full mr-2"></span>
              60-100 BPM: Normal resting heart rate
            </li>
            <li className="flex items-center text-red-600">
              <span className="w-4 h-4 bg-red-200 rounded-full mr-2"></span>
              Above 100 BPM: High heart rate (Tachycardia)
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default HeartRate;