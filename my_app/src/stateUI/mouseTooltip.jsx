import { useState } from 'react';

export default function TooltipExample() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div style={{ position: 'relative' }}>
      <button
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        마우스를 올려보세요
      </button>
      {showTooltip && (
        <div
          style={{
            position: 'absolute',
            top: '-30px',
            backgroundColor: 'black',
            color: 'white',
            padding: '5px',
          }}
        >
          도움말 메시지
        </div>
      )}
    </div>
  );
}
