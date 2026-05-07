export interface CloudMetric {
  name: string;
  value: number;
  unit: string;
  trend: 'up' | 'down' | 'neutral';
  change: string;
  status: 'healthy' | 'warning' | 'critical';
}

export interface Incident {
  id: string;
  title: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  status: 'open' | 'investigating' | 'resolved' | 'acknowledged';
  startTime: string;
  resource: string;
  region: string;
  aiSuggestedFix?: string;
  rootCause?: string;
}

export interface AuditEvent {
  id: string;
  timestamp: string;
  user: string;
  action: string;
  resource: string;
  status: 'approved' | 'denied' | 'investigating' | 'pending';
  aiAssisted: boolean;
}

export interface AIAgent {
  id: string;
  name: string;
  role: string;
  status: 'active' | 'idle' | 'busy' | 'error';
  lastAction: string;
  confidence: number;
  toolsUsed: string[];
}

export interface ApprovalRequest {
  id: string;
  proposedAction: string;
  resource: string;
  riskScore: number;
  reason: string;
  timestamp: string;
}
