
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { DollarSign, TrendingUp, Clock, Zap, AlertTriangle } from 'lucide-react';

export const AIUsageOverview: React.FC = () => {
  // Mock data for token consumption by department
  const departmentUsage = [
    { department: 'Computer Science', tokens: 450000, cost: 2250, students: 1200 },
    { department: 'Mathematics', tokens: 320000, cost: 1600, students: 800 },
    { department: 'Engineering', tokens: 380000, cost: 1900, students: 950 },
    { department: 'Business', tokens: 280000, cost: 1400, students: 1100 },
    { department: 'Liberal Arts', tokens: 200000, cost: 1000, students: 600 }
  ];

  // Model performance data
  const modelPerformance = [
    { model: 'GPT-4', usage: 45, cost: 0.12, accuracy: 94, responseTime: 1.2 },
    { model: 'Claude-3', usage: 30, cost: 0.08, accuracy: 92, responseTime: 0.9 },
    { model: 'Groq', usage: 20, cost: 0.03, accuracy: 88, responseTime: 0.3 },
    { model: 'GPT-3.5', usage: 5, cost: 0.02, accuracy: 85, responseTime: 0.8 }
  ];

  // Peak usage times
  const usageTimeline = [
    { time: '6AM', tokens: 12000, sessions: 240 },
    { time: '8AM', tokens: 45000, sessions: 890 },
    { time: '10AM', tokens: 78000, sessions: 1560 },
    { time: '12PM', tokens: 92000, sessions: 1840 },
    { time: '2PM', tokens: 110000, sessions: 2200 },
    { time: '4PM', tokens: 95000, sessions: 1900 },
    { time: '6PM', tokens: 85000, sessions: 1700 },
    { time: '8PM', tokens: 125000, sessions: 2500 },
    { time: '10PM', tokens: 98000, sessions: 1960 }
  ];

  const COLORS = ['#2563eb', '#7c3aed', '#dc2626', '#ea580c'];

  return (
    <div className="space-y-6">
      {/* Department Usage Analysis */}
      <Card>
        <CardHeader>
          <CardTitle>Token Consumption by Department</CardTitle>
          <CardDescription>AI usage patterns across academic departments with cost analysis</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={departmentUsage}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="department" />
                <YAxis />
                <Tooltip 
                  formatter={(value, name) => [
                    name === 'tokens' ? `${value.toLocaleString()} tokens` : `$${value}`,
                    name === 'tokens' ? 'Token Usage' : 'Monthly Cost'
                  ]}
                />
                <Bar dataKey="tokens" fill="#2563eb" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-blue-600 font-medium">Highest Usage</p>
                  <p className="text-lg font-bold text-blue-900">Computer Science</p>
                  <p className="text-xs text-blue-600">450K tokens/month</p>
                </div>
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-green-600 font-medium">Best ROI</p>
                  <p className="text-lg font-bold text-green-900">Mathematics</p>
                  <p className="text-xs text-green-600">$2.00 per student</p>
                </div>
                <DollarSign className="w-8 h-8 text-green-600" />
              </div>
            </div>
            <div className="bg-amber-50 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-amber-600 font-medium">Growth Potential</p>
                  <p className="text-lg font-bold text-amber-900">Liberal Arts</p>
                  <p className="text-xs text-amber-600">+67% opportunity</p>
                </div>
                <Zap className="w-8 h-8 text-amber-600" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Model Performance Comparison */}
        <Card>
          <CardHeader>
            <CardTitle>AI Model Performance</CardTitle>
            <CardDescription>Cost, accuracy, and speed comparison across models</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {modelPerformance.map((model, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full`} style={{ backgroundColor: COLORS[index] }}></div>
                    <div>
                      <p className="font-medium text-gray-900">{model.model}</p>
                      <p className="text-sm text-gray-600">{model.usage}% usage share</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">${model.cost.toFixed(3)}/1K tokens</p>
                    <div className="flex items-center space-x-4 text-xs text-gray-600">
                      <span>{model.accuracy}% accuracy</span>
                      <span>{model.responseTime}s avg</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <h4 className="font-medium text-gray-900 mb-3">Usage Distribution</h4>
              <div className="h-40">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={modelPerformance}
                      cx="50%"
                      cy="50%"
                      innerRadius={30}
                      outerRadius={60}
                      dataKey="usage"
                      nameKey="model"
                    >
                      {modelPerformance.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value}%`, 'Usage Share']} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Peak Usage Times */}
        <Card>
          <CardHeader>
            <CardTitle>Usage Patterns & Capacity Planning</CardTitle>
            <CardDescription>Peak hours and load distribution for infrastructure optimization</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={usageTimeline}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip formatter={(value, name) => [
                    name === 'tokens' ? `${value.toLocaleString()} tokens` : `${value} sessions`,
                    name === 'tokens' ? 'Token Usage' : 'Active Sessions'
                  ]} />
                  <Line type="monotone" dataKey="tokens" stroke="#2563eb" strokeWidth={2} />
                  <Line type="monotone" dataKey="sessions" stroke="#7c3aed" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-3">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <div>
                    <p className="text-xs text-blue-600 font-medium">Peak Hour</p>
                    <p className="text-sm font-bold text-blue-900">8-10 PM</p>
                  </div>
                </div>
              </div>
              <div className="bg-purple-50 rounded-lg p-3">
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-purple-600" />
                  <div>
                    <p className="text-xs text-purple-600 font-medium">Load Factor</p>
                    <p className="text-sm font-bold text-purple-900">78% avg</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Budget Optimization Recommendations */}
      <Card className="border-amber-200 bg-amber-50">
        <CardHeader>
          <CardTitle className="flex items-center text-amber-800">
            <DollarSign className="w-5 h-5 mr-2" />
            Budget Optimization Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 rounded-full bg-amber-500 mt-2"></div>
              <div>
                <p className="font-medium text-amber-900">Switch 20% of GPT-4 usage to Claude-3 for routine queries</p>
                <p className="text-sm text-amber-700">Potential savings: $450/month with minimal accuracy impact</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 rounded-full bg-amber-500 mt-2"></div>
              <div>
                <p className="font-medium text-amber-900">Implement dynamic model routing based on query complexity</p>
                <p className="text-sm text-amber-700">Estimated savings: $280/month through intelligent model selection</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 rounded-full bg-amber-500 mt-2"></div>
              <div>
                <p className="font-medium text-amber-900">Scale Groq usage during peak hours for faster response times</p>
                <p className="text-sm text-amber-700">Improve user experience while reducing costs by 15%</p>
              </div>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-amber-200">
            <Button className="bg-amber-600 hover:bg-amber-700 text-white">
              Implement Optimizations
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
