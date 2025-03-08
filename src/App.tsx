import React, { useState } from 'react';
import { Home, BookOpen, Library, Github, Twitter, Mail, Brain, Satellite, CloudRain, BarChart3, Map } from 'lucide-react';
import ClimateAIDashboard from './components/ClimateAIDashboard';
import Modal from './components/Modal';

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  active: boolean;
  onClick: () => void;
}

function NavItem({ icon: Icon, label, active, onClick }: NavItemProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
        active ? 'bg-green-100 text-green-700' : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      <Icon className="w-5 h-5" />
      <span>{label}</span>
    </button>
  );
}

interface CapabilityCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  onClick?: () => void;
}

function CapabilityCard({ icon: Icon, title, description, onClick }: CapabilityCardProps) {
  return (
    <div 
      className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 cursor-pointer hover:border-green-500 transition-colors"
      onClick={onClick}
    >
      <div className="flex items-center space-x-3 mb-4">
        <div className="bg-green-100 p-3 rounded-lg">
          <Icon className="w-6 h-6 text-green-700" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function ImageProcessingContent() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-green-700">Satellite Imagery Analysis</h4>
        <p className="text-gray-600">
          High-resolution images taken from satellites are used to monitor large-scale environmental conditions. 
          These images capture details such as cloud formation, vegetation health, temperature, and soil moisture. 
          Our CNNs process these images to detect patterns indicating early signs of climate change, including:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
          <li>Deforestation patterns and rates</li>
          <li>Ocean surface temperature variations</li>
          <li>Ice sheet melting progression</li>
          <li>Urban development impact on local climate</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-green-700">Weather Radar Processing</h4>
        <p className="text-gray-600">
          Weather radar systems collect data on precipitation, storm intensity, wind patterns, and atmospheric conditions. 
          Our AI analyzes this data to:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
          <li>Track specific weather events in real-time</li>
          <li>Predict storm evolution and intensity</li>
          <li>Monitor trends in extreme weather events</li>
          <li>Provide short-term weather forecasting</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-green-700">Infrared Data Analysis</h4>
        <p className="text-gray-600">
          Infrared imagery enables the analysis of heat patterns on Earth's surface, crucial for:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
          <li>Detecting temperature anomalies</li>
          <li>Identifying urban heat islands</li>
          <li>Monitoring ocean temperature changes</li>
          <li>Tracking volcanic activity and heat emissions</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="text-md font-semibold text-gray-700 mb-2">Technical Implementation</h4>
        <p className="text-gray-600">
          Our system employs state-of-the-art CNNs optimized for environmental data processing, 
          achieving 92% accuracy in pattern recognition and anomaly detection across all image types.
        </p>
      </div>
    </div>
  );
}

