
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, DollarSign, Users, Activity } from 'lucide-react';

export const IntegrationValueMetrics: React.FC = () => {
  const beforeAfterMetrics = [
    {
      metric: "System Administration Time",
      before: "40 hrs/week",
      after: "12 hrs/week",
      improvement: "70% reduction",
      icon: Activity
    },
    {
      metric: "Student Data Accuracy",
      before: "78%",
      after: "96%",
      improvement: "18% increase",
      icon: Users
    },
    {
      metric: "Monthly IT Costs",
      before: "$24,500",
      after: "$16,200",
      improvement: "$8,300 savings",
      icon: DollarSign
    },
    {
      metric: "Report Generation Time",
      before: "3.5 days",
      after: "15 minutes",
      improvement: "99% faster",
      icon: TrendingUp
    }
  ];

  const roiMetrics = {
    totalInvestment: "$450K",
    annualSavings: "$280K",
    paybackPeriod: "1.6 years",
    threeYearROI: "287%"
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <TrendingUp className="w-5 h-5 text-green-600" />
          <span>SMS+LMS Integration Value</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* ROI Summary */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{roiMetrics.totalInvestment}</div>
              <div className="text-sm text-gray-600">Total Investment</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{roiMetrics.annualSavings}</div>
              <div className="text-sm text-gray-600">Annual Savings</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{roiMetrics.paybackPeriod}</div>
              <div className="text-sm text-gray-600">Payback Period</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">{roiMetrics.threeYearROI}</div>
              <div className="text-sm text-gray-600">3-Year ROI</div>
            </div>
          </div>

          {/* Before vs After Comparison */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Before vs After Integration</h4>
            <div className="space-y-4">
              {beforeAfterMetrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <Icon className="w-5 h-5 text-gray-600" />
                      <h5 className="font-medium text-gray-900">{metric.metric}</h5>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-3 bg-red-50 rounded border border-red-200">
                        <div className="text-sm font-medium text-red-800">Before</div>
                        <div className="text-lg font-bold text-red-600">{metric.before}</div>
                      </div>
                      <div className="text-center p-3 bg-green-50 rounded border border-green-200">
                        <div className="text-sm font-medium text-green-800">After</div>
                        <div className="text-lg font-bold text-green-600">{metric.after}</div>
                      </div>
                      <div className="text-center p-3 bg-blue-50 rounded border border-blue-200">
                        <div className="text-sm font-medium text-blue-800">Improvement</div>
                        <div className="text-lg font-bold text-blue-600">{metric.improvement}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Staff Productivity Gains */}
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-3">Staff Productivity Gains</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <div className="font-medium text-gray-900">Administrative Staff</div>
                <div className="text-green-600 font-semibold">+35% efficiency</div>
                <div className="text-gray-600">Automated workflows and unified data access</div>
              </div>
              <div>
                <div className="font-medium text-gray-900">Faculty</div>
                <div className="text-green-600 font-semibold">+28% efficiency</div>
                <div className="text-gray-600">Streamlined grading and student tracking</div>
              </div>
              <div>
                <div className="font-medium text-gray-900">IT Support</div>
                <div className="text-green-600 font-semibold">+42% efficiency</div>
                <div className="text-gray-600">Reduced system maintenance and support tickets</div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
