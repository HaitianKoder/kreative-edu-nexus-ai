
import React from 'react';
import { DashboardLayout } from '../components/dashboard/DashboardLayout';
import { ExecutiveDashboard } from '../components/executive/ExecutiveDashboard';

const Executive = () => {
  return (
    <DashboardLayout>
      <ExecutiveDashboard />
    </DashboardLayout>
  );
};

export default Executive;
