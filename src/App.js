import { useState } from 'react';
import Tooltip from './Tooltip';

function App() {
  const [position, setPosition] = useState('top');
  return (
    <div className="App">
      <div style={{display:'flex', alignItems:'center', flexDirection:'column', marginTop:50, gap:80}}>
        <Tooltip position="top" text="Top Tooltip">
          <button>Hover me</button>
        </Tooltip>
        
        <Tooltip position="bottom" text="Bottom Tooltip">
          <button>Hover me</button>
        </Tooltip>

        <Tooltip position="left" text="left Tooltip">
          <button>Hover me</button>
        </Tooltip>

        <Tooltip position="right" text="right Tooltip">
          <button>Hover me</button>
        </Tooltip>
      </div>
    </div>
  );
}

export default App;
