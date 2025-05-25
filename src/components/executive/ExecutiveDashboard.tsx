
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, Users, DollarSign, Shield, Activity, Target, BarChart4, AlertTriangle, CheckCircle } from 'lucide-react';
import { InstitutionalHealthScorecard } from './InstitutionalHealthScorecard';
import { StrategicInsights } from './StrategicInsights';
import { IntegrationValueMetrics } from './IntegrationValueMetrics';
import { PredictivePlanning } from './PredictivePlanning';

export const ExecutiveDashboard: React.FC = () => {
  // Key performance indicators for executive overview
  const kpiMetrics = [
    {
      title: "Student Retention Rate",
      value: "94.2%",
      change: "+2.1%",
      trend: "up",
      status: "green",
      target: "95%",
      icon: Users
    },
    {
      title: "Revenue Growth",
      value: "$47.2M",
      change: "+8.3%",
      trend: "up",
      status: "green",
      target: "$50M",
      icon: DollarSign
    },
    {
      title: "Operational Efficiency",
      value: "87%",
      change: "+5.2%",
      trend: "up",
      status: "yellow",
      target: "90%",
      icon: Activity
    },
    {
      title: "Compliance Score",
      value: "98.5%",
      change: "+0.8%",
      trend: "up",
      status: "green",
      target: "100%",
      icon: Shield
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'green': return 'bg-green-100 text-green-800 border-green-200';
      case 'yellow': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'red': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTrendIcon = (trend: string) => {
    return trend === 'up' ? TrendingUp : TrendingDown;
  };

  return (
    <div className="space-y-6">
      {/* Executive Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Executive Dashboard</h1>
          <p className="text-gray-600 mt-2">Strategic insights and institutional performance</p>
        </div>
        <div className="flex items-center space-x-3">
          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
            Real-time Data
          </Badge>
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            All Systems Operational
          </Badge>
        </div>
      </div>

      {/* Key Performance Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiMetrics.map((metric, index) => {
          const Icon = metric.icon;
          const TrendIcon = getTrendIcon(metric.trend);
          return (
            <Card key={index} className="relative overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-600 mb-2">{metric.title}</p>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-2xl font-bold text-gray-900">{metric.value}</span>
                      <div className="flex items-center space-x-1">
                        <TrendIcon className="w-4 h-4 text-green-600" />
                        <span className="text-sm font-medium text-green-600">{metric.change}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">Target: {metric.target}</span>
                      <Badge className={`text-xs ${getStatusColor(metric.status)}`}>
                        {metric.status === 'green' ? 'On Track' : metric.status === 'yellow' ? 'Monitor' : 'Action Needed'}
                      </Badge>
                    </div>
                  </div>
                  <div className={`p-3 rounded-lg ${getStatusColor(metric.status)}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Critical Alerts */}
      <Card className="border-l-4 border-l-blue-500">
        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Strategic Focus Areas</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Q3 Enrollment Goals Met</span>
                </div>
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="w-4 h-4 text-yellow-600" />
                  <span className="text-sm">AI Budget Review Needed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Integration ROI Exceeded</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Dashboard Sections */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <InstitutionalHealthScorecard />
        <StrategicInsights />
      </div>

      <IntegrationValueMetrics />
      
      <PredictivePlanning />
    </div>
  );
};
