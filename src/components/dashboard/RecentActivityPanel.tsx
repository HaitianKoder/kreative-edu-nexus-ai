
import React from 'react';

const activities = [
  {
    type: 'user_login',
    user: 'Dr. Sarah Wilson',
    action: 'logged in',
    time: '5 minutes ago',
    icon: '👤',
    severity: 'info'
  },
  {
    type: 'ai_query',
    user: 'Computer Science Dept',
    action: 'exceeded token quota warning',
    time: '12 minutes ago',
    icon: '⚠️',
    severity: 'warning'
  },
  {
    type: 'system',
    user: 'System',
    action: 'completed daily backup',
    time: '1 hour ago',
    icon: '💾',
    severity: 'success'
  },
  {
    type: 'user_registration',
    user: 'Emma Rodriguez',
    action: 'registered as student',
    time: '2 hours ago',
    icon: '✅',
    severity: 'info'
  },
  {
    type: 'migration',
    user: 'Data Migration Service',
    action: 'imported 150 student records',
    time: '3 hours ago',
    icon: '📊',
    severity: 'success'
  },
  {
    type: 'security',
    user: 'Security Monitor',
    action: 'detected suspicious login attempt',
    time: '4 hours ago',
    icon: '🔒',
    severity: 'error'
  }
];

export const RecentActivityPanel: React.FC = () => {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'success':
        return 'border-l-green-500 bg-green-50';
      case 'warning':
        return 'border-l-yellow-500 bg-yellow-50';
      case 'error':
        return 'border-l-red-500 bg-red-50';
      default:
        return 'border-l-blue-500 bg-blue-50';
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">
          Recent Activity
        </h2>
        <button className="text-sm text-blue-600 hover:text-blue-800 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded">
          View all
        </button>
      </div>

      <div className="space-y-3">
        {activities.map((activity, index) => (
          <div 
            key={index}
            className={`border-l-4 p-3 rounded-r-lg ${getSeverityColor(activity.severity)}`}
          >
            <div className="flex items-start space-x-3">
              <span className="text-lg">{activity.icon}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {activity.user}
                  </p>
                  <span className="text-xs text-gray-500">
                    {activity.time}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  {activity.action}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Activity summary */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-lg font-bold text-gray-900">247</div>
            <div className="text-xs text-gray-600">Events today</div>
          </div>
          <div>
            <div className="text-lg font-bold text-gray-900">3</div>
            <div className="text-xs text-gray-600">Critical alerts</div>
          </div>
          <div>
            <div className="text-lg font-bold text-gray-900">156</div>
            <div className="text-xs text-gray-600">User actions</div>
          </div>
        </div>
      </div>
    </div>
  );
};
