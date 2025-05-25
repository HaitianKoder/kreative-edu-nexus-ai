
import React, { useState } from 'react';
import { X, User, BookOpen, DollarSign, Brain, Calendar, FileText, AlertTriangle, Edit, MessageSquare, GraduationCap, TrendingUp, Clock, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface StudentProfileProps {
  studentId: string;
  onClose: () => void;
}

export const StudentProfile: React.FC<StudentProfileProps> = ({ studentId, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');

  // Enhanced mock student data showcasing SMS+LMS integration
  const student = {
    id: 'STU001',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@email.com',
    phone: '(555) 123-4567',
    photo: null,
    program: 'Computer Science',
    year: 'Junior',
    gpa: 3.7,
    creditHours: 15,
    financialStatus: 'current',
    academicStatus: 'good-standing',
    enrollmentStatus: 'active',
    aiUsage: 67,
    balance: 0,
    totalAidReceived: 15000,
    riskScore: 'low',
    // SMS Integration Data
    enrollment: {
      admissionDate: '2022-08-15',
      expectedGraduation: '2025-05-15',
      totalCreditsEarned: 84,
      creditsRequired: 120,
      attendanceRate: 94.2
    },
    financial: {
      tuitionDue: 8500,
      scholarships: 2000,
      outstandingBalance: 0,
      paymentHistory: [
        { date: '2023-08-15', amount: 8500, type: 'Tuition Payment', status: 'Paid' },
        { date: '2023-08-15', amount: -2000, type: 'Merit Scholarship', status: 'Applied' }
      ]
    },
    // LMS Integration Data
    courses: [
      { 
        code: 'CS301', 
        name: 'Data Structures', 
        grade: 'A-', 
        completion: 85,
        aiTokensUsed: 1250,
        assignmentsCompleted: 8,
        assignmentsTotal: 10,
        discussionPosts: 15,
        lastActive: '2 hours ago'
      },
      { 
        code: 'CS350', 
        name: 'Software Engineering', 
        grade: 'B+', 
        completion: 78,
        aiTokensUsed: 890,
        assignmentsCompleted: 6,
        assignmentsTotal: 8,
        discussionPosts: 12,
        lastActive: '1 day ago'
      },
      { 
        code: 'MATH220', 
        name: 'Statistics', 
        grade: 'A', 
        completion: 92,
        aiTokensUsed: 650,
        assignmentsCompleted: 7,
        assignmentsTotal: 7,
        discussionPosts: 8,
        lastActive: '30 minutes ago'
      }
    ],
    // Integrated Analytics
    analytics: {
      academicTrend: 'improving',
      aiEffectiveness: 89,
      engagementScore: 92,
      predictedFinalGPA: 3.8,
      interventionsNeeded: 0,
      successProbability: 95
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: User },
    { id: 'academic', label: 'Academic Progress', icon: BookOpen },
    { id: 'financial', label: 'Financial', icon: DollarSign },
    { id: 'ai-integration', label: 'AI Learning', icon: Brain },
    { id: 'analytics', label: 'Success Analytics', icon: TrendingUp }
  ];

  const getRiskBadgeColor = (risk: string) => {
    switch (risk) {
      case 'low': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'high': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 h-fit max-h-[90vh] overflow-hidden flex flex-col">
      {/* Enhanced Header */}
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <Avatar className="w-16 h-16">
              <AvatarImage src={student.photo} />
              <AvatarFallback className="bg-blue-100 text-blue-600 text-lg font-semibold">
                {student.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-xl font-bold text-gray-900">{student.name}</h2>
              <p className="text-sm text-gray-600">{student.id} • {student.program} • {student.year}</p>
              <div className="flex items-center space-x-2 mt-2">
                <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">
                  {student.enrollmentStatus}
                </Badge>
                <Badge className={getRiskBadgeColor(student.riskScore)}>
                  {student.riskScore} risk
                </Badge>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Edit className="w-4 h-4 mr-2" />
              Edit Profile
            </Button>
            <Button variant="outline" size="sm">
              <MessageSquare className="w-4 h-4 mr-2" />
              Send Message
            </Button>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Quick Stats Bar */}
      <div className="px-6 py-3 bg-gray-50 border-b border-gray-200">
        <div className="grid grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-lg font-semibold text-gray-900">{student.gpa}</p>
            <p className="text-xs text-gray-600">Current GPA</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-900">{student.enrollment.attendanceRate}%</p>
            <p className="text-xs text-gray-600">Attendance</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-900">{student.aiUsage}%</p>
            <p className="text-xs text-gray-600">AI Usage</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-900">{student.analytics.engagementScore}%</p>
            <p className="text-xs text-gray-600">Engagement</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-1 px-6 overflow-x-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-3 px-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <Icon className="w-4 h-4 inline mr-1" />
                {tab.label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Contact & Status */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Student Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <p className="text-sm text-gray-900">{student.email}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Phone</label>
                    <p className="text-sm text-gray-900">{student.phone}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Admission Date</label>
                    <p className="text-sm text-gray-900">{student.enrollment.admissionDate}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Expected Graduation</label>
                    <p className="text-sm text-gray-900">{student.enrollment.expectedGraduation}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Academic Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Academic Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Credits Completed</span>
                      <span>{student.enrollment.totalCreditsEarned} / {student.enrollment.creditsRequired}</span>
                    </div>
                    <Progress value={(student.enrollment.totalCreditsEarned / student.enrollment.creditsRequired) * 100} />
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-blue-50 rounded-lg p-3">
                      <p className="text-lg font-bold text-blue-900">{student.gpa}</p>
                      <p className="text-sm text-blue-600">Current GPA</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3">
                      <p className="text-lg font-bold text-green-900">{student.creditHours}</p>
                      <p className="text-sm text-green-600">Credits This Term</p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-3">
                      <p className="text-lg font-bold text-purple-900">{student.enrollment.attendanceRate}%</p>
                      <p className="text-sm text-purple-600">Attendance Rate</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'academic' && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Current Courses - SMS+LMS Integration</CardTitle>
                <CardDescription>Real-time academic performance combining enrollment and learning data</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {student.courses.map((course, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-semibold text-gray-900">{course.code} - {course.name}</h4>
                          <p className="text-sm text-gray-600">Current Grade: {course.grade}</p>
                        </div>
                        <Badge variant="outline">{course.completion}% Complete</Badge>
                      </div>
                      
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Course Progress</span>
                            <span>{course.completion}%</span>
                          </div>
                          <Progress value={course.completion} />
                        </div>
                        
                        <div className="grid grid-cols-3 gap-4 text-sm">
                          <div>
                            <p className="text-gray-600">Assignments</p>
                            <p className="font-medium">{course.assignmentsCompleted}/{course.assignmentsTotal}</p>
                          </div>
                          <div>
                            <p className="text-gray-600">Discussion Posts</p>
                            <p className="font-medium">{course.discussionPosts}</p>
                          </div>
                          <div>
                            <p className="text-gray-600">AI Tokens Used</p>
                            <p className="font-medium">{course.aiTokensUsed}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="w-4 h-4 mr-1" />
                          Last active: {course.lastActive}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'financial' && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Financial Overview - SMS Integration</CardTitle>
                <CardDescription>Complete financial tracking from student information system</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="flex items-center">
                      <DollarSign className="w-6 h-6 text-green-600" />
                      <div className="ml-3">
                        <p className="text-sm text-green-600 font-medium">Account Balance</p>
                        <p className="text-xl font-bold text-green-900">${student.balance.toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="flex items-center">
                      <GraduationCap className="w-6 h-6 text-blue-600" />
                      <div className="ml-3">
                        <p className="text-sm text-blue-600 font-medium">Total Aid Received</p>
                        <p className="text-xl font-bold text-blue-900">${student.totalAidReceived.toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Payment History</h4>
                  <div className="space-y-2">
                    {student.financial.paymentHistory.map((payment, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="text-sm font-medium text-gray-900">{payment.type}</p>
                          <p className="text-xs text-gray-600">{payment.date}</p>
                        </div>
                        <div className="text-right">
                          <p className={`text-sm font-medium ${payment.amount > 0 ? 'text-green-600' : 'text-blue-600'}`}>
                            ${Math.abs(payment.amount).toLocaleString()}
                          </p>
                          <p className="text-xs text-gray-600">{payment.status}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'ai-integration' && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">AI Learning Integration - LMS Data</CardTitle>
                <CardDescription>AI tutoring usage correlated with academic performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="bg-purple-50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Brain className="w-6 h-6 text-purple-600" />
                        <div className="ml-3">
                          <p className="text-sm text-purple-600 font-medium">Monthly AI Usage</p>
                          <p className="text-xl font-bold text-purple-900">{student.aiUsage}%</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-purple-600">Effectiveness Score</p>
                        <p className="text-lg font-bold text-purple-900">{student.analytics.aiEffectiveness}%</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">AI Usage by Course</h4>
                    <div className="space-y-3">
                      {student.courses.map((course, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <p className="text-sm font-medium text-gray-900">{course.code}</p>
                            <p className="text-xs text-gray-600">{course.name}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-medium text-gray-900">{course.aiTokensUsed} tokens</p>
                            <p className="text-xs text-gray-600">Grade: {course.grade}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">AI Impact on Performance</h4>
                    <div className="bg-green-50 rounded-lg p-4">
                      <p className="text-sm text-green-700">
                        AI tutoring sessions correlate with a <strong>0.3 GPA increase</strong> and 
                        <strong> 15% higher assignment completion rate</strong> for this student.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Success Analytics - Integrated Insights</CardTitle>
                <CardDescription>SMS+LMS data integration provides predictive student success indicators</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-green-50 rounded-lg p-4 text-center">
                      <Target className="w-8 h-8 text-green-600 mx-auto mb-2" />
                      <p className="text-2xl font-bold text-green-900">{student.analytics.successProbability}%</p>
                      <p className="text-sm text-green-600">Success Probability</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4 text-center">
                      <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <p className="text-2xl font-bold text-blue-900">{student.analytics.predictedFinalGPA}</p>
                      <p className="text-sm text-blue-600">Predicted Final GPA</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Risk Assessment</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                        <span className="text-sm font-medium text-green-900">Academic Performance</span>
                        <Badge className="bg-green-100 text-green-800">Low Risk</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                        <span className="text-sm font-medium text-green-900">Financial Standing</span>
                        <Badge className="bg-green-100 text-green-800">Low Risk</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                        <span className="text-sm font-medium text-green-900">Engagement Level</span>
                        <Badge className="bg-green-100 text-green-800">High</Badge>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Integrated Insights</h4>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <ul className="space-y-2 text-sm text-blue-800">
                        <li>• Strong correlation between AI usage and improved assignment scores</li>
                        <li>• Consistent attendance pattern supports academic success</li>
                        <li>• Financial stability allows focus on academic goals</li>
                        <li>• High engagement in discussion forums indicates course mastery</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Recommendations</h4>
                    <div className="bg-yellow-50 rounded-lg p-4">
                      <ul className="space-y-2 text-sm text-yellow-800">
                        <li>• Continue current AI tutoring pattern for optimal learning</li>
                        <li>• Consider advanced coursework based on current performance</li>
                        <li>• Maintain engagement levels across all enrolled courses</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};
