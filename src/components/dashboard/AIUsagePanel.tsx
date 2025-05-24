
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const usageData = [
  { time: '00:00', tokens: 1200, cost: 0.024 },
  { time: '04:00', tokens: 800, cost: 0.016 },
  { time: '08:00', tokens: 3200, cost: 0.064 },
  { time: '12:00', tokens: 4800, cost: 0.096 },
  { time: '16:00', tokens: 5400, cost: 0.108 },
  { time: '20:00', tokens: 3600, cost: 0.072 },
];

const providerData = [
  { provider: 'OpenAI', usage: 65, cost: 0.18, status: 'healthy' },
  { provider: 'Anthropic', usage: 23, cost: 0.12, status: 'healthy' },
  { provider: 'Groq', usage: 8, cost: 0.03, status: 'healthy' },
  { provider: 'Mistral', usage: 4, cost: 0.02, status: 'degraded' },
];

export const AIUsagePanel: React.FC = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">
          AI Usage Analytics
        </h2>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">Real-time</span>
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Token usage chart */}
      <div className="mb-8">
        <h3 className="text-sm font-medium text-gray-700 mb-4">
          Token Usage (Last 24 Hours)
        </h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={usageData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="time" 
                stroke="#666"
                fontSize={12}
              />
              <YAxis 
                stroke="#666"
                fontSize={12}
                tickFormatter={(value) => `${value/1000}K`}
              />
              <Tooltip
                labelFormatter={(label) => `Time: ${label}`}
                formatter={(value, name) => [
                  name === 'tokens' ? `${value} tokens` : `$${value}`,
                  name === 'tokens' ? 'Tokens Used' : 'Cost'
                ]}
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="tokens" 
                stroke="#2563eb" 
                strokeWidth={2}
                dot={{ fill: '#2563eb', strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* AI Provider status */}
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-4">
          AI Provider Performance
        </h3>
        <div className="space-y-3">
          {providerData.map((provider) => (
            <div key={provider.provider} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${
                  provider.status === 'healthy' ? 'bg-green-500' : 'bg-yellow-500'
                }`}></div>
                <span className="font-medium text-gray-900">{provider.provider}</span>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <span>{provider.usage}% usage</span>
                <span>${provider.cost.toFixed(3)}</span>
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  provider.status === 'healthy' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {provider.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Token quota alert */}
      <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
        <div className="flex items-start space-x-3">
          <div className="w-5 h-5 text-amber-600 mt-0.5">⚠️</div>
          <div>
            <h4 className="text-sm font-medium text-amber-800">Token Quota Alert</h4>
            <p className="text-sm text-amber-700 mt-1">
              Computer Science department has used 85% of their monthly token allocation.
            </p>
            <button className="text-sm text-amber-800 font-medium underline mt-2 hover:text-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 rounded">
              Adjust quota
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
