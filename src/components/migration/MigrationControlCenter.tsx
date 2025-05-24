
import React, { useState } from 'react';
import { MigrationStatus } from './MigrationStatus';
import { DataValidationDashboard } from './DataValidationDashboard';
import { SystemMappingVisualizer } from './SystemMappingVisualizer';
import { MigrationScheduler } from './MigrationScheduler';
import { SuccessMetrics } from './SuccessMetrics';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Database, GitBranch, Settings, BarChart3, Shield } from 'lucide-react';

export const MigrationControlCenter: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="border-b border-gray-200 pb-4">
        <h1 className="text-2xl font-bold text-gray-900">
          Migration Control Center
        </h1>
        <p className="text-gray-600 mt-1">
          Seamlessly migrate from legacy SMS/LMS systems to Kreative Edu platform
        </p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="border-blue-200 bg-blue-50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-blue-600">Active Migrations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-900">3</div>
            <p className="text-xs text-blue-700">Banner, Canvas, Blackboard</p>
          </CardContent>
        </Card>

        <Card className="border-green-200 bg-green-50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-green-600">Data Integrity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-900">98.7%</div>
            <p className="text-xs text-green-700">Validation success rate</p>
          </CardContent>
        </Card>

        <Card className="border-purple-200 bg-purple-50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-purple-600">Records Migrated</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-900">847K</div>
            <p className="text-xs text-purple-700">Students, courses, grades</p>
          </CardContent>
        </Card>

        <Card className="border-orange-200 bg-orange-50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-orange-600">Time to Complete</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-900">14 days</div>
            <p className="text-xs text-orange-700">Estimated remaining</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="status" className="space-y-6">
        <TabsList className="grid grid-cols-5 w-full">
          <TabsTrigger value="status" className="flex items-center space-x-2">
            <Database className="w-4 h-4" />
            <span>Migration Status</span>
          </TabsTrigger>
          <TabsTrigger value="validation" className="flex items-center space-x-2">
            <Shield className="w-4 h-4" />
            <span>Data Validation</span>
          </TabsTrigger>
          <TabsTrigger value="mapping" className="flex items-center space-x-2">
            <GitBranch className="w-4 h-4" />
            <span>System Mapping</span>
          </TabsTrigger>
          <TabsTrigger value="scheduler" className="flex items-center space-x-2">
            <Settings className="w-4 h-4" />
            <span>Scheduler</span>
          </TabsTrigger>
          <TabsTrigger value="metrics" className="flex items-center space-x-2">
            <BarChart3 className="w-4 h-4" />
            <span>Success Metrics</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="status">
          <MigrationStatus />
        </TabsContent>

        <TabsContent value="validation">
          <DataValidationDashboard />
        </TabsContent>

        <TabsContent value="mapping">
          <SystemMappingVisualizer />
        </TabsContent>

        <TabsContent value="scheduler">
          <MigrationScheduler />
        </TabsContent>

        <TabsContent value="metrics">
          <SuccessMetrics />
        </TabsContent>
      </Tabs>
    </div>
  );
};
