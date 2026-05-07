import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Terminal, 
  AlertCircle, 
  Activity, 
  ShieldCheck, 
  History, 
  Bot, 
  CheckSquare, 
  Settings,
  Bell,
  Search,
  Cloud,
  ChevronRight,
  Database
} from 'lucide-react';
import { cn } from '../../../lib/utils';
import { Button } from '../../../components/ui/button';
import { Badge } from '../../../components/ui/badge';
import { ScrollArea } from '../../../components/ui/scroll-area';
import { Separator } from '../../../components/ui/separator';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: Terminal, label: 'AI Operations', path: '/ai-ops' },
  { icon: AlertCircle, label: 'Incidents', path: '/incidents' },
  { icon: Activity, label: 'Monitoring', path: '/monitoring' },
  { icon: History, label: 'Audit Logs', path: '/audit' },
  { icon: ShieldCheck, label: 'IAM Guardrails', path: '/guardrails' },
  { icon: Bot, label: 'AI Agents', path: '/agents' },
  { icon: CheckSquare, label: 'Approvals', path: '/approvals' },
];

export function Shell() {
  return (
    <div className="flex h-screen w-full bg-aws-bg overflow-hidden text-text-bright">
      {/* Sidebar */}
      <aside className="w-[220px] flex flex-col border-r border-aws-border bg-aws-sidebar shrink-0">
        <div className="h-12 px-4 flex items-center gap-3 shrink-0">
          <div className="w-6 h-6 rounded bg-aws-orange flex items-center justify-center font-bold text-white text-xs">AI</div>
          <span className="font-bold tracking-tight text-sm uppercase italic">CloudPulse</span>
        </div>

        <ScrollArea className="flex-1">
          <div className="py-4">
            <h4 className="px-4 text-[10px] font-bold uppercase tracking-widest text-text-dim mb-2">Operational Control</h4>
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "sidebar-item",
                    isActive && "active"
                  )
                }
              >
                <item.icon className="w-4 h-4 mr-3 shrink-0" />
                <span>{item.label}</span>
              </NavLink>
            ))}
          </div>
          
          {/*<div className="mt-4">
            <h4 className="px-4 text-[10px] font-bold uppercase tracking-widest text-text-dim mb-2">Governance & Security</h4>
            <div className="sidebar-item">
              <Database className="w-4 h-4 mr-3" />
              <span>Resources</span>
            </div>
          </div>*/}
        </ScrollArea>

        <div className="mt-auto p-4 bg-aws-bg text-[10px] border-t border-aws-border">
          <div className="flex justify-between mb-1">
            <span className="text-text-dim">Bedrock Quota</span>
            <span className="text-text-bright">72%</span>
          </div>
          <div className="w-full bg-aws-border h-1 rounded-full">
            <div className="bg-aws-orange h-1 rounded-full w-[72%]"></div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <header className="h-12 border-b border-aws-border flex items-center justify-between px-4 bg-aws-sidebar shrink-0">
          <div className="flex items-center gap-4 flex-1">
            <div className="flex items-center gap-2 text-xs font-medium">
              <span className="text-text-dim">AWS Console</span>
              <span className="text-aws-border">/</span>
              <span>DevOps Assistant</span>
              <Badge className="badge-minimal badge-blue ml-2">Enterprise PoC</Badge>
            </div>
            <div className="relative max-w-sm w-full mx-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-text-dim" />
              <input 
                type="text" 
                placeholder="Search AWS MCP agents, incidents, or logs..." 
                className="w-full bg-aws-bg border border-aws-border rounded h-8 px-10 text-[11px] outline-none focus:border-aws-orange transition-all placeholder:text-text-dim/50"
              />
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs font-medium">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-status-green"></div>
              <span>US East (N. Virginia)</span>
            </div>
            <div className="flex items-center gap-4">
              <Bell className="w-4 h-4 text-text-dim cursor-pointer hover:text-text-bright" />
              <div className="w-8 h-8 rounded-full bg-aws-border flex items-center justify-center text-[10px] font-bold">AD</div>
            </div>
          </div>
        </header>

        {/* Dashboard Area */}
        <main className="flex-1 overflow-y-auto bg-aws-bg relative shadow-inner">
           <div className="p-6">
              <Outlet />
           </div>
        </main>

        <footer className="h-6 bg-aws-sidebar border-t border-aws-border flex items-center px-4 text-[10px] text-text-dim justify-between shrink-0">
          <div className="flex gap-4">
            <span>System Health: <span className="text-status-green">Operational</span></span>
            <span>MCP Protocol: <span className="text-aws-blue">Connected v2.1</span></span>
            <span>Active Agents: 4</span>
          </div>
          <div>&copy; 2024 Enterprise AI DevOps Platform</div>
        </footer>
      </div>
    </div>
  );
}
