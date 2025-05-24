
import React from 'react';

const systemMetrics = [
  {
    name: 'API Gateway',
    status: 'healthy',
    responseTime: '45ms',
    uptime: '99.9%',
    lastChecked: '2 minutes ago'
  },
  {
    name: 'Database (PostgreSQL)',
    status: 'healthy',
    responseTime: '12ms',
    uptime: '99.8%',
    lastChecked: '1 minute ago'
  },
  {
    name: 'AI Orchestration',
    status: 'warning',
    responseTime: '156ms',
    uptime: '99.5%',
    lastChecked: '30 seconds ago'
  },
  {
    name: 'File Storage',
    status: 'healthy',
    responseTime: '89ms',
    uptime: '100%',
    lastChecked: '1 minute ago'
  },
  {
    name: 'Authentication Service',
    status: 'healthy',
    responseTime: '23ms',
    uptime: '99.9%',
    lastChecked: '45 seconds ago'
  }
];

export const SystemHealthPanel: React.FC = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy':
        return 'bg-green-500';
      case 'warning':
        return 'bg-yellow-500';
      case 'error':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'healthy':
        return 'bg-green-100 text-green-800';
      case 'warning':
        return 'bg-yellow-100 text-yellow-800';
      case 'error':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">
          System Health Monitor
        </h2>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">Auto-refresh</span>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Overall system status */}
      <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="font-medium text-green-800">All Systems Operational</span>
          </div>
          <span className="text-sm text-green-600">Last incident: 7 days ago</span>
        </div>
      </div>

      {/* System services list */}
      <div className="space-y-3">
        {systemMetrics.map((service) => (
          <div key={service.name} className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${getStatusColor(service.status)}`}></div>
                <span className="font-medium text-gray-900">{service.name}</span>
                <span className={`px-2 py-1 text-xs font-medium rounded ${getStatusBadge(service.status)}`}>
                  {service.status}
                </span>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="text-right">
                  <div className="font-medium">{service.responseTime}</div>
                  <div className="text-xs">Response Time</div>
                </div>
                <div className="text-right">
                  <div className="font-medium">{service.uptime}</div>
                  <div className="text-xs">Uptime</div>
                </div>
                <div className="text-right">
                  <div className="text-xs">{service.lastChecked}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Performance metrics */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="text-center p-4 bg-gray-50 rounded-lg">
          <div className="text-2xl font-bold text-gray-900">156ms</div>
          <div className="text-sm text-gray-600">Avg Response Time</div>
        </div>
        <div className="text-center p-4 bg-gray-50 rounded-lg">
          <div className="text-2xl font-bold text-gray-900">99.8%</div>
          <div className="text-sm text-gray-600">Overall Uptime</div>
        </div>
        <div className="text-center p-4 bg-gray-50 rounded-lg">
          <div className="text-2xl font-bold text-gray-900">2.1k</div>
          <div className="text-sm text-gray-600">Requests/min</div>
        </div>
      </div>
    </div>
  );
};
