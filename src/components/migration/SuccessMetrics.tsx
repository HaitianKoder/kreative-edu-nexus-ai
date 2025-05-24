
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { TrendingUp, TrendingDown, Target, CheckCircle, Clock, AlertCircle } from 'lucide-react';

const migrationMetrics = {
  overall: {
    completionRate: 73.2,
    dataIntegrity: 98.7,
    performanceImpact: 2.1,
    userSatisfaction: 94.5,
    costSavings: 340000,
    timelineBeat: 12
  },
  bySystem: [
    {
      name: 'Banner ERP → Kreative SMS',
      completionRate: 67,
      recordsMigrated: 164150,
      totalRecords: 245000,
      dataAccuracy: 99.1,
      migrationSpeed: '2.3k records/hour',
      issues: 23,
      status: 'in-progress'
    },
    {
      name: 'Canvas → Kreative LMS',
      completionRate: 45,
      recordsMigrated: 40050,
      totalRecords: 89000,
      dataAccuracy: 98.9,
      migrationSpeed: '1.8k records/hour',
      issues: 8,
      status: 'in-progress'
    },
    {
      name: 'Financial Aid System',
      completionRate: 100,
      recordsMigrated: 56000,
      totalRecords: 56000,
      dataAccuracy: 99.8,
      migrationSpeed: '3.1k records/hour',
      issues: 0,
      status: 'completed'
    }
  ],
  qualityMetrics: [
    {
      category: 'Data Completeness',
      target: 99.5,
      actual: 98.7,
      trend: 'up',
      description: 'Percentage of required fields populated'
    },
    {
      category: 'Data Accuracy',
      target: 99.0,
      actual: 99.2,
      trend: 'up',
      description: 'Validation against source systems'
    },
    {
      category: 'System Performance',
      target: 95.0,
      actual: 97.9,
      trend: 'stable',
      description: 'Response time within SLA'
    },
    {
      category: 'User Adoption',
      target: 90.0,
      actual: 94.5,
      trend: 'up',
      description: 'Active users post-migration'
    }
  ]
};

