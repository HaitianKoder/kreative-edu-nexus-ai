
import React from 'react';
import { AIUsagePanel } from './AIUsagePanel';
import { SystemHealthPanel } from './SystemHealthPanel';
import { UserStatsPanel } from './UserStatsPanel';
import { RecentActivityPanel } from './RecentActivityPanel';

export const DashboardOverview: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="border-b border-gray-200 pb-4">
        <h1 className="text-2xl font-bold text-gray-900">
          Admin Dashboard
        </h1>
        <p className="text-gray-600 mt-1">
          Monitor your institution's AI-powered learning management system
        </p>
      </div>

      {/* Key metrics grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Active Users"
          value="2,847"
          change="+12%"
          changeType="positive"
          description="Students and teachers currently online"
        />
        <MetricCard
          title="AI Tokens Used"
          value="1.2M"
          change="+8%"
          changeType="positive"
          description="Tokens consumed this month"
        />
        <MetricCard
          title="System Uptime"
          value="99.9%"
          change="0%"
          changeType="neutral"
          description="Last 30 days availability"
        />
        <MetricCard
          title="Course Completion"
          value="87%"
          change="+5%"
          changeType="positive"
          description="Average completion rate"
        />
      </div>

      {/* Main dashboard panels */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 space-y-6">
          <AIUsagePanel />
          <SystemHealthPanel />
        </div>
        <div className="space-y-6">
          <UserStatsPanel />
          <RecentActivityPanel />
        </div>
      </div>
    </div>
  );
};

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative' | 'neutral';
  description: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ 
  title, 
  value, 
  change, 
  changeType, 
  description 
}) => {
  const changeColorClass = {
    positive: 'text-green-600',
    negative: 'text-red-600',
    neutral: 'text-gray-600'
  }[changeType];

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-600">{title}</h3>
        <span className={`text-xs font-medium ${changeColorClass}`}>
          {change}
        </span>
      </div>
      <div className="mt-2">
        <p className="text-2xl font-bold text-gray-900">{value}</p>
        <p className="text-xs text-gray-500 mt-1">{description}</p>
      </div>
    </div>
  );
};
