
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ArrowLeft, BookOpen, Upload, Brain, Zap, Eye, Target, 
  Users, DollarSign, Calendar, AlertTriangle, CheckCircle,
  FileText, Video, PenTool, GripVertical, Plus, Trash2
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface LessonItem {
  id: string;
  type: 'lecture' | 'reading' | 'assignment' | 'quiz';
  title: string;
  duration: string;
  order: number;
}

export const CourseCreationForm: React.FC = () => {
  const navigate = useNavigate();
  const [courseData, setCourseData] = useState({
    title: '',
    description: '',
    department: '',
    credits: '',
    capacity: ''
  });
  
  const [lessons, setLessons] = useState<LessonItem[]>([]);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const [aiAnalysis, setAiAnalysis] = useState({
    chunks: 0,
    tokens: 0,
    accessibility: 85,
    optimization: 92
  });

  const departments = [
    'Computer Science', 'Mathematics', 'Physics', 'Chemistry', 
    'Biology', 'Psychology', 'Literature', 'History'
  ];

  const contentTypes = [
    { id: 'lecture', name: 'Video Lecture', icon: Video, color: 'blue' },
    { id: 'reading', name: 'Reading Material', icon: BookOpen, color: 'green' },
    { id: 'assignment', name: 'Assignment', icon: PenTool, color: 'purple' },
    { id: 'quiz', name: 'Quiz/Test', icon: FileText, color: 'orange' }
  ];

  const addLesson = (type: 'lecture' | 'reading' | 'assignment' | 'quiz') => {
    const newLesson: LessonItem = {
      id: Date.now().toString(),
      type,
      title: `New ${type}`,
      duration: '30 min',
      order: lessons.length
    };
    setLessons([...lessons, newLesson]);
  };

  const removeLesson = (id: string) => {
    setLessons(lessons.filter(lesson => lesson.id !== id));
  };

  const handleFileUpload = (fileName: string) => {
    setUploadedFiles([...uploadedFiles, fileName]);
    // Simulate AI analysis update
    setAiAnalysis(prev => ({
      ...prev,
      chunks: prev.chunks + Math.floor(Math.random() * 20) + 5,
      tokens: prev.tokens + Math.floor(Math.random() * 1000) + 500
    }));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => navigate('/courses')}
            className="flex items-center space-x-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Courses</span>
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Create New Course</h1>
            <p className="text-gray-600 mt-1">Build an AI-powered, accessible learning experience</p>
          </div>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">Save as Draft</Button>
          <Button>Publish Course</Button>
        </div>
      </div>

      <Tabs defaultValue="basic" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="basic">Course Information</TabsTrigger>
          <TabsTrigger value="curriculum">Curriculum Builder</TabsTrigger>
          <TabsTrigger value="ai-features">AI Integration</TabsTrigger>
          <TabsTrigger value="integration">SMS Integration</TabsTrigger>
        </TabsList>

        {/* Basic Course Information */}
        <TabsContent value="basic" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5" />
                <span>Course Details</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="title">Course Title</Label>
                  <Input
                    id="title"
                    value={courseData.title}
                    onChange={(e) => setCourseData({...courseData, title: e.target.value})}
                    placeholder="e.g., Advanced Data Structures"
                  />
                </div>
                <div>
                  <Label htmlFor="department">Department</Label>
                  <Select value={courseData.department} onValueChange={(value) => setCourseData({...courseData, department: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
                    <SelectContent>
                      {departments.map(dept => (
                        <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="credits">Credit Hours</Label>
                  <Input
                    id="credits"
                    type="number"
                    value={courseData.credits}
                    onChange={(e) => setCourseData({...courseData, credits: e.target.value})}
                    placeholder="3"
                  />
                </div>
                <div>
                  <Label htmlFor="capacity">Enrollment Capacity</Label>
                  <Input
                    id="capacity"
                    type="number"
                    value={courseData.capacity}
                    onChange={(e) => setCourseData({...courseData, capacity: e.target.value})}
                    placeholder="30"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="description">Course Description</Label>
                <Textarea
                  id="description"
                  value={courseData.description}
                  onChange={(e) => setCourseData({...courseData, description: e.target.value})}
                  placeholder="Comprehensive overview of advanced data structures including trees, graphs, and algorithms..."
                  rows={4}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Curriculum Builder */}
        <TabsContent value="curriculum" className="space-y-6">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {/* Content Types */}
            <Card>
              <CardHeader>
                <CardTitle>Add Course Content</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {contentTypes.map((type) => {
                    const Icon = type.icon;
                    return (
                      <Button
                        key={type.id}
                        variant="outline"
                        className="h-auto p-4 justify-start"
                        onClick={() => addLesson(type.id as any)}
                      >
                        <div className="flex items-center space-x-2">
                          <Icon className={`w-4 h-4 text-${type.color}-600`} />
                          <span className="text-sm font-medium">{type.name}</span>
                        </div>
                      </Button>
                    );
                  })}
                </div>

                {/* File Upload Area */}
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-2">Drop files here or click to upload</p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleFileUpload('lecture-notes.pdf')}
                  >
                    Browse Files
                  </Button>
                </div>

                {uploadedFiles.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-sm font-medium mb-2">Uploaded Files</h4>
                    <div className="space-y-1">
                      {uploadedFiles.map((file, index) => (
                        <div key={index} className="flex items-center justify-between p-2 bg-green-50 rounded">
                          <span className="text-sm">{file}</span>
                          <Badge className="bg-green-100 text-green-800">Processed</Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Curriculum Structure */}
            <Card>
              <CardHeader>
                <CardTitle>Course Curriculum</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {lessons.map((lesson, index) => {
                    const Icon = contentTypes.find(t => t.id === lesson.type)?.icon || FileText;
                    const color = contentTypes.find(t => t.id === lesson.type)?.color || 'gray';
                    
                    return (
                      <div key={lesson.id} className="flex items-center space-x-3 p-3 border rounded-lg">
                        <GripVertical className="w-4 h-4 text-gray-400 cursor-grab" />
                        <Icon className={`w-4 h-4 text-${color}-600`} />
                        <div className="flex-1">
                          <Input
                            value={lesson.title}
                            onChange={(e) => {
                              const updatedLessons = lessons.map(l => 
                                l.id === lesson.id ? { ...l, title: e.target.value } : l
                              );
                              setLessons(updatedLessons);
                            }}
                            className="h-8 text-sm"
                          />
                        </div>
                        <Input
                          value={lesson.duration}
                          onChange={(e) => {
                            const updatedLessons = lessons.map(l => 
                              l.id === lesson.id ? { ...l, duration: e.target.value } : l
                            );
                            setLessons(updatedLessons);
                          }}
                          className="h-8 w-20 text-sm"
                        />
                        <Button 
                          size="sm" 
                          variant="ghost"
                          onClick={() => removeLesson(lesson.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    );
                  })}
                  
                  {lessons.length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                      <BookOpen className="w-8 h-8 mx-auto mb-2 opacity-50" />
                      <p>Add content types to build your curriculum</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* AI Integration Features */}
        <TabsContent value="ai-features" className="space-y-6">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {/* AI Tutor Training */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Brain className="w-5 h-5 text-blue-600" />
                  <span>AI Tutor Training</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="text-sm font-medium text-blue-900 mb-2">RAG System Status</h4>
                  <div className="space-y-2 text-sm text-blue-800">
                    <div className="flex justify-between">
                      <span>Content Chunks:</span>
                      <span className="font-medium">{aiAnalysis.chunks}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Estimated Tokens:</span>
                      <span className="font-medium">{aiAnalysis.tokens.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Training Status:</span>
                      <Badge className="bg-green-100 text-green-800">Ready</Badge>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-2">Content Processing Preview</h4>
                  <div className="bg-gray-50 p-3 rounded text-xs font-mono">
                    <div className="text-green-600">[CHUNK 1] Introduction to Data Structures...</div>
                    <div className="text-blue-600">[CHUNK 2] Arrays and their applications...</div>
                    <div className="text-purple-600">[CHUNK 3] Linked lists implementation...</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Accessibility Compliance */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Eye className="w-5 h-5 text-green-600" />
                  <span>Accessibility Compliance</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">WCAG 2.2 AA Compliance</span>
                    <span className="text-sm font-bold text-green-600">{aiAnalysis.accessibility}%</span>
                  </div>
                  <Progress value={aiAnalysis.accessibility} className="h-2" />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-2 bg-green-50 rounded">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Alt-text Generation</span>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Active</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-2 bg-green-50 rounded">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Caption Generation</span>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Active</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-2 bg-yellow-50 rounded">
                    <div className="flex items-center space-x-2">
                      <AlertTriangle className="w-4 h-4 text-yellow-600" />
                      <span className="text-sm">Color Contrast Check</span>
                    </div>
                    <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Content Optimization */}
            <Card className="xl:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="w-5 h-5 text-purple-600" />
                  <span>Content Optimization Recommendations</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="text-sm font-medium text-blue-900 mb-2">Engagement Optimization</h4>
                    <p className="text-xs text-blue-800">Add interactive elements every 10-15 minutes to maintain student attention</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="text-sm font-medium text-green-900 mb-2">AI Retrieval Optimization</h4>
                    <p className="text-xs text-green-800">Break down complex topics into smaller, focused sections for better AI understanding</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="text-sm font-medium text-purple-900 mb-2">Assessment Integration</h4>
                    <p className="text-xs text-purple-800">Consider adding knowledge checks after each major concept introduction</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* SMS Integration */}
        <TabsContent value="integration" className="space-y-6">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {/* Enrollment & Capacity */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span>Enrollment Management</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-900">{courseData.capacity || '0'}</div>
                      <div className="text-xs text-blue-700">Max Capacity</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-900">0</div>
                      <div className="text-xs text-blue-700">Current Enrolled</div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Department Budget Impact:</span>
                    <span className="font-medium">$0 / semester</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Registration Status:</span>
                    <Badge variant="outline">Not Open</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cost Estimation */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <DollarSign className="w-5 h-5 text-green-600" />
                  <span>AI Cost Estimation</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-center mb-3">
                    <div className="text-2xl font-bold text-green-900">$4.50</div>
                    <div className="text-xs text-green-700">Estimated monthly AI cost</div>
                  </div>
                  <div className="space-y-1 text-xs text-green-800">
                    <div className="flex justify-between">
                      <span>RAG Processing:</span>
                      <span>$1.20</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Student Interactions:</span>
                      <span>$2.80</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Content Generation:</span>
                      <span>$0.50</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Academic Calendar Integration */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-purple-600" />
                  <span>Academic Calendar</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Semester:</span>
                    <span className="font-medium">Spring 2025</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Start Date:</span>
                    <span className="font-medium">Jan 15, 2025</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>End Date:</span>
                    <span className="font-medium">May 10, 2025</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Meeting Pattern:</span>
                    <span className="font-medium">MWF 10:00-11:00</span>
                  </div>
                </div>
                
                <Button variant="outline" size="sm" className="w-full">
                  Configure Schedule
                </Button>
              </CardContent>
            </Card>

            {/* Student Profile Integration */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-orange-600" />
                  <span>Student Profile Integration</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="text-sm font-medium text-orange-900 mb-2">Integration Features</h4>
                  <div className="space-y-2 text-sm text-orange-800">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-3 h-3" />
                      <span>Automatic grade sync</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-3 h-3" />
                      <span>Attendance tracking</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-3 h-3" />
                      <span>AI tutoring data collection</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-3 h-3" />
                      <span>Academic progress alerts</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
