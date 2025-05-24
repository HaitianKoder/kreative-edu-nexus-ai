
import React, { useState } from 'react';
import { Users, Settings, DollarSign, Brain, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BulkOperationsProps {
  selectedCount: number;
  onClearSelection: () => void;
}

export const BulkOperations: React.FC<BulkOperationsProps> = ({
  selectedCount,
  onClearSelection
}) => {
  const [showOperations, setShowOperations] = useState(false);

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Users className="w-5 h-5 text-blue-600 mr-2" />
          <span className="text-blue-900 font-medium">
            {selectedCount} student{selectedCount !== 1 ? 's' : ''} selected
          </span>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowOperations(!showOperations)}
          >
            <Settings className="w-4 h-4 mr-2" />
            Bulk Actions
          </Button>
          <Button variant="ghost" size="sm" onClick={onClearSelection}>
            Clear Selection
          </Button>
        </div>
      </div>

      {showOperations && (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          <Button variant="outline" size="sm" className="justify-start">
            <Settings className="w-4 h-4 mr-2" />
            Update Enrollment
          </Button>
          
          <Button variant="outline" size="sm" className="justify-start">
            <Brain className="w-4 h-4 mr-2" />
            Adjust AI Quotas
          </Button>
          
          <Button variant="outline" size="sm" className="justify-start">
            <DollarSign className="w-4 h-4 mr-2" />
            Financial Actions
          </Button>
          
          <Button variant="outline" size="sm" className="justify-start">
            <AlertTriangle className="w-4 h-4 mr-2" />
            Academic Status
          </Button>
        </div>
      )}

      {showOperations && (
        <div className="mt-3 p-3 bg-white rounded border border-blue-200">
          <h4 className="text-sm font-medium text-gray-900 mb-2">Quick Actions</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
            <button className="text-left p-2 hover:bg-gray-50 rounded">
              • Change Academic Status
            </button>
            <button className="text-left p-2 hover:bg-gray-50 rounded">
              • Bulk Enroll in Course
            </button>
            <button className="text-left p-2 hover:bg-gray-50 rounded">
              • Update Contact Info
            </button>
            <button className="text-left p-2 hover:bg-gray-50 rounded">
              • Generate Reports
            </button>
            <button className="text-left p-2 hover:bg-gray-50 rounded">
              • Send Notifications
            </button>
            <button className="text-left p-2 hover:bg-gray-50 rounded">
              • Export Data
            </button>
            <button className="text-left p-2 hover:bg-gray-50 rounded">
              • Update Financial Aid
            </button>
            <button className="text-left p-2 hover:bg-gray-50 rounded">
              • Schedule Appointments
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
