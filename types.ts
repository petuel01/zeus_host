
export enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER'
}

export enum SiteStatus {
  ACTIVE = 'ACTIVE',
  PENDING = 'PENDING',
  STOPPED = 'STOPPED',
  ERROR = 'ERROR'
}

export interface Website {
  id: string;
  domain: string;
  phpVersion: string;
  status: SiteStatus;
  isWordPress: boolean;
  diskUsage: number; // in MB
  bandwidth: number; // in GB
  createdAt: string;
  serverId: string;
}

export interface Database {
  id: string;
  name: string;
  user: string;
  host: string;
  size: number; // in MB
}

export interface VPSNode {
  id: string;
  name: string;
  location: string;
  ip: string;
  cpuCores: number;
  ramGB: number;
  diskGB: number;
  cpuLoad: number;
  ramUsage: number;
  status: 'ONLINE' | 'OFFLINE';
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  balance: number;
}

export interface BillingTransaction {
  id: string;
  amount: number;
  type: 'CREDIT' | 'DEBIT';
  method: 'MTN_MOMO' | 'WALLET';
  status: 'COMPLETED' | 'PENDING' | 'FAILED';
  date: string;
}
