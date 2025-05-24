
import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  layout-dashboard, 
  users, 
  settings, 
  database, 
  grid-2x2, 
  chevron-left,
  chevron-right
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const navigationItems = [
  {
    name: 'Dashboard',
    href: '/',
    icon: layout-dashboard,
    description: 'Overview and analytics'
  },
  {
    name: 'User Management',
    href: '/users',
    icon: users,
    description: 'Manage students, teachers, and admins'
  },
  {
    name: 'System Health',
    href: '/system',
    icon: database,
    description: 'Monitor system performance'
  },
  {
    name: 'AI Analytics',
    href: '/ai-analytics',
    icon: grid-2x2,
    description: 'AI usage and performance metrics'
  },
  {
    name: 'Settings',
    href: '/settings',
    icon: settings,
    description: 'System configuration'
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
              <span className="text-white font-bold text-sm">KE</span>
            </div>
            <span className="font-semibold text-gray-900">Kreative Edu</span>
          </div>
        )}
        
        <button
          onClick={onToggle}
          className="p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label={isOpen ? 'Collapse sidebar' : 'Expand sidebar'}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <chevron-left className="w-5 h-5 text-gray-600" />
          ) : (
            <chevron-right className="w-5 h-5 text-gray-600" />
          )}
        </button>
      </div>

      {/* Navigation menu */}
      <nav className="mt-4 px-2" role="navigation" aria-label="Main menu">
        <ul className="space-y-1">
          {navigationItems.map((item) => {
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
