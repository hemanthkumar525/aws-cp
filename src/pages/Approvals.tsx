import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  Info, 
  Clock, 
  ChevronRight,
  TrendingUp,
  Fingerprint
} from 'lucide-react';
import { cn } from '../../lib/utils';

export default function Approvals() {
  const requests = [
    {
      id: 'REQ-9102',
      type: 'Scaling Request',
      action: 'Scale ECS Tasks from 2 → 8',
      resource: 'ecs:marketing-payment-service',
      risk: 42,
      aiConfidence: 0.98,
      reason: 'Predicted traffic spike for Mother\'s Day promotion beginning in 2h.',
      user: 'AI-Agent-DevOps',
      time: '12m ago'
    },
    {
      id: 'REQ-9105',
      type: 'Permission Update',
      action: 'Attach S3ReadOnlyAccess',
      resource: 'iam:temporary-analyst-role',
      risk: 15,
      aiConfidence: 0.92,
      reason: 'Support ticket #8210 requirement for auditing logs.',
      user: 'AI-Agent-Security',
      time: '24m ago'
    },
    {
      id: 'REQ-9108',
      type: 'Production Change',
      action: 'Modify DB Instance Type (t3.medium → m5.large)',
      resource: 'rds:core-db-prod',
      risk: 88,
      aiConfidence: 0.85,
      reason: 'Persistent memory pressure detected (avg 92%). High risk of swap thrashing.',
      user: 'AI-Agent-Obs',
      time: '1h ago'
    }
  ];

  return (
    <div className="space-y-8 max-w-[1400px] mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white mb-1">Human-in-the-Loop Approvals</h1>
          <p className="text-muted-foreground text-sm flex items-center gap-2">
            Approve or reject automated actions proposed by CloudPulse AI Agents
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex flex-col items-end">
            <span className="text-[10px] font-bold uppercase text-muted-foreground">Pending Actions</span>
            <span className="text-xl font-bold text-aws-orange">03</span>
          </div>
          <div className="w-[1px] h-10 bg-border/20 mx-2" />
           <Button variant="outline" size="sm" className="bg-white/5 border-white/10">Approval History</Button>
        </div>
      </div>

      <div className="space-y-4">
        {requests.map((req) => (
          <Card key={req.id} className="bg-aws-squid-ink border-border/50 overflow-hidden group">
            <div className={cn(
              "h-1 w-full",
              req.risk > 70 ? "bg-red-500" : req.risk > 30 ? "bg-aws-orange" : "bg-green-500"
            )} />
            <div className="grid grid-cols-1 lg:grid-cols-4 items-center">
               {/* Metadata */}
               <div className="p-6 border-r border-border/20">
                  <div className="flex items-center gap-2 mb-2">
                     <Badge variant="outline" className="text-[9px] uppercase font-mono tracking-tighter opacity-70">{req.id}</Badge>
                     <span className="text-[10px] font-bold text-muted-foreground uppercase">{req.type}</span>
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1">{req.action}</h3>
                  <p className="text-[10px] font-mono text-muted-foreground truncate" title={req.resource}>{req.resource}</p>
               </div>

               {/* AI reasoning */}
               <div className="p-6 lg:col-span-2 border-r border-border/20 bg-white/5 group-hover:bg-transparent transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                     <TrendingUp className="w-3.5 h-3.5 text-primary" />
                     <span className="text-[10px] font-bold text-primary uppercase">Agent Reasoning</span>
                     <Badge className="ml-auto text-[9px] bg-primary/20 text-primary border-primary/30">CONFIDENCE: {(req.aiConfidence * 100).toFixed(0)}%</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed italic pr-4">
                    "{req.reason}"
                  </p>
               </div>

               {/* Risk & Actions */}
               <div className="p-6 flex flex-col justify-between h-full bg-white/[0.02]">
                  <div className="flex justify-between items-center mb-4 lg:mb-0">
                     <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-muted-foreground uppercase mb-1">Risk Score</span>
                        <div className="flex items-center gap-3">
                           <span className={cn(
                             "text-2xl font-bold tracking-tighter",
                             req.risk > 70 ? "text-red-500" : req.risk > 30 ? "text-aws-orange" : "text-green-500"
                           )}>{req.risk}</span>
                           <div className="w-16 h-1.5 bg-white/5 rounded-full overflow-hidden">
                              <div className={cn(
                                "h-full rounded-full transition-all duration-1000",
                                req.risk > 70 ? "bg-red-500" : req.risk > 30 ? "bg-aws-orange" : "bg-green-500"
                              )} style={{ width: `${req.risk}%` }} />
                           </div>
                        </div>
                     </div>
                     <div className="text-right flex flex-col">
                        <span className="text-[10px] font-bold text-muted-foreground uppercase mb-1">Agent</span>
                        <span className="text-xs font-medium text-white">{req.user}</span>
                        <span className="text-[9px] text-muted-foreground uppercase">{req.time}</span>
                     </div>
                  </div>

                  <div className="flex gap-2 lg:mt-4">
                     <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white h-9 gap-2">
                        <CheckCircle2 className="w-4 h-4" />
                        <span className="text-xs">Approve</span>
                     </Button>
                     <Button variant="outline" className="flex-1 border-red-500/50 hover:bg-red-500/10 text-red-500 h-9 gap-2">
                        <XCircle className="w-4 h-4" />
                        <span className="text-xs">Reject</span>
                     </Button>
                  </div>
               </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="flex items-center justify-center p-8 text-center text-muted-foreground">
         <div className="max-w-md">
            <Info className="w-8 h-8 mx-auto mb-4 opacity-20" />
            <h4 className="text-sm font-bold uppercase tracking-widest mb-2 italic">Policy Enforced Visibility</h4>
            <p className="text-xs leading-relaxed">
              Every action approved in this console is signed by your identity and recorded in CloudTrail. Actions marked as <span className="text-red-400 font-bold">CRITICAL</span> require multi-party authorized signatures.
            </p>
            <Button variant="link" className="mt-4 text-[10px] text-primary gap-2 uppercase tracking-widest font-bold">
               View Governance Policy <ChevronRight className="w-3 h-3" />
            </Button>
         </div>
      </div>
    </div>
  );
}
