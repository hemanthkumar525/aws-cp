import React from 'react';
import { CloudWatchChart } from '../components/dashboard/CloudWatchChart';

export default function Monitoring() {
  return (
    <div className="space-y-8 max-w-[1400px] mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white mb-1">CloudWatch Monitoring</h1>
        <p className="text-muted-foreground text-sm">Real-time observability and anomaly detection</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         <CloudWatchChart title="CPU Utilization" />
         <CloudWatchChart title="Memory usage" />
         <CloudWatchChart title="Network In/Out" />
         <CloudWatchChart title="Disk IOPS" />
      </div>
    </div>
  );
}
