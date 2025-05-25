
import React from 'react';
import { CourseOverviewSection } from './CourseOverviewSection';
import { CourseCreationPanel } from './CourseCreationPanel';
import { AIIntegrationFeatures } from './AIIntegrationFeatures';
import { TeacherProductivityTools } from './TeacherProductivityTools';
import { AccessibilityCompliance } from './AccessibilityCompliance';

export const CourseManagement: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Course Management</h1>
          <p className="text-gray-600 mt-2">AI-powered learning management with seamless SMS integration</p>
        </div>
      </div>

      {/* Course Overview */}
      <CourseOverviewSection />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <CourseCreationPanel />
        <AIIntegrationFeatures />
      </div>

      {/* Teacher Tools */}
      <TeacherProductivityTools />

      {/* Accessibility & Compliance */}
      <AccessibilityCompliance />
    </div>
  );
};
