
import React from 'react';
import { DashboardLayout } from '../components/dashboard/DashboardLayout';
import { CourseCreationForm } from '../components/courses/CourseCreationForm';

const CourseCreation = () => {
  console.log('CourseCreation page component rendering');
  
  return (
    <DashboardLayout>
      <CourseCreationForm />
    </DashboardLayout>
  );
};

export default CourseCreation;
