import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';
import { mockAuditEvents } from '../data/mock';
import { Search, Filter, Download, ShieldCheck, History, AlertTriangle } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { ScrollArea } from '../../components/ui/scroll-area';
import { cn } from '../../lib/utils';

export default function CloudTrail() {
  return (
    <div className="space-y-8 max-w-[1400px] mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white mb-1">CloudTrail Audit</h1>
          <p className="text-muted-foreground text-sm flex items-center gap-2">
            Immutable audit logs with AI-assisted threat hunting
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="bg-white/5 border-white/10 gap-2">
            <Filter className="w-3.5 h-3.5" />
            Filter
          </Button>
          <Button variant="outline" size="sm" className="bg-white/5 border-white/10 gap-2">
            <Download className="w-3.5 h-3.5" />
            Export Logs
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <Card className="bg-aws-squid-ink border-border/50">
            <CardHeader className="pb-2">
               <CardTitle className="text-xs uppercase tracking-widest text-muted-foreground">Total Events (24h)</CardTitle>
            </CardHeader>
            <CardContent>
               <div className="text-2xl font-bold">142,827</div>
               <div className="text-[10px] text-green-400 font-bold flex items-center gap-1 mt-1">
                  <ShieldCheck className="w-3 h-3" />
                  99.9% INTEGRITY VERIFIED
               </div>
            </CardContent>
         </Card>
         <Card className="bg-aws-squid-ink border-border/50">
            <CardHeader className="pb-2">
               <CardTitle className="text-xs uppercase tracking-widest text-muted-foreground">AI Actions Policy-Filtered</CardTitle>
            </CardHeader>
            <CardContent>
               <div className="text-2xl font-bold">1,420</div>
               <div className="text-[10px] text-primary font-bold flex items-center gap-1 mt-1 uppercase">
                  Zero Anomalies Found
               </div>
            </CardContent>
         </Card>
         <Card className="bg-aws-squid-ink border-border/50">
            <CardHeader className="pb-2">
               <CardTitle className="text-xs uppercase tracking-widest text-muted-foreground">Threat Warnings</CardTitle>
            </CardHeader>
            <CardContent>
               <div className="text-2xl font-bold text-red-500">2</div>
               <div className="text-[10px] text-red-400 font-bold flex items-center gap-1 mt-1 uppercase">
                  Manual Review Required
               </div>
            </CardContent>
         </Card>
      </div>

      <Card className="bg-aws-squid-ink border-border/50 overflow-hidden">
        <div className="p-4 border-b border-border/20 bg-white/5 flex items-center gap-4">
           <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search resources, event types, or users..." 
                className="w-full bg-background border-none rounded-md py-1.5 pl-10 pr-4 text-sm focus:ring-1 focus:ring-primary/50"
              />
           </div>
          <div className="flex items-center gap-2">
             <Badge className="bg-primary/10 text-primary border-primary/20 text-[10px] font-mono">24H RANGE</Badge>
          </div>
        </div>
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-white/5 italic font-serif">
              <TableRow className="border-border/20 hover:bg-transparent">
                <TableHead className="w-[180px]">Timestamp (UTC)</TableHead>
                <TableHead>Event User</TableHead>
                <TableHead>Action</TableHead>
                <TableHead>Resource ARN</TableHead>
                <TableHead>Verdict</TableHead>
                <TableHead className="text-right">Origin</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockAuditEvents.map((event) => (
                <TableRow key={event.id} className="border-border/10 hover:bg-white/5 group">
                  <TableCell className="font-mono text-xs text-muted-foreground">
                    {new Date(event.timestamp).toLocaleTimeString()}
                  </TableCell>
                  <TableCell className="font-medium text-sm">
                    <div className="flex items-center gap-2">
                       {event.aiAssisted ? <ShieldCheck className="w-3.5 h-3.5 text-primary" /> : <div className="w-3.5 h-3.5 rounded-full bg-muted-foreground/20" />}
                       {event.user}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="font-mono text-[10px] bg-white/5 border-white/10 uppercase group-hover:border-primary/30 transition-colors">
                      {event.action}
                    </Badge>
                  </TableCell>
                  <TableCell>
                     <span className="text-xs font-mono text-muted-foreground truncate max-w-[200px] block" title={event.resource}>
                        {event.resource}
                     </span>
                  </TableCell>
                  <TableCell>
                    <Badge className={cn(
                      "text-[9px] uppercase tracking-tighter",
                      event.status === 'approved' ? "bg-green-500/20 text-green-500 border-green-500/30" : 
                      event.status === 'denied' ? "bg-red-500/20 text-red-500 border-red-500/30" :
                      "bg-yellow-500/20 text-yellow-500 border-yellow-500/30"
                    )}>
                      {event.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <span className="text-[10px] font-mono text-muted-foreground uppercase">us-east-1</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
      <div className="flex items-center justify-between text-xs text-muted-foreground italic px-2">
         <div className="flex items-center gap-2">
            <AlertTriangle className="w-3 h-3 text-yellow-500" />
            Showing last 1,000 events. Use <span className="text-white hover:underline cursor-pointer">Athena</span> for deep history.
         </div>
         <div>Page 1 of 42</div>
      </div>
    </div>
  );
}
