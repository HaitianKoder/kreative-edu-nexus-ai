
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Shield, FileText, AlertTriangle, Eye, Brain, TrendingDown, CheckCircle, Clock } from 'lucide-react';

export const ExplainableAI: React.FC = () => {
  // AI recommendation explanation data
  const recommendationSources = [
    { source: 'Financial Aid Records', weight: 35, confidence: 94 },
    { source: 'LMS Engagement Data', weight: 28, confidence: 91 },
    { source: 'Assignment Performance', weight: 22, confidence: 87 },
    { source: 'Attendance Patterns', weight: 15, confidence: 89 }
  ];

  // Citation tracking data
  const citationData = [
    {
      query: "How to improve calculus understanding?",
      aiResponse: "Based on successful patterns...",
      sources: [
        { document: "Math Tutoring Best Practices 2024", relevance: 92, type: "Research Paper" },
        { document: "Student Success Case Studies", relevance: 87, type: "Internal Data" },
        { document: "Calculus Learning Methodologies", relevance: 84, type: "Academic Source" }
      ]
    },
    {
      query: "Financial aid application guidance",
      aiResponse: "Students should prioritize...",
      sources: [
        { document: "Federal Aid Guidelines 2024", relevance: 96, type: "Official Guidelines" },
        { document: "Institution Aid Policies", relevance: 93, type: "Internal Policy" },
        { document: "Student Success Analytics", relevance: 88, type: "Analytics Data" }
      ]
    }
  ];

  // Bias monitoring data
  const biasMetrics = [
    { category: 'Gender', bias: 2.1, threshold: 5, status: 'Good' },
    { category: 'Ethnicity', bias: 3.4, threshold: 5, status: 'Good' },
    { category: 'Socioeconomic', bias: 6.2, threshold: 5, status: 'Alert' },
    { category: 'Academic Background', bias: 1.8, threshold: 5, status: 'Excellent' }
  ];

  // Model drift detection
  const driftData = [
    { week: 'Week 1', accuracy: 94.2, drift: 0.1 },
    { week: 'Week 2', accuracy: 94.1, drift: 0.2 },
    { week: 'Week 3', accuracy: 93.8, drift: 0.5 },
    { week: 'Week 4', accuracy: 93.5, drift: 0.8 },
    { week: 'Week 5', accuracy: 93.9, drift: 0.4 },
    { week: 'Week 6', accuracy: 94.0, drift: 0.3 }
  ];

  const getBiasStatusColor = (status: string) => {
    switch (status) {
      case 'Excellent': return 'bg-green-100 text-green-800 border-green-200';
      case 'Good': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Alert': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Critical': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      {/* AI Recommendation Explanation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Eye className="w-5 h-5 mr-2 text-blue-600" />
            How AI Recommendations Are Generated
          </CardTitle>
          <CardDescription>Transparent breakdown of decision-making factors and data sources</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-4">Data Source Weights</h4>
              <div className="space-y-4">
                {recommendationSources.map((source, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">{source.source}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-600">{source.weight}%</span>
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          {source.confidence}% confidence
                        </Badge>
                      </div>
                    </div>
                    <Progress value={source.weight} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="font-medium text-blue-900 mb-3">Example: At-Risk Student Identification</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                  <div>
                    <p className="font-medium text-blue-900">Step 1: Financial Analysis</p>
                    <p className="text-blue-700">SMS data shows outstanding balance of $2,500+ (35% weight)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                  <div>
                    <p className="font-medium text-blue-900">Step 2: Engagement Review</p>
                    <p className="text-blue-700">LMS shows declining login frequency (28% weight)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                  <div>
                    <p className="font-medium text-blue-900">Step 3: Academic Performance</p>
                    <p className="text-blue-700">Assignment scores below 70% threshold (22% weight)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                  <div>
                    <p className="font-medium text-blue-900">Result: Risk Score 85%</p>
                    <p className="text-blue-700">Recommendation: Financial aid meeting + academic support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Citation Tracking */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <FileText className="w-5 h-5 mr-2 text-green-600" />
            Citation Tracking & Source Attribution
          </CardTitle>
          <CardDescription>Every AI response is traceable to specific data sources and documents</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {citationData.map((item, index) => (
              <div key={index} className="border rounded-lg p-4 bg-gray-50">
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-1">Student Query</h4>
                  <p className="text-sm text-gray-700 bg-white rounded p-2 border">"{item.query}"</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-1">AI Response</h4>
                  <p className="text-sm text-gray-700 bg-white rounded p-2 border">{item.aiResponse}</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Source Documents Used</h4>
                  <div className="space-y-2">
                    {item.sources.map((source, idx) => (
                      <div key={idx} className="flex items-center justify-between p-2 bg-white rounded border">
                        <div>
                          <p className="text-sm font-medium text-gray-900">{source.document}</p>
                          <Badge variant="outline" className="text-xs mt-1">
                            {source.type}
                          </Badge>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-gray-900">{source.relevance}%</p>
                          <p className="text-xs text-gray-600">relevance</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bias Monitoring */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="w-5 h-5 mr-2 text-purple-600" />
              Bias Monitoring Dashboard
            </CardTitle>
            <CardDescription>Fairness metrics across different student demographics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {biasMetrics.map((metric, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{metric.category}</p>
                    <p className="text-sm text-gray-600">Bias Score: {metric.bias}%</p>
                  </div>
                  <div className="text-right">
                    <Badge className={getBiasStatusColor(metric.status)}>
                      {metric.status}
                    </Badge>
                    <p className="text-xs text-gray-600 mt-1">Threshold: {metric.threshold}%</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
                <div>
                  <h4 className="font-medium text-yellow-800">Socioeconomic Bias Alert</h4>
                  <p className="text-sm text-yellow-700 mt-1">
                    Bias score of 6.2% exceeds threshold. AI recommendations may favor students 
                    from higher socioeconomic backgrounds. Review and adjustment recommended.
                  </p>
                  <Button variant="outline" size="sm" className="mt-2 text-yellow-800 border-yellow-300">
                    Investigate Bias
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Model Drift Detection */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingDown className="w-5 h-5 mr-2 text-red-600" />
              Model Drift Detection
            </CardTitle>
            <CardDescription>Monitoring AI model accuracy and performance over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={driftData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="week" />
                  <YAxis domain={[93, 95]} />
                  <Tooltip formatter={(value, name) => [
                    name === 'accuracy' ? `${value}%` : `${value}%`,
                    name === 'accuracy' ? 'Model Accuracy' : 'Drift Score'
                  ]} />
                  <Line type="monotone" dataKey="accuracy" stroke="#16a34a" strokeWidth={2} />
                  <Line type="monotone" dataKey="drift" stroke="#dc2626" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-lg p-3 text-center">
                <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-1" />
                <p className="text-sm font-medium text-green-900">Model Health</p>
                <p className="text-lg font-bold text-green-900">Stable</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 text-center">
                <Clock className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                <p className="text-sm font-medium text-blue-900">Last Retrain</p>
                <p className="text-lg font-bold text-blue-900">2 weeks ago</p>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium text-gray-900 mb-2">Drift Analysis</h4>
              <div className="text-sm text-gray-600 space-y-1">
                <p>• Accuracy remains within acceptable range (93-95%)</p>
                <p>• Slight drift detected in Week 4, now stabilizing</p>
                <p>• No immediate retraining required</p>
                <p>• Next scheduled review: In 2 weeks</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Accountability Summary */}
      <Card className="border-green-200 bg-green-50">
        <CardHeader>
          <CardTitle className="flex items-center text-green-800">
            <Brain className="w-5 h-5 mr-2" />
            AI Accountability Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-medium text-green-900 mb-3">Transparency Measures</h4>
              <div className="space-y-2 text-sm text-green-800">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>100% of recommendations include source attribution</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Real-time bias monitoring across all demographics</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Weekly model performance audits</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-green-900 mb-3">Fairness Metrics</h4>
              <div className="space-y-2 text-sm text-green-800">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Cross-demographic accuracy within 2%</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Equal opportunity across all student groups</span>
                </div>
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="w-4 h-4 text-yellow-600" />
                  <span>1 bias alert requiring attention</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-green-900 mb-3">Quality Assurance</h4>
              <div className="space-y-2 text-sm text-green-800">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>94.2% prediction accuracy maintained</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Continuous model monitoring active</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Human oversight on high-risk decisions</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
