import React from 'react';
import Tooltip from './Tooltip';

function App() {
  return (
    <div style={{ margin: '50px' }}>
      <Tooltip text="This is a tooltip">
        <div>
          Hover over me
        </div>
      </Tooltip>

      <br /><br />

      <Tooltip text="This is another tooltip">
        <div>
          Hover over me to see another tooltip
        </div>
      </Tooltip>
    </div>
  );
}

export default App;
