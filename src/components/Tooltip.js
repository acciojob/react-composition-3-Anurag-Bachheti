import React, { useState } from 'react';
import './Tooltip.css';

function Tooltip({ text, children }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="tooltip"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      {isHovered && <div className="tooltiptext">{text}</div>}
    </div>
  );
}

export default Tooltip;
