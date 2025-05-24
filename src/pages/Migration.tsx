
import React from 'react';
import { DashboardLayout } from '../components/dashboard/DashboardLayout';
import { MigrationControlCenter } from '../components/migration/MigrationControlCenter';

const Migration = () => {
  return (
    <DashboardLayout>
      <MigrationControlCenter />
    </DashboardLayout>
  );
};

export default Migration;
