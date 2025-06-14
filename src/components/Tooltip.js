import React, { useState } from 'react';

function Tooltip({ text, children }) {
  const [show, setShow] = useState(false);

  return (
    <div
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <div>{children}</div>
      {show && <div>{text}</div>}
    </div>
  );
}

export default Tooltip;
