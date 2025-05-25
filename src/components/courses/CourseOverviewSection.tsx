
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Users, BarChart4, Plus, Upload, Settings, CheckCircle, Clock, Archive } from 'lucide-react';

export const CourseOverviewSection: React.FC = () => {
  const courseStats = [
    { title: "Active Courses", value: "147", change: "+12", icon: BookOpen, color: "blue" },
    { title: "Total Enrollments", value: "8,543", change: "+234", icon: Users, color: "green" },
    { title: "Avg. Completion Rate", value: "87.2%", change: "+3.1%", icon: BarChart4, color: "purple" },
    { title: "AI Tutoring Sessions", value: "12,847", change: "+1,205", icon: CheckCircle, color: "orange" }
  ];

  const recentCourses = [
    { name: "Advanced Calculus I", status: "Published", enrolled: 89, completion: 92, aiSessions: 234 },
    { name: "Introduction to Psychology", status: "Published", enrolled: 156, completion: 78, aiSessions: 445 },
    { name: "Digital Marketing", status: "Draft", enrolled: 0, completion: 0, aiSessions: 0 },
    { name: "Data Structures", status: "Published", enrolled: 67, completion: 85, aiSessions: 189 }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Published': return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'Draft': return <Clock className="w-4 h-4 text-yellow-600" />;
      case 'Archived': return <Archive className="w-4 h-4 text-gray-600" />;
      default: return <Clock className="w-4 h-4 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Published': return 'bg-green-100 text-green-800 border-green-200';
      case 'Draft': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Archived': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      {/* Quick Actions */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Quick Actions</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button className="flex items-center space-x-2">
              <Plus className="w-4 h-4" />
              <span>Create Course</span>
            </Button>
            <Button variant="outline" className="flex items-center space-x-2">
              <Upload className="w-4 h-4" />
              <span>Import Content</span>
            </Button>
            <Button variant="outline" className="flex items-center space-x-2">
              <Settings className="w-4 h-4" />
              <span>Bulk Operations</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Course Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {courseStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-2">{stat.title}</p>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-2xl font-bold text-gray-900">{stat.value}</span>
                      <span className="text-sm font-medium text-green-600">{stat.change}</span>
                    </div>
                  </div>
                  <div className={`p-3 rounded-lg bg-${stat.color}-100`}>
                    <Icon className={`w-6 h-6 text-${stat.color}-600`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Active Courses Table */}
      <Card>
        <CardHeader>
          <CardTitle>Active Courses</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Course Name</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Enrolled</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Completion</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">AI Sessions</th>
                </tr>
              </thead>
              <tbody>
                {recentCourses.map((course, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{course.name}</td>
                    <td className="py-3 px-4">
                      <Badge className={`flex items-center space-x-1 ${getStatusColor(course.status)}`}>
                        {getStatusIcon(course.status)}
                        <span>{course.status}</span>
                      </Badge>
                    </td>
                    <td className="py-3 px-4">{course.enrolled}</td>
                    <td className="py-3 px-4">{course.completion}%</td>
                    <td className="py-3 px-4">{course.aiSessions}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
