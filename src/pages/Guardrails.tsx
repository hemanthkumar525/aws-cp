import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { ShieldCheck, ShieldAlert, Lock, Zap, ArrowRight, BrainCircuit, Info, AlertTriangle } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Separator } from '../../components/ui/separator';
import { Progress } from '../components/ui/progress';
import { cn } from '../../lib/utils';

export default function Guardrails() {
  return (
    <div className="space-y-8 max-w-[1400px] mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white mb-1">IAM Guardrails</h1>
        <p className="text-muted-foreground text-sm flex items-center gap-2">
          Enforce AI least-privilege and prevent production-destabilizing operations
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
           <Card className="bg-aws-squid-ink border-border/50">
             <CardHeader className="pb-4">
               <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                       <ShieldCheck className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                       <CardTitle className="text-lg">AI Operation Policy-Guard</CardTitle>
                       <CardDescription className="text-xs">Active Service Control Policies (SCPs)</CardDescription>
                    </div>
                  </div>
                  <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/20 text-[10px] uppercase">Active Status</Badge>
               </div>
             </CardHeader>
             <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-all">
                      <div className="flex items-center gap-3 mb-4">
                         <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center">
                           <Lock className="w-4 h-4 text-red-500" />
                         </div>
                         <span className="text-sm font-semibold">Destructive Action Block</span>
                      </div>
                      <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                        Prevents any identity (human or AI) from deleting critical RDS, S3 logs, or Route53 hosted zones in production accounts.
                      </p>
                      <div className="flex items-center justify-between">
                         <span className="text-[10px] font-mono text-muted-foreground">Policy ID: P-8291-DESTROY</span>
                         <Badge variant="outline" className="text-[9px] uppercase">Immutable</Badge>
                      </div>
                   </div>

                   <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-all">
                      <div className="flex items-center gap-3 mb-4">
                         <div className="w-8 h-8 rounded-lg bg-aws-orange/20 flex items-center justify-center">
                           <ShieldAlert className="w-4 h-4 text-aws-orange" />
                         </div>
                         <span className="text-sm font-semibold">Region Restrictions</span>
                      </div>
                      <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                        Restricts resource provisioning strictly to allowed regions (us-east-1, eu-west-1) to ensure data residency compliance.
                      </p>
                      <div className="flex items-center justify-between">
                         <span className="text-[10px] font-mono text-muted-foreground">Policy ID: P-REGION-LOCK</span>
                         <Badge variant="outline" className="text-[9px] uppercase">Enforced</Badge>
                      </div>
                   </div>
                </div>

                <Separator className="bg-white/5" />

                <div className="space-y-4">
                   <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Recent Policy Enforcement Hits</h4>
                   <div className="space-y-2">
                     {[
                       { action: 'rds:DeleteDBInstance', res: 'db-prod-main', user: 'AI-Agent-DevOps', time: '2m ago' },
                       { action: 'sts:AssumeRole', res: 'CompromisedRole', user: 'IdentityThreat', time: '14m ago' },
                       { action: 's3:PutBucketPolicy', res: 'prod-secrets', user: 'Temp-User', time: '1h ago' }
                     ].map((hit, i) => (
                       <div key={i} className="flex items-center justify-between p-3 rounded bg-red-500/5 border border-red-500/10 text-xs">
                         <div className="flex items-center gap-3">
                           <ShieldAlert className="w-3.5 h-3.5 text-red-400" />
                           <div className="flex flex-col">
                             <span className="font-mono text-[10px] font-bold text-red-400">{hit.action}</span>
                             <span className="text-muted-foreground text-[10px]">{hit.res}</span>
                           </div>
                         </div>
                         <div className="text-right">
                           <div className="text-white font-medium">{hit.user}</div>
                           <div className="text-[10px] text-muted-foreground uppercase">{hit.time}</div>
                         </div>
                       </div>
                     ))}
                   </div>
                </div>
             </CardContent>
           </Card>

           <Card className="bg-aws-squid-ink border-border/50">
             <CardHeader className="pb-4">
                <div className="flex items-center gap-2">
                   <BrainCircuit className="w-5 h-5 text-primary" />
                   <CardTitle className="text-lg">AI Boundary Definition</CardTitle>
                </div>
                <CardDescription className="text-xs">Contextual permissions managed by CloudPulse AI Engine</CardDescription>
             </CardHeader>
             <CardContent>
                <div className="space-y-6 text-sm text-muted-foreground">
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                         <div className="flex justify-between items-end mb-1">
                            <span className="text-[10px] font-bold uppercase">Write Confidence Req</span>
                            <span className="text-xs font-mono text-primary">95%</span>
                         </div>
                         <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-primary w-[95%]" />
                         </div>
                      </div>
                      <div className="space-y-2">
                         <div className="flex justify-between items-end mb-1">
                            <span className="text-[10px] font-bold uppercase">Human Review Trigger</span>
                            <span className="text-xs font-mono text-aws-orange">{'>'}$500/hr</span>
                         </div>
                         <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-aws-orange w-[70%]" />
                         </div>
                      </div>
                      <div className="space-y-2">
                         <div className="flex justify-between items-end mb-1">
                            <span className="text-[10px] font-bold uppercase">Least Privilege Gap</span>
                            <span className="text-xs font-mono text-green-400">-2.4%</span>
                         </div>
                         <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-green-500 w-[20%]" />
                         </div>
                      </div>
                   </div>
                </div>
             </CardContent>
           </Card>
        </div>

        <div className="space-y-6">
           <Card className="bg-aws-squid-ink border-border/50 border-t-4 border-t-aws-orange">
             <CardHeader className="pb-2">
                <CardTitle className="text-sm font-bold uppercase tracking-widest text-aws-orange">Critical Restriction</CardTitle>
             </CardHeader>
             <CardContent className="space-y-4">
                <div className="bg-aws-orange/10 border border-aws-orange/20 rounded-lg p-4">
                   <div className="flex items-center gap-3 mb-2">
                      <AlertTriangle className="w-4 h-4 text-aws-orange" />
                      <span className="text-xs font-bold text-white uppercase italic">Production Lockdown</span>
                   </div>
                   <p className="text-xs text-muted-foreground leading-relaxed">
                     AI is currently <span className="text-white font-bold">BLOCKED</span> from deleting any Production RDS instance regardless of IAM permissions.
                   </p>
                </div>
                <Button variant="link" size="sm" className="h-auto p-0 text-primary text-[10px] gap-1">
                   Request temporary bypass <ArrowRight className="w-3 h-3" />
                </Button>
             </CardContent>
           </Card>

           <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20 space-y-4">
              <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <Info className="w-4 h-4 text-primary" />
                 </div>
                 <h4 className="text-xs font-bold uppercase tracking-widest">Compliance Status</h4>
              </div>
              <div className="space-y-3">
                 {[
                   { label: 'SOX Compliance', status: 'PASS' },
                   { label: 'PCI-DSS v4.0', status: 'PASS' },
                   { label: 'HIPAA Residency', status: 'PASS' },
                   { label: 'AWS Foundational Security', status: '94%' }
                 ].map(item => (
                   <div key={item.label} className="flex justify-between items-center text-[10px]">
                      <span className="text-muted-foreground font-medium">{item.label}</span>
                      <span className={cn(
                        "font-mono font-bold",
                        item.status === 'PASS' ? "text-green-500" : "text-primary"
                      )}>{item.status}</span>
                   </div>
                 ))}
              </div>
              <Separator className="bg-primary/20" />
              <Button size="sm" className="w-full bg-primary text-white h-8 text-[10px] uppercase">Generate Executive Report</Button>
           </div>
        </div>
      </div>
    </div>
  );
}
