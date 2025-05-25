
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Users, Database, Activity, Monitor } from 'lucide-react';

export const PerformanceMetrics: React.FC = () => {
  const userMetrics = {
    concurrent: 1247,
    capacity: 2000,
    peak24h: 1856,
    avgSessionDuration: '24 min'
  };

  const integrationStatus = [
    { system: 'Canvas LMS', status: 'synced', lastSync: '2 min ago', records: '15.2K' },
    { system: 'Blackboard', status: 'syncing', lastSync: 'In progress', records: '8.7K' },
    { system: 'Moodle', status: 'synced', lastSync: '5 min ago', records: '12.1K' },
    { system: 'Google Classroom', status: 'error', lastSync: '2 hours ago', records: '0' }
  ];

  const migrationJobs = [
    { id: 'MIG-2024-001', type: 'Student Data', status: 'completed', progress: 100, duration: '2h 15m' },
    { id: 'MIG-2024-002', type: 'Course Content', status: 'running', progress: 67, duration: '1h 32m' },
    { id: 'MIG-2024-003', type: 'Assessment Data', status: 'queued', progress: 0, duration: 'Pending' },
    { id: 'MIG-2024-004', type: 'User Profiles', status: 'failed', progress: 23, duration: 'Failed at 45m' }
  ];

  const resourceUsage = {
    cpu: 45,
    memory: 67,
    storage: 78,
    network: 34
  };

  const accessibilityMetrics = [
    { check: 'WCAG 2.1 AA Compliance', score: 94, status: 'passing', issues: 12 },
    { check: 'Color Contrast Ratio', score: 98, status: 'passing', issues: 3 },
    { check: 'Keyboard Navigation', score: 87, status: 'warning', issues: 18 },
    { check: 'Screen Reader Support', score: 91, status: 'passing', issues: 8 },
    { check: 'Alt Text Coverage', score: 76, status: 'warning', issues: 45 }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'synced':
      case 'completed':
      case 'passing':
        return 'bg-green-100 text-green-800';
      case 'syncing':
      case 'running':
      case 'warning':
        return 'bg-yellow-100 text-yellow-800';
      case 'error':
      case 'failed':
        return 'bg-red-100 text-red-800';
      case 'queued':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getResourceColor = (usage: number) => {
    if (usage > 80) return 'bg-red-500';
    if (usage > 60) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  return (
    <div className="space-y-6">
      {/* User Capacity & Load */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <Users className="w-8 h-8 text-blue-600" />
              <div>
                <p className="text-sm text-gray-600">Concurrent Users</p>
                <p className="text-xl font-bold">{userMetrics.concurrent.toLocaleString()}</p>
                <p className="text-xs text-gray-500">of {userMetrics.capacity.toLocaleString()} capacity</p>
              </div>
            </div>
            <div className="mt-3">
              <Progress value={(userMetrics.concurrent / userMetrics.capacity) * 100} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <Activity className="w-8 h-8 text-green-600" />
              <div>
                <p className="text-sm text-gray-600">24h Peak</p>
                <p className="text-xl font-bold">{userMetrics.peak24h.toLocaleString()}</p>
                <p className="text-xs text-gray-500">users</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <Monitor className="w-8 h-8 text-purple-600" />
              <div>
                <p className="text-sm text-gray-600">Avg Session</p>
                <p className="text-xl font-bold">{userMetrics.avgSessionDuration}</p>
                <p className="text-xs text-gray-500">duration</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <Database className="w-8 h-8 text-orange-600" />
              <div>
                <p className="text-sm text-gray-600">System Load</p>
                <p className="text-xl font-bold">62%</p>
                <p className="text-xs text-gray-500">average</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Integration & Migration Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>LMS Integration Status</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {integrationStatus.map((integration) => (
              <div key={integration.system} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium">{integration.system}</p>
                  <p className="text-sm text-gray-600">{integration.records} records • {integration.lastSync}</p>
                </div>
                <Badge className={getStatusColor(integration.status)}>
                  {integration.status}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Migration Jobs</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {migrationJobs.map((job) => (
              <div key={job.id} className="p-3 border rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <p className="font-medium">{job.type}</p>
                    <p className="text-sm text-gray-600">{job.id} • {job.duration}</p>
                  </div>
                  <Badge className={getStatusColor(job.status)}>
                    {job.status}
                  </Badge>
                </div>
                {job.status === 'running' && (
                  <div className="mt-2">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progress</span>
                      <span>{job.progress}%</span>
                    </div>
                    <Progress value={job.progress} />
                  </div>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* System Resources & Accessibility */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>System Resource Usage</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {Object.entries(resourceUsage).map(([resource, usage]) => (
              <div key={resource} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="capitalize font-medium">{resource}</span>
                  <span className={`text-sm font-medium ${usage > 80 ? 'text-red-600' : usage > 60 ? 'text-yellow-600' : 'text-green-600'}`}>
                    {usage}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${getResourceColor(usage)}`}
                    style={{ width: `${usage}%` }}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Accessibility Compliance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {accessibilityMetrics.map((metric) => (
              <div key={metric.check} className="p-3 border rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">{metric.check}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">{metric.score}%</span>
                    <Badge className={getStatusColor(metric.status)}>
                      {metric.status}
                    </Badge>
                  </div>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{metric.issues} issues found</span>
                </div>
                <Progress value={metric.score} className="mt-2" />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
