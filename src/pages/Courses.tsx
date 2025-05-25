
import React from 'react';
import { DashboardLayout } from '../components/dashboard/DashboardLayout';
import { CourseManagement } from '../components/courses/CourseManagement';

const Courses = () => {
  return (
    <DashboardLayout>
      <CourseManagement />
    </DashboardLayout>
  );
};

export default Courses;
