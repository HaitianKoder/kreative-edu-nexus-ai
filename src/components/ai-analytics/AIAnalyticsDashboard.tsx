
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Brain, TrendingUp, AlertTriangle, DollarSign, Users, BookOpen, Target, Activity, Lightbulb, Shield } from 'lucide-react';
import { AIUsageOverview } from './AIUsageOverview';
import { PredictiveAnalytics } from './PredictiveAnalytics';
import { AIInsights } from './AIInsights';
import { ExplainableAI } from './ExplainableAI';

export const AIAnalyticsDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('usage');

  const tabs = [
    { id: 'usage', label: 'AI Usage Dashboard', icon: Brain },
    { id: 'predictive', label: 'Predictive Analytics', icon: TrendingUp },
    { id: 'insights', label: 'AI-Powered Insights', icon: Lightbulb },
    { id: 'explainable', label: 'Explainable AI', icon: Shield }
  ];

  // Key metrics for the overview cards
  const keyMetrics = [
    {
      title: "Total AI Interactions",
      value: "2.4M",
      change: "+18%",
      icon: Brain,
      description: "This month across all platforms"
    },
    {
      title: "Student Success Improvement",
      value: "23%",
      change: "+5%",
      icon: TrendingUp,
      description: "Higher completion rates with AI tutoring"
    },
    {
      title: "At-Risk Students Identified",
      value: "142",
      change: "-12%",
      icon: AlertTriangle,
      description: "Early intervention candidates"
    },
    {
      title: "Monthly AI ROI",
      value: "$47K",
      change: "+31%",
      icon: DollarSign,
      description: "Value generated vs investment"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">AI Analytics & Insights</h1>
          <p className="text-gray-600 mt-2">Institutional intelligence powered by SMS+LMS integration</p>
        </div>
        <div className="flex items-center space-x-3">
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            Real-time Analysis
          </Badge>
          <Button variant="outline">
            Export Report
          </Button>
        </div>
      </div>

      {/* Key Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {keyMetrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <span className="text-2xl font-bold text-gray-900">{metric.value}</span>
                      <Badge 
                        variant="outline" 
                        className={metric.change.startsWith('+') ? 'text-green-600 border-green-200 bg-green-50' : 'text-red-600 border-red-200 bg-red-50'}
                      >
                        {metric.change}
                      </Badge>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{metric.description}</p>
                  </div>
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* AI Intelligence Highlight */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Brain className="w-8 h-8 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Institutional Intelligence Summary</h3>
              <p className="text-gray-700 mb-4">
                Our AI has analyzed 2.4M interactions across SMS and LMS platforms this month, identifying key patterns 
                that drive student success. The integration reveals that students using AI tutoring combined with consistent 
                financial aid show 34% higher retention rates.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium">15,847 Active Students</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BookOpen className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium">324 Courses Analyzed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Target className="w-4 h-4 text-purple-600" />
                  <span className="text-sm font-medium">94.2% Prediction Accuracy</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-1 overflow-x-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-3 px-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <Icon className="w-4 h-4 inline mr-2" />
                {tab.label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="space-y-6">
        {activeTab === 'usage' && <AIUsageOverview />}
        {activeTab === 'predictive' && <PredictiveAnalytics />}
        {activeTab === 'insights' && <AIInsights />}
        {activeTab === 'explainable' && <ExplainableAI />}
      </div>
    </div>
  );
};
