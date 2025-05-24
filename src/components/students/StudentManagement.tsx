
import React, { useState } from 'react';
import { StudentSearch } from './StudentSearch';
import { StudentList } from './StudentList';
import { StudentProfile } from './StudentProfile';
import { BulkOperations } from './BulkOperations';
import { Users, Filter, UserPlus, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const StudentManagement: React.FC = () => {
  const [selectedStudent, setSelectedStudent] = useState<string | null>(null);
  const [selectedStudents, setSelectedStudents] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    academicStatus: '',
    financialStatus: '',
    courseEnrollment: '',
    aiUsagePattern: ''
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Student Management</h1>
          <p className="text-gray-600">Comprehensive student lifecycle management - SMS + LMS integration</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm">
            <UserPlus className="w-4 h-4 mr-2" />
            Add Student
          </Button>
          <Button variant="outline" size="sm">
            <Settings className="w-4 h-4 mr-2" />
            Import/Export
          </Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center">
            <Users className="w-8 h-8 text-blue-600" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-600">Total Students</p>
              <p className="text-2xl font-bold text-gray-900">2,847</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
              <span className="text-green-600 font-bold">✓</span>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-600">Active Enrollment</p>
              <p className="text-2xl font-bold text-gray-900">2,156</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
              <span className="text-yellow-600 font-bold">⚠</span>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-600">At Risk</p>
              <p className="text-2xl font-bold text-gray-900">89</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
              <span className="text-red-600 font-bold">$</span>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-600">Financial Holds</p>
              <p className="text-2xl font-bold text-gray-900">34</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Student Search & Filters</h2>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="w-4 h-4 mr-2" />
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </Button>
        </div>
        
        <StudentSearch
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          filters={filters}
          onFiltersChange={setFilters}
          showFilters={showFilters}
        />
      </div>

      {/* Bulk Operations */}
      {selectedStudents.length > 0 && (
        <BulkOperations
          selectedCount={selectedStudents.length}
          onClearSelection={() => setSelectedStudents([])}
        />
      )}

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Student List */}
        <div className="lg:col-span-2">
          <StudentList
            searchQuery={searchQuery}
            filters={filters}
            selectedStudents={selectedStudents}
            onSelectionChange={setSelectedStudents}
            onStudentSelect={setSelectedStudent}
          />
        </div>

        {/* Student Profile */}
        <div className="lg:col-span-1">
          {selectedStudent ? (
            <StudentProfile
              studentId={selectedStudent}
              onClose={() => setSelectedStudent(null)}
            />
          ) : (
            <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
              <Users className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-500">Select a student to view their profile</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
