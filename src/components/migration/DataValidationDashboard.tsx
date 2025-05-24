
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { AlertTriangle, CheckCircle, XCircle, RefreshCw, Download } from 'lucide-react';

const validationResults = [
  {
    category: 'Student Records',
    total: 245000,
    validated: 241230,
    errors: 234,
    warnings: 3536,
    critical: 12,
    status: 'in-progress'
  },
  {
    category: 'Course Data',
    total: 8900,
    validated: 8834,
    errors: 23,
    warnings: 43,
    critical: 0,
    status: 'completed'
  },
  {
    category: 'Enrollment Records',
    total: 567000,
    validated: 534000,
    errors: 1200,
    warnings: 31800,
    critical: 45,
    status: 'in-progress'
  },
  {
    category: 'Grade History',
    total: 1200000,
    validated: 1150000,
    errors: 2300,
    warnings: 47700,
    critical: 78,
    status: 'in-progress'
  },
  {
    category: 'Financial Records',
    total: 189000,
    validated: 187500,
    errors: 89,
    warnings: 1411,
    critical: 23,
    status: 'completed'
  }
];

const errorDetails = [
  {
    id: 'E001',
    type: 'Critical',
    category: 'Student Records',
    description: 'Missing required SSN format validation',
    count: 12,
    impact: 'High',
    resolution: 'Auto-fix available'
  },
  {
    id: 'E002',
    type: 'Error',
    category: 'Enrollment Records',
    description: 'Invalid course reference codes',
    count: 567,
    impact: 'Medium',
    resolution: 'Manual review required'
  },
  {
    id: 'W001',
    type: 'Warning',
    category: 'Grade History',
    description: 'Duplicate grade entries detected',
    count: 2340,
    impact: 'Low',
    resolution: 'Automated deduplication'
  },
  {
    id: 'W002',
    type: 'Warning',
    category: 'Financial Records',
    description: 'Inconsistent payment date formats',
    count: 891,
    impact: 'Low',
    resolution: 'Format standardization'
  }
];

export const DataValidationDashboard: React.FC = () => {
  const getValidationProgress = (item: typeof validationResults[0]) => {
    return (item.validated / item.total) * 100;
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-green-100 text-green-800">Completed</Badge>;
      case 'in-progress':
        return <Badge className="bg-blue-100 text-blue-800">In Progress</Badge>;
      case 'failed':
        return <Badge className="bg-red-100 text-red-800">Failed</Badge>;
      default:
        return <Badge variant="secondary">Pending</Badge>;
    }
  };

  const getErrorTypeIcon = (type: string) => {
    switch (type) {
      case 'Critical':
        return <XCircle className="w-4 h-4 text-red-600" />;
      case 'Error':
        return <AlertTriangle className="w-4 h-4 text-orange-600" />;
      case 'Warning':
        return <AlertTriangle className="w-4 h-4 text-yellow-600" />;
      default:
        return <CheckCircle className="w-4 h-4 text-green-600" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Validation Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-green-200 bg-green-50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-green-600">Success Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-900">98.7%</div>
            <p className="text-xs text-green-700">Records validated successfully</p>
          </CardContent>
        </Card>

        <Card className="border-red-200 bg-red-50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-red-600">Critical Issues</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-900">158</div>
            <p className="text-xs text-red-700">Require immediate attention</p>
          </CardContent>
        </Card>

        <Card className="border-yellow-200 bg-yellow-50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-yellow-600">Warnings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-900">84,890</div>
            <p className="text-xs text-yellow-700">Non-blocking issues</p>
          </CardContent>
        </Card>

        <Card className="border-blue-200 bg-blue-50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-blue-600">Auto-fixes Applied</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-900">45,290</div>
            <p className="text-xs text-blue-700">Resolved automatically</p>
          </CardContent>
        </Card>
      </div>

      {/* Validation Progress by Category */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Data Validation Progress</CardTitle>
              <CardDescription>Real-time validation status by data category</CardDescription>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export Report
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {validationResults.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="font-medium">{item.category}</span>
                    {getStatusBadge(item.status)}
                  </div>
                  <div className="text-sm text-gray-600">
                    {item.validated.toLocaleString()} / {item.total.toLocaleString()}
                  </div>
                </div>
                <Progress value={getValidationProgress(item)} className="h-2" />
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{getValidationProgress(item).toFixed(1)}% validated</span>
                  <div className="flex items-center space-x-4">
                    {item.critical > 0 && (
                      <span className="text-red-600">{item.critical} critical</span>
                    )}
                    <span className="text-orange-600">{item.errors} errors</span>
                    <span className="text-yellow-600">{item.warnings} warnings</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Error Details */}
      <Card>
        <CardHeader>
          <CardTitle>Validation Issues</CardTitle>
          <CardDescription>Detailed breakdown of validation errors and warnings</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {errorDetails.map((error) => (
              <div key={error.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  {getErrorTypeIcon(error.type)}
                  <div>
                    <div className="font-medium">{error.description}</div>
                    <div className="text-sm text-gray-600">
                      {error.category} • {error.count} occurrences • Impact: {error.impact}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline">{error.resolution}</Badge>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                  {error.resolution.includes('Auto-fix') && (
                    <Button size="sm">
                      Apply Fix
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
