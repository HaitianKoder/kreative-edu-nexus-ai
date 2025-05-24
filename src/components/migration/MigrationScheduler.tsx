
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Database, RotateCcw, Settings } from 'lucide-react';

const scheduledMigrations = [
  {
    id: 'SCH-001',
    name: 'Banner Financial Records - Phase 2',
    system: 'Banner ERP',
    type: 'Financial Data',
    scheduledDate: '2024-02-01',
    scheduledTime: '02:00:00',
    duration: '4 hours',
    recordCount: 89000,
    status: 'scheduled',
    dependencies: ['Banner Student Records'],
    rollbackWindow: '6 hours'
  },
  {
    id: 'SCH-002', 
    name: 'Blackboard Assessment Migration',
    system: 'Blackboard Learn',
    type: 'Assessment Data',
    scheduledDate: '2024-02-03',
    scheduledTime: '01:30:00',
    duration: '6 hours',
    recordCount: 234000,
    status: 'scheduled',
    dependencies: ['Blackboard Course Content'],
    rollbackWindow: '8 hours'
  },
  {
    id: 'SCH-003',
    name: 'Historical Grade Migration',
    system: 'Multiple Sources',
    type: 'Academic Records',
    scheduledDate: '2024-02-05',
    scheduledTime: '03:00:00',
    duration: '8 hours',
    recordCount: 567000,
    status: 'pending-approval',
    dependencies: ['All Course Mappings'],
    rollbackWindow: '12 hours'
  }
];

const maintenanceWindows = [
  {
    date: '2024-02-01',
    startTime: '02:00',
    endTime: '06:00',
    type: 'Scheduled Maintenance',
    affectedSystems: ['Financial Systems', 'Student Portal'],
    migrationSlots: 2
  },
  {
    date: '2024-02-03',
    startTime: '01:00',
    endTime: '08:00',
    type: 'Extended Maintenance',
    affectedSystems: ['Learning Management', 'Assessment Tools'],
    migrationSlots: 1
  }
];

export const MigrationScheduler: React.FC = () => {
  const [selectedMigration, setSelectedMigration] = useState<string | null>(null);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'scheduled':
        return <Badge className="bg-blue-100 text-blue-800">Scheduled</Badge>;
      case 'pending-approval':
        return <Badge className="bg-yellow-100 text-yellow-800">Pending Approval</Badge>;
      case 'in-progress':
        return <Badge className="bg-green-100 text-green-800">In Progress</Badge>;
      case 'completed':
        return <Badge className="bg-gray-100 text-gray-800">Completed</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Scheduler Controls */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Settings className="w-5 h-5" />
            <span>Migration Scheduler Controls</span>
          </CardTitle>
          <CardDescription>
            Plan and manage migration schedules with rollback capabilities
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button>
                <Calendar className="w-4 h-4 mr-2" />
                Schedule New Migration
              </Button>
              <Button variant="outline">
                <Clock className="w-4 h-4 mr-2" />
                Maintenance Windows
              </Button>
              <Button variant="outline">
                <RotateCcw className="w-4 h-4 mr-2" />
                Rollback Plans
              </Button>
            </div>
            <div className="text-sm text-gray-600">
              Next available window: Feb 1, 2024 2:00 AM EST
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Scheduled Migrations */}
      <Card>
        <CardHeader>
          <CardTitle>Scheduled Migrations</CardTitle>
          <CardDescription>Upcoming migration tasks and their schedules</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {scheduledMigrations.map((migration) => (
              <div key={migration.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <Database className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="font-medium">{migration.name}</div>
                      <div className="text-sm text-gray-600">
                        {migration.system} • {migration.recordCount.toLocaleString()} records
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {getStatusBadge(migration.status)}
                    <Badge variant="outline">{migration.type}</Badge>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-3">
                  <div className="bg-blue-50 p-3 rounded">
                    <div className="text-sm font-medium text-blue-600">Scheduled Date</div>
                    <div className="text-blue-900">
                      {new Date(migration.scheduledDate).toLocaleDateString()}
                    </div>
                    <div className="text-xs text-blue-700">{migration.scheduledTime}</div>
                  </div>
                  <div className="bg-green-50 p-3 rounded">
                    <div className="text-sm font-medium text-green-600">Duration</div>
                    <div className="text-green-900">{migration.duration}</div>
                  </div>
                  <div className="bg-purple-50 p-3 rounded">
                    <div className="text-sm font-medium text-purple-600">Dependencies</div>
                    <div className="text-purple-900 text-xs">{migration.dependencies.join(', ')}</div>
                  </div>
                  <div className="bg-orange-50 p-3 rounded">
                    <div className="text-sm font-medium text-orange-600">Rollback Window</div>
                    <div className="text-orange-900">{migration.rollbackWindow}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t">
                  <div className="text-sm text-gray-600">
                    Migration ID: {migration.id}
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      Edit Schedule
                    </Button>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    {migration.status === 'pending-approval' && (
                      <Button size="sm">
                        Approve
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Maintenance Windows */}
      <Card>
        <CardHeader>
          <CardTitle>Maintenance Windows</CardTitle>
          <CardDescription>Available time slots for migration activities</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {maintenanceWindows.map((window, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <Calendar className="w-5 h-5 text-gray-600" />
                  <div>
                    <div className="font-medium">
                      {new Date(window.date).toLocaleDateString()} • {window.startTime} - {window.endTime}
                    </div>
                    <div className="text-sm text-gray-600">
                      {window.type} • Affects: {window.affectedSystems.join(', ')}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline">
                    {window.migrationSlots} slot{window.migrationSlots !== 1 ? 's' : ''} available
                  </Badge>
                  <Button variant="outline" size="sm">
                    Book Slot
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Rollback Configuration */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <RotateCcw className="w-5 h-5" />
            <span>Rollback Configuration</span>
          </CardTitle>
          <CardDescription>
            Automated rollback procedures and emergency protocols
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-medium">Automatic Rollback Triggers</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between p-2 bg-red-50 rounded">
                  <span>Error rate &gt; 5%</span>
                  <Badge className="bg-red-100 text-red-800">Enabled</Badge>
                </div>
                <div className="flex items-center justify-between p-2 bg-red-50 rounded">
                  <span>Data corruption detected</span>
                  <Badge className="bg-red-100 text-red-800">Enabled</Badge>
                </div>
                <div className="flex items-center justify-between p-2 bg-yellow-50 rounded">
                  <span>Performance degradation</span>
                  <Badge className="bg-yellow-100 text-yellow-800">Monitoring</Badge>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="font-medium">Manual Rollback Options</h4>
              <div className="space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Rollback Last Migration
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Database className="w-4 h-4 mr-2" />
                  Restore from Backup
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Settings className="w-4 h-4 mr-2" />
                  Configure Rollback Rules
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
