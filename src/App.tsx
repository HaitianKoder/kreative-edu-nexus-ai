import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Students from "./pages/Students";
import Migration from "./pages/Migration";
import AIAnalytics from "./pages/AIAnalytics";
import Executive from "./pages/Executive";
import NotFound from "./pages/NotFound";
import Courses from "./pages/Courses";
import CourseCreation from "./pages/CourseCreation";
import SystemHealth from "./pages/SystemHealth";

const queryClient = new QueryClient();

const App = () => {
  console.log('App component rendering');
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/students" element={<Students />} />
            <Route path="/migration" element={<Migration />} />
            <Route path="/ai-analytics" element={<AIAnalytics />} />
            <Route path="/executive" element={<Executive />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/create" element={<CourseCreation />} />
            <Route path="/system-health" element={<SystemHealth />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
