
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Users, Clock, GraduationCap, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const CourseCreationForm: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Course creation form submitted');
    // Handle form submission logic here
  };

  const handleBack = () => {
    navigate('/courses');
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center space-x-4">
        <Button 
          variant="outline" 
          size="sm"
          onClick={handleBack}
          className="flex items-center space-x-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Courses</span>
        </Button>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Create New Course</h1>
          <p className="text-gray-600 mt-2">Build an AI-powered learning experience</p>
        </div>
      </div>

      {/* Course Creation Form */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Form */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5" />
                <span>Course Details</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Information */}
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="title">Course Title</Label>
                    <Input 
                      id="title" 
                      placeholder="e.g., Introduction to Machine Learning"
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="code">Course Code</Label>
                    <Input 
                      id="code" 
                      placeholder="e.g., CS-101"
                      className="mt-1"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="department">Department</Label>
                      <Select>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select department" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="computer-science">Computer Science</SelectItem>
                          <SelectItem value="mathematics">Mathematics</SelectItem>
                          <SelectItem value="physics">Physics</SelectItem>
                          <SelectItem value="biology">Biology</SelectItem>
                          <SelectItem value="chemistry">Chemistry</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="credits">Credits</Label>
                      <Select>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select credits" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Credit</SelectItem>
                          <SelectItem value="2">2 Credits</SelectItem>
                          <SelectItem value="3">3 Credits</SelectItem>
                          <SelectItem value="4">4 Credits</SelectItem>
                          <SelectItem value="5">5 Credits</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="description">Course Description</Label>
                    <Textarea 
                      id="description"
                      placeholder="Provide a comprehensive description of the course content and objectives..."
                      className="mt-1 min-h-[100px]"
                    />
                  </div>
                </div>

                {/* AI Configuration */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold mb-4">AI Integration Settings</h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="ai-model">Primary AI Model</Label>
                      <Select>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select AI model" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="gpt-4">GPT-4 (OpenAI)</SelectItem>
                          <SelectItem value="claude-3">Claude 3 (Anthropic)</SelectItem>
                          <SelectItem value="llama-2">Llama 2 (Meta)</SelectItem>
                          <SelectItem value="mixtral">Mixtral (Mistral)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="tutor-persona">AI Tutor Persona</Label>
                      <Textarea 
                        id="tutor-persona"
                        placeholder="Define the AI tutor's teaching style, personality, and approach..."
                        className="mt-1"
                      />
                    </div>
                  </div>
                </div>

                {/* Form Actions */}
                <div className="flex space-x-4 pt-6">
                  <Button type="submit" className="flex-1">
                    <GraduationCap className="w-4 h-4 mr-2" />
                    Create Course
                  </Button>
                  <Button type="button" variant="outline" onClick={handleBack}>
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar Information */}
        <div className="space-y-6">
          {/* Course Features */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Course Features</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <Badge className="bg-blue-100 text-blue-800">AI Tutoring</Badge>
                <span>24/7 intelligent assistance</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Badge className="bg-green-100 text-green-800">SMS Integration</Badge>
                <span>Mobile learning support</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Badge className="bg-purple-100 text-purple-800">Auto-Grading</Badge>
                <span>Instant feedback system</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Badge className="bg-orange-100 text-orange-800">Analytics</Badge>
                <span>Learning progress tracking</span>
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Getting Started</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-blue-600" />
                <div>
                  <div className="font-medium">Add Students</div>
                  <div className="text-sm text-gray-500">Enroll students after creation</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-green-600" />
                <div>
                  <div className="font-medium">Upload Content</div>
                  <div className="text-sm text-gray-500">Add lectures and materials</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <GraduationCap className="w-5 h-5 text-purple-600" />
                <div>
                  <div className="font-medium">Launch Course</div>
                  <div className="text-sm text-gray-500">Make available to students</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
