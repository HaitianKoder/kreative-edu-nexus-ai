
import React, { useEffect } from 'react';
import { DashboardLayout } from '../components/dashboard/DashboardLayout';
import { CourseCreationForm } from '../components/courses/CourseCreationForm';
import { useLocation } from 'react-router-dom';

const CourseCreation = () => {
  const location = useLocation();
  
  useEffect(() => {
    console.log('📚 CourseCreation page mounted');
    console.log('📍 Current location:', location.pathname);
  }, [location]);
  
  console.log('🔄 CourseCreation page component rendering');
  
  return (
    <DashboardLayout>
      <CourseCreationForm />
    </DashboardLayout>
  );
};

export default CourseCreation;
