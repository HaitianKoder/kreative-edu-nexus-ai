
import React from 'react';
import { Calendar, Clock, BookOpen, Users } from 'lucide-react';

export const AcademicCalendarPanel: React.FC = () => {
  const upcomingEvents = [
    {
      date: 'Dec 15',
      title: 'Final Exams Begin',
      type: 'deadline',
      icon: BookOpen,
      color: 'text-red-600 bg-red-50'
    },
    {
      date: 'Dec 20',
      title: 'Semester End',
      type: 'milestone',
      icon: Calendar,
      color: 'text-blue-600 bg-blue-50'
    },
    {
      date: 'Jan 8',
      title: 'Spring Registration Opens',
      type: 'registration',
      icon: Users,
      color: 'text-green-600 bg-green-50'
    },
    {
      date: 'Jan 15',
      title: 'Spring Term Begins',
      type: 'milestone',
      icon: Calendar,
      color: 'text-purple-600 bg-purple-50'
    }
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">
          Academic Calendar
        </h2>
        <button className="text-sm text-blue-600 hover:text-blue-800 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded">
          Full calendar
        </button>
      </div>

      <div className="space-y-3">
        {upcomingEvents.map((event, index) => {
          const Icon = event.icon;
          return (
            <div key={index} className={`p-3 rounded-lg ${event.color}`}>
              <div className="flex items-center space-x-3">
                <Icon className="w-5 h-5" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-gray-900">{event.title}</p>
                    <span className="text-sm font-medium">{event.date}</span>
                  </div>
                  <p className="text-sm capitalize">{event.type}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Current term status */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <h3 className="text-sm font-medium text-gray-700 mb-3">Current Term Status</h3>
        <div className="grid grid-cols-2 gap-3 text-center">
          <div>
            <div className="text-lg font-bold text-gray-900">Week 14</div>
            <div className="text-xs text-gray-600">of 16 weeks</div>
          </div>
          <div>
            <div className="text-lg font-bold text-gray-900">87%</div>
            <div className="text-xs text-gray-600">term complete</div>
          </div>
        </div>
        <div className="mt-2">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-blue-500 h-2 rounded-full" style={{ width: '87%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