export const SuccessMetrics: React.FC = () => {
  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-4 h-4 text-green-600" />;
      case 'down':
        return <TrendingDown className="w-4 h-4 text-red-600" />;
      default:
        return <Target className="w-4 h-4 text-gray-600" />;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'in-progress':
        return <Clock className="w-5 h-5 text-blue-600" />;
      case 'issues':
        return <AlertCircle className="w-5 h-5 text-red-600" />;
      default:
        return <Target className="w-5 h-5 text-gray-600" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Overall Success Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <Card className="border-blue-200 bg-blue-50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-blue-600">Completion Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-900">
              {migrationMetrics.overall.completionRate}%
            </div>
            <div className="flex items-center mt-1">
              <TrendingUp className="w-3 h-3 text-green-600 mr-1" />
              <span className="text-xs text-green-600">On track</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-green-200 bg-green-50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-green-600">Data Integrity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-900">
              {migrationMetrics.overall.dataIntegrity}%
            </div>
            <div className="flex items-center mt-1">
              <TrendingUp className="w-3 h-3 text-green-600 mr-1" />
              <span className="text-xs text-green-600">Excellent</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-purple-200 bg-purple-50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-purple-600">User Satisfaction</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-900">
              {migrationMetrics.overall.userSatisfaction}%
            </div>
            <div className="flex items-center mt-1">
              <TrendingUp className="w-3 h-3 text-green-600 mr-1" />
              <span className="text-xs text-green-600">Above target</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-orange-200 bg-orange-50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-orange-600">Performance Impact</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-900">
              {migrationMetrics.overall.performanceImpact}%
            </div>
            <div className="flex items-center mt-1">
              <Target className="w-3 h-3 text-gray-600 mr-1" />
              <span className="text-xs text-gray-600">Minimal</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-green-200 bg-green-50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-green-600">Cost Savings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-900">
              ${(migrationMetrics.overall.costSavings / 1000).toFixed(0)}K
            </div>
            <div className="flex items-center mt-1">
              <TrendingUp className="w-3 h-3 text-green-600 mr-1" />
              <span className="text-xs text-green-600">vs legacy</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-blue-200 bg-blue-50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-blue-600">Timeline</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-900">
              {migrationMetrics.overall.timelineBeat} days
            </div>
            <div className="flex items-center mt-1">
              <TrendingUp className="w-3 h-3 text-green-600 mr-1" />
              <span className="text-xs text-green-600">ahead</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Migration Progress by System */}
      <Card>
        <CardHeader>
          <CardTitle>Migration Progress by System</CardTitle>
          <CardDescription>Detailed breakdown of each system migration</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {migrationMetrics.bySystem.map((system, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {getStatusIcon(system.status)}
                    <div>
                      <div className="font-medium">{system.name}</div>
                      <div className="text-sm text-gray-600">
                        {system.recordsMigrated.toLocaleString()} / {system.totalRecords.toLocaleString()} records
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant={system.status === 'completed' ? 'default' : 'secondary'}>
                      {system.status === 'completed' ? 'Completed' : 'In Progress'}
                    </Badge>
                    <span className="text-sm font-medium">{system.completionRate}%</span>
                  </div>
                </div>
                
                <Progress value={system.completionRate} className="h-2" />
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="bg-blue-50 p-3 rounded">
                    <div className="text-sm font-medium text-blue-600">Data Accuracy</div>
                    <div className="text-blue-900">{system.dataAccuracy}%</div>
                  </div>
                  <div className="bg-green-50 p-3 rounded">
                    <div className="text-sm font-medium text-green-600">Migration Speed</div>
                    <div className="text-green-900">{system.migrationSpeed}</div>
                  </div>
                  <div className="bg-orange-50 p-3 rounded">
                    <div className="text-sm font-medium text-orange-600">Issues</div>
                    <div className="text-orange-900">{system.issues}</div>
                  </div>
                  <div className="bg-purple-50 p-3 rounded">
                    <div className="text-sm font-medium text-purple-600">ETA</div>
                    <div className="text-purple-900">
                      {system.status === 'completed' ? 'Completed' : '6 days'}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quality Metrics */}
      <Card>
        <CardHeader>
          <CardTitle>Data Quality & Integrity Metrics</CardTitle>
          <CardDescription>Key performance indicators for migration success</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {migrationMetrics.qualityMetrics.map((metric, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  {getTrendIcon(metric.trend)}
                  <div>
                    <div className="font-medium">{metric.category}</div>
                    <div className="text-sm text-gray-600">{metric.description}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">Target: {metric.target}%</span>
                    <span className="font-medium">{metric.actual}%</span>
                  </div>
                  <div className="text-xs text-gray-500">
                    {metric.actual >= metric.target ? 'Above target' : 'Below target'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Migration ROI Analysis */}
      <Card>
        <CardHeader>
          <CardTitle>Return on Investment Analysis</CardTitle>
          <CardDescription>Financial benefits of migrating to Kreative Edu platform</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h4 className="font-medium text-green-600">Cost Savings</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Legacy system licensing</span>
                  <span className="font-medium">$180K/year</span>
                </div>
                <div className="flex justify-between">
                  <span>Maintenance contracts</span>
                  <span className="font-medium">$95K/year</span>
                </div>
                <div className="flex justify-between">
                  <span>Integration costs</span>
                  <span className="font-medium">$65K/year</span>
                </div>
                <div className="flex justify-between font-medium text-green-600 pt-2 border-t">
                  <span>Total Annual Savings</span>
                  <span>$340K</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-medium text-blue-600">Efficiency Gains</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Administrative time saved</span>
                  <span className="font-medium">40%</span>
                </div>
                <div className="flex justify-between">
                  <span>Report generation speed</span>
                  <span className="font-medium">75% faster</span>
                </div>
                <div className="flex justify-between">
                  <span>Data accuracy improvement</span>
                  <span className="font-medium">98.7%</span>
                </div>
                <div className="flex justify-between">
                  <span>User training reduction</span>
                  <span className="font-medium">60%</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-medium text-purple-600">Strategic Benefits</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Single system management</span>
                  <span className="font-medium">✓ Achieved</span>
                </div>
                <div className="flex justify-between">
                  <span>Real-time data integration</span>
                  <span className="font-medium">✓ Achieved</span>
                </div>
                <div className="flex justify-between">
                  <span>AI-powered analytics</span>
                  <span className="font-medium">✓ Enabled</span>
                </div>
                <div className="flex justify-between">
                  <span>Future-ready platform</span>
                  <span className="font-medium">✓ Delivered</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
