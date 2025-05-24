
import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Settings, 
  Database, 
  Grid2X2, 
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  BookOpen,
  UserCheck,
  CreditCard,
  FileText,
  Calendar
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const navigationSections = [
  {
    title: 'Overview',
    items: [
      {
        name: 'Dashboard',
        href: '/',
        icon: LayoutDashboard,
        description: 'Integrated SMS+LMS overview'
      }
    ]
  },
  {
    title: 'Academic Operations',
    items: [
      {
        name: 'Student Management',
        href: '/students',
        icon: Users,
        description: 'Student records, enrollment, progress'
      },
      {
        name: 'Admissions & Registration',
        href: '/admissions',
        icon: UserCheck,
        description: 'Applications, enrollment pipeline'
      },
      {
        name: 'Financial Services',
        href: '/financial',
        icon: CreditCard,
        description: 'Tuition, payments, financial aid'
      }
    ]
  },
  {
    title: 'Learning Management',
    items: [
      {
        name: 'Course Management',
        href: '/courses',
        icon: BookOpen,
        description: 'Courses, assignments, scheduling'
      },
      {
        name: 'Academic Calendar',
        href: '/calendar',
        icon: Calendar,
        description: 'Terms, deadlines, events'
      }
    ]
  },
  {
    title: 'Analytics & AI',
    items: [
      {
        name: 'AI Analytics',
        href: '/ai-analytics',
        icon: Grid2X2,
        description: 'AI usage and performance metrics'
      },
      {
        name: 'Reporting & Compliance',
        href: '/reporting',
        icon: FileText,
        description: 'Academic reports, compliance dashboards'
      }
    ]
  },
  {
    title: 'System Management',
    items: [
      {
        name: 'System Health',
        href: '/system',
        icon: Database,
        description: 'Monitor system performance'
      },
      {
        name: 'Settings',
        href: '/settings',
        icon: Settings,
        description: 'System configuration'
      }
    ]
  }
];

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-40 h-screen bg-white border-r border-gray-200 transition-all duration-300",
        isOpen ? "w-64" : "w-16"
      )}
      aria-label="Main navigation"
    >
      {/* Logo and toggle button */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        {isOpen && (
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-gray-900 text-sm">Kreative Edu</span>
              <span className="text-xs text-gray-500">SMS + LMS Platform</span>
            </div>
          </div>
        )}
        
        <button
          onClick={onToggle}
          className="p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label={isOpen ? 'Collapse sidebar' : 'Expand sidebar'}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          ) : (
            <ChevronRight className="w-5 h-5 text-gray-600" />
          )}
        </button>
      </div>

      {/* Navigation menu */}
      <nav className="mt-4 px-2 pb-20 overflow-y-auto" role="navigation" aria-label="Main menu">
        {navigationSections.map((section) => (
          <div key={section.title} className="mb-6">
            {isOpen && (
              <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                {section.title}
              </h3>
            )}
            <ul className="space-y-1">
              {section.items.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.name}>
                    <NavLink
                      to={item.href}
                      className={({ isActive }) => cn(
                        "flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200",
                        isActive
                          ? "bg-blue-50 text-blue-700 border-r-2 border-blue-700"
                          : "text-gray-700 hover:bg-gray-100 hover:text-gray-900",
                        !isOpen && "justify-center"
                      )}
                      aria-label={isOpen ? item.name : item.description}
                      title={!isOpen ? item.description : undefined}
                    >
                      <Icon className={cn("w-5 h-5", isOpen && "mr-3")} />
                      {isOpen && (
                        <span className="truncate">{item.name}</span>
                      )}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* User role indicator */}
      {isOpen && (
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-blue-50 rounded-lg p-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-medium">AD</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  Admin User
                </p>
                <p className="text-xs text-gray-500 truncate">
                  System Administrator
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
};
