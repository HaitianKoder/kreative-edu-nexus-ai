
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'teacher' | 'admin' | 'it';
  department: string;
  isActive: boolean;
  lastLogin: string;
  tokenQuota: number;
  tokenUsage: number;
  createdAt: string;
}

export interface AIProvider {
  name: string;
  status: 'healthy' | 'degraded' | 'down';
  usage: number;
  cost: number;
  responseTime: number;
  errorRate: number;
}

export interface SystemMetric {
  name: string;
  status: 'healthy' | 'warning' | 'error';
  responseTime: string;
  uptime: string;
  lastChecked: string;
  endpoint?: string;
}

export interface TokenUsage {
  timestamp: string;
  tokens: number;
  cost: number;
  provider: string;
  department: string;
  userId: string;
}

export interface Activity {
  id: string;
  type: 'user_login' | 'ai_query' | 'system' | 'user_registration' | 'migration' | 'security';
  user: string;
  action: string;
  timestamp: string;
  severity: 'info' | 'warning' | 'error' | 'success';
  metadata?: Record<string, any>;
}

export interface DashboardMetrics {
  activeUsers: number;
  tokensUsed: number;
  systemUptime: number;
  courseCompletion: number;
  totalUsers: number;
  newRegistrations: number;
  criticalAlerts: number;
}

export interface AccessibilityReport {
  pageUrl: string;
  violations: {
    level: 'AA' | 'AAA';
    rule: string;
    description: string;
    impact: 'minor' | 'moderate' | 'serious' | 'critical';
    elements: string[];
  }[];
  score: number;
  lastChecked: string;
}
