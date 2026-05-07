import { AIAgent, AuditEvent, CloudMetric, Incident } from '../types';

export const mockMetrics: CloudMetric[] = [
  { name: 'ECS CPU Utilization', value: 78.4, unit: '%', trend: 'up', change: '+12%', status: 'warning' },
  { name: 'Request Latency (P99)', value: 142, unit: 'ms', trend: 'up', change: '+5ms', status: 'healthy' },
  { name: 'Bedrock Token Consumption', value: 1.2, unit: 'M', trend: 'up', change: '+15%', status: 'healthy' },
  { name: 'Error Rate', value: 0.12, unit: '%', trend: 'down', change: '-0.02%', status: 'healthy' },
  { name: 'IAM Guardrail Denials', value: 42, unit: 'hits', trend: 'up', change: '+8', status: 'warning' },
  { name: 'Infrastructure Drift', value: 3, unit: 'resources', trend: 'neutral', change: '0', status: 'warning' },
];

export const mockIncidents: Incident[] = [
  {
    id: 'INC-2024-001',
    title: 'High 5xx Errors in us-east-1',
    severity: 'critical',
    status: 'investigating',
    startTime: '2024-05-07T08:12:00Z',
    resource: 'ProductionALB',
    region: 'us-east-1',
    aiSuggestedFix: 'Scale ECS tasks from 2 to 4 and check recently deployed container image tag.',
    rootCause: 'Memory leak in v1.2.4 container image.'
  },
  {
    id: 'INC-2024-002',
    title: 'Unusual IAM Activity Detected',
    severity: 'high',
    status: 'acknowledged',
    startTime: '2024-05-07T09:45:00Z',
    resource: 'AdminRole',
    region: 'global',
    aiSuggestedFix: 'Temporarily revoke sts:AssumeRole for non-compliant identity'
  }
];

export const mockAgents: AIAgent[] = [
  {
    id: 'agent-devops',
    name: 'DevOps Agent',
    role: 'Infrastructure Orchestration',
    status: 'busy',
    lastAction: 'Scaling ECS Production Cluster',
    confidence: 0.98,
    toolsUsed: ['CloudFormation', 'ECS', 'CloudWatch']
  },
  {
    id: 'agent-security',
    name: 'Security Agent',
    role: 'Threat Detection',
    status: 'active',
    lastAction: 'Analyzing CloudTrail Logs',
    confidence: 0.95,
    toolsUsed: ['GuardDuty', 'IAM', 'CloudTrail']
  },
  {
    id: 'agent-obs',
    name: 'Observability Agent',
    role: 'Anomaly Detection',
    status: 'idle',
    lastAction: 'Optimizing Dashboard Layout',
    confidence: 0.92,
    toolsUsed: ['CloudWatch', 'X-Ray']
  }
];

export const mockAuditEvents: AuditEvent[] = [
  { id: '1', timestamp: '2024-05-07T10:15:00Z', user: 'AI-Agent-DevOps', action: 'UpdateService', resource: 'ecs:marketing-service', status: 'approved', aiAssisted: true },
  { id: '2', timestamp: '2024-05-07T10:12:00Z', user: 'John Doe', action: 'DeleteBucket', resource: 's3:prod-logs', status: 'denied', aiAssisted: false },
  { id: '3', timestamp: '2024-05-07T09:55:00Z', user: 'AI-Agent-Security', action: 'DetachPolicy', resource: 'iam:compromised-user-policy', status: 'approved', aiAssisted: true },
];

export const latencyData = [
  { time: '10:00', value: 120 },
  { time: '10:10', value: 135 },
  { time: '10:20', value: 180 },
  { time: '10:30', value: 240 },
  { time: '10:40', value: 190 },
  { time: '10:50', value: 150 },
  { time: '11:00', value: 142 },
];
