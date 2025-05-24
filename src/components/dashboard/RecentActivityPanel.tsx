
import React from 'react';

const activities = [
  {
    type: 'admission',
    user: 'Sarah Martinez',
    action: 'submitted application for Computer Science',
    time: '3 minutes ago',
    icon: '📝',
    severity: 'info'
  },
  {
    type: 'enrollment',
    user: 'Biology Department',
    action: 'enrollment deposit received - $500',
    time: '8 minutes ago',
    icon: '💰',
    severity: 'success'
  },
  {
    type: 'ai_query',
    user: 'Dr. Wilson\'s CHEM 101',
    action: 'exceeded token quota warning',
    time: '12 minutes ago',
    icon: '⚠️',
    severity: 'warning'
  },
  {
    type: 'financial_aid',
    user: 'Emma Rodriguez',
    action: 'financial aid package approved - $12,500',
    time: '25 minutes ago',
    icon: '🎓',
    severity: 'success'
  },
  {
    type: 'registration',
    user: 'Course Registration System',
    action: 'resolved schedule conflict for 23 students',
    time: '45 minutes ago',
    icon: '📅',
    severity: 'success'
  },
  {
    type: 'transcript',
    user: 'Registrar Office',
    action: 'processed 15 transcript requests',
    time: '1 hour ago',
    icon: '📋',
    severity: 'info'
  },
  {
    type: 'academic_status',
    user: 'Academic Affairs',
    action: 'updated academic probation status for 7 students',
    time: '2 hours ago',
    icon: '⚖️',
    severity: 'warning'
  },
  {
    type: 'waitlist',
    user: 'MATH 201',
    action: 'waitlist movement - 3 students enrolled',
    time: '3 hours ago',
    icon: '🔄',
    severity: 'info'
  },
  {
    type: 'system',
    user: 'SMS+LMS Integration',
    action: 'completed daily data synchronization',
    time: '4 hours ago',
    icon: '🔄',
    severity: 'success'
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

      {/* Activity summary - Updated for SMS+LMS */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-lg font-bold text-gray-900">342</div>
            <div className="text-xs text-gray-600">SMS events today</div>
          </div>
          <div>
            <div className="text-lg font-bold text-gray-900">189</div>
            <div className="text-xs text-gray-600">LMS events today</div>
          </div>
          <div>
            <div className="text-lg font-bold text-gray-900">5</div>
            <div className="text-xs text-gray-600">Critical alerts</div>
          </div>
        </div>
      </div>
    </div>
  );
};
