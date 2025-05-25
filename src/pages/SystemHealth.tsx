
import React from 'react';
import { DashboardLayout } from '../components/dashboard/DashboardLayout';
import { SystemHealthDashboard } from '../components/system-health/SystemHealthDashboard';

const SystemHealth = () => {
  return (
    <DashboardLayout>
      <SystemHealthDashboard />
    </DashboardLayout>
  );
};

export default SystemHealth;
