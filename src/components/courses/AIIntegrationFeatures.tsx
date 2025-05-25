
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Zap, BarChart4, Target, TrendingUp, Users, MessageSquare, Database } from 'lucide-react';

export const AIIntegrationFeatures: React.FC = () => {
  const aiMetrics = [
    { course: "Advanced Calculus I", tokens: 12547, sessions: 234, effectiveness: 94 },
    { course: "Introduction to Psychology", tokens: 8934, sessions: 445, effectiveness: 87 },
    { course: "Data Structures", tokens: 6789, sessions: 189, effectiveness: 91 }
  ];

  const ragOptimization = [
    { content: "Lecture 3: Derivatives", chunks: 24, retrieval: 98, engagement: 92 },
    { content: "Assignment 2 Guidelines", chunks: 12, retrieval: 95, engagement: 88 },
    { content: "Chapter 4: Applications", chunks: 36, retrieval: 97, engagement: 85 }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Brain className="w-5 h-5 text-blue-600" />
          <span>AI Integration Dashboard</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* AI Tutor Training Status */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3 flex items-center">
            <Database className="w-4 h-4 mr-1" />
            AI Tutor Training Status
          </h4>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-green-900">RAG System Status</span>
              <Badge className="bg-green-100 text-green-800">Active</Badge>
            </div>
            <div className="space-y-2 text-sm text-green-800">
              <div className="flex justify-between">
                <span>Indexed Content:</span>
                <span className="font-medium">847 documents</span>
              </div>
              <div className="flex justify-between">
                <span>Vector Embeddings:</span>
                <span className="font-medium">12,547 chunks</span>
              </div>
              <div className="flex justify-between">
                <span>Last Update:</span>
                <span className="font-medium">2 minutes ago</span>
              </div>
            </div>
          </div>
        </div>

        {/* Token Usage by Course */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3 flex items-center">
            <Zap className="w-4 h-4 mr-1" />
            AI Token Usage & Effectiveness
          </h4>
          <div className="space-y-3">
            {aiMetrics.map((metric, index) => (
              <div key={index} className="border rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-sm">{metric.course}</span>
                  <Badge variant="outline" className="bg-blue-50 text-blue-700">
                    {metric.effectiveness}% effective
                  </Badge>
                </div>
                <div className="grid grid-cols-2 gap-4 text-xs text-gray-600">
                  <div className="flex justify-between">
                    <span>Tokens Used:</span>
                    <span className="font-medium">{metric.tokens.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>AI Sessions:</span>
                    <span className="font-medium">{metric.sessions}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Content Optimization */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3 flex items-center">
            <Target className="w-4 h-4 mr-1" />
            Content Optimization Insights
          </h4>
          <div className="space-y-2">
            {ragOptimization.map((item, index) => (
              <div key={index} className="bg-gray-50 p-3 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-sm">{item.content}</span>
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="w-3 h-3 text-green-600" />
                    <span className="text-xs text-green-600 font-medium">{item.engagement}%</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div className="text-center">
                    <div className="font-medium">{item.chunks}</div>
                    <div className="text-gray-500">Chunks</div>
                  </div>
                  <div className="text-center">
                    <div className="font-medium">{item.retrieval}%</div>
                    <div className="text-gray-500">Retrieval</div>
                  </div>
                  <div className="text-center">
                    <div className="font-medium">{item.engagement}%</div>
                    <div className="text-gray-500">Engagement</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Integration Flow */}
        <div className="bg-purple-50 p-4 rounded-lg">
          <h4 className="text-sm font-medium text-purple-900 mb-2 flex items-center">
            <MessageSquare className="w-4 h-4 mr-1" />
            SMS Integration Flow
          </h4>
          <div className="space-y-2 text-sm text-purple-800">
            <div className="flex items-center space-x-2">
              <Users className="w-3 h-3" />
              <span>Course data auto-syncs to student profiles</span>
            </div>
            <div className="flex items-center space-x-2">
              <BarChart4 className="w-3 h-3" />
              <span>Performance metrics feed academic analytics</span>
            </div>
            <div className="flex items-center space-x-2">
              <Brain className="w-3 h-3" />
              <span>AI insights enhance student success predictions</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
