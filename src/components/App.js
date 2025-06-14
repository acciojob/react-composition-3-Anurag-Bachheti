import React from 'react';
import Tooltip from './Tooltip';

function App() {
  return (
    <div style={{ margin: '50px', display: 'flex', flexDirection: 'column', gap: '40px' }}>
      <Tooltip text="This is a tooltip">
        <span>Hover over me</span>
      </Tooltip>

      <Tooltip text="This is another tooltip">
        <span>Hover over me to see another tooltip</span>
      </Tooltip>
    </div>
  );
}

export default App;
