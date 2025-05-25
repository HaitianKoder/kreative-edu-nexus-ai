
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Shield, AlertTriangle, Database, Users } from 'lucide-react';

export const SecurityCompliance: React.FC = () => {
  const securityAlerts = [
    { id: 'SEC-001', severity: 'high', type: 'Failed Login Attempts', count: 47, status: 'investigating' },
    { id: 'SEC-002', severity: 'medium', type: 'Unusual API Access', count: 12, status: 'monitoring' },
    { id: 'SEC-003', severity: 'low', type: 'Rate Limit Exceeded', count: 3, status: 'resolved' }
  ];

  const backupStatus = [
    { system: 'PostgreSQL Database', lastBackup: '2 hours ago', size: '2.4 GB', status: 'success', retention: '30 days' },
    { system: 'MongoDB Collections', lastBackup: '1 hour ago', size: '890 MB', status: 'success', retention: '30 days' },
    { system: 'File Storage', lastBackup: '4 hours ago', size: '15.2 GB', status: 'success', retention: '90 days' },
    { system: 'User Configurations', lastBackup: '30 min ago', size: '45 MB', status: 'success', retention: '365 days' }
  ];

  const authMetrics = {
    totalLogins24h: 3247,
    failedAttempts: 89,
    mfaEnabled: 87,
    suspiciousActivity: 5
  };

  const complianceChecks = [
    { framework: 'FERPA', status: 'compliant', score: 98, lastAudit: '2024-01-15', nextAudit: '2024-07-15' },
    { framework: 'GDPR', status: 'compliant', score: 94, lastAudit: '2024-02-01', nextAudit: '2024-08-01' },
    { framework: 'SOC 2 Type II', status: 'compliant', score: 96, lastAudit: '2024-01-30', nextAudit: '2025-01-30' },
    { framework: 'WCAG 2.1 AA', status: 'partial', score: 87, lastAudit: '2024-02-15', nextAudit: '2024-05-15' }
  ];

  const incidentResponse = {
    activeIncidents: 2,
    resolvedToday: 5,
    avgResponseTime: '12 min',
    avgResolutionTime: '2.4 hours'
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success':
      case 'compliant':
      case 'resolved':
        return 'bg-green-100 text-green-800';
      case 'partial':
      case 'investigating':
      case 'monitoring':
        return 'bg-yellow-100 text-yellow-800';
      case 'failed':
      case 'non-compliant':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Security Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <AlertTriangle className="w-8 h-8 text-red-600" />
              <div>
                <p className="text-sm text-gray-600">Active Incidents</p>
                <p className="text-xl font-bold">{incidentResponse.activeIncidents}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <Shield className="w-8 h-8 text-green-600" />
              <div>
                <p className="text-sm text-gray-600">Security Score</p>
                <p className="text-xl font-bold">94/100</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <Database className="w-8 h-8 text-blue-600" />
              <div>
                <p className="text-sm text-gray-600">Backup Status</p>
                <p className="text-xl font-bold text-green-600">All Current</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <Users className="w-8 h-8 text-purple-600" />
              <div>
                <p className="text-sm text-gray-600">MFA Adoption</p>
                <p className="text-xl font-bold">{authMetrics.mfaEnabled}%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Security Alerts & Authentication */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Active Security Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {securityAlerts.map((alert) => (
                <div key={alert.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <Badge className={getSeverityColor(alert.severity)}>
                        {alert.severity.toUpperCase()}
                      </Badge>
                      <span className="font-medium">{alert.type}</span>
                    </div>
                    <p className="text-sm text-gray-600">{alert.id} • {alert.count} occurrences</p>
                  </div>
                  <Badge className={getStatusColor(alert.status)}>
                    {alert.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Authentication Metrics (24h)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold text-gray-900">{authMetrics.totalLogins24h.toLocaleString()}</p>
                <p className="text-sm text-gray-600">Total Logins</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold text-red-600">{authMetrics.failedAttempts}</p>
                <p className="text-sm text-gray-600">Failed Attempts</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Success Rate</span>
                <span className="font-medium">97.3%</span>
              </div>
              <Progress value={97.3} />
            </div>
            <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg">
              <p className="text-sm font-medium text-orange-800">
                {authMetrics.suspiciousActivity} suspicious activities detected
              </p>
              <p className="text-xs text-orange-600">Automated monitoring active</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Backup Status */}
      <Card>
        <CardHeader>
          <CardTitle>Data Backup & Recovery Status</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>System</TableHead>
                <TableHead>Last Backup</TableHead>
                <TableHead>Size</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Retention</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {backupStatus.map((backup) => (
                <TableRow key={backup.system}>
                  <TableCell className="font-medium">{backup.system}</TableCell>
                  <TableCell>{backup.lastBackup}</TableCell>
                  <TableCell>{backup.size}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(backup.status)}>
                      {backup.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{backup.retention}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Compliance Dashboard */}
      <Card>
        <CardHeader>
          <CardTitle>Compliance Monitoring Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {complianceChecks.map((check) => (
              <div key={check.framework} className="p-4 border rounded-lg">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-medium">{check.framework}</h4>
                  <Badge className={getStatusColor(check.status)}>
                    {check.status}
                  </Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Compliance Score</span>
                    <span className="font-medium">{check.score}%</span>
                  </div>
                  <Progress value={check.score} />
                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                    <div>Last Audit: {check.lastAudit}</div>
                    <div>Next Audit: {check.nextAudit}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
