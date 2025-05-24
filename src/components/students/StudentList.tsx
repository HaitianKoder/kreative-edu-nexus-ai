
import React from 'react';
import { User, Calendar, DollarSign, Brain, CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

interface StudentListProps {
  searchQuery: string;
  filters: any;
  selectedStudents: string[];
  onSelectionChange: (students: string[]) => void;
  onStudentSelect: (studentId: string) => void;
}

const mockStudents = [
  {
    id: 'STU001',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@email.com',
    program: 'Computer Science',
    year: 'Junior',
    gpa: 3.7,
    creditHours: 15,
    financialStatus: 'current',
    academicStatus: 'good-standing',
    aiUsage: 67,
    lastActivity: '2 hours ago',
    avatar: null
  },
  {
    id: 'STU002',
    name: 'Michael Chen',
    email: 'michael.chen@email.com',
    program: 'Biology',
    year: 'Senior',
    gpa: 3.2,
    creditHours: 12,
    financialStatus: 'past-due',
    academicStatus: 'warning',
    aiUsage: 89,
    lastActivity: '1 day ago',
    avatar: null
  },
  {
    id: 'STU003',
    name: 'Emily Rodriguez',
    email: 'emily.rodriguez@email.com',
    program: 'Psychology',
    year: 'Sophomore',
    gpa: 3.9,
    creditHours: 16,
    financialStatus: 'current',
    academicStatus: 'good-standing',
    aiUsage: 45,
    lastActivity: '30 minutes ago',
    avatar: null
  },
  {
    id: 'STU004',
    name: 'David Thompson',
    email: 'david.thompson@email.com',
    program: 'Engineering',
    year: 'Freshman',
    gpa: 2.8,
    creditHours: 14,
    financialStatus: 'hold',
    academicStatus: 'probation',
    aiUsage: 95,
    lastActivity: '3 hours ago',
    avatar: null
  }
];

export const StudentList: React.FC<StudentListProps> = ({
  searchQuery,
  filters,
  selectedStudents,
  onSelectionChange,
  onStudentSelect
}) => {
  const getStatusIcon = (academicStatus: string, financialStatus: string) => {
    if (financialStatus === 'hold' || academicStatus === 'probation') {
      return <XCircle className="w-4 h-4 text-red-500" />;
    }
    if (academicStatus === 'warning' || financialStatus === 'past-due') {
      return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
    }
    return <CheckCircle className="w-4 h-4 text-green-500" />;
  };

  const getAiUsageColor = (usage: number) => {
    if (usage > 80) return 'text-red-600 bg-red-50';
    if (usage > 60) return 'text-yellow-600 bg-yellow-50';
    return 'text-green-600 bg-green-50';
  };

  const handleStudentSelect = (studentId: string) => {
    if (selectedStudents.includes(studentId)) {
      onSelectionChange(selectedStudents.filter(id => id !== studentId));
    } else {
      onSelectionChange([...selectedStudents, studentId]);
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Student Records</h2>
        <p className="text-sm text-gray-600">Integrated SMS + LMS data</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <input
                  type="checkbox"
                  className="rounded border-gray-300"
                  onChange={(e) => {
                    if (e.target.checked) {
                      onSelectionChange(mockStudents.map(s => s.id));
                    } else {
                      onSelectionChange([]);
                    }
                  }}
                />
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Student
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Academic Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Financial
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                AI Usage
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last Active
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {mockStudents.map((student) => (
              <tr
                key={student.id}
                className="hover:bg-gray-50 cursor-pointer"
                onClick={() => onStudentSelect(student.id)}
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300"
                    checked={selectedStudents.includes(student.id)}
                    onChange={(e) => {
                      e.stopPropagation();
                      handleStudentSelect(student.id);
                    }}
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                        <User className="w-5 h-5 text-gray-600" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{student.name}</div>
                      <div className="text-sm text-gray-500">{student.id} • {student.program}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    {getStatusIcon(student.academicStatus, student.financialStatus)}
                    <div className="ml-2">
                      <div className="text-sm text-gray-900">GPA: {student.gpa}</div>
                      <div className="text-sm text-gray-500">{student.creditHours} credits</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    student.financialStatus === 'current' ? 'bg-green-100 text-green-800' :
                    student.financialStatus === 'past-due' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    <DollarSign className="w-3 h-3 mr-1" />
                    {student.financialStatus.replace('-', ' ')}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Brain className="w-4 h-4 text-gray-400 mr-2" />
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getAiUsageColor(student.aiUsage)}`}>
                      {student.aiUsage}%
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {student.lastActivity}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
