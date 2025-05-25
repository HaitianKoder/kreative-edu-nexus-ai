
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Lightbulb, TrendingUp, Users, BookOpen, DollarSign, Target, Brain, Award } from 'lucide-react';

export const AIInsights: React.FC = () => {
  // Automated insights data
  const aiInsights = [
    {
      title: "Computer Science students using AI tutoring show 23% higher completion rates",
      confidence: 97,
      impact: "High",
      category: "Academic Performance",
      evidence: "Analysis of 1,247 students over 2 semesters",
      recommendation: "Expand AI tutoring program to all CS courses"
    },
    {
      title: "Students with consistent financial aid have 34% better retention when combined with AI support",
      confidence: 94,
      impact: "Critical",
      category: "Retention",
      evidence: "SMS financial data + LMS engagement patterns",
      recommendation: "Integrate AI tutoring with financial aid counseling"
    },
    {
      title: "Evening AI usage correlates with 15% improvement in next-day assignment scores",
      confidence: 89,
      impact: "Medium",
      category: "Learning Patterns",
      evidence: "Temporal analysis of 450K AI interactions",
      recommendation: "Promote evening study sessions with AI support"
    }
  ];

  // Department performance comparison
  const departmentPerformance = [
    { 
      department: 'Computer Science',
      aiAdoption: 78,
      retention: 94,
      gpa: 3.4,
      satisfaction: 4.6,
      recommendations: ['Maintain current AI integration', 'Focus on advanced topics']
    },
    { 
      department: 'Mathematics',
      aiAdoption: 45,
      retention: 87,
      gpa: 3.1,
      satisfaction: 4.2,
      recommendations: ['Increase AI tutoring promotion', 'Target struggling students']
    },
    { 
      department: 'Engineering',
      aiAdoption: 62,
      retention: 91,
      gpa: 3.3,
      satisfaction: 4.4,
      recommendations: ['Expand to lab courses', 'Technical writing support']
    },
    { 
      department: 'Business',
      aiAdoption: 38,
      retention: 89,
      gpa: 3.2,
      satisfaction: 4.1,
      recommendations: ['Case study AI integration', 'Financial modeling support']
    }
  ];

  // Learning pattern analysis
  const learningPatterns = [
    { demographic: 'First-Gen College', aiUsage: 67, successRate: 82, supportNeeded: 'High' },
    { demographic: 'International', aiUsage: 89, successRate: 91, supportNeeded: 'Medium' },
    { demographic: 'Part-time', aiUsage: 45, successRate: 76, supportNeeded: 'High' },
    { demographic: 'Traditional', aiUsage: 56, successRate: 88, supportNeeded: 'Low' }
  ];

  // ROI analysis data
  const roiData = [
    { quarter: 'Q1 2024', investment: 125000, value: 187000, roi: 49.6 },
    { quarter: 'Q2 2024', investment: 135000, value: 218000, roi: 61.5 },
    { quarter: 'Q3 2024', investment: 145000, value: 251000, roi: 73.1 },
    { quarter: 'Q4 2024', investment: 155000, value: 289000, roi: 86.5 }
  ];

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'Critical': return 'bg-red-100 text-red-800 border-red-200';
      case 'High': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-blue-100 text-blue-800 border-blue-200';
    }
  };

  return (
    <div className="space-y-6">
      {/* Automated Insights */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Lightbulb className="w-5 h-5 mr-2 text-yellow-600" />
            AI-Generated Insights
          </CardTitle>
          <CardDescription>Automated analysis of SMS+LMS integration reveals key success patterns</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {aiInsights.map((insight, index) => (
              <div key={index} className="border rounded-lg p-4 bg-gradient-to-r from-blue-50 to-purple-50">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-semibold text-gray-900 text-lg leading-6">{insight.title}</h4>
                  <div className="flex items-center space-x-2">
                    <Badge className={getImpactColor(insight.impact)}>
                      {insight.impact} Impact
                    </Badge>
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      {insight.confidence}% confidence
                    </Badge>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <p className="text-sm font-medium text-gray-700">Category</p>
                    <p className="text-sm text-gray-600">{insight.category}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">Evidence</p>
                    <p className="text-sm text-gray-600">{insight.evidence}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">Recommendation</p>
                    <p className="text-sm text-blue-600 font-medium">{insight.recommendation}</p>
                  </div>
                </div>
                
                <Button variant="outline" size="sm" className="text-blue-600 border-blue-200 hover:bg-blue-50">
                  View Detailed Analysis
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Department Performance Comparison */}
      <Card>
        <CardHeader>
          <CardTitle>Department Performance Analysis</CardTitle>
          <CardDescription>AI adoption rates correlated with academic outcomes and satisfaction</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-4">AI Adoption vs Retention Rates</h4>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={departmentPerformance}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="department" angle={-45} textAnchor="end" height={80} />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="aiAdoption" fill="#2563eb" name="AI Adoption %" />
                    <Bar dataKey="retention" fill="#16a34a" name="Retention %" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium text-gray-900">Department Insights & Recommendations</h4>
              {departmentPerformance.map((dept, index) => (
                <div key={index} className="border rounded-lg p-3 bg-gray-50">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-medium text-gray-900">{dept.department}</h5>
                    <div className="flex items-center space-x-2 text-sm">
                      <span className="text-blue-600">{dept.aiAdoption}% AI</span>
                      <span className="text-green-600">{dept.retention}% retention</span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    {dept.recommendations.map((rec, idx) => (
                      <p key={idx} className="text-xs text-gray-600">• {rec}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Learning Pattern Analysis */}
        <Card>
          <CardHeader>
            <CardTitle>Learning Pattern Analysis</CardTitle>
            <CardDescription>AI usage patterns across different student demographics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {learningPatterns.map((pattern, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{pattern.demographic}</p>
                    <p className="text-sm text-gray-600">{pattern.aiUsage}% AI usage</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900">{pattern.successRate}% success</p>
                    <Badge 
                      variant="outline"
                      className={pattern.supportNeeded === 'High' ? 'text-red-600 border-red-200' : 
                                pattern.supportNeeded === 'Medium' ? 'text-yellow-600 border-yellow-200' : 
                                'text-green-600 border-green-200'}
                    >
                      {pattern.supportNeeded} support needed
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 bg-blue-50 rounded-lg p-4">
              <h4 className="font-medium text-blue-900 mb-2">Key Insight</h4>
              <p className="text-sm text-blue-800">
                First-generation college students and part-time students show lower AI adoption but benefit 
                significantly when engaged. Targeted outreach could improve outcomes for these populations.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* ROI Analysis */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <DollarSign className="w-5 h-5 mr-2 text-green-600" />
              AI Investment ROI Analysis
            </CardTitle>
            <CardDescription>Quantified value of AI integration on student outcomes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={roiData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="quarter" />
                  <YAxis />
                  <Tooltip formatter={(value, name) => [
                    name === 'roi' ? `${value}% ROI` : `$${value.toLocaleString()}`,
                    name === 'investment' ? 'Investment' : name === 'value' ? 'Value Generated' : 'ROI'
                  ]} />
                  <Line type="monotone" dataKey="investment" stroke="#dc2626" strokeWidth={2} />
                  <Line type="monotone" dataKey="value" stroke="#16a34a" strokeWidth={2} />
                  <Line type="monotone" dataKey="roi" stroke="#2563eb" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-lg p-3 text-center">
                <p className="text-lg font-bold text-green-900">86.5%</p>
                <p className="text-sm text-green-600">Current Quarter ROI</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 text-center">
                <p className="text-lg font-bold text-blue-900">$289K</p>
                <p className="text-sm text-blue-600">Value Generated</p>
              </div>
            </div>
            
            <div className="mt-4 bg-green-50 rounded-lg p-4">
              <h4 className="font-medium text-green-900 mb-2">Value Breakdown</h4>
              <ul className="text-sm text-green-800 space-y-1">
                <li>• Increased retention: $156K value</li>
                <li>• Higher completion rates: $89K value</li>
                <li>• Reduced support costs: $44K value</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Actionable Recommendations */}
      <Card className="border-purple-200 bg-purple-50">
        <CardHeader>
          <CardTitle className="flex items-center text-purple-800">
            <Target className="w-5 h-5 mr-2" />
            Strategic Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-purple-900 mb-3">Immediate Opportunities</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Award className="w-5 h-5 text-purple-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-purple-900">Expand Computer Science Model</p>
                    <p className="text-sm text-purple-700">Replicate 23% completion rate improvement in other STEM departments</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-5 h-5 text-purple-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-purple-900">Target Underserved Demographics</p>
                    <p className="text-sm text-purple-700">Focus on first-gen and part-time students with personalized AI onboarding</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <BookOpen className="w-5 h-5 text-purple-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-purple-900">Integrate Financial Aid Counseling</p>
                    <p className="text-sm text-purple-700">Combine AI tutoring with financial support for maximum retention impact</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-purple-900 mb-3">Expected Outcomes</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <span className="text-sm font-medium text-gray-900">Institution-wide retention</span>
                  <span className="font-bold text-purple-900">+12%</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <span className="text-sm font-medium text-gray-900">Student satisfaction</span>
                  <span className="font-bold text-purple-900">+18%</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <span className="text-sm font-medium text-gray-900">Annual value generation</span>
                  <span className="font-bold text-purple-900">$1.2M</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
