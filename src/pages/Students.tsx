
import React from 'react';
import { DashboardLayout } from '../components/dashboard/DashboardLayout';
import { StudentManagement } from '../components/students/StudentManagement';

const Students = () => {
  return (
    <DashboardLayout>
      <StudentManagement />
    </DashboardLayout>
  );
};

export default Students;
