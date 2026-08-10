import React from 'react';

export default function ResumePage() {
  return (
    <div className="p5-card">
      <h2 className="p5-card-title">COOPERATIVE / EXP</h2>
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <li style={{ borderLeft: '4px solid var(--p5-red)', paddingLeft: '1rem' }}>
          <strong style={{ color: 'var(--p5-yellow)' }}>ROBOTICS ENGINEER</strong>
          <p style={{ fontSize: '0.9rem', color: '#aaa' }}>Focusing on ROS 2 & Microcontrollers</p>
        </li>
        <li style={{ borderLeft: '4px solid var(--p5-red)', paddingLeft: '1rem' }}>
          <strong style={{ color: 'var(--p5-yellow)' }}>COMPUTER VISION & AI</strong>
          <p style={{ fontSize: '0.9rem', color: '#aaa' }}>Object Detection & Edge Computing</p>
        </li>
      </ul>
    </div>
  );
}