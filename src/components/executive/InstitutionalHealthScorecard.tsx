
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, DollarSign, Activity, Shield, TrendingUp, CheckCircle, AlertTriangle } from 'lucide-react';

export const InstitutionalHealthScorecard: React.FC = () => {
  const healthMetrics = [
    {
      category: "Student Success",
      metrics: [
        { name: "Retention Rate", value: "94.2%", status: "green", target: "95%" },
        { name: "Completion Rate", value: "87.5%", status: "green", target: "85%" },
        { name: "Satisfaction Score", value: "4.6/5", status: "green", target: "4.5/5" },
        { name: "Time to Degree", value: "3.8 years", status: "yellow", target: "3.5 years" }
      ],
      icon: Users,
      overallScore: 92
    },
    {
      category: "Financial Health",
      metrics: [
        { name: "Revenue Growth", value: "+8.3%", status: "green", target: "+5%" },
        { name: "Outstanding Accounts", value: "$2.1M", status: "yellow", target: "<$2M" },
        { name: "Aid Efficiency", value: "76%", status: "green", target: "75%" },
        { name: "Cost per Student", value: "$8,450", status: "green", target: "<$9000" }
      ],
      icon: DollarSign,
      overallScore: 85
    },
    {
      category: "Operational Efficiency",
      metrics: [
        { name: "System Uptime", value: "99.8%", status: "green", target: "99.5%" },
        { name: "Staff Productivity", value: "+12%", status: "green", target: "+10%" },
        { name: "Process Automation", value: "68%", status: "yellow", target: "75%" },
        { name: "Response Time", value: "2.1 min", status: "green", target: "<3 min" }
      ],
      icon: Activity,
      overallScore: 88
    },
    {
      category: "Compliance Status",
      metrics: [
        { name: "FERPA Compliance", value: "100%", status: "green", target: "100%" },
        { name: "WCAG Accessibility", value: "AA Level", status: "green", target: "AA Level" },
        { name: "Data Security", value: "98.5%", status: "green", target: "95%" },
        { name: "Audit Readiness", value: "95%", status: "green", target: "90%" }
      ],
      icon: Shield,
      overallScore: 98
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'green': return 'text-green-600 bg-green-50';
      case 'yellow': return 'text-yellow-600 bg-yellow-50';
      case 'red': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 75) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Shield className="w-5 h-5 text-blue-600" />
          <span>Institutional Health Scorecard</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {healthMetrics.map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Icon className="w-5 h-5 text-gray-600" />
                    <h3 className="font-semibold text-gray-900">{category.category}</h3>
                  </div>
                  <div className="text-right">
                    <div className={`text-2xl font-bold ${getScoreColor(category.overallScore)}`}>
                      {category.overallScore}
                    </div>
                    <div className="text-xs text-gray-500">Overall Score</div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {category.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{metric.name}</div>
                        <div className="text-xs text-gray-500">Target: {metric.target}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-gray-900">{metric.value}</div>
                        <Badge className={`text-xs ${getStatusColor(metric.status)}`}>
                          {metric.status === 'green' ? '✓' : metric.status === 'yellow' ? '!' : '✗'}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
