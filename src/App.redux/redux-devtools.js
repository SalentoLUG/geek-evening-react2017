import React from 'react';

// createDevTools is exported from redux-devtools
import { createDevTools } from 'redux-devtools';

// more Monitors comes from other npm packages
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

// createDevTools takes a monitor and produces a DevTools React component
const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey='alt-h'
               changePositionKey='alt-q'
               defaultIsVisible={false}>
    <LogMonitor theme='tomorrow' />
  </DockMonitor>
);

export default DevTools;
