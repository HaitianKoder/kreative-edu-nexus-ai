
import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { cn } from '@/lib/utils';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 w-full">
      {/* Skip to main content link for keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium"
      >
        Skip to main content
      </a>
      
      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar 
          isOpen={sidebarOpen} 
          onToggle={() => setSidebarOpen(!sidebarOpen)}
        />
        
        {/* Main content area */}
        <div className={cn(
          "flex-1 flex flex-col transition-all duration-300",
          sidebarOpen ? "md:ml-64" : "md:ml-16"
        )}>
          <Header 
            onMenuClick={() => setSidebarOpen(!sidebarOpen)}
            sidebarOpen={sidebarOpen}
          />
          
          <main 
            id="main-content"
            className="flex-1 overflow-auto bg-white"
            role="main"
            aria-label="Dashboard main content"
          >
            <div className="p-6">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
