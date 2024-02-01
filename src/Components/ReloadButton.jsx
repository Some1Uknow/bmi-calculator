import React from 'react';

export default function ReloadButton() {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div id="reload-btn">
      <button onClick={handleReload}>Retry</button>
    </div>
  );
}
