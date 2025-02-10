// src/components/Dashboard/MainContent.jsx
import React from 'react';

export default function MainContent() {
  return (
    <div style={{ padding: '20px', display: 'flex', flexWrap: 'wrap' }}>
      <div style={{ flex: '1 1 30%', margin: '10px', padding: '20px', backgroundColor: '#fff', borderRadius: '8px' }}>
        <h3>Orders</h3>
        <p>$12,816</p>
      </div>
      <div style={{ flex: '1 1 30%', margin: '10px', padding: '20px', backgroundColor: '#fff', borderRadius: '8px' }}>
        <h3>Revenue</h3>
        <p>$12,816</p>
      </div>
      <div style={{ flex: '1 1 30%', margin: '10px', padding: '20px', backgroundColor: '#fff', borderRadius: '8px' }}>
        <h3>Total Sales</h3>
        <p>$12,816</p>
      </div>
    </div>
  );
}
