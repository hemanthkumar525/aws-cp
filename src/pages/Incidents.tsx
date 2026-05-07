import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { mockIncidents } from '../data/mock';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';
import { AlertCircle, Terminal } from 'lucide-react';
import { cn } from '../../lib/utils';

export default function Incidents() {
  return (
    <div className="space-y-8 max-w-[1400px] mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white mb-1">Incident Management</h1>
        <p className="text-muted-foreground text-sm">Active service interruptions and agent-led investigations</p>
      </div>

      <Card className="bg-aws-squid-ink border-border/50">
        <Table>
          <TableHeader>
            <TableRow className="border-border/20">
              <TableHead>Incident</TableHead>
              <TableHead>Severity</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Resource</TableHead>
              <TableHead>Assigned Agent</TableHead>
              <TableHead>Impact Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockIncidents.map((inc) => (
              <TableRow key={inc.id} className="border-border/10">
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                      <AlertCircle className="w-4 h-4 text-red-500" />
                    </div>
                    <div>
                       <p className="text-sm font-medium">{inc.title}</p>
                       <p className="text-[10px] font-mono text-muted-foreground">{inc.id}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                   <Badge className={cn(
                     "text-[10px] uppercase",
                     inc.severity === 'critical' ? "bg-red-500/20 text-red-500 border-red-500/30" : "bg-yellow-500/20 text-yellow-500 border-yellow-500/30"
                   )}>{inc.severity}</Badge>
                </TableCell>
                <TableCell>
                   <Badge variant="outline" className="text-[10px] uppercase font-mono">{inc.status}</Badge>
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">{inc.resource}</TableCell>
                <TableCell>
                   <div className="flex items-center gap-2">
                     <Terminal className="w-3.5 h-3.5 text-primary" />
                     <span className="text-xs">AI-Agent-DevOps</span>
                   </div>
                </TableCell>
                <TableCell className="text-xs text-muted-foreground">34m ago</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
