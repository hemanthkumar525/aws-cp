import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { 
  Bot, 
  Terminal, 
  CheckCircle2, 
  Search, 
  Cpu, 
  Network,
  ArrowRight,
  ShieldCheck,
  History
} from 'lucide-react';
import { ScrollArea } from '../../components/ui/scroll-area';
import { Separator } from '../../components/ui/separator';

export default function AiOperations() {
  return (
    <div className="space-y-8 max-w-[1400px] mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white mb-1">AI Operations Center</h1>
        <p className="text-muted-foreground text-sm flex items-center gap-2">
          Real-time incident investigation and autonomous remediation
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[calc(100vh-250px)]">
        {/* Left: Investigation Command */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <Card className="bg-aws-squid-ink border-border/50 flex flex-col">
            <CardHeader className="border-b border-border/20 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                    <Terminal className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Incident #INC-2024-001</CardTitle>
                    <CardDescription className="text-xs">Investigation: High 5xx Web Layer Errors</CardDescription>
                  </div>
                </div>
                <Badge className="bg-red-500/20 text-red-400 border-red-500/30 uppercase text-[10px]">Critical</Badge>
              </div>
            </CardHeader>
            <CardContent className="flex-1 p-0 overflow-hidden flex flex-col">
              <ScrollArea className="flex-1 p-6">
                <div className="space-y-6">
                  {/* Step 1 */}
                  <div className="flex gap-4">
                    <div className="mt-1">
                      <div className="w-6 h-6 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-[10px] font-bold">1</div>
                    </div>
                    <div className="flex-1 p-4 rounded-xl bg-white/5 border border-white/5">
                      <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Observation</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Detecting 15% Error Rate (5xx) on <span className="text-primary underline">marketing-alb-east1</span>. Spike correlated with <span className="text-foreground font-medium italic">v1.2.4 Deployment</span> at 10:12:00 UTC.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-4">
                    <div className="mt-1">
                       <div className="w-6 h-6 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-[10px] font-bold">2</div>
                    </div>
                    <div className="flex-1 p-4 rounded-xl bg-white/5 border border-white/5">
                      <p className="text-xs font-bold uppercase tracking-widest text-[#ff9900] mb-2">Automated Tool Usage</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="outline" className="text-[10px] gap-1 bg-white/5 border-white/10"><Cpu className="w-2.5 h-2.5" /> ECS:DescribeTasks</Badge>
                        <Badge variant="outline" className="text-[10px] gap-1 bg-white/5 border-white/10"><Network className="w-2.5 h-2.5" /> CloudWatch:GetLogEvents</Badge>
                        <Badge variant="outline" className="text-[10px] gap-1 bg-white/5 border-white/10"><History className="w-2.5 h-2.5" /> X-Ray:GetTraceSummaries</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Trace analysis identifies <span className="text-red-400 font-medium">unhandled exception</span> in <span className="font-mono text-[11px] bg-red-400/10 px-1">auth-middleware@v1.2.4</span>. RDS connection pool is exhausted due to connection leak.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex gap-4">
                    <div className="mt-1">
                       <div className="w-6 h-6 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center text-[10px] font-bold">3</div>
                    </div>
                    <div className="flex-1 p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                      <p className="text-xs font-bold uppercase tracking-widest text-green-400 mb-2">Proposed Resolution</p>
                      <ul className="space-y-3 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2">
                           <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                           Rollback <span className="font-mono text-xs">ecs-service:auth</span> to <span className="font-mono text-xs text-white">v1.2.3</span>
                        </li>
                        <li className="flex items-center gap-2">
                           <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                           Temporarily scale up RDS Instance <span className="font-mono text-xs">db-prod-01</span> to handle stale connections
                        </li>
                      </ul>
                      <div className="mt-4 pt-4 border-t border-green-500/20 flex gap-3">
                         <Button size="sm" className="bg-green-600 hover:bg-green-700 text-xs gap-2">
                            Approve Rollback
                         </Button>
                         <Button size="sm" variant="outline" className="text-xs border-green-500/50 hover:bg-green-500/10">
                            View Simulation
                         </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollArea>

              <div className="p-4 border-t border-border/20 bg-background/50">
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                    <Bot className="w-4 h-4 text-primary" />
                  </div>
                  <input 
                    type="text" 
                    placeholder="Ask AI to investigate further, or request manual control..." 
                    className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-12 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/50"
                  />
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-2">
                    <kbd className="hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border border-white/10 bg-white/5 px-1.5 font-mono text-[10px] font-medium opacity-100">
                      <span className="text-xs">⌘</span>K
                    </kbd>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right: Context & Assets */}
        <div className="space-y-6">
           <Card className="bg-aws-squid-ink border-border/50">
             <CardHeader className="pb-2">
                <CardTitle className="text-xs uppercase tracking-widest text-muted-foreground">Resource Information</CardTitle>
             </CardHeader>
             <CardContent className="space-y-4">
                <div className="flex justify-between items-center text-sm">
                   <span className="text-muted-foreground">Service Name</span>
                   <span className="font-mono text-xs">ecs:marketing-service</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                   <span className="text-muted-foreground">Region</span>
                   <span className="font-mono text-xs">us-east-1</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                   <span className="text-muted-foreground">Cluster</span>
                   <span className="font-mono text-xs">arn:aws:cluster:prod</span>
                </div>
                <Separator className="bg-white/5" />
                <div className="space-y-2">
                   <span className="text-[10px] font-bold text-muted-foreground uppercase">Associated Alerts</span>
                   <div className="space-y-1">
                      <Badge variant="destructive" className="w-full justify-start gap-2 bg-red-400/10 text-red-400 border-red-400/20">
                         CPU Utilization {'>'} 85%
                      </Badge>
                      <Badge variant="destructive" className="w-full justify-start gap-2 bg-red-400/10 text-red-400 border-red-400/20">
                         Memory Leak Anomaly
                      </Badge>
                   </div>
                </div>
             </CardContent>
           </Card>

           <Card className="bg-aws-squid-ink border-border/50 border-l-4 border-l-primary/50">
             <CardHeader className="pb-2">
                <CardTitle className="text-xs uppercase tracking-widest text-primary">AI Reasoning Log</CardTitle>
             </CardHeader>
             <CardContent className="space-y-3 pt-2">
                <div className="text-xs text-muted-foreground leading-relaxed">
                  "Analyzing previous 10 incidents of similar signature. The failure pattern in <span className="text-foreground">auth-service</span> strongly indicates a regression in dependency <span className="font-mono text-primary italic">aws-sdk-go-v2</span>. Comparing codebase changes via CodeCommit..."
                </div>
                <div className="flex items-center gap-2 p-2 rounded bg-white/5 hover:bg-white/10 cursor-pointer transition-all border border-transparent hover:border-white/10">
                   <ShieldCheck className="w-4 h-4 text-green-500" />
                   <span className="text-[10px] font-medium">Guardrail check: OK</span>
                   <ArrowRight className="w-3 h-3 ml-auto text-muted-foreground" />
                </div>
             </CardContent>
           </Card>

           <div className="p-6 rounded-2xl bg-gradient-to-br from-[#ff9900]/10 to-transparent border border-[#ff9900]/20">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#ff9900] mb-2">AWS Recommendation</h4>
              <p className="text-xs text-[#d5dbdb] leading-normal mb-4 italic">
                CloudPulse AI suggests migrating this workload to <span className="text-white font-medium">Fargate Capacity Providers</span> to handle erratic traffic spikes more efficiently.
              </p>
              <Button size="sm" variant="outline" className="w-full text-[10px] h-8 border-[#ff9900]/30 hover:bg-[#ff9900]/10 hover:text-[#ff9900]">
                Learn about Capacity Providers
              </Button>
           </div>
        </div>
      </div>
    </div>
  );
}
