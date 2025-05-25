
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, BarChart4, Target, DollarSign } from 'lucide-react';

export const StrategicInsights: React.FC = () => {
  const insights = [
    {
      title: "Enrollment Trends",
      value: "+12.5%",
      description: "YoY growth in undergraduate enrollment",
      trend: "up",
      details: "Fall 2024 enrollment exceeds projections by 8%"
    },
    {
      title: "Revenue Projections",
      value: "$52.3M",
      description: "Projected annual revenue (15% above target)",
      trend: "up",
      details: "Strong performance in continuing education programs"
    },
    {
      title: "Technology ROI",
      value: "340%",
      description: "Return on AI and platform investments",
      trend: "up",
      details: "SMS+LMS integration driving efficiency gains"
    },
    {
      title: "Market Position",
      value: "Top 15%",
      description: "Among regional institutions for innovation",
      trend: "up",
      details: "Leading in digital transformation initiatives"
    }
  ];

  const departmentPerformance = [
    { name: "Computer Science", score: 94, trend: "+5%" },
    { name: "Business Administration", score: 89, trend: "+2%" },
    { name: "Engineering", score: 87, trend: "+8%" },
    { name: "Liberal Arts", score: 82, trend: "+1%" },
    { name: "Health Sciences", score: 91, trend: "+7%" }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <BarChart4 className="w-5 h-5 text-purple-600" />
          <span>Strategic Insights</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Key Strategic Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {insights.map((insight, index) => (
              <div key={index} className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900">{insight.title}</h4>
                  <TrendingUp className="w-4 h-4 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-blue-600 mb-1">{insight.value}</div>
                <div className="text-sm text-gray-600 mb-2">{insight.description}</div>
                <div className="text-xs text-gray-500">{insight.details}</div>
              </div>
            ))}
          </div>

          {/* Department Performance */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Department Performance Comparison</h4>
            <div className="space-y-3">
              {departmentPerformance.map((dept, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">{dept.name}</div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${dept.score}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="text-right ml-4">
                    <div className="font-semibold text-gray-900">{dept.score}%</div>
                    <Badge className="text-xs bg-green-50 text-green-600">
                      {dept.trend}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Competitive Positioning */}
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-3">Competitive Positioning</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">92%</div>
                <div className="text-gray-600">Student Satisfaction vs 85% regional avg</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">68%</div>
                <div className="text-gray-600">Technology adoption vs 45% avg</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">23%</div>
                <div className="text-gray-600">Cost efficiency improvement</div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
