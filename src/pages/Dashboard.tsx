import React from 'react';
import { motion } from 'motion/react';
import { mockMetrics, mockIncidents, mockAgents } from '../data/mock';
import { MetricCard } from '../components/dashboard/MetricCard';
import { CloudWatchChart } from '../components/dashboard/CloudWatchChart';
import { Badge } from '../../components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/card';
import { cn } from '../../lib/utils';
import { 
  AlertTriangle, 
  Cpu, 
  Zap, 
  ShieldAlert, 
  BrainCircuit,
  MessageSquare,
  ArrowUpRight
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Separator } from '../../components/ui/separator';

export default function Dashboard() {
  return (
    <div className="space-y-6 max-w-[1600px] mx-auto overflow-hidden">
      {/* Header Info */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-text-bright mb-0.5">Control Tower Dashboard</h1>
          <p className="text-text-dim text-xs flex items-center gap-2">
            AI-Augmented Cloud Governance <Badge className="badge-minimal badge-orange">AWS Managed</Badge>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="bg-aws-sidebar border-aws-border h-8 text-[11px] gap-2 hover:bg-aws-card">
            <Zap className="w-3 h-3 text-aws-orange" />
            AI Audit
          </Button>
          <Button size="sm" className="bg-aws-orange hover:bg-aws-orange/90 text-white h-8 text-[11px] font-bold">
            Provision Service
          </Button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {mockMetrics.map((metric, i) => (
          <motion.div
            key={metric.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <MetricCard metric={metric} />
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Main Chart Area */}
        <div className="lg:col-span-3 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.99 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="h-[400px]"
          >
            <CloudWatchChart title="Total Network Traffic & I/O" />
          </motion.div>

          {/* Audit & Agents */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="card-aws">
               <div className="flex items-center justify-between mb-4">
                 <h3 className="text-[11px] font-bold uppercase tracking-widest text-text-dim">Security Guardrails</h3>
                 <ShieldAlert className="w-4 h-4 text-status-red" />
               </div>
               <div className="space-y-3">
                  <div className="p-3 bg-status-red/5 border border-status-red/20 flex flex-col gap-1">
                     <span className="text-[9px] font-bold text-status-red uppercase">Blocked Attempt</span>
                     <span className="text-xs font-mono text-text-bright">s3:DeleteBucket [Production]</span>
                  </div>
                  <div className="p-3 bg-aws-sidebar border border-aws-border flex flex-col gap-1">
                     <span className="text-[9px] font-bold text-text-dim uppercase">Identity Audit</span>
                     <span className="text-xs text-text-bright">Validated: RootAgent-DevOps</span>
                  </div>
               </div>
            </div>

            <div className="card-aws relative overflow-hidden">
               <div className="flex items-center justify-between mb-4">
                 <h3 className="text-[11px] font-bold uppercase tracking-widest text-text-dim">AI Reasoning Engine</h3>
                 <BrainCircuit className="w-4 h-4 text-aws-blue" />
               </div>
               <div className="space-y-3 min-h-[100px] flex flex-col justify-center">
                  <p className="text-xs italic text-text-dim leading-relaxed pr-8">
                    "I have detected a performance bottleneck in the ECS service layer. Correlating recent CloudTrail event <span className="text-aws-blue font-mono">#AWS-8271</span> with CPU spikes..."
                  </p>
                  <Button variant="link" size="sm" className="h-auto p-0 text-[10px] text-aws-blue w-fit mt-2">
                    Review reasoning chain
                  </Button>
               </div>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="space-y-4">
          <div className="card-aws border-l-4 border-l-status-red">
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-text-dim mb-4">Operational Incidents</h3>
            <div className="space-y-3">
              {mockIncidents.map((incident) => (
                <div key={incident.id} className="p-3 bg-aws-bg border border-aws-border hover:border-aws-orange transition-all cursor-pointer group">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={cn(
                      "badge-minimal",
                      incident.severity === 'critical' ? "badge-red" : "badge-orange"
                    )}>
                      {incident.severity}
                    </Badge>
                    <span className="text-[9px] font-mono text-text-dim">{incident.id}</span>
                  </div>
                  <h4 className="text-xs font-bold mb-1 group-hover:text-aws-orange transition-colors">{incident.title}</h4>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-1 h-1 rounded-full bg-aws-orange animate-pulse" />
                    <span className="text-[9px] font-bold text-aws-orange uppercase">AI Triaging...</span>
                  </div>
                </div>
              ))}
              <Button variant="ghost" className="w-full text-[10px] text-text-dim hover:text-text-bright uppercase py-1 h-auto">
                Full Incident Log
              </Button>
            </div>
          </div>

          <div className="card-aws bg-aws-orange/[0.03] border-aws-orange/20">
             <div className="flex items-center gap-2 mb-4">
                <MessageSquare className="w-4 h-4 text-aws-orange" />
                <h3 className="text-[11px] font-bold uppercase tracking-widest text-text-bright">AI DevOps Chat</h3>
             </div>
             <div className="relative">
                <input 
                  type="text" 
                  placeholder="Ask DevOps AI..." 
                  className="w-full bg-aws-bg border border-aws-border rounded py-2 px-3 text-[11px] focus:border-aws-orange outline-none"
                />
             </div>
             <div className="mt-4 space-y-1.5 font-medium">
               {['Recent spend', 'IAM audit', 'Downtime cause'].map(q => (
                 <div key={q} className="text-[10px] py-1.5 px-3 rounded bg-aws-sidebar border border-aws-border text-text-dim hover:text-text-bright cursor-pointer hover:bg-aws-card transition-all">
                    {q}
                 </div>
               ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
