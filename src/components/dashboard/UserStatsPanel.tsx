
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const userDistribution = [
  { name: 'Students', value: 2156, color: '#3b82f6' },
  { name: 'Teachers', value: 247, color: '#10b981' },
  { name: 'Admins', value: 23, color: '#f59e0b' },
  { name: 'IT Staff', value: 12, color: '#ef4444' }
];

const recentRegistrations = [
  { name: 'Sarah Johnson', role: 'Student', department: 'Computer Science', date: '2 hours ago' },
  { name: 'Dr. Michael Chen', role: 'Teacher', department: 'Mathematics', date: '5 hours ago' },
  { name: 'Emma Rodriguez', role: 'Student', department: 'Engineering', date: '1 day ago' },
  { name: 'Prof. Lisa Wang', role: 'Teacher', department: 'Physics', date: '1 day ago' }
];

export const UserStatsPanel: React.FC = () => {
  const totalUsers = userDistribution.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">
        User Statistics
      </h2>

      {/* User distribution chart */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-700 mb-4">
          User Distribution
        </h3>
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={userDistribution}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
              >
                {userDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value, name) => [`${value} users`, name]}
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        {/* Legend */}
        <div className="grid grid-cols-2 gap-2 mt-4">
          {userDistribution.map((item) => (
            <div key={item.name} className="flex items-center space-x-2">
              <div 
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="text-sm text-gray-600">
                {item.name}: {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Recent registrations */}
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-4">
          Recent Registrations
        </h3>
        <div className="space-y-3">
          {recentRegistrations.map((user, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <div className="font-medium text-gray-900">{user.name}</div>
                <div className="text-sm text-gray-600">
                  {user.role} • {user.department}
                </div>
              </div>
              <div className="text-xs text-gray-500">
                {user.date}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick stats */}
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="text-center p-3 bg-blue-50 rounded-lg">
          <div className="text-lg font-bold text-blue-900">+47</div>
          <div className="text-xs text-blue-700">New this week</div>
        </div>
        <div className="text-center p-3 bg-green-50 rounded-lg">
          <div className="text-lg font-bold text-green-900">94%</div>
          <div className="text-xs text-green-700">Active rate</div>
        </div>
      </div>
    </div>
  );
};
