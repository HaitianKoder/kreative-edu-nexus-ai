
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PlayCircle, PauseCircle, RotateCcw, AlertCircle, CheckCircle, Clock, Database } from 'lucide-react';

const activeMigrations = [
  {
    id: 'banner-001',
    name: 'Banner ERP to Kreative SMS',
    type: 'SMS',
    status: 'in-progress',
    progress: 67,
    recordsTotal: 245000,
    recordsMigrated: 164150,
    startTime: '2024-01-15 08:00:00',
    estimatedCompletion: '2024-01-28 16:00:00',
    currentPhase: 'Student Records',
    errors: 23,
    warnings: 156
  },
  {
    id: 'canvas-002',
    name: 'Canvas LMS to Kreative LMS',
    type: 'LMS',
    status: 'in-progress',
    progress: 45,
    recordsTotal: 89000,
    recordsMigrated: 40050,
    startTime: '2024-01-18 10:30:00',
    estimatedCompletion: '2024-01-30 14:00:00',
    currentPhase: 'Course Content',
    errors: 8,
    warnings: 67
  },
  {
    id: 'blackboard-003',
    name: 'Blackboard Learn to Kreative LMS',
    type: 'LMS',
    status: 'paused',
    progress: 23,
    recordsTotal: 156000,
    recordsMigrated: 35880,
    startTime: '2024-01-20 09:00:00',
    estimatedCompletion: '2024-02-05 12:00:00',
    currentPhase: 'Assessment Data',
    errors: 45,
    warnings: 234
  }
];

export const MigrationStatus: React.FC = () => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'in-progress':
        return <PlayCircle className="w-5 h-5 text-blue-600" />;
      case 'paused':
        return <PauseCircle className="w-5 h-5 text-yellow-600" />;
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'error':
        return <AlertCircle className="w-5 h-5 text-red-600" />;
      default:
        return <Clock className="w-5 h-5 text-gray-600" />;
    }
  };

  const getStatusBadge = (status: string): "default" | "secondary" | "destructive" | "outline" => {
    switch (status) {
      case 'in-progress':
        return 'default';
      case 'paused':
        return 'secondary';
      case 'completed':
        return 'default';
      case 'error':
        return 'destructive';
      default:
        return 'secondary';
    }
  };

  return (
    <div className="space-y-6">
      {/* Global Migration Controls */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Database className="w-5 h-5" />
            <span>Global Migration Controls</span>
          </CardTitle>
          <CardDescription>
            Manage all active migrations from legacy systems
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <PlayCircle className="w-4 h-4 mr-2" />
                Resume All
              </Button>
              <Button variant="outline" size="sm">
                <PauseCircle className="w-4 h-4 mr-2" />
                Pause All
              </Button>
              <Button variant="outline" size="sm">
                <RotateCcw className="w-4 h-4 mr-2" />
                Emergency Rollback
              </Button>
            </div>
            <div className="text-sm text-gray-600">
              Next maintenance window: Feb 1, 2024 2:00 AM EST
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Active Migrations */}
      <div className="space-y-4">
        {activeMigrations.map((migration) => (
          <Card key={migration.id} className="border-l-4 border-l-blue-500">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {getStatusIcon(migration.status)}
                  <div>
                    <CardTitle className="text-lg">{migration.name}</CardTitle>
                    <CardDescription>
                      Migration ID: {migration.id} • Started: {new Date(migration.startTime).toLocaleDateString()}
                    </CardDescription>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant={getStatusBadge(migration.status)}>
                    {migration.status.replace('-', ' ').toUpperCase()}
                  </Badge>
                  <Badge variant="outline">
                    {migration.type}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Progress: {migration.progress}%</span>
                  <span>{migration.recordsMigrated.toLocaleString()} / {migration.recordsTotal.toLocaleString()} records</span>
                </div>
                <Progress value={migration.progress} className="h-2" />
              </div>

              {/* Current Phase and Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <div className="text-sm font-medium text-blue-600">Current Phase</div>
                  <div className="text-lg font-semibold text-blue-900">{migration.currentPhase}</div>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <div className="text-sm font-medium text-green-600">Success Rate</div>
                  <div className="text-lg font-semibold text-green-900">
                    {((migration.recordsMigrated - migration.errors) / migration.recordsMigrated * 100).toFixed(1)}%
                  </div>
                </div>
                <div className="bg-red-50 p-3 rounded-lg">
                  <div className="text-sm font-medium text-red-600">Errors</div>
                  <div className="text-lg font-semibold text-red-900">{migration.errors}</div>
                </div>
                <div className="bg-yellow-50 p-3 rounded-lg">
                  <div className="text-sm font-medium text-yellow-600">Warnings</div>
                  <div className="text-lg font-semibold text-yellow-900">{migration.warnings}</div>
                </div>
              </div>

              {/* Migration Controls */}
              <div className="flex items-center justify-between pt-4 border-t">
                <div className="text-sm text-gray-600">
                  ETA: {new Date(migration.estimatedCompletion).toLocaleDateString()} at {new Date(migration.estimatedCompletion).toLocaleTimeString()}
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                  <Button variant="outline" size="sm">
                    Download Log
                  </Button>
                  {migration.status === 'in-progress' ? (
                    <Button variant="outline" size="sm">
                      <PauseCircle className="w-4 h-4 mr-2" />
                      Pause
                    </Button>
                  ) : (
                    <Button variant="outline" size="sm">
                      <PlayCircle className="w-4 h-4 mr-2" />
                      Resume
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
