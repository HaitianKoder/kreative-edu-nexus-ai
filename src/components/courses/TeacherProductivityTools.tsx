
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, AlertTriangle, MessageSquare, BarChart4, Brain, Shield, Users, TrendingDown, CheckCircle } from 'lucide-react';

export const TeacherProductivityTools: React.FC = () => {
  const gradingQueue = [
    { assignment: "Calculus Problem Set 3", submissions: 89, pending: 23, aiAssisted: 66, biasFlags: 0 },
    { assignment: "Psychology Essay", submissions: 156, pending: 78, aiAssisted: 78, biasFlags: 2 },
    { assignment: "Programming Lab 4", submissions: 67, pending: 12, aiAssisted: 55, biasFlags: 0 }
  ];

  const studentAlerts = [
    { student: "Alex Johnson", course: "Advanced Calculus", risk: "High", reason: "3 missed assignments", aiRecommendation: "Schedule 1-on-1 tutoring session" },
    { student: "Maria Garcia", course: "Data Structures", risk: "Medium", reason: "Declining quiz scores", aiRecommendation: "Review prerequisite concepts" },
    { student: "David Chen", course: "Psychology", risk: "Low", reason: "Late submission pattern", aiRecommendation: "Time management resources" }
  ];

  const discussionMetrics = [
    { topic: "Derivative Applications", posts: 47, aiModerated: 3, sentiment: "Positive", engagement: 94 },
    { topic: "Homework Help", posts: 89, aiModerated: 7, sentiment: "Neutral", engagement: 78 },
    { topic: "Exam Preparation", posts: 156, aiModerated: 2, sentiment: "Positive", engagement: 92 }
  ];

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'High': return 'bg-red-100 text-red-800 border-red-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Bulk Grading with AI */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <GraduationCap className="w-5 h-5 text-purple-600" />
            <span>AI-Assisted Grading</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {gradingQueue.map((item, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-medium">{item.assignment}</span>
                  <Badge variant="outline" className="bg-blue-50 text-blue-700">
                    {item.pending} pending
                  </Badge>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total:</span>
                    <span className="font-medium">{item.submissions}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">AI Assisted:</span>
                    <span className="font-medium text-green-600">{item.aiAssisted}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-green-600">
                      {item.biasFlags === 0 ? 'No bias detected' : `${item.biasFlags} bias flags`}
                    </span>
                  </div>
                  <Button size="sm">
                    <Brain className="w-4 h-4 mr-1" />
                    Grade with AI
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Student Progress Analytics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BarChart4 className="w-5 h-5 text-orange-600" />
            <span>Early Intervention Alerts</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {studentAlerts.map((alert, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">{alert.student}</span>
                  <Badge className={getRiskColor(alert.risk)}>
                    {alert.risk} Risk
                  </Badge>
                </div>
                
                <div className="text-sm text-gray-600 mb-2">
                  <div>Course: {alert.course}</div>
                  <div>Issue: {alert.reason}</div>
                </div>

                <div className="bg-blue-50 p-3 rounded-lg">
                  <div className="flex items-start space-x-2">
                    <Brain className="w-4 h-4 text-blue-600 mt-0.5" />
                    <div>
                      <div className="text-xs font-medium text-blue-900 mb-1">AI Recommendation:</div>
                      <div className="text-sm text-blue-800">{alert.aiRecommendation}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Discussion Board Management */}
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MessageSquare className="w-5 h-5 text-green-600" />
            <span>Discussion Board Management</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Discussion Topic</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Posts</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">AI Moderated</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Sentiment</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Engagement</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {discussionMetrics.map((discussion, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{discussion.topic}</td>
                    <td className="py-3 px-4">{discussion.posts}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-1">
                        <Shield className="w-4 h-4 text-green-600" />
                        <span>{discussion.aiModerated}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <Badge variant="outline" className={discussion.sentiment === 'Positive' ? 'text-green-600' : 'text-gray-600'}>
                        {discussion.sentiment}
                      </Badge>
                    </td>
                    <td className="py-3 px-4">{discussion.engagement}%</td>
                    <td className="py-3 px-4">
                      <Button size="sm" variant="ghost">View</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
