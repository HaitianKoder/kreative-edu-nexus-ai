
import React from 'react';
import { DollarSign, CreditCard, AlertTriangle, TrendingUp } from 'lucide-react';

export const FinancialOverviewPanel: React.FC = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">
          Financial Overview
        </h2>
        <button className="text-sm text-blue-600 hover:text-blue-800 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded">
          Details
        </button>
      </div>

      <div className="space-y-4">
        <div className="p-3 bg-green-50 rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <DollarSign className="w-5 h-5 text-green-600" />
              <div>
                <p className="font-medium text-gray-900">Tuition Collected</p>
                <p className="text-sm text-gray-600">This semester</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold text-gray-900">$2.4M</p>
              <p className="text-xs text-gray-500">of $2.8M expected</p>
            </div>
          </div>
          <div className="mt-2">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '86%' }}></div>
            </div>
          </div>
        </div>

        <div className="p-3 bg-red-50 rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              <div>
                <p className="font-medium text-gray-900">Outstanding Balance</p>
                <p className="text-sm text-gray-600">Past due accounts</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold text-gray-900">$387K</p>
              <p className="text-xs text-red-600">134 students affected</p>
            </div>
          </div>
        </div>

        <div className="p-3 bg-blue-50 rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <CreditCard className="w-5 h-5 text-blue-600" />
              <div>
                <p className="font-medium text-gray-900">Payment Plans</p>
                <p className="text-sm text-gray-600">Active arrangements</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold text-gray-900">234</p>
              <p className="text-xs text-blue-600">$156K monthly</p>
            </div>
          </div>
        </div>

        <div className="p-3 bg-purple-50 rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <TrendingUp className="w-5 h-5 text-purple-600" />
              <div>
                <p className="font-medium text-gray-900">Financial Aid</p>
                <p className="text-sm text-gray-600">Students receiving aid</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold text-gray-900">67%</p>
              <p className="text-xs text-purple-600">$1.9M disbursed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
