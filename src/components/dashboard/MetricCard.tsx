import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { CloudMetric } from '../../types';
import { TrendingDown, TrendingUp, Minus } from 'lucide-react';
import { cn } from '../../../lib/utils';

export function MetricCard({ metric }: { metric: CloudMetric }) {
  const Icon = metric.trend === 'up' ? TrendingUp : metric.trend === 'down' ? TrendingDown : Minus;
  
  return (
    <div className={cn(
      "card-aws flex flex-col justify-between",
      metric.status === 'healthy' ? "border-l-4 border-l-status-green" :
      metric.status === 'warning' ? "border-l-4 border-l-aws-orange" :
      "border-l-4 border-l-status-red"
    )}>
      <div className="stat-label mb-1">{metric.name}</div>
      <div className={cn(
        "stat-value tracking-tight",
        metric.status === 'critical' ? "text-status-red" : "text-text-bright"
      )}>
        {metric.value}<span className="text-xs font-normal text-text-dim ml-1">{metric.unit}</span>
      </div>
      <div className="flex items-center justify-between mt-2">
        <div className={cn(
          "text-[10px] font-bold flex items-center gap-1",
          metric.trend === 'up' && metric.status !== 'healthy' ? "text-status-red" : 
          metric.trend === 'down' && metric.status === 'healthy' ? "text-status-green" : 
          "text-text-dim"
        )}>
          <span className="font-bold">{metric.trend === 'up' ? '▲' : metric.trend === 'down' ? '▼' : '•'}</span>
          {metric.change}
        </div>
        <div className="text-[10px] text-text-dim/60 uppercase">Last 60m</div>
      </div>
    </div>
  );
}
