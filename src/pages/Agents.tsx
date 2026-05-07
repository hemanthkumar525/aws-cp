import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { mockAgents } from '../data/mock';
import { Bot, Cpu, Zap, Activity, ShieldCheck, History, Settings2, ArrowRight } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Progress } from '../components/ui/progress';
import { cn } from '../../lib/utils';

export default function Agents() {
  return (
    <div className="space-y-8 max-w-[1400px] mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white mb-1">AI Agent Orchestration</h1>
          <p className="text-muted-foreground text-sm flex items-center gap-2">
            Monitor and coordinate specialized AI agents across your infrastructure
          </p>
        </div>
        <div className="flex items-center gap-2">
           <Button variant="outline" size="sm" className="bg-white/5 border-white/10 gap-2">
            <Settings2 className="w-3.5 h-3.5" />
            Global Agent Config
          </Button>
          <Button size="sm" className="bg-primary hover:bg-primary/90 text-white shadow-[0_0_15px_rgba(34,211,238,0.2)]">
            Deploy New Agent
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {mockAgents.map((agent) => (
          <Card key={agent.id} className="bg-aws-squid-ink border-border/50 group hover:border-primary/50 transition-all flex flex-col">
            <CardHeader className="pb-4 relative">
              <div className="absolute top-4 right-4">
                <Badge className={cn(
                  "text-[10px] uppercase",
                  agent.status === 'active' ? "bg-green-500/20 text-green-500 border-green-500/30" : 
                  agent.status === 'busy' ? "bg-primary/20 text-primary border-primary/30" : 
                  "bg-muted/20 text-muted-foreground border-muted/30"
                )}>
                  {agent.status}
                </Badge>
              </div>
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-2xl bg-card border border-border/50 flex items-center justify-center text-primary group-hover:scale-110 transition-transform shadow-inner">
                    <Bot className="w-6 h-6" />
                 </div>
                 <div>
                    <CardTitle className="text-lg">{agent.name}</CardTitle>
                    <CardDescription className="text-xs uppercase tracking-tight">{agent.role}</CardDescription>
                 </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 flex-1">
               <div className="p-3 rounded-lg bg-background border border-border/50">
                  <div className="flex items-center justify-between mb-2">
                     <span className="text-[10px] font-bold text-muted-foreground uppercase flex items-center gap-1">
                        <Activity className="w-3 h-3" />
                        Current Task
                     </span>
                     <span className="text-[10px] font-mono text-primary italic">In Execution</span>
                  </div>
                  <p className="text-xs text-foreground font-medium line-clamp-1">{agent.lastAction}</p>
               </div>

               <div className="space-y-2">
                  <div className="flex justify-between items-end">
                     <span className="text-[10px] font-bold text-muted-foreground uppercase">Reasoning Confidence</span>
                     <span className="text-xs font-mono text-white">{(agent.confidence * 100).toFixed(0)}%</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                     <div 
                        className="h-full bg-gradient-to-r from-primary to-primary-foreground transition-all duration-1000" 
                        style={{ width: `${agent.confidence * 100}%` }}
                     />
                  </div>
               </div>

               <div className="space-y-2">
                  <span className="text-[10px] font-bold text-muted-foreground uppercase">Tools & Integrations</span>
                  <div className="flex flex-wrap gap-1.5">
                     {agent.toolsUsed.map(tool => (
                        <Badge key={tool} variant="secondary" className="bg-white/5 border border-white/5 text-[9px] px-1.5 py-0">
                           {tool}
                        </Badge>
                     ))}
                  </div>
               </div>
            </CardContent>
            <CardFooter className="border-t border-border/20 pt-4 bg-white/5 justify-between">
               <Button variant="ghost" size="sm" className="text-[10px] px-2 h-7 gap-1 group-hover:text-primary transition-colors">
                  <History className="w-3 h-3" /> Logs
               </Button>
               <Button size="sm" className="text-[10px] bg-primary/10 text-primary border border-primary/20 h-7 hover:bg-primary hover:text-white transition-all disabled:opacity-50">
                  Manage Control
               </Button>
            </CardFooter>
          </Card>
        ))}

        <Card className="bg-transparent border border-dashed border-border/50 flex flex-col items-center justify-center p-8 text-center hover:bg-white/5 transition-all cursor-pointer group">
           <div className="w-16 h-16 rounded-full border border-dashed border-border/50 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-primary group-hover:text-primary transition-all">
              <Zap className="w-8 h-8 text-muted-foreground group-hover:text-primary" />
           </div>
           <h3 className="text-sm font-bold uppercase tracking-widest text-[#7d8998]">Custom Agent</h3>
           <p className="text-xs text-muted-foreground mt-2 max-w-[200px]">Define specific operational goals and provision an autonomous agent.</p>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8">
         <Card className="bg-aws-squid-ink border-border/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
               <ShieldCheck className="w-32 h-32" />
            </div>
            <CardHeader>
               <CardTitle className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Governance Engine</CardTitle>
            </CardHeader>
            <CardContent>
               <div className="space-y-4">
                  <p className="text-sm text-foreground leading-relaxed italic pr-12">
                    "Agents are strictly monitored by regional governance policies. Any action exceeding <span className="text-primary">$5,000</span> hourly spend or modifying <span className="text-aws-orange">production database snapshots</span> triggers a mandatory human-in-the-loop approval."
                  </p>
                  <Button variant="link" size="sm" className="h-auto p-0 uppercase text-[10px] tracking-widest flex items-center gap-2">
                     Modify Boundaries <ArrowRight className="w-3 h-3" />
                  </Button>
               </div>
            </CardContent>
         </Card>

         <Card className="bg-aws-squid-ink border-border/50">
            <CardHeader className="pb-2">
               <CardTitle className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Regional Orchestration</CardTitle>
            </CardHeader>
            <CardContent>
               <div className="space-y-4 pt-2">
                  {[
                    { region: 'us-east-1', load: 85, active: 12 },
                    { region: 'eu-west-1', load: 32, active: 4 },
                    { region: 'ap-southeast-1', load: 12, active: 1 }
                  ].map(reg => (
                    <div key={reg.region} className="flex items-center gap-4">
                       <span className="text-xs font-mono w-24 shrink-0">{reg.region}</span>
                       <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                          <div className={cn(
                            "h-full rounded-full",
                            reg.load > 80 ? "bg-red-500" : reg.load > 50 ? "bg-aws-orange" : "bg-green-500"
                          )} style={{ width: `${reg.load}%` }} />
                       </div>
                       <span className="text-[10px] font-bold w-12 text-right">{reg.active} Agents</span>
                    </div>
                  ))}
               </div>
            </CardContent>
         </Card>
      </div>
    </div>
  );
}
