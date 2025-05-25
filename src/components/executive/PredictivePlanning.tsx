
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Target, TrendingUp, AlertTriangle, Calendar } from 'lucide-react';

export const PredictivePlanning: React.FC = () => {
  const enrollmentForecast = [
    { period: "Spring 2025", projected: 8450, confidence: "95%", trend: "+3.2%" },
    { period: "Fall 2025", projected: 9200, confidence: "92%", trend: "+5.8%" },
    { period: "Spring 2026", projected: 8750, confidence: "87%", trend: "+2.1%" },
    { period: "Fall 2026", projected: 9800, confidence: "82%", trend: "+6.5%" }
  ];

  const budgetProjections = {
    aiCosts: { current: "$45K/month", projected: "$52K/month", trend: "+15%" },
    infrastructure: { current: "$28K/month", projected: "$25K/month", trend: "-11%" },
    staffing: { current: "$180K/month", projected: "$195K/month", trend: "+8%" },
    total: { current: "$253K/month", projected: "$272K/month", trend: "+7.5%" }
  };

  const riskAssessments = [
    {
      risk: "Enrollment Decline",
      probability: "Low",
      impact: "High",
      mitigation: "Enhanced recruitment, AI-powered retention programs",
      status: "green"
    },
    {
      risk: "AI Budget Overrun",
      probability: "Medium",
      impact: "Medium",
      mitigation: "Usage monitoring, tiered access controls",
      status: "yellow"
    },
    {
      risk: "Compliance Gap",
      probability: "Low",
      impact: "High",
      mitigation: "Regular audits, automated compliance checks",
      status: "green"
    },
    {
      risk: "Technology Disruption",
      probability: "Medium",
      impact: "Medium",
      mitigation: "Continuous platform updates, vendor diversification",
      status: "yellow"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'green': return 'bg-green-50 text-green-700 border-green-200';
      case 'yellow': return 'bg-yellow-50 text-yellow-700 border-yellow-200';
      case 'red': return 'bg-red-50 text-red-700 border-red-200';
      default: return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
      {/* Enrollment & Budget Forecasting */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Calendar className="w-5 h-5 text-blue-600" />
            <span>Predictive Planning</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Enrollment Forecast */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Enrollment Forecasting</h4>
              <div className="space-y-3">
                {enrollmentForecast.map((forecast, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                    <div>
                      <div className="font-medium text-gray-900">{forecast.period}</div>
                      <div className="text-sm text-gray-600">Confidence: {forecast.confidence}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-gray-900">{forecast.projected.toLocaleString()}</div>
                      <Badge className="text-xs bg-green-50 text-green-600">
                        {forecast.trend}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Budget Projections */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Budget Projections (Next 12 Months)</h4>
              <div className="space-y-2">
                {Object.entries(budgetProjections).map(([category, data], index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <div className="capitalize font-medium text-gray-900">{category}</div>
                    <div className="text-right">
                      <div className="text-sm text-gray-600">{data.current} → {data.projected}</div>
                      <div className={`text-xs font-medium ${data.trend.startsWith('+') ? 'text-red-600' : 'text-green-600'}`}>
                        {data.trend}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Risk Assessment & Strategic Initiatives */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertTriangle className="w-5 h-5 text-orange-600" />
            <span>Risk Assessment & Strategic Initiatives</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Risk Assessment */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Risk Assessment Matrix</h4>
              <div className="space-y-3">
                {riskAssessments.map((risk, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-medium text-gray-900">{risk.risk}</h5>
                      <Badge className={`text-xs ${getStatusColor(risk.status)}`}>
                        {risk.probability} Risk
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm mb-2">
                      <div>
                        <span className="text-gray-600">Probability:</span>
                        <span className="ml-1 font-medium">{risk.probability}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Impact:</span>
                        <span className="ml-1 font-medium">{risk.impact}</span>
                      </div>
                    </div>
                    <div className="text-xs text-gray-600">
                      <span className="font-medium">Mitigation:</span> {risk.mitigation}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Strategic Initiatives */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Strategic Initiatives Tracking</h4>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-medium text-blue-900">AI Integration Phase 2</h5>
                    <Badge className="bg-blue-100 text-blue-800">In Progress</Badge>
                  </div>
                  <div className="w-full bg-blue-200 rounded-full h-2 mb-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                  <div className="text-xs text-blue-700">75% Complete • On Track for Q1 2025</div>
                </div>

                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-medium text-green-900">Student Success Program</h5>
                    <Badge className="bg-green-100 text-green-800">Completed</Badge>
                  </div>
                  <div className="w-full bg-green-200 rounded-full h-2 mb-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                  <div className="text-xs text-green-700">ROI: 340% • Exceeding targets</div>
                </div>

                <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-medium text-yellow-900">Infrastructure Modernization</h5>
                    <Badge className="bg-yellow-100 text-yellow-800">Planning</Badge>
                  </div>
                  <div className="w-full bg-yellow-200 rounded-full h-2 mb-2">
                    <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                  <div className="text-xs text-yellow-700">25% Complete • Budget approval pending</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
