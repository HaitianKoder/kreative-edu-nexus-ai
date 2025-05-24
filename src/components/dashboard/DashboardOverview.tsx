
import React from 'react';
import { AIUsagePanel } from './AIUsagePanel';
import { SystemHealthPanel } from './SystemHealthPanel';
import { UserStatsPanel } from './UserStatsPanel';
import { RecentActivityPanel } from './RecentActivityPanel';
import { AdmissionsPipelinePanel } from './AdmissionsPipelinePanel';
import { FinancialOverviewPanel } from './FinancialOverviewPanel';
import { AcademicCalendarPanel } from './AcademicCalendarPanel';

export const DashboardOverview: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="border-b border-gray-200 pb-4">
        <h1 className="text-2xl font-bold text-gray-900">
          Integrated SMS+LMS Dashboard
        </h1>
        <p className="text-gray-600 mt-1">
          Monitor your institution's unified Student Management and Learning Management platform
        </p>
      </div>

      {/* Key metrics grid - Updated for SMS+LMS integration */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        <MetricCard
          title="Students Enrolled"
          value="2,847"
          change="+127"
          changeType="positive"
          description="Total enrolled this term"
          category="academic"
        />
        <MetricCard
          title="Academic Progress"
          value="87%"
          change="+5%"
          changeType="positive"
          description="Average completion rate"
          category="academic"
        />
        <MetricCard
          title="AI Tokens Used"
          value="1.2M"
          change="+8%"
          changeType="positive"
          description="Tokens consumed this month"
          category="ai"
        />
        <MetricCard
          title="Financial Health"
          value="94%"
          change="+2%"
          changeType="positive"
          description="Tuition collection rate"
          category="financial"
        />
        <MetricCard
          title="System Uptime"
          value="99.9%"
          change="0%"
          changeType="neutral"
          description="SMS+LMS platform availability"
          category="system"
        />
        <MetricCard
          title="Compliance Score"
          value="98%"
          change="+1%"
          changeType="positive"
          description="FERPA, WCAG, security compliance"
          category="compliance"
        />
      </div>

      {/* SMS-specific dashboard sections */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <AdmissionsPipelinePanel />
        <FinancialOverviewPanel />
        <AcademicCalendarPanel />
      </div>

      {/* Integrated Early Alert System */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Integrated Early Alert System
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span className="font-medium text-red-800">High Risk: 23 students</span>
            </div>
            <ul className="text-sm text-red-700 space-y-1">
              <li>• Low attendance + poor grades</li>
              <li>• High AI usage (struggling indicator)</li>
              <li>• Financial holds affecting access</li>
            </ul>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span className="font-medium text-yellow-800">Medium Risk: 67 students</span>
            </div>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li>• Course drop risk indicators</li>
              <li>• Irregular AI tutoring patterns</li>
              <li>• Academic probation status</li>
            </ul>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="font-medium text-green-800">Thriving: 2,757 students</span>
            </div>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• On-track academically</li>
              <li>• Effective AI usage patterns</li>
              <li>• Financial standing current</li>
            </ul>
          </div>
        </div>
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

      {/* System Integration Status */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          System Integration Health
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <IntegrationStatus
            title="SMS ↔ LMS Sync"
            status="healthy"
            description="Real-time synchronization"
          />
          <IntegrationStatus
            title="Financial ↔ Academic"
            status="healthy"
            description="Nightly batch processing"
          />
          <IntegrationStatus
            title="AI Analytics ↔ Student Records"
            status="healthy"
            description="Live data integration"
          />
          <IntegrationStatus
            title="External Systems"
            status="warning"
            description="2 pending updates"
          />
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
  category: 'academic' | 'ai' | 'financial' | 'system' | 'compliance';
}

const MetricCard: React.FC<MetricCardProps> = ({ 
  title, 
  value, 
  change, 
  changeType, 
  description,
  category 
}) => {
  const changeColorClass = {
    positive: 'text-green-600',
    negative: 'text-red-600',
    neutral: 'text-gray-600'
  }[changeType];

  const categoryColorClass = {
    academic: 'border-blue-200 bg-blue-50',
    ai: 'border-purple-200 bg-purple-50',
    financial: 'border-green-200 bg-green-50',
    system: 'border-gray-200 bg-gray-50',
    compliance: 'border-orange-200 bg-orange-50'
  }[category];

  return (
    <div className={`rounded-lg border p-4 ${categoryColorClass}`}>
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-600">{title}</h3>
        <span className={`text-xs font-medium ${changeColorClass}`}>
          {change}
        </span>
      </div>
      <div className="mt-2">
        <p className="text-xl font-bold text-gray-900">{value}</p>
        <p className="text-xs text-gray-500 mt-1">{description}</p>
      </div>
    </div>
  );
};

interface IntegrationStatusProps {
  title: string;
  status: 'healthy' | 'warning' | 'error';
  description: string;
}

const IntegrationStatus: React.FC<IntegrationStatusProps> = ({ title, status, description }) => {
  const statusConfig = {
    healthy: { color: 'text-green-700', bg: 'bg-green-100', icon: '✅' },
    warning: { color: 'text-yellow-700', bg: 'bg-yellow-100', icon: '⚠️' },
    error: { color: 'text-red-700', bg: 'bg-red-100', icon: '❌' }
  }[status];

  return (
    <div className={`${statusConfig.bg} rounded-lg p-3`}>
      <div className="flex items-center space-x-2 mb-1">
        <span>{statusConfig.icon}</span>
        <span className={`font-medium ${statusConfig.color}`}>{title}</span>
      </div>
      <p className={`text-sm ${statusConfig.color}`}>{description}</p>
    </div>
  );
};
