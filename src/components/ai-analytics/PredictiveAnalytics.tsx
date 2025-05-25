
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ScatterChart, Scatter } from 'recharts';
import { AlertTriangle, TrendingUp, Target, Brain, Users, BookOpen, DollarSign } from 'lucide-react';

export const PredictiveAnalytics: React.FC = () => {
  // Student success prediction data
  const successPrediction = [
    { month: 'Aug', predicted: 92, actual: 89 },
    { month: 'Sep', predicted: 88, actual: 91 },
    { month: 'Oct', predicted: 90, actual: 88 },
    { month: 'Nov', predicted: 87, actual: 89 },
    { month: 'Dec', predicted: 85, actual: null },
    { month: 'Jan', predicted: 83, actual: null }
  ];

  // At-risk students data combining SMS + LMS
  const atRiskStudents = [
    { 
      id: 'STU001', 
      name: 'John Martinez', 
      riskScore: 85, 
      factors: ['Financial', 'Low Engagement'], 
      intervention: 'Financial Aid Meeting',
      smsData: { balance: -2500, attendance: 78 },
      lmsData: { aiUsage: 12, assignments: 65 }
    },
    { 
      id: 'STU045', 
      name: 'Maria Chen', 
      riskScore: 72, 
      factors: ['Academic Performance'], 
      intervention: 'Academic Coaching',
      smsData: { balance: 0, attendance: 94 },
      lmsData: { aiUsage: 45, assignments: 78 }
    },
    { 
      id: 'STU098', 
      name: 'David Kim', 
      riskScore: 68, 
      factors: ['Low AI Usage', 'Attendance'], 
      intervention: 'Study Skills Workshop',
      smsData: { balance: -800, attendance: 82 },
      lmsData: { aiUsage: 8, assignments: 88 }
    }
  ];

  // Course completion forecasting
  const courseForecasting = [
    { course: 'CS 101', enrolled: 120, predicted: 89, confidence: 94 },
    { course: 'MATH 220', enrolled: 95, predicted: 76, confidence: 87 },
    { course: 'ENG 150', enrolled: 200, predicted: 92, confidence: 91 },
    { course: 'PHYS 201', enrolled: 80, predicted: 68, confidence: 85 }
  ];

  // Retention risk scoring
  const retentionData = [
    { semester: 1, withAI: 94, withoutAI: 87, financial: 78 },
    { semester: 2, withAI: 91, withoutAI: 82, financial: 74 },
    { semester: 3, withAI: 89, withoutAI: 78, financial: 70 },
    { semester: 4, withAI: 88, withoutAI: 75, financial: 68 }
  ];

  const getRiskBadgeColor = (score: number) => {
    if (score >= 80) return 'bg-red-100 text-red-800 border-red-200';
    if (score >= 60) return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    return 'bg-green-100 text-green-800 border-green-200';
  };

  return (
    <div className="space-y-6">
      {/* Success Prediction Model */}
      <Card>
        <CardHeader>
          <CardTitle>Student Success Prediction Model</CardTitle>
          <CardDescription>SMS enrollment data + LMS engagement patterns predict academic outcomes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={successPrediction}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis domain={[75, 95]} />
                    <Tooltip formatter={(value, name) => [`${value}%`, name === 'predicted' ? 'Predicted Success Rate' : 'Actual Success Rate']} />
                    <Line type="monotone" dataKey="predicted" stroke="#2563eb" strokeWidth={2} strokeDasharray="5 5" />
                    <Line type="monotone" dataKey="actual" stroke="#16a34a" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Target className="w-5 h-5 text-blue-600" />
                  <span className="font-medium text-blue-900">Model Accuracy</span>
                </div>
                <p className="text-2xl font-bold text-blue-900">94.2%</p>
                <p className="text-sm text-blue-600">Based on 4 months of validation</p>
              </div>
              
              <div className="bg-green-50 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Brain className="w-5 h-5 text-green-600" />
                  <span className="font-medium text-green-900">Key Factors</span>
                </div>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Financial aid status (35%)</li>
                  <li>• AI tutoring usage (28%)</li>
                  <li>• Early assignment scores (22%)</li>
                  <li>• Attendance patterns (15%)</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* At-Risk Student Identification */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <AlertTriangle className="w-5 h-5 mr-2 text-red-600" />
            At-Risk Student Identification
          </CardTitle>
          <CardDescription>Combining financial status + academic performance + AI usage patterns</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {atRiskStudents.map((student, index) => (
              <div key={index} className="border rounded-lg p-4 bg-gray-50">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-gray-900">{student.name}</h4>
                    <p className="text-sm text-gray-600">{student.id}</p>
                  </div>
                  <Badge className={getRiskBadgeColor(student.riskScore)}>
                    {student.riskScore}% Risk Score
                  </Badge>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                  <div className="bg-white rounded p-3">
                    <p className="text-xs text-gray-600 font-medium">SMS DATA</p>
                    <div className="text-sm mt-1">
                      <p>Balance: <span className={student.smsData.balance < 0 ? 'text-red-600' : 'text-green-600'}>
                        ${student.smsData.balance}
                      </span></p>
                      <p>Attendance: {student.smsData.attendance}%</p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded p-3">
                    <p className="text-xs text-gray-600 font-medium">LMS DATA</p>
                    <div className="text-sm mt-1">
                      <p>AI Usage: {student.lmsData.aiUsage}%</p>
                      <p>Assignments: {student.lmsData.assignments}%</p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded p-3">
                    <p className="text-xs text-gray-600 font-medium">INTERVENTION</p>
                    <p className="text-sm font-medium text-blue-600 mt-1">{student.intervention}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">Risk Factors:</span>
                  {student.factors.map((factor, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {factor}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm text-gray-600">
              142 students identified for intervention this month
            </p>
            <Button variant="outline">
              View All At-Risk Students
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Course Completion Forecasting */}
        <Card>
          <CardHeader>
            <CardTitle>Course Completion Forecasting</CardTitle>
            <CardDescription>Early engagement patterns predict final outcomes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {courseForecasting.map((course, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-900">{course.course}</span>
                    <div className="text-right">
                      <span className="text-sm font-medium">{course.predicted}% completion</span>
                      <p className="text-xs text-gray-600">{course.confidence}% confidence</p>
                    </div>
                  </div>
                  <Progress value={(course.predicted / course.enrolled) * 100} />
                  <p className="text-xs text-gray-600">
                    {course.predicted} of {course.enrolled} students predicted to complete
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Retention Risk Analysis */}
        <Card>
          <CardHeader>
            <CardTitle>Retention Risk Analysis</CardTitle>
            <CardDescription>Impact of AI tutoring and financial aid on student retention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={retentionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="semester" />
                  <YAxis domain={[60, 100]} />
                  <Tooltip formatter={(value, name) => [`${value}%`, 
                    name === 'withAI' ? 'With AI Tutoring' : 
                    name === 'withoutAI' ? 'Without AI' : 'Financial Risk']} />
                  <Line type="monotone" dataKey="withAI" stroke="#16a34a" strokeWidth={2} />
                  <Line type="monotone" dataKey="withoutAI" stroke="#dc2626" strokeWidth={2} />
                  <Line type="monotone" dataKey="financial" stroke="#ea580c" strokeWidth={2} strokeDasharray="5 5" />
                </LineChart>
              </ResponsiveContainer>
            </div>
            
            <div className="mt-4 grid grid-cols-3 gap-2 text-xs">
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-green-500 rounded"></div>
                <span>With AI Tutoring</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-red-500 rounded"></div>
                <span>Without AI</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-orange-500 rounded"></div>
                <span>Financial Risk</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Intervention Recommendations */}
      <Card className="border-green-200 bg-green-50">
        <CardHeader>
          <CardTitle className="flex items-center text-green-800">
            <TrendingUp className="w-5 h-5 mr-2" />
            AI-Powered Intervention Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-green-900 mb-3">Immediate Actions</h4>
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 rounded-full bg-green-600 mt-2"></div>
                  <p className="text-sm text-green-800">Schedule financial aid meetings for 23 high-risk students</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 rounded-full bg-green-600 mt-2"></div>
                  <p className="text-sm text-green-800">Increase AI tutoring promotion in MATH 220 (low completion forecast)</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 rounded-full bg-green-600 mt-2"></div>
                  <p className="text-sm text-green-800">Deploy early alerts for 47 students showing engagement decline</p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-green-900 mb-3">Predicted Impact</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-green-800">Retention improvement</span>
                  <span className="font-bold text-green-900">+7.2%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-green-800">Course completion boost</span>
                  <span className="font-bold text-green-900">+12.5%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-green-800">Financial aid efficiency</span>
                  <span className="font-bold text-green-900">+23%</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