function IntegratedDataContent() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-green-700">Data Integration Framework</h4>
        <p className="text-gray-600">
          Our integrated analysis combines traditional climate variables with processed visual data to create
          comprehensive models of climate patterns. This fusion of data sources enables deeper insights and
          more accurate predictions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Traditional Data Sources</h4>
          <ul className="space-y-2 text-gray-600">
            <li>• Temperature records</li>
            <li>• Precipitation measurements</li>
            <li>• Humidity levels</li>
            <li>• Wind patterns</li>
            <li>• Atmospheric pressure</li>
          </ul>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Visual Data Sources</h4>
          <ul className="space-y-2 text-gray-600">
            <li>• Satellite imagery</li>
            <li>• Radar data</li>
            <li>• Infrared scans</li>
            <li>• Aerial photography</li>
            <li>• Real-time sensor feeds</li>
          </ul>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-green-700">Climate Model Generation</h4>
        <p className="text-gray-600">
          Our advanced models represent various atmospheric, oceanic, and land factors. By combining
          historical temperature data with processed satellite imagery, we can predict regional climate
          evolution under different scenarios.
        </p>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h5 className="font-semibold mb-2">Model Accuracy</h5>
          <p className="text-green-700">
            Integration of multiple data sources has improved our prediction accuracy by 35% compared
            to traditional single-source models.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-green-700">Correlation Detection</h4>
        <p className="text-gray-600">
          Statistical techniques identify relationships between variables, such as:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
          <li>Sea surface temperatures and tropical storm frequency</li>
          <li>Forest cover changes and carbon dioxide levels</li>
          <li>Urban development and local temperature anomalies</li>
          <li>Precipitation patterns and vegetation health</li>
        </ul>
      </div>

      <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
        <h4 className="text-md font-semibold text-blue-700 mb-2">Implementation Highlights</h4>
        <ul className="space-y-2 text-blue-600">
          <li>• Real-time data processing and integration</li>
          <li>• Advanced statistical correlation analysis</li>
          <li>• Machine learning-based pattern recognition</li>
          <li>• Automated anomaly detection</li>
        </ul>
      </div>
    </div>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [showImageProcessingModal, setShowImageProcessingModal] = useState(false);
  const [showIntegratedDataModal, setShowIntegratedDataModal] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <h1 className="text-xl font-bold text-green-700">ClimateAI Predictor</h1>
              <div className="flex space-x-2">
                <NavItem
                  icon={Home}
                  label="Dashboard"
                  active={activeSection === 'dashboard'}
                  onClick={() => setActiveSection('dashboard')}
                />
                <NavItem
                  icon={BookOpen}
                  label="About"
                  active={activeSection === 'about'}
                  onClick={() => setActiveSection('about')}
                />
                <NavItem
                  icon={Library}
                  label="Resources"
                  active={activeSection === 'resources'}
                  onClick={() => setActiveSection('resources')}
                />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {activeSection === 'dashboard' && <ClimateAIDashboard />}
        {activeSection === 'about' && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold mb-4">About ClimateAI Predictor</h2>
              <p className="text-gray-600 mb-6">
                ClimateAI Predictor is a cutting-edge artificial intelligence system designed to forecast climate conditions
                by analyzing historical weather data combined with real-time weather imagery. Our advanced machine learning
                models process multiple data sources to provide accurate predictions and insights for climate change
                analysis.
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-green-800 mb-2">AI Model Confidence</h3>
                <p className="text-green-700">
                  Our predictions achieve 85% accuracy through continuous learning from vast datasets and real-time
                  validation against actual climate observations.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CapabilityCard
                icon={Satellite}
                title="Advanced Image Processing"
                description="Utilizes convolutional neural networks (CNNs) to analyze satellite imagery, weather radar, and infrared data, extracting crucial patterns and indicators of climate change."
                onClick={() => setShowImageProcessingModal(true)}
              />
              <CapabilityCard
                icon={Brain}
                title="Integrated Data Analysis"
                description="Combines traditional climate variables with processed visual data to create comprehensive climate models, detecting correlations between different environmental factors."
                onClick={() => setShowIntegratedDataModal(true)}
              />
              <CapabilityCard
                icon={CloudRain}
                title="Weather Event Prediction"
                description="Forecasts both short-term weather conditions and long-term climate trends, including extreme events like storms, floods, heatwaves, and droughts."
              />
              <CapabilityCard
                icon={BarChart3}
                title="Climate Change Monitoring"
                description="Tracks and analyzes climate shifts over time, providing insights into temperature changes, rainfall patterns, and the impact of human activities."
              />
              <CapabilityCard
                icon={Map}
                title="Dynamic Visualizations"
                description="Presents predictions through interactive maps and visualizations, overlaying satellite imagery with temperature models and precipitation forecasts."
              />
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-4">Data Sources & Processing</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-full">
                    <h4 className="font-semibold mb-2">Satellite & Radar Imagery</h4>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div className="h-2 bg-green-500 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">Processing 90+ satellite feeds daily</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-full">
                    <h4 className="font-semibold mb-2">Historical Climate Data</h4>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div className="h-2 bg-green-500 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">150+ years of temperature and precipitation records</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-full">
                    <h4 className="font-semibold mb-2">Real-time Sensors</h4>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div className="h-2 bg-green-500 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">10,000+ ground stations worldwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {activeSection === 'resources' && (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Climate Resources</h2>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold mb-2">Research Papers</h3>
                <p className="text-gray-600">Access the latest climate research and AI prediction methodologies.</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold mb-2">Data Sources</h3>
                <p className="text-gray-600">Explore our comprehensive collection of climate data sources.</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold mb-2">API Documentation</h3>
                <p className="text-gray-600">Learn how to integrate our climate predictions into your applications.</p>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Modals */}
      <Modal
        isOpen={showImageProcessingModal}
        onClose={() => setShowImageProcessingModal(false)}
        title="Advanced Image Processing"
      >
        <ImageProcessingContent />
      </Modal>

      <Modal
        isOpen={showIntegratedDataModal}
        onClose={() => setShowIntegratedDataModal(false)}
        title="Integrated Data Analysis"
      >
        <IntegratedDataContent />
      </Modal>

      {/* Footer */}
      <footer className="bg-white border-t mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-600 mb-4 md:mb-0">
              © 2025 ClimateAI Predictor. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="mailto:contact@climateai.com" className="text-gray-600 hover:text-green-700">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/climateai" className="text-gray-600 hover:text-green-700">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://github.com/climateai" className="text-gray-600 hover:text-green-700">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;