
import React from 'react';
import { DashboardLayout } from '../components/dashboard/DashboardLayout';
import { AIAnalyticsDashboard } from '../components/ai-analytics/AIAnalyticsDashboard';

const AIAnalytics = () => {
  return (
    <DashboardLayout>
      <AIAnalyticsDashboard />
    </DashboardLayout>
  );
};

export default AIAnalytics;
