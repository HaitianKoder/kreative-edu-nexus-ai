
import React from 'react';
import { Search, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface HeaderProps {
  onMenuClick: () => void;
  sidebarOpen: boolean;
}

export const Header: React.FC<HeaderProps> = ({ onMenuClick, sidebarOpen }) => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Search bar */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              type="search"
              placeholder="Search students, courses, or system logs..."
              className="pl-10 pr-4 py-2 w-full"
              aria-label="Search dashboard"
            />
          </div>
        </div>

        {/* Right side actions */}
        <div className="flex items-center space-x-4 ml-4">
          {/* Token usage indicator */}
          <div className="hidden md:flex items-center space-x-2 text-sm text-gray-600">
            <span>Token Usage:</span>
            <div className="flex items-center space-x-1">
              <div className="w-16 bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '65%' }}></div>
              </div>
              <span className="text-xs font-medium">65%</span>
            </div>
          </div>

          {/* Notifications */}
          <Button variant="ghost" size="sm" className="relative p-2">
            <div className="w-2 h-2 bg-red-500 rounded-full absolute top-1 right-1"></div>
            <span className="sr-only">3 new notifications</span>
            🔔
          </Button>

          {/* User profile */}
          <Button variant="ghost" size="sm" className="flex items-center space-x-2">
            <User className="w-4 h-4" />
            <span className="hidden md:inline">Admin</span>
          </Button>
        </div>
      </div>
    </header>
  );
};
