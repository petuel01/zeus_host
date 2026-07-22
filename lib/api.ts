/**
 * Zeus Hosting - API Client Library
 * Central place for all backend API calls
 * Configure your API base URL in environment variables
 */

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

// ============================================================================
// RESPONSE TYPES
// ============================================================================

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Generic fetch wrapper with error handling
 */
async function apiCall<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ message: response.statusText }));
      return {
        success: false,
        error: error.message || `HTTP ${response.status}`,
      };
    }

    const data = await response.json();
    return {
      success: true,
      data,
    };
  } catch (error) {
    console.error('API Error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
}

// ============================================================================
// DASHBOARD API
// ============================================================================

export const dashboardAPI = {
  /**
   * Get dashboard overview statistics
   */
  getStats: () =>
    apiCall('/dashboard/stats', { method: 'GET' }),

  /**
   * Get resource usage (CPU, Storage, Bandwidth)
   */
  getResourceUsage: () =>
    apiCall('/dashboard/resources', { method: 'GET' }),

  /**
   * Get recent websites activity
   */
  getRecentWebsites: () =>
    apiCall('/dashboard/recent-websites', { method: 'GET' }),
};

// ============================================================================
// WEBSITES API
// ============================================================================

export const websitesAPI = {
  /**
   * Get all websites
   */
  getAll: () =>
    apiCall('/websites', { method: 'GET' }),

  /**
   * Get single website details
   */
  getById: (id: string) =>
    apiCall(`/websites/${id}`, { method: 'GET' }),

  /**
   * Create new website
   */
  create: (data: {
    domain: string;
    phpVersion: string;
    isWordPress: boolean;
    serverId?: string;
  }) =>
    apiCall('/websites', {
      method: 'POST',
      body: JSON.stringify(data),
    }),

  /**
   * Update website configuration
   */
  update: (id: string, data: Partial<any>) =>
    apiCall(`/websites/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    }),

  /**
   * Delete website
   */
  delete: (id: string) =>
    apiCall(`/websites/${id}`, { method: 'DELETE' }),

  /**
   * Search websites by domain
   */
  search: (query: string) =>
    apiCall(`/websites/search?q=${encodeURIComponent(query)}`, { method: 'GET' }),

  /**
   * Get WordPress specific actions
   */
  wordpress: {
    quickLogin: (websiteId: string) =>
      apiCall(`/websites/${websiteId}/wordpress/login`, { method: 'POST' }),

    updatePlugins: (websiteId: string) =>
      apiCall(`/websites/${websiteId}/wordpress/update-plugins`, { method: 'POST' }),
  },

  /**
   * Domain search and registration
   */
  domain: {
    search: (domainName: string) =>
      apiCall(`/domains/search?name=${encodeURIComponent(domainName)}`, { method: 'GET' }),

    register: (domainName: string, years: number = 1) =>
      apiCall('/domains/register', {
        method: 'POST',
        body: JSON.stringify({ name: domainName, years }),
      }),
  },
};

// ============================================================================
// DATABASES API
// ============================================================================

export const databasesAPI = {
  /**
   * Get all databases
   */
  getAll: () =>
    apiCall('/databases', { method: 'GET' }),

  /**
   * Get single database details
   */
  getById: (id: string) =>
    apiCall(`/databases/${id}`, { method: 'GET' }),

  /**
   * Create new database
   */
  create: (data: {
    name: string;
    user: string;
    password: string;
    host?: string;
  }) =>
    apiCall('/databases', {
      method: 'POST',
      body: JSON.stringify(data),
    }),

  /**
   * Delete database
   */
  delete: (id: string) =>
    apiCall(`/databases/${id}`, { method: 'DELETE' }),

  /**
   * Backup database
   */
  backup: (id: string) =>
    apiCall(`/databases/${id}/backup`, { method: 'POST' }),

  /**
   * Reset database password
   */
  resetPassword: (id: string) =>
    apiCall(`/databases/${id}/reset-password`, { method: 'POST' }),

  /**
   * Launch phpMyAdmin
   */
  phpMyAdminUrl: () =>
    apiCall('/databases/phpmyadmin-url', { method: 'GET' }),
};

// ============================================================================
// BILLING API
// ============================================================================

export const billingAPI = {
  /**
   * Get wallet balance and billing info
   */
  getBalance: () =>
    apiCall('/billing/balance', { method: 'GET' }),

  /**
   * Get transaction history
   */
  getTransactions: (limit: number = 20, offset: number = 0) =>
    apiCall(`/billing/transactions?limit=${limit}&offset=${offset}`, { method: 'GET' }),

  /**
   * Initiate MTN MoMo deposit
   */
  initiateMoMoDeposit: (data: {
    amount: number;
    phoneNumber: string;
  }) =>
    apiCall('/billing/momo/deposit', {
      method: 'POST',
      body: JSON.stringify(data),
    }),

  /**
   * Check MTN MoMo transaction status
   */
  checkMoMoStatus: (transactionId: string) =>
    apiCall(`/billing/momo/status/${transactionId}`, { method: 'GET' }),

  /**
   * Get billing invoice
   */
  getInvoice: (invoiceId: string) =>
    apiCall(`/billing/invoices/${invoiceId}`, { method: 'GET' }),
};

// ============================================================================
// SECURITY API
// ============================================================================

export const securityAPI = {
  /**
   * Get security settings
   */
  getSettings: () =>
    apiCall('/security/settings', { method: 'GET' }),

  /**
   * Enable/Disable 2FA
   */
  toggle2FA: (enabled: boolean) =>
    apiCall('/security/2fa', {
      method: 'POST',
      body: JSON.stringify({ enabled }),
    }),

  /**
   * Get SSL certificates
   */
  getSSLCertificates: () =>
    apiCall('/security/ssl', { method: 'GET' }),

  /**
   * Generate SSL certificate
   */
  generateSSL: (websiteId: string) =>
    apiCall(`/security/ssl/generate/${websiteId}`, { method: 'POST' }),

  /**
   * Get firewall rules
   */
  getFirewallRules: () =>
    apiCall('/security/firewall', { method: 'GET' }),

  /**
   * Add firewall rule
   */
  addFirewallRule: (data: {
    type: 'allow' | 'block';
    ip?: string;
    port?: number;
    protocol?: string;
  }) =>
    apiCall('/security/firewall', {
      method: 'POST',
      body: JSON.stringify(data),
    }),

  /**
   * Get DDoS protection status
   */
  getDDoSProtection: () =>
    apiCall('/security/ddos', { method: 'GET' }),
};

// ============================================================================
// ARCHITECTURE / INFRASTRUCTURE API
// ============================================================================

export const infrastructureAPI = {
  /**
   * Get all VPS nodes
   */
  getNodes: () =>
    apiCall('/infrastructure/nodes', { method: 'GET' }),

  /**
   * Get node details
   */
  getNodeById: (nodeId: string) =>
    apiCall(`/infrastructure/nodes/${nodeId}`, { method: 'GET' }),

  /**
   * Get global infrastructure status
   */
  getStatus: () =>
    apiCall('/infrastructure/status', { method: 'GET' }),

  /**
   * Get resource metrics for a specific node
   */
  getNodeMetrics: (nodeId: string) =>
    apiCall(`/infrastructure/nodes/${nodeId}/metrics`, { method: 'GET' }),
};

// ============================================================================
// USER / ACCOUNT API
// ============================================================================

export const accountAPI = {
  /**
   * Get current user profile
   */
  getProfile: () =>
    apiCall('/account/profile', { method: 'GET' }),

  /**
   * Update profile information
   */
  updateProfile: (data: { name?: string; email?: string }) =>
    apiCall('/account/profile', {
      method: 'PUT',
      body: JSON.stringify(data),
    }),

  /**
   * Get account settings
   */
  getSettings: () =>
    apiCall('/account/settings', { method: 'GET' }),

  /**
   * Update account settings
   */
  updateSettings: (data: Record<string, any>) =>
    apiCall('/account/settings', {
      method: 'PUT',
      body: JSON.stringify(data),
    }),

  /**
   * Change password
   */
  changePassword: (data: {
    currentPassword: string;
    newPassword: string;
  }) =>
    apiCall('/account/change-password', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
};

// ============================================================================
// AUTH API (if not using OAuth)
// ============================================================================

export const authAPI = {
  /**
   * Login user
   */
  login: (data: { email: string; password: string }) =>
    apiCall('/auth/login', {
      method: 'POST',
      body: JSON.stringify(data),
    }),

  /**
   * Register new user
   */
  register: (data: { email: string; password: string; name: string }) =>
    apiCall('/auth/register', {
      method: 'POST',
      body: JSON.stringify(data),
    }),

  /**
   * Logout user
   */
  logout: () =>
    apiCall('/auth/logout', { method: 'POST' }),

  /**
   * Verify email
   */
  verifyEmail: (token: string) =>
    apiCall(`/auth/verify-email/${token}`, { method: 'POST' }),

  /**
   * Request password reset
   */
  forgotPassword: (email: string) =>
    apiCall('/auth/forgot-password', {
      method: 'POST',
      body: JSON.stringify({ email }),
    }),

  /**
   * Reset password with token
   */
  resetPassword: (token: string, newPassword: string) =>
    apiCall('/auth/reset-password', {
      method: 'POST',
      body: JSON.stringify({ token, newPassword }),
    }),
};
