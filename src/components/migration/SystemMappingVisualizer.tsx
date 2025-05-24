
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight, Database, FileText, Users, BookOpen, DollarSign } from 'lucide-react';

const systemMappings = {
  banner: {
    name: 'Banner ERP',
    type: 'SMS',
    mappings: [
      {
        source: 'SPRIDEN (Student Identity)',
        target: 'students.profile',
        fields: [
          { source: 'SPRIDEN_ID', target: 'student_id', type: 'string', status: 'mapped' },
          { source: 'SPRIDEN_FIRST_NAME', target: 'first_name', type: 'string', status: 'mapped' },
          { source: 'SPRIDEN_LAST_NAME', target: 'last_name', type: 'string', status: 'mapped' },
          { source: 'SPRIDEN_MI', target: 'middle_initial', type: 'string', status: 'mapped' }
        ]
      },
      {
        source: 'SFRSTCR (Student Registration)',
        target: 'enrollments.records',
        fields: [
          { source: 'SFRSTCR_PIDM', target: 'student_id', type: 'integer', status: 'mapped' },
          { source: 'SFRSTCR_TERM_CODE', target: 'term_code', type: 'string', status: 'mapped' },
          { source: 'SFRSTCR_CRN', target: 'course_reference', type: 'string', status: 'mapped' },
          { source: 'SFRSTCR_RSTS_CODE', target: 'enrollment_status', type: 'string', status: 'transformation' }
        ]
      },
      {
        source: 'TBRACCD (Financial Accounts)',
        target: 'financial.accounts',
        fields: [
          { source: 'TBRACCD_PIDM', target: 'student_id', type: 'integer', status: 'mapped' },
          { source: 'TBRACCD_AMOUNT', target: 'amount', type: 'decimal', status: 'mapped' },
          { source: 'TBRACCD_DETAIL_CODE', target: 'charge_type', type: 'string', status: 'transformation' }
        ]
      }
    ]
  },
  canvas: {
    name: 'Canvas LMS',
    type: 'LMS',
    mappings: [
      {
        source: 'courses',
        target: 'courses.catalog',
        fields: [
          { source: 'id', target: 'course_id', type: 'integer', status: 'mapped' },
          { source: 'name', target: 'course_name', type: 'string', status: 'mapped' },
          { source: 'course_code', target: 'course_code', type: 'string', status: 'mapped' },
          { source: 'workflow_state', target: 'status', type: 'string', status: 'transformation' }
        ]
      },
      {
        source: 'assignments',
        target: 'assignments.catalog',
        fields: [
          { source: 'id', target: 'assignment_id', type: 'integer', status: 'mapped' },
          { source: 'name', target: 'title', type: 'string', status: 'mapped' },
          { source: 'points_possible', target: 'max_points', type: 'decimal', status: 'mapped' },
          { source: 'due_at', target: 'due_date', type: 'datetime', status: 'mapped' }
        ]
      },
      {
        source: 'submissions',
        target: 'submissions.records',
        fields: [
          { source: 'user_id', target: 'student_id', type: 'integer', status: 'mapped' },
          { source: 'assignment_id', target: 'assignment_id', type: 'integer', status: 'mapped' },
          { source: 'score', target: 'points_earned', type: 'decimal', status: 'mapped' },
          { source: 'submitted_at', target: 'submission_date', type: 'datetime', status: 'mapped' }
        ]
      }
    ]
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'mapped':
      return 'bg-green-100 text-green-800';
    case 'transformation':
      return 'bg-yellow-100 text-yellow-800';
    case 'unmapped':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export const SystemMappingVisualizer: React.FC = () => {
  const [selectedSystem, setSelectedSystem] = useState<string>('banner');

  const currentSystem = systemMappings[selectedSystem as keyof typeof systemMappings];

  return (
    <div className="space-y-6">
      {/* System Selection */}
      <Card>
        <CardHeader>
          <CardTitle>Legacy System Data Mapping</CardTitle>
          <CardDescription>
            Visualize how data from legacy systems maps to Kreative Edu structure
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={selectedSystem} onValueChange={setSelectedSystem}>
            <TabsList className="grid grid-cols-2 w-full">
              <TabsTrigger value="banner" className="flex items-center space-x-2">
                <Database className="w-4 h-4" />
                <span>Banner ERP (SMS)</span>
              </TabsTrigger>
              <TabsTrigger value="canvas" className="flex items-center space-x-2">
                <BookOpen className="w-4 h-4" />
                <span>Canvas LMS</span>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </CardContent>
      </Card>

      {/* Mapping Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-blue-200 bg-blue-50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-blue-600">Total Mappings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-900">
              {currentSystem.mappings.reduce((acc, mapping) => acc + mapping.fields.length, 0)}
            </div>
            <p className="text-xs text-blue-700">Field mappings defined</p>
          </CardContent>
        </Card>

        <Card className="border-green-200 bg-green-50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-green-600">Direct Mappings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-900">
              {currentSystem.mappings.reduce((acc, mapping) => 
                acc + mapping.fields.filter(f => f.status === 'mapped').length, 0
              )}
            </div>
            <p className="text-xs text-green-700">No transformation needed</p>
          </CardContent>
        </Card>

        <Card className="border-yellow-200 bg-yellow-50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-yellow-600">Transformations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-900">
              {currentSystem.mappings.reduce((acc, mapping) => 
                acc + mapping.fields.filter(f => f.status === 'transformation').length, 0
              )}
            </div>
            <p className="text-xs text-yellow-700">Require data transformation</p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Mappings */}
      <div className="space-y-4">
        {currentSystem.mappings.map((mapping, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">{mapping.source}</CardTitle>
                  <CardDescription>Maps to: {mapping.target}</CardDescription>
                </div>
                <Badge variant="outline">{currentSystem.type}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mapping.fields.map((field, fieldIndex) => (
                  <div key={fieldIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="text-sm">
                        <div className="font-medium text-gray-900">{field.source}</div>
                        <div className="text-gray-500">{field.type}</div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                      <div className="text-sm">
                        <div className="font-medium text-gray-900">{field.target}</div>
                        <div className="text-gray-500">{field.type}</div>
                      </div>
                    </div>
                    <Badge className={getStatusColor(field.status)}>
                      {field.status === 'mapped' ? 'Direct' : 'Transform'}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Transformation Rules */}
      <Card>
        <CardHeader>
          <CardTitle>Active Transformation Rules</CardTitle>
          <CardDescription>
            Business logic applied during data migration
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="font-medium">Enrollment Status Transformation</div>
              <div className="text-sm text-gray-600 mt-1">
                Banner RSTS_CODE → Kreative enrollment_status
              </div>
              <div className="mt-2 text-xs">
                <code className="bg-gray-100 px-2 py-1 rounded">
                  'RW' → 'enrolled', 'AU' → 'audit', 'W' → 'withdrawn'
                </code>
              </div>
            </div>
            
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="font-medium">Course Workflow State Mapping</div>
              <div className="text-sm text-gray-600 mt-1">
                Canvas workflow_state → Kreative course status
              </div>
              <div className="mt-2 text-xs">
                <code className="bg-gray-100 px-2 py-1 rounded">
                  'available' → 'active', 'completed' → 'archived', 'unpublished' → 'draft'
                </code>
              </div>
            </div>
            
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="font-medium">Financial Code Translation</div>
              <div className="text-sm text-gray-600 mt-1">
                Banner DETAIL_CODE → Kreative charge_type
              </div>
              <div className="mt-2 text-xs">
                <code className="bg-gray-100 px-2 py-1 rounded">
                  'TUITION' → 'tuition', 'FEES' → 'fees', 'HOUSING' → 'room_board'
                </code>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
