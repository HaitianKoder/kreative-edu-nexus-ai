
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye, Volume2, CheckCircle, AlertTriangle, Shield, Zap, BarChart4, Settings } from 'lucide-react';

export const AccessibilityCompliance: React.FC = () => {
  const complianceChecks = [
    { check: "WCAG 2.2 AA Color Contrast", status: "Pass", score: 98, automated: true },
    { check: "Alt-text Coverage", status: "Pass", score: 94, automated: true },
    { check: "Keyboard Navigation", status: "Warning", score: 87, automated: false },
    { check: "Screen Reader Compatibility", status: "Pass", score: 96, automated: true },
    { check: "Live Caption Availability", status: "Pass", score: 100, automated: true }
  ];

  const altTextMetrics = [
    { content: "Lecture Slides Batch 1", total: 47, generated: 44, reviewed: 40, quality: 92 },
    { content: "Assignment Images", total: 23, generated: 23, reviewed: 18, quality: 88 },
    { content: "Diagram Collection", total: 15, generated: 12, reviewed: 15, quality: 95 }
  ];

  const accessibilityFeatures = [
    { feature: "Auto Alt-text Generation", status: "Active", usage: "847 images processed" },
    { feature: "Live Captioning", status: "Active", usage: "234 lectures captioned" },
    { feature: "Screen Reader Testing", status: "Scheduled", usage: "Weekly automated scans" },
    { feature: "Color Contrast Validation", status: "Active", usage: "Real-time monitoring" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pass': return 'bg-green-100 text-green-800 border-green-200';
      case 'Warning': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Fail': return 'bg-red-100 text-red-800 border-red-200';
      case 'Active': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Scheduled': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Pass': return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'Warning': return <AlertTriangle className="w-4 h-4 text-yellow-600" />;
      case 'Fail': return <AlertTriangle className="w-4 h-4 text-red-600" />;
      case 'Active': return <CheckCircle className="w-4 h-4 text-blue-600" />;
      default: return <Settings className="w-4 h-4 text-gray-600" />;
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Shield className="w-5 h-5 text-blue-600" />
            <span>Accessibility & Compliance Dashboard</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* WCAG Compliance Checks */}
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-4 flex items-center">
                <Eye className="w-4 h-4 mr-1" />
                WCAG 2.2 AA Compliance Status
              </h4>
              <div className="space-y-3">
                {complianceChecks.map((check, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      {getStatusIcon(check.status)}
                      <div>
                        <div className="font-medium text-sm">{check.check}</div>
                        <div className="text-xs text-gray-500">
                          {check.automated ? 'Automated' : 'Manual'} • Score: {check.score}%
                        </div>
                      </div>
                    </div>
                    <Badge className={getStatusColor(check.status)}>
                      {check.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Alt-text Quality */}
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-4 flex items-center">
                <Zap className="w-4 h-4 mr-1" />
                AI Alt-text Generation & Quality
              </h4>
              <div className="space-y-3">
                {altTextMetrics.map((metric, index) => (
                  <div key={index} className="border rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-sm">{metric.content}</span>
                      <Badge variant="outline" className="bg-green-50 text-green-700">
                        {metric.quality}% quality
                      </Badge>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div className="text-center">
                        <div className="font-medium">{metric.total}</div>
                        <div className="text-gray-500">Total</div>
                      </div>
                      <div className="text-center">
                        <div className="font-medium text-blue-600">{metric.generated}</div>
                        <div className="text-gray-500">Generated</div>
                      </div>
                      <div className="text-center">
                        <div className="font-medium text-green-600">{metric.reviewed}</div>
                        <div className="text-gray-500">Reviewed</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Accessibility Features Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Volume2 className="w-5 h-5 text-green-600" />
            <span>Accessibility Features & Monitoring</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {accessibilityFeatures.map((feature, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">{feature.feature}</span>
                  <Badge className={getStatusColor(feature.status)}>
                    {getStatusIcon(feature.status)}
                    <span className="ml-1">{feature.status}</span>
                  </Badge>
                </div>
                <div className="text-sm text-gray-600">{feature.usage}</div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="mt-6 pt-6 border-t">
            <h4 className="text-sm font-medium text-gray-700 mb-3">Quick Actions</h4>
            <div className="flex flex-wrap gap-3">
              <Button size="sm" variant="outline">
                <Eye className="w-4 h-4 mr-1" />
                Run Full Accessibility Scan
              </Button>
              <Button size="sm" variant="outline">
                <Volume2 className="w-4 h-4 mr-1" />
                Generate Bulk Alt-text
              </Button>
              <Button size="sm" variant="outline">
                <BarChart4 className="w-4 h-4 mr-1" />
                Download Compliance Report
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
