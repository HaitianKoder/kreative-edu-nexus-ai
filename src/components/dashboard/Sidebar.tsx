
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Home, Users, Brain, Database, GraduationCap, MessageSquare, Settings, BarChart4, AlertTriangle, Target, Calendar, DollarSign, FileText, Activity, Shield, BookOpen } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

interface SidebarProps {
  isOpen?: boolean;
  onToggle?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen = true, onToggle }) => {
  const location = useLocation();

  const menuItems = [
    {
      section: "Overview",
      items: [
        { name: "Dashboard", href: "/", icon: Home },
        { name: "Executive Dashboard", href: "/executive", icon: Target },
      ]
    },
    {
      section: "Academic Operations",
      items: [
        { name: "Student Management", href: "/students", icon: Users },
        { name: "Admissions & Registration", href: "/admissions", icon: FileText },
        { name: "Financial Services", href: "/financial", icon: DollarSign },
      ]
    },
    {
      section: "Learning Management",
      items: [
        { name: "Course Management", href: "/courses", icon: BookOpen },
        { name: "Academic Calendar", href: "/calendar", icon: Calendar },
      ]
    },
    {
      section: "Analytics & AI",
      items: [
        { name: "AI Analytics", href: "/ai-analytics", icon: Brain },
        { name: "Reporting & Compliance", href: "/reporting", icon: BarChart4 },
      ]
    },
    {
      section: "System Management",
      items: [
        { name: "System Health", href: "/system-health", icon: Activity },
        { name: "Migration Center", href: "/migration", icon: Database },
      ]
    }
  ];

  return (
    <div className={`hidden md:flex md:flex-col md:fixed md:inset-y-0 bg-gray-50 border-r border-gray-200 transition-all duration-300 ${
      isOpen ? 'md:w-64' : 'md:w-16'
    }`}>
      <div className="flex-1 flex flex-col pt-5">
        <div className="flex items-center flex-shrink-0 px-4">
          <GraduationCap className="h-8 w-auto text-blue-600 mr-2" />
          {isOpen && <span className="text-lg font-semibold text-gray-900">CampusAI</span>}
        </div>
        <nav className="mt-6 flex-1 px-2 space-y-1" aria-label="Sidebar">
          {menuItems.map((section, index) => (
            <div key={index} className="space-y-2">
              {isOpen && (
                <div className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider" aria-hidden="true">
                  {section.section}
                </div>
              )}
              {section.items.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`group flex items-center px-3 py-2 text-sm font-medium rounded-md ${location.pathname === item.href
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  title={!isOpen ? item.name : undefined}
                >
                  <item.icon
                    className={`${isOpen ? 'mr-3' : 'mx-auto'} h-6 w-6 ${location.pathname === item.href ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-500'
                      }`}
                    aria-hidden="true"
                  />
                  {isOpen && item.name}
                </Link>
              ))}
            </div>
          ))}
        </nav>
      </div>
      {isOpen && (
        <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
          <a href="#" className="flex-shrink-0 group block">
            <div className="flex items-center">
              <div>
                <div className="inline-block h-9 w-9 rounded-full overflow-hidden bg-gray-100">
                  <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                  Jane Cooper
                </p>
                <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                  Admin
                </p>
              </div>
            </div>
          </a>
        </div>
      )}
    </div>
  );
};
