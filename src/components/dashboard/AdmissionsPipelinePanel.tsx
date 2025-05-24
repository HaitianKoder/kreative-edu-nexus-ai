
import React from 'react';
import { Users, UserCheck, Clock, DollarSign } from 'lucide-react';

export const AdmissionsPipelinePanel: React.FC = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">
          Admissions Pipeline
        </h2>
        <button className="text-sm text-blue-600 hover:text-blue-800 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded">
          View all
        </button>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
          <div className="flex items-center space-x-3">
            <Users className="w-5 h-5 text-blue-600" />
            <div>
              <p className="font-medium text-gray-900">Applications</p>
              <p className="text-sm text-gray-600">Pending review</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xl font-bold text-gray-900">847</p>
            <p className="text-xs text-green-600">+23 today</p>
          </div>
        </div>

        <div className="flex items-center justify-between p-3 bg-amber-50 rounded-lg">
          <div className="flex items-center space-x-3">
            <Clock className="w-5 h-5 text-amber-600" />
            <div>
              <p className="font-medium text-gray-900">Interviews</p>
              <p className="text-sm text-gray-600">Scheduled this week</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xl font-bold text-gray-900">23</p>
            <p className="text-xs text-gray-500">Next: Mon 9 AM</p>
          </div>
        </div>

        <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
          <div className="flex items-center space-x-3">
            <UserCheck className="w-5 h-5 text-green-600" />
            <div>
              <p className="font-medium text-gray-900">Acceptances</p>
              <p className="text-sm text-gray-600">Pending response</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xl font-bold text-gray-900">156</p>
            <p className="text-xs text-yellow-600">87% response rate</p>
          </div>
        </div>

        <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg">
          <div className="flex items-center space-x-3">
            <DollarSign className="w-5 h-5 text-emerald-600" />
            <div>
              <p className="font-medium text-gray-900">Deposits</p>
              <p className="text-sm text-gray-600">Received this term</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xl font-bold text-gray-900">$127.4K</p>
            <p className="text-xs text-green-600">98% of accepted</p>
          </div>
        </div>
      </div>

      {/* Pipeline progress */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <h3 className="text-sm font-medium text-gray-700 mb-3">Pipeline Progress</h3>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Application → Review</span>
            <span className="font-medium">847 pending</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-blue-500 h-2 rounded-full" style={{ width: '65%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
