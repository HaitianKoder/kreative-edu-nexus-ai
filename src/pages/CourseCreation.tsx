
import React from 'react';
import { DashboardLayout } from '../components/dashboard/DashboardLayout';
import { CourseCreationForm } from '../components/courses/CourseCreationForm';

const CourseCreation = () => {
  return (
    <DashboardLayout>
      <CourseCreationForm />
    </DashboardLayout>
  );
};

export default CourseCreation;
