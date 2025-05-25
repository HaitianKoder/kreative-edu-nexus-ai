
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Database, Zap, Activity, Wifi } from 'lucide-react';

export const RealTimeSystemStatus: React.FC = () => {
  const apiServices = [
    { name: 'API Gateway', status: 'healthy', responseTime: '45ms', uptime: '99.9%' },
    { name: 'User Management API', status: 'healthy', responseTime: '32ms', uptime: '99.8%' },
    { name: 'Course API', status: 'warning', responseTime: '156ms', uptime: '99.5%' },
    { name: 'Assessment API', status: 'healthy', responseTime: '67ms', uptime: '100%' },
    { name: 'Analytics API', status: 'healthy', responseTime: '89ms', uptime: '99.7%' }
  ];

  const databases = [
    { name: 'PostgreSQL (Primary)', status: 'healthy', connections: '45/100', latency: '12ms' },
    { name: 'MongoDB (Documents)', status: 'healthy', connections: '23/50', latency: '18ms' },
    { name: 'Redis (Cache)', status: 'healthy', connections: '89/200', latency: '2ms' },
    { name: 'Pinecone (Vector DB)', status: 'warning', connections: '12/20', latency: '145ms' }
  ];

  const aiProviders = [
    { name: 'OpenAI GPT-4', status: 'healthy', tokensUsed: '2.3M', quota: '5M', failover: false },
    { name: 'Anthropic Claude', status: 'healthy', tokensUsed: '890K', quota: '2M', failover: false },
    { name: 'Groq Llama', status: 'warning', tokensUsed: '1.8M', quota: '2M', failover: true },
    { name: 'Mistral AI', status: 'healthy', tokensUsed: '445K', quota: '1M', failover: false }
  ];

  const departmentUsage = [
    { dept: 'Computer Science', usage: '45%', tokens: '1.2M', quota: '2.5M' },
    { dept: 'Mathematics', usage: '62%', tokens: '890K', quota: '1.5M' },
    { dept: 'Engineering', usage: '78%', tokens: '1.8M', quota: '2.3M' },
    { dept: 'Business', usage: '34%', tokens: '445K', quota: '1.3M' }
  ];

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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* API Services */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Wifi className="w-5 h-5" />
            <span>API Services</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {apiServices.map((service) => (
            <div key={service.name} className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${getStatusColor(service.status)}`}></div>
                <div>
                  <p className="font-medium">{service.name}</p>
                  <p className="text-sm text-gray-600">{service.responseTime} • {service.uptime} uptime</p>
                </div>
              </div>
              <Badge className={getStatusBadge(service.status)}>
                {service.status}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Database Performance */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Database className="w-5 h-5" />
            <span>Database Performance</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {databases.map((db) => (
            <div key={db.name} className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${getStatusColor(db.status)}`}></div>
                <div>
                  <p className="font-medium">{db.name}</p>
                  <p className="text-sm text-gray-600">{db.connections} connections • {db.latency}</p>
                </div>
              </div>
              <Badge className={getStatusBadge(db.status)}>
                {db.status}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* AI Provider Health */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Zap className="w-5 h-5" />
            <span>AI Provider Health</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {aiProviders.map((provider) => (
            <div key={provider.name} className="p-3 border rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${getStatusColor(provider.status)}`}></div>
                  <span className="font-medium">{provider.name}</span>
                  {provider.failover && (
                    <Badge className="bg-orange-100 text-orange-800 text-xs">Failover Active</Badge>
                  )}
                </div>
                <Badge className={getStatusBadge(provider.status)}>
                  {provider.status}
                </Badge>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>Token Usage</span>
                  <span>{provider.tokensUsed} / {provider.quota}</span>
                </div>
                <Progress value={(parseInt(provider.tokensUsed.replace(/[^\d.]/g, '')) / parseInt(provider.quota.replace(/[^\d.]/g, ''))) * 100} />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Department Token Usage */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Activity className="w-5 h-5" />
            <span>Department Token Usage</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {departmentUsage.map((dept) => (
            <div key={dept.dept} className="p-3 border rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">{dept.dept}</span>
                <span className="text-sm text-gray-600">{dept.usage}</span>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>Tokens</span>
                  <span>{dept.tokens} / {dept.quota}</span>
                </div>
                <Progress value={parseInt(dept.usage)} />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};
