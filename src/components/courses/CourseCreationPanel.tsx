import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { GripVertical, FileText, Video, BookOpen, PenTool, Brain, Upload, Eye, Zap, Plus } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export const CourseCreationPanel: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  console.log('CourseCreationPanel rendered');
  console.log('Current location:', location.pathname);
  console.log('Navigate function available:', !!navigate);
  
  const contentTypes = [
    { id: 'lecture', name: 'Video Lecture', icon: Video, color: 'blue' },
    { id: 'reading', name: 'Reading Material', icon: BookOpen, color: 'green' },
    { id: 'assignment', name: 'Assignment', icon: PenTool, color: 'purple' },
    { id: 'quiz', name: 'Quiz/Test', icon: FileText, color: 'orange' }
  ];

  const curriculumItems = [
    { id: '1', type: 'lecture', title: 'Introduction to Course', duration: '45 min', aiIndexed: true },
    { id: '2', type: 'reading', title: 'Chapter 1: Fundamentals', duration: '30 min', aiIndexed: true },
    { id: '3', type: 'assignment', title: 'Problem Set 1', duration: '2 hours', aiIndexed: false },
    { id: '4', type: 'quiz', title: 'Knowledge Check', duration: '20 min', aiIndexed: true }
  ];

  const getTypeIcon = (type: string) => {
    const typeData = contentTypes.find(t => t.id === type);
    if (!typeData) return FileText;
    return typeData.icon;
  };

  const getTypeColor = (type: string) => {
    const typeData = contentTypes.find(t => t.id === type);
    if (!typeData) return 'gray';
    return typeData.color;
  };

  const handleCreateCourse = () => {
    console.log('🚀 CREATE COURSE BUTTON CLICKED');
    console.log('Current pathname before navigation:', location.pathname);
    console.log('Window location before navigation:', window.location.pathname);
    
    try {
      console.log('🔄 Attempting navigation to /courses/create');
      navigate('/courses/create');
      console.log('✅ Navigate function called successfully');
      
      // Verify navigation after a delay
      setTimeout(() => {
        console.log('📍 Post-navigation check:');
        console.log('- Window pathname:', window.location.pathname);
        console.log('- Expected: /courses/create');
        console.log('- Match:', window.location.pathname === '/courses/create' ? '✅' : '❌');
      }, 100);
      
    } catch (error) {
      console.error('❌ Navigation failed with error:', error);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <BookOpen className="w-5 h-5" />
          <span>Course Builder</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Content Types */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3">Content Types Available</h4>
          <div className="grid grid-cols-2 gap-3">
            {contentTypes.map((type) => {
              const Icon = type.icon;
              return (
                <div key={type.id} className="p-3 border-2 border-dashed border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                  <div className="flex items-center space-x-2">
                    <Icon className="w-4 h-4 text-gray-600" />
                    <span className="text-sm font-medium">{type.name}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Curriculum Builder */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-medium text-gray-700">Course Curriculum</h4>
            <Button 
              size="sm" 
              variant="outline"
              onClick={handleCreateCourse}
              className="bg-white hover:bg-gray-50 border border-gray-300"
            >
              <Plus className="w-4 h-4 mr-1" />
              Create Course
            </Button>
          </div>
          
          <div className="space-y-2">
            {curriculumItems.map((item, index) => {
              const Icon = getTypeIcon(item.type);
              
              return (
                <div key={item.id} className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50">
                  <GripVertical className="w-4 h-4 text-gray-400 cursor-grab" />
                  <Icon className="w-4 h-4 text-gray-600" />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium text-sm">{item.title}</span>
                      {item.aiIndexed && (
                        <Badge className="bg-blue-100 text-blue-800 text-xs">
                          <Brain className="w-3 h-3 mr-1" />
                          AI Indexed
                        </Badge>
                      )}
                    </div>
                    <span className="text-xs text-gray-500">{item.duration}</span>
                  </div>
                  <Button size="sm" variant="ghost">
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>
              );
            })}
          </div>
        </div>

        {/* AI-Powered Features */}
        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="text-sm font-medium text-blue-900 mb-2 flex items-center">
            <Zap className="w-4 h-4 mr-1" />
            AI-Powered Content Features
          </h4>
          <div className="space-y-2 text-sm text-blue-800">
            <div className="flex items-center space-x-2">
              <Brain className="w-3 h-3" />
              <span>Automatic RAG indexing for AI tutoring</span>
            </div>
            <div className="flex items-center space-x-2">
              <Eye className="w-3 h-3" />
              <span>AI-generated alt-text for accessibility</span>
            </div>
            <div className="flex items-center space-x-2">
              <Upload className="w-3 h-3" />
              <span>Smart content chunking for optimal retrieval</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
