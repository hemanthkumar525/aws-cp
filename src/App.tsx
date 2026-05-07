import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from '../components/ui/sonner';
//import { Shell } from '../../components/layout/Shell';
import { Shell} from './components/layout/Shell'
// Pages
import Dashboard from './pages/Dashboard';
import AiOperations from './pages/AiOperations';
import Incidents from './pages/Incidents';
import Monitoring from './pages/Monitoring';
import CloudTrail from './pages/CloudTrail';
import Guardrails from './pages/Guardrails';
import Agents from './pages/Agents';
import Approvals from './pages/Approvals';
import Settings from './pages/Settings';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Shell />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/ai-ops" element={<AiOperations />} />
          <Route path="/incidents" element={<Incidents />} />
          <Route path="/monitoring" element={<Monitoring />} />
          <Route path="/audit" element={<CloudTrail />} />
          <Route path="/guardrails" element={<Guardrails />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/approvals" element={<Approvals />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
      <Toaster position="bottom-right" richColors />
    </BrowserRouter>
  );
}
