
import React, { useState } from 'react';
import { X, User, BookOpen, DollarSign, Brain, Calendar, FileText, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface StudentProfileProps {
  studentId: string;
  onClose: () => void;
}

export const StudentProfile: React.FC<StudentProfileProps> = ({ studentId, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock student data - in real app would fetch from API
  const student = {
    id: 'STU001',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@email.com',
    phone: '(555) 123-4567',
    program: 'Computer Science',
    year: 'Junior',
    gpa: 3.7,
    creditHours: 15,
    financialStatus: 'current',
    academicStatus: 'good-standing',
    aiUsage: 67,
    balance: 0,
    courses: [
      { code: 'CS301', name: 'Data Structures', grade: 'A-', completion: 85 },
      { code: 'CS350', name: 'Software Engineering', grade: 'B+', completion: 78 },
      { code: 'MATH220', name: 'Statistics', grade: 'A', completion: 92 }
    ],
    transcript: [
      { term: 'Fall 2023', gpa: 3.8, credits: 15, status: 'Complete' },
      { term: 'Spring 2023', gpa: 3.6, credits: 16, status: 'Complete' },
      { term: 'Fall 2022', gpa: 3.7, credits: 14, status: 'Complete' }
    ],
    aiActivity: [
      { date: '2023-12-01', course: 'CS301', tokens: 150, type: 'Tutoring' },
      { date: '2023-11-30', course: 'CS350', tokens: 89, type: 'Assignment Help' },
      { date: '2023-11-29', course: 'MATH220', tokens: 203, type: 'Concept Explanation' }
    ]
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: User },
    { id: 'academic', label: 'Academic', icon: BookOpen },
    { id: 'financial', label: 'Financial', icon: DollarSign },
    { id: 'ai-usage', label: 'AI Usage', icon: Brain },
    { id: 'transcript', label: 'Transcript', icon: FileText }
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 h-fit">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">{student.name}</h2>
          <p className="text-sm text-gray-600">{student.id} • {student.program}</p>
        </div>
        <Button variant="ghost" size="sm" onClick={onClose}>
          <X className="w-4 h-4" />
        </Button>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-1 px-6">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-3 px-2 text-sm font-medium border-b-2 transition-colors ${
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
      <div className="p-6 max-h-96 overflow-y-auto">
        {activeTab === 'overview' && (
          <div className="space-y-4">
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
                <label className="block text-sm font-medium text-gray-700">Academic Year</label>
                <p className="text-sm text-gray-900">{student.year}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Current GPA</label>
                <p className="text-sm text-gray-900">{student.gpa}</p>
              </div>
            </div>
            
            {/* Quick Status */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-sm font-medium text-gray-700 mb-2">Quick Status</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Academic Standing</span>
                  <span className="text-sm text-green-600 font-medium">Good Standing</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Financial Status</span>
                  <span className="text-sm text-green-600 font-medium">Current</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Enrollment</span>
                  <span className="text-sm text-blue-600 font-medium">Active</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'academic' && (
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">Current Courses</h3>
              <div className="space-y-2">
                {student.courses.map((course, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{course.code}</p>
                      <p className="text-xs text-gray-600">{course.name}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">{course.grade}</p>
                      <p className="text-xs text-gray-600">{course.completion}% complete</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-3">
                <p className="text-sm text-blue-600 font-medium">Current Credits</p>
                <p className="text-lg font-bold text-blue-900">{student.creditHours}</p>
              </div>
              <div className="bg-green-50 rounded-lg p-3">
                <p className="text-sm text-green-600 font-medium">Cumulative GPA</p>
                <p className="text-lg font-bold text-green-900">{student.gpa}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'financial' && (
          <div className="space-y-4">
            <div className="bg-green-50 rounded-lg p-4">
              <div className="flex items-center">
                <DollarSign className="w-6 h-6 text-green-600" />
                <div className="ml-3">
                  <p className="text-sm text-green-600 font-medium">Account Balance</p>
                  <p className="text-xl font-bold text-green-900">${student.balance.toLocaleString()}</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">Payment History</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Tuition Payment</p>
                    <p className="text-xs text-gray-600">Fall 2023</p>
                  </div>
                  <p className="text-sm font-medium text-green-600">$8,500</p>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Financial Aid</p>
                    <p className="text-xs text-gray-600">Scholarship Applied</p>
                  </div>
                  <p className="text-sm font-medium text-blue-600">-$2,000</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'ai-usage' && (
          <div className="space-y-4">
            <div className="bg-purple-50 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Brain className="w-6 h-6 text-purple-600" />
                  <div className="ml-3">
                    <p className="text-sm text-purple-600 font-medium">Token Usage</p>
                    <p className="text-xl font-bold text-purple-900">{student.aiUsage}%</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-purple-600">of monthly quota</p>
                  <p className="text-sm font-medium text-purple-900">5,025 / 7,500</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">Recent AI Activity</h3>
              <div className="space-y-2">
                {student.aiActivity.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{activity.course}</p>
                      <p className="text-xs text-gray-600">{activity.type} • {activity.date}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">{activity.tokens} tokens</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'transcript' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-700">Academic Transcript</h3>
              <Button variant="outline" size="sm">
                <FileText className="w-4 h-4 mr-2" />
                Export PDF
              </Button>
            </div>
            
            <div className="space-y-2">
              {student.transcript.map((term, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{term.term}</p>
                    <p className="text-xs text-gray-600">{term.credits} credits • {term.status}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">GPA: {term.gpa}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
