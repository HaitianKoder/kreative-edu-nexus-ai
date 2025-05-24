
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface StudentSearchProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  filters: {
    academicStatus: string;
    financialStatus: string;
    courseEnrollment: string;
    aiUsagePattern: string;
  };
  onFiltersChange: (filters: any) => void;
  showFilters: boolean;
}

export const StudentSearch: React.FC<StudentSearchProps> = ({
  searchQuery,
  onSearchChange,
  filters,
  onFiltersChange,
  showFilters
}) => {
  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input
          type="search"
          placeholder="Search by name, student ID, email, or course..."
          className="pl-10 pr-4"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          aria-label="Search students"
        />
      </div>

      {/* Advanced Filters */}
      {showFilters && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-gray-50 rounded-lg">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Academic Status
            </label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              value={filters.academicStatus}
              onChange={(e) => onFiltersChange({ ...filters, academicStatus: e.target.value })}
            >
              <option value="">All Statuses</option>
              <option value="good-standing">Good Standing</option>
              <option value="probation">Academic Probation</option>
              <option value="warning">Academic Warning</option>
              <option value="suspension">Academic Suspension</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Financial Status
            </label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              value={filters.financialStatus}
              onChange={(e) => onFiltersChange({ ...filters, financialStatus: e.target.value })}
            >
              <option value="">All Statuses</option>
              <option value="current">Current</option>
              <option value="past-due">Past Due</option>
              <option value="hold">Financial Hold</option>
              <option value="payment-plan">Payment Plan</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Course Enrollment
            </label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              value={filters.courseEnrollment}
              onChange={(e) => onFiltersChange({ ...filters, courseEnrollment: e.target.value })}
            >
              <option value="">All Students</option>
              <option value="full-time">Full-time (12+ credits)</option>
              <option value="part-time">Part-time (6-11 credits)</option>
              <option value="minimal">Minimal (1-5 credits)</option>
              <option value="overload">Overload (18+ credits)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              AI Usage Pattern
            </label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              value={filters.aiUsagePattern}
              onChange={(e) => onFiltersChange({ ...filters, aiUsagePattern: e.target.value })}
            >
              <option value="">All Patterns</option>
              <option value="heavy">Heavy User (&gt;80% quota)</option>
              <option value="moderate">Moderate User (40-80%)</option>
              <option value="light">Light User (10-40%)</option>
              <option value="minimal">Minimal User (&lt;10%)</option>
            </select>
          </div>

          <div className="md:col-span-2 lg:col-span-4 flex justify-end space-x-2">
            <Button variant="outline" size="sm" onClick={() => onFiltersChange({ academicStatus: '', financialStatus: '', courseEnrollment: '', aiUsagePattern: '' })}>
              Clear Filters
            </Button>
            <Button size="sm">
              Apply Filters
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
