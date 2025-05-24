
import { TokenUsage, SystemMetric, User, Activity, DashboardMetrics } from '@/types/dashboard';

const API_BASE = '/api';

// Generic API client with error handling
class APIClient {
  private async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${API_BASE}${endpoint}`;
    
    try {
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          ...options?.headers,
        },
        ...options,
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status} - ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error(`API request failed for ${endpoint}:`, error);
      throw error;
    }
  }

  // Dashboard metrics
  async getDashboardMetrics(): Promise<DashboardMetrics> {
    return this.request<DashboardMetrics>('/dashboard/metrics');
  }

  // AI Usage endpoints
  async getTokenUsage(timeframe: '24h' | '7d' | '30d' = '24h'): Promise<TokenUsage[]> {
    return this.request<TokenUsage[]>(`/ai/usage?timeframe=${timeframe}`);
  }

  async getTokenQuotas(): Promise<{ userId: string; quota: number; used: number }[]> {
    return this.request(`/tokens/quotas`);
  }

  async updateTokenQuota(userId: string, newQuota: number): Promise<void> {
    return this.request(`/tokens/quota/${userId}`, {
      method: 'PUT',
      body: JSON.stringify({ quota: newQuota }),
    });
  }

  // System health endpoints
  async getSystemHealth(): Promise<SystemMetric[]> {
    return this.request<SystemMetric[]>('/system/health');
  }

  async getSystemStatus(): Promise<{ status: 'operational' | 'degraded' | 'down'; uptime: number }> {
    return this.request('/system/status');
  }

  // User management endpoints
  async getUsers(page: number = 1, limit: number = 50): Promise<{ users: User[]; total: number; pages: number }> {
    return this.request<{ users: User[]; total: number; pages: number }>(`/users?page=${page}&limit=${limit}`);
  }

  async getUserById(userId: string): Promise<User> {
    return this.request<User>(`/users/${userId}`);
  }

  async updateUser(userId: string, updates: Partial<User>): Promise<User> {
    return this.request<User>(`/users/${userId}`, {
      method: 'PUT',
      body: JSON.stringify(updates),
    });
  }

  async deleteUser(userId: string): Promise<void> {
    return this.request(`/users/${userId}`, {
      method: 'DELETE',
    });
  }

  // Activity logs
  async getRecentActivity(limit: number = 20): Promise<Activity[]> {
    return this.request<Activity[]>(`/activity?limit=${limit}`);
  }

  // Authentication
  async verifyAuth(): Promise<{ user: User; permissions: string[] }> {
    return this.request('/auth/verify');
  }

  // Accessibility compliance
  async getAccessibilityReport(): Promise<any> {
    return this.request('/accessibility/report');
  }

  async validateAccessibility(pageUrl: string): Promise<any> {
    return this.request('/accessibility/validate', {
      method: 'POST',
      body: JSON.stringify({ url: pageUrl }),
    });
  }

  // Migration status
  async getMigrationStatus(): Promise<any> {
    return this.request('/migration/status');
  }
}

export const apiClient = new APIClient();

// React Query hooks for data fetching
export const queryKeys = {
  dashboardMetrics: ['dashboard', 'metrics'],
  tokenUsage: (timeframe: string) => ['ai', 'usage', timeframe],
  systemHealth: ['system', 'health'],
  users: (page: number, limit: number) => ['users', page, limit],
  recentActivity: ['activity', 'recent'],
  tokenQuotas: ['tokens', 'quotas'],
} as const;
