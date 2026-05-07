import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/card';
import { Settings, User, Bell, Shield, Cloud } from 'lucide-react';
import { Separator } from '../../components/ui/separator';

export default function SettingsPage() {
  return (
    <div className="space-y-8 max-w-[1400px] mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white mb-1">Settings</h1>
        <p className="text-muted-foreground text-sm">Configure your CloudPulse AI Ops preferences</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1 space-y-1">
          {[
            { icon: User, label: 'Profile' },
            { icon: Bell, label: 'Notifications' },
            { icon: Shield, label: 'Security' },
            { icon: Cloud, label: 'Cloud Providers' },
          ].map(item => (
            <div key={item.label} className="flex items-center gap-3 px-4 py-2 text-sm text-muted-foreground hover:bg-white/5 hover:text-white rounded-md cursor-pointer transition-all">
              <item.icon className="w-4 h-4" />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
        
        <Card className="md:col-span-3 bg-aws-squid-ink border-border/50">
          <CardHeader>
             <CardTitle className="text-lg">General Configuration</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-1">
               <h4 className="text-sm font-medium">Console Theme</h4>
               <p className="text-xs text-muted-foreground italic mb-2 italic">Enterprise Dark Mode is the standard for CloudPulse.</p>
               <div className="w-32 h-20 rounded border-2 border-primary bg-background" />
            </div>
            <Separator className="bg-white/5" />
            <div className="space-y-1">
               <h4 className="text-sm font-medium">AI Reasoning Level</h4>
               <p className="text-xs text-muted-foreground">Adjust how verbose the AI agents are in their reasoning summaries.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
