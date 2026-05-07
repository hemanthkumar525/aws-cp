import React from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { Badge } from '../../../components/ui/badge';
import { latencyData } from '../../data/mock';

export function CloudWatchChart({ title, data = latencyData }: { title: string, data?: any[] }) {
  return (
    <div className="card-aws flex flex-col h-full min-h-[300px]">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-[11px] font-bold uppercase tracking-wider text-text-dim">{title}</h3>
        <div className="flex items-center gap-3">
          <Badge className="badge-minimal badge-green tracking-tighter">Live</Badge>
          <span className="text-[10px] text-text-dim/80 font-mono italic">P99 Latency (ms)</span>
        </div>
      </div>
      <div className="flex-1 w-full mt-auto">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0073bb" stopOpacity={0.2}/>
                <stop offset="95%" stopColor="#0073bb" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#30363d" />
            <XAxis 
              dataKey="time" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 9, fill: '#9ea7af' }} 
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 9, fill: '#9ea7af' }} 
            />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1c2126', border: '1px solid #30363d', fontSize: '11px', borderRadius: '2px' }}
              itemStyle={{ color: '#f1f3f3', padding: 0 }}
              labelStyle={{ color: '#9ea7af', marginBottom: '4px', fontWeight: 'bold' }}
            />
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke="#0073bb" 
              strokeWidth={1.5}
              fillOpacity={1} 
              fill="url(#colorValue)" 
              animationDuration={1000}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
