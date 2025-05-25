
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { RealTimeSystemStatus } from './RealTimeSystemStatus';
import { PerformanceMetrics } from './PerformanceMetrics';
import { SecurityCompliance } from './SecurityCompliance';
import { Shield, Activity, Gauge, AlertTriangle } from 'lucide-react';

export const SystemHealthDashboard: React.FC = () => {
  const overallSystemStatus = 'operational'; // Would come from API

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'bg-green-500';
      case 'degraded':
        return 'bg-yellow-500';
      case 'down':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'operational':
        return 'bg-green-100 text-green-800';
      case 'degraded':
        return 'bg-yellow-100 text-yellow-800';
      case 'down':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">System Health Monitor</h1>
          <p className="text-gray-600">Real-time monitoring for IT administrators</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className={`w-3 h-3 rounded-full ${getStatusColor(overallSystemStatus)}`}></div>
          <Badge className={getStatusBadge(overallSystemStatus)}>
            {overallSystemStatus.toUpperCase()}
          </Badge>
        </div>
      </div>

      {/* System Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <Activity className="w-8 h-8 text-green-600" />
              <div>
                <p className="text-sm text-gray-600">System Status</p>
                <p className="text-xl font-bold text-green-600">Operational</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <Gauge className="w-8 h-8 text-blue-600" />
              <div>
                <p className="text-sm text-gray-600">Avg Response Time</p>
                <p className="text-xl font-bold text-blue-600">142ms</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <Shield className="w-8 h-8 text-purple-600" />
              <div>
                <p className="text-sm text-gray-600">Security Score</p>
                <p className="text-xl font-bold text-purple-600">98/100</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <AlertTriangle className="w-8 h-8 text-orange-600" />
              <div>
                <p className="text-sm text-gray-600">Active Alerts</p>
                <p className="text-xl font-bold text-orange-600">3</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Monitoring Tabs */}
      <Tabs defaultValue="system-status" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="system-status">Real-Time System Status</TabsTrigger>
          <TabsTrigger value="performance">Performance Metrics</TabsTrigger>
          <TabsTrigger value="security">Security & Compliance</TabsTrigger>
        </TabsList>

        <TabsContent value="system-status" className="space-y-6">
          <RealTimeSystemStatus />
        </TabsContent>

        <TabsContent value="performance" className="space-y-6">
          <PerformanceMetrics />
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <SecurityCompliance />
        </TabsContent>
      </Tabs>
    </div>
  );
};
